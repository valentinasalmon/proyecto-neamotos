"use client";

import React from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  console.error(error);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-2xl font-bold text-white">
        Uy 😬 Algo salió mal.
      </h1>

      <p className="text-sm text-zinc-400 max-w-md">
        {`Tranquilo, no perdiste nada. `}
        Podés intentar recargar la sección.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-md bg-white px-4 py-2 text-black text-sm font-medium hover:bg-zinc-200 transition"
      >
        Reintentar
      </button>

      <p className="text-[11px] text-zinc-600 max-w-md">
        {error?.message || "Error inesperado"}
      </p>
    </main>
  );
}
