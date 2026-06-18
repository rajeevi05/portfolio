const items = [
  {
    period: "Jul 2024 — Present",
    role: "Documentation & Tech Co-Lead",
    org: "Cybernauts Student Club, CVRCE",
    bullets: [
      "Co-lead documentation and tech initiatives across workshops, hackathons, and tech events.",
      "Built automated templates and internal tools that supported 30+ workshops end-to-end.",
      "Integrated AI-assisted analytics into planning and post-event reporting workflows.",
    ],
  },
  {
    period: "Jul 2024",
    role: "Volunteer",
    org: "International Startup Festival",
    bullets: [
      "Facilitated 15+ roundtable discussions and investor connection sessions.",
      "Automated interaction logs and feedback capture to improve engagement.",
      "Owned end-to-end registration for 200+ attendees via automated check-in flow.",
    ],
  },
];

export default function Experience() {
  return (
    <div
      className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-start bg-[#daecea] px-6 pb-10 pt-20 text-black sm:px-10 sm:pb-12 sm:pt-24 md:px-14 md:pt-24"
      style={{ backgroundColor: "#daecea" }}
    >
      <div className="mb-12 flex items-end justify-between">
        <span className="font-mono text-[25px] uppercase tracking-[0.28em] text-black">
          Volunteering
        </span>
      </div>

      <div className="mt-20 relative">
        <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-black/20 md:left-[24%] md:block" />
        <ol className="space-y-12 md:space-y-16">
          {items.map((it, i) => (
            <li key={i} className="group grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-3 md:pr-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-black">
                  {it.period}
                </div>
              </div>
              <div className="relative md:col-span-9 md:pl-10">
                <span className="absolute -left-[5px] top-3 hidden h-2.5 w-2.5 rounded-full bg-black md:block" />
                <h3 className="font-display text-xl tracking-tight md:text-2xl">{it.role}</h3>
                <div className="mt-1 text-sm text-black">{it.org}</div>
                <ul className="mt-4 space-y-2 text-sm text-black md:text-base">
                  {it.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 h-px w-4 shrink-0 bg-black/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
