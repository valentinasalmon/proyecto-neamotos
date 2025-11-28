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

// dimensiones fijas para todos (MOBILE)
const MOBILE_BOX_H = 150;
const MOBILE_BOX_W = 260;
const MOBILE_LOGO_H = 110;

// dimensiones fijas para todos (DESKTOP)
const DESK_BOX_H = 190;
const DESK_BOX_W = 300;
const DESK_LOGO_H = 150;

const TILE_W = 320;
const GAP_PX = 32;

function Track({ items }: { items: typeof BASE }) {
  return (
    <ul className="flex shrink-0 gap-[var(--gap)] animate-marquee-x will-change-transform">
      {items.map((b, i) => (
        <li
          key={b.alt + i}
          className="flex items-center justify-center"
          style={{
            height: MOBILE_BOX_H,
            width: MOBILE_BOX_W,
          }}
        >
          <Image
            src={b.src}
            alt={b.alt}
            width={1000}
            height={1000}
            quality={100}
            className="object-contain"
            style={{
              height: MOBILE_LOGO_H,
              width: "auto",
            }}
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
      const vw = typeof window !== "undefined" ? window.innerWidth : 375;
      const tile = TILE_W + GAP_PX;
      const need = Math.max(3, Math.ceil((vw * 2) / (BASE.length * tile)));
      setReps(need);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const row = useMemo(() => Array.from({ length: reps }).flatMap(() => BASE), [reps]);

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e5e5e5",
        borderBottom: "1px solid #e5e5e5",
        paddingTop: "0.8rem",   // ❗ franja más chica
        paddingBottom: "0.8rem",
      }}
    >
      {/* 📱 MOBILE — EN MOVIMIENTO */}
      <div
        className="sm:hidden flex overflow-hidden"
        style={{
          ["--gap" as any]: `${GAP_PX}px`,
          ["--dur" as any]: "38s",
        } as React.CSSProperties}
      >
        <Track items={row} />
        <Track items={row} />
      </div>

      {/* 💻 DESKTOP — FIJO Y TODOS EXACTAMENTE IGUALES */}
      <ul
        className="hidden sm:flex items-center justify-center gap-[40px] px-4"
      >
        {BASE.map((b, i) => (
          <li
            key={b.alt + i}
            className="flex items-center justify-center"
            style={{
              height: DESK_BOX_H,
              width: DESK_BOX_W,
            }}
          >
            <Image
              src={b.src}
              alt={b.alt}
              width={1000}
              height={1000}
              quality={100}
              className="object-contain"
              style={{
                height: DESK_LOGO_H,
                width: "auto",
              }}
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes marquee-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-x {
          animation: marquee-x var(--dur) linear infinite;
        }
      `}</style>
    </div>
  );
}
