"use client";

import { useMemo, useState } from "react";
import { useMotos } from "../api/getMotos";
import type { Moto } from "../types";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/* ----------------- DUAL RANGE (riel único) ----------------- */
function DualRange({
  label, min, max, value, onChange
}: {
  label: string;
  min: number; max: number;
  value: [number, number];
  onChange: (v: [number, number]) => void;
}) {
  const [a, b] = value;
  const pct = (n: number) => ((n - min) / (max - min)) * 100;

  return (
    <div className="px-6 py-4">
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-700">{label}</div>
      <div className="relative h-7">
        {/* riel base */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-gray-200" />
        {/* rango activo */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-brand/80"
          style={{ left: `${pct(a)}%`, right: `${100 - pct(b)}%` }}
        />
        {/* thumbs */}
        <input
          type="range"
          min={min} max={max} value={a}
          onChange={(e) => onChange([Math.min(+e.target.value, b), b])}
          aria-label={`${label} mínimo`} className="range-thumb absolute inset-0 w-full"
        />
        <input
          type="range"
          min={min} max={max} value={b}
          onChange={(e) => onChange([a, Math.max(+e.target.value, a)])}
          aria-label={`${label} máximo`} className="range-thumb absolute inset-0 w-full"
        />
      </div>
      <div className="mt-2 text-sm text-gray-600">
        <span className="font-semibold">{min === 0 ? a : a.toLocaleString()}</span>
        <span className="mx-1">–</span>
        <span className="font-semibold">{b.toLocaleString()}</span>
      </div>
    </div>
  );
}

/* ----------------- TARJETA MOTO (compacta) ----------------- */
const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "";

function Card({ m }: { m: Moto }) {
  const url = buildWhatsAppLink(PHONE, `${m.marca} ${m.modelo}`);
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="px-5 pt-5 pb-2 flex items-start justify-between">
        <div>
          <h4 className="font-display text-lg">{m.marca} {m.modelo}</h4>
          <p className="text-[11px] uppercase tracking-widest text-gray-500">Powered by {m.marca}</p>
        </div>
        <div className="text-brand font-extrabold text-xl">US$ {m.precioUsd.toLocaleString()}</div>
      </div>
      <div className="bg-gray-100 h-48 relative">
        <Image src={m.imagen} alt={`${m.marca} ${m.modelo}`} fill className="object-contain p-5" />
      </div>
      <div className="px-5 py-4 grid grid-cols-3 gap-3 text-sm">
        <div><div className="text-gray-500 text-xs">Año</div><div className="font-semibold">{m.anio}</div></div>
        <div><div className="text-gray-500 text-xs">Tipo</div><div className="font-semibold">{m.tipo}</div></div>
        <div><div className="text-gray-500 text-xs">CC</div><div className="font-semibold">{m.cilindradaCc}</div></div>
      </div>
      <div className="px-5 pb-5">
        <a href={url} target="_blank" rel="noopener"
           className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-[#25D366] text-white py-2 font-semibold">
          WhatsApp
        </a>
      </div>
    </article>
  );
}

/* ----------------- SIDEBAR FILTERS ----------------- */
export default function CatalogWithSidebar() {
  const { data, isLoading, isError } = useMotos();
  const motos = data ?? [];

  // opciones
  const brands = useMemo(() => Array.from(new Set(motos.map(m => m.marca))).sort(), [motos]);
  const types  = useMemo(() => Array.from(new Set(motos.map(m => m.tipo))).sort(),  [motos]);

  // estado filtros
  const [brand, setBrand] = useState<string>("Todas");
  const models = useMemo(
    () => Array.from(new Set(motos.filter(m => brand==="Todas" ? true : m.marca===brand).map(m => m.modelo))).sort(),
    [motos, brand]
  );
  const [model, setModel] = useState<string>("Todos");
  const [type, setType]   = useState<string>("Todos");

  // límites dinámicos
  const priceMin = useMemo(() => Math.min(...motos.map(m=>m.precioUsd)), [motos]);
  const priceMax = useMemo(() => Math.max(...motos.map(m=>m.precioUsd)), [motos]);
  const ccMin    = useMemo(() => Math.min(...motos.map(m=>m.cilindradaCc)), [motos]);
  const ccMax    = useMemo(() => Math.max(...motos.map(m=>m.cilindradaCc)), [motos]);

  const [price, setPrice] = useState<[number,number]>([priceMin||0, priceMax||10000]);
  const [cc, setCc]       = useState<[number,number]>([ccMin||0, ccMax||1500]);
  const [minCc, setMinCc] = useState<number>(cc[0]);
  const [maxCc, setMaxCc] = useState<number>(cc[1]);

  // aplicar filtro (derivado)
  const items = useMemo(() => {
    return motos.filter(m => {
      if (brand !== "Todas" && m.marca !== brand) return false;
      if (model !== "Todos" && m.modelo !== model) return false;
      if (type  !== "Todos" && m.tipo !== type)    return false;

      const ccOk = m.cilindradaCc >= Math.min(minCc, maxCc) && m.cilindradaCc <= Math.max(minCc, maxCc);
      const ccRangeOk = m.cilindradaCc >= cc[0] && m.cilindradaCc <= cc[1];
      const priceOk = m.precioUsd >= price[0] && m.precioUsd <= price[1];
      return ccOk && ccRangeOk && priceOk;
    });
  }, [motos, brand, model, type, cc, price, minCc, maxCc]);

  const clearAll = () => {
    setBrand("Todas");
    setModel("Todos");
    setType("Todos");
    setPrice([priceMin||0, priceMax||10000]);
    setCc([ccMin||0, ccMax||1500]);
    setMinCc(ccMin||0);
    setMaxCc(ccMax||1500);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* SIDEBAR */}
      <aside className="lg:col-span-4 xl:col-span-3">
        <div className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
          {/* header rojo */}
          <div className="bg-brand text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs tracking-widest opacity-90 font-semibold">SEARCH OPTIONS</div>
                <div className="font-display text-lg font-extrabold">FIND YOUR MOTORCYCLE</div>
              </div>
              <svg viewBox="0 0 36 26" width="42" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 20c8-8 21-8 32 0" /><circle cx="9" cy="20" r="4" /><circle cx="29" cy="20" r="4" />
              </svg>
            </div>
          </div>

          {/* selects */}
          <div className="px-6 py-5 space-y-3 border-b border-gray-100">
            <Select label="Select Make" value={brand} onChange={setBrand} options={["Todas", ...brands]} />
            <Select label="Select Model" value={model} onChange={setModel} options={["Todos", ...models]} />
            <Select label="Select Type" value={type} onChange={setType} options={["Todos", ...types]} />

            <div className="grid grid-cols-2 gap-3">
              <Input label="Min CC" type="number" value={minCc} onChange={(v)=>setMinCc(+v)} />
              <Input label="Max CC" type="number" value={maxCc} onChange={(v)=>setMaxCc(+v)} />
            </div>
          </div>

          {/* price */}
          <SectionTitle title="PRICE RANGE" subtitle="CHOOSE YOUR PRICE" />
          <DualRange
            label={`Range Selected: US$ ${price[0].toLocaleString()} – ${price[1].toLocaleString()}`}
            min={priceMin||0} max={priceMax||10000}
            value={price} onChange={setPrice}
          />
          <div className="border-b border-gray-100" />

          {/* cc range */}
          <SectionTitle title="DISPLACEMENT" subtitle="REQUIRED CC" />
          <DualRange
            label={`CC Selected: ${cc[0]} – ${cc[1]} cc`}
            min={ccMin||0} max={ccMax||1500}
            value={cc} onChange={setCc}
          />

          {/* actions */}
          <div className="px-6 py-6">
            <button
              onClick={()=>{/* filtros aplican en vivo; el botón está para UX */}}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-white py-3 font-semibold shadow hover:brightness-95 transition"
            >
              APPLY FILTER
              <span className="inline-block w-2 h-2 rounded-[3px] border border-white" />
            </button>
            <button onClick={clearAll} className="mt-3 w-full text-sm text-gray-500 hover:text-brand">
              Clear All Filters
            </button>
          </div>
        </div>
      </aside>

      {/* LISTADO */}
      <section className="lg:col-span-8 xl:col-span-9">
        {isError ? (
          <p className="text-red-600">No se pudo cargar el catálogo.</p>
        ) : isLoading ? (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse rounded-xl border border-gray-200 p-5">
                <div className="h-6 w-2/3 bg-gray-200 mb-3" />
                <div className="h-40 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            <p className="font-semibold">No encontramos modelos con esos filtros.</p>
            <p className="text-sm">Proba ajustar la búsqueda.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {items.map((m) => <Card key={m.id} m={m} />)}
          </div>
        )}
      </section>
    </div>
  );
}

/* ----------------- UI PRIMITIVES ----------------- */
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-6 pt-6">
      <div className="font-display text-lg font-extrabold text-gray-900">{title}</div>
      <div className="text-xs tracking-widest text-gray-500 font-semibold">{subtitle}</div>
    </div>
  );
}

function Select({
  label, value, onChange, options
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
  return (
    <label className="block text-sm">
      <span className="block mb-1 text-gray-700 font-semibold">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40"
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Input({
  label, type="text", value, onChange
}: {
  label: string; type?: "text" | "number"; value: string | number; onChange: (v: string) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="block mb-1 text-gray-700 font-semibold">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
    </label>
  );
}
