"use client";

import { useMemo, useState } from "react";
import {
  CatalogFiltersCascos,
  CatalogFiltersCascosState,
} from "@/features/cascos/components/CatalogFiltersCascos";
import { CatalogGridCascos } from "@/features/cascos/components/CatalogGridCascos";
import { cascos } from "@/features/cascos/data/cascos";
import { SizeGuideCascosModal } from "@/features/cascos/components/SizeGuideCascosModal";

export default function CascosPage() {
  const [filters, setFilters] = useState<CatalogFiltersCascosState>({
    categoria: "Todas",
    marca: "Todas",
    search: "",
  });

  const filtrados = useMemo(
    () =>
      cascos.filter((item) => {
        // CATEGORÍA
        if (filters.categoria !== "Todas" && item.categoria !== filters.categoria)
          return false;

        // MARCA
        if (filters.marca !== "Todas" && item.marca !== filters.marca) return false;

        // BUSCADOR
        if (filters.search.trim()) {
          const q = filters.search.toLowerCase();
          const texto = `${item.nombre} ${item.categoria} ${item.marca} ${
            item.material ?? ""
          }`.toLowerCase();
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
            Cascos para cada viaje
          </h1>
          <p className="text-[14px] text-neutral-600 max-w-2xl mt-1">
            Elegí el casco que mejor se adapte a vos. Consultá talles, colores y
            stock disponible por WhatsApp.
          </p>
        </div>

        {/* Botón que abre el modal de tabla de talles de cascos */}
        <SizeGuideCascosModal />
      </div>

      <CatalogFiltersCascos onChange={setFilters} />

      <CatalogGridCascos items={filtrados} />
    </main>
  );
}
