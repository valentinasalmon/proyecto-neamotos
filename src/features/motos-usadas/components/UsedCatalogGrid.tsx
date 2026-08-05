"use client";

import { UsedMotoCard } from "@/features/motos-usadas/components/UsedMotoCard";
import type { UsedMotoItem } from "@/features/motos-usadas/data/usedMotos";

export function UsedCatalogGrid({ items }: { items: UsedMotoItem[] }) {
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
        <UsedMotoCard key={moto.id} moto={moto} />
      ))}
    </div>
  );
}

