"use client";

import { useMemo, useState, useEffect } from "react";
import { MOTO_DB, MotoVisual } from "@/features/catalog/data/motos";
import {
  CatalogFilters,
  CatalogFiltersState,
} from "@/features/catalog/components/CatalogFilters";
import { CatalogGrid } from "@/features/catalog/components/CatalogGrid";

export default function CatalogoPage() {
  const [filters, setFilters] = useState<CatalogFiltersState>({
    marca: "Todas",
    tipo: "Todos",
    search: "",
  });

  const norm = (s: string) => s.trim().toLowerCase();

  // ✅ Marcas únicas (siempre global)
  const marcas = useMemo(
    () => Array.from(new Set(MOTO_DB.map((m) => m.marca))).sort(),
    []
  );

  // ✅ Tipos DEPENDEN de la marca seleccionada
  const tipos = useMemo(() => {
    const base =
      filters.marca === "Todas"
        ? MOTO_DB
        : MOTO_DB.filter((m) => norm(m.marca) === norm(filters.marca));

    return Array.from(new Set(base.map((m) => m.tipo))).sort();
  }, [filters.marca]);

  // ✅ Si cambia marca y el tipo actual ya no existe para esa marca, reseteo tipo
  useEffect(() => {
    if (filters.tipo === "Todos") return;

    const existe = MOTO_DB.some((m) => {
      const matchMarca =
        filters.marca === "Todas" || norm(m.marca) === norm(filters.marca);
      const matchTipo = norm(m.tipo) === norm(filters.tipo);
      return matchMarca && matchTipo;
    });

    if (!existe) {
      setFilters((prev) => ({ ...prev, tipo: "Todos" }));
    }
  }, [filters.marca]); // a propósito solo cuando cambia marca

  // ✅ Filtrado final (marca + tipo + búsqueda)
  const filtradas: MotoVisual[] = useMemo(() => {
    const q = norm(filters.search);

    return MOTO_DB.filter((moto) => {
      // marca
      if (
        filters.marca !== "Todas" &&
        norm(moto.marca) !== norm(filters.marca)
      ) {
        return false;
      }

      // tipo
      if (filters.tipo !== "Todos" && norm(moto.tipo) !== norm(filters.tipo)) {
        return false;
      }

      // búsqueda
      if (q) {
        const hay =
          norm(moto.nombre).includes(q) ||
          norm(moto.marca).includes(q) ||
          norm(moto.tipo).includes(q);
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
          <h1 className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold leading-[1.1] text-neutral-900">
            Elegí tu próxima moto
          </h1>

          <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-4 max-w-2xl leading-relaxed">
            Escribinos por WhatsApp para consultar stock y financiación.
          </p>

          <div className="mt-6 border-t border-neutral-200" />
        </header>

        {/* Barra de filtros */}
        <CatalogFilters marcas={marcas} tipos={tipos} onChange={setFilters} />

        {/* Grilla de motos filtradas */}
        <CatalogGrid items={filtradas} />
      </div>
    </main>
  );
}
