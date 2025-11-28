"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappHref =
    "https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta";

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed top-0 inset-x-0 z-[50]
          backdrop-blur bg-white/80
          border-b border-neutral-200
          text-neutral-900
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* LOGO SOLO */}
          <a href="/" className="flex items-center" aria-label="Inicio">
            <Image
              src="/logo nea/neamotos.png"
              alt="NEA Motos"
              width={150}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* NAV DESKTOP */}
          <nav
            className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-neutral-800"
            aria-label="Principal"
          >
            <a href="/" className="hover:text-[#0A2342]">Home</a>
            <a href="/catalogo" className="hover:text-[#0A2342]">Motos</a>
            <a href="/indumentaria" className="hover:text-[#0A2342]">Indumentaria</a>
            <a href="/financiacion" className="hover:text-[#0A2342]">Financiación</a>
            <a href="/seguros" className="hover:text-[#0A2342]">Seguros</a>

            {/* BOTÓN ROJO CONSULTAR */}
            <a
              href={whatsappHref}
              className="
                inline-flex items-center rounded-full
                bg-red-600 hover:bg-red-700 active:bg-red-800
                text-white px-4 py-2 text-[13px] font-semibold
                shadow-[0_16px_32px_rgba(220,38,38,0.4)]
              "
            >
              Consultar
            </a>
          </nav>

          {/* HAMBURGUESA */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center"
            aria-label="Abrir menú"
          >
            <span className="block h-0.5 w-6 bg-neutral-800" />
            <span className="block h-0.5 w-6 bg-neutral-800 my-[5px]" />
            <span className="block h-0.5 w-6 bg-neutral-800" />
          </button>
        </div>
      </header>

      {/* ==================== MENÚ MOBILE ==================== */}
      <div
        className={`
          fixed inset-0 z-[9999]
          transition-opacity duration-200
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <aside
          role="dialog"
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute top-0 right-0 h-full w-[80%] max-w-[320px]
            bg-white text-neutral-900 shadow-xl
            transform transition-transform duration-300
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
            flex flex-col
          `}
        >
          {/* HEADER DEL PANEL */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-200">
            <span className="font-display text-base font-bold tracking-wide">
              NEA MOTOS
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center w-9 h-9 text-neutral-700 hover:bg-neutral-100 rounded"
            >
              ✕
            </button>
          </div>

          {/* LINKS */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 text-[15px] font-semibold">
            <ul className="flex flex-col gap-4">
              <li><a href="/" onClick={() => setMobileOpen(false)}>Home</a></li>
              <li><a href="/catalogo" onClick={() => setMobileOpen(false)}>Motos</a></li>
              <li><a href="/indumentaria" onClick={() => setMobileOpen(false)}>Indumentaria</a></li>
              <li><a href="/financiacion" onClick={() => setMobileOpen(false)}>Financiación</a></li>
              <li><a href="/seguros" onClick={() => setMobileOpen(false)}>Seguros</a></li>

              {/* BOTÓN ROJO CONSULTAR — MOBILE */}
              <li className="pt-4 border-t border-neutral-200">
                <a
                  href={whatsappHref}
                  onClick={() => setMobileOpen(false)}
                  className="
                    inline-flex items-center justify-center w-full
                    rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800
                    text-white font-semibold text-[14px]
                    px-4 py-3 shadow-[0_16px_32px_rgba(220,38,38,0.4)]
                  "
                >
                  Consultar
                </a>
              </li>

              {/* INFO NEGOCIO */}
              <li className="text-[12px] text-neutral-500 leading-relaxed">
                <p>Horarios: Lun a Sáb 8:30 – 13 / 16:30 – 20:30</p>
                <p>Corrientes Capital · Envíos a todo el país</p>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
