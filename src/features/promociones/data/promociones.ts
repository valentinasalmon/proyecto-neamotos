// src/features/promociones/data/promociones.ts
// Promos de contado por tiempo limitado (lista de precios del 27/10/2026).
// Para cambiar o quitar una promo, editá este listado.

export type PromoMarca = "Keller" | "Motomel" | "Zanella";

export type PromoItem = {
  id: string;
  marca: PromoMarca;
  nombre: string; // nombre que se muestra en la tarjeta
  precio: number; // precio de contado en pesos
  detalle: string; // dato corto bajo el nombre (cilindrada según el catálogo)
};

export const PROMOS: PromoItem[] = [
  // === Keller ===
  {
    id: "keller-crono-110-base",
    marca: "Keller",
    nombre: "CRONO 110 BASE",
    detalle: "107 cc",
    precio: 1630000,
  },
  {
    id: "keller-crono-110-full",
    marca: "Keller",
    nombre: "CRONO 110 FULL",
    detalle: "107 cc",
    precio: 1830000,
  },
  {
    id: "keller-crono-125-tuning",
    marca: "Keller",
    nombre: "CRONO 125 TUNING",
    detalle: "120 cc",
    precio: 1860000,
  },
  {
    id: "keller-stratus-150-full",
    marca: "Keller",
    nombre: "STRATUS 150 FULL",
    detalle: "149 cc",
    precio: 2340000,
  },
  {
    id: "keller-miracle-150",
    marca: "Keller",
    nombre: "MIRACLE 150",
    detalle: "149 cc",
    precio: 2720000,
  },

  // === Motomel ===
  {
    id: "motomel-skua-125",
    marca: "Motomel",
    nombre: "SKUA 125",
    detalle: "124 cc",
    precio: 2590000,
  },
  {
    id: "motomel-skua-250",
    marca: "Motomel",
    nombre: "SKUA 250",
    detalle: "223 cc",
    precio: 3650000,
  },
  {
    id: "motomel-blitz-110-automatica",
    marca: "Motomel",
    nombre: "BLITZ 110 AUTOMÁTICA",
    detalle: "110 cc",
    precio: 1680000,
  },

  // === Zanella ===
  {
    id: "zanella-zb-110-z3-base",
    marca: "Zanella",
    nombre: "ZB 110 Z3 BASE",
    detalle: "107 cc",
    precio: 1650000,
  },
  {
    id: "zanella-zb-110-z3-full",
    marca: "Zanella",
    nombre: "ZB 110 Z3 FULL",
    detalle: "107 cc",
    precio: 1950000,
  },
];

export const PROMO_MARCAS: PromoMarca[] = ["Keller", "Motomel", "Zanella"];

/** Formatea un precio en pesos argentinos: 1630000 -> "$1.630.000" */
export const formatearPrecio = (precio: number) =>
  "$" + Math.round(precio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/** Logos de cada marca (los mismos de la franja de marcas del Home). */
export const PROMO_LOGOS: Record<PromoMarca, string> = {
  Keller: "/logos/keller.svg",
  Motomel: "/logos/motomel.svg",
  Zanella: "/logos/zanella.svg",
};
