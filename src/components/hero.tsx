import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const fmt = d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(fmt);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white font-sans">
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-1.5 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] object-cover sm:inset-2 sm:h-[calc(100%-1rem)] sm:w-[calc(100%-1rem)]"
      />
      {/* Top meta row */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 px-5 pt-24 sm:px-10 sm:pt-28 md:px-14">
        <div className="shrink-0 text-[9px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[10px] sm:tracking-[0.28em]"></div>
        <div className="min-w-0 text-right"></div>
      </div>

      {/* Massive name */}
      <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-center sm:px-8 md:bottom-0 md:left-0 md:top-auto md:translate-x-0 md:translate-y-0 md:px-14 md:pb-6 md:text-left lg:pb-4">
        <h1 className="mx-auto max-w-full translate-y-2 select-none font-display font-semibold tracking-normal text-white drop-shadow-[0_18px_28px_rgba(0,0,0,0.52)] md:mx-0 md:translate-y-1">
          <span className="block overflow-hidden">
            <span className="block text-[13vw] leading-[0.9] sm:text-[11.5vw] md:text-[10.8vw]">
              RAJEEVI
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-[13vw] leading-[0.9] sm:text-[11.5vw] md:text-[10.8vw]">
              MADHIREDDY
            </span>
          </span>
        </h1>

        {/* footer row */}
        <div className="mt-6 sm:mt-10 flex flex-wrap items-end justify-between gap-4 sm:gap-6">
          <div className="flex min-w-0 items-center gap-3">
            {/* <span className="scroll-cue inline-flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-foreground/30">
              <ArrowDown className="h-3.5 w-3.5" />
            </span> */}
            {/* <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-muted-foreground">
              Scroll to explore
            </span> */}
          </div>
          <div className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[10px] sm:tracking-[0.28em]">
            {/* <span className="mr-3">001 / 007</span> */}
            {/* <span className="hidden sm:inline">CSE · CVR · 2023–Present</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
