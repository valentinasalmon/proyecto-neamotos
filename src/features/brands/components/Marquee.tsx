"use client";
import Image from "next/image";
import React from "react";

const brands = [
  { src: "/logos/motomel.png", alt: "Motomel" },
  { src: "/logos/zanella.png", alt: "Zanella" },
  { src: "/logos/corven.png", alt: "Corven" },
  { src: "/logos/keller.png", alt: "Keller" },
  { src: "/logos/bajaj.png", alt: "Bajaj" },
];

export default function Marquee() {
  return (
    <div className="w-full bg-black overflow-hidden py-8">
      <div
        className="flex items-center gap-[var(--gap)]"
        style={
          {
            ["--gap" as any]: "4rem",
            ["--dur" as any]: "28s",
          } as React.CSSProperties
        }
      >
        <ul className="flex flex-nowrap items-center shrink-0 gap-[var(--gap)] animate-marquee-loop"
            style={{ animationDuration: "var(--dur)" }}>
          {brands.map((b, i) => (
            <li key={`a-${i}`} className="h-[72px] w-[180px] flex items-center justify-center">
              <Image
                src={b.src}
                alt={b.alt}
                width={360}
                height={144}
                className="max-h-[72px] w-auto object-contain brightness-150 opacity-90"
                priority={i < 3}
              />
            </li>
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="flex flex-nowrap items-center shrink-0 gap-[var(--gap)] animate-marquee-loop"
          style={{ animationDuration: "var(--dur)" }}
        >
          {brands.map((b, i) => (
            <li key={`b-${i}`} className="h-[72px] w-[180px] flex items-center justify-center">
              <Image
                src={b.src}
                alt={b.alt}
                width={360}
                height={144}
                className="max-h-[72px] w-auto object-contain brightness-150 opacity-90"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
