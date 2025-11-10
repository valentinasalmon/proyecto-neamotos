"use client";

export function PromoStrip() {
  return (
    <section className="relative bg-[#0A2342] py-10 sm:py-12 text-center overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 flex flex-col items-center justify-center gap-3">
        {/* Subtítulo */}
        <p className="font-manrope text-xs uppercase tracking-[0.2em] text-white/80 sm:text-sm fade-up">
          Somos fanáticos
        </p>

        {/* Título principal */}
        <h2
          className="
            font-anton uppercase text-white
            text-[30px] sm:text-[42px] md:text-[48px]
            leading-[1] tracking-tight fade-up-delay
          "
        >
          De la vida sobre ruedas.
        </h2>

        {/* Botón CTA */}
        <a
          href="/catalogo" // cambia la ruta si tu catálogo tiene otro path
          className="
            mt-4 inline-flex items-center justify-center rounded-full
            bg-red-600 px-7 py-2.5 text-white font-manrope font-semibold
            text-sm sm:text-base shadow-md hover:bg-red-700 active:bg-red-800
            hover:shadow-lg transition-all fade-up-delay-2
          "
        >
          Ver motos
        </a>
      </div>

      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.8s ease-out forwards;
        }

        .fade-up-delay {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.8s 0.1s ease-out forwards;
        }

        .fade-up-delay-2 {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 0.8s 0.2s ease-out forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-up,
          .fade-up-delay,
          .fade-up-delay-2 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );        
}
