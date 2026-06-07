import type { Metadata } from "next";
import Link from "next/link";
import { getPayloadClient } from "@/lib/payload";
import ContourReveal from "@/components/ContourReveal";

export const metadata: Metadata = {
  title: "There are no reliable charts for the strategic terrain of a growing business.",
};

const INSTRUMENTS = [
  { id: "01", name: "Strategic Diagnosis",          desc: "Establishing what the actual problem is before any other survey work begins." },
  { id: "02", name: "Competitive Terrain Mapping",   desc: "Documenting the competitive landscape as it exists, not as leadership perceives it." },
  { id: "03", name: "Organisational Diagnostics",    desc: "Mapping internal terrain: structure, decision patterns, and the informal systems that govern actual operations." },
  { id: "04", name: "Market Positioning Analysis",   desc: "Establishing the gap between how the organisation presents itself and how it is understood." },
  { id: "05", name: "Digital Intelligence Assessment", desc: "Determining what the organisation can actually execute digitally before any technology recommendation is made." },
  { id: "06", name: "Operational Analysis",          desc: "Mapping the processes that convert inputs to outputs, and the friction points that compound over time." },
  { id: "07", name: "Growth Architecture",           desc: "Designing the strategy: where the leverage points are, which opportunities are genuinely available." },
  { id: "08", name: "Delivery Alignment",            desc: "Remaining engaged through execution to ensure the map is being followed as the terrain changes." },
];

const PHASES = [
  { num: "01", phase: "Listen",     depth: "Surface observation", timeline: "W1–2",   desc: "We enter the terrain without a hypothesis. Discovery interviews, document review, and structured observation of how the business actually operates." },
  { num: "02", phase: "Understand", depth: "Subsurface analysis", timeline: "W3–4",   desc: "With raw survey data gathered, we map the relationships between the presenting problem and its causes. Patterns emerge at this depth that are invisible from the surface." },
  { num: "03", phase: "Recommend",  depth: "Bedrock insight",     timeline: "W5–10",  desc: "Recommendations grounded in the terrain we have mapped, not in frameworks imported from other engagements. Each identifies the leverage point, the evidence base, and the implementation dependencies." },
  { num: "04", phase: "Deliver",    depth: "Surface transformation", timeline: "W11+", desc: "We remain engaged through execution — not to do the work for the organisation, but to ensure the map is being followed as the terrain changes." },
];

