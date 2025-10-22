import { Hero } from "@/features/hero";
import { Marquee, BrandsStatic } from "@/features/brands";
import { HelmetsBlock } from "@/features/helmets";
import { GalleryGrid } from "@/features/gallery";
import { StatsStrip } from "@/features/stats";
import CatalogWithSidebar from "@/features/catalog/components/CatalogWithSidebar";


export default function Home() {
  return (
    <>
      <Hero />

      <section id="marcas" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">
            Trabajamos con marcas líderes
          </h2>
        </div>
        <Marquee />
      </section>

      <section id="metricas" aria-label="Métricas NEA MOTOS">
        <StatsStrip />
      </section>

      <section id="cascos" className="py-16">
        <HelmetsBlock />
      </section>

      <section className="py-10">
        <BrandsStatic />
      </section>

      <section id="gallery" className="py-16">
        <GalleryGrid />
      </section>

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
    </>
  );
}
