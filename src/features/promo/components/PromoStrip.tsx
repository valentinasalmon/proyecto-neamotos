import Image from "next/image";

export function PromoStrip() {
  return (
    <section className="bg-[#0A2342] py-10 sm:py-14 relative overflow-hidden">
      {/* (opcional) Textura muy tenue */}
      <div className="absolute inset-0 opacity-[0.08]">
        <Image
          src="/textures/texture-pattern.png" // opcional, podés borrar si querés fondo liso
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-center gap-8">
          {/* Imagen lateral */}
          <div className="hidden md:block">
            <div className="relative h-28 w-60 overflow-hidden rounded-lg shadow-md ring-1 ring-white/10">
              <Image
                src="/banners/promo.jpg"
                alt="Promo NEA Motos"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </div>

          {/* Texto central */}
          <div className="text-white">
            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm opacity-80">
              Somos fanáticos
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1">
              de la vida sobre ruedas.
            </h3>
            <p className="mt-1 text-white/80 text-sm sm:text-base max-w-md">
              Elegí tu próxima moto entre nuestras marcas líderes y viví la experiencia NEA.
            </p>
          </div>

          {/* CTA */}
          <div className="justify-self-start md:justify-self-end">
            <a
              href="#motos"
              className="inline-block rounded-full bg-red-600 px-6 py-2.5 text-white text-sm sm:text-base font-semibold hover:bg-red-700 active:bg-red-800 transition-all shadow-md hover:shadow-lg"
            >
              Ver motos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
