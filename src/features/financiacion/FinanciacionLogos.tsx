"use client";

import Image from "next/image";

const logos = [
  { src: "/logos-financiacion/columbia.svg", alt: "COLUMBIA" },
  { src: "/logos-financiacion/creditech.svg", alt: "CREDITECH" },
  { src: "/logos-financiacion/cuotasya.svg", alt: "CUOTAS YA" },
  { src: "/logos-financiacion/directo.svg", alt: "Directo" },
  { src: "/logos-financiacion/uala.svg", alt: "Ualá" },
  { src: "/logos-financiacion/santander.svg", alt: "Santander" },
];

export default function FinanciacionLogos() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center">


      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
          gap-x-16 gap-y-12
          items-center justify-items-center
          max-w-7xl
        "
      >
        {logos.map((l) => (
          <div
            key={l.alt}
              className="w-[320px] h-[110px] flex items-center justify-center"
            aria-label={l.alt}
            title={l.alt}
          >
            <Image
              src={l.src}
              alt={l.alt}
              width={260}
              height={95}
              className="object-contain w-full h-full"
              priority={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}