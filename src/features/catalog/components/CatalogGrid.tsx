"use client";

import Image from "next/image";

type Moto = {
  id: string;
  nombre: string;
  img: string;
  marca?: string;
  tipo?: string;
};

const MOTOS: Moto[] = [
  {
    id: "1",
    nombre: "Zontes RR 703",
    img: "/motos/zontes-rr703.png",
    marca: "Zontes",
    tipo: "Sport",
  },
  {
    id: "2",
    nombre: "Yamaha FZ 25 ABS",
    img: "/motos/yamaha-fz25.png",
    marca: "Yamaha",
    tipo: "Street",
  },
  {
    id: "3",
    nombre: "Yamaha XMAX 300",
    img: "/motos/xmax-300.png",
    marca: "Yamaha",
    tipo: "Scooter",
  },
  {
    id: "4",
    nombre: "Kove 525 X",
    img: "/motos/kove-525x.png",
    marca: "Kove",
    tipo: "Adventure",
  },
];

export function CatalogGrid() {
  return (
    <div
      className="
        grid
        gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {MOTOS.map((moto) => (
        <article
          key={moto.id}
          className="
            bg-white
            border border-neutral-300
            shadow-[0_20px_40px_rgba(0,0,0,0.05)]
            rounded-none
            flex flex-col
            transition-shadow
            hover:shadow-[0_28px_56px_rgba(0,0,0,0.08)]
          "
        >
          {/* Imagen */}
          <div
            className="
              relative
              w-full
              h-[240px]
              flex items-center justify-center
              p-6
              border-b border-neutral-200
              bg-white
            "
          >
            <Image
              src={moto.img}
              alt={moto.nombre}
              fill
              className="object-contain"
            />
          </div>

          {/* Texto + CTA */}
          <div className="p-5 flex flex-col gap-4 flex-1">
            {/* Nombre de la moto (más grande) */}
            <h2 className="text-[16px] sm:text-[17px] font-semibold text-neutral-900 leading-snug">
              {moto.nombre}
            </h2>

            {/* Marca / tipo (más legible) */}
            <p className="text-[13px] text-neutral-600 leading-snug">
              {moto.marca ? moto.marca : ""}
              {moto.marca && moto.tipo ? " · " : ""}
              {moto.tipo ?? ""}
            </p>

            {/* Fila inferior */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-200">
              <span className="text-[12px] text-neutral-500 select-none">
                Consultar disponibilidad
              </span>

              {/* Botón WhatsApp: círculo verde con ícono grande */}
              <a
                href={`https://wa.me/5493790000000?text=Hola!%20Quiero%20info%20de%20la%20${encodeURIComponent(
                  moto.nombre
                )}`}
                className="
                  inline-flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-green-500 hover:bg-green-600 active:bg-green-700
                  shadow-[0_12px_24px_rgba(0,0,0,0.25)]
                  text-white
                "
                aria-label="Consultar por WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[18px] h-[18px]"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12 .75C5.74.75.72 5.77.72 12.02c0 2 .52 3.96 1.52 5.7L.75 23.25l5.7-1.47a11.3 11.3 0 0 0 5.57 1.42h.01c6.26 0 11.28-5.02 11.28-11.27 0-3.01-1.17-5.83-3.27-7.95ZM12.03 21c-1.7 0-3.36-.45-4.82-1.3l-.35-.2-3.38.87.9-3.3-.22-.34a9.32 9.32 0 0 1-1.42-4.86c0-5.15 4.2-9.35 9.37-9.35 2.5 0 4.84.98 6.61 2.75a9.3 9.3 0 0 1 2.74 6.6c0 5.16-4.2 9.34-9.43 9.34Zm5.25-6.98c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.29-.74.9-.9 1.09-.17.19-.33.21-.61.07-.28-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.6-1.52-1.87-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.1-.19.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.19 1.94 3.04 4.8 4.26.67.29 1.2.46 1.61.59.68.22 1.3.19 1.8.12.55-.08 1.66-.68 1.9-1.33.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.54-.33Z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
