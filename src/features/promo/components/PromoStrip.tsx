import Image from "next/image";

export default function PromoStrip() {
  return (
    <section className="bg-black py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-center gap-6">
          {/* Imagen lateral (podés cambiarla o quitarla) */}
          <div className="hidden md:block">
            <div className="relative h-24 w-56 overflow-hidden rounded-lg">
              <Image
                src="/banners/promo.jpg" // poné tu imagen en public/banners/promo.jpg
                alt="Promo"
                fill
                className="object-cover opacity-90"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="text-white">
            <p className="uppercase tracking-widest text-xs sm:text-sm opacity-80">
              Somos fanáticos
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              de la vida sobre ruedas.
            </h3>
          </div>

          {/* CTA */}
          <div className="justify-self-start md:justify-self-end">
            <a
              href="#motos"
              className="inline-block rounded-xl bg-red-600 px-4 py-2 text-white font-semibold hover:bg-red-700 transition"
            >
              Ver motos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
