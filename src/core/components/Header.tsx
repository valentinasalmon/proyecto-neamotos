"use client";

import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-30
        backdrop-blur bg-white/80
        border-b border-neutral-200
        text-neutral-900
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Inicio NEA MOTOS">
          <span className="inline-flex items-center justify-center w-9 h-9 bg-[#0A2342] text-white text-[10px] font-bold rounded-[4px] shadow-[0_12px_24px_rgba(10,35,66,0.4)]">
            NEA
          </span>
          <span className="font-display text-xl tracking-widest text-neutral-900 leading-none">
            NEA MOTOS
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-neutral-800"
          aria-label="Principal"
        >
          <a href="/catalogo" className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30">Catálogo</a>
          <a href="/#consejos" className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30">Consejos</a>
          <a href="/#reseñas" className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30">Reseñas</a>
          <a href="/financiacion" className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30">Financiación</a>
          <a href="/seguros" className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30">Seguros</a>
          <a
            href="https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta"
            className="inline-flex items-center rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 text-[13px] font-semibold shadow-[0_16px_32px_rgba(220,38,38,0.4)]"
          >
            Consultar
          </a>
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="relative lg:hidden w-10 h-10 flex flex-col items-center justify-center"
          aria-label="Menú"
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          <span className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block h-0.5 w-6 bg-neutral-800 my-[5px] transition-all duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block h-0.5 w-6 bg-neutral-800 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Overlay + Drawer mobile */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40
          ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
        aria-hidden={!mobileOpen}
      >
        {/* Fondo semitransparente */}
        <div
          className={`
            absolute inset-0 bg-black/50 transition-opacity duration-200
            ${mobileOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel lateral (FIX: sin redondeo, alto completo, sin fugas) */}
        <aside
          id="mobile-drawer"
          role="dialog"
          className={`
            absolute top-0 right-0 h-full w-[80%] max-w-[320px]
            bg-white text-neutral-900
            shadow-[0_40px_80px_rgba(0,0,0,0.5)]
            flex flex-col overscroll-contain
            transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header dentro del panel (FIX: sticky + sin bordes raros) */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-4 h-16 bg-white border-b border-neutral-200">
            <span className="font-display text-base font-bold tracking-wide">NEA MOTOS</span>

            {/* Botón cerrar simple, sin caja sobresaliente */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Cerrar menú"
              className="inline-flex items-center justify-center w-9 h-9 text-neutral-700 hover:bg-neutral-100 rounded"
            >
              <span className="sr-only">Cerrar</span>
              ✕
            </button>
          </div>

          {/* Links mobile (FIX: scroll propio del panel) */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 text-[14px] font-semibold leading-tight">
            <div className="flex flex-col gap-4">
              <a href="/catalogo" onClick={() => setMobileOpen(false)} className="hover:text-[#0A2342]">Catálogo</a>
              <a href="/#consejos" onClick={() => setMobileOpen(false)} className="hover:text-[#0A2342]">Consejos</a>
              <a href="/#reseñas" onClick={() => setMobileOpen(false)} className="hover:text-[#0A2342]">Reseñas</a>
              <a href="/financiacion" onClick={() => setMobileOpen(false)} className="hover:text-[#0A2342]">Financiación</a>
              <a href="/seguros" onClick={() => setMobileOpen(false)} className="hover:text-[#0A2342]">Seguros</a>

              {/* CTA WhatsApp */}
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href="https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-[13px] px-3 py-2 shadow-[0_16px_32px_rgba(0,0,0,0.35)] rounded-none"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Info negocio */}
              <div className="pt-6 text-[11px] text-neutral-500 leading-relaxed">
                <p>Horarios: Lun a Sáb 8:30 – 13 / 16:30 – 20:30</p>
                <p>Corrientes Capital · Envíos a todo el país</p>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
