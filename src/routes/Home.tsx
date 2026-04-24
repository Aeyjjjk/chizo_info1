import heroBg from "../assets/hero-bg.jpg";
import jordanPortrait from "../assets/jordan-hero.jpg";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";

// export const Route = createFileRoute("/")({
//   component: Index,
//   head: () => ({
//     meta: [
//       { title: "Jordan — Remote support that scales with you" },
//       {
//         name: "description",
//         content:
//           "Jordan is a remote Social Media Manager, Virtual Assistant, and Customer Support Specialist helping online businesses stay organized, responsive, and visible.",
//       },
//       { property: "og:title", content: "Jordan — Remote support that scales with you" },
//       {
//         property: "og:description",
//         content:
//           "Remote Social Media Manager, Virtual Assistant, and Customer Support Specialist for online businesses.",
//       },
//     ],
//   }),
// });

const services = [
  {
    num: "01",
    title: "Social Media Manager",
    summary: "I keep your channels active, on-brand, and measurably growing.",
    bullets: [
      "Content calendar management",
      "Engagement & community replies",
      "Analytics reporting (weekly)",
    ],
  },
  {
    num: "02",
    title: "Virtual Assistant",
    summary: "I take the day-to-day off your plate so you can focus on the work that matters.",
    bullets: [
      "Email & calendar management",
      "File organization (Drive/Dropbox)",
      "Research & data entry",
    ],
  },
  {
    num: "03",
    title: "Customer Support",
    summary: "I turn customer questions into clear, fast, on-brand answers.",
    bullets: [
      "Email & chat ticket resolution (24h response)",
      "Refund/return processing",
      "FAQ documentation",
    ],
  },
];

const tools = ["Slack", "Trello", "Canva", "Zendesk", "Google Workspace"];

const gallery = [
  { src: gallery1, alt: "Jordan working at her home office desk", caption: "Home base · Austin", span: "tall" as const },
  { src: gallery2, alt: "Minimal flatlay of laptop, notebook and coffee", caption: "Daily setup", span: "wide" as const },
  { src: gallery3, alt: "Jordan smiling on a video call with headphones", caption: "Client check-in", span: "tall" as const },
  { src: gallery4, alt: "Hands typing on a laptop in a coffee shop", caption: "Working remote", span: "wide" as const },
];

