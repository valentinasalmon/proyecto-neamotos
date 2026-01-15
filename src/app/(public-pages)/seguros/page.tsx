import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguros | NEA Motos",
  description:
    "Protegé tu moto con coberturas a tu medida. Trabajamos con aseguradoras aliadas.",
};

/* ================= ASEGURADORAS ================= */

const insurers = [
  {
    name: "La Caja",
    logo: "/seguros/lacaja.svg",
    alt: "Logo La Caja",
    imgClass: "scale-[1.22]",
    capClass: "",
  },
  {
    name: "San Patricio",
    logo: "/seguros/sp.jpg",
    alt: "Logo San Patricio Seguros",
    imgClass: "scale-[1]",
    // 👇 un toque MÁS chico (ajuste fino final)
    capClass:
      "max-w-[175px] sm:max-w-[185px] md:max-w-[195px] max-h-[80px] sm:max-h-[88px] md:max-h-[95px]",
  },
  {
    name: "Triunfo",
    logo: "/seguros/triunfo.svg",
    alt: "Logo Triunfo Seguros",
    imgClass: "scale-[1.25]",
    capClass: "",
  },
];

const phone = "543795134533";
const message = "Hola! Quiero consultar por seguros para mi moto.";
const waHref = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
  message
)}`;

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      {/* ================= HEADER ================= */}
      <header className="mb-8">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide text-neutral-900">
          PROTECCIÓN EN CADA KILÓMETRO
        </h1>

        <p className="mt-4 max-w-3xl text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">
          En NEA Motos trabajamos con aseguradoras de confianza para que elijas la
          cobertura ideal según tu estilo de conducción, uso y presupuesto.
        </p>

        <div className="mt-6 border-t border-neutral-200" />
      </header>

      {/* ================= BENEFICIOS ================= */}
      <section>
        <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-neutral-600">
          ¿Por qué contratar un seguro?
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-neutral-800">
          <Benefit title="Responsabilidad civil" text="Protegé a terceros." svg={ShieldSVG} />
          <Benefit title="Asistencia 24/7" text="Auxilio y grúa en ruta." svg={BuoySVG} />
          <Benefit title="Gestión simple" text="Sin vueltas ni trámites eternos." svg={FileCheckSVG} />
          <Benefit title="Daños y robo" text="Coberturas completas." svg={WrenchSVG} />
          <Benefit title="Pagos flexibles" text="Cuotas a tu medida." svg={CardSVG} />
          <Benefit title="A tu medida" text="Según tu moto y uso." svg={GaugeSVG} />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="mt-10">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full
            bg-red-600 hover:bg-red-700 active:bg-red-800
            text-white font-semibold
            px-7 py-3
            shadow-[0_12px_24px_rgba(220,38,38,0.35)]
            w-full sm:w-auto
          "
        >
          Consultar
        </a>
      </div>

      {/* ================= ASEGURADORAS ================= */}
      <section className="mt-12 border-t border-neutral-200">
        <div
          className="
            pt-6 pb-12
            grid grid-cols-1 sm:grid-cols-3
            gap-y-8 sm:gap-y-0
            gap-x-12
            place-items-center
          "
        >
          {insurers.map((i) => (
            <div
              key={i.name}
              className="
                w-[260px] h-[130px]
                sm:w-[280px] sm:h-[140px]
                md:w-[300px] md:h-[150px]
                flex items-center justify-center
              "
            >
              <img
                src={i.logo}
                alt={i.alt}
                loading="lazy"
                className={`
                  object-contain
                  ${i.imgClass}
                  ${i.capClass ? `${i.capClass} w-auto h-auto` : "w-full h-full"}
                `}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTES ================= */

function Benefit({
  title,
  text,
  svg: SVG,
}: {
  title: string;
  text: string;
  svg: React.ElementType;
}) {

  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 rounded-md bg-neutral-100 p-2 text-neutral-900">
        <SVG />
      </div>
      <div>
        <h4 className="text-[15px] font-semibold uppercase tracking-wide text-neutral-900">
          {title}
        </h4>
        <p className="mt-1 text-[15px] leading-relaxed text-neutral-700">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ================= SVG ORIGINALES ================= */

function ShieldSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 3l7 4v5a9 9 0 01-7 8 9 9 0 01-7-8V7l7-4z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function BuoySVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function FileCheckSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" stroke="currentColor" strokeWidth="2" />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function WrenchSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M10 7a5 5 0 017.07-4.95l-3.12 3.12a2 2 0 102.83 2.83l3.12-3.12A5 5 0 0117 14a5 5 0 01-5-5z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CardSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function GaugeSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M21 13a9 9 0 10-18 0" stroke="currentColor" strokeWidth="2" />
      <path d="M12 13l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
