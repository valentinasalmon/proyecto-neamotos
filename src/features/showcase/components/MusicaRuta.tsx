"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PLAYLISTS = [
  {
    name: "Cumbia sobre Ruedas",
    href: "https://open.spotify.com/playlist/3wRqvAuTcR7PNs7gSiQEG2?si=cuJyf5wVRLSdB9XisTYwHg",
  },
  {
    name: "Ride & Perro",
    href: "https://open.spotify.com/playlist/0HliWTgFdiwyzm1gX7TCST?si=m1uynTGXQKeMQf815Suakw",
  },
  {
    name: "Nación en Ruta",
    href: "https://open.spotify.com/playlist/0gwL8ej4ZWw0gFMCbu465B?si=nOm0CVCGSCuhHSj7o8PMnw",
  },
  {
    name: "Kilómetros de Litoral",
    href: "https://open.spotify.com/playlist/1nV5RcqbHhe58ZOTprThBz?si=Hd9-8NEcQq-7AGyzBLcU-Q",
  },
  {
    name: "Rock & Ruta",
    href: "https://open.spotify.com/playlist/2eH5SErrZudUuD6fpZlzZt?si=3gU_noiXT1Kfavqjz0QCbg",
  },
];

type ThumbsMap = Record<string, string>;

export function MusicaRuta() {
  const [open, setOpen] = useState(false);
  const [thumbs, setThumbs] = useState<ThumbsMap>({});

  // Trae automáticamente la portada oficial de Spotify de cada playlist
  useEffect(() => {
    PLAYLISTS.forEach((pl) => {
      fetch(
        `https://open.spotify.com/oembed?url=${encodeURIComponent(pl.href)}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.thumbnail_url) {
            setThumbs((prev) => ({
              ...prev,
              [pl.href]: data.thumbnail_url as string,
            }));
          }
        })
        .catch((err) => {
          console.error("Error trayendo portada de Spotify:", err);
        });
    });
  }, []);

  return (
    <section
      id="musica-ruta"
      className="relative bg-[#0A2342] text-white overflow-hidden py-20"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -------------------- HEADER + BOTÓN CONSEJOS -------------------- */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8 gap-4">
          <div>
            <h2 className="font-display text-[32px] sm:text-[38px] font-extrabold leading-tight uppercase">
                 Prendé el motor, subí el volumen
        
            </h2>
          </div>

          {/* Botón solo texto, sin icono */}
          <button
            onClick={() => setOpen(!open)}
            className="
              inline-flex items-center
              rounded-full
              border border-white/30
              bg-white/5
              px-4 py-1.5
              text-[12px] font-semibold tracking-wide
              text-white/80
              hover:bg-white/10 hover:border-white/60 hover:text-white
              transition-all
              shadow-[0_0_0_1px_rgba(0,0,0,0.35)]
            "
          >
            Consejos para viajar
          </button>
        </div>

        {/* -------------------- VIÑETA / PANEL CONSEJOS -------------------- */}
        <div
          className={`
            overflow-hidden transition-all duration-300
            ${open ? "max-h-48 opacity-100 mb-10" : "max-h-0 opacity-0 mb-0"}
          `}
        >
          <div
            className="
              relative flex gap-4
              bg-white/5
              border border-white/12
              rounded-sm
              px-5 py-4
            "
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/80" />

            <div className="pl-3 text-[13px] sm:text-[14px] text-gray-100">
              <p className="font-semibold mb-2">
                Consejos para viajar con música:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 leading-relaxed">
                <li>No uses el volumen al máximo: cuidá tu audición.</li>
                <li>Mantené la atención en el tránsito y el entorno.</li>
                <li>
                  Descargá las playlists por si te quedás sin señal en la ruta.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* -------------------- PLAYLISTS GRID -------------------- */}
       <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.22em] text-gray-300 uppercase mb-8">
  Tu viaje merece una buena banda sonora
</p>


        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
            gap-5
            place-items-center
            mb-16
          "
        >
          {PLAYLISTS.map((pl, index) => {
            const isLast = index === PLAYLISTS.length - 1;
            const thumb = thumbs[pl.href];

            return (
              <a
                key={pl.name}
                href={pl.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group block
                  w-[180px]
                  bg-[#121212]
                  rounded-md
                  overflow-hidden
                  shadow-[0_8px_24px_rgba(0,0,0,0.45)]
                  hover:bg-[#181818] hover:-translate-y-1
                  transition-all
                  ${isLast ? "col-span-2 sm:col-span-1" : ""}
                `}
              >
                {/* Portada oficial de Spotify */}
                <div className="aspect-square w-full overflow-hidden">
                  {thumb ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={thumb}
                        alt={pl.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    // Fallback mientras carga
                    <div className="h-full w-full bg-gradient-to-br from-[#D7263D] via-[#B3132A] to-[#6B0F1A]" />
                  )}
                </div>

                {/* Contenido debajo de la portada */}
                <div className="px-3 py-3">
                  <p className="text-[13px] font-semibold text-white mb-1 line-clamp-2 text-left">
                    {pl.name}
                  </p>

                  <div className="flex items-center gap-1 text-[11px] text-gray-400 group-hover:text-gray-200">
                    <span>Abrir en Spotify</span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-[11px] h-[11px]"
                      fill="currentColor"
                    >
                      <path d="M14 3h7v7h-2V7.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h7v2H7v10h10v-5h2v7H5V5Z" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
