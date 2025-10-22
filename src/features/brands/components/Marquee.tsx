"use client";

import Image from "next/image";

const brands = [
  { src: "/logos/motomel.png", alt: "Motomel" },
  { src: "/logos/zanella.png", alt: "Zanella" },
  { src: "/logos/corven.png", alt: "Corven" },
  { src: "/logos/keller.png", alt: "Keller" },
  { src: "/logos/bajak.png", alt: "Bajak" }, // usa el nombre real exacto0pppppppppppppppp
];

function LogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-14 sm:h-16 w-40 sm:w-48 shrink-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 160px, 192px"
        className="object-contain"
        priority={alt === "Motomel"}
        unoptimized // quitalo cuando todo funcione
      />
    </div>
  );
}

function Track() {
  return (
    <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16">
      {brands.map((b) => (
        <LogoItem key={b.alt} src={b.src} alt={b.alt} />
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section className="relative bg-[#0b0b0b] py-8">
      <div className="mx-auto max-w-full overflow-hidden">
        {/* Gradiente sutil en bordes */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0b0b] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0b0b] to-transparent" />

        {/* Pista continua */}
        <div className="marquee flex w-max animate-marquee">
          <Track />
          <Track />
        </div>
      </div>

      {/* Animación del scroll continuo */}
      <style jsx>{`
        .marquee {
          white-space: nowrap;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
