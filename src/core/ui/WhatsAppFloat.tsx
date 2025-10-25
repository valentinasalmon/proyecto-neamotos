"use client";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5493790000000?text=Hola!%20Quiero%20asesoramiento%20por%20una%20moto%20😊"
      className="fixed right-4 bottom-4 z-[60] flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg
                 hover:brightness-110 active:brightness-95 transition"
      style={{
        backgroundColor: "var(--brand-blue)",
        boxShadow: "0 20px 40px var(--brand-blue-glow)",
      }}
      aria-label="Hablar por WhatsApp"
    >
      <span className="inline-block w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
      <span>WhatsApp</span>
    </a>
  );
}
