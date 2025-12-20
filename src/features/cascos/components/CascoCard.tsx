"use client";

import React from "react";
import type { CascoItem } from "@/features/cascos/data/cascos";

export function CascoCard({ item }: { item: CascoItem }) {
  return (
    <article
      className="
        group relative bg-white border border-neutral-300 rounded-none
        shadow-[0_8px_20px_rgba(0,0,0,0.06)]
        hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]
        transition-all duration-300 overflow-hidden
      "
    >
      {/* HEADER */}
      <header className="px-4 sm:px-5 pt-4 pb-3 border-b border-neutral-200">
        <h2 className="text-[17px] sm:text-[19px] font-semibold text-neutral-900 leading-tight tracking-tight">
          {item.nombre.toUpperCase()}
        </h2>

        <p className="mt-1 text-[11px] sm:text-[12px] font-medium text-neutral-500 uppercase tracking-wide">
          {item.categoria.toUpperCase()} · {item.marca.toUpperCase()}
        </p>
      </header>

      {/* IMAGEN */}
      <div className="relative w-full aspect-[4/3] bg-white overflow-hidden flex items-center justify-center">
        <img
          src={item.img}
          alt={item.nombre}
          className="w-full h-full object-contain"
        />
      </div>

      {/* ESPECIFICACIONES — estilo ficha técnica motos */}
      <div className="px-4 sm:px-5 pt-4 pb-5 border-t border-neutral-200">
        <div className="grid grid-cols-2 gap-y-4 text-[13px]">

          <div>
            <p className="text-[10px] font-semibold text-neutral-500 tracking-wide">
              PESO
            </p>
            <p className="font-semibold text-neutral-900 mt-0.5">{item.peso}</p>
          </div>

          <div>
            <p className="text-[10px] font-semibold text-neutral-500 tracking-wide">
              MATERIAL
            </p>
            <p className="font-semibold text-neutral-900 mt-0.5">{item.material}</p>
          </div>
           <div>
            <p className="text-[10px] font-semibold text-neutral-500 tracking-wide">
              CERTIFICACION
            </p>
            <p className="font-semibold text-neutral-900 mt-0.5">{item.material}</p>
          </div>

        </div>
      </div>

      {/* BOTÓN WHATSAPP */}
      <div className="px-4 sm:px-5 pb-4 flex justify-end">
        <a
          href={`https://wa.me/5493795134533?text=Hola!%20Quiero%20consultar%20por%20el%20casco%20${encodeURIComponent(
            item.nombre
          )}`}
          className="
            flex items-center justify-center
            w-12 h-12 rounded-full
            bg-[#25D366] text-white
            shadow-[0_4px_12px_rgba(0,0,0,0.25)]
            hover:scale-110 active:scale-95 
            transition-all duration-200
          "
          aria-label="Consultar por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .2a11.8 11.8 0 0 0-8.52 3.28A11.42 11.42 0 0 0 .2 12.07c0 2 .53 3.93 1.54 5.63L0 24l6.49-1.7A12 12 0 0 0 12 23.8a11.42 11.42 0 0 0 8.52-3.28A11.42 11.42 0 0 0 23.8 12a11.8 11.8 0 0 0-3.28-8.52zM12 21.1c-1.78 0-3.5-.46-5.02-1.33l-.36-.21-3.85 1 1.03-3.76-.24-.39A9.17 9.17 0 0 1 2.9 12c0-5.03 4.1-9.1 9.1-9.1 2.43 0 4.72.94 6.44 2.64A9.05 9.05 0 0 1 21.1 12c0 5-4.1 9.1-9.1 9.1zm5.21-6.87c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.06 2.87 1.21 3.07.15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.08 1.71-.7 1.95-1.38.24-.67.24-1.25.17-1.38-.07-.13-.26-.2-.55-.35z" />
          </svg>
        </a>
      </div>
    </article>
  );
}
