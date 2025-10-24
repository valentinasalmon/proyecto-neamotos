import { Hero } from "@/features/hero";
import { Marquee, BrandsStatic } from "@/features/brands";
import { HelmetsBlock } from "@/features/helmets";
import { StatsStrip } from "@/features/stats";
import GalleryGrid from "@/features/gallery/components/GalleryGrid";
import PromoStrip from "@/features/promo/PromoStrip";
import { HighlightShowcase } from "@/features/showcase";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="marcas" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6">Trabajamos con marcas líderes</h2>
        </div>
        <Marquee />
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </section>

      <PromoStrip />

      <HighlightShowcase />

      <section id="metricas" aria-label="Métricas NEA MOTOS">
        <StatsStrip />
      </section>

      <section id="cascos" className="py-16">
        <HelmetsBlock />
      </section>

      <section className="py-10">
        <BrandsStatic />
      </section>
    </>
  );
}
