"use client";

import React, { useState, useEffect, useRef } from "react";

export type CatalogFiltersIndumentariaState = {
  categoria: string;
  genero: "Todos" | "Hombre" | "Mujer";
  search: string;
};

type SelectOption = {
  value: string;
  label: string;
};

// 🔽 CustomSelect
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

export function CatalogFiltersIndumentaria({
  categorias,
  onChange,
}: {
  categorias: string[];
  onChange: React.Dispatch<React.SetStateAction<CatalogFiltersIndumentariaState>>;
}) {

  const [filters, setFilters] = useState<CatalogFiltersIndumentariaState>({
    categoria: "Todas",
    genero: "Todos",
    search: "",
  });

  function update<K extends keyof CatalogFiltersIndumentariaState>(
    key: K,
    value: CatalogFiltersIndumentariaState[K]
  ) {
    const next = { ...filters, [key]: value };
    setFilters(next);
    onChange(next);
  }

  function resetFilters() {
    const reset: CatalogFiltersIndumentariaState = {
      categoria: "Todas",
      genero: "Todos",
      search: "",
    };
    setFilters(reset);
    onChange(reset);
  }

  const categoriaOptions: SelectOption[] = [
    { value: "Todas", label: "Todas" },
    ...categorias.map((c) => ({ value: c, label: c })),
  ];

  return (
    <section className="bg-white border border-neutral-300 shadow-sm rounded-none p-4 mb-6">
      {/* GRID FILTROS */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_56px] gap-4 text-[13px] text-neutral-800 items-end">
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
            placeholder="Ej: Campera, Guantes..."
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

        {/* Género */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-500 uppercase mb-1">
            Género
          </label>

          <div className="inline-flex rounded-full bg-neutral-100 p-1 text-[12px] font-semibold w-fit">
            {(["Todos", "Hombre", "Mujer"] as const).map((g) => {
              const active = filters.genero === g;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => update("genero", g)}
                  className={`
                    px-3 py-1 rounded-full transition-colors whitespace-nowrap
                    ${
                      active
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-600 hover:text-neutral-900"
                    }
                  `}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>

        {/* ❌ X SOLO DESKTOP */}
        <div className="hidden sm:flex items-center justify-center">
          <button
            type="button"
            onClick={resetFilters}
            aria-label="Limpiar filtros"
            title="Limpiar filtros"
            className="
              h-10 w-10
              grid place-items-center
              rounded-md border border-neutral-300 bg-white
              text-neutral-700 text-[20px]
              hover:bg-neutral-100 transition-colors
              leading-none
            "
          >
            ×
          </button>
        </div>
      </div>

      {/* ✅ BOTÓN MOBILE ABAJO */}
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