export default function Home() {
    return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "var(--blue-night)" }}>
      {/* ───────── HERO ───────── */}
      <section className="relative isolate min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background image — Jordan portrait */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${jordanPortrait})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.55,
          }}
        />
        {/* Dark gradient veil — stronger on left for text legibility */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(12,20,41,0.95) 0%, rgba(12,20,41,0.75) 45%, rgba(12,20,41,0.55) 100%), linear-gradient(180deg, rgba(12,20,41,0.4) 0%, rgba(12,20,41,0.85) 100%)",
          }}
        />
        {/* Animated blobs */}
        <div className="bg-shapes z-[2]">
          <div className="blob blob-red" />
          <div className="blob blob-purple" />
          <div className="blob blob-blue" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 z-[3] grid-overlay opacity-60" />
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-[4]">
          <div className="float-shape float-ring" style={{ width: 220, height: 220, top: "12%", left: "8%" }} />
          <div className="float-shape float-square" style={{ width: 90, height: 90, top: "70%", left: "12%" }} />
          <div className="float-shape float-ring" style={{ width: 120, height: 120, top: "22%", right: "10%" }} />
          <div className="float-shape float-tri" style={{ top: "65%", right: "14%" }} />
        </div>

        {/* Top nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 fade-in-up">
            <span
              style={{
                width: 10, height: 10, borderRadius: 999,
                background: "var(--red)", boxShadow: "0 0 14px var(--red)",
                display: "inline-block",
              }}
            />
            <span className="text-sm tracking-[0.3em] font-semibold uppercase">Jordan</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wide fade-in-up delay-1" style={{ color: "rgba(245,245,247,0.75)" }}>
            <a href="#services" className="hover:text-[color:var(--red-glow)] transition-colors">Services</a>
            <a href="#stats" className="hover:text-[color:var(--red-glow)] transition-colors">Experience</a>
            <a href="#gallery" className="hover:text-[color:var(--red-glow)] transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-[color:var(--red-glow)] transition-colors">Contact</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex btn-ghost fade-in-up delay-2" style={{ padding: "10px 20px", fontSize: 13 }}>
            Get in touch
          </a>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl text-center">
          <div className="fade-in-up inline-flex items-center gap-3 px-4 py-2 mb-8" style={{
            border: "1px solid rgba(106, 78, 155, 0.45)",
            borderRadius: 999,
            background: "rgba(106, 78, 155, 0.10)",
            backdropFilter: "blur(8px)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--red-glow)" }} />
            <span className="text-xs tracking-[0.25em] uppercase" style={{ color: "var(--purple-glow)" }}>
              Available · Remote · Worldwide
            </span>
          </div>

          <h1 className="fade-in-up delay-1 text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.95]">
            <span className="text-gradient">Remote support</span>
            <br />
            <span style={{ color: "var(--grey-bg)" }}>
              that scales <em style={{ fontStyle: "italic", color: "var(--red-glow)" }}>with you</em>.
            </span>
          </h1>

          <p className="fade-in-up delay-2 mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(245,245,247,0.78)" }}>
            I'm Jordan — I help online businesses stay organized, responsive, and visible.
          </p>

          <div className="fade-in-up delay-3 mt-10 flex items-center justify-center gap-4 flex-wrap">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Book a 15-min chat <span aria-hidden>→</span>
            </a>
            <a href="#services" className="btn-ghost inline-flex">See what I do</a>
          </div>

          <div className="fade-in-up delay-4 mt-20 flex items-center justify-center gap-6 text-xs uppercase tracking-[0.25em]" style={{ color: "rgba(245,245,247,0.5)" }}>
            <span>Scroll</span>
            <span style={{
              width: 1, height: 40, background: "linear-gradient(180deg, var(--purple-glow), transparent)",
              display: "inline-block",
            }} />
          </div>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section id="services" className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="bg-shapes">
          <div className="blob blob-purple" style={{ top: "20%", left: "-200px", opacity: 0.3 }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-bar" />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--red-glow)" }}>
                01 · Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Three roles.<br />
              <span style={{ color: "var(--purple-glow)" }}>One reliable partner.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <article key={s.title} className="glass-card p-6 md:p-7" style={{ borderRadius: 6 }}>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs tracking-[0.3em]" style={{ color: "var(--purple-glow)" }}>
                    {s.num}
                  </span>
                  <span style={{
                    width: 8, height: 8, borderRadius: 999, background: "var(--red)",
                    boxShadow: "0 0 12px var(--red)",
                  }} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight" style={{ color: "var(--grey-bg)" }}>
                  {s.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(245,245,247,0.7)" }}>
                  {s.summary}
                </p>
                <hr className="my-6 border-0" style={{ borderTop: "1px solid rgba(245,245,247,0.10)" }} />
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,245,247,0.85)" }}>
                      <span aria-hidden style={{
                        display: "inline-block", width: 14, height: 1,
                        background: "var(--red)", marginTop: 10, flexShrink: 0,
                      }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── STATS ───────── */}
      <section id="stats" className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="bg-shapes">
          <div className="blob blob-red" style={{ top: "auto", bottom: "-200px", right: "-150px", left: "auto", opacity: 0.25 }} />
        </div>
        <div className="absolute inset-0 grid-overlay opacity-40" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-bar" />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--red-glow)" }}>
                02 · Experience
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Built for distributed teams.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <StatCard value="4+" label="Years fully remote" />
            <StatCard value="15+" label="Clients across 6 time zones" />
          </div>

          {/* Tools marquee */}
          <div className="glass-card overflow-hidden" style={{ borderRadius: 6, padding: 0, borderLeftColor: "var(--red)" }}>
            <div className="px-6 py-4 flex items-center gap-4" style={{ borderBottom: "1px solid rgba(245,245,247,0.08)" }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--red)" }} />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "rgba(245,245,247,0.6)" }}>
                Toolkit · Always-on
              </span>
            </div>
            <div className="py-6 overflow-hidden">
              <div className="marquee-track">
                {[...tools, ...tools, ...tools].map((t, i) => (
                  <span key={i} className="text-2xl md:text-4xl font-semibold tracking-tight whitespace-nowrap" style={{ color: i % 2 === 0 ? "var(--grey-bg)" : "var(--purple-glow)" }}>
                    {t} <span style={{ color: "var(--red)" }}>·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── GALLERY ───────── */}
      <section id="gallery" className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="bg-shapes">
          <div className="blob blob-purple" style={{ top: "10%", right: "-200px", left: "auto", opacity: 0.28 }} />
          <div className="blob blob-red" style={{ bottom: "-150px", left: "-100px", top: "auto", opacity: 0.22 }} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl flex items-end justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="accent-bar" />
                <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--red-glow)" }}>
                  03 · Gallery
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                A look at <span style={{ color: "var(--purple-glow)" }}>the day-to-day</span>.
              </h2>
            </div>
            <p className="text-sm md:text-base max-w-sm" style={{ color: "rgba(245,245,247,0.65)" }}>
              Workspaces, client calls, and quiet moments — captured between deadlines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4 md:gap-5">
            {gallery.map((g, i) => (
              <figure
                key={i}
                className={`gallery-tile relative overflow-hidden ${
                  g.span === "tall" ? "row-span-2" : "col-span-2"
                }`}
                style={{
                  borderRadius: 6,
                  border: "1px solid rgba(245,245,247,0.10)",
                  boxShadow: "var(--shadow-elevated)",
                }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,20,41,0) 40%, rgba(12,20,41,0.85) 100%)",
                  }}
                />
                <figcaption
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
                >
                  <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--grey-bg)" }}>
                    {g.caption}
                  </span>
                  <span className="text-[10px] tracking-[0.3em]" style={{ color: "var(--purple-glow)" }}>
                    0{i + 1}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CONTACT ───────── */}
      <section id="contact" className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="bg-shapes">
          <div className="blob blob-purple" style={{ top: "30%", left: "30%", opacity: 0.35 }} />
          <div className="blob blob-red" style={{ bottom: "-100px", left: "10%", top: "auto", opacity: 0.3 }} />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="accent-bar" />
              <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--red-glow)" }}>
                04 · About & Contact
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Let's build something <span style={{ color: "var(--red-glow)" }}>calm</span>.
            </h2>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: "rgba(245,245,247,0.85)" }}>
            Based in Austin, TX (remote only). Previously supported e-commerce, creators, and SaaS startups. Always asynchronous-friendly.
          </p>

          <div className="glass-card mt-12 p-8 md:p-10" style={{ borderRadius: 8, borderLeftColor: "var(--red)" }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: "var(--purple-glow)" }}>
                  Email
                </p>
                <a
                  href="mailto:virtualjordan@emailplace.com"
                  className="text-2xl md:text-3xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
                  style={{ color: "var(--grey-bg)" }}
                >
                  virtualjordan@emailplace.com
                </a>
              </div>
              <a
                href="https://calendly.com/"
                className="btn-primary inline-flex items-center gap-2 whitespace-nowrap"
              >
                Book a 15-min chat <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between text-xs uppercase tracking-[0.3em]" style={{ color: "rgba(245,245,247,0.4)" }}>
            <span>© Jordan · Remote</span>
            <span className="flex items-center gap-2">
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--red)" }} />
              Available for new work
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-8 md:p-10" style={{ borderRadius: 6 }}>
      <div
        className="text-7xl md:text-8xl font-semibold tracking-tight"
        style={{
          background: "linear-gradient(135deg, var(--grey-bg), var(--red-glow))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          letterSpacing: "-0.04em",
        }}
      >
        {value}
      </div>
      <hr className="my-5 border-0" style={{ borderTop: "1px solid rgba(245,245,247,0.10)" }} />
      <p className="text-base md:text-lg" style={{ color: "rgba(245,245,247,0.75)" }}>
        {label}
      </p>
    </div>
  );
}
