"use client";

import Image from "next/image";

const logos = [
  { src: "/cubiertas/horng.jpeg", alt: "Horng Fortune" },
  { src: "/cubiertas/wanda.webp", alt: "Wanda Tires" },
  { src: "/cubiertas/rinaldi.png", alt: "Rinaldi" },
];

export default function CubiertasLogos() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto
          max-w-5xl
          grid grid-cols-2 sm:grid-cols-3
          gap-x-12 gap-y-10
          items-center justify-items-center
        "
      >
        {logos.map((l) => (
          <div
            key={l.alt}
            className="
              flex items-center justify-center
              w-[180px] h-[90px]
            "
            aria-label={l.alt}
            title={l.alt}
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={180}
              height={90}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
