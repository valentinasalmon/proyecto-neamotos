"use client";

import { useMemo, useState } from "react";
import {
  PROMOS,
  PROMO_MARCAS,
  PROMO_LOGOS,
  PromoItem,
  PromoMarca,
  formatearPrecio,
} from "@/features/promociones/data/promociones";

const WHATSAPP_NUMERO = "5493795134533";

type Filtro = "Todas" | PromoMarca;

/**
 * PromocionesSection – Promos de contado por tiempo limitado (Home).
 * Reemplaza a la sección "NEA MOTOS TE ACONSEJA".
 * Tarjetas tipo "ticket" con modelo, cilindrada, precio de contado y un
 * botón de WhatsApp por moto para consultar esa promo puntual.
 */
export function PromocionesSection() {
  const [filtro, setFiltro] = useState<Filtro>("Todas");

  const promos = useMemo(
    () => (filtro === "Todas" ? PROMOS : PROMOS.filter((p) => p.marca === filtro)),
    [filtro]
  );

  const precioMinimo = Math.min(...PROMOS.map((p) => p.precio));
  const filtros: Filtro[] = ["Todas", ...PROMO_MARCAS];
  const cantidad = (f: Filtro) =>
    f === "Todas" ? PROMOS.length : PROMOS.filter((p) => p.marca === f).length;

  return (
    <section
      id="promociones"
      aria-labelledby="promociones-heading"
      className="relative bg-[#0A2342] text-white overflow-hidden py-16 sm:py-24"
    >
      {/* Brillos de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-red-600/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= ENCABEZADO ================= */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-end mb-8 sm:mb-10">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-400 uppercase mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Por tiempo limitado
            </p>

            <h2
              id="promociones-heading"
              className="font-display text-[44px] sm:text-6xl lg:text-7xl font-extrabold leading-[1] mb-4"
            >
              PROMOS DE <span className="text-red-500">CONTADO</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-200 leading-relaxed max-w-xl">
              Precios especiales en {PROMOS.length} modelos Keller, Motomel y Zanella pagando
              de contado. Elegí la tuya y consultá por WhatsApp.
            </p>
          </div>

          {/* Destacado "desde" */}
          <div className="flex items-center gap-4 self-start sm:justify-self-start lg:justify-self-end lg:self-end bg-red-600 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_16px_32px_rgba(220,38,38,0.4)]">
            <div>
              <p className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Desde
              </p>
              <p className="font-display text-[34px] sm:text-[42px] font-extrabold leading-none">
                {formatearPrecio(precioMinimo)}
              </p>
            </div>
            <p className="border-l border-white/40 pl-4 text-[12px] sm:text-[13px] font-semibold uppercase leading-snug">
              Pagando
              <br />
              de contado
            </p>
          </div>
        </div>

        {/* ================= FILTRO POR MARCA ================= */}
        <div
          role="tablist"
          aria-label="Filtrar promos por marca"
          className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-6 sm:mb-8 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtros.map((f) => {
            const activo = f === filtro;
            return (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={activo}
                onClick={() => setFiltro(f)}
                className={`
                  shrink-0 inline-flex items-center gap-2
                  rounded-full px-3.5 sm:px-4 py-2 text-[13px] sm:text-[14px] font-semibold
                  border transition-colors
                  ${
                    activo
                      ? "bg-white border-white text-[#0A2342]"
                      : "bg-white/5 border-white/25 text-white/90 hover:border-white hover:text-white"
                  }
                `}
              >
                {f}
                <span
                  className={`hidden sm:inline text-[11px] rounded-full px-1.5 py-0.5 leading-none ${
                    activo ? "bg-red-600 text-white" : "bg-white/15 text-white/80"
                  }`}
                >
                  {cantidad(f)}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= GRILLA DE PROMOS ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
          {promos.map((p) => (
            <PromoTicket key={p.id} promo={p} />
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

function PromoTicket({ promo }: { promo: PromoItem }) {
  const precio = formatearPrecio(promo.precio);
  const mensaje = `Hola! Quiero consultar por la promo de contado de la ${promo.marca} ${promo.nombre} (${precio})`;

  return (
    <article
      className="
        group relative flex flex-col bg-white text-neutral-900 rounded-none overflow-hidden
        shadow-[0_12px_28px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
        hover:-translate-y-1 transition-all duration-300
      "
    >
      {/* Franja roja superior */}
      <div className="h-1 bg-red-600" />

      {/* MARCA + MODELO */}
      <div className="flex-1 px-3 sm:px-4 pt-3 sm:pt-4 pb-4">
        <div className="flex items-center justify-between gap-2">
          <div className="relative h-7 sm:h-8 w-[84px] sm:w-[100px] overflow-hidden">
            <img
              src={PROMO_LOGOS[promo.marca]}
              alt={promo.marca}
              loading="lazy"
              className="absolute left-1/2 top-1/2 w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5">
            Promo
          </span>
        </div>

        <h3 className="mt-3 font-display text-[19px] sm:text-[22px] font-extrabold uppercase leading-[1.05] tracking-tight">
          {promo.nombre}
        </h3>
        <p className="mt-1 text-[11px] sm:text-[12px] font-medium text-neutral-500 uppercase tracking-wide">
          {promo.detalle}
        </p>
      </div>

      {/* Corte de ticket */}
      <div className="relative" aria-hidden="true">
        <div className="mx-3 sm:mx-4 border-t-2 border-dashed border-neutral-200" />
        <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#0A2342]" />
        <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#0A2342]" />
      </div>

      {/* PRECIO + WHATSAPP */}
      <div className="flex flex-col px-3 sm:px-4 pt-4 pb-3 sm:pb-4">
        <p className="text-[10px] sm:text-[11px] uppercase font-semibold text-neutral-600 tracking-wide">
          Precio contado
        </p>
        <p className="mt-0.5 text-[20px] sm:text-[26px] font-extrabold text-red-600 leading-none whitespace-nowrap tracking-tight">
          {precio}
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-4 inline-flex items-center justify-center gap-2
            w-full rounded-full py-2.5
            bg-green-500 hover:bg-green-600 active:bg-green-700
            text-white text-[13px] sm:text-[14px] font-semibold
            shadow-[0_8px_18px_rgba(34,197,94,0.35)]
            transition-colors
          "
          aria-label={`Consultar por la promo de ${promo.marca} ${promo.nombre} por WhatsApp`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] transition-transform duration-200 group-hover:scale-110"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
          </svg>
          Consultar
        </a>
      </div>
    </article>
  );
}
