"use client";

import Image from "next/image";
import React from "react";

export function Tecnico() {
  return (
    <section
      id="showcase"
      className="relative bg-[#0A2342] text-white overflow-hidden py-20 sm:py-28"
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/textures/asphalt-texture.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        {/* BLOQUE IZQUIERDO */}
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-400 uppercase mb-3">
            destacamos
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-[1.1] mb-6">
            Postventa y mantenimiento <br /> con respaldo oficial
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-200 leading-relaxed mb-8 max-w-md">
            En NEA MOTOS te acompañamos después de la compra. Contamos con taller especializado, 
            repuestos originales y personal técnico certificado para cada marca. 
            Mantené tu moto siempre lista, con la garantía y seguridad que merecés.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5493790000000?text=Hola!%20Quiero%20consultar%20por%20servicio%20técnico"
              className="
                inline-flex items-center justify-center gap-2
                bg-red-600 hover:bg-red-700 active:bg-red-800
                text-white text-[14px] font-semibold leading-none
                px-6 py-3
                shadow-[0_16px_32px_rgba(220,38,38,0.4)]
                rounded-none
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[16px] h-[16px]"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
              </svg>
              Consultar ahora
            </a>

            <a
              href="#contacto"
              className="
                inline-flex items-center justify-center
                text-white/80 hover:text-white underline underline-offset-4
                text-[14px]
              "
            >
              Ver más información →
            </a>
          </div>
        </div>

        {/* BLOQUE DERECHO */}
        <div className="relative w-full h-[340px] sm:h-[420px]">
          <Image
            src="/images/showcase-taller.jpg"
            alt="Servicio técnico NEA MOTOS"
            fill
            className="object-cover object-center rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            priority
          />

          {/* capa gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
