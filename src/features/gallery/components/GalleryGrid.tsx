import Image from "next/image";

const photos = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function GalleryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-6">
        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={`foto-${i + 1}`}
              fill
              sizes="(max-width:768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
