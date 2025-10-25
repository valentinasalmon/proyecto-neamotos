"use client";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

const BASE = [
  { src: "/logos/motomel.png", alt: "Motomel" },
  { src: "/logos/zanella.png", alt: "Zanella" },
  { src: "/logos/corven.png", alt: "Corven" },
  { src: "/logos/keller.png", alt: "Keller" },
  { src: "/logos/bajaj.png", alt: "Bajaj" },
];

// Ancho base y separación entre logos (en píxeles)
const TILE_W = 260; // más ancho = logos más grandes
const GAP_PX = 150; // espacio entre logos

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
          className="h-[100px] w-[260px] flex items-center justify-center"
        >
          <Image
            src={b.src}
            alt={b.alt}
            width={700}
            height={300}
            quality={100}
            className="h-full w-auto object-contain transition-transform duration-700 hover:scale-110"
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

      // cantidad de repeticiones necesarias para cubrir el ancho + margen de seguridad
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
        backgroundColor: "white", // ✅ fondo blanco
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        className="flex items-center"
        style={
          {
            ["--gap" as any]: `${GAP_PX}px`,
            ["--dur" as any]: "55s", // ⏱️ velocidad suave
          } as React.CSSProperties
        }
      >
        <Track items={row} priorityFirst />
        <Track items={row} />
      </div>

      {/* Animación CSS */}
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

        /* pausa animación al pasar el mouse */
        div:hover > .flex > .animate-marquee-x {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
