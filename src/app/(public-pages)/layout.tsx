import type { Metadata } from "next";

import "@/styles/global.css";
import "@/styles/theme.css";

import { ReactQueryProvider } from "@/core/lib/queryClient";

import { Bebas_Neue, Manrope } from "next/font/google";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "NEA MOTOS · Potencia & Perfección",
  description: "Catálogo de motos, cascos y asesoramiento en Corrientes.",
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${body.variable} font-body`}
    >
      <body
        className="antialiased text-white"
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        {/* HEADER con branding rojo/azul */}
        <header
          className="fixed inset-x-0 top-0 z-30 backdrop-blur-md border-b border-[var(--border-subtle)]"
          style={{ backgroundColor: "rgba(10,10,10,0.6)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
            {/* Marca */}
            <a
              className="flex items-center gap-3"
              aria-label="Inicio NEA MOTOS"
              href="/"
            >
              <div className="flex items-baseline gap-2 leading-none">
                <span className="font-display text-xl tracking-widest text-white">
                  NEA
                </span>
                <span
                  className="font-display text-xl tracking-widest"
                  style={{ color: "var(--brand-red)" }}
                >
                  Motos
                </span>
              </div>

              {/* banderita rojo/azul para reforzar logo */}
              <div className="flex -space-x-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--brand-red)" }}
                />
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                />
              </div>
            </a>

            {/* Nav */}
            <nav
              className="hidden md:flex items-center gap-6 text-sm font-semibold"
              aria-label="Principal"
            >
              <a
                href="#marcas"
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Marcas
              </a>
              <a
                href="#galeria"
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Galería
              </a>
              <a
                href="#cascos"
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Cascos
              </a>
              <a
                href="#motos"
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Motos
              </a>
              <a
                href="#contacto"
                className="hover:text-[var(--brand-red)] transition-colors"
              >
                Contacto
              </a>
            </nav>

            {/* CTA principal */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-white shadow transition"
              style={{
                backgroundColor: "var(--brand-red)",
                boxShadow: "0 12px 32px var(--brand-red-glow)",
              }}
            >
              Consultar
            </a>
          </div>
        </header>

        {/* CONTENIDO */}
        <ReactQueryProvider>
          <main className="pt-24">{children}</main>
        </ReactQueryProvider>

        {/* FOOTER con azul para confianza */}
        <footer
          id="contacto"
          className="mt-24 border-t border-[var(--border-subtle)]"
          style={{ backgroundColor: "var(--bg-surface)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10 text-white">
            {/* Columna 1 */}
            <div>
              <h4 className="font-display text-xl font-bold flex items-baseline gap-2">
                <span>NEA</span>
                <span style={{ color: "var(--brand-red)" }}>Motos</span>
              </h4>

              <p className="mt-3 text-sm" style={{ color: "var(--text-dim)" }}>
                Tu punto de encuentro para elegir la moto de tus sueños en
                Corrientes.
              </p>

              <p
                className="mt-4 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                Horarios: Lun a Sáb 9–13 / 16–20
              </p>
            </div>

            {/* Columna 2 */}
            <div>
              <h5 className="font-semibold text-white">Contacto</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li style={{ color: "var(--text-dim)" }}>
                  📍 Calle Falsa 123, Corrientes
                </li>
                <li style={{ color: "var(--text-dim)" }}>
                  📞 (379) 400-0000
                </li>
                <li style={{ color: "var(--text-dim)" }}>
                  📧 ventas@neamotos.com
                </li>
                <li className="flex flex-col">
                  <span style={{ color: "var(--text-dim)" }}>💬 WhatsApp:</span>
                  <a
                    className="underline font-semibold transition-colors"
                    style={{ color: "var(--brand-blue)" }}
                    href="https://wa.me/5493790000000"
                    id="wpp-footer"
                  >
                    +54 9 379 000 0000
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
              <h5 className="font-semibold text-white">Seguinos</h5>
              <div className="mt-3 flex gap-3">
                <a
                  className="w-9 h-9 grid place-items-center rounded-full text-xs font-semibold transition-colors border"
                  style={{
                    backgroundColor: "var(--bg-surface-alt)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  href="#"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  className="w-9 h-9 grid place-items-center rounded-full text-xs font-semibold transition-colors border"
                  style={{
                    backgroundColor: "var(--bg-surface-alt)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  href="#"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  className="w-9 h-9 grid place-items-center rounded-full text-xs font-semibold transition-colors border"
                  style={{
                    backgroundColor: "var(--bg-surface-alt)",
                    borderColor: "var(--border-subtle)",
                    color: "var(--text-primary)",
                  }}
                  href="#"
                  aria-label="YouTube"
                >
                  YT
                </a>
              </div>
            </div>
          </div>

          <div
            className="py-6 text-center text-xs border-t"
            style={{
              borderColor: "var(--border-subtle)",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} NEA MOTOS. Todos los derechos
            reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
