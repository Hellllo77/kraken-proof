import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CommissionCTA from "@/components/CommissionCTA";
import RevealOnScroll from "@/components/RevealOnScroll";
import InstrumentReveal from "@/components/InstrumentReveal";
import TerrainDiagram from "@/components/TerrainDiagram";

export const metadata: Metadata = {
  title: "The Survey Instruments",
  description: "Eight arms, deployed as one integrated system.",
};

const INSTRUMENTS = [
  {
    id: "01",
    name: "Strategic Intelligence",
    depth: "—260m",
    isAmber: true,
    body: "The opening arm, and the one most frequently abbreviated by firms that want to reach the solution phase. Before any other survey work begins, we establish what the actual problem is — not the presenting problem, which is the symptom the organisation has decided to name, but the underlying condition it reflects. Most engagements are materially reshaped at this stage.",
  },
  {
    id: "02",
    name: "Operational Intelligence",
    depth: "—100m",
    isAmber: false,
    body: "The gap between how an organisation describes its operations and how those operations actually function is a reliable source of strategic misinformation. We map the processes that govern how the business converts inputs to outputs: where decisions stall, where effort is duplicated, where the system creates friction that compounds at scale. The output is an operational map, not an optimisation plan.",
  },
  {
    id: "03",
    name: "Technology Intelligence",
    depth: "—80m",
    isAmber: false,
    body: "The majority of failed digital transformations we are subsequently asked to investigate share a common origin: technology decisions made before an accurate assessment of organisational readiness. This arm establishes what the organisation can actually execute technologically — current systems, team capability, data infrastructure, and the gap between the present state and the state required to benefit from the technology under consideration.",
  },
  {
    id: "04",
    name: "People & Culture Intelligence",
    depth: "—140m",
    isAmber: false,
    body: "Organisational structure is documented. Organisational culture is not. The informal systems through which decisions are actually made, information actually moves, and accountability actually operates are frequently more consequential than the formal ones. We survey both layers — the structure and the culture beneath it — to establish what the organisation is genuinely capable of and where the constraints on execution actually live.",
  },
  {
    id: "05",
    name: "Communication Intelligence",
    depth: "—120m",
    isAmber: false,
    body: "Organisations communicate simultaneously in two directions: to the market and internally. Both channels are frequently misaligned with strategic intent. This arm examines how the business presents itself externally — brand, positioning, messaging — and how it communicates internally: decision clarity, information flow, and the alignment between leadership intent and team understanding.",
  },
  {
    id: "06",
    name: "Data & Analytics Intelligence",
    depth: "—180m",
    isAmber: false,
    body: "Decisions made without reliable evidence are hypotheses, not strategy. This arm assesses the quality and completeness of the organisation's evidence base: what data is being collected, how it is being interpreted, where the analytical gaps are, and which business questions are currently being answered by assumption rather than measurement.",
  },
  {
    id: "07",
    name: "Market & Competitive Intelligence",
    depth: "—160m",
    isAmber: false,
    body: "Organisations tend to monitor their most visible competitors closely and their actual threats poorly. The most visible competitors are the ones that have already moved; the actual threats are the ones still below the surface. We document the competitive landscape as it exists — direct competitors, adjacent sector entrants, structural dynamics, and the weak signals that indicate where the terrain is shifting before that shift becomes apparent to the market.",
  },
  {
    id: "08",
    name: "Transformation Intelligence",
    depth: "—400m",
    isAmber: false,
    body: "Recommendations that are not implemented are not recommendations. They are documents. This arm ensures the map produced by the preceding seven is actually used. We remain engaged through the execution phase not to deliver the strategy on the organisation's behalf, but to confirm the map is being followed, test the original diagnosis against emerging evidence as the organisation moves, and intervene when execution momentum outpaces strategic understanding — which it reliably does.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader title="The Survey Instruments" depthMark="—260m INSTRUMENTS" />

      {/* ── Intro ── */}
      <section className="section" style={{ background: "var(--parchment-100)" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <RevealOnScroll>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-lg)",
                fontStyle: "italic",
                color: "var(--navy-700)",
                lineHeight: "var(--lh-body)",
                maxWidth: "var(--max-prose)",
              }}
            >
              Eight arms, deployed as one integrated system. No arm operates in isolation — the picture
              a single arm produces is partial. The complete survey requires all eight.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Terrain Diagram — dark navy, capabilities-bg @8% screen via .section-capabilities-diagram ── */}
      <section
        className="section-capabilities-diagram"
        style={{
          paddingTop: "var(--space-20)",
          paddingBottom: "var(--space-12)",
        }}
      >

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-2xl)",
                fontWeight: 700,
                color: "var(--parchment-100)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-3)",
              }}
            >
              Survey terrain.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-xs)",
                letterSpacing: "var(--ls-label)",
                textTransform: "uppercase",
                color: "var(--depth-blue-400)",
                marginBottom: "var(--space-10)",
              }}
            >
              Select a zone to reveal the instrument
            </p>
          </RevealOnScroll>

          <TerrainDiagram />
        </div>
      </section>

      {/* ── 8 Instrument Briefs — full list ── */}
      <section
        className="section-instruments"
        style={{
          paddingBottom: "var(--space-32)",
        }}
      >
        <div className="container">
          <div style={{ height: "1px", background: "var(--depth-blue-600)", opacity: 0.4, marginBottom: "var(--space-16)" }} />

          <InstrumentReveal staggerCount={INSTRUMENTS.length}>
            <div className="instruments-grid">
              {INSTRUMENTS.map((inst, i) => (
                <div
                  key={inst.id}
                  className="reveal-row"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr auto",
                    gap: "var(--space-8)",
                    paddingTop: "var(--space-8)",
                    paddingBottom: "var(--space-8)",
                    alignItems: "start",
                  }}
                >
                  {/* Number + contour mark */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "var(--space-2)" }}>
                    <div style={{ width: "1px", height: "20px", background: inst.isAmber ? "var(--amber-500)" : "var(--depth-blue-500)", opacity: 0.6 }} />
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-2xs)",
                        fontWeight: 600,
                        letterSpacing: "var(--ls-label)",
                        textTransform: "uppercase",
                        color: inst.isAmber ? "var(--amber-500)" : "var(--depth-blue-400)",
                      }}
                    >
                      {inst.id}
                    </span>
                  </div>

                  {/* Name + description */}
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-sm)",
                        fontWeight: 600,
                        color: inst.isAmber ? "var(--amber-500)" : "var(--parchment-100)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "var(--space-3)",
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
                        maxWidth: "var(--max-prose)",
                        opacity: 0.85,
                      }}
                    >
                      {inst.body}
                    </p>
                  </div>

                  {/* Depth mark */}
                  <p
                    className="depth-notation"
                    style={{
                      color: inst.isAmber ? "var(--amber-500)" : "var(--depth-blue-400)",
                      whiteSpace: "nowrap",
                      paddingTop: "2px",
                    }}
                  >
                    {inst.depth}
                  </p>
                </div>
              ))}
            </div>
          </InstrumentReveal>
        </div>
      </section>

      {/* ── How instruments combine ── */}
      <section className="section" style={{ background: "var(--parchment-200)" }}>
        <div className="container">
          <div style={{ height: "6px", background: "var(--amber-500)", marginBottom: "2px" }} />
          <div style={{ height: "1px", background: "var(--navy-900)", marginBottom: "var(--space-16)" }} />

          <RevealOnScroll>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "var(--space-8)",
                maxWidth: "760px",
              }}
            >
              <blockquote className="field-note">
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-lg)",
                    fontStyle: "italic",
                    color: "var(--navy-900)",
                    lineHeight: "var(--lh-body)",
                  }}
                >
                  A survey that maps only one dimension of the terrain is a survey of the surface.
                  The strategic picture emerges only when all eight arms have completed their work.
                </p>
              </blockquote>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--type-base)",
                  color: "var(--navy-700)",
                  lineHeight: "var(--lh-body)",
                  maxWidth: "var(--max-prose)",
                }}
              >
                No instrument in the system operates in isolation. The findings from Strategic Intelligence
                determine which other arms require deeper survey work. The output of Technology and People &
                Culture Intelligence informs how the Market findings can actually be acted on. Transformation
                Intelligence closes the loop — without it, the seven preceding arms produce a document,
                not a result.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={80} style={{ marginTop: "var(--space-12)" }}>
            <Link
              href="/contact"
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
              Commission a survey →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <CommissionCTA />
    </>
  );
}
