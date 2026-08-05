import type { Metadata } from "next";

import { MotosUsadasCatalog } from "./MotosUsadasCatalog";

export const metadata: Metadata = {
  title: "Motos usadas | NEA Motos",
  description:
    "Elegí tu próxima moto usada. Consultá por WhatsApp para precio, km, estado y documentación.",
};

export default function Page() {
  return (
    <div className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <MotosUsadasCatalog />
    </div>
  );
}

