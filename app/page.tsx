import type { Metadata } from "next";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import RevealOnScroll from "@/components/RevealOnScroll";
import InstrumentReveal from "@/components/InstrumentReveal";
import ClientHeroContour from "@/components/ClientHeroContour";

export const metadata: Metadata = {
  title: "There are no reliable charts for the strategic terrain of a growing business.",
};

// Real PRD capability names (research-lead idx4925 — locked)
const INSTRUMENTS = [
  { id: "01", name: "Strategic Intelligence",           desc: "Establishing what the actual problem is before any other survey work begins." },
  { id: "02", name: "Operational Intelligence",         desc: "Mapping how the business actually operates, not how it is described." },
  { id: "03", name: "Technology Intelligence",          desc: "Determining what the organisation can actually execute digitally before any recommendation is made." },
  { id: "04", name: "People & Culture Intelligence",    desc: "Surveying both the formal structure and the informal systems beneath it." },
  { id: "05", name: "Communication Intelligence",       desc: "Examining how the business presents itself externally and communicates internally." },
  { id: "06", name: "Data & Analytics Intelligence",    desc: "Establishing the quality and completeness of the evidence base that strategic decisions rest on." },
  { id: "07", name: "Market & Competitive Intelligence", desc: "Documenting the competitive landscape as it exists, not as leadership perceives it." },
  { id: "08", name: "Transformation Intelligence",      desc: "Ensuring the map produced by the preceding seven arms is followed through execution." },
];

// Phase method: Listen → Understand → Recommend → Deliver (idx4925 locked)
const PHASES = [
  {
    phase: "Listen",
    depthMark: "—40m",
    zone: "LISTEN",
    timeline: "W1–2",
    isAmber: false,
    desc: "We enter the terrain without a hypothesis. Discovery interviews, document review, and structured observation of how the business actually operates before any recommendation is formed.",
  },
  {
    phase: "Understand",
    depthMark: "—120m",
    zone: "UNDERSTAND",
    timeline: "W3–4",
    isAmber: false,
    desc: "With raw survey data gathered, we map the relationships between the presenting problem and its causes. Patterns emerge at this depth that are invisible from the surface.",
  },
  {
    phase: "Recommend",
    depthMark: "—260m",
    zone: "RECOMMEND",
    timeline: "W5–10",
    isAmber: true,  // amber contour — deepest analytical phase
    desc: "Recommendations grounded in the terrain we have mapped, not in frameworks imported from other engagements. Each identifies the leverage point, the evidence base, and the implementation dependencies.",
  },
  {
    phase: "Deliver",
    depthMark: "—400m",
    zone: "DELIVER",
    timeline: "W11+",
    isAmber: false,
    desc: "We remain engaged through execution — not to do the work for the organisation, but to ensure the map is being followed as the terrain changes.",
  },
];

type Dispatch = {
  id: string | number;
  title: string;
  terrain: string;
  depth: string;
  summary: string;
  slug: string;
  publishedAt?: string | null;
};

