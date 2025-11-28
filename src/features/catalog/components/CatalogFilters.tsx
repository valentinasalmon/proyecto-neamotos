"use client";

import { useState, useEffect, useRef } from "react";

export type CatalogFiltersState = {
  marca: string;
  tipo: string;
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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
        className="w-full border border-neutral-300 bg-white px-3 py-2 text-left text-[13px] text-neutral-900 outline-none
                   focus:ring-2 focus:ring-red-500/30 flex items-center justify-between"
      >
        <span>{currentLabel}</span>
        <span className="ml-2 text-neutral-500 text-[11px]">▾</span>
      </button>

      {open && (
        <ul
          className="
            absolute left-0 right-0 mt-1 z-50 rounded border border-neutral-200 bg-white shadow-md
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

export function CatalogFilters({
  marcas,
  tipos,
  onChange,
}: {
  marcas: string[];
  tipos: string[];
  onChange: (f: CatalogFiltersState) => void;
}) {
  const [filters, setFilters] = useState<CatalogFiltersState>({
    marca: "Todas",
    tipo: "Todos",
    search: "",
  });

  function update<K extends keyof CatalogFiltersState>(
    key: K,
    value: CatalogFiltersState[K]
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onChange(next);
  }

  function resetFilters() {
    const reset = { marca: "Todas", tipo: "Todos", search: "" };
    setFilters(reset);
    onChange(reset);
  }

  const marcaOptions: SelectOption[] = [
    { value: "Todas", label: "Todas" },
    ...marcas.map((m) => ({ value: m, label: m })),
  ];

  const tipoOptions: SelectOption[] = [
    { value: "Todos", label: "Todos" },
    ...tipos
      .slice()
      .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), "es"))
      .map((t) => ({
        value: t,
        label: t
          .split(" ")
          .filter(Boolean)
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(" "),
      })),
  ];

  return (
    <div>
      {/* ⭐ Píldora igual a "Tabla de talles" */}
      <div className="flex justify-end mb-3">
        <button
          onClick={resetFilters}
          className="
            px-4 py-1.5 rounded-full border border-neutral-300 bg-white
            text-[13px] text-neutral-700 hover:bg-neutral-100 transition-colors
          "
        >
          Limpiar filtros
        </button>
      </div>

      <section className="bg-white border border-neutral-300 shadow-sm rounded-none p-4 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-neutral-800">
          
          {/* Buscar */}
          <div className="flex flex-col">
            <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
              Buscar
            </label>
            <input
              className="
                border border-neutral-300 bg-white px-3 py-2 text-[13px]
                text-neutral-900 outline-none
                focus:ring-2 focus:ring-red-500/30 placeholder:text-neutral-400
              "
              placeholder="Ej: Blitz, Rouser, Skua..."
              value={filters.search}
              onChange={(e) => update("search", e.target.value)}
            />
          </div>

          {/* Marca */}
          <CustomSelect
            label="Marca"
            value={filters.marca}
            onChange={(v) => update("marca", v)}
            options={marcaOptions}
          />

          {/* Tipo */}
          <CustomSelect
            label="Tipo"
            value={filters.tipo}
            onChange={(v) => update("tipo", v)}
            options={tipoOptions}
          />
        </div>
      </section>
    </div>
  );
}
