import { useQuery } from "@tanstack/react-query";
import type { Moto } from "../types";

export function useMotos() {
  return useQuery<Moto[]>({
    queryKey: ["motos"],
    queryFn: async () => {
      const res = await fetch("/api/motos", { cache: "no-store" });
      if (!res.ok) throw new Error("Error al obtener motos");
      return res.json();
    }
  });
}
