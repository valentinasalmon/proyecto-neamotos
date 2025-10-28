import { Hero } from "@/features/hero-section";
import { Marquee } from "@/features/brands-marquee";
import { GalleryGrid } from "@/features/gallery";
import { PromoStrip } from "@/features/promo";
import { HighlightShowcase } from "@/features/showcase";
import { StatsBlock } from "@/features/stats";
import { HelmetsBlock } from "@/features/helmets";
import { FeaturedMotosCarousel } from "@/features/catalog/components/FeaturedMotosCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero grande con callout principal */}
      <Hero />

      {/* Franja de logos de marcas */}
      <section id="marcas" className="py-0">
        <Marquee />
      </section>

       {/* Galería visual */}
      <section id="galeria">
        <GalleryGrid />
      </section>

    {/* Franja promo azul */}
      <PromoStrip />

      {/* Carrusel de motos destacadas */}
      <FeaturedMotosCarousel />

      {/* Métricas de confianza */}
      <section id="metricas" aria-label="Métricas NEA MOTOS">
        <StatsBlock />
      </section>

      {/* Showcase de productos / secciones especiales */}
      <HighlightShowcase />


      {/* Cascos */}
      <section id="cascos" className="py-16">
        <HelmetsBlock />
      </section>
    </>
  );
}
