export type Moto = {
  id: string;
  modelo: string;
  marca: string;
  tipo: "Sport" | "Naked" | "Adventure" | "Touring";
  anio: number;
  cilindradaCc: number;
  potenciaHp: number;
  precioUsd: number;
  imagen: string;

  // grilla de especificaciones
  
  engineType: string;    // e.g. "4-Stroke Cylinder"
  boreStroke: string;    // e.g. "80mm / 49.7mm"
};