export default async function HomePage() {
  // Fetch latest 2 dispatches from Payload
  let dispatches: { id: string | number; title: string; terrain: string; depth: string; summary: string; slug: string; publishedAt?: string | null }[] = [];
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "dispatches",
      where: { status: { equals: "published" } },
      sort: "-publishedAt",
      limit: 2,
    });
    dispatches = result.docs as typeof dispatches;
  } catch {
    // CMS unavailable during cold start — show empty state
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="section" style={{ background: "var(--color-parchment-100)" }}>
        <div className="container">
          <div className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
            Survey Depth: Strategic Terrain
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-hero)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              maxWidth: "880px",
              marginBottom: "var(--space-4)",
            }}
          >
            There are no reliable charts
            <br />for the strategic terrain
            <br />of a growing business.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-subhead)",
              color: "var(--color-navy-700)",
              lineHeight: "var(--lh-body)",
              marginBottom: "var(--space-6)",
            }}
          >
            We make them.
          </p>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 600,
                color: "var(--color-parchment-100)",
                background: "var(--color-navy-900)",
                padding: "12px 24px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "background var(--dur-fast)",
              }}
            >
              Commission a survey
            </Link>
            <Link
              href="/insights"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 500,
                color: "var(--color-navy-700)",
                background: "transparent",
                border: "1px solid var(--color-parchment-300)",
                padding: "12px 24px",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
                transition: "border-color var(--dur-fast)",
              }}
            >
              View field dispatches
            </Link>
          </div>
        </div>

        {/* Terrain diagram placeholder — Mira will replace with contour SVG */}
        <ContourReveal />
      </section>

      {/* ── WHAT WE MAP ── */}
      <section className="section" style={{ background: "var(--color-parchment-200)", borderTop: "1px solid var(--color-parchment-300)", borderBottom: "1px solid var(--color-parchment-300)" }}>
        <div className="container">
          <div
            className="field-note"
            style={{ padding: "var(--space-4)", marginBottom: "var(--space-8)" }}
          >
            <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>
              Field Note / Kraken Interactive
            </p>
            <blockquote
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-subhead)",
                fontStyle: "italic",
                color: "var(--color-navy-800)",
                lineHeight: "var(--lh-body)",
                marginBottom: "var(--space-3)",
              }}
            >
              &ldquo;The problem with solutions is knowing what the problem is.&rdquo;
            </blockquote>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
              Most firms arrive at the presenting problem and begin designing solutions immediately.
              The presenting problem is a description of discomfort. The actual problem lives elsewhere in the terrain.
              We built a different discipline: observe before recommending, diagnose before prescribing.
            </p>
          </div>
        </div>
      </section>

      {/* ── 8 INSTRUMENTS ── */}
      <section className="section">
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-heading)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-8)",
            }}
          >
            Eight instruments.
            <br />One complete survey.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "var(--space-4)",
            }}
          >
            {INSTRUMENTS.map((inst) => (
              <div
                key={inst.id}
                style={{
                  borderTop: "1px solid var(--color-parchment-300)",
                  paddingTop: "var(--space-3)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-1)",
                }}
              >
                <span className="depth-notation">{inst.id}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--type-body)",
                    fontWeight: 600,
                    color: "var(--color-navy-900)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {inst.name}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                  {inst.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link
              href="/capabilities"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                color: "var(--color-navy-600)",
                letterSpacing: "0.04em",
              }}
            >
              The complete survey instruments →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW A SURVEY WORKS ── */}
      <section className="section" style={{ background: "var(--color-parchment-200)", borderTop: "1px solid var(--color-parchment-300)" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-heading)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-8)",
            }}
          >
            How a survey works.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            {PHASES.map((p) => (
              <div
                key={p.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "var(--space-4)",
                  paddingBottom: "var(--space-4)",
                  borderBottom: "1px solid var(--color-parchment-300)",
                  alignItems: "start",
                }}
              >
                <div>
                  <span className="depth-notation" style={{ display: "block" }}>{p.num}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "var(--type-body)",
                      color: "var(--color-navy-900)",
                    }}
                  >
                    {p.phase}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--type-xs)",
                      color: "var(--color-navy-400)",
                      marginTop: "4px",
                    }}
                  >
                    {p.timeline}
                  </span>
                </div>
                <div>
                  <p className="depth-notation" style={{ marginBottom: "6px" }}>{p.depth}</p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT DISPATCHES ── */}
      {dispatches.length > 0 && (
        <section className="section">
          <div className="container">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-heading)",
                fontWeight: 700,
                color: "var(--color-navy-900)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-6)",
              }}
            >
              Recent field dispatches.
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-4)" }}>
              {dispatches.map((d) => (
                <Link
                  key={d.id}
                  href={`/insights/${d.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <article
                    style={{
                      border: "1px solid var(--color-parchment-300)",
                      borderRadius: "var(--radius-md)",
                      padding: "var(--space-4)",
                      background: "var(--color-parchment-100)",
                      transition: "border-color var(--dur-fast)",
                    }}
                  >
                    <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>
                      Terrain: {d.terrain}
                    </p>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-body)",
                        fontWeight: 600,
                        color: "var(--color-navy-900)",
                        marginBottom: "var(--space-2)",
                        lineHeight: "var(--lh-heading)",
                      }}
                    >
                      {d.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-sm)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                      {d.summary}
                    </p>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-xs)", color: "var(--color-navy-400)", marginTop: "var(--space-2)" }}>
                      Read dispatch →
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── COMMISSION CTA ── */}
      <section
        className="section"
        style={{ background: "var(--color-navy-900)", borderTop: "1px solid var(--color-navy-800)" }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-parchment-300)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-6)" }}>
            Strategic surveys begin with a site walk — a structured first conversation about the terrain
            before any instruments are deployed. There is no proposal. There is no template.
            There is only the particular problem in front of you, and a methodology rigorous enough to take it seriously.
          </p>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-sm)",
              fontWeight: 600,
              color: "var(--color-navy-900)",
              background: "var(--color-parchment-100)",
              padding: "12px 24px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Commission a survey →
          </Link>
        </div>
      </section>
    </>
  );
}
