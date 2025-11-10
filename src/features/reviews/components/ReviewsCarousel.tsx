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
      const dist = Math.abs(r.left - crect.left);
      if (dist < best) {
        best = dist;
        idx = i;
      }
    });
    return idx;
  };

  // scroll a una card por índice usando rects (respeta gap/padding)
  const scrollToIndex = (el: HTMLDivElement, cards: HTMLElement[], index: number) => {
    const crect = el.getBoundingClientRect();
    const r = cards[index].getBoundingClientRect();
    el.scrollTo({ left: el.scrollLeft + (r.left - crect.left), behavior: "smooth" });
  };

  // cuántas cards por vista (1 / 2 / 3) según el ancho real del carrusel
  const getVisiblePerView = (el: HTMLDivElement, firstCard: HTMLElement | null) => {
    if (!firstCard) return 1;
    const cardW = firstCard.getBoundingClientRect().width;
    const gapPx = 20; // gap-5
    const elW = el.getBoundingClientRect().width;
    const approx = Math.max(1, Math.floor((elW + gapPx) / (cardW + gapPx)));
    return Math.min(3, approx);
  };

  // flechas: avanzar/retroceder por grupos completos (1/2/3)
  const handleArrow = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll("article")) as HTMLElement[];
    if (!cards.length) return;

    const visible = getVisiblePerView(el, cards[0]);
    const cur = getCurrentIndex(el, cards);
    const delta = dir === "right" ? visible : -visible;
    const next = Math.min(Math.max(cur + delta, 0), Math.max(cards.length - visible, 0));
    scrollToIndex(el, cards, next);
  };

  return (
    <div className="relative mt-10 flex items-center justify-center gap-6 font-manrope text-neutral-900">
      {/* Flecha izquierda (afuera). Oculta en mobile para no tapar contenido */}
      <button
        onClick={() => handleArrow("left")}
        aria-label="Anterior"
        className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white shadow-md hover:scale-110 active:scale-95 transition-transform"
      >
        <ChevronLeft className="w-5 h-5 text-neutral-700" />
      </button>

      {/* Carrusel */}
      <div
        ref={ref}
        className="
          flex overflow-x-auto gap-5 snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-5
        "
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="
              snap-start [scroll-snap-stop:always] shrink-0
              w-full                               /* 1 por vista en mobile -> sin cortes */
              sm:w-[calc((100%-20px)/2)]           /* 2 por vista en sm (gap-5=20px) */
              md:w-[calc((100%-40px)/3)]           /* 3 por vista en md (2 gaps=40px) */
              min-h-[200px]
              bg-white rounded-xl border border-neutral-200
              shadow-[0_3px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.09)]
              transition-all duration-300
              flex flex-col items-start p-5 text-left
            "
          >
            {/* Nombre + tiempo */}
            <div>
              <h3 className="font-bebas text-[20px] leading-none tracking-[0.3px]">
                {r.author}
              </h3>
              <p className="font-manrope text-[13px] text-neutral-500 mt-1">
                {r.time}
              </p>
            </div>

            {/* Estrellas */}
            <div className="flex items-center gap-[2px] mt-[6px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={15}
                  className={idx < Math.round(r.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-neutral-300"}
                />
              ))}
            </div>

            {/* Comentario */}
            <p className="font-manrope text-[14px] text-neutral-700 leading-snug mt-4 line-clamp-4">
              “{r.text}”
            </p>
          </article>
        ))}
      </div>

      {/* Flecha derecha (afuera). Oculta en mobile */}
      <button
        onClick={() => handleArrow("right")}
        aria-label="Siguiente"
        className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full border border-neutral-300 bg-white shadow-md hover:scale-110 active:scale-95 transition-transform"
      >
        <ChevronRight className="w-5 h-5 text-neutral-700" />
      </button>
    </div>
  );
}
