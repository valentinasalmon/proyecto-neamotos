"use client";

import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [motosMenuOpen, setMotosMenuOpen] = useState(false);

  // marcas que ofrecés
  const brandLinks = [
    { label: "Bajaj", href: "/catalogo/bajaj" },
    { label: "Corven", href: "/catalogo/corven" },
    { label: "Keller", href: "/catalogo/keller" },
    { label: "Motomel", href: "/catalogo/motomel" },
    { label: "Zanella", href: "/catalogo/zanella" },
  ];

  return (
    <header
      className="
        fixed top-0 inset-x-0 z-30
        backdrop-blur bg-white/80
        border-b border-neutral-200
        text-neutral-900
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / marca */}
        <a
          className="flex items-center gap-2"
          aria-label="Inicio NEA MOTOS"
          href="/"
        >
          <span
            className="
              inline-flex items-center justify-center
              w-9 h-9
              bg-[#0A2342] text-white
              text-[10px] font-bold leading-none
              rounded-[4px]
              shadow-[0_12px_24px_rgba(10,35,66,0.4)]
            "
          >
            NEA
          </span>

          <span className="font-display text-xl tracking-widest text-neutral-900 leading-none">
            NEA MOTOS
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="
            hidden lg:flex items-center gap-6
            text-[13px] font-semibold text-neutral-800
          "
          aria-label="Principal"
        >
          <a
            href="#marcas"
            className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
          >
            Marcas
          </a>

          <a
            href="#galeria"
            className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
          >
            Galería
          </a>

          <a
            href="#cascos"
            className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
          >
            Cascos
          </a>

          {/* 👇 Nuevo link Financiación */}
          <a
            href="/financiacion"
            className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
          >
            Financiación
          </a>

          {/* Motos con dropdown */}
          <div className="relative">
            <button
              className="
                inline-flex items-center gap-1
                hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30
              "
              onClick={() => setMotosMenuOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={motosMenuOpen}
            >
              <span>Motos</span>
              <span className="text-[10px] leading-none">▾</span>
            </button>

            {motosMenuOpen && (
              <div
                className="
                  absolute right-0 mt-3 w-40
                  bg-white text-neutral-900
                  border border-neutral-200
                  shadow-[0_24px_48px_rgba(0,0,0,0.12)]
                  rounded-[4px]
                  py-2
                "
                role="menu"
              >
                <a
                  href="/catalogo"
                  className="
                    block px-4 py-2 text-[13px] font-semibold
                    hover:bg-neutral-100
                  "
                  role="menuitem"
                >
                  Catálogo completo
                </a>

                <div className="my-2 h-px bg-neutral-200" />

                {brandLinks.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    className="
                      block px-4 py-2 text-[13px] font-semibold
                      hover:bg-neutral-100
                    "
                    role="menuitem"
                  >
                    {b.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contacto"
            className="hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
          >
            Contacto
          </a>

          {/* CTA Consultar (WhatsApp) */}
          <a
            href="https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta"
            className="
              inline-flex items-center rounded-full
              bg-red-600 hover:bg-red-700 active:bg-red-800
              text-white px-4 py-2
              text-[13px] font-semibold
              shadow-[0_16px_32px_rgba(220,38,38,0.4)]
            "
          >
            Consultar
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="
            lg:hidden inline-flex items-center justify-center
            w-10 h-10
            border border-neutral-300 bg-white text-neutral-700
            rounded-[4px]
          "
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(true)}
        >
          <span className="block w-4 h-0.5 bg-neutral-800 mb-1" />
          <span className="block w-4 h-0.5 bg-neutral-800 mb-1" />
          <span className="block w-4 h-0.5 bg-neutral-800" />
        </button>
      </div>

      {/* Panel mobile */}
      {mobileOpen && (
        <div
          className="
            lg:hidden fixed inset-0 z-40
            bg-black/50
          "
        >
          <div
            className="
              absolute top-0 right-0 h-full w-[80%] max-w-[300px]
              bg-white text-neutral-900
              shadow-[0_40px_80px_rgba(0,0,0,0.5)]
              flex flex-col
            "
          >
            {/* header panel */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-200">
              <span className="font-display text-base font-bold tracking-wide">
                NEA MOTOS
              </span>

              <button
                className="
                  inline-flex items-center justify-center
                  w-9 h-9
                  border border-neutral-300
                  text-neutral-700
                "
                onClick={() => setMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            {/* links mobile */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 text-[14px] font-semibold leading-tight">
              <div className="flex flex-col gap-4">
                <a
                  href="#marcas"
                  className="text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Marcas
                </a>

                <a
                  href="#galeria"
                  className="text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Galería
                </a>

                <a
                  href="#cascos"
                  className="text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Cascos
                </a>

                {/* 👇 Nuevo link Financiación */}
                <a
                  href="/financiacion"
                  className="text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30"
                  onClick={() => setMobileOpen(false)}
                >
                  Financiación
                </a>

                {/* bloque Motos */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="uppercase text-[11px] text-neutral-500 font-bold tracking-wide mb-2">
                    Motos
                  </div>

                  <a
                    href="/catalogo"
                    className="block text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30 mb-3"
                    onClick={() => setMobileOpen(false)}
                  >
                    Catálogo completo
                  </a>

                  {brandLinks.map((b) => (
                    <a
                      key={b.href}
                      href={b.href}
                      className="block text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30 mb-3"
                      onClick={() => setMobileOpen(false)}
                    >
                      {b.label}
                    </a>
                  ))}
                </div>

                <a
                  href="#contacto"
                  className="text-neutral-800 hover:text-[#0A2342] hover:underline underline-offset-4 decoration-[#0A2342]/30 pt-4 border-t border-neutral-200"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto
                </a>

                {/* CTA WhatsApp */}
                <div className="pt-6">
                  <a
                    href="https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta"
                    className="
                      inline-flex items-center gap-2
                      bg-green-500 hover:bg-green-600 active:bg-green-700
                      text-white font-semibold
                      text-[13px] leading-none
                      px-3 py-2
                      shadow-[0_16px_32px_rgba(0,0,0,0.35)]
                      rounded-none
                    "
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="inline-flex w-[16px] h-[16px]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full"
                        aria-hidden="true"
                      >
                        <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
                      </svg>
                    </span>
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Info negocio */}
                <div className="pt-6 text-[11px] text-neutral-500 leading-relaxed">
                  <p>Horarios: Lun a Sáb 9–13 / 16–20</p>
                  <p>Corrientes · Envíos a todo el país</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
