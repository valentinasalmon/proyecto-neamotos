"use client";

import { useMemo, useState } from "react";

type Props = {
  whatsappNumber?: string;
  modelos?: string[]; // nombres de modelos para autocompletar
};

export default function FinanciacionForm({ whatsappNumber, modelos = [] }: Props) {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [modelo, setModelo] = useState("");

  const phone =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_FINANCIACION ||
    "54937940000000";

  const dniDigits = dni.replace(/\D/g, "");

  const isValid = useMemo(() => {
    const hasName = nombre.trim().length >= 3;
    const hasDni = dniDigits.length >= 8 && dniDigits.length <= 10;
    const hasModelo = modelo.trim().length >= 2;
    return hasName && hasDni && hasModelo;
  }, [nombre, dniDigits, modelo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const texto =
      `Hola! Quiero financiar una moto.\n` +
      `Nombre y apellido: ${nombre.trim()}\n` +
      `DNI: ${dniDigits}\n` +
      `Modelo: ${modelo.trim()}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl text-neutral-900">
      <p className="text-sm text-neutral-500 mb-8 mt-2">
       Escribinos por WhatsApp para simular tu plan
      </p>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Nombre */}
        <div>
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Nombre y Apellido <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej: Juan Pérez"
            className="
              w-full bg-transparent
              border-b border-neutral-300
              py-2 text-[15px] text-neutral-900 caret-[#0A2342]
              placeholder:text-neutral-400
              focus:border-[#0A2342] focus:outline-none
              transition-colors
            "
            required
          />
        </div>

        {/* DNI */}
        <div>
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            DNI <span className="text-red-600">*</span>
          </label>
          <input
            inputMode="numeric"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="Ej: 31234567"
            className="
              w-full bg-transparent
              border-b border-neutral-300
              py-2 text-[15px] text-neutral-900 caret-[#0A2342]
              placeholder:text-neutral-400
              focus:border-[#0A2342] focus:outline-none
              transition-colors
            "
            required
          />
          <p className="text-[12px] text-neutral-500 mt-2">
            Solo números, sin puntos
          </p>
        </div>

        {/* Modelo con autocomplete */}
        <div className="md:col-span-2">
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Modelo a consultar <span className="text-red-600">*</span>
          </label>

          {/* Autocomplete nativo con datalist */}
          <input
            type="text"
            list="modelos-list"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            placeholder="Ej: Rouser NS 200"
            className="
              w-full bg-transparent
              border-b border-neutral-300
              py-2 text-[15px] text-neutral-900 caret-[#0A2342]
              placeholder:text-neutral-400
              focus:border-[#0A2342] focus:outline-none
              transition-colors
            "
            required
          />

          {/* Opciones */}
          {modelos.length > 0 && (
            <datalist id="modelos-list">
              {modelos.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
          )}

        </div>
      </div>

      <div className="mt-10">
        <button
          type="submit"
          disabled={!isValid}
          className="
            inline-flex items-center justify-center
            rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800
            text-white text-[14px] font-semibold px-8 py-3
            shadow-[0_10px_20px_rgba(255,59,47,0.25)]
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all
          "
          aria-disabled={!isValid}
        >
          Enviar por WhatsApp
        </button>

        <p className="text-[12px] text-neutral-500 mt-4">
          No almacenamos tus datos en el sitio. Al enviar, se abrirá WhatsApp con tu consulta
        </p>
      </div>
    </form>
  );
}
