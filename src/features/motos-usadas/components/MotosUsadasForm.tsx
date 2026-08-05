"use client";

import { useMemo, useState } from "react";

type Props = {
  whatsappNumber?: string;
};

export default function MotosUsadasForm({ whatsappNumber }: Props) {
  const [nombre, setNombre] = useState("");
  const [moto, setMoto] = useState("");
  const [presupuesto, setPresupuesto] = useState("");

  const phone =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_MOTOS_USADAS ||
    "5493795134533";

  const isValid = useMemo(() => {
    const hasName = nombre.trim().length >= 3;
    const hasMoto = moto.trim().length >= 2;
    return hasName && hasMoto;
  }, [nombre, moto]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const texto =
      `Hola! Quiero consultar motos usadas.\n` +
      `Nombre y apellido: ${nombre.trim()}\n` +
      `Moto a consultar: ${moto.trim()}` +
      (presupuesto.trim()
        ? `\nPresupuesto: ${presupuesto.trim()}`
        : "");

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="text-neutral-900">
      <p className="text-sm text-neutral-500 mb-6 mt-1">
        Escribinos por WhatsApp y te ayudamos a encontrar tu moto usada
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Nombre y Apellido <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Juan Pérez"
            className="w-full bg-transparent border-b border-neutral-300 py-2 text-[15px] text-neutral-900 caret-[#0A2342] placeholder:text-neutral-400 focus:border-[#0A2342] focus:outline-none transition-colors"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Moto a consultar <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={moto}
            onChange={(e) => setMoto(e.target.value)}
            placeholder="Ej: Rouser NS 200 / Wave 110 / Titan 150 (indicá año o km si podés)"
            className="w-full bg-transparent border-b border-neutral-300 py-2 text-[15px] text-neutral-900 caret-[#0A2342] placeholder:text-neutral-400 focus:border-[#0A2342] focus:outline-none transition-colors"
            required
          />
          <p className="text-[12px] text-neutral-500 mt-2">
            Si podés, agregá año, km o uso (ciudad/ruta) para afinar la búsqueda.
          </p>
        </div>

        <div className="md:col-span-2">
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Presupuesto (opcional)
          </label>
          <input
            type="text"
            value={presupuesto}
            onChange={(e) => setPresupuesto(e.target.value)}
            placeholder="Ej: $2.500.000"
            className="w-full bg-transparent border-b border-neutral-300 py-2 text-[15px] text-neutral-900 caret-[#0A2342] placeholder:text-neutral-400 focus:border-[#0A2342] focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={!isValid}
          className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-[14px] font-semibold px-8 py-3 shadow-[0_10px_20px_rgba(255,59,47,0.25)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          aria-disabled={!isValid}
        >
          Consultar por WhatsApp
        </button>

        <p className="text-[12px] text-neutral-500 mt-3">
          No almacenamos tus datos. Se abrirá WhatsApp con tu consulta.
        </p>
      </div>
    </form>
  );
}

