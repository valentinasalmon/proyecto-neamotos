"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  /** Padding visual extra (0–0.2). */
  padding?: number;
  /** Llenado mínimo del marco (0.90–0.995). */
  minFillPct?: number;
  /** Tolerancia base de blanco (0–255). */
  whiteTolerance?: number;
  /** Color de fondo del marco. */
  bg?: string;
  /** Clases extra del contenedor interno (ocupa todo el marco). */
  className?: string;
  /** Si true, intenta más tolerancias (recorte más agresivo). */
  aggressive?: boolean;
  /** Si true, auto-boosta el tamaño si el contenido útil quedó chico. */
  autoBoostSize?: boolean;
};

/**
 * AutoCropImage v4
 * - Recorte progresivo de bordes blancos (tolerancias decrecientes).
 * - Calcula areaRatio (área útil/área original).
 * - Si autoBoostSize=true, aumenta el tamaño objetivo cuando areaRatio es bajo.
 * - Mantiene proporción, sin recorte del sujeto (object-contain).
 */
export default function AutoCropImage({
  src,
  alt,
  padding = 0.05,
  minFillPct = 0.98,
  whiteTolerance = 245,
  bg = "#ffffff",
  className = "",
  aggressive = true,
  autoBoostSize = true,
}: Props) {
  const [displaySrc, setDisplaySrc] = useState<string>(src);
  const [intrinsic, setIntrinsic] = useState<{ w: number; h: number; areaRatio: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const tries = aggressive
      ? [whiteTolerance, 242, 240, 238, 236, 234, 232, 230]
      : [whiteTolerance, 242, 240, 238, 236];

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.decoding = "async";
    img.src = src;

    img.onload = () => {
      if (cancelled) return;
      const baseW = img.naturalWidth;
      const baseH = img.naturalHeight;

      try {
        let chosen = { w: baseW, h: baseH, dataUrl: "", areaRatio: 1 };
        // Buscamos el primer recorte que deje areaRatio razonable; si ninguno, nos quedamos con el mejor.
        let best = { ...chosen, areaRatio: 0, dataUrl: "" };

        for (const tol of tries) {
          const res = cropWhiteBorders(img, tol);
          if (res.areaRatio > best.areaRatio) best = res;
          // si ya supera 0.75, aceptamos
          if (res.areaRatio >= 0.75) {
            chosen = res;
            break;
          }
        }
        // si ninguno superó 0.75, usamos el mejor encontrado
        if (chosen.dataUrl === "") chosen = best.areaRatio > 0 ? best : chosen;

        setIntrinsic({ w: chosen.w, h: chosen.h, areaRatio: chosen.areaRatio });
        setDisplaySrc(chosen.dataUrl || src);
      } catch {
        // fallback (CORS u otro)
        setIntrinsic({ w: baseW, h: baseH, areaRatio: 1 });
        setDisplaySrc(src);
      }
    };

    img.onerror = () => {
      if (!cancelled) {
        setIntrinsic(null);
        setDisplaySrc(src);
      }
    };

    return () => {
      cancelled = true;
    };
  }, [src, whiteTolerance, aggressive]);

  // Cálculo del tamaño objetivo (auto-boost si quedó chica)
  const targetPct = useMemo(() => {
    // límites
    const fill = clamp(minFillPct, 0.9, 0.995);
    const pad = clamp(padding, 0, 0.2);
    let base = fill;

    if (autoBoostSize && intrinsic) {
      // Si el contenido útil es poco (areaRatio bajo), boosteamos fill levemente.
      // Mapeo simple: areaRatio ≤ 0.55 → boost +0.03; 0.55–0.7 → +0.02; 0.7–0.85 → +0.01.
      const ar = intrinsic.areaRatio;
      let boost = 0;
      if (ar <= 0.55) boost = 0.03;
      else if (ar <= 0.7) boost = 0.02;
      else if (ar <= 0.85) boost = 0.01;

      base = clamp(fill + boost, fill, 0.995);
    }

    // target real aplicando padding visual; nunca mayor a 1.
    return Math.min(1, base * (1 - pad));
  }, [intrinsic, minFillPct, padding, autoBoostSize]);

  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{ backgroundColor: bg }}
    >
      <img
        src={displaySrc}
        alt={alt}
        style={{
          maxHeight: `${Math.round(targetPct * 100)}%`,
          maxWidth: `${Math.round(targetPct * 100)}%`,
          objectFit: "contain",
          display: "block",
        }}
      />
    </div>
  );
}

/** Utils */

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

/**
 * Recorta bordes "blancos". Devuelve:
 * - dataUrl del recorte
 * - dimensiones recortadas
 * - areaRatio: (área recortada) / (área original) 0..1
 */
function cropWhiteBorders(img: HTMLImageElement, tolerance = 245) {
  const w = img.naturalWidth;
  const h = img.naturalHeight;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  canvas.width = w;
  canvas.height = h;
  ctx.drawImage(img, 0, 0);

  const { data } = ctx.getImageData(0, 0, w, h);

  const isWhite = (i: number) => {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
    if (a === 0) return true; // transparente = “aire”
    return r >= tolerance && g >= tolerance && b >= tolerance;
  };

  let top = 0, bottom = h - 1, left = 0, right = w - 1;

  // top
  scanTop: for (; top < h; top++) {
    for (let x = 0; x < w; x++) {
      const i = (top * w + x) * 4;
      if (!isWhite(i)) break scanTop;
    }
  }
  // bottom
  scanBottom: for (; bottom >= top; bottom--) {
    for (let x = 0; x < w; x++) {
      const i = (bottom * w + x) * 4;
      if (!isWhite(i)) break scanBottom;
    }
  }
  // left
  scanLeft: for (; left < w; left++) {
    for (let y = top; y <= bottom; y++) {
      const i = (y * w + left) * 4;
      if (!isWhite(i)) break scanLeft;
    }
  }
  // right
  scanRight: for (; right >= left; right--) {
    for (let y = top; y <= bottom; y++) {
      const i = (y * w + right) * 4;
      if (!isWhite(i)) break scanRight;
    }
  }

  const cw = Math.max(1, right - left + 1);
  const ch = Math.max(1, bottom - top + 1);

  // si todo parece blanco o casi nulo, devolvemos original
  if (cw <= 2 || ch <= 2) {
    return { w, h, dataUrl: canvas.toDataURL(), areaRatio: 1 };
  }

  const out = document.createElement("canvas");
  out.width = cw;
  out.height = ch;
  const octx = out.getContext("2d")!;
  octx.drawImage(canvas, left, top, cw, ch, 0, 0, cw, ch);
  const dataUrl = out.toDataURL("image/png");
  const areaRatio = (cw * ch) / (w * h);

  return { w: cw, h: ch, dataUrl, areaRatio };
}
