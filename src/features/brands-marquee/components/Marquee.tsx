"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const BASE = [
  { src: "/logos/motomel.png", alt: "Motomel" },
  { src: "/logos/zanella.png", alt: "Zanella" },
  { src: "/logos/corven.png",  alt: "Corven"  },
  { src: "/logos/keller.png",  alt: "Keller"  },
  { src: "/logos/bajaj.png",   alt: "Bajaj"   },
];

// ancho de cada “tile” y separación entre logos (deben coincidir con las clases)
const TILE_W = 220;    // w-[220px]
const GAP_PX = 300;     // 4rem → gap-[var(--gap)] con --gap: 4rem

function Track({ items, priorityFirst = false }: { items: typeof BASE; priorityFirst?: boolean }) {
  return (
    <ul className="flex shrink-0 gap-[var(--gap)] animate-marquee-x will-change-transform">
      {items.map((b, i) => (
        <li key={`${b.alt}-${i}`} className="h-[90px] w-[220px] flex items-center justify-center">
          <Image
            src={b.src}
            alt={b.alt}
            width={600}
            height={200}
            quality={100}
            className="h-full w-auto object-contain"
            priority={priorityFirst && i < 2}
          />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  const [reps, setReps] = useState(2);

  useEffect(() => {
    const update = () => {
      const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
      const tile = TILE_W + GAP_PX;
      // queremos que UNA pista (Track A) cubra > 1.25× viewport
      const need = Math.max(2, Math.ceil((vw * 1.25) / (BASE.length * tile)));
      setReps(need);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const row = useMemo(() => Array.from({ length: reps }).flatMap(() => BASE), [reps]);

  return (
    <div className="w-full bg-black overflow-hidden py-10">
      <div
        className="flex items-center"
        style={
          {
            ["--gap" as any]: "4rem",
            ["--dur" as any]: "28s",
          } as React.CSSProperties
        }
      >
        {/* No hay gap entre pistas A y B */}
        <Track items={row} priorityFirst />
        <Track items={row} />
      </div>
    </div>
  );
}
