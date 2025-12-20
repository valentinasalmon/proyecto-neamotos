
"use client";

import { useMemo, useState } from "react";

type Props = {
  whatsappNumber?: string;
};

export default function CubiertasForm({ whatsappNumber }: Props) {
  const [nombre, setNombre] = useState("");
  const [modelo, setModelo] = useState("");

  const phone =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_CUBIERTAS ||
    "5493795134533";


  const isValid = useMemo(() => {
    const hasName = nombre.trim().length >= 3;
    const hasModelo = modelo.trim().length >= 2;
    return hasName && hasModelo;
  }, [nombre, modelo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const texto =
      `Hola! Quiero consultar cubiertas.\n` +
      `Nombre y apellido: ${nombre.trim()}\n` +
      `Modelo de la moto: ${modelo.trim()}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="text-neutral-900">
      <p className="text-sm text-neutral-500 mb-6 mt-1">
        Escribinos por WhatsApp y te pasamos opciones según tu moto
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
            Modelo a consultar <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Ej: Rouser NS 200 / Wave 110 / Titan 150"
            className="w-full bg-transparent border-b border-neutral-300 py-2 text-[15px] text-neutral-900 caret-[#0A2342] placeholder:text-neutral-400 focus:border-[#0A2342] focus:outline-none transition-colors"
            required
          />
          <p className="text-[12px] text-neutral-500 mt-2">
            Si podés, agregá año o cilindrada (ej: “Titan 150 2022”)
          </p>
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


