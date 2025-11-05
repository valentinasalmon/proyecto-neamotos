"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export type Review = {
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
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div
      className="
        relative mt-8 px-3 sm:px-6
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
      "
    >
      {/* Flecha izq */}
      <button
        aria-label="Anterior"
        onClick={() => scroll("left")}
        className="
          hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10
          h-10 w-10 items-center justify-center rounded-full bg-white shadow
          ring-1 ring-black/5 hover:scale-105 transition
        "
      >
        <ChevronLeft className="text-neutral-700" />
      </button>

      {/* Track */}
      <div
        ref={ref}
        className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {reviews.map((r, i) => (
          <article
            key={i}
            className="
              snap-start min-w-[320px] sm:min-w-[380px] lg:min-w-[440px]
              bg-white rounded-2xl p-5 text-left shadow-md ring-1 ring-black/5
              hover:shadow-lg transition-shadow
            "
          >
            <header className="flex items-center gap-3 mb-3">
              <img
                src={r.profilePhoto || "/avatar-fallback.png"}
                onError={(e) => {
                  const img = e.currentTarget;
                  img.onerror = null;
                  img.src = "/avatar-fallback.png";
                }}
                alt={r.author}
                className="h-10 w-10 rounded-full object-cover bg-neutral-100"
                loading="lazy"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-none">{r.author}</p>
                <p className="text-xs text-neutral-500">{r.time}</p>
              </div>
            </header>

            <div className="flex items-center gap-1 mb-2">
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

            {/* Área de texto con altura fija para que TODAS midan lo mismo */}
            <div className="h-[112px]"> {/* ~6 líneas aprox */}
              <p className="text-sm text-neutral-700 leading-relaxed line-clamp-6">
                {r.text}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Flecha der */}
      <button
        aria-label="Siguiente"
        onClick={() => scroll("right")}
        className="
          hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10
          h-10 w-10 items-center justify-center rounded-full bg-white shadow
          ring-1 ring-black/5 hover:scale-105 transition
        "
      >
        <ChevronRight className="text-neutral-700" />
      </button>
    </div>
  );
}
