import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import InkReveal from "@/components/ui/ink-reveal";
import FlowArt, { FlowSection } from "@/components/flow-art";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import LenisProvider from "@/components/lenis-provider";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import { Contact } from "@/components/sections/resume-contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajeevi Madhireddy — Software Engineer & Frontend Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Rajeevi Madhireddy — software engineer, frontend specialist, hackathon winner. AI-powered products with care for craft.",
      },
      { property: "og:title", content: "Rajeevi Madhireddy — Software Engineer" },
      {
        property: "og:description",
        content:
          "An engineer's interactive digital story. AI products, hackathons, and quietly considered software.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Reveal state machine: ink -> dissolve -> done
  const [phase, setPhase] = useState<"ink" | "dissolve" | "done">("ink");
  // Lock scroll until reveal finishes
  useEffect(() => {
    document.documentElement.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  return (
    <div className="relative min-h-screen bg-background text-foreground grain">
      <Cursor />
      {phase === "done" && <LenisProvider />}
      <Navbar visible={phase === "done"} />

      {/* Reveal overlay */}
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-[90] transition-opacity duration-30 ${
            phase === "dissolve" ? "opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={() => phase === "dissolve" && setPhase("done")}
        >
          {/* Beneath the mask: a teaser hero glimpse (the actual hero lives below) */}
          <div className="absolute inset-0 grid place-items-center bg-background overflow-hidden">
            <div className="select-none px-6 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                Rajeevi Madhireddy
              </div>
              <div className="display-mega mt-4 text-[15vw] leading-[0.85] text-foreground md:text-[9vw]">
                HELLO<span className="text-[color:var(--accent-warm)]">.</span>
              </div>
              {/* <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                — Revealing —
              </div>
              </div> */}
            </div>
          </div>

          {/* Ink mask layer on top */}
          <InkReveal
            autoDisperse
            autoDuration={650}
            onComplete={() => setPhase("dissolve")}
            brushSize={280}
            stampStep={30}
            maxStamps={240}
            lifetime={360}
          />
        </div>
      )}

      {/* Main scroll story */}
      <FlowArt aria-label="Rajeevi Madhireddy story">
        <FlowSection id="hero" aria-label="Introduction">
          <Hero />
        </FlowSection>

        <FlowSection id="achievements" aria-label="Achievements">
          <Achievements />
        </FlowSection>

        <FlowSection
          id="projects"
          aria-label="Projects"
          className="overflow-visible bg-black"
          containerClassName="overflow-visible bg-black"
        >
          <Projects />
        </FlowSection>

        <FlowSection
          id="skills"
          aria-label="Skills"
          className="overflow-visible bg-[#daecea]"
          containerClassName="overflow-visible bg-[#daecea]"
          style={{ backgroundColor: "#daecea" }}
          containerStyle={{ backgroundColor: "#daecea" }}
        >
          <Skills />
        </FlowSection>

        <FlowSection id="contact" aria-label="Contact">
          <Contact />
        </FlowSection>
      </FlowArt>
    </div>
  );
}
