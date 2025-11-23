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
        if (filters.categoria !== "Todas" && item.categoria !== filters.categoria)
          return false;

        if (filters.genero !== "Todos" && item.genero !== filters.genero)
          return false;

        if (filters.search.trim()) {
          const q = filters.search.toLowerCase();
          const texto = `${item.nombre} ${item.categoria} ${item.genero}`.toLowerCase();
          if (!texto.includes(q)) return false;
        }

        return true;
      }),
    [filters]
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">
        Indumentaria NEA Motos
      </h1>
      <p className="text-[14px] text-neutral-600 mb-6 max-w-2xl">
        Elegí la prenda, mirá el modelo y escribinos por WhatsApp para consultar talles disponibles y stock.
      </p>

      <CatalogFiltersIndumentaria
        categorias={categorias}
        generos={generos}
        onChange={setFilters}
      />

      <CatalogGridIndumentaria items={filtrados} />
    </main>
  );
}
