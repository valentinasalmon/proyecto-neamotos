"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const whatsappHref = `https://api.whatsapp.com/send?phone=5493795134533&text=${encodeURIComponent(
    "Hola! Quiero hacer una consulta"
  )}`;

  const links: Array<{ label: string; href: string }> = [
    { label: "Home", href: "/" },
    { label: "Cascos", href: "/cascos" },
    { label: "Cubiertas", href: "/cubiertas" },
    { label: "Financiación", href: "/financiacion" },
    { label: "Indumentaria", href: "/indumentaria" },
    { label: "Motos", href: "/catalogo" },
    { label: "Motos usadas", href: "/motos-usadas" },
    { label: "Seguros", href: "/seguros" },
  ];

  return (
    <>
      <header
        className="
          fixed top-0 inset-x-0 z-[999999]
          h-16 bg-white/90 backdrop-blur
          border-b border-neutral-200 text-neutral-900
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* LOGO HEADER */}
          <Link href="/" className="flex items-center" aria-label="Inicio">
            {/* Desktop */}
            <Image
              src="/logo nea/neamotos.png"
              alt="NEA Motos"
              width={150}
              height={48}
              className="hidden lg:block h-10 w-auto object-contain"
              priority
            />

            {/* Mobile */}
            <Image
              src="/favicon.ico"
              alt="NEA Motos"
              width={32}
              height={32}
              className="lg:hidden h-8 w-8"
              priority
            />
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-neutral-800">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-[#0A2342]">
                {l.label}
              </Link>
            ))}

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
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

          {/* HAMBURGER */}
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

      {/* OVERLAY MOBILE */}
      <div
        className={[
          "fixed inset-0 z-[1000000] transition-opacity duration-200",
          mobileOpen ? "opacity-100" : "opacity-0 hidden",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <aside
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.stopPropagation()}
          className="
            absolute top-0 left-0 right-0
            bg-white text-neutral-900 shadow-xl
            rounded-b-2xl
          "
        >
          {/* HEADER MOBILE MENU */}
          <div className="flex items-center justify-between px-4 h-16 border-b border-neutral-200">
            {/* LOGO CHICO EN VEZ DE TEXTO */}
            <Image
              src="/favicon.ico"
              alt="NEA Motos"
              width={28}
              height={28}
              className="h-7 w-7"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 grid place-items-center rounded hover:bg-neutral-100"
              aria-label="Cerrar menú"
            >
              ✕
            </button>
          </div>

          <nav className="px-4 py-5 text-[15px] font-semibold">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="
                      block py-3 text-neutral-800
                      transition-all duration-200
                      hover:text-[#0A2342] hover:translate-x-1
                    "
                  >
                    {l.label}
                  </Link>
                </li>
              ))}

              <li className="pt-5">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
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

              <li className="mt-4 text-[12px] text-neutral-500 leading-relaxed">
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
