"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MOTO_DB } from "@/features/catalog/data/motos";
import { MotoCard } from "@/features/catalog/components/MotoCard";

export function FeaturedMotosCarousel() {
  const destacadas = MOTO_DB.filter((m) => m.destacada);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
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

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section
      className="bg-[#f5f6f7] py-12 sm:py-16"
      id="destacadas"
      aria-labelledby="destacadas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado + flechas */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-600 uppercase">
              Elegí tu moto
            </p>
            <h2
              id="destacadas-heading"
              className="font-display font-extrabold leading-[1.15] text-2xl sm:text-3xl text-neutral-900"
            >
              Motos destacadas
            </h2>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={scrollPrev}
              className="h-8 w-8 rounded-full border border-neutral-300 bg-white text-neutral-700 text-xs font-semibold hover:bg-neutral-100 active:bg-neutral-200"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={scrollNext}
              className="h-8 w-8 rounded-full border border-neutral-300 bg-white text-neutral-700 text-xs font-semibold hover:bg-neutral-100 active:bg-neutral-200"
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {destacadas.map((moto) => (
              <div
                key={moto.id}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  sm:flex-[0_0_calc(33.333%-1rem)]
                  sm:mr-6
                "
              >
                <MotoCard moto={moto} />
              </div>
            ))}
          </div>
        </div>

        {/* Bullets */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {destacadas.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === selectedIndex
                  ? "bg-red-600"
                  : "bg-neutral-400/40"
              }`}
            />
          ))}
        </div>

        {/* CTA al catálogo */}
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
