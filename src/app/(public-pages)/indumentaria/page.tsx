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
        if (filters.categoria !== "Todas" && item.categoria !== filters.categoria)
          return false;

        // GÉNERO (soporta array tipo ["Hombre","Mujer"])
        if (filters.genero !== "Todos") {
          const generosItem = Array.isArray(item.genero) ? item.genero : [item.genero];
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
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Título + botón tabla de talles */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
            Equipate con lo mejor
          </h1>
          <p className="text-[14px] text-neutral-600 max-w-2xl mt-1">
            Consultá talles y colores disponibles. Escribinos por WhatsApp.
          </p>
        </div>

        {/* Botón que abre el modal de tabla de talles */}
        <SizeGuideModal />
      </div>

      <CatalogFiltersIndumentaria
        categorias={categorias}
        generos={generos}
        onChange={setFilters}
      />

      <CatalogGridIndumentaria items={filtrados} />
    </main>
  );
}
