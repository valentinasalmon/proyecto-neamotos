"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { useMotos } from "@/features/catalog/api/getMotos";
import type { Moto } from "@/features/catalog/types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "";

function Card({ m }: { m: Moto }) {
  const url = buildWhatsAppLink(PHONE, `${m.marca} ${m.modelo}`);
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div className="px-5 pt-5 pb-2 flex items-start justify-between">
        <div>
          <h4 className="font-display text-xl">{m.marca} {m.modelo}</h4>
          <p className="text-[11px] uppercase tracking-widest text-gray-500">Powered by {m.marca}</p>
        </div>
        <div className="text-brand font-extrabold text-xl">US$ {m.precioUsd.toLocaleString()}</div>
      </div>
      <div className="bg-gray-100 h-56 relative">
        <Image src={m.imagen} alt={`${m.marca} ${m.modelo}`} fill className="object-contain p-5" />
        <a href={url} target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366] text-white shadow">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.48 2 2 6.03 2 11c0 1.98.62 3.82 1.75 5.35L2 22l5.81-1.52A9.95 9.95 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18c-1.19 0-2.35-.3-3.38-.88l-.25-.14-3.29.86.88-3.2-.16-.25C4.69 15.01 4 13.04 4 11c0-4.08 3.28-7 8-7s8 2.92 8 7-3.28 7-8 7Z"/></svg>
        </a>
      </div>
      <div className="grid grid-cols-3 divide-x divide-gray-100 px-5 py-4 text-center">
        <div><div className="text-[11px] tracking-widest uppercase text-gray-500">Year</div><div className="font-semibold">{m.anio}</div></div>
        <div><div className="text-[11px] tracking-widest uppercase text-gray-500">Type</div><div className="font-semibold">{m.tipo}</div></div>
        <div><div className="text-[11px] tracking-widest uppercase text-gray-500">Make</div><div className="font-semibold">{m.marca}</div></div>
      </div>
    </article>
  );
}

export default function HighlightShowcase() {
  const { data, isLoading, isError } = useMotos();
  const items = useMemo(() => (data ?? []).slice(0, 6), [data]);

  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const slideTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  if (isError) return null;
  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
          <div className="h-96 rounded-2xl border border-gray-200 bg-gray-100 animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section id="motos-destacadas" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold tracking-widest text-brand">ELEGÍ TU MOTO</p>
          <h3 className="font-display text-3xl sm:text-4xl font-extrabold">Motos destacadas</h3>
        </div>

        <div className="relative">
          <div ref={trackRef} className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar" style={{ scrollbarWidth: "none" }}>
            <div className="flex">
              {items.map((m) => (
                <div key={m.id} className="snap-start shrink-0 w-full px-1 sm:px-2">
                  <Card m={m} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => slideTo(i)}
                className={`h-2 w-2 rounded-full ${index === i ? "bg-brand" : "bg-gray-300"}`}
                aria-label={`Ir al slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/catalogo" className="inline-block bg-brand hover:brightness-95 text-white font-bold px-8 py-3 rounded-xl transition">
              Mirar Catálogo Destacado
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
