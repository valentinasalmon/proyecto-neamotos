import type { MotoItem } from "@/features/catalog/data/motos";

export type UsedMotoItem = {
  id: string;
  marca: MotoItem["marca"];
  tipo: string;
  nombre: string;

  // Galería (varias fotos para la misma moto)
  imagenes: string[];

  // Detalles
  anio: string;
  km: string;
  precio: string;
  estado: string;
  documentacionOk: boolean;

  // Si es true, esta moto es un "placeholder" (tarjeta por estructura) y no
  // debe contarse como stock real.
  placeholder?: boolean;

  // Opcionales (para mantener consistencia con el catálogo)
  cilindrada?: string;
  potencia?: string;
  transmision?: string;
};

// Dataset inicial con 4 tarjetas "vacías".
// - Sin imágenes (imagenes: [])
// - Detalles en blanco (se verá "—" en la UI)
// Después, reemplazás estos items por tus datos reales (y ponés las fotos).
export const USED_MOTOS_DB_RAW: UsedMotoItem[] = [
  {
    id: "usadas-1",
    marca: "Zanella",
    tipo: "Usada",
    nombre: "Zanella ZT 150",
    // Si todavía no cargaste imágenes, la card igual se muestra (y avisará “Sin fotos cargadas”).
    imagenes: [
      "/motos%20usadas/zanellazt/1.jpeg",
      "/motos%20usadas/zanellazt/2.jpeg",
      "/motos%20usadas/zanellazt/3.jpeg",
    ],
    anio: "2023",
    km: "—",
    precio: "$1.800.000 ",
    estado: "muy bien",
    documentacionOk: true,
    placeholder: true,
  },
  {
    id: "usadas-2",
    marca: "Motomel",
    tipo: "Usada",
    nombre: "Moto por cargar 2",
    imagenes: [],
    anio: "",
    km: "",
    precio: "",
    estado: "",
    documentacionOk: false,
    placeholder: true,
  },
  {
    id: "usadas-3",
    marca: "Keller",
    tipo: "Usada",
    nombre: "Moto por cargar 3",
    imagenes: [],
    anio: "",
    km: "",
    precio: "",
    estado: "",
    documentacionOk: false,
    placeholder: true,
  },
  {
    id: "usadas-4",
    marca: "Bajaj",
    tipo: "Usada",
    nombre: "Moto por cargar 4",
    imagenes: [],
    anio: "",
    km: "",
    precio: "",
    estado: "",
    documentacionOk: false,
    placeholder: true,
  },
];

export const USED_MOTOS_DB = USED_MOTOS_DB_RAW;

export const getUsedMarcas = () =>
  Array.from(new Set(USED_MOTOS_DB.map((m) => m.marca))).sort();

export const getUsedTipos = (marca: string) => {
  const norm = (s: string) => s.trim().toLowerCase();
  const base = marca === "Todas" ? USED_MOTOS_DB : USED_MOTOS_DB.filter((m) => norm(m.marca) === norm(marca));
  return Array.from(new Set(base.map((m) => m.tipo))).sort();
};

