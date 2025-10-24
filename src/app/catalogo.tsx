import CatalogWithSidebar from "@/features/catalog/components/CatalogWithSidebar";

export default function CatalogoPage() {
  return (
    <main className="py-12 bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-6">Catálogo</h1>
        <CatalogWithSidebar />
      </section>
    </main>
  );
}