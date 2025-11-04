"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string };

const STATS: Stat[] = [
  { label: "AÑOS EN EL NEA", value: 12, suffix: "+" },
  { label: "MOTOS VENDIDAS", value: 1800, suffix: "+" },
  { label: "CLIENTES FELICES", value: 1600, suffix: "+" },
  { label: "MODELOS EN STOCK", value: 48 },
];

function useCountUp(target: number, start: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const dur = 1200;
    const tick = (t: number) => {
      if (t0 === null) t0 = t;
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, start]);
  return n;
}

export function StatsBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="py-14 bg-[#004AAD] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center sm:text-left">
          {STATS.map((s) => {
            const n = useCountUp(s.value, visible);
            return (
              <div
                key={s.label}
                className="flex flex-col items-center sm:items-start"
              >
                {/* Número */}
                <div className="inline-flex items-baseline gap-1 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                    {n}
                  </span>
                  {s.suffix && (
                    <span className="text-3xl font-bold opacity-80 leading-none">
                      {s.suffix}
                    </span>
                  )}
                </div>

                {/* Etiqueta */}
                <div className="text-[12px] sm:text-sm tracking-widest uppercase font-semibold text-white/70">
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
