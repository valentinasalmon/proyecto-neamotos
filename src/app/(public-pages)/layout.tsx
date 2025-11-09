import type { Metadata } from "next";

// estilos globales
import "@/styles/global.css";
import "@/styles/theme.css";

// provider
import { ReactQueryProvider } from "@/core/lib/queryClient";

// fuentes
import { Bebas_Neue, Manrope } from "next/font/google";
import { Header } from "@/core/components/Header";

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
  viewport: { width: "device-width", initialScale: 1 },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} font-body`}>
      {/* Sitio claro; mantenemos footer oscuro NEA */}
      <body className="bg-white text-neutral-900 antialiased">
        <Header />

        <ReactQueryProvider>
          {/* header fixed = 64px */}
          <main className="pt-24">{children}</main>
        </ReactQueryProvider>

        {/* Footer oscuro original */}
        <footer id="contacto" className="bg-[#0A2342] text-white mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-display text-xl font-bold">NEA MOTOS</h4>
              <p className="mt-3 text-sm text-gray-300">
                Tu punto de encuentro para elegir la moto de tus sueños en Corrientes.
              </p>
              <p className="mt-4 text-sm text-gray-300">Horarios: Lun a Sáb 9–13 / 16–20</p>
            </div>

            <div>
              <h5 className="font-semibold">Contacto</h5>
              <ul className="mt-3 space-y-2 text-sm text-gray-300">
                <li>📍 Corrientes, AR</li>
                <li>📞 (379) 400-0000</li>
                <li>📧 ventas@neamotos.com</li>
                <li>
                  💬 WhatsApp:{" "}
                  <a
                    className="underline text-white hover:text-gray-200"
                    href="https://wa.me/5493790000000?text=Hola!%20Quiero%20hacer%20una%20consulta"
                  >
                    +54 9 379 000 0000
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold">Seguinos</h5>
              <div className="mt-3 flex gap-3">
                <a
                  className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  href="#"
                  aria-label="Instagram"
                >
                  IG
                </a>
                <a
                  className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  href="#"
                  aria-label="Facebook"
                >
                  FB
                </a>
                <a
                  className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
                  href="#"
                  aria-label="YouTube"
                >
                  YT
                </a>
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
