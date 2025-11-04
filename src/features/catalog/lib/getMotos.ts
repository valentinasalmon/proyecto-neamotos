import { getAllMotos } from "../data";
import type { MotoSpec } from "../data/types";

// Devuelve todas las motos ya normalizadas para la grilla/filtros
export function getMotos(): MotoSpec[] {
  return getAllMotos();
}
