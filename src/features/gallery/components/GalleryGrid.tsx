"use client";

import Image from "next/image";

const images = [
  { src: "/gallery/moto2.jpg", alt: "Moto deportiva NEA" },
  { src: "/gallery/moto1.jpg", alt: "Moto urbana NEA" },
  { src: "/gallery/moto3.jpg", alt: "Moto touring NEA" },
];

export function GalleryGrid() {
  return (
    <section
      id="galeria"
      className="w-full bg-white"
    >
      {/* Grid totalmente responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[3/2] overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
