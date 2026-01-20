"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MOTO_DB } from "@/features/catalog/data/motos";
import { MotoCard } from "@/features/catalog/components/MotoCard";

export function FeaturedMotosCarousel() {
  const destacadas = MOTO_DB.filter((m) => m.destacada);
  if (destacadas.length === 0) return null;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: destacadas.length > 1,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="bg-[#f5f6f7] py-12 sm:py-16"
      id="destacadas"
      aria-labelledby="destacadas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
      <div className="mb-10">
  <p
    className="
      text-[11px] sm:text-[12px]
      font-semibold tracking-[0.3em]
      text-red-600 uppercase
      mb-2
    "
  >
    Elegí tu moto
  </p>

  <h2
    id="destacadas-heading"
    className="
      font-display font-extrabold
      text-[28px] sm:text-[36px] lg:text-[42px]
      leading-[1.1]
      text-neutral-900
    "
  >
    Motos destacadas
  </h2>
</div>


        {/* Wrapper con padding lateral para flechas */}
        <div className="relative px-10 sm:px-12">
          {/* Flecha izquierda */}
          {destacadas.length > 1 && (
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                h-9 w-9 sm:h-10 sm:w-10
                rounded-full bg-white border border-neutral-300
                text-neutral-700 shadow-md
                hover:scale-110 active:scale-95 transition
                z-10
              "
            >
              ‹
            </button>
          )}

          {/* Flecha derecha */}
          {destacadas.length > 1 && (
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Siguiente"
              className="
                absolute right-0 top-1/2 -translate-y-1/2
                h-9 w-9 sm:h-10 sm:w-10
                rounded-full bg-white border border-neutral-300
                text-neutral-700 shadow-md
                hover:scale-110 active:scale-95 transition
                z-10
              "
            >
              ›
            </button>
          )}

          {/* Carrusel (contenido real) */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {destacadas.map((m) => (
                <div
                  key={m.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(33.333%-1rem)] sm:mr-6"
                >
                  <MotoCard moto={m} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bullets */}
        {destacadas.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {destacadas.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${
                  i === selectedIndex ? "bg-red-600" : "bg-neutral-400/40"
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="/catalogo"
            className="inline-block rounded-none bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold px-5 py-3 shadow-[0_16px_32px_rgba(220,38,38,0.4)]"
          >
            Ver catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
