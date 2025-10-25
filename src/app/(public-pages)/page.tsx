import { Hero } from "@/features/hero-section";
import { Marquee } from "@/features/brands-marquee";
import { FeaturedMotosCarousel } from "@/features/catalog/components/FeaturedMotosCarousel";
import { GalleryGrid } from "@/features/gallery";
import { PromoStrip } from "@/features/promo";
import { StatsBlock } from "@/features/stats";
import { HelmetsBlock } from "@/features/helmets";

export default function Home() {
  return (
    <>
      {/* HERO principal con slider grande */}
      <Hero />

      {/* FRANJA DE MARCAS (logos que se mueven) */}
      <section id="marcas" className="py-0">
        <Marquee />
      </section>

      {/* GALERÍA BLANCA con 3 fotos grandes */}
      <section id="galeria">
        <GalleryGrid />
      </section>

      {/* FRANJA PROMO AZUL con CTA "Ver motos" */}
      <PromoStrip />
      
        {/* MOTOS DESTACADAS (carrusel 1 en mobile / 3 en desktop) */}
      <section id="destacadas">
        <FeaturedMotosCarousel />
      </section>


      {/* MÉTRICAS / CONFIANZA / EXPERIENCIA */}
      <section id="metricas" aria-label="Métricas NEA MOTOS">
        <StatsBlock />
      </section>

      {/* CASCOS / ACCESORIOS */}
      <section id="cascos" className="py-16">
        <HelmetsBlock />
      </section>
    </>
  );
}
