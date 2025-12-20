import type { Metadata } from "next";
import Link from "next/link";

import CubiertasForm from "@/features/cubiertas/components/CubiertasForm";
import CubiertasLogos from "@/features/cubiertas/components/CubiertasLogos";

export const metadata: Metadata = {
  title: "Cubiertas | NEA Motos",
  description: "Completá tus datos y consultá cubiertas por WhatsApp.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide">
            CUBIERTAS
          </h1>
        </div>

        <div className="hidden sm:block">
          <Link
            href="/catalogo"
            className="text-[13px] font-semibold text-[#0A2342] underline underline-offset-4 decoration-[#0A2342]/30 hover:opacity-90"
          >
            Ver catálogo
          </Link>
        </div>
      </div>

      <section className="mt-8">
        <CubiertasForm />
      </section>

      <section className="mt-14 pt-10 border-t border-neutral-200">
        <CubiertasLogos />
      </section>
    </main>
  );
}
