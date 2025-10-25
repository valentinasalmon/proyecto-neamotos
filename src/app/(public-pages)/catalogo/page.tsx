import { CatalogGrid } from "@/features/catalog/components/CatalogGrid";
import { CatalogFilters } from "@/features/catalog/components/CatalogFilters";

export default function CatalogoPage() {
  return (
    <main className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADER */}
        <header className="mb-8">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-600 uppercase">
            catálogo completo
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-[1.9rem] sm:text-[2.2rem] font-extrabold leading-[1.1] text-neutral-900">
                Todas las motos disponibles
              </h1>
              <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-3 max-w-2xl leading-relaxed">
                Stock actualizado, financiación y asesoramiento personalizado. Elegí tu próxima moto con confianza.
              </p>
            </div>

            <div className="hidden sm:block text-[12px] text-neutral-500">
              <span className="inline-block rounded-full bg-white border border-neutral-200 px-3 py-1 shadow-sm">
                Envíos a todo el país
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-200" />
        </header>

        {/* FILTROS */}
        <section className="mb-10">
          <CatalogFilters />
        </section>

        {/* GRID DE MOTOS */}
        <section className="mb-24">
          <CatalogGrid />
        </section>

      </div>
    </main>
  );
}
