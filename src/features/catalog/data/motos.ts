// src/features/catalog/data/motos.ts

export type MotoVisual = {
  id: string;
  marca: string;        // "Zanella", "Motomel", etc
  tipo: string;         // "Urbana", "Scooter", "On/Off"
  nombre: string;       // "Zontes RR 703"
  cilindrada?: string;  // "700cc"
  transmision?: string; // "Manual 6 vel" / "Automática"
  potencia?: string;    // opcional "20hp"
  img: string;          // /public/motos/...
  destacada?: boolean;
};

export const MOTO_DB: MotoVisual[] = [
  {
    id: "zontes-rr703",
    marca: "Zanella",
    tipo: "Urbana",
    nombre: "Zontes RR 703",
    cilindrada: "700cc",
    transmision: "Manual 6 vel",
    potencia: "73hp", // si no la tenés, podés borrarlo
    img: "/motos/zontes-rr703.png",
    destacada: true,
  },
  {
    id: "fz-25-abs",
    marca: "Bajaj",
    tipo: "Urbana",
    nombre: "Yamaha FZ 25 ABS",
    cilindrada: "250cc",
    transmision: "Manual 5 vel",
    potencia: "20hp",
    img: "/motos/yamaha-fz25.png",
    destacada: true,
  },
  {
    id: "xmax-300",
    marca: "Keller",
    tipo: "Scooter",
    nombre: "Yamaha XMAX 300",
    cilindrada: "300cc",
    transmision: "Automática",
    potencia: "27hp",
    img: "/motos/xmax-300.png",
    destacada: true,
  },
  {
    id: "kove-525x",
    marca: "Corven",
    tipo: "On/Off",
    nombre: "Kove 525 X",
    cilindrada: "525cc",
    transmision: "Manual 6 vel",
    potencia: "50hp",
    img: "/motos/kove-525x.png",
    destacada: false,
  },
];
