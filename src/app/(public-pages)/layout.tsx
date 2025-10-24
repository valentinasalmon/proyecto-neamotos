import type { Metadata } from "next";
import "./global.css";
import { ReactQueryProvider } from "../lib/queryClient";

// === Fuentes (display + body) ===
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      {/* Activamos las variables de fuente y usamos Manrope por defecto */}
      <body className={`${display.variable} ${body.variable} font-body`}>
        <header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a className="flex items-center gap-2" aria-label="Inicio NEA MOTOS" href="/">
              <svg width="36" height="26" viewBox="0 0 36 26" fill="currentColor" aria-hidden="true">
                <path d="M2 20c8-8 21-8 32 0" stroke="currentColor" strokeWidth="2" />
                <circle cx="9" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="29" cy="20" r="4" stroke="currentColor" strokeWidth="2" />
              </svg>
              {/* Los headings con className="font-display" usarán Bebas Neue */}
              <span className="font-display text-xl tracking-widest">NEA MOTOS</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" aria-label="Principal">
              <a href="#marcas" className="hover:text-brand">Marcas</a>
              <a href="#galeria" className="hover:text-brand">Galería</a>
              <a href="#cascos" className="hover:text-brand">Cascos</a>
              <a href="#motos" className="hover:text-brand">Motos</a>
              <a href="#contacto" className="hover:text-brand">Contacto</a>
            </nav>
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold shadow"
            >
              Consultar
            </a>
          </div>
        </header>

        <ReactQueryProvider>
          <main className="pt-24">{children}</main>
        </ReactQueryProvider>

        <footer id="contacto" className="bg-gray-900 text-gray-200 mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-display text-xl font-bold">NEA MOTOS</h4>
              <p className="mt-3 text-sm text-gray-400">
                Tu punto de encuentro para elegir la moto de tus sueños en Corrientes.
              </p>
              <p className="mt-4 text-sm">Horarios: Lun a Sáb 9–13 / 16–20</p>
            </div>
            <div>
              <h5 className="font-semibold">Contacto</h5>
              <ul className="mt-3 space-y-2 text-sm">
                <li>📍 Calle Falsa 123, Corrientes</li>
                <li>📞 (379) 400-0000</li>
                <li>📧 ventas@neamotos.com</li>
                <li>
                  💬 WhatsApp: <a className="underline" href="#" id="wpp-footer">+54 9 379 000 0000</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Seguinos</h5>
              <div className="mt-3 flex gap-3">
                <a className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Instagram">IG</a>
                <a className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="Facebook">FB</a>
                <a className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20" href="#" aria-label="YouTube">YT</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} NEA MOTOS. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
