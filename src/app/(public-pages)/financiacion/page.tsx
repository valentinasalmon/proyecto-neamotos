import type { Metadata } from "next";
import Link from "next/link";
import FinanciacionForm from "@/features/financiacion/FinanciacionForm";
import FinanciacionLogos from "@/features/financiacion/FinanciacionLogos";

// 👇 IMPORTÁ TU DB DE MOTOS (ajustá el path si es distinto)
import { MOTO_DB } from "@/features/catalog/data/motos";

// 👉 Solo el nombre del modelo (único y ordenado)
const modelos = Array.from(
  new Set(MOTO_DB.map((m) => m.nombre.trim())) // ej. "ZB 110 FULL"
).sort((a, b) => a.localeCompare(b));

// (OPCIONAL) “Marca + Modelo”
// const modelos = Array.from(new Set(MOTO_DB.map(m => `${m.marca} ${m.nombre}`))).sort((a,b)=>a.localeCompare(b));

export const metadata: Metadata = {
  title: "Financiación | NEA Motos",
  description: "Completá tus datos y consultá la financiación por WhatsApp.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
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
        {/* 👇 Pasamos los modelos al form para el autocomplete */}
        <FinanciacionForm modelos={modelos} />
      </section>

      {/* 👇 Logos de financiación (centrados y con buen espaciado) */}
      <section className="mt-14 pt-10 border-t border-neutral-200">
        <FinanciacionLogos />
      </section>
    </main>
  );
}
