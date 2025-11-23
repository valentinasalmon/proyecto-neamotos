import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seguros | NEA Motos",
  description:
    "Protegé tu moto con coberturas a tu medida. Trabajamos con aseguradoras aliadas.",
};

const insurers = [
  { name: "La Caja",      logo: "/seguros/lacaja.svg",      alt: "Logo La Caja" },
  { name: "San Patricio", logo: "/seguros/sanpatricio.svg", alt: "Logo San Patricio Seguros" },
  { name: "Triunfo",      logo: "/seguros/triunfo.svg",     alt: "Logo Triunfo Seguros" },
];

export default function Page() {
  return (
    // NOTA: NO usamos <main> acá, porque tu layout ya tiene <main>.
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      {/* Título (tipografía negra, igual a Financiación) */}
      <div className="flex items-start justify-between">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide text-neutral-900">
          SEGUROS
        </h1>
      </div>

      {/* Texto debajo del título */}
      <p className="mt-4 max-w-3xl text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">
        En NEA Motos trabajamos con aseguradoras de confianza para que elijas la cobertura ideal
        según tu estilo de conducción, uso y presupuesto. Protegé tu moto y disfrutá el camino con tranquilidad.
      </p>

      {/* ¿Por qué contratar un seguro? (SVG inline, 100% SSR) */}
      <section className="mt-12">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-neutral-900">
          ¿Por qué contratar un seguro?
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-neutral-800">
          <Benefit
            title="Responsabilidad civil"
            text="Cumplí con lo obligatorio y protegé a terceros ante un siniestro."
            svg={ShieldSVG}
          />
          <Benefit
            title="Asistencia 24/7"
            text="Grúa, auxilio y soporte en ruta cuando lo necesitás."
            svg={BuoySVG}
          />
          <Benefit
            title="Gestión simple"
            text="Te ayudamos a elegir la póliza y a resolver trámites sin vueltas."
            svg={FileCheckSVG}
          />
          <Benefit
            title="Daños y robo"
            text="Opciones con robo total/paro y coberturas de daños parciales."
            svg={WrenchSVG}
          />
          <Benefit
            title="Pagos flexibles"
            text="Elegí el medio de pago y cuotas que mejor se adapten a vos."
            svg={CardSVG}
          />
          <Benefit
            title="A tu medida"
            text="Coberturas según tu uso, presupuesto y tipo de moto."
            svg={GaugeSVG}
          />
        </div>
      </section>

      {/* Logos (más grandes, centrados) */}
      <section className="mt-14 pt-10 border-t border-neutral-200">
        <h3 className="font-display text-lg sm:text-xl font-bold tracking-wide mb-6 text-neutral-900">
          Aseguradoras aliadas
        </h3>

        <div className="grid gap-x-10 gap-y-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center">
          {insurers.map((i) => (
            <div key={i.name} className="flex items-center justify-center">
              {/* Contenedor más grande */}
              <div className="w-64 h-28 sm:w-72 sm:h-32">
                <img
                  src={i.logo}
                  alt={i.alt}
                  className="w-full h-full object-contain scale-125"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ======= Helpers SSR puros ======= */
function Benefit({
  title,
  text,
  svg: SVG,
}: {
  title: string;
  text: string;
  svg: () => JSX.Element;
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
        <p className="mt-1 text-[15px] leading-relaxed text-neutral-700">{text}</p>
      </div>
    </div>
  );
}

function ShieldSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path d="M12 3l7 4v5a9 9 0 01-7 8 9 9 0 01-7-8V7l7-4z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BuoySVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 3v6M21 12h-6M12 21v-6M3 12h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function FileCheckSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path
        d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 14l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function WrenchSVG() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
      <path
        d="M10 7a5 5 0 017.07-4.95l-3.12 3.12a2 2 0 102.83 2.83l3.12-3.12A5 5 0 0117 14a5 5 0 01-5-5z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M2 22l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
