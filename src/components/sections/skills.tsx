import { useState } from "react";

const categories = [
  { name: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C"] },
  { name: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind", "shadcn/ui", "Radix"] },
  { name: "Backend", items: ["Node.js", "Express", "Firebase", "Firestore", "REST"] },
  {
    name: "AI / ML",
    items: ["Google Gemini", "Vertex AI", "AWS Bedrock", "Multimodal AI", "Prompt Eng."],
  },
  { name: "Cloud", items: ["AWS (EC2, S3)", "GCP", "Vercel"] },
  { name: "DevOps", items: ["Docker", "Kubernetes", "Git", "CI/CD"] },
  { name: "Hardware / IoT", items: ["ESP32", "Mesh Networking", "Geolocation", "Sensors"] },
  { name: "Foundations", items: ["DSA", "OOP", "DBMS", "Networking", "OS"] },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-16 sm:px-10 md:px-14">
      <h2 className="display-mega max-w-5xl text-[7vw] leading-[0.9] md:text-[3.8vw]">
        The tools <br></br>I worked with.
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-x-8 md:grid-cols-12">
        <ul className="divide-y divide-foreground/10 border-y border-foreground/10 md:col-span-7">
          {categories.map((c) => (
            <li
              key={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              className="group flex cursor-default items-center justify-between py-3.5 md:py-4"
              data-cursor="hover"
            >
              <span className="font-display text-xl tracking-tight transition-all duration-500 group-hover:translate-x-3 group-hover:text-[color:var(--accent-warm)] sm:text-2xl md:text-3xl">
                {c.name}
              </span>
              <span className="shrink-0 pl-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                {String(c.items.length).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 md:col-span-5 md:mt-0 md:pl-10">
          <div className="min-h-[200px] rounded-2xl border border-foreground/10 bg-[oklch(0.97_0.005_90)] p-6 sm:min-h-[240px] md:sticky md:top-24">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              {hovered ? "Stack" : "Hover a discipline"}
            </div>
            <div className="mt-3 font-display text-xl tracking-tight">
              {hovered ?? "Everything I build with."}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {(hovered
                ? (categories.find((c) => c.name === hovered)?.items ?? [])
                : categories.flatMap((c) => c.items).slice(0, 14)
              ).map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-foreground/15 bg-background px-3 py-1.5 text-xs text-foreground/80 transition-colors hover:border-foreground hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
