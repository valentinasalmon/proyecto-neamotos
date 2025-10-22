"use client";

import { useEffect, useMemo, useState } from "react";

/* ========== TIPOS ========== */
export type FilterableMoto = {
  marca: string;
  modelo: string;
  tipo: string;
  anio: number;
  cilindradaCc: number;
  potenciaHp: number;
  precioUsd: number;
};

export type SortKey =
  | "relevancia"
  | "precioAsc"
  | "precioDesc"
  | "anioDesc"
  | "ccDesc"
  | "hpDesc";

/* ========== HOOK ========== */
export function useCatalogFilter<T extends FilterableMoto>(data: T[]) {
  // búsqueda con debounce
  const [qInput, setQInput] = useState("");
  const [q, setQ] = useState("");
  useEffect(() => {
    const id = setTimeout(() => setQ(qInput.trim()), 220);
    return () => clearTimeout(id);
  }, [qInput]);

  // chips
  const [brands, setBrands] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);

  // límites dinámicos seguros
  const stats = useMemo(() => {
    const safe = <K extends keyof T>(k: K) =>
      (data.map((d) => d[k]) as unknown as number[]).filter((n) => Number.isFinite(n));
    const range = (arr: number[], fallbackMin: number, fallbackMax: number) =>
      arr.length ? { min: Math.min(...arr), max: Math.max(...arr) } : { min: fallbackMin, max: fallbackMax };

    return {
      years: range(safe("anio" as keyof T), 2000, 2025),
      cc: range(safe("cilindradaCc" as keyof T), 100, 1500),
      price: range(safe("precioUsd" as keyof T), 1000, 15000),
    };
  }, [data]);

  const [yearRange, setYearRange] = useState<[number, number]>([stats.years.min, stats.years.max]);
  const [ccRange, setCcRange] = useState<[number, number]>([stats.cc.min, stats.cc.max]);
  const [priceRange, setPriceRange] = useState<[number, number]>([stats.price.min, stats.price.max]);

  // orden
  const [sort, setSort] = useState<SortKey>("relevancia");

  // opciones de chips
  const allBrands = useMemo(() => Array.from(new Set(data.map((d) => d.marca))).sort(), [data]);
  const allTypes = useMemo(() => Array.from(new Set(data.map((d) => d.tipo))).sort(), [data]);

  // filtro + orden
  const filtered = useMemo(() => {
    const qLower = q.toLowerCase();
    let items = data.filter((d) => {
      const matchesQ = !qLower || `${d.marca} ${d.modelo}`.toLowerCase().includes(qLower);
      const matchesBrand = brands.length === 0 || brands.includes(d.marca);
      const matchesType = types.length === 0 || types.includes(d.tipo);
      const inYear = d.anio >= yearRange[0] && d.anio <= yearRange[1];
      const inCc = d.cilindradaCc >= ccRange[0] && d.cilindradaCc <= ccRange[1];
      const inPrice = d.precioUsd >= priceRange[0] && d.precioUsd <= priceRange[1];
      return matchesQ && matchesBrand && matchesType && inYear && inCc && inPrice;
    });

    switch (sort) {
      case "precioAsc": items = [...items].sort((a, b) => a.precioUsd - b.precioUsd); break;
      case "precioDesc": items = [...items].sort((a, b) => b.precioUsd - a.precioUsd); break;
      case "anioDesc": items = [...items].sort((a, b) => b.anio - a.anio); break;
      case "ccDesc": items = [...items].sort((a, b) => b.cilindradaCc - a.cilindradaCc); break;
      case "hpDesc": items = [...items].sort((a, b) => b.potenciaHp - a.potenciaHp); break;
      default: break;
    }
    return items;
  }, [data, q, brands, types, yearRange, ccRange, priceRange, sort]);

  const toggle = (arr: string[], setArr: (v: string[]) => void, v: string) =>
    setArr(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  const clearAll = () => {
    setQInput(""); setQ("");
    setBrands([]); setTypes([]);
    setYearRange([stats.years.min, stats.years.max]);
    setCcRange([stats.cc.min, stats.cc.max]);
    setPriceRange([stats.price.min, stats.price.max]);
    setSort("relevancia");
  };

  return {
    // estado
    qInput, setQInput,
    brands, setBrands, allBrands,
    types, setTypes, allTypes,
    yearRange, setYearRange, ccRange, setCcRange, priceRange, setPriceRange,
    sort, setSort,
    // datos derivados
    stats, items: filtered, count: filtered.length,
    // helpers
    toggle, clearAll
  };
}

