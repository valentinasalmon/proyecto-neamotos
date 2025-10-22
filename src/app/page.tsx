import { Hero } from "@/features/hero";
import { Marquee, BrandsStatic } from "@/features/brands";
import { HelmetsBlock } from "@/features/helmets";
import { StatsStrip } from "@/features/stats";
import CatalogWithSidebar from "@/features/catalog/components/CatalogWithSidebar";
import GalleryGrid from "@/features/gallery/components/GalleryGrid";
import PromoStrip from "@/features/promo/PromoStrip";
     

export default function Home() {
  return (
    <>
      {/* 1) Hero */}
      <Hero />

      {/* 2) Marquee (franja negra marcas) + 3) Galería debajo */}
      <section id="marcas" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
            Trabajamos con marcas líderes
          </h2>
        </div>
        <Marquee />

        {/* Galería de 3 tarjetas justo debajo del marquee */}
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </section>

      {/* 4) Banda promo negra con CTA (como en la imagen) */}
      <PromoStrip />

      {/* 5) Catálogo destacado */}
      <section id="motos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-bold tracking-widest text-brand">ELEGÍ TU MOTO</p>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold">Catálogo destacado</h3>
            </div>
            <div className="hidden sm:block text-sm text-gray-500">
              *Precios orientativos. Consultá disponibilidad.
            </div>
          </div>
          <CatalogWithSidebar />
        </div>
      </section>

      {/* 6) Métricas al final (como en la referencia) */}
      <section id="metricas" aria-label="Métricas NEA MOTOS">
        <StatsStrip />
      </section>

      {/* 7) Bloque cascos (si querés mantenerlo) */}
      <section id="cascos" className="py-16">
        <HelmetsBlock />
      </section>

      {/* (Opcional) marcas estáticas, si querés conservarlo */}
      <section className="py-10">
        <BrandsStatic />
      </section>
    </>
  );
}
