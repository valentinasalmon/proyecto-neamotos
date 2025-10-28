"use client";

import { MotoVisual } from "@/features/catalog/data/motos";
import { MotoCard } from "@/features/catalog/components/MotoCard";

export function CatalogGrid({ items }: { items: MotoVisual[] }) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {items.map((moto) => (
        <MotoCard key={moto.id} moto={moto} />
      ))}
    </div>
  );
}
