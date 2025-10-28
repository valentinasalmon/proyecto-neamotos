"use client";

import { useState } from "react";

export type CatalogFiltersState = {
  marca: string;
  tipo: string;
  search: string;
};

export function CatalogFilters({
  marcas,
  tipos,
  onChange,
}: {
  marcas: string[];
  tipos: string[];
  onChange: (f: CatalogFiltersState) => void;
}) {
  const [filters, setFilters] = useState<CatalogFiltersState>({
    marca: "Todas",
    tipo: "Todos",
    search: "",
  });

  function update<K extends keyof CatalogFiltersState>(
    key: K,
    value: CatalogFiltersState[K]
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onChange(next);
  }

  return (
    <section className="bg-white border border-neutral-300 shadow-sm rounded-none p-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-[13px] text-neutral-800">
        {/* Buscar por texto */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Buscar
          </label>
          <input
            className="border border-neutral-300 bg-white px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-red-500/30"
            placeholder="Ej: Blitz, Rouser, Skua..."
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        {/* Marca */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Marca
          </label>
          <select
            className="border border-neutral-300 bg-white px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-red-500/30"
            value={filters.marca}
            onChange={(e) => update("marca", e.target.value)}
          >
            <option>Todas</option>
            {marcas.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Tipo */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Tipo
          </label>
          <select
            className="border border-neutral-300 bg-white px-3 py-2 text-[13px] outline-none focus:ring-2 focus:ring-red-500/30"
            value={filters.tipo}
            onChange={(e) => update("tipo", e.target.value)}
          >
            <option>Todos</option>
            {tipos.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Bot simulado */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-transparent uppercase mb-1 select-none">
            .
          </label>
          <button
            className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-[13px] w-full py-2 shadow-[0_12px_24px_rgba(220,38,38,0.4)]"
            onClick={() => onChange(filters)}
          >
            Filtrar
          </button>
        </div>
      </div>
    </section>
  );
}
