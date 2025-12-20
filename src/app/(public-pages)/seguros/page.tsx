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

const waHref =
  "https://wa.me/5493795134533?text=Hola!%20Quiero%20consultar%20por%20seguros%20para%20mi%20moto.";

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
      {/* HEADER */}
      <header className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-wide text-neutral-900">
          PROTECCIÓN EN CADA KILOMETRO 
        </h1>

        <p className="mt-4 max-w-3xl text-[15px] sm:text-[16px] leading-relaxed text-neutral-700">
          En NEA Motos trabajamos con aseguradoras de confianza para que elijas la
          cobertura ideal según tu estilo de conducción, uso y presupuesto.
          Protegé tu moto y disfrutá el camino con tranquilidad.
        </p>

        <div className="mt-6 border-t border-neutral-200" />
      </header>

      {/* ¿POR QUÉ CONTRATAR UN SEGURO? */}
      <section>
       <h2 className="
  text-sm sm:text-base
  font-semibold
  uppercase
  tracking-wide
  text-neutral-600
">
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
            text="Opciones con robo total y coberturas de daños parciales."
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

      {/* CTA – ubicación óptima */}
      <div className="mt-10 flex justify-start">
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
            transition-colors
            w-full sm:w-auto
          "
          aria-label="Consultar seguros por WhatsApp"
        >
          Consultar
        </a>
      </div>

      {/* ASEGURADORAS */}
      <section className="mt-12 pt-6 border-t border-neutral-200">
      
        <div
          className="
            mt-4
            max-w-3xl mx-auto
            grid
            grid-cols-2 sm:grid-cols-3
            gap-x-6 gap-y-6
            place-items-center
          "
        >
          {insurers.map((i, index) => {
            const isSanPatricio = i.name === "San Patricio";
            const isLast = index === insurers.length - 1;

            return (
              <div
                key={i.name}
                className={`flex items-center justify-center ${
                  isLast ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <img
  src={i.logo}
  alt={i.alt}
  loading="lazy"
  className={`h-40 sm:h-48 md:h-56 w-auto object-contain ${
    isSanPatricio ? "scale-[1.35]" : ""
  }`}
/>

              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

/* ===== Helpers ===== */

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
        <p className="mt-1 text-[15px] leading-relaxed text-neutral-700">
          {text}
        </p>
      </div>
    </div>
  );
}

/* ===== SVGs ===== */

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
