"use client";

import Image from "next/image";
import { Moto } from "../types";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const PHONE = process.env.NEXT_PUBLIC_PHONE ?? "";

export function MotoCard({ moto }: { moto: Moto }) {
  const url = buildWhatsAppLink(PHONE, `${moto.marca} ${moto.modelo}`);

  return (
    <article className="relative bg-white rounded-2xl p-5 card flex flex-col justify-between shadow">
      {/* Header con título y precio */}
      <header className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-lg">{moto.marca} {moto.modelo}</h4>
          <p className="text-xs text-gray-500">Powered by {moto.marca}</p>
        </div>
        <div className="text-brand font-extrabold text-xl">
          US$ {moto.precioUsd.toLocaleString()}
        </div>
      </header>

      {/* Imagen */}
      <div className="mt-3 w-full h-48 relative">
        <Image
          src={moto.imagen}
          alt={`${moto.marca} ${moto.modelo}`}
          fill
          className="object-contain"
        />
      </div>

      {/* Specs */}
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-gray-500">Año</dt>
          <dd className="font-semibold">{moto.anio}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Tipo</dt>
          <dd className="font-semibold">{moto.tipo}</dd>
        </div>
        <div>
          <dt className="text-gray-500">Cilindrada</dt>
          <dd className="font-semibold">{moto.cilindradaCc} cc</dd>
        </div>
        <div>
          <dt className="text-gray-500">Potencia</dt>
          <dd className="font-semibold">{moto.potenciaHp} hp</dd>
        </div>
      </dl>

      {/* Botón WhatsApp CENTRADO */}
      <div className="mt-6 flex justify-center">
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="bg-[#25D366] text-white rounded-full px-5 py-2 font-bold inline-flex items-center gap-2 shadow hover:scale-105 transition"
          aria-label={`Consultar ${moto.marca} ${moto.modelo} por WhatsApp`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M12 2C6.477 2 2 6.02 2 11c0 1.937.607 3.74 1.64 5.236L2 22l5.926-1.556C9.297 21.453 10.616 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.13 0-2.206-.293-3.155-.84l-.226-.132-3.52.925.94-3.413-.147-.232A7.956 7.956 0 0 1 4 11c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.316-5.337c-.236-.118-1.396-.688-1.613-.767-.217-.079-.375-.118-.533.118s-.61.767-.748.925c-.138.158-.276.178-.512.059-.236-.118-.997-.367-1.9-1.171-.703-.626-1.178-1.398-1.316-1.634-.138-.237-.015-.365.104-.483.107-.106.236-.276.355-.414.118-.138.158-.237.236-.395.079-.158.04-.296-.02-.414-.059-.118-.533-1.283-.732-1.756-.192-.462-.387-.399-.533-.406-.138-.007-.296-.009-.454-.009-.158 0-.414.059-.63.296s-.828.81-.828 1.976c0 1.165.848 2.29.966 2.448.118.158 1.67 2.549 4.048 3.572.566.245 1.007.391 1.351.501.567.18 1.084.154 1.492.093.455-.068 1.396-.57 1.593-1.12.197-.55.197-1.02.138-1.12-.059-.099-.217-.158-.454-.276z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </article>
  );
}
