"use client";

import { IndumentariaItem } from "../data/indumentaria";
import { IndumentariaCard } from "./IndumentariaCard";

export function CatalogGridIndumentaria({ items }: { items: IndumentariaItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <IndumentariaCard key={item.id} item={item} />
      ))}
    </div>
  );
}
