"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  whatsappNumber?: string;
  modelos?: string[];
};

function normalizePhone(raw: string) {
  return (raw || "").replace(/\D/g, "");
}

function buildWhatsAppUrl(phoneRaw: string, text: string) {
  const phone = normalizePhone(phoneRaw);
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
    text
  )}`;
}

// ✅ Tipado estructural: acepta cualquier ref que tenga { current: HTMLElement | null }
function useOnClickOutside(
  refs: Array<{ current: HTMLElement | null }>,
  handler: () => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const isInside = refs.some((r) => r.current && r.current.contains(target));
      if (!isInside) handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener, { passive: true });

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}

export default function FinanciacionForm({ whatsappNumber, modelos = [] }: Props) {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");

  const [modelo, setModelo] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const phoneRaw =
    whatsappNumber ||
    process.env.NEXT_PUBLIC_WHATSAPP_FINANCIACION ||
    "5493795134533";

  const dniDigits = dni.replace(/\D/g, "");

  const isValid = useMemo(() => {
    const hasName = nombre.trim().length >= 3;
    const hasDni = dniDigits.length === 8;
    const hasModelo = modelo.trim().length >= 2;
    return hasName && hasDni && hasModelo;
  }, [nombre, dniDigits, modelo]);

  const normalizedQuery = useMemo(() => modelo.trim().toLowerCase(), [modelo]);

  const filteredModelos = useMemo(() => {
    if (!modelos.length) return [];
    if (!normalizedQuery) return modelos.slice(0, 60);
    return modelos
      .filter((m) => m.toLowerCase().includes(normalizedQuery))
      .slice(0, 60);
  }, [modelos, normalizedQuery]);

  useOnClickOutside([wrapRef], () => {
    setOpen(false);
    setActiveIndex(-1);
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
        inputRef.current?.blur();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const selectModelo = (value: string) => {
    setModelo(value);
    setOpen(false);
    setActiveIndex(-1);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const onModeloKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (!filteredModelos.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((prev) => {
        const next = Math.min(prev + 1, filteredModelos.length - 1);
        requestAnimationFrame(() => {
          const el = listRef.current?.querySelector(
            `[data-idx="${next}"]`
          ) as HTMLElement | null;
          el?.scrollIntoView({ block: "nearest" });
        });
        return next;
      });
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => {
        const next = Math.max(prev - 1, 0);
        requestAnimationFrame(() => {
          const el = listRef.current?.querySelector(
            `[data-idx="${next}"]`
          ) as HTMLElement | null;
          el?.scrollIntoView({ block: "nearest" });
        });
        return next;
      });
    }

    if (
      e.key === "Enter" &&
      open &&
      activeIndex >= 0 &&
      activeIndex < filteredModelos.length
    ) {
      e.preventDefault();
      selectModelo(filteredModelos[activeIndex]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const texto =
      `Hola! Quiero financiar una moto.\n` +
      `Nombre y apellido: ${nombre.trim()}\n` +
      `DNI: ${dniDigits}\n` +
      `Modelo: ${modelo.trim()}`;

    const url = buildWhatsAppUrl(phoneRaw, texto);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl text-neutral-900">
      <p className="text-sm text-neutral-500 mb-8 mt-2">
        Escribinos por WhatsApp para simular tu plan
      </p>

      <div className="grid gap-10 md:grid-cols-2">
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
        </div>

        <div className="md:col-span-2" ref={wrapRef}>
          <label className="text-[13px] font-semibold text-neutral-800 mb-2 block">
            Modelo a consultar <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={modelo}
              onChange={(e) => {
                setModelo(e.target.value);
                setOpen(true);
                setActiveIndex(-1);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={onModeloKeyDown}
              placeholder="Ej: Rouser NS 200"
              className="
                w-full bg-transparent
                border-b border-neutral-300
                py-2 pr-10 text-[15px] text-neutral-900 caret-[#0A2342]
                placeholder:text-neutral-400
                focus:border-[#0A2342] focus:outline-none
                transition-colors
              "
              required
            />

            <button
              type="button"
              onClick={() => {
                setOpen((v) => !v);
                requestAnimationFrame(() => inputRef.current?.focus());
              }}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                rounded-md p-2
                text-neutral-500 hover:text-neutral-800
                hover:bg-neutral-100
                focus:outline-none
                transition
              "
              aria-label="Abrir lista de modelos"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className={
                  open ? "rotate-180 transition-transform" : "transition-transform"
                }
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {open && modelos.length > 0 && (
              <div
                className="
                  absolute z-50 mt-2 w-full
                  rounded-xl border border-neutral-200
                  bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                  overflow-hidden
                "
              >
                <div
                  ref={listRef}
                  className="
                    max-h-[55vh] sm:max-h-[45vh] md:max-h-[380px]
                    overflow-auto
                    [scrollbar-width:thin]
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-neutral-200
                  "
                >
                  {filteredModelos.length === 0 ? (
                    <div className="px-3 py-3 text-[13px] text-neutral-500">
                      Sin resultados
                    </div>
                  ) : (
                    filteredModelos.map((m, idx) => (
                      <button
                        key={m}
                        type="button"
                        data-idx={idx}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => selectModelo(m)}
                        className={[
                          "w-full text-left px-3 py-3 text-[14px] font-semibold",
                          idx === activeIndex ? "bg-neutral-100" : "bg-white",
                          "hover:bg-neutral-100 transition",
                        ].join(" ")}
                      >
                        {m}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
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
        >
          Enviar por WhatsApp
        </button>
      </div>
    </form>
  );
}
