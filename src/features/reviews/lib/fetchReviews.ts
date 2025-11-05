
export async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  const placeId = process.env.GOOGLE_PLACE_ID!;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener reseñas");
  const data = await res.json();

  // Filtra reseñas positivas (4 o más estrellas)
  const reviews = (data.result.reviews || [])
    .filter((r: any) => r.rating >= 4)
    .map((r: any) => ({
      author: r.author_name,
      text: r.text,
      rating: r.rating,
      time: new Date(r.time * 1000).toLocaleDateString("es-AR"),
      profilePhoto: r.profile_photo_url,
    }));

  return reviews;
}
