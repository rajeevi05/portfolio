import { createFileRoute } from "@tanstack/react-router";
import FlowArt, { FlowSection } from "@/components/flow-art";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Cursor from "@/components/cursor";
import LenisProvider from "@/components/lenis-provider";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Achievements from "@/components/sections/achievements";
import { Contact } from "@/components/sections/resume-contact";

const socialImage = "https://rajeevi.vercel.app/social-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rajeevi Madhireddy | Frontend Developer Portfolio" },
      {
        name: "description",
        content:
          "Explore Rajeevi Madhireddy's frontend developer portfolio, featuring AI-powered products, hackathon projects, interactive web experiences, skills, achievements, and resume.",
      },
      { property: "og:title", content: "Rajeevi Madhireddy | Frontend Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Rajeevi Madhireddy's frontend developer portfolio, featuring AI-powered products, hackathon projects, interactive web experiences, skills, achievements, and resume.",
      },
      { property: "og:image", content: socialImage },
      { property: "og:image:secure_url", content: socialImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Rajeevi Madhireddy portfolio hero image" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: "Rajeevi Madhireddy portfolio hero image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground grain">
      <Cursor />
      <LenisProvider />
      <Navbar visible />

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


