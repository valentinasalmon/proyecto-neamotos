import { Hero } from "@/features/hero-section";
import { Marquee, BrandsStatic } from "@/features/brands-marquee";
import { HelmetsBlock } from "@/features/helmets";
import { GalleryGrid } from "@/features/gallery";
import { PromoStrip } from "@/features/promo";
import { HighlightShowcase } from "@/features/showcase";
import { StatsBlock } from "@/features/stats";

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
        <StatsBlock />
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
