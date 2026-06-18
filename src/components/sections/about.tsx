import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, ms = 1600) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / ms);
              const eased = 1 - Math.pow(1 - t, 3);
              setV(Math.round(target * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, ms]);
  return { v, ref };
}

function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { v, ref } = useCountUp(value);
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span ref={ref} className="display-mega text-[11vw] md:text-[4.5vw] leading-none">
          {v}
        </span>
        <span className="display-mega text-[5vw] md:text-[2vw] text-[color:var(--accent-warm)]">
          {suffix}
        </span>
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-28 sm:px-10 md:px-14">
      <div className="mb-12 flex items-end justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          (01) — About
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Hyderabad / IN
        </span>
      </div>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
        {/* portrait column */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-foreground/10 bg-[oklch(0.93_0.005_90)]">
            {/* Editorial typographic portrait */}
            <div className="absolute inset-0 grid place-items-center p-8">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  Engineer · Builder
                </div>
                <div className="display-mega mt-4 text-[14vw] md:text-[5.8vw] leading-[0.85]">
                  R<span className="text-[color:var(--accent-warm)]">.</span>M
                </div>
                <div className="mx-auto mt-8 h-px w-16 bg-foreground/40" />
                <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  est. 2023 · CVRCE
                </div>
              </div>
            </div>
            {/* decorative crosshair */}
            <svg
              className="absolute inset-0 h-full w-full opacity-[0.12]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.2" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.2" />
            </svg>
          </div>
        </div>

        {/* copy column */}
        <div className="md:col-span-7 md:pl-10">
          <h2 className="display-mega text-[7.5vw] md:text-[3.8vw] leading-[0.9]">
            I build software <br />
            that feels{" "}
            <em className="font-display italic text-[color:var(--accent-warm)]">considered</em>.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 text-sm leading-relaxed text-foreground/80 sm:text-base md:grid-cols-2">
            <p>
              I'm Rajeevi — a Computer Science undergraduate at CVR College of Engineering with a
              fixation on interfaces, intelligent systems, and the quiet craft of well-built
              software. I gravitate toward problems that sit at the intersection of design and
              engineering.
            </p>
            <p>
              I build AI-powered products, lead frontend at hackathons, and care about the details
              that most people scroll past — typography, motion, latency, and the way a product
              feels when you actually use it.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            <Stat value={8} suffix="+" label="Shipped Projects" />
            <Stat value={5} suffix="+" label="Hackathons" />
            <Stat value={20} suffix="+" label="Technologies" />
            <Stat value={2} suffix="yr" label="Engineering" />
          </div>
        </div>
      </div>
    </div>
  );
}
