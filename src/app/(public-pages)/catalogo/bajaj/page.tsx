import { CatalogGrid } from "@/features/catalog/components/CatalogGrid";
import { MOTO_DB } from "@/features/catalog/data/catalogData";
import type { MarcaSlug } from "@/features/catalog/data/catalogData";

type PageProps = {
  params: {
    marca: string;
  };
};

export default function MarcaCatalogPage({ params }: PageProps) {
  const { marca } = params;

  const validMarcas: MarcaSlug[] = [
    "bajaj",
    "corven",
    "keller",
    "motomel",
    "zanella",
  ];

  const isValid = validMarcas.includes(marca as MarcaSlug);

  const motosFiltradas = isValid
    ? MOTO_DB.filter((m) => m.marca === marca)
    : [];

  return (
    <main className="bg-[#f5f6f7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-neutral-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="mb-8">
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-600 uppercase">
            catálogo {isValid ? marca : "marca"}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-[1.9rem] sm:text-[2.2rem] font-extrabold leading-[1.1] text-neutral-900">
                {isValid
                  ? `Modelos ${capitalize(marca)}`
                  : "Marca no encontrada"}
              </h1>

              <p className="text-[13px] sm:text-[14px] text-neutral-600 mt-3 max-w-2xl leading-relaxed">
                {isValid
                  ? "Consultá financiación, colores y disponibilidad inmediata de esta marca."
                  : "Revisá el catálogo general para ver todas las opciones."}
              </p>
            </div>

            <div className="hidden sm:block text-[12px] text-neutral-500">
              <span className="inline-block rounded-full bg-white border border-neutral-200 px-3 py-1 shadow-sm">
                Envíos y gestión en todo el país
              </span>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-200" />
        </header>

        {/* Grid filtrada */}
        <section className="mb-24">
          {isValid && motosFiltradas.length > 0 ? (
            <CatalogGrid items={motosFiltradas} />
          ) : (
            <div className="text-center text-neutral-500 text-sm py-16">
              No tenemos stock publicado de esta marca en este momento.
              <br />
              <a
                href="/catalogo"
                className="text-red-600 font-semibold hover:underline"
              >
                Ver catálogo completo →
              </a>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function capitalize(str: string | undefined) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
