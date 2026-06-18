import { useEffect, useRef, useState } from "react";

type Project = {
  name: string;
  url: string;
  description: string;
  images?: Array<string>;
  videoSrc?: string;
};

const projects: Array<Project> = [
  {
    name: "Sahara",
    url: "https://code-rift-final1.vercel.app/",
    videoSrc:
      "https://res.cloudinary.com/dyv7kwmeu/video/upload/WhatsApp_Video_2026-06-17_at_11.36.09_PM_icpnfk.mp4",
    description:
      "Sahara is a mobile application that focuses on solving safety concerns. It uses an ESP32 mesh network to connect to no network areas and has an automated sos call for contacts and other app users nearby.",
  },
  {
    name: "Crafter",
    url: "https://crafter-make.vercel.app/",
    description:
      "Crafter is an application that helps new entrepreneurs to market their product. It allows website creation, digital marketing and everything that could help a new business at one place",
  },
  {
    name: "CodeRift",
    url: "https://code-rift-final.vercel.app/",
    description:
      "It is a Stranger Things themed design intensive website I designed to host a college hackathon.",
  },
  {
    name: "Solaris",
    url: "https://solaris-view.vercel.app/",
    description:
      "This is a practice and test website I have created to explore new gen tools and tech innovations",
  },
  {
    name: "Monitored",
    url: "https://monitored-campus.vercel.app/",
    description:
      "Monitored is an anonymous posting site focused on giving a voice to a community of college students to express concerns and injustice. ",
  },
];

function SaharaPreview({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 2;
  }, []);

  return (
    <figure className="absolute inset-0 grid place-items-center overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        title="Sahara mobile app demo"
        autoPlay
        muted
        loop
        playsInline
        controls
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 2;
        }}
        className="aspect-[9/19.5] h-[min(80dvh,calc(100dvh-4rem))] max-h-full max-w-[min(92vw,24rem)] bg-black object-cover"
      />
    </figure>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const wheelLockRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

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
          <div
            className={`relative w-full min-h-0 overflow-hidden ${
              activeProject.videoSrc
                ? "h-[calc(100dvh-2rem)] max-h-[calc(100dvh-2rem)] bg-transparent"
                : "aspect-video max-w-[42rem] rounded-lg border border-white/15 bg-white shadow-[0_40px_120px_-50px_rgba(255,255,255,0.35)] lg:aspect-auto lg:h-[min(70dvh,720px)] lg:w-[min(74vw,calc(100vw-clamp(12rem,18vw,16rem)-5rem))] lg:max-w-none"
            }`}
          >
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
                  {project.videoSrc ? (
                    <SaharaPreview videoSrc={project.videoSrc} />
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
