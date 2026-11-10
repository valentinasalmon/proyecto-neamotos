"use client";

import {
  PROMOS,
  PROMO_MARCAS,
  PromoItem,
  formatearPrecio,
} from "@/features/promociones/data/promociones";

const WHATSAPP_NUMERO = "5493795134533";

/**
 * PromocionesSection – Promos de contado por tiempo limitado (Home).
 * Reemplaza a la sección "NEA MOTOS TE ACONSEJA".
 * Lista de precios por marca: modelo, precio y un botón de WhatsApp
 * por moto para consultar esa promo puntual.
 */
export function PromocionesSection() {
  return (
    <section
      id="promociones"
      aria-labelledby="promociones-heading"
      className="relative bg-[#0A2342] text-white overflow-hidden py-16 sm:py-24"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ENCABEZADO ================= */}
        <div className="mb-8 sm:mb-12">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-400 uppercase mb-3">
            Por tiempo limitado
          </p>

          <h2
            id="promociones-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-4"
          >
            PROMOS DE CONTADO
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-200 leading-relaxed max-w-xl">
            Precios especiales pagando de contado. Consultá por la tuya por WhatsApp.
          </p>
        </div>

        {/* ================= LISTAS POR MARCA ================= */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 items-start">
          {PROMO_MARCAS.map((marca) => (
            <div
              key={marca}
              className="bg-white text-neutral-900 border border-neutral-300 rounded-none shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
            >
              <header className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b-2 border-red-600">
                <h3 className="font-display text-[20px] sm:text-[22px] font-extrabold uppercase tracking-tight">
                  {marca}
                </h3>
                <span className="bg-red-600 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-1">
                  Promo
                </span>
              </header>

              <ul className="divide-y divide-neutral-200">
                {PROMOS.filter((p) => p.marca === marca).map((p) => (
                  <PromoFila key={p.id} promo={p} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Aclaración */}
        <p className="mt-8 text-center text-[12px] sm:text-[13px] text-gray-300">
          * Precios de contado. Promoción por tiempo limitado.
        </p>
      </div>
    </section>
  );
}

function PromoFila({ promo }: { promo: PromoItem }) {
  const precio = formatearPrecio(promo.precio);
  const mensaje = `Hola! Quiero consultar por la promo de contado de la ${promo.marca} ${promo.nombre} (${precio})`;

  return (
    <li className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 hover:bg-neutral-50 transition-colors">
      <div className="min-w-0 flex-1">
        <p className="text-[14px] sm:text-[15px] font-bold leading-tight tracking-tight">
          {promo.nombre}
        </p>
        <p className="mt-1 text-[18px] sm:text-[20px] font-extrabold text-red-600 leading-none whitespace-nowrap">
          {precio}
        </p>
      </div>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          shrink-0 inline-flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12 rounded-full
          bg-green-500 hover:bg-green-600 active:bg-green-700
          text-white shadow-[0_8px_18px_rgba(0,0,0,0.25)]
          transition-transform duration-200 hover:scale-110
        "
        aria-label={`Consultar por la promo de ${promo.marca} ${promo.nombre} por WhatsApp`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
        </svg>
      </a>
    </li>
  );
}
