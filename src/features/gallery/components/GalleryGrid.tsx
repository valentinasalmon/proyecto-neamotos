"use client";

import Image from "next/image";

const images = [
  { src: "/gallery/motoo.png", alt: "Moto urbana NEA" },
  { src: "/gallery/moto.png", alt: "Moto deportiva NEA" },
  { src: "/gallery/motooo.png", alt: "Moto touring NEA" },
];

export function GalleryGrid() {
  return (
    <section id="galeria" className="w-full bg-white">
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
              quality={100}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover scale-[1.25] transition-transform duration-700 hover:scale-[1.35]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
