"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Moto = {
  id: string;
  nombre: string;
  img: string;
  detalles?: string; // ya no lo mostramos pero lo dejo por si después querés usarlo
};

const MOTOS: Moto[] = [
  {
    id: "1",
    nombre: "Zontes RR 703",
    img: "/motos/zontes-rr703.png",
  },
  {
    id: "2",
    nombre: "Yamaha FZ 25 ABS",
    img: "/motos/yamaha-fz25.png",
  },
  {
    id: "3",
    nombre: "Yamaha XMAX 300",
    img: "/motos/xmax-300.png",
  },
  {
    id: "4",
    nombre: "Kove 525 X",
    img: "/motos/kove-525x.png",
  },
];

export function FeaturedMotosCarousel() {
  // carrusel embla
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
    if (emblaApi) emblaApi.scrollPrev();
  }

  function scrollNext() {
    if (emblaApi) emblaApi.scrollNext();
  }

  return (
    <section
      className="bg-[#f8f9fa] py-12 sm:py-16"
      id="destacadas"
      aria-labelledby="destacadas-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado + flechas */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-red-600 uppercase">
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

        {/* CARRUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {MOTOS.map((moto) => (
              <article
                key={moto.id}
                className="
                  min-w-0
                  flex-[0_0_100%]
                  sm:flex-[0_0_calc(33.333%-1rem)]
                  sm:mr-6
                  bg-white rounded-xl border border-neutral-200 shadow-sm flex flex-col
                "
              >
                {/* Imagen */}
                <div className="relative w-full h-[200px] sm:h-[220px] flex items-center justify-center p-4 border-b border-neutral-200">
                  <Image
                    src={moto.img}
                    alt={moto.nombre}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Info */}
                <div className="px-4 pb-4 pt-3 flex flex-col gap-3">
                  {/* Modelo de la moto: más grande ahora */}
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 leading-snug">
                    {moto.nombre}
                  </h3>

                  {/* Línea inferior con CTA WhatsApp */}
                  <div className="flex items-center justify-end">
                    <a
                      href="https://wa.me/5493790000000?text=Hola!%20Quiero%20info%20de%20esta%20moto"
                      className="inline-flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-[12px] font-semibold px-3 py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
                    >
                      {/* Ícono WhatsApp */}
                      <span className="inline-block w-[14px] h-[14px]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full"
                          aria-hidden="true"
                        >
                          <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
                        </svg>
                      </span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bullets debajo */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {MOTOS.map((_, i) => (
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

        {/* CTA ver catálogo completo */}
        <div className="mt-8 flex justify-center">
          <a
            href="/catalogo"
            className="inline-block rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold px-5 py-3 shadow-[0_16px_32px_rgba(220,38,38,0.4)]"
          >
            Mirar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}
