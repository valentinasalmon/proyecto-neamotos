"use client";

export function CatalogFilters() {
  return (
    <div className="bg-white border border-neutral-300/70 shadow-[0_12px_24px_rgba(0,0,0,0.04)] rounded-none p-4">
      <form
        className="
          grid grid-cols-1
          gap-4
          md:grid-cols-[1fr_auto_auto_auto_auto]
          md:items-end
        "
      >
        {/* Keywords / búsqueda */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wide mb-1">
            Búsqueda
          </label>

          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs pointer-events-none">
            </span>
            <input
              type="text"
              placeholder="Ej. Yamaha, 300cc, scooter…"
              className="
                w-full
                border border-neutral-300 text-neutral-800 bg-white
                pl-8 pr-3 py-2
                text-[13px]
                leading-none
                outline-none
                focus:ring-[2px] focus:ring-red-500 focus:border-red-500
                rounded-none
              "
            />
          </div>
        </div>

        {/* Marca */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wide mb-1">
            Marca
          </label>
          <select
            className="
              border border-neutral-300 text-neutral-800 bg-white
              px-3 py-2
              text-[13px]
              leading-none
              outline-none
              focus:ring-[2px] focus:ring-red-500 focus:border-red-500
              rounded-none
              min-w-[140px]
            "
          >
            <option>Todos</option>
            <option>Yamaha</option>
            <option>Zontes</option>
            <option>Motomel</option>
            <option>Corven</option>
            <option>Kove</option>
          </select>
        </div>

        {/* Tipo */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wide mb-1">
            Tipo
          </label>
          <select
            className="
              border border-neutral-300 text-neutral-800 bg-white
              px-3 py-2
              text-[13px]
              leading-none
              outline-none
              focus:ring-[2px] focus:ring-red-500 focus:border-red-500
              rounded-none
              min-w-[140px]
            "
          >
            <option>Todos</option>
            <option>Street</option>
            <option>Sport</option>
            <option>Scooter</option>
            <option>Enduro</option>
            <option>Adventure</option>
            <option>Cub</option>
          </select>
        </div>

        {/* Cilindrada (ej extra) */}
        <div className="flex flex-col">
          <label className="text-[11px] font-semibold text-neutral-700 uppercase tracking-wide mb-1">
            Cilindrada
          </label>
          <select
            className="
              border border-neutral-300 text-neutral-800 bg-white
              px-3 py-2
              text-[13px]
              leading-none
              outline-none
              focus:ring-[2px] focus:ring-red-500 focus:border-red-500
              rounded-none
              min-w-[140px]
            "
          >
            <option>Todos</option>
            <option>110cc</option>
            <option>150cc</option>
            <option>250cc</option>
            <option>300cc+</option>
          </select>
        </div>

        {/* Botón filtrar */}
        <div className="flex md:justify-end">
          <button
            type="submit"
            className="
              w-full md:w-auto
              bg-[#0A2342] hover:bg-[#0d2d57] active:bg-[#091b32]
              text-white font-semibold
              text-[13px] leading-none
              px-4 py-2
              shadow-[0_16px_32px_rgba(10,35,66,0.4)]
              whitespace-nowrap
              rounded-none
            "
          >
            Filtrar
          </button>
        </div>
      </form>
    </div>
  );
}
