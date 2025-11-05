import { Hero } from "@/features/hero-section";
import { Marquee } from "@/features/brands-marquee";
import { GalleryGrid } from "@/features/gallery";
import { PromoStrip } from "@/features/promo";
import { HighlightShowcase } from "@/features/showcase";
import { FeaturedMotosCarousel } from "@/features/catalog/components/FeaturedMotosCarousel";
import { ReviewsSection } from "@/features/reviews/components/ReviewsSection";

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

      {/* Showcase de productos / secciones especiales */}
      <HighlightShowcase />

         {/* ==== RESEÑAS */}
      <ReviewsSection />
    </>
  );
}
