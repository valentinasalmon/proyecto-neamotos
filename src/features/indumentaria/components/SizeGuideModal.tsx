"use client";

import { useState, type ReactNode } from "react";

type TabKey = "Guantes" | "Camperas" | "Pantalones";
type Gender = "Hombre" | "Mujer";

export function SizeGuideModal() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("Guantes");

  return (
    <>
      {/* Botón que se ve en la página de indumentaria */}
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
              max-w-5xl w-full mx-4 sm:mx-6
              border border-neutral-200
              rounded-md
              shadow-[0_28px_60px_rgba(0,0,0,0.50)]
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Header */}
            <div className="px-6 sm:px-8 pt-5 pb-3 border-b border-neutral-200">
              <div className="text-[11px] font-semibold tracking-[0.22em] text-neutral-500 uppercase">
                NEA MOTOS · INDUMENTARIA
              </div>
              <div className="mt-1 flex items-start justify-between gap-4">
                <h2 className="text-[20px] font-bold text-neutral-900 leading-snug">
                  Guía de talles
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

            {/* Tabs de prenda – estilo nav */}
            <div className="px-6 sm:px-8 border-b border-neutral-200 bg-white">
              <div className="flex gap-6 text-[13px] font-semibold">
                {(["Guantes", "Camperas", "Pantalones"] as TabKey[]).map(
                  (tab) => {
                    const isActive = activeTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                          relative pb-3 pt-3 -mb-px
                          border-b-2 transition-colors
                          ${
                            isActive
                              ? "border-[#0A2342] text-neutral-900"
                              : "border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300"
                          }
                        `}
                      >
                        {tab}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Contenido según prenda */}
            <div className="px-6 sm:px-8 py-6 sm:py-7 text-[14px] text-neutral-800 bg-white">
              {activeTab === "Guantes" && <GuantesContent />}
              {activeTab === "Camperas" && <CamperasContent />}
              {activeTab === "Pantalones" && <PantalonesContent />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   GUANTES
   ========================================================= */

function GuantesContent() {
  const [gender, setGender] = useState<Gender>("Hombre");

  return (
    <div className="space-y-6">
      <GenderTableCard
        gender={gender}
        onChangeGender={setGender}
        note="* Todas las medidas están expresadas en centímetros. Los valores son orientativos y pueden variar levemente según el modelo."
      >
        {gender === "Hombre" ? <GuantesHombreTable /> : <GuantesMujerTable />}
      </GenderTableCard>

      <MeasureSection
        title="¿CÓMO MEDIR?"
        imageSrc="/indumentaria/medidasguantes.webp"
        imageAlt="Guía de medidas para guantes"
        size="guantes"
      >
        <p>
          <span className="font-semibold">1 · Dedo mayor:</span> medí el largo
          de tu dedo mayor en centímetros.
        </p>
        <p>
          <span className="font-semibold">2 · Dedo pulgar:</span> medí el largo
          de tu dedo pulgar.
        </p>
      </MeasureSection>
    </div>
  );
}

function GuantesHombreTable() {
  const rows = [
    { talle: "XS", mayor: "7.8", pulgar: "4.8" },
    { talle: "S", mayor: "8.2", pulgar: "5.2" },
    { talle: "M", mayor: "8.6", pulgar: "5.6" },
    { talle: "L", mayor: "9", pulgar: "6" },
    { talle: "XL", mayor: "9.4", pulgar: "6.4" },
    { talle: "XXL", mayor: "9.8", pulgar: "6.8" },
    { talle: "3XL", mayor: "10.2", pulgar: "7.2" },
  ];

  return (
    <SimpleTable
      head={["Talle", "Dedo mayor (cm)", "Dedo pulgar (cm)"]}
      rows={rows.map((r) => [r.talle, r.mayor, r.pulgar])}
    />
  );
}

function GuantesMujerTable() {
  const rows = [
    { talle: "XS", mayor: "7,3", pulgar: "4,8" },
    { talle: "S", mayor: "7,7", pulgar: "5" },
    { talle: "M", mayor: "8,1", pulgar: "5,4" },
    { talle: "L", mayor: "8,5", pulgar: "5,8" },
    { talle: "XL", mayor: "8,9", pulgar: "6,2" },
    { talle: "XXL", mayor: "9,3", pulgar: "6,6" },
  ];

  return (
    <SimpleTable
      head={["Talle", "Dedo mayor (cm)", "Dedo pulgar (cm)"]}
      rows={rows.map((r) => [r.talle, r.mayor, r.pulgar])}
    />
  );
}

/* =========================================================
   CAMPERAS
   ========================================================= */

function CamperasContent() {
  const [gender, setGender] = useState<Gender>("Hombre");

  return (
    <div className="space-y-6">
      <GenderTableCard
        gender={gender}
        onChangeGender={setGender}
        note="* Todas las medidas están expresadas en centímetros. Los valores son orientativos y pueden variar levemente según el modelo."
      >
        {gender === "Hombre" ? <CamperasHombreTable /> : <CamperasMujerTable />}
      </GenderTableCard>

      <MeasureSection
        title="¿CÓMO MEDIR?"
        imageSrc="/indumentaria/medidascamperas.webp"
        imageAlt="Guía de medidas para camperas"
        size="camperas"
      >
        <p>
          <span className="font-semibold">Largo de torso:</span> tomá la medida
          de frente desde el punto más alto del hombro hasta el final del torso.
        </p>
        <p>
          <span className="font-semibold">Contorno de pecho:</span> medí
          alrededor de la parte más ancha de tu pecho, por debajo de las
          axilas, manteniendo la cinta paralela al suelo.
        </p>
      </MeasureSection>
    </div>
  );
}

function CamperasHombreTable() {
  const rows = [
    { talle: "XS", altura: "168 - 174", pecho: "94 - 98" },
    { talle: "S", altura: "172 - 178", pecho: "98 - 102" },
    { talle: "M", altura: "176 - 182", pecho: "98 - 102" },
    { talle: "L", altura: "180 - 186", pecho: "106 - 110" },
    { talle: "XL", altura: "182 - 188", pecho: "110 - 114" },
    { talle: "XXL", altura: "184 - 190", pecho: "114 - 118" },
    { talle: "3XL", altura: "186 - 192", pecho: "118 - 122" },
    { talle: "4XL", altura: "188 - 194", pecho: "122 - 126" },
    { talle: "5XL", altura: "190 - 196", pecho: "126 - 130" },
  ];

  return (
    <SimpleTable
      head={["Talle", "Altura (cm)", "Contorno de pecho (cm)"]}
      rows={rows.map((r) => [r.talle, r.altura, r.pecho])}
    />
  );
}

function CamperasMujerTable() {
  const rows = [
    { talle: "XS", altura: "160 - 166", pecho: "84 - 88" },
    { talle: "S", altura: "163 - 169", pecho: "88 - 92" },
    { talle: "M", altura: "166 - 172", pecho: "92 - 96" },
    { talle: "L", altura: "168 - 174", pecho: "96 - 100" },
    { talle: "XL", altura: "170 - 176", pecho: "100 - 104" },
    { talle: "XXL", altura: "172 - 178", pecho: "104 - 108" },
    { talle: "3XL", altura: "174 - 180", pecho: "108 - 112" },
    { talle: "4XL", altura: "176 - 182", pecho: "112 - 116" },
  ];

  return (
    <SimpleTable
      head={["Talle", "Altura (cm)", "Contorno de pecho (cm)"]}
      rows={rows.map((r) => [r.talle, r.altura, r.pecho])}
    />
  );
}

/* =========================================================
   PANTALONES
   ========================================================= */

function PantalonesContent() {
  const [gender, setGender] = useState<Gender>("Hombre");

  return (
    <div className="space-y-6">
      <GenderTableCard
        gender={gender}
        onChangeGender={setGender}
        note="* Todas las medidas están expresadas en centímetros. Los valores son orientativos y pueden variar levemente según el modelo."
      >
        {gender === "Hombre" ? <PantalonesHombreTable /> : <PantalonesMujerTable />}
      </GenderTableCard>

      <MeasureSection
        title="¿CÓMO MEDIR?"
        imageSrc="/indumentaria/medidaspantalones.webp"
        imageAlt="Guía de medidas para pantalones"
        size="pantalones"
      >
        <p>
          <span className="font-semibold">Altura:</span> sin calzado, juntá tus
          pies y apoyá tu espalda contra una pared. Medí los cm desde la punta
          de tu cabeza hasta el piso.
        </p>
        <p>
          <span className="font-semibold">Contorno de cintura:</span> medí
          alrededor de tu cintura a la altura del ombligo, por arriba de los
          huesos de tu cadera.
        </p>
      </MeasureSection>
    </div>
  );
}

function PantalonesHombreTable() {
  const rows = [
    { talle: "S", altura: "172 - 178", cintura: "76 - 80", largo: "107" },
    { talle: "M", altura: "176 - 182", cintura: "80 - 84", largo: "108" },
    { talle: "L", altura: "180 - 186", cintura: "84 - 88", largo: "108" },
    { talle: "XL", altura: "182 - 188", cintura: "88 - 92", largo: "111" },
    { talle: "2XL", altura: "184 - 190", cintura: "92 - 96", largo: "113" },
    { talle: "3XL", altura: "186 - 194", cintura: "96 - 100", largo: "114" },
    { talle: "4XL", altura: "188 - 194", cintura: "100 - 104", largo: "116" },
    { talle: "5XL", altura: "190 - 196", cintura: "104 - 108", largo: "117" },
  ];

  return (
    <SimpleTable
      head={[
        "Talle",
        "Altura (cm)",
        "Contorno de cintura (cm)",
        "Largo (cm)",
      ]}
      rows={rows.map((r) => [r.talle, r.altura, r.cintura, r.largo])}
    />
  );
}

function PantalonesMujerTable() {
  const rows = [
    { talle: "XS", altura: "160 - 166", cintura: "70 - 75", largo: "96" },
    { talle: "S", altura: "163 - 169", cintura: "75 - 79", largo: "97" },
    { talle: "M", altura: "166 - 172", cintura: "79 - 82", largo: "99" },
    { talle: "L", altura: "168 - 174", cintura: "82 - 87", largo: "100" },
    { talle: "XL", altura: "170 - 176", cintura: "87 - 90", largo: "102" },
  ];

  return (
    <SimpleTable
      head={[
        "Talle",
        "Altura (cm)",
        "Contorno de cintura (cm)",
        "Largo (cm)",
      ]}
      rows={rows.map((r) => [r.talle, r.altura, r.cintura, r.largo])}
    />
  );
}

/* =========================================================
   Helpers UI
   ========================================================= */

function GenderTableCard({
  gender,
  onChangeGender,
  note,
  children,
}: {
  gender: Gender;
  onChangeGender: (g: Gender) => void;
  note: string;
  children: ReactNode;
}) {
  return (
    <div className="border border-neutral-200 rounded-md bg-neutral-50 overflow-hidden">
      <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-200 bg-white/80">
        <span className="text-[12px] font-semibold tracking-[0.18em] uppercase text-neutral-500">
          TABLA DE MEDIDAS
        </span>
        <div className="inline-flex rounded-full bg-neutral-100 p-1 text-[12px] font-semibold">
          {(["Hombre", "Mujer"] as Gender[]).map((g) => (
            <button
              key={g}
              onClick={() => onChangeGender(g)}
              className={`
                px-3 py-1 rounded-full transition-colors
                ${
                  gender === g
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-700 hover:text-neutral-900"
                }
              `}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto bg-white">{children}</div>

      <div className="px-4 sm:px-5 py-2 border-t border-neutral-200 bg-neutral-50">
        <p className="text-[12px] text-neutral-500">{note}</p>
      </div>
    </div>
  );
}

function SimpleTable({
  head,
  rows,
}: {
  head: string[];
  rows: (string | number)[][];
}) {
  return (
    <table className="w-full text-[13px] border-collapse">
      <thead className="bg-neutral-100/80">
        <tr>
          {head.map((h) => (
            <th
              key={h}
              className="border border-neutral-200 px-2 py-2 text-left font-semibold"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={idx}
            className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50"}
          >
            {row.map((cell, i) =>
              i === 0 ? (
                <td
                  key={i}
                  className="border border-neutral-200 px-2 py-2 font-semibold whitespace-nowrap"
                >
                  {cell}
                </td>
              ) : (
                <td
                  key={i}
                  className="border border-neutral-200 px-2 py-2 whitespace-nowrap text-center"
                >
                  {cell}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Bloque combinado texto + imagen — TODO del mismo tamaño */
function MeasureSection({
  title,
  children,
  imageSrc,
  imageAlt,
}: {
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section
      className="
        mt-6
        grid grid-cols-1
        sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]
        gap-10
        items-start sm:items-center
      "
    >
      {/* Texto */}
      <div className="space-y-4 text-[15px] leading-relaxed text-neutral-800">
        <h4 className="text-[16px] font-semibold uppercase tracking-wide text-neutral-900 mb-1">
          {title}
        </h4>
        {children}
      </div>

      {/* Imagen — tamaño unificado */}
      <div className="flex justify-center sm:justify-end">
        <div
          className="
            w-full max-w-[340px]
            h-[260px] sm:h-[320px]
            flex items-center justify-center
          "
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="
              w-full h-full
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}