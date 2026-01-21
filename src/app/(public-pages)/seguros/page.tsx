import React from "react";
import type { Metadata } from "next";
import {
  Shield,
  LifeBuoy,
  FileText,
  Wrench,
  CreditCard,
  Gauge,
} from "lucide-react";

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
          <Benefit
            title="Responsabilidad civil"
            text="Protegé a terceros."
            icon={Shield}
          />
          <Benefit title="Asistencia 24/7" text="Auxilio y grúa en ruta." icon={LifeBuoy} />
          <Benefit
            title="Gestión simple"
            text="Sin vueltas ni trámites eternos."
            icon={FileText}
          />
          <Benefit title="Daños y robo" text="Coberturas completas." icon={Wrench} />
          <Benefit title="Pagos flexibles" text="Cuotas a tu medida." icon={CreditCard} />
          <Benefit title="A tu medida" text="Según tu moto y uso." icon={Gauge} />
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

/* ================= COMPONENTE BENEFIT ================= */

function Benefit({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-start gap-3">
      {/* Caja fija, centrado perfecto, icono consistente */}
      <div
        className="
          shrink-0
          w-11 h-11
          rounded-lg bg-neutral-100 text-neutral-900
          ring-1 ring-black/5
          grid place-items-center
        "
      >
        <Icon className="w-5 h-5" strokeWidth={2.25} />
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
