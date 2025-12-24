"use client";

import Image from "next/image";

const logos = [
  { src: "/cubiertas/horng.webp", alt: "Horng Fortune", scale: "scale-[1.35]" },
  { src: "/cubiertas/wanda.webp", alt: "Wanda Tyre", scale: "scale-[1.08]" },
  { src: "/cubiertas/rinaldi.png", alt: "Rinaldi", scale: "scale-[1.0]" },
];

export default function CubiertasLogos() {
  return (
    <section className="w-full">
      <div
        className="
          mx-auto max-w-6xl
          grid grid-cols-1 sm:grid-cols-3
          gap-y-8 sm:gap-y-10
          gap-x-10 sm:gap-x-14
          items-center justify-items-center
          px-6 sm:px-0
        "
      >
        {logos.map((l) => (
          <div
            key={l.alt}
            className="
              relative
              w-[240px] h-[120px]
              sm:w-[220px] sm:h-[120px]
              flex items-center justify-center
            "
          >
            <Image
              src={l.src}
              alt={l.alt}
              fill
              sizes="(max-width: 640px) 240px, 220px"
              className={`object-contain ${l.scale}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
