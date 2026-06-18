import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const items: Array<{ id?: string; label: string; href?: string }> = [
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Volunteering" },
  { id: "contact", label: "Contact" },
];
const resumeHref = "/Rajeevi-Madhireddy-Resume.pdf";

export default function Navbar({ visible }: { visible: boolean }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      let largestVisibleArea = 0;

      for (const it of items) {
        if (!it.id) continue;
        const el = document.getElementById(it.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(window.innerHeight, rect.bottom);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);

        if (visibleArea > largestVisibleArea) {
          largestVisibleArea = visibleArea;
          current = it.id;
        }
      }

      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const itemClass = (it: (typeof items)[number]) =>
    `relative shrink-0 rounded-full px-2.5 py-1.5 text-[clamp(0.62rem,0.72vw,0.76rem)] font-medium tracking-wide transition-colors ${
      it.id && active === it.id ? "text-background" : "text-foreground/70 hover:text-foreground"
    }`;

  const mobileItemClass = (it: (typeof items)[number]) =>
    `rounded-lg px-3 py-2.5 text-left font-display text-[clamp(1rem,5vw,1.18rem)] transition-colors ${
      it.id && active === it.id
        ? "bg-foreground text-background"
        : "text-foreground/70 hover:text-foreground"
    }`;

  const resumeClass =
    "relative shrink-0 rounded-full bg-foreground px-3.5 py-1.5 text-[clamp(0.62rem,0.72vw,0.76rem)] font-medium tracking-wide text-background transition-colors hover:bg-foreground/85";

  const mobileResumeClass =
    "rounded-lg bg-foreground px-3 py-2.5 text-left font-display text-[clamp(1rem,5vw,1.18rem)] text-background transition-colors hover:bg-foreground/85";

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 transition-all duration-700 max-w-[calc(100vw-1rem)] md:block ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex items-center gap-1 rounded-full border border-foreground/15 bg-background/70 px-2 py-2 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] overflow-x-auto no-scrollbar max-w-full">
          {/* <span className="px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
            RM
          </span> */}
          {/* <span className="mx-1 hidden h-4 w-px bg-foreground/15 sm:block" /> */}
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => it.id && go(it.id)}
              className={itemClass(it)}
              data-cursor="hover"
            >
              {active === it.id && <span className="absolute inset-0 rounded-full bg-foreground" />}
              <span className="relative">{it.label}</span>
            </button>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className={resumeClass}
            data-cursor="hover"
          >
            Resume
          </a>
        </div>
      </nav>

      <div
        className={`fixed right-4 top-4 z-50 transition-all duration-700 md:hidden ${
          visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation"
              className="grid h-11 w-11 place-items-center rounded-full border border-foreground/15 bg-background/75 text-foreground shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-colors hover:bg-background"
              data-cursor="hover"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[82vw] max-w-xs border-foreground/10 bg-background/95 p-6 backdrop-blur-xl"
          >
            <div className="mt-8 flex flex-col gap-2">
              {items.map((it) => (
                <SheetClose asChild key={it.id}>
                  <button
                    type="button"
                    onClick={() => it.id && go(it.id)}
                    className={mobileItemClass(it)}
                    data-cursor="hover"
                  >
                    {it.label}
                  </button>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className={mobileResumeClass}
                  data-cursor="hover"
                >
                  Resume
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
