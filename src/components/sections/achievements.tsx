const headline = {
  number: "01",
  big: "Winner",
  org: "J.P. Morgan Chase — Code for Good",
  copy: "Led frontend and UI/UX for a solution supporting the NGO PANS, building trust and communication in remote areas. Shipped end-to-end in 15 hours of hackathon floor time.",
};

// const more = [
//   { k: "8.85", l: "CGPA · CVRCE" },
//   { k: "30+", l: "Workshops supported as Tech Co-Lead" },
//   { k: "200+", l: "Festival attendees managed end-to-end" },
//   { k: "15hrs", l: "From idea to a winning prototype" },
// ];

const certs = [
  "Front-End Web Development — Meta (Coursera)",
  "Generative AI Workshop — IIT Hyderabad",
  "HackerRank — Java · Python · Problem Solving",
];

const linkedCerts = [
  {
    label: "Front-End Web Development - Meta (Coursera)",
    href: "https://drive.google.com/file/d/111eqwEeaWnbuYmjC-PE7gL5_Rst-MLBX/view?usp=sharing",
  },
  {
    label: "Generative AI Workshop - IIT Hyderabad",
    href: "https://drive.google.com/file/d/13Qfmdct2brovFvNhC0fAuQtZvZFYadxt/view",
  },
  {
    label: "HackerRank - Java Basic",
    href: "https://www.hackerrank.com/certificates/fb09938b0b42",
  },
  {
    label: "HackerRank - Python Basic",
    href: "https://www.hackerrank.com/certificates/609c9582971a",
  },
  {
    label: "HackerRank - Problem Solving",
    href: "https://www.hackerrank.com/certificates/c6c1764eb9c1",
  },
];

export default function Achievements() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-28 sm:px-10 md:px-14">
      <div className="mb-12 flex items-end justify-between">
        <div className="font-mono text-[25px] uppercase tracking-[0.28em] text-muted-foreground">
          <h1> Achievements</h1>
        </div>
        {/* <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Recognition & Numbers
        </span> */}
      </div>

      {/* Magazine hero */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          {/* <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
            № {headline.number} — Headline Award
          </div> */}
          <h2 className="display-mega mt-4 text-[16vw] md:text-[9vw] leading-[0.85]">
            {headline.big}
            <span className="text-[color:var(--accent-warm)]">.</span>
          </h2>
        </div>
        <div className="flex flex-col justify-end md:col-span-5">
          <div className="font-display text-lg md:text-xl tracking-tight">{headline.org}</div>
          <p className="mt-4 text-sm text-foreground/75 leading-relaxed md:text-base">
            {headline.copy}
          </p>
        </div>
      </div>

      <div className="my-16 h-px w-full bg-foreground/15" />

      {/* Stats strip */}
      {/* <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
        {more.map((m) => (
          <div key={m.l}>
            <div className="display-mega text-[11vw] md:text-[4.2vw] leading-none">{m.k}</div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground max-w-[14rem]">
              {m.l}
            </div>
          </div>
        ))}
      </div>

      <div className="my-16 h-px w-full bg-foreground/15" /> */}

      {/* Certs */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="font-mono text-[25px] uppercase tracking-[0.28em] text-muted-foreground">
            <h1> Certifications</h1>
          </div>
        </div>
        <ul className="md:col-span-8 divide-y divide-foreground/10 border-y border-foreground/10">
          {linkedCerts.map((c) => (
            <li key={c.href} className="py-5">
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4"
              >
                <span className="text-sm text-foreground/85 transition-colors hover:text-foreground md:text-base">
                  {c.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  Verified
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
