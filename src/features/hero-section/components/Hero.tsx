"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";

type Slide = {
  src: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const slides: Slide[] = [
  {
    src: "/hero/prueba.jpg",
    title: "50% OFF EN TU PRIMERA COMPRA",
    subtitle: "Cascos y equipamiento para tu moto",
    ctaLabel: "VER CATÁLOGO",
    ctaHref: "#motos",
  },
  {
    src: "/hero/prueba2.jpg",
    title: "CONSULTA POR FINANCIACIÓN",
    subtitle: "Asesoramiento personalizado para tu próxima moto",
    ctaLabel: "CONSULTÁ POR WHATSAPP",
    ctaHref: "https://wa.me/549379XXXX",
  },
  {
    src: "/hero/prueba3.jpg",
    title: "STOCK DE MARCAS LÍDERES",
    subtitle: "Scooters, street, urbanas y más",
    ctaLabel: "VER MARCAS",
    ctaHref: "#marcas",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 20,
      draggable: false,
    },
    [
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative select-none">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[420px] sm:h-[520px] lg:h-[600px]">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover pointer-events-none"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 sm:px-6 lg:px-8 text-center text-white max-w-3xl">
                    <p className="text-[12px] sm:text-sm font-semibold tracking-[0.25em] text-white/80">
              
                    </p>

                    <h1 className="mt-2 font-display font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
                      {s.title}
                    </h1>

                    {s.subtitle && (
                      <p className="mt-3 text-sm sm:text-base text-white/80">
                        {s.subtitle}
                      </p>
                    )}

                 { s.ctaLabel && s.ctaHref && (
                  
                  <div className="mt-6">
                    <a
                      href={s.ctaHref}
                      className="inline-block rounded-full px-6 sm:px-8 py-3 text-sm font-bold text-white
                 transition shadow-[0_8px_20px_var(--brand-red-glow)]
                 focus:outline-none focus:ring-2 focus:ring-white/60"
                 style={{
              backgroundColor: "var(--brand-red)",
                   }}
                 onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                 "var(--brand-red-hover)";
               }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
             "var(--brand-red)";
          }}
    >
      {s.ctaLabel}
    </a>
  </div>
)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bullets del carrusel */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              index === i ? "w-6 bg-white/90" : "w-3 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
