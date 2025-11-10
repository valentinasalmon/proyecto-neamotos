"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { ReviewsCarousel, type Review } from "./ReviewsCarousel";

type Payload = {
  placeId: string;
  rating?: number;
  total?: number;
  reviews: Review[];
};

export function ReviewsSection() {
  const [data, setData] = useState<Payload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/reviews.json", { cache: "no-store" });
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || "Error al obtener reseñas");
        setData(json);
        setError(null);
      } catch (e: any) {
        setError(e.message ?? "Error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const googleReviewUrl =
    "https://www.google.com/search?sca_esv=8bf17b38d04cf49d&rlz=1C1CHBF_esAR1175AR1175&sxsrf=AE3TifNolv1dqiZp9fFt4S7XrMNt4VHwEA:1762731466252&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwinIxSBiJwBkcivDGU0kxcbPk0GmAeWuXhCFAojvrhy08ILPmtk373OP8fherA9Nq1H9CDnhQQMUN5ev_hV1EIo_HKY&q=Nea+Motos+Opiniones&sa=X&ved=2ahUKEwiIoIW3nuaQAxXYpZUCHZ3jCe4Q0bkNegQINxAD&biw=1920&bih=945&dpr=1";

  return (
    <section id="reseñas" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* === ENCABEZADO === */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <h2
            className="
              font-anton uppercase
              text-black
              text-[34px] sm:text-[44px] md:text-[52px]
              leading-[0.9] tracking-tight
            "
          >
            Nuestros clientes nos recomiendan
          </h2>

          {data?.rating != null && (
            <div className="flex items-center gap-2 text-sm text-neutral-700 mt-1 font-manrope">
              <Stars score={data.rating} />
              <span className="font-semibold">{data.rating.toFixed(1)}</span>
              <span className="text-neutral-400">•</span>
              <span>{data.total} reseñas en Google</span>
            </div>
          )}
        </div>

        {/* === ESTADOS === */}
        {loading && <p className="py-10 font-manrope text-neutral-500">Cargando reseñas…</p>}
        {error && (
          <p className="py-10 font-manrope text-red-600">
            No pudimos cargar las reseñas ({error})
          </p>
        )}
        {!loading && !error && (data?.reviews?.length ?? 0) === 0 && (
          <p className="py-10 font-manrope text-neutral-500">
            Aún no hay reseñas para mostrar.
          </p>
        )}

        {/* === CARRUSEL === */}
        {data?.reviews?.length ? <ReviewsCarousel reviews={data.reviews} /> : null}

        {/* === CTA PRINCIPAL === */}
        <div className="mt-10 flex justify-center">
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3
              text-white font-manrope font-semibold shadow-lg shadow-red-600/20
              hover:bg-red-700 active:bg-red-800 transition
            "
          >
            + Dejá tu reseña
          </a>
        </div>
      </div>
    </section>
  );
}

/* === ICONOS DE ESTRELLAS === */
function Stars({ score }: { score: number }) {
  const full = Math.floor(score);
  const rest = score - full >= 0.5 ? 1 : 0;
  const total = full + rest;
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < total
              ? "fill-yellow-400 stroke-yellow-400"
              : "stroke-neutral-300"
          }
        />
      ))}
    </div>
  );
}
