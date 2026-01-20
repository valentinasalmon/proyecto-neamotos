"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

export type Review = {
  author: string;
  text: string;
  rating: number;
  time: string;
};

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

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

  const scrollToIndex = (el: HTMLDivElement, cards: HTMLElement[], index: number) => {
    const crect = el.getBoundingClientRect();
    const r = cards[index].getBoundingClientRect();
    el.scrollTo({
      left: el.scrollLeft + (r.left - crect.left),
      behavior: "smooth",
    });
  };

  const startAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = window.setInterval(() => {
      if (pausedRef.current) return;

      const el = ref.current;
      if (!el) return;

      const cards = Array.from(el.querySelectorAll("article")) as HTMLElement[];
      if (!cards.length) return;

      const cur = getCurrentIndex(el, cards);
      const next = cur + 1 >= cards.length ? 0 : cur + 1;

      scrollToIndex(el, cards, next);
    }, 4500); // ⬅️ velocidad (más alto = más lento)
  };

  const stopAuto = () => {
    pausedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resumeAuto = () => {
    pausedRef.current = false;
    startAuto();
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [reviews.length]);

  return (
    <div className="relative mt-10 font-manrope text-neutral-900">
      <div
        ref={ref}
        className="
          flex overflow-x-auto gap-5 snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-5
        "
        onMouseEnter={stopAuto}
        onMouseLeave={resumeAuto}
        onTouchStart={stopAuto}
        onTouchEnd={() => setTimeout(resumeAuto, 800)}
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="
              snap-start shrink-0
              w-full
              sm:w-[calc((100%-20px)/2)]
              md:w-[calc((100%-40px)/3)]
              bg-white rounded-xl border border-neutral-200
              shadow-[0_3px_10px_rgba(0,0,0,0.06)]
              p-5 text-left
            "
          >
            <h3 className="font-bebas text-[20px] leading-none">{r.author}</h3>
            <p className="text-xs text-neutral-500 mt-1">{r.time}</p>

            <div className="flex items-center gap-[2px] mt-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={15}
                  className={
                    idx < Math.round(r.rating)
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "stroke-neutral-300"
                  }
                />
              ))}
            </div>

            <p className="text-sm text-neutral-700 leading-snug mt-4 line-clamp-4">
              “{r.text}”
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
