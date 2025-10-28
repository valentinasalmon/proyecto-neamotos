"use client";

import Image from "next/image";
import { MotoVisual } from "@/features/catalog/data/motos";

export function MotoCard({ moto }: { moto: MotoVisual }) {
  return (
    <article
      className="
        bg-white
        border border-neutral-300
        rounded-none
        shadow-[0_24px_48px_rgba(0,0,0,0.06)]
        flex flex-col
      "
    >
      {/* HEADER */}
      <div className="px-5 py-4 border-b border-neutral-200">
        <h2 className="text-[18px] font-semibold text-neutral-900 leading-tight">
          {moto.nombre}
        </h2>
        <div className="mt-1 text-[12px] font-medium text-neutral-500 uppercase tracking-wide">
          {moto.marca} · {moto.tipo}
        </div>
      </div>

      {/* IMAGEN */}
      <div className="relative w-full h-[230px] bg-neutral-100 border-b border-neutral-200 flex items-center justify-center">
        <Image
          src={moto.img}
          alt={moto.nombre}
          fill
          className="object-contain p-5"
        />
      </div>

      {/* ESPECIFICACIONES + WHATSAPP */}
      <div className="px-5 py-5 bg-white">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-4
            gap-5
            items-start
          "
        >
          {/* TRANSMISIÓN */}
          <SpecBlock
            label="TRANSMISIÓN"
            value={moto.transmision || "—"}
          />

          {/* POTENCIA */}
          <SpecBlock
            label="POTENCIA"
            value={moto.potencia || "—"}
          />

          {/* CILINDRADA */}
          <SpecBlock
            label="CILINDRADA"
            value={moto.cilindrada || "—"}
          />

          {/* BOTÓN WHATSAPP (solo ícono) */}
          <div className="flex sm:justify-end justify-center mt-2 sm:mt-0">
            <a
              href={`https://wa.me/5493790000000?text=Hola!%20Quiero%20consultar%20stock%20de%20${encodeURIComponent(
                moto.nombre
              )}`}
              className="
                inline-flex items-center justify-center
                w-12 h-12
                rounded-full
                bg-green-500 hover:bg-green-600 active:bg-green-700
                text-white
                shadow-[0_12px_24px_rgba(0,0,0,0.25)]
                transition-all
              "
              aria-label={`Consultar stock de ${moto.nombre} por WhatsApp`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[22px] h-[22px]"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Subcomponente: especificación */
function SpecBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[12px] uppercase font-bold text-neutral-800 tracking-wide">
        {label}
      </div>
      <div className="text-[14px] text-neutral-900 font-medium mt-1 leading-snug">
        {value}
      </div>
    </div>
  );
}
