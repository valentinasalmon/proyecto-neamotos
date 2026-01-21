"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export type Review = {
  author: string;
  text: string;
  rating: number;
  time: string;
};

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  // cantidad de cards visibles por breakpoint (coincide con widths de las cards)
  const getVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 1;
    const w = window.innerWidth;
    if (w >= 1024) return 3; // lg
    if (w >= 640) return 2; // sm
    return 1; // mobile
  }, []);

  const visibleCount = useMemo(() => getVisibleCount(), [getVisibleCount]);

  const maxPage = useMemo(() => {
    if (!reviews.length) return 0;
    return Math.max(0, Math.ceil(reviews.length / visibleCount) - 1);
  }, [reviews.length, visibleCount]);

  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

  const scrollToPage = useCallback(
    (nextPage: number) => {
      const el = trackRef.current;
      if (!el) return;

      const cards = Array.from(el.querySelectorAll("article")) as HTMLElement[];
      if (!cards.length) return;

      const vc = getVisibleCount();
      const targetPage = clamp(nextPage, 0, Math.max(0, Math.ceil(cards.length / vc) - 1));
      const targetIndex = targetPage * vc;

      const first = cards[0].getBoundingClientRect();
      const target = cards[targetIndex]?.getBoundingClientRect();
      if (!target) return;

      const gap = Math.round(cards[0].offsetLeft - el.scrollLeft); // ayuda a mantener snap prolijo
      const cardWidth = Math.round(first.width);
      const step = cardWidth + (gap > 0 ? 0 : 0); // gap real ya lo maneja el layout

      // scrollLeft exacto al inicio de la card target
      el.scrollTo({
        left: cards[targetIndex].offsetLeft,
        behavior: "smooth",
      });

      setPage(targetPage);
    },
    [getVisibleCount]
  );

  const prev = () => scrollToPage(page - 1);
  const next = () => scrollToPage(page + 1);

  // Recalcular al resize para que no quede “en medio” y siempre caiga en página exacta
  useEffect(() => {
    const onResize = () => {
      // re-clamp page actual al nuevo visibleCount
      const vc = getVisibleCount();
      const newMax = Math.max(0, Math.ceil(reviews.length / vc) - 1);
      const newPage = clamp(page, 0, newMax);
      requestAnimationFrame(() => scrollToPage(newPage));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [page, reviews.length, getVisibleCount, scrollToPage]);

  // al cargar reseñas, reset a la primera página
  useEffect(() => {
    setPage(0);
    requestAnimationFrame(() => scrollToPage(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviews.length]);

  const canPrev = page > 0;
  const canNext = page < maxPage;

  return (
    <div className="mt-10">
      {/* Layout con flechas afuera */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          disabled={!canPrev}
          className="
            shrink-0
            h-10 w-10 rounded-full bg-white
            border border-neutral-200
            shadow-[0_10px_25px_rgba(0,0,0,0.10)]
            grid place-items-center
            transition
            hover:scale-105 active:scale-95
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Track */}
        <div
          ref={trackRef}
          className="
            flex-1
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {reviews.map((r, i) => (
            <article
              key={`${r.author}-${i}`}
              className="
                snap-start shrink-0
                w-full
                sm:w-[calc((100%-24px)/2)]
                lg:w-[calc((100%-48px)/3)]
                rounded-2xl bg-white shadow-md ring-1 ring-black/5
                p-5 text-left hover:shadow-lg transition-shadow
              "
            >
              <header className="mb-3">
                <p className="text-sm font-semibold leading-none">{r.author}</p>
                <p className="text-xs text-neutral-500 mt-1">{r.time}</p>
              </header>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className={
                      idx < Math.round(r.rating)
                        ? "fill-yellow-400 stroke-yellow-400"
                        : "stroke-neutral-300"
                    }
                  />
                ))}
              </div>

              <p className="text-sm text-neutral-700 line-clamp-6">“{r.text}”</p>
            </article>
          ))}
        </div>

        <button
          type="button"
          aria-label="Siguiente"
          onClick={next}
          disabled={!canNext}
          className="
            shrink-0
            h-10 w-10 rounded-full bg-white
            border border-neutral-200
            shadow-[0_10px_25px_rgba(0,0,0,0.10)]
            grid place-items-center
            transition
            hover:scale-105 active:scale-95
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
