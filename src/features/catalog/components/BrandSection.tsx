"use client";

import { CatalogBrand } from "@/features/catalog/data/catalogData";

export function BrandSection({ brand }: { brand: CatalogBrand }) {
  return (
    <section
      id={brand.slug}
      className="bg-white border border-neutral-200 shadow-[0_24px_48px_rgba(0,0,0,0.06)] rounded-none mb-12"
    >
      {/* Header de la marca */}
      <header className="px-6 py-5 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
            {brand.displayName}
          </h2>
          <p className="text-[13px] text-neutral-600 leading-relaxed max-w-xl">
            Línea oficial {brand.displayName}. Consultá stock, financiación y
            entrega inmediata.
          </p>
        </div>

        <div className="text-[12px] text-neutral-500">
          <span className="inline-block rounded-full bg-neutral-50 border border-neutral-300 px-3 py-1 shadow-sm">
            Atención en todo el país
          </span>
        </div>
      </header>

      {/* Cuerpo: categorías */}
      <div className="divide-y divide-neutral-200">
        {brand.categorias.map((cat, idx) => (
          <div key={idx} className="px-6 py-6">
            {/* nombre de categoría */}
            <div className="flex items-baseline justify-between flex-wrap mb-4">
              <span className="text-[12px] font-bold tracking-wide text-neutral-700 uppercase">
                {cat.nombreCategoria}
              </span>
              <span className="text-[11px] text-neutral-500 font-medium">
                {cat.modelos.length} modelo
                {cat.modelos.length === 1 ? "" : "s"}
              </span>
            </div>

            {/* tabla de modelos */}
            <ul className="border border-neutral-200 rounded-none divide-y divide-neutral-200 bg-neutral-50/40">
              {cat.modelos.map((modelo, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-4 text-[13px] leading-relaxed"
                >
                  {/* detalle del modelo */}
                  <div className="flex-1 min-w-0">
                    <p className="text-neutral-900 font-semibold text-[14px] leading-snug">
                      {modelo.nombre}
                    </p>

                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-600 leading-snug">
                      {modelo.cilindrada && (
                        <span className="inline-block">
                          {modelo.cilindrada}
                        </span>
                      )}
                      {modelo.potencia && (
                        <span className="inline-block">
                          {modelo.potencia}
                        </span>
                      )}
                      {modelo.transmision && (
                        <span className="inline-block">
                          {modelo.transmision}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA WhatsApp */}
                  <div className="mt-3 sm:mt-0 sm:ml-6 flex-shrink-0">
                    <a
                      href={`https://wa.me/5493790000000?text=Hola!%20Quiero%20consultar%20stock%20de%20${encodeURIComponent(
                        modelo.nombre
                      )}%20de%20${encodeURIComponent(brand.displayName)}`}
                      className="inline-flex items-center gap-2 px-3 py-2 text-[12px] font-semibold leading-none bg-green-500 hover:bg-green-600 active:bg-green-700 text-white shadow-[0_12px_24px_rgba(0,0,0,0.25)] rounded-full"
                    >
                      <span className="inline-block w-[14px] h-[14px]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full"
                          aria-hidden="true"
                        >
                          <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
                        </svg>
                      </span>
                      <span>Consultar stock</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
