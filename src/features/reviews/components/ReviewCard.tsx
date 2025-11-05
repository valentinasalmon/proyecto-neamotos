"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  author: string;
  text: string;
  rating: number;
  time: string;
  profilePhoto: string;
};

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10">
      <button
        aria-label="Anterior"
        onClick={() => scroll("left")}
        className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow ring-1 ring-black/5 hover:scale-105"
      >
        <ChevronLeft />
      </button>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] snap-start
                       rounded-2xl bg-white shadow-md ring-1 ring-black/5 p-5 text-left
                       hover:shadow-lg transition-shadow"
          >
            <header className="flex items-center gap-3 mb-3">
              <img
                src={r.profilePhoto}
                alt={r.author}
                className="size-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold leading-none">{r.author}</p>
                <p className="text-xs text-neutral-500">{r.time}</p>
              </div>
            </header>

            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  className={idx < Math.round(r.rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-neutral-300"}
                />
              ))}
            </div>

            <p className="text-sm text-neutral-700 line-clamp-6">{r.text}</p>
          </article>
        ))}
      </div>

      <button
        aria-label="Siguiente"
        onClick={() => scroll("right")}
        className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow ring-1 ring-black/5 hover:scale-105"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
