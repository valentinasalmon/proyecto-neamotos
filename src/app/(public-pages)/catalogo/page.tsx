"use client";

import { useMemo, useState } from "react";
import { MOTO_DB, MotoVisual } from "@/features/catalog/data/motos";
import { CatalogFilters, CatalogFiltersState } from "@/features/catalog/components/CatalogFilters";
import { CatalogGrid } from "@/features/catalog/components/CatalogGrid";

export default function CatalogoPage() {
  const [filters, setFilters] = useState<CatalogFiltersState>({
    marca: "Todas",
    tipo: "Todos",
    search: "",
  });

  // Sacamos todas las marcas y tipos únicos para los selects
  const marcas = useMemo(
    () => Array.from(new Set(MOTO_DB.map((m) => m.marca))).sort(),
    []
  );

  const tipos = useMemo(
    () => Array.from(new Set(MOTO_DB.map((m) => m.tipo))).sort(),
    []
  );

  // Filtrado en memoria
  const filtradas: MotoVisual[] = useMemo(() => {
    return MOTO_DB.filter((moto) => {
      // marca
      if (filters.marca !== "Todas" && moto.marca !== filters.marca) {
        return false;
      }

      // tipo
      if (filters.tipo !== "Todos" && moto.tipo !== filters.tipo) {
        return false;
      }

      // búsqueda por texto (nombre / marca / tipo)
      const q = filters.search.trim().toLowerCase();
      if (q) {
        const hay =
          moto.nombre.toLowerCase().includes(q) ||
          moto.marca.toLowerCase().includes(q) ||
          moto.tipo.toLowerCase().includes(q);
        if (!hay) return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <main className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header de página */}
        <header className="mb-8">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-600 uppercase">
            Catálogo
          </p>

          <h1 className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold leading-[1.1] text-neutral-900">
            Elegí tu próxima moto
          </h1>

          <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-4 max-w-2xl leading-relaxed">
            Buscá por marca, tipo o nombre. Escribinos directo por WhatsApp para
            consultar stock y financiación.
          </p>

          <div className="mt-6 border-t border-neutral-200" />
        </header>

        {/* Barra de filtros */}
        <CatalogFilters
          marcas={marcas}
          tipos={tipos}
          onChange={(next) => setFilters(next)}
        />

        {/* Grilla de motos filtradas */}
        <CatalogGrid items={filtradas} />
      </div>
    </main>
  );
}
