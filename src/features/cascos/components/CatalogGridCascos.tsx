// features/cascos/components/CatalogGridCascos.tsx
"use client";

import { CascoItem } from "../data/cascos";
import { CascoCard } from "./CascoCard";

export function CatalogGridCascos({ items }: { items: CascoItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <CascoCard key={item.id} item={item} />
      ))}
    </div>
  );
}
