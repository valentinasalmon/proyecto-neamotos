"use client";

import { useEffect, useState } from "react";
import { MotoItem } from "@/features/catalog/data/motos";
import AutoCropImage from "@/components/AutoCropImage";

/**
 * MotoCard – Uniforme y coherente (auto)
 * - Marco 4:3 fijo
 * - AutoCropImage v4 recorta/escala y auto-boosta si quedó chica
 * - Sin overrides por modelo
 */
export function MotoCard({ moto }: { moto: MotoItem }) {
  const [src] = useState(moto.img || "/motos/_no-image.png");

  // Padding dinámico por AR (equilibra el “tamaño visual” entre imágenes muy cuadradas vs panorámicas)
  const [autoPad, setAutoPad] = useState(0.06);
  useEffect(() => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    img.onload = () => {
      const ar = img.naturalWidth / img.naturalHeight; // ancho/alto
      const MIN_AR = 1.0, MAX_AR = 2.4;
      const MIN_PAD = 0.04, MAX_PAD = 0.10;
      const t = (Math.min(MAX_AR, Math.max(MIN_AR, ar)) - MIN_AR) / (MAX_AR - MIN_AR);
      const pad = MIN_PAD + t * (MAX_PAD - MIN_PAD);
      setAutoPad(Number(pad.toFixed(3)));
    };
  }, [src]);

  const transmision = moto.transmision ?? "—";
  const potencia = moto.potencia ?? "—";
  const cilindrada = moto.cilindrada ?? "—";

  // Fallback básico por si el import se rompe
  const Img = (AutoCropImage as any) ?? (({ src, alt }: any) => (
    <img src={src} alt={alt} className="w-full h-full object-contain" />
  ));

  return (
    <article
      className="
        group relative bg-white border border-neutral-300 rounded-none
        shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]
        transition-all duration-300 overflow-hidden
      "
    >
      {/* HEADER */}
      <header className="px-4 sm:px-5 pt-4 pb-3 border-b border-neutral-200">
        <h2 className="text-[17px] sm:text-[19px] font-bold text-neutral-900 leading-tight tracking-tight line-clamp-2">
          {moto.nombre}
        </h2>
        <p className="mt-1 text-[11px] sm:text-[12px] font-medium text-neutral-500 uppercase tracking-wide">
          {moto.marca} · {moto.tipo}
        </p>
      </header>

      {/* IMAGEN — marco fijo 4:3, auto-recorte + auto-boost */}
      <div className="relative w-full aspect-[4/3] bg-white border-b border-neutral-200 overflow-hidden flex items-center justify-center">
        <Img
          src={src}
          alt={moto.nombre}
          padding={autoPad}       // balancea tamaños entre fotos diferentes
          minFillPct={0.98}      // llenado mínimo base
          whiteTolerance={245}   // punto de partida del recorte
          aggressive={true}      // prueba más tolerancias si hace falta
          autoBoostSize={true}   // ↑ auto-ajusta tamaño si el contenido útil es chico
          className="absolute inset-0"
          bg="#ffffff"
        />
      </div>

      {/* ESPECIFICACIONES */}
      <div className="px-4 sm:px-5 py-4 sm:py-5 bg-white">
        <div className="grid gap-y-3 gap-x-6 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-3">
            <Spec label="TRANSMISIÓN" value={transmision} />
            <Spec label="CILINDRADA" value={cilindrada} />
          </div>
          <div className="space-y-3">
            <Spec label="POTENCIA" value={potencia} />
          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/5493790000000?text=Hola!%20Quiero%20consultar%20stock%20de%20${encodeURIComponent(
          moto.nombre
        )}`}
        className="
          absolute bottom-3 right-3 sm:bottom-4 sm:right-4
          inline-flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12 rounded-full
          bg-green-500 hover:bg-green-600 active:bg-green-700
          text-white shadow-[0_8px_18px_rgba(0,0,0,0.25)]
          transition-transform duration-200 hover:scale-110
        "
        aria-label={`Consultar stock de ${moto.nombre} por WhatsApp`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]">
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
        </svg>
      </a>
    </article>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] sm:text-[12px] uppercase font-semibold text-neutral-700 tracking-wide">
        {label}
      </div>
      <div className="text-[14px] sm:text-[15px] text-neutral-900 font-medium leading-snug">
        {value}
      </div>
    </div>
  );
}
