"use client";

import { useMemo, useState } from "react";
import { UsedCatalogGrid } from "@/features/motos-usadas/components/UsedCatalogGrid";
import {
  USED_MOTOS_DB,
} from "@/features/motos-usadas/data/usedMotos";

const PAGE_SIZE = 24;

export function MotosUsadasCatalog() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const motosReales = useMemo(
    () => USED_MOTOS_DB.filter((m) => !m.placeholder),
    []
  );

  const shown = useMemo(
    () => motosReales.slice(0, visible),
    [motosReales, visible]
  );
  const hasMore = visible < motosReales.length;

  if (motosReales.length === 0) {
    return (
      <div className="max-w-7xl mx-auto w-full py-20 text-center">
        <div className="font-display text-[2rem] leading-[1.1] text-neutral-900">
          No hay stock de motos cargadas por el momento
        </div>
        <div className="mt-3 text-[14px] text-neutral-600">
          En cuanto carguemos motos usadas con fotos y detalles, vas a poder verlas
          acá.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto w-full">
      <header className="mb-8">
        <h1 className="font-display text-[2rem] sm:text-[2.25rem] font-extrabold leading-[1.1]">
          Elegí tu próxima moto usada
        </h1>
        <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-4 max-w-2xl leading-relaxed">
          En cada tarjeta vas a ver la galería de imágenes de esa moto (se activa
          cuando se cargan varias fotos). Consultá por WhatsApp por precio, km,
          estado y documentación.
        </p>
        <div className="mt-6 border-t border-neutral-200" />
      </header>

      <UsedCatalogGrid items={shown} />

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="
              rounded-full bg-neutral-900 text-white
              px-6 py-3 text-[14px] font-semibold
              hover:bg-neutral-800 active:bg-neutral-950
              transition
            "
          >
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}

