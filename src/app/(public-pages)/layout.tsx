import type { Metadata, Viewport } from "next";

import "@/styles/global.css";
import "@/styles/theme.css";

import { ReactQueryProvider } from "@/core/lib/queryClient";

import { Bebas_Neue, Manrope } from "next/font/google";
import { Header } from "@/core/components/Header";

import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const socials = [
    { label: "Instagram", href: "#", Icon: Instagram },
    { label: "Facebook", href: "#", Icon: Facebook },
  ];

  return (
    <html lang="es" className={`${display.variable} ${body.variable} font-body`}>
      <body className="bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        <Header />

        <ReactQueryProvider>
          <main className="flex-1 pt-[65px]">{children}</main>
        </ReactQueryProvider>

        <footer id="contacto" className="bg-[#D7263D] text-white">
          <div
            className="
              max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
              py-10 sm:py-12
              grid gap-8 sm:gap-10
              md:grid-cols-3
              items-start
            "
          >
            {/* Col 1 */}
            <div>
              <h4 className="font-display text-xl tracking-wide">NEA MOTOS</h4>
              <p className="mt-3 text-sm text-white/90">
                Tu punto de encuentro para elegir la moto de tus sueños en Corrientes.
              </p>
              <p className="mt-4 text-sm text-white/90">
                Horarios: Lun a Sáb 8:30 – 13:00 | 16:30 – 20:30
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h5 className="font-display text-lg tracking-wide mb-3">Contacto</h5>

              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-white/80" />
                  <span>Corrientes, Argentina</span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-white/80" />
                  <a href="tel:+543795134533" className="hover:text-white transition">
                    +54 379 513 4533
                  </a>
                </li>
              </ul>

              <div className="mt-5">
                <h5 className="font-display text-lg tracking-wide mb-3">Seguinos</h5>

                <div className="flex gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="
                        w-10 h-10 grid place-items-center rounded-full
                        bg-white/10 hover:bg-white/20 transition
                        ring-1 ring-white/20
                      "
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 3 (más ancha visualmente: ocupa 1 columna pero la hacemos “importante”) */}
            <div>
              <h5 className="font-display text-lg tracking-wide mb-3">Ubicación</h5>

              <div className="overflow-hidden rounded-lg border border-white/20">
                <iframe
                  className="w-full h-44 sm:h-48"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.8746973049551!2d-58.8258145923809!3d-27.477060275921183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b63b4ce60bf%3A0x8a918cc1d3a6b0fc!2sNea%20Motos!5e0!3m2!1ses-419!2sar!4v1764363286805!5m2!1ses-419!2sar"
                />
              </div>
            </div>
          </div>

          {/* Sub-footer */}
          <div className="bg-white py-5 text-center text-xs text-neutral-800 border-t border-neutral-200">
            © {new Date().getFullYear()} NEA MOTOS. Todos los derechos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}
