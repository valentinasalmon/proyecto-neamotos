"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export type Review = {
  author: string;
  text: string;
  rating: number;
  time: string;
};

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);

  // índice de la card más alineada al borde izquierdo visible
  const getCurrentIndex = (el: HTMLDivElement, cards: HTMLElement[]) => {
    const crect = el.getBoundingClientRect();
    let best = Infinity;
    let idx = 0;
    cards.forEach((card, i) => {
      const r = card.getBoundingClientRect();
      const dist = Math.abs(r.left - crect.left); // distancia al borde izquierdo del carrusel
      if (dist < best) {
        best = dist;
        idx = i;
      }
    });
    return idx;
  };

  // scrolla a una card por índice usando rects (respeta gap/padding)
  const scrollToIndex = (el: HTMLDivElement, cards: HTMLElement[], index: number) => {
    const crect = el.getBoundingClientRect();
    const r = cards[index].getBoundingClientRect();
    const delta = r.left - crect.left; // cuánto falta para alinear la card al inicio visible
    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
  };

  const handleArrow = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll("article")) as HTMLElement[];
    if (!cards.length) return;

    const cur = getCurrentIndex(el, cards);
    const next = Math.min(Math.max(cur + (dir === "right" ? 1 : -1), 0), cards.length - 1);
    scrollToIndex(el, cards, next);
  };

  return (
    <div className="relative mt-10 font-nea text-neutral-900 flex items-center justify-center gap-6">
      {/* Flecha izquierda - afuera */}
      <button
        onClick={() => handleArrow("left")}
        aria-label="Anterior"
        className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white shadow-md hover:scale-110 active:scale-95 transition-transform"
      >
        <ChevronLeft className="w-5 h-5 text-neutral-700" />
      </button>

      {/* Carrusel (sin márgenes extra que rompan el snap) */}
      <div
        ref={ref}
        className="
          flex overflow-x-auto gap-5 snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          pb-5
        "
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="
              snap-start [scroll-snap-stop:always] shrink-0
              w-[260px] sm:w-[280px] md:w-[300px]
              h-[190px] sm:h-[205px] md:h-[210px]
              bg-white rounded-lg border border-neutral-200
              shadow-[0_3px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
              transition-all duration-300
              flex flex-col items-start p-4 text-left
            "
          >
            {/* Nombre + tiempo */}
            <div>
              <h3 className="text-[15.5px] sm:text-[16px] font-semibold leading-tight">
                {r.author}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-neutral-500">
                {r.time}
              </p>
            </div>

            {/* Estrellas */}
            <div className="flex items-center gap-[2px] mt-[4px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={14}
                  className={idx < Math.round(r.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-neutral-300"}
                />
              ))}
            </div>

            {/* Comentario una línea debajo */}
            <p className="text-[13.5px] sm:text-[14px] text-neutral-700 leading-snug mt-4 line-clamp-3">
              “{r.text}”
            </p>
          </article>
        ))}
      </div>

      {/* Flecha derecha - afuera */}
      <button
        onClick={() => handleArrow("right")}
        aria-label="Siguiente"
        className="flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white shadow-md hover:scale-110 active:scale-95 transition-transform"
      >
        <ChevronRight className="w-5 h-5 text-neutral-700" />
      </button>
    </div>
  );
}
