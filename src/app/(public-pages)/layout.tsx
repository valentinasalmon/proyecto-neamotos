import type { Metadata } from "next";

import "@/styles/global.css";
import "@/styles/theme.css";

import { ReactQueryProvider } from "@/core/lib/queryClient";

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
  const waFooterHref = `https://api.whatsapp.com/send?phone=5493795134533&text=${encodeURIComponent(
    "Hola! Quiero hacer una consulta"
  )}`;

  return (
    <html lang="es" className={`${display.variable} ${body.variable} font-body`}>
      <body className="bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        <Header />

        <ReactQueryProvider>
          {/* FIX GLOBAL: header fixed (64px) + border (1px) */}
          <main className="flex-1 pt-[65px]">{children}</main>
        </ReactQueryProvider>

        <footer id="contacto" className="bg-[#D7263D] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
            <div>
              <h4 className="font-display text-xl font-bold">NEA MOTOS</h4>
              <p className="mt-3 text-sm text-white/90">
                Tu punto de encuentro para elegir la moto de tus sueños en Corrientes.
              </p>
              <p className="mt-4 text-sm text-white/90">Horarios: Lun a Sáb 9–13 / 16–20</p>
            </div>

            <div>
              <h5 className="font-semibold">Contacto</h5>
              <ul className="mt-3 space-y-2 text-sm text-white/90">
                <li>📍 Corrientes, AR</li>
                <li>📞 (379) 5134533</li>
                <li>📧 ventas@neamotos.com</li>
                <li>
                  💬 WhatsApp:{" "}
                  <a
                    className="underline text-white hover:text-white/80"
                    href={waFooterHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +54 9 379 5134533
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold">Seguinos</h5>
              <div className="mt-3 flex gap-3">
                {["IG", "FB", "YT"].map((s) => (
                  <a
                    key={s}
                    className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
                    href="#"
                    aria-label={s}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-3">Ubicación</h5>
              <iframe
                className="w-full h-40 border border-white/20"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.8746973049551!2d-58.8258145923809!3d-27.477060275921183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b63b4ce60bf%3A0x8a918cc1d3a6b0fc!2sNea%20Motos!5e0!3m2!1ses-419!2sar!4v1764363286805!5m2!1ses-419!2sar"
              />
            </div>
          </div>

          <div className="border-t border-white/20 py-6 text-center text-xs text-white/80">
            © {new Date().getFullYear()} NEA MOTOS. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
