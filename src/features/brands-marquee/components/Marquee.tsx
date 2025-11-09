"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const BASE = [
  { src: "/logos/motomel.svg", alt: "Motomel" },
  { src: "/logos/zanella.svg", alt: "Zanella" },
  { src: "/logos/corven.svg", alt: "Corven" },
  { src: "/logos/keller.svg", alt: "Keller" },
  { src: "/logos/bajaj.svg", alt: "Bajaj" },
];

// ✅ Ajuste profesional: logos grandes y con separación armónica
const TILE_W = 520; // ancho visual de cada logo
const GAP_PX = 50;  // menos separación: más cohesionados

function Track({
  items,
  priorityFirst = false,
}: {
  items: typeof BASE;
  priorityFirst?: boolean;
}) {
  return (
    <ul className="flex shrink-0 gap-[var(--gap)] animate-marquee-x will-change-transform">
      {items.map((b, i) => (
        <li
          key={`${b.alt}-${i}`}
          className="h-[160px] w-[520px] flex items-center justify-center"
        >
          <Image
            src={b.src}
            alt={b.alt}
            width={1200}
            height={600}
            quality={100}
            className="h-full w-auto object-contain transition-transform duration-700 hover:scale-105"
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
      const need = Math.max(3, Math.ceil((vw * 1.5) / (BASE.length * tile)));
      setReps(need);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const row = useMemo(
    () => Array.from({ length: reps }).flatMap(() => BASE),
    [reps]
  );

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "#ffffff", // blanco puro
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        className="flex items-center justify-center"
        style={
          {
            ["--gap" as any]: `${GAP_PX}px`,
            ["--dur" as any]: "55s",
          } as React.CSSProperties
        }
      >
        <Track items={row} priorityFirst />
        <Track items={row} />
      </div>

      <style jsx>{`
        @keyframes marquee-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-x {
          animation: marquee-x var(--dur) linear infinite;
        }

        div:hover > .flex > .animate-marquee-x {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
