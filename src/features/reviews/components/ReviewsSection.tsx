"use client";

import { useEffect, useMemo, useState } from "react";
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

  const writeUrl = useMemo(
    () =>
      data?.placeId
        ? `https://search.google.com/local/writereview?placeid=${data.placeId}`
        : undefined,
    [data?.placeId]
  );

  const allUrl = useMemo(
    () =>
      data?.placeId
        ? `https://search.google.com/local/reviews?placeid=${data.placeId}`
        : undefined,
    [data?.placeId]
  );

  return (
    <section id="reseñas" className="bg-white py-16 font-nea text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Encabezado */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nuestros clientes nos recomiendan
          </h2>

          {data?.rating != null && (
            <div className="flex items-center gap-2 text-sm text-neutral-700 mt-1">
              <Stars score={data.rating} />
              <span className="font-semibold">{data.rating.toFixed(1)}</span>
              <span className="text-neutral-400">•</span>
              <span>{data.total} reseñas en Google</span>
            </div>
          )}

          {allUrl && (
            <div className="mt-2">
              <a
                href={allUrl}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 text-sm hover:underline"
              >
                Ver todas las reseñas
              </a>
            </div>
          )}
        </div>

        {/* Estados */}
        {loading && <p className="py-10 text-neutral-500">Cargando reseñas…</p>}
        {error && (
          <p className="py-10 text-red-600">
            No pudimos cargar las reseñas ({error})
          </p>
        )}
        {!loading && !error && (data?.reviews?.length ?? 0) === 0 && (
          <p className="py-10 text-neutral-500">
            Aún no hay reseñas para mostrar.
          </p>
        )}

        {/* Carrusel: ahora muestra más reseñas a la vez */}
        {data?.reviews?.length ? <ReviewsCarousel reviews={data.reviews} /> : null}

        {/* CTA principal */}
        {writeUrl && (
          <div className="mt-10 flex justify-center">
            <a
              href={writeUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3
                text-white font-semibold shadow-lg shadow-red-600/20
                hover:bg-red-700 active:bg-red-800 transition
              "
            >
              + Dejá tu reseña
            </a>
          </div>
        )}
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
