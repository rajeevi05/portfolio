import { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  url: string;
  description: string;
  images?: Array<string>;
};

const projects: Array<Project> = [
  {
    name: "Sahara",
    url: "https://code-rift-final1.vercel.app/",
    images: [
      "/sahara-images/1.png",
      "/sahara-images/2.png",
      "/sahara-images/3.png",
      "/sahara-images/4.png",
    ],
    description:
      "A safety-focused product experience for emergency response, designed around quick decisions and calm clarity.",
  },
  {
    name: "Crafter",
    url: "https://crafter-make.vercel.app/",
    description:
      "A polished builder experience that turns product intent into a crisp, reviewable web presence.",
  },
  {
    name: "CodeRift",
    url: "https://code-rift-final.vercel.app/",
    description:
      "A focused web experience with a clean interaction flow and a strong product-first presentation.",
  },
  {
    name: "Solaris",
    url: "https://solaris-view.vercel.app/",
    description:
      "A modern interface concept shaped around clarity, visual rhythm, and easy scanning.",
  },
  {
    name: "Monitored",
    url: "https://monitored-campus.vercel.app/",
    description:
      "A campus monitoring project presented as a live web preview inside the portfolio story.",
  },
];

function SaharaPreview({ images }: { images: Array<string> }) {
  return (
    <div className="absolute inset-0 flex min-h-0 items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(161,197,193,0.22),transparent_32%),linear-gradient(135deg,#070707,#171717_48%,#050505)] px-3 py-4 sm:px-5 lg:px-8">
      <div className="no-scrollbar flex w-full snap-x gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:pb-0 lg:gap-5">
        {images.map((image, index) => (
          <figure
            key={image}
            className={`relative aspect-[9/19.5] w-[min(48vw,11rem)] shrink-0 snap-center overflow-hidden rounded-[1.65rem] border border-white/18 bg-black p-1.5 shadow-[0_24px_70px_-38px_rgba(255,255,255,0.7)] sm:w-auto ${
              index % 2 === 0 ? "sm:translate-y-5" : "sm:-translate-y-5"
            }`}
          >
            <div className="absolute left-1/2 top-2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-black/70" />
            <img
              src={image}
              alt={`Sahara mobile screen ${index + 1}`}
              loading="lazy"
              className="h-full w-full rounded-[1.25rem] object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProject = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const nextIndex = Math.min(projects.length - 1, Math.max(0, index));
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    const progress = projects.length === 1 ? 0 : nextIndex / projects.length;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target = sectionTop + scrollableDistance * progress;

    setActiveIndex(nextIndex);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const updateActiveProject = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollableDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance));
      const nextIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));

      setActiveIndex(nextIndex);
    };

    updateActiveProject();
    window.addEventListener("scroll", updateActiveProject, { passive: true });
    window.addEventListener("resize", updateActiveProject);

    return () => {
      window.removeEventListener("scroll", updateActiveProject);
      window.removeEventListener("resize", updateActiveProject);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const unlockWheel = () => {
      wheelLockRef.current = false;
    };

    const handleWheel = (event: WheelEvent) => {
      const section = sectionRef.current;
      if (!section || Math.abs(event.deltaY) < 8) return;

      const rect = section.getBoundingClientRect();
      const isInsideProjectScroll = rect.top <= 8 && rect.bottom >= window.innerHeight - 8;
      if (!isInsideProjectScroll || wheelLockRef.current) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const currentIndex = activeIndexRef.current;
      const nextIndex = currentIndex + direction;
      const canMoveInsideProjects = nextIndex >= 0 && nextIndex < projects.length;

      if (!canMoveInsideProjects) return;

      event.preventDefault();
      wheelLockRef.current = true;
      scrollToProject(nextIndex);
      window.setTimeout(unlockWheel, 650);
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white"
      style={{ height: `${(projects.length + 1) * 100}dvh` }}
      aria-label="Projects"
    >
      <div
        ref={viewportRef}
        className="sticky bottom-0 top-0 grid h-dvh min-h-screen w-full grid-rows-[auto_minmax(0,1fr)_auto] overflow-hidden bg-black px-4 py-5 sm:px-6 sm:py-6 lg:grid-cols-[minmax(0,1fr)_clamp(12rem,18vw,16rem)] lg:grid-rows-1 lg:px-10 lg:py-10"
      >
        <div className="flex min-w-0 items-end justify-between gap-4 pb-4 lg:hidden">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Projects
            </div>
            <h2 className="mt-1 font-display text-3xl leading-none text-white">
              {projects[activeIndex].name}
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            {activeIndex + 1} / {projects.length}
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 items-center justify-center lg:pr-8">
          <div className="relative aspect-video w-full max-w-[42rem] min-h-0 overflow-hidden rounded-lg border border-white/15 bg-white shadow-[0_40px_120px_-50px_rgba(255,255,255,0.35)] lg:aspect-auto lg:h-[min(70dvh,720px)] lg:w-[min(74vw,calc(100vw-clamp(12rem,18vw,16rem)-5rem))] lg:max-w-none">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={project.name}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  {project.images ? (
                    <SaharaPreview images={project.images} />
                  ) : (
                    <iframe
                      src={project.url}
                      title={`${project.name} preview`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      className="h-full w-full border-0 bg-white"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <aside className="z-10 flex min-w-0 flex-col justify-center lg:justify-between lg:pb-[10vh]">
          <nav
            aria-label="Project navigation"
            className="flex min-w-0 items-center justify-center gap-3 pt-4 sm:gap-4 lg:flex-col lg:items-end lg:justify-center lg:gap-5 lg:pt-0"
          >
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => scrollToProject(index)}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`max-w-full truncate text-right font-display text-lg tracking-normal transition-all duration-300 sm:text-xl lg:text-2xl ${
                  index === activeIndex
                    ? "translate-x-0 text-white"
                    : "text-white/35 hover:text-white/75 lg:translate-x-2 lg:hover:translate-x-0"
                }`}
                data-cursor="hover"
              >
                {project.name}
              </button>
            ))}
          </nav>

          <div className="hidden min-w-0 lg:block">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              Project
            </div>
            <h2 className="mt-3 max-w-full break-words font-display text-4xl leading-none text-white">
              {projects[activeIndex].name}
            </h2>
            <p className="mt-5 max-w-[15rem] text-sm leading-relaxed text-white/68">
              {projects[activeIndex].description}
            </p>
          </div>
        </aside>

        <p className="pt-4 text-sm leading-relaxed text-white/68 sm:text-base lg:hidden">
          {projects[activeIndex].description}
        </p>
      </div>
    </section>
  );
}
