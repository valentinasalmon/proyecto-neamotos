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
    <main className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h1 className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold leading-[1.1] text-neutral-900">
                Protección en cada trayecto 
              </h1>
              <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-3 max-w-2xl leading-relaxed">
                Elegí el casco que mejor se adapte a vos. Consultá talles, colores y stock disponible por WhatsApp.
              </p>
            </div>

            {/* Tabla de talles */}
            <SizeGuideCascosModal />
          </div>

          {/* Línea separadora (igual que motos/indumentaria) */}
          <div className="mt-6 border-t border-neutral-200" />
        </header>

        <CatalogFiltersCascos items={cascos} onChange={setFilters} />

        <CatalogGridCascos items={filtrados} />
      </div>
    </main>
  );
}
