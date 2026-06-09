import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime((t) => {
        let { h, m, s } = t;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { label: "horas", value: time.h },
        { label: "min", value: time.m },
        { label: "seg", value: time.s },
      ].map((b) => (
        <div key={b.label} className="flex flex-col items-center">
          <div className="min-w-[64px] rounded-xl bg-[#2F7D59] px-4 py-3 text-2xl font-bold text-white tabular-nums shadow-md">
            {pad(b.value)}
          </div>
          <span className="mt-1 text-xs uppercase tracking-wider text-[#2F7D59]/70">{b.label}</span>
        </div>
      ))}
    </div>
  );
}