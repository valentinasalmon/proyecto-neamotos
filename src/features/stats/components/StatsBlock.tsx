"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; suffix?: string };

const STATS: Stat[] = [
  { label: "AÑOS EN EL NEA", value: 12, suffix: "+" },
  { label: "MOTOS VENDIDAS", value: 1800, suffix: "+" },
  { label: "CLIENTES FELICES", value: 1600, suffix: "+" },
  { label: "MODELOS EN STOCK", value: 48 }
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
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map((s) => {
            const n = useCountUp(s.value, visible);
            return (
              <div key={s.label} className="flex items-center gap-3">
                {/* Número + sufijo centrados en la línea base */}
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-display leading-none">{n}</span>
                  {s.suffix && (
                    <span className="text-brand text-2xl font-display leading-none">{s.suffix}</span>
                  )}
                </div>
                <div className="text-[11px] sm:text-xs tracking-widest text-gray-600 font-semibold uppercase">
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
