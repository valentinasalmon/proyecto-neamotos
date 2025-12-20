"use client";

import { useState, useEffect, useRef } from "react";

export type CatalogFiltersCascosState = {
  categoria: string;
  marca: string;
  search: string;
};

type SelectOption = {
  value: string;
  label: string;
};

function CustomSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: SelectOption[];
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel =
    options.find((o) => o.value === value)?.label ?? value ?? "";

  return (
    <div className="flex flex-col relative" ref={wrapperRef}>
      <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full border border-neutral-300 bg-white px-3 py-2 text-left text-[13px] text-neutral-900 outline-none focus:ring-2 focus:ring-red-500/30 flex items-center justify-between"
      >
        <span>{currentLabel}</span>
        <span className="ml-2 text-neutral-500 text-[11px]">▾</span>
      </button>

      {open && (
        <ul
          className="
            absolute left-0 right-0 z-50 mt-1 rounded
            border border-neutral-200 bg-white shadow-md
            max-h-40 overflow-y-auto text-[12px]
          "
        >
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`px-3 py-1.5 cursor-pointer hover:bg-neutral-100 ${
                opt.value === value ? "bg-neutral-100 font-semibold" : ""
              }`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CatalogFiltersCascos({
  onChange,
}: {
  onChange: (f: CatalogFiltersCascosState) => void;
}) {
  const [filters, setFilters] = useState<CatalogFiltersCascosState>({
    categoria: "Todas",
    marca: "Todas",
    search: "",
  });

  function update<K extends keyof CatalogFiltersCascosState>(
    key: K,
    value: CatalogFiltersCascosState[K]
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onChange(next);
  }

  function resetFilters() {
    const reset: CatalogFiltersCascosState = {
      categoria: "Todas",
      marca: "Todas",
      search: "",
    };
    setFilters(reset);
    onChange(reset);
  }

  const categoriaOptions: SelectOption[] = [
    { value: "Todas", label: "Todas" },
    { value: "Integrales", label: "Integrales" },
    { value: "Abiertos", label: "Abiertos" },
    { value: "MX / Enduro", label: "MX / Enduro" },
    { value: "Modulares", label: "Modulares" },
  ];

  const marcaOptions: SelectOption[] = [
    { value: "Todas", label: "Todas" },
    { value: "LS2", label: "LS2" },
    { value: "Vertigo", label: "Vértigo" },
  ];

  return (
    <section className="bg-white border border-neutral-300 shadow-sm rounded-none p-4 mb-6">
      {/* GRID FILTROS */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_44px] gap-4 text-[13px] text-neutral-800 items-end">
        {/* Buscar */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Buscar
          </label>
          <input
            className="
              border border-neutral-300 bg-white
              px-3 py-2 text-[13px] text-neutral-900
              placeholder:text-neutral-400
              outline-none focus:ring-2 focus:ring-red-500/30
            "
            placeholder="Ej: LS2, Integral, MX..."
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </div>

        {/* Categoría */}
        <CustomSelect
          label="Categoría"
          value={filters.categoria}
          onChange={(v) => update("categoria", v)}
          options={categoriaOptions}
        />

        {/* Marca */}
        <CustomSelect
          label="Marca"
          value={filters.marca}
          onChange={(v) => update("marca", v)}
          options={marcaOptions}
        />

        {/* ❌ X SOLO DESKTOP */}
        <div className="hidden sm:flex flex-col">
          <span className="text-[11px] font-semibold text-neutral-500 uppercase mb-1 opacity-0 select-none">
            X
          </span>
          <button
            type="button"
            onClick={resetFilters}
            aria-label="Limpiar filtros"
            title="Limpiar filtros"
            className="
              h-[38px] w-[44px]
              grid place-items-center
              rounded-md border border-neutral-300 bg-white
              text-neutral-700 hover:bg-neutral-100 transition-colors
              leading-none text-[18px]
            "
          >
            ×
          </button>
        </div>
      </div>

      {/* ✅ MOBILE: botón abajo */}
      <div className="sm:hidden mt-4 pt-4 border-t border-neutral-200">
        <button
          type="button"
          onClick={resetFilters}
          className="
            w-full
            flex items-center justify-center gap-2
            border border-neutral-300 bg-white
            px-4 py-2
            text-[13px] font-semibold text-neutral-700
            hover:bg-neutral-100 transition-colors
          "
        >
          <span className="text-[16px] leading-none">×</span>
          Limpiar filtros
        </button>
      </div>
    </section>
  );
}
