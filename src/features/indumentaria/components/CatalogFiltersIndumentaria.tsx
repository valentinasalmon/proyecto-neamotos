"use client";

import { useState } from "react";

export type CatalogFiltersIndumentariaState = {
  categoria: string;
  genero: string;
  search: string;
};

export function CatalogFiltersIndumentaria({
  categorias,
  generos,
  onChange,
}: {
  categorias: string[];
  generos: string[];
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
    <section className="bg-white border border-neutral-300 p-4 mb-6 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px]">
        {/* Buscar */}
        <div>
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1 block">
            Buscar
          </label>
          <input
            className="border border-neutral-300 px-3 py-2 w-full"
            placeholder="Ej: Campera, Guantes..."
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        {/* Categoría */}
        <div>
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1 block">
            Categoría
          </label>
          <select
            className="border border-neutral-300 px-3 py-2 w-full"
            value={filters.categoria}
            onChange={(e) => update("categoria", e.target.value)}
          >
            <option value="Todas">Todas</option>
            {categorias.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Género */}
        <div>
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1 block">
            Género
          </label>
          <select
            className="border border-neutral-300 px-3 py-2 w-full"
            value={filters.genero}
            onChange={(e) => update("genero", e.target.value)}
          >
            <option value="Todos">Todos</option>
            {generos.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