export default async function HomePage() {
  let dispatches: Dispatch[] = [];
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "dispatches",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 2,
    });
    dispatches = result.docs as Dispatch[];
  } catch {
    // CMS unavailable during cold start — show empty state
  }

  return (
    <>
      {/* ══════════════════════════════════════
          §1 — HERO
          Ground: parchment-100 / full viewport
          Layers: contour SVG (back) → content (front)
      ══════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          background: "var(--parchment-100)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: "var(--nav-height)",
        }}
      >
        {/* Contour SVG background — animated on load (client-only) */}
        <ClientHeroContour />

        {/* Content layer */}
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "var(--space-32)",
            paddingBottom: "var(--space-32)",
          }}
        >
          {/* Depth notation — top label */}
          <p
            className="depth-notation"
            style={{ marginBottom: "var(--space-8)", color: "var(--depth-blue-500)" }}
          >
            Survey Depth: Strategic Terrain
            <span style={{ marginLeft: "var(--space-6)", color: "var(--amber-500)" }}>
              —40m UNDERSTAND
            </span>
          </p>

          {/* Headline — max 10 words across 3 lines */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-hero)",
              fontWeight: 700,
              color: "var(--navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              maxWidth: "900px",
              marginBottom: "var(--space-6)",
            }}
          >
            There are no reliable charts
            <br />for the strategic terrain
            <br />of a growing business.
          </h1>

          {/* "We make them." — amber accent line */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-hero)",
              fontWeight: 700,
              color: "var(--amber-500)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-12)",
            }}
          >
            We make them.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "var(--space-8)", flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 500,
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
                color: "var(--navy-900)",
                textDecoration: "none",
                borderBottom: "2px solid var(--amber-500)",
                paddingBottom: "2px",
                transition: "color var(--dur-fast) var(--ease-survey-out)",
              }}
            >
              Commission a survey →
            </Link>
            <Link
              href="/insights"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 400,
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
                color: "var(--depth-blue-500)",
                textDecoration: "none",
                borderBottom: "1px solid var(--depth-blue-400)",
                paddingBottom: "2px",
                transition: "color var(--dur-fast) var(--ease-survey-out)",
              }}
            >
              View field dispatches
            </Link>
          </div>
        </div>
      </section>

      {/* Section separator — depth-blue contour, amber rule */}
      <div style={{ height: "1px", background: "var(--depth-blue-500)", opacity: 0.2 }} />

      {/* ══════════════════════════════════════
          §2 — FIELD NOTE (What We Map)
          Ground: parchment-100
          Layout: 7/5 col split (content / annotation)
      ══════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: "var(--parchment-100)" }}
      >
        <div className="container">
          {/* Amber + navy double rule — chart boundary mark */}
          <div style={{ height: "6px", background: "var(--amber-500)", marginBottom: "2px" }} />
          <div style={{ height: "1px", background: "var(--navy-900)", marginBottom: "var(--space-16)" }} />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--space-12)",
            }}
          >
            {/* 7-col content */}
            <div style={{ maxWidth: "760px" }}>
              <RevealOnScroll>
                {/* Pull quote */}
                <blockquote className="field-note" style={{ marginBottom: "var(--space-8)" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--type-lg)",
                      fontStyle: "italic",
                      color: "var(--navy-900)",
                      lineHeight: "var(--lh-body)",
                      maxWidth: "var(--max-prose)",
                    }}
                  >
                    The problem with solutions is knowing what the problem is.
                  </p>
                </blockquote>

                {/* Body copy — idx4925 locked */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    maxWidth: "var(--max-prose)",
                  }}
                >
                  Most organisations arrive at KRAKEN with a solution already in hand. A new system.
                  A rebrand. A campaign. Before we design anything, we survey.
                </p>
              </RevealOnScroll>
            </div>

            {/* 5-col annotation */}
            <RevealOnScroll delay={120} style={{ borderLeft: "1px solid var(--amber-500)", paddingLeft: "var(--space-6)" }}>
              <p className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
                Field Note
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-xs)",
                  fontWeight: 500,
                  letterSpacing: "var(--ls-label)",
                  textTransform: "uppercase",
                  color: "var(--depth-blue-500)",
                  lineHeight: 1.8,
                  marginBottom: "var(--space-4)",
                }}
              >
                Kraken Interactive<br />
                Precision strategic advisory.<br />
                Since 2010, Malaysia + SEA.
              </p>
              <p className="depth-notation" style={{ color: "var(--depth-blue-500)" }}>
                —120m OBSERVE
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          §3 — EIGHT ARMS (dark navy, full bleed)
          Ground: navy-900
          Headline: "Eight arms. / One system."
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "var(--navy-900)",
          paddingTop: "var(--space-32)",
          paddingBottom: "var(--space-32)",
        }}
      >
        <div className="container">
          {/* Section headline */}
          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-3xl)",
                fontWeight: 700,
                color: "var(--parchment-100)",
                lineHeight: "var(--lh-heading)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-4)",
              }}
            >
              Eight arms.
              <br />One system.
            </h2>
            {/* Echo contour line */}
            <div
              style={{
                height: "1px",
                background: "var(--depth-blue-500)",
                opacity: 0.2,
                marginBottom: "var(--space-16)",
              }}
            />
          </RevealOnScroll>

          {/* Instrument grid — 2 col × 4 rows */}
          <InstrumentReveal staggerCount={INSTRUMENTS.length}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "0",
            }}
          >
            {INSTRUMENTS.map((inst, i) => (
              <div
                key={inst.id}
                className="reveal-row"
                style={{
                  borderTop: `1px solid var(--navy-700)`,
                  borderRight: i % 2 === 0 ? "1px solid var(--navy-700)" : "none",
                  padding: "var(--space-8) var(--space-6)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {/* Contour depth mark */}
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", marginBottom: "var(--space-1)" }}>
                  <div style={{ width: "1px", height: "24px", background: inst.id === "01" ? "var(--amber-500)" : "var(--depth-blue-500)", opacity: 0.6 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-2xs)",
                      fontWeight: 600,
                      letterSpacing: "var(--ls-label)",
                      textTransform: "uppercase",
                      color: inst.id === "01" ? "var(--amber-500)" : "var(--depth-blue-400)",
                    }}
                  >
                    {inst.id}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--type-sm)",
                    fontWeight: 600,
                    color: inst.id === "01" ? "var(--amber-500)" : "var(--parchment-100)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {inst.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-sm)",
                    color: "var(--parchment-400)",
                    lineHeight: "var(--lh-body)",
                    opacity: 0.85,
                  }}
                >
                  {inst.desc}
                </p>
              </div>
            ))}
          </div>
          </InstrumentReveal>

          <RevealOnScroll style={{ marginTop: "var(--space-12)" }}>
            <Link
              href="/capabilities"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 400,
                letterSpacing: "var(--ls-caps)",
                textTransform: "uppercase",
                color: "var(--depth-blue-400)",
                textDecoration: "none",
                borderBottom: "1px solid var(--depth-blue-600)",
                paddingBottom: "2px",
              }}
            >
              The complete survey instruments →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ══════════════════════════════════════
          §4 — HOW A SURVEY WORKS (4 phases)
          Ground: parchment-200
          Depth marks animate in on scroll
      ══════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: "var(--parchment-200)" }}
      >
        <div className="container">
          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-2xl)",
                fontWeight: 700,
                color: "var(--navy-900)",
                lineHeight: "var(--lh-heading)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-16)",
              }}
            >
              How a survey works.
            </h2>
          </RevealOnScroll>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {PHASES.map((p, i) => (
              <RevealOnScroll key={p.phase} delay={i * 80}>
                {/* Phase separator line — amber for Recommend phase, depth-blue for others */}
                <div
                  style={{
                    height: "1px",
                    background: p.isAmber ? "var(--amber-500)" : "var(--depth-blue-500)",
                    opacity: p.isAmber ? 0.7 : 0.35,
                    marginBottom: "var(--space-6)",
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "160px 1fr auto",
                    gap: "var(--space-8)",
                    paddingBottom: "var(--space-12)",
                    alignItems: "start",
                  }}
                >
                  {/* Phase label + timeline */}
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-sm)",
                        fontWeight: 600,
                        color: p.isAmber ? "var(--amber-500)" : "var(--navy-900)",
                        letterSpacing: "var(--ls-caps)",
                        textTransform: "uppercase",
                        marginBottom: "var(--space-1)",
                      }}
                    >
                      {p.phase}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-xs)",
                        color: "var(--depth-blue-500)",
                        letterSpacing: "var(--ls-label)",
                      }}
                    >
                      {p.timeline}
                    </p>
                  </div>

                  {/* Phase description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--type-base)",
                      color: "var(--navy-700)",
                      lineHeight: "var(--lh-body)",
                      maxWidth: "var(--max-prose)",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Depth mark — right margin, slides in on scroll */}
                  <p
                    className="depth-mark is-visible"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-2xs)",
                      fontWeight: 600,
                      letterSpacing: "var(--ls-label)",
                      color: p.isAmber ? "var(--amber-500)" : "var(--depth-blue-500)",
                      textAlign: "right",
                      whiteSpace: "nowrap",
                      paddingTop: "2px",
                    }}
                  >
                    {p.depthMark}
                  </p>
                </div>
              </RevealOnScroll>
            ))}

            {/* Double amber rule — section close */}
            <div style={{ height: "6px", background: "var(--amber-500)" }} />
            <div style={{ height: "1px", background: "var(--amber-500)", marginTop: "2px" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          §5 — DISPATCHES FROM THE FIELD
          Ground: parchment-100
          Empty state when no published dispatches (idx4925)
      ══════════════════════════════════════ */}
      <section
        className="section"
        style={{ background: "var(--parchment-100)" }}
      >
        <div className="container">
          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-2xl)",
                fontWeight: 700,
                color: "var(--navy-900)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-12)",
              }}
            >
              Recent field dispatches.
            </h2>
          </RevealOnScroll>

          {dispatches.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "var(--space-6)",
              }}
            >
              {dispatches.map((d, i) => (
                <RevealOnScroll key={d.id} delay={i * 80}>
                  <Link href={`/insights/${d.slug}`} style={{ textDecoration: "none", display: "block" }}>
                    <article
                      style={{
                        background: "var(--parchment-300)",
                        border: "1px solid rgba(58,110,165,0.3)",
                        padding: "var(--space-8)",
                      }}
                    >
                      {/* Amber top rule */}
                      <div style={{ height: "1px", background: "var(--amber-500)", marginBottom: "var(--space-6)" }} />
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--type-2xs)",
                          fontWeight: 600,
                          letterSpacing: "var(--ls-label)",
                          textTransform: "uppercase",
                          color: "var(--depth-blue-500)",
                          marginBottom: "var(--space-3)",
                        }}
                      >
                        Survey Dispatch {String(i + 1).padStart(3, "0")}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--type-lg)",
                          fontWeight: 600,
                          color: "var(--navy-900)",
                          lineHeight: "var(--lh-heading)",
                          marginBottom: "var(--space-4)",
                        }}
                      >
                        {d.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--type-sm)",
                          color: "var(--navy-700)",
                          lineHeight: "var(--lh-body)",
                          marginBottom: "var(--space-6)",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {d.summary}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "var(--type-xs)",
                          fontWeight: 500,
                          letterSpacing: "var(--ls-caps)",
                          textTransform: "uppercase",
                          color: "var(--amber-500)",
                        }}
                      >
                        Read dispatch →
                      </p>
                    </article>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          ) : (
            /* Empty state — idx4925 Option a */
            <RevealOnScroll>
              <div
                style={{
                  borderLeft: "3px solid var(--amber-500)",
                  paddingLeft: "var(--space-8)",
                  maxWidth: "560px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  Dispatches from the field are published when the survey work produces findings worth
                  sharing. The first dispatch is in preparation.
                </p>
                <Link
                  href="/insights"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--type-sm)",
                    fontWeight: 400,
                    letterSpacing: "var(--ls-caps)",
                    textTransform: "uppercase",
                    color: "var(--depth-blue-500)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--depth-blue-400)",
                    paddingBottom: "2px",
                  }}
                >
                  Visit the Insights page →
                </Link>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════
          §6 — COMMISSION A SURVEY (CTA)
          Ground: navy-900, full bleed
      ══════════════════════════════════════ */}
      <section
        style={{
          background: "var(--navy-900)",
          paddingTop: "var(--space-32)",
          paddingBottom: "var(--space-32)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Echo contour SVG — 8% opacity, visual loop close */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        >
          <ellipse cx="720" cy="200" rx="600" ry="160" fill="none" stroke="#3A6EA5" strokeWidth="1" />
          <ellipse cx="720" cy="200" rx="480" ry="120" fill="none" stroke="#3A6EA5" strokeWidth="1" />
          <ellipse cx="720" cy="200" rx="360" ry="85"  fill="none" stroke="#C6862E" strokeWidth="1.5" />
          <ellipse cx="720" cy="200" rx="240" ry="55"  fill="none" stroke="#3A6EA5" strokeWidth="1" />
          <ellipse cx="720" cy="200" rx="120" ry="30"  fill="none" stroke="#3A6EA5" strokeWidth="1" />
        </svg>

        <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "720px" }}>
          <RevealOnScroll>
            {/* Section label */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-2xl)",
                fontWeight: 500,
                letterSpacing: "var(--ls-label)",
                textTransform: "uppercase",
                fontVariant: "small-caps",
                color: "var(--amber-500)",
                marginBottom: "var(--space-8)",
              }}
            >
              Commission a Survey
            </p>

            {/* Depth rule */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-4)",
                justifyContent: "center",
                marginBottom: "var(--space-10)",
              }}
            >
              <div style={{ height: "1px", width: "60px", background: "var(--depth-blue-600)" }} />
              <span className="depth-notation" style={{ color: "var(--depth-blue-400)" }}>—400m COMMISSION</span>
              <div style={{ height: "1px", width: "60px", background: "var(--depth-blue-600)" }} />
            </div>

            {/* Body copy */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-md)",
                color: "var(--parchment-100)",
                lineHeight: "var(--lh-body)",
                maxWidth: "60ch",
                margin: "0 auto var(--space-10)",
                opacity: 0.9,
              }}
            >
              If your organisation is at a strategic inflection point, a KRAKEN survey produces a
              terrain map no internal team can generate alone.
            </p>

            {/* Email — amber, italic, Tiempos */}
            <a
              href="mailto:hello@kraken.com.my"
              style={{
                display: "block",
                fontFamily: "var(--font-body)",
                fontStyle: "italic",
                fontSize: "var(--type-xl)",
                color: "var(--amber-500)",
                textDecoration: "none",
                borderBottom: "1px solid var(--amber-400)",
                paddingBottom: "2px",
                marginBottom: "var(--space-12)",
                transition: "color var(--dur-fast) var(--ease-survey-out)",
              }}
            >
              hello@kraken.com.my
            </a>

            {/* Ghost CTA button */}
            <Link href="/contact" className="btn-ghost">
              Commission a survey →
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
