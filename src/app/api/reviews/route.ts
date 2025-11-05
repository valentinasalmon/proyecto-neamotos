import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const placeId =
      process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return NextResponse.json(
        { error: "Faltan GOOGLE_MAPS_API_KEY o GOOGLE_PLACE_ID" },
        { status: 500 }
      );
    }

    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews");
    url.searchParams.set("language", "es");
    url.searchParams.set("reviews_sort", "newest");
    url.searchParams.set("key", apiKey);

    const res = await fetch(url.toString(), { cache: "no-store" });
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json(
        {
          error: `Google Places: ${data.status}${
            data.error_message ? " - " + data.error_message : ""
          }`,
        },
        { status: 500 }
      );
    }

    // Todas las reseñas crudas
    const all = (data?.result?.reviews ?? []).map((r: any) => ({
      author: r.author_name,
      text: r.text?.trim() ?? "",
      rating: r.rating,
      time: r.relative_time_description ?? "",
      epoch: r.time ?? 0,
      profilePhoto: r.profile_photo_url,
    }));

    // Seleccionamos las mejores reseñas (rating >=4 y con texto significativo)
    const curated = all
      .filter((r) => r.rating >= 4 && r.text.length >= 20)
      .sort(
        (a, b) =>
          b.epoch - a.epoch || b.text.length - a.text.length // más nuevas y largas primero
      )
      .slice(0, 9);

    // Fallback si Google no devuelve texto suficiente
    const reviewsToShow = curated.length ? curated : all.slice(0, 6);

    // Respuesta final
    return NextResponse.json({
      placeId,
      rating: data.result.rating ?? null,
      total: data.result.user_ratings_total ?? 0,
      reviews: reviewsToShow,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? "Error inesperado" },
      { status: 500 }
    );
  }
}
