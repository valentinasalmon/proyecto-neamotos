"use client";

import { useMemo, useState } from "react";
import {
  CatalogFiltersIndumentaria,
  CatalogFiltersIndumentariaState,
} from "@/features/indumentaria/components/CatalogFiltersIndumentaria";
import { CatalogGridIndumentaria } from "@/features/indumentaria/components/CatalogGridIndumentaria";
import {
  INDUMENTARIA_DB,
  getCategorias,
  getGeneros,
} from "@/features/indumentaria/data/indumentaria";
import { SizeGuideModal } from "@/features/indumentaria/components/SizeGuideModal";

export default function IndumentariaPage() {
  const [filters, setFilters] = useState<CatalogFiltersIndumentariaState>({
    categoria: "Todas",
    genero: "Todos",
    search: "",
  });

  const categorias = useMemo(() => getCategorias(), []);
  const generos = useMemo(() => getGeneros(), []);

  const filtrados = useMemo(
    () =>
      INDUMENTARIA_DB.filter((item) => {
        // CATEGORÍA
        if (
          filters.categoria !== "Todas" &&
          item.categoria !== filters.categoria
        )
          return false;

        // GÉNERO (soporta array tipo ["Hombre","Mujer"])
        if (filters.genero !== "Todos") {
          const generosItem = Array.isArray(item.genero)
            ? item.genero
            : [item.genero];
          if (!generosItem.includes(filters.genero)) return false;
        }

        // BUSCADOR
        if (filters.search.trim()) {
          const q = filters.search.toLowerCase();
          const generosTexto = Array.isArray(item.genero)
            ? item.genero.join(" ")
            : item.genero;
          const texto = `${item.nombre} ${item.categoria} ${generosTexto}`.toLowerCase();
          if (!texto.includes(q)) return false;
        }

        return true;
      }),
    [filters]
  );

  return (
    <main className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold leading-[1.1]">
               Indumentaria para cada viaje
              </h1>
              <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-3 max-w-2xl leading-relaxed">
                Consultá talles y colores disponibles. Escribinos por WhatsApp.
              </p>
            </div>

            {/* Tabla de talles */}
            <SizeGuideModal />
          </div>

          {/* 🔽 Línea separadora (igual que motos) */}
          <div className="mt-6 border-t border-neutral-200" />
        </header>

        {/* Filtros */}
        <CatalogFiltersIndumentaria
          categorias={categorias}
          generos={generos}
          onChange={setFilters}
        />

        {/* Grid */}
        <CatalogGridIndumentaria items={filtrados} />
      </div>
    </main>
  );
}