/* ========== UI ========== */
export function FiltersUI(props: ReturnType<typeof useCatalogFilter<any>>) {
  const {
    qInput, setQInput,
    brands, setBrands, allBrands,
    types, setTypes, allTypes,
    yearRange, setYearRange, stats,
    ccRange, setCcRange,
    priceRange, setPriceRange,
    sort, setSort,
    toggle, clearAll, count,
  } = props;

  return (
    <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm dark:bg-gray-900 dark:border-gray-800">
      {/* fila superior */}
      <div className="flex flex-wrap items-center gap-3">
        <input
          value={qInput}
          onChange={(e) => setQInput(e.target.value)}
          placeholder="Buscar modelo o marca…"
          className="min-w-[240px] rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-700"
          aria-label="Buscar"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as any)}
          className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand/40 dark:bg-gray-950 dark:text-gray-100 dark:border-gray-700"
          aria-label="Ordenar por"
        >
          <option value="relevancia">Orden original</option>
          <option value="precioAsc">Precio: menor a mayor</option>
          <option value="precioDesc">Precio: mayor a menor</option>
          <option value="anioDesc">Año: más nuevo</option>
          <option value="ccDesc">Cilindrada: mayor</option>
          <option value="hpDesc">Potencia: mayor</option>
        </select>

        <div className="ml-auto flex items-center gap-4 text-sm">
          <span className="text-gray-600 dark:text-gray-300">
            {count} resultado{count === 1 ? "" : "s"}
          </span>
          <button onClick={clearAll} className="text-gray-700 underline underline-offset-4 hover:text-brand dark:text-gray-200">
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* chips: marcas */}
      <div className="mt-4 flex flex-wrap gap-2">
        {allBrands.map((b) => {
          const active = brands.includes(b);
          return (
            <button
              key={b}
              onClick={() => toggle(brands, setBrands, b)}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                active
                  ? "bg-brand text-white border-brand shadow-sm"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700"
              }`}
              aria-pressed={active}
            >
              {b}
            </button>
          );
        })}
      </div>

      {/* chips: tipos */}
      <div className="mt-2 flex flex-wrap gap-2">
        {allTypes.map((t) => {
          const active = types.includes(t);
          return (
            <button
              key={t}
              onClick={() => toggle(types, setTypes, t)}
              className={`px-3 py-1.5 rounded-full border text-sm transition ${
                active
                  ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50 dark:bg-gray-950 dark:text-gray-200 dark:border-gray-700"
              }`}
              aria-pressed={active}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* rangos con riel único */}
      <div className="mt-5 grid md:grid-cols-3 gap-5">
        <DualRange
          label={`Año (${yearRange[0]}–${yearRange[1]})`}
          min={stats.years.min}
          max={stats.years.max}
          value={yearRange}
          onChange={setYearRange}
        />
        <DualRange
          label={`Cilindrada (${ccRange[0]}–${ccRange[1]} cc)`}
          min={stats.cc.min}
          max={stats.cc.max}
          value={ccRange}
          onChange={setCcRange}
        />
        <DualRange
          label={`Precio (US$ ${priceRange[0].toLocaleString()}–${priceRange[1].toLocaleString()})`}
          min={stats.price.min}
          max={stats.price.max}
          value={priceRange}
          onChange={setPriceRange}
        />
      </div>
    </div>
  );
}

/* ========== DUAL RANGE PRO ========== */
/** riel único + dos thumbs superpuestos (track transparente en inputs);
 *  el segmento activo se dibuja con una <div>.
 */
function DualRange({
  label, min, max, value, onChange
}: {
  label: string;
  min: number;
  max: number;
  value: [number, number];
  onChange: (v: [number, number]) => void;
}) {
  const [a, b] = value;
  const pct = (n: number) => ((n - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-300">
        {label}
      </div>

      <div className="relative h-6">
        {/* Riel base */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-gray-200 dark:bg-gray-800" />

        {/* Rango seleccionado */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-2 rounded-full bg-brand/70"
          style={{ left: `${pct(a)}%`, right: `${100 - pct(b)}%` }}
          aria-hidden
        />

        {/* Input MIN (solo thumb) */}
        <input
          type="range"
          min={min}
          max={max}
          value={a}
          aria-label={`${label} mínimo`}
          onChange={(e) => onChange([Math.min(+e.target.value, b), b])}
          className="range-thumb absolute inset-0 w-full"
        />

        {/* Input MAX (solo thumb) */}
        <input
          type="range"
          min={min}
          max={max}
          value={b}
          aria-label={`${label} máximo`}
          onChange={(e) => onChange([a, Math.max(+e.target.value, a)])}
          className="range-thumb absolute inset-0 w-full"
        />
      </div>
    </div>
  );
}
