// features/cascos/components/SizeGuideCascosModal.tsx
"use client";

import { useState } from "react";

export function SizeGuideCascosModal() {
  const [open, setOpen] = useState(false);

  const rows = [
    { talle: "XS", contorno: "53 - 54 cm" },
    { talle: "S", contorno: "55 - 56 cm" },
    { talle: "M", contorno: "57 - 58 cm" },
    { talle: "L", contorno: "59 - 60 cm" },
    { talle: "XL", contorno: "61 - 62 cm" },
    { talle: "XXL", contorno: "63 - 64 cm" },
  ];

  return (
    <>
      {/* Botón que se ve en la página de cascos */}
      <button
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center justify-center
          px-4 py-2 rounded-full
          border border-neutral-300
          text-[13px] font-semibold
          text-neutral-800 bg-white
          hover:bg-neutral-100
        "
      >
        Tabla de talles
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
          />

          {/* Panel principal */}
          <div
            className="
              relative z-10 bg-white
              max-w-3xl w-full mx-4 sm:mx-6
              border border-neutral-200
              rounded-md
              shadow-[0_28px_60px_rgba(0,0,0,0.50)]
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-5 pb-3 border-b border-neutral-200">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                NEA MOTOS · CASCOS
              </div>
              <div className="mt-1 flex items-start justify-between gap-4">
                <h2 className="text-[20px] font-bold text-neutral-900 leading-snug">
                  Guía de talles de cascos
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-1 w-8 h-8 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 rounded-full"
                  aria-label="Cerrar"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido */}
            <div className="px-6 sm:px-8 py-6 sm:py-7 text-[14px] text-neutral-800 bg-white space-y-6">
              {/* Tabla simple */}
              <div className="border border-neutral-200 rounded-md overflow-hidden">
                <table className="w-full text-[13px] border-collapse">
                  <thead className="bg-neutral-100/80">
                    <tr>
                      <th className="border border-neutral-200 px-2 py-2 text-left font-semibold">
                        Talle
                      </th>
                      <th className="border border-neutral-200 px-2 py-2 text-left font-semibold">
                        Contorno de cabeza (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, idx) => (
                      <tr
                        key={r.talle}
                        className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}
                      >
                        <td className="border border-neutral-200 px-2 py-2 font-semibold whitespace-nowrap">
                          {r.talle}
                        </td>
                        <td className="border border-neutral-200 px-2 py-2 whitespace-nowrap">
                          {r.contorno}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-4 sm:px-5 py-2 border-t border-neutral-200 bg-neutral-50">
                  <p className="text-[12px] text-neutral-500">
                    * Todas las medidas están expresadas en centímetros. Los
                    valores son orientativos y pueden variar levemente según el
                    modelo y la marca del casco.
                  </p>
                </div>
              </div>

              {/* Cómo medir */}
              <section className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 items-start">
                <div className="space-y-3 text-[15px] leading-relaxed text-neutral-800">
                  <h4 className="text-[16px] font-semibold uppercase tracking-wide text-neutral-900 mb-1">
                    ¿CÓMO MEDIR TU CABEZA?
                  </h4>
                  <p>
                    Usá una cinta métrica flexible y medí el{" "}
                    <span className="font-semibold">
                      contorno de tu cabeza
                    </span>{" "}
                    pasando por encima de las cejas y orejas, rodeando la parte
                    más ancha.
                  </p>
                  <p>
                    Mantené la cinta nivelada y sin apretar demasiado. Compará
                    el resultado con la tabla para elegir el talle más
                    adecuado. Si estás entre dos talles, suele recomendarse{" "}
                    <span className="font-semibold">
                      elegir el más chico
                    </span>{" "}
                    para que el casco quede firme pero cómodo.
                  </p>
                </div>

                <div className="flex justify-center sm:justify-end">
                  <div className="w-full max-w-[260px] h-[220px] sm:h-[260px] flex items-center justify-center">
                    <img
                      src="/cascos/medida-cabeza.webp"
                      alt="Guía de medidas para cascos"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
