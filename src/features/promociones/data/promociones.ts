// src/features/promociones/data/promociones.ts
// Promos de contado por tiempo limitado (lista de precios del 27/10/2026).
// Para cambiar o quitar una promo, editá este listado.

export type PromoMarca = "Keller" | "Motomel" | "Zanella";

export type PromoItem = {
  id: string;
  marca: PromoMarca;
  nombre: string; // nombre que se muestra en la tarjeta
  precio: number; // precio de contado en pesos
};

export const PROMOS: PromoItem[] = [
  // === Keller ===
  {
    id: "keller-crono-110-base",
    marca: "Keller",
    nombre: "CRONO 110 BASE",
    precio: 1630000,
  },
  {
    id: "keller-crono-110-full",
    marca: "Keller",
    nombre: "CRONO 110 FULL",
    precio: 1830000,
  },
  {
    id: "keller-crono-125-tuning",
    marca: "Keller",
    nombre: "CRONO 125 TUNING",
    precio: 1860000,
  },
  {
    id: "keller-stratus-150-full",
    marca: "Keller",
    nombre: "STRATUS 150 FULL",
    precio: 2340000,
  },
  {
    id: "keller-miracle-150",
    marca: "Keller",
    nombre: "MIRACLE 150",
    precio: 2720000,
  },

  // === Motomel ===
  {
    id: "motomel-skua-125",
    marca: "Motomel",
    nombre: "SKUA 125",
    precio: 2590000,
  },
  {
    id: "motomel-skua-250",
    marca: "Motomel",
    nombre: "SKUA 250",
    precio: 3650000,
  },
  {
    id: "motomel-blitz-110-automatica",
    marca: "Motomel",
    nombre: "BLITZ 110 AUTOMÁTICA",
    precio: 1680000,
  },

  // === Zanella ===
  {
    id: "zanella-zb-110-z3-base",
    marca: "Zanella",
    nombre: "ZB 110 Z3 BASE",
    precio: 1650000,
  },
  {
    id: "zanella-zb-110-z3-full",
    marca: "Zanella",
    nombre: "ZB 110 Z3 FULL",
    precio: 1950000,
  },
];

export const PROMO_MARCAS: PromoMarca[] = ["Keller", "Motomel", "Zanella"];

/** Formatea un precio en pesos argentinos: 1630000 -> "$1.630.000" */
export const formatearPrecio = (precio: number) =>
  "$" + Math.round(precio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
