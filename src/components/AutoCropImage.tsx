"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  padding?: number;
  minFillPct?: number;
  whiteTolerance?: number;
  bg?: string;
  className?: string;
  aggressive?: boolean;
  autoBoostSize?: boolean;
};

type CacheValue = {
  displaySrc: string;
  intrinsic: { w: number; h: number; areaRatio: number } | null;
};

const CROP_CACHE = new Map<string, CacheValue>();

export default function AutoCropImage({
  src,
  alt,
  padding = 0.05,
  minFillPct = 0.98,
  whiteTolerance = 245,
  bg = "#ffffff",
  className = "",
  aggressive = false,          // ✅ por defecto más liviano
  autoBoostSize = true,
}: Props) {
  const cached = CROP_CACHE.get(src);

  const [displaySrc, setDisplaySrc] = useState<string>(cached?.displaySrc ?? src);
  const [intrinsic, setIntrinsic] = useState<CacheValue["intrinsic"]>(cached?.intrinsic ?? null);

  useEffect(() => {
    // ✅ si ya está cacheado, listo
    const hit = CROP_CACHE.get(src);
    if (hit) {
      setDisplaySrc(hit.displaySrc);
      setIntrinsic(hit.intrinsic);
      return;
    }

    let cancelled = false;

    const tries = aggressive
      ? [whiteTolerance, 242, 240, 238] // ✅ menos intentos
      : [whiteTolerance, 242, 240];

    const work = () => {
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
          let best = { ...chosen, areaRatio: 0, dataUrl: "" };

          for (const tol of tries) {
            const res = cropWhiteBorders(img, tol);
            if (res.areaRatio > best.areaRatio) best = res;
            if (res.areaRatio >= 0.75) {
              chosen = res;
              break;
            }
          }

          if (chosen.dataUrl === "") chosen = best.areaRatio > 0 ? best : chosen;

          const nextIntrinsic = { w: chosen.w, h: chosen.h, areaRatio: chosen.areaRatio };
          const nextDisplaySrc = chosen.dataUrl || src;

          const payload: CacheValue = { displaySrc: nextDisplaySrc, intrinsic: nextIntrinsic };
          CROP_CACHE.set(src, payload);

          setIntrinsic(nextIntrinsic);
          setDisplaySrc(nextDisplaySrc);
        } catch {
          const payload: CacheValue = {
            displaySrc: src,
            intrinsic: { w: baseW, h: baseH, areaRatio: 1 },
          };
          CROP_CACHE.set(src, payload);

          setIntrinsic(payload.intrinsic);
          setDisplaySrc(src);
        }
      };

      img.onerror = () => {
        if (cancelled) return;
        const payload: CacheValue = { displaySrc: src, intrinsic: null };
        CROP_CACHE.set(src, payload);
        setIntrinsic(null);
        setDisplaySrc(src);
      };
    };

    // ✅ correr el recorte cuando el navegador esté libre
    const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void) => number);
    const cic = (window as any).cancelIdleCallback as undefined | ((id: number) => void);

    let idleId: number | null = null;
    if (ric) idleId = ric(work);
    else {
      // fallback
      const t = window.setTimeout(work, 0);
      idleId = t as unknown as number;
    }

    return () => {
      cancelled = true;
      if (idleId != null && cic) cic(idleId);
    };
  }, [src, whiteTolerance, aggressive]);

  const targetPct = useMemo(() => {
    const fill = clamp(minFillPct, 0.9, 0.995);
    const pad = clamp(padding, 0, 0.2);
    let base = fill;

    if (autoBoostSize && intrinsic) {
      const ar = intrinsic.areaRatio;
      let boost = 0;
      if (ar <= 0.55) boost = 0.03;
      else if (ar <= 0.7) boost = 0.02;
      else if (ar <= 0.85) boost = 0.01;

      base = clamp(fill + boost, fill, 0.995);
    }

    return Math.min(1, base * (1 - pad));
  }, [intrinsic, minFillPct, padding, autoBoostSize]);

  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`} style={{ backgroundColor: bg }}>
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

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}

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
    if (a === 0) return true;
    return r >= tolerance && g >= tolerance && b >= tolerance;
  };

  let top = 0, bottom = h - 1, left = 0, right = w - 1;

  scanTop: for (; top < h; top++) {
    for (let x = 0; x < w; x++) {
      const i = (top * w + x) * 4;
      if (!isWhite(i)) break scanTop;
    }
  }
  scanBottom: for (; bottom >= top; bottom--) {
    for (let x = 0; x < w; x++) {
      const i = (bottom * w + x) * 4;
      if (!isWhite(i)) break scanBottom;
    }
  }
  scanLeft: for (; left < w; left++) {
    for (let y = top; y <= bottom; y++) {
      const i = (y * w + left) * 4;
      if (!isWhite(i)) break scanLeft;
    }
  }
  scanRight: for (; right >= left; right--) {
    for (let y = top; y <= bottom; y++) {
      const i = (y * w + right) * 4;
      if (!isWhite(i)) break scanRight;
    }
  }

  const cw = Math.max(1, right - left + 1);
  const ch = Math.max(1, bottom - top + 1);

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
