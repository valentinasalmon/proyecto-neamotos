

export default function CatalogoPage() {
  return (
    <main className="bg-[#f8f9fa] text-neutral-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold">
          Catálogo completo
        </h1>
        <p className="text-sm text-neutral-600 mt-2 max-w-xl">
          Todas las motos disponibles. Consultanos por financiación, entrega inmediata y disponibilidad por color.
        </p>

        {/* acá después metemos el grid completo de productos */}
        <div className="mt-10 text-neutral-500 text-sm italic">
          (Acá va el grid de todas las motos 😎)
        </div>
      </div>
    </main>
  );
}
