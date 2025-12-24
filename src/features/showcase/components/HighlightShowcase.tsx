"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

export function HighlightShowcase() {
  return (
    <section
      id="showcase"
      className="relative bg-[#0A2342] text-white overflow-hidden py-20 sm:py-28"
    >
      {/* Fondo tenue */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/banners/lluvia.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-14 items-center">
        {/* ================= BLOQUE IZQUIERDO ================= */}
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-red-400 uppercase mb-3">
            NEA MOTOS TE ACONSEJA
          </p>

          <h2 className="font-display text-5xl sm:text-6xl font-extrabold leading-[1.1] mb-6">
            MANEJAR CON PRECAUCIÓN BAJO LA LLUVIA
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-200 leading-relaxed mb-8 max-w-md">
            Reducí la velocidad y mantené más espacio con los vehículos que van adelante.
            La distancia extra te da más tiempo para frenar con seguridad, ya que las cubiertas y frenos tardan más en responder cuando la calle está mojada.
          </p>

          {/* ===== BOTÓN A CUBIERTAS ===== */}
          <Link
            href="/cubiertas"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-red-600 hover:bg-red-700 active:bg-red-800
              text-white font-semibold text-[14px]
              px-6 py-3
              shadow-[0_12px_24px_rgba(220,38,38,0.45)]
              transition-colors
            "
          >
            Ver cubiertas 
          </Link>
        </div>

        {/* ================= BLOQUE DERECHO ================= */}
        <div className="relative w-full h-[340px] sm:h-[420px]">
          <Image
            src="/banners/lluvia.png"
            alt="Servicio técnico NEA MOTOS"
            fill
            className="object-cover object-center shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
