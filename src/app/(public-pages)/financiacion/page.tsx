import type { Metadata } from "next";
import Link from "next/link";
import FinanciacionForm from "@/features/financiacion/FinanciacionForm";
import FinanciacionLogos from "@/features/financiacion/FinanciacionLogos";
import { MOTO_DB } from "@/features/catalog/data/motos";

const modelos = Array.from(new Set(MOTO_DB.map((m) => m.nombre.trim()))).sort(
  (a, b) => a.localeCompare(b)
);

export const metadata: Metadata = {
  title: "Financiación | NEA Motos",
  description: "Completá tus datos y consultá la financiación por WhatsApp.",
};

export default function Page() {
  return (
    <div className="relative z-0 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide">
            FINANCIACIÓN
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
        <FinanciacionForm modelos={modelos} />
      </section>

      <section className="mt-14 pt-10 border-t border-neutral-200">
        <FinanciacionLogos />
      </section>
    </div>
  );
}
