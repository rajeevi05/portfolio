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
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 py-28 sm:px-10 md:px-14">
   

      <h2 className="display-mega text-[8vw] md:text-[4.6vw] leading-[0.9] max-w-5xl">
        The tools <br /> I reach for.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-x-8 md:grid-cols-12">
        <ul className="md:col-span-7 divide-y divide-foreground/10 border-y border-foreground/10">
          {categories.map((c) => (
            <li
              key={c.name}
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center justify-between py-5 md:py-7 cursor-default"
              data-cursor="hover"
            >
              <span className="font-display text-xl tracking-tight sm:text-2xl md:text-4xl transition-all duration-500 group-hover:translate-x-3 group-hover:text-[color:var(--accent-warm)]">
                {c.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground shrink-0 pl-3">
                {String(c.items.length).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:col-span-5 md:mt-0 md:pl-10">
          <div className="md:sticky md:top-32 rounded-2xl border border-foreground/10 bg-[oklch(0.97_0.005_90)] p-6 sm:p-8 min-h-[220px] sm:min-h-[280px]">
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
