"use client";

import { useState } from "react";

export type CatalogFiltersIndumentariaState = {
  categoria: string;
  genero: "Todos" | "Hombre" | "Mujer";
  search: string;
};

export function CatalogFiltersIndumentaria({
  categorias,
  onChange,
}: {
  categorias: string[];
  onChange: (f: CatalogFiltersIndumentariaState) => void;
}) {
  const [filters, setFilters] = useState<CatalogFiltersIndumentariaState>({
    categoria: "Todas",
    genero: "Todos",
    search: "",
  });

  function update<K extends keyof CatalogFiltersIndumentariaState>(
    key: K,
    value: CatalogFiltersIndumentariaState[K]
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onChange(next);
  }

  return (
    <section className="bg-white border border-neutral-300 shadow-sm rounded-none p-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-neutral-800">
        
        {/* Buscar */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Buscar
          </label>
          <input
            className="
              border border-neutral-300 bg-white
              px-3 py-2 text-[13px] text-neutral-900
              placeholder:text-neutral-400
              outline-none focus:ring-2 focus:ring-red-500/30
            "
            placeholder="Ej: Campera, Guantes..."
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        {/* Categoría */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Categoría
          </label>
          <select
            className="
              border border-neutral-300 bg-white
              px-3 py-2 text-[13px] text-neutral-900
              outline-none focus:ring-2 focus:ring-red-500/30
            "
            value={filters.categoria}
            onChange={(e) => update("categoria", e.target.value)}
          >
            <option value="Todas">Todas</option>
            {categorias.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Género compacto */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Género
          </label>

          <div className="inline-flex rounded-full bg-neutral-100 p-1 text-[12px] font-semibold w-fit">
            {(["Todos", "Hombre", "Mujer"] as const).map((g) => {
              const active = filters.genero === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => update("genero", g)}
                  className={`
                    px-3 py-1 rounded-full transition-colors whitespace-nowrap
                    ${
                      active
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-600 hover:text-neutral-900"
                    }
                  `}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
