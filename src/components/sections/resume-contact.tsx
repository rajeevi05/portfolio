import { Download, FileText, ArrowUpRight, Mail, Linkedin, Github, Code2 } from "lucide-react";

export default function ResumeContact() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 py-28 sm:px-10 md:px-14">
      {/* Resume */}
      <section>
        <div className="mb-12 flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            (06) — Resume
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            PDF · 2025
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="display-mega text-[8vw] md:text-[4.2vw] leading-[0.9]">
              The whole story, <br /> on one page.
            </h2>
            <p className="mt-6 max-w-xl text-sm text-foreground/75 leading-relaxed md:text-base">
              Education, experience, projects, and the long tail of things I didn't fit on this
              site. Take it with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/Rajeevi-Madhireddy-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                <FileText className="h-4 w-4" /> View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="/Rajeevi-Madhireddy-Resume.pdf"
                download
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-foreground/15 bg-[oklch(0.98_0.003_90)] shadow-[0_30px_80px_-50px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1 hover:rotate-[-1deg]">
              <div className="absolute inset-0 p-8">
                <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  Resume · 2025
                </div>
                <div className="mt-6 font-display text-xl tracking-tight leading-tight">
                  Rajeevi <br /> Madhireddy
                </div>
                <div className="mt-6 space-y-2">
                  {["Education", "Projects", "Experience", "Achievements", "Skills"].map((l, i) => (
                    <div key={l} className="flex items-center gap-3">
                      <span className="font-mono text-[9px] text-muted-foreground w-6">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-foreground/20" />
                      <span className="text-xs text-foreground/70">{l}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-8 bottom-8 space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-px w-full bg-foreground/10"
                      style={{ width: `${50 + Math.random() * 50}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/5 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "rajeevimadhireddy@gmail.com",
      href: "mailto:rajeevimadhireddy@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/rajeevi-madhireddy",
      href: "https://www.linkedin.com/in/rajeevi-madhireddy-064a292a5/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rajeevi05",
      href: "https://github.com/rajeevi05",
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/Rajeevi_Madhireddy",
      href: "https://leetcode.com/u/Rajeevi_Madhireddy",
    },
  ];

  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col justify-between px-6 py-28 sm:px-10 md:px-14">
      <div>
        {/* <div className="mb-10 flex items-end justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Open to roles · Internships
          </span>
        </div> */}

        <h2 className="display-mega text-[9vw] md:text-[6vw] leading-[0.88] max-w-[18ch]">
          Let's build <br />
          something{" "}
          <em className="font-display italic text-[color:var(--accent-warm)]">meaningful</em>.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm text-foreground/75 leading-relaxed md:text-base">
              I'm always up for thoughtful conversations about engineering, AI, design, or a problem
              you're trying to solve. The fastest way to reach me is email.
            </p>
            <a
              href="mailto:rajeevimadhireddy@gmail.com"
              data-cursor="hover"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send an email
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background/20 transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/Rajeevi-Madhireddy-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <FileText className="h-4 w-4" /> View Resume
              </a>
              <a
                href="/Rajeevi-Madhireddy-Resume.pdf"
                download
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:border-foreground hover:text-foreground"
              >
                <Download className="h-4 w-4" /> Download PDF
              </a>
            </div>
          </div>

          <ul className="md:col-span-7 mt-12 md:mt-0 divide-y divide-foreground/10 border-y border-foreground/10">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="group flex items-center justify-between gap-3 py-5 transition-colors hover:text-[color:var(--accent-warm)]"
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <l.icon className="h-5 w-5 shrink-0 opacity-60 group-hover:opacity-100" />
                    <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground w-20 shrink-0">
                      {l.label}
                    </span>
                    <span className="font-display text-sm tracking-tight sm:text-lg md:text-xl truncate">
                      {l.value}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
