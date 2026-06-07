import type { Metadata } from "next";
import Link from "next/link";
import ContourReveal from "@/components/ContourReveal";

export const metadata: Metadata = {
  title: "The Survey Instruments",
  description: "Eight arms, deployed as one integrated system.",
};

const INSTRUMENTS = [
  {
    id: "01",
    name: "Strategic Intelligence",
    body: "The opening arm, and the one most frequently abbreviated by firms that want to reach the solution phase. Before any other survey work begins, we establish what the actual problem is — not the presenting problem, which is the symptom the organisation has decided to name, but the underlying condition it reflects. This requires structured inquiry without a predetermined hypothesis and a willingness to challenge the framing a client brings to the first conversation. Most engagements are materially reshaped at this stage.",
  },
  {
    id: "02",
    name: "Operational Intelligence",
    body: "The gap between how an organisation describes its operations and how those operations actually function is a reliable source of strategic misinformation. We map the processes that govern how the business converts inputs to outputs: where decisions stall, where effort is duplicated, where the system creates friction that compounds at scale, and where the gap between designed process and actual practice is widest. The output is an operational map, not an optimisation plan.",
  },
  {
    id: "03",
    name: "Technology Intelligence",
    body: "The majority of failed digital transformations we are subsequently asked to investigate share a common origin: technology decisions made before an accurate assessment of organisational readiness. This arm establishes what the organisation can actually execute technologically — current systems, team capability, data infrastructure, and the gap between the present state and the state required to benefit from the technology under consideration. We assess readiness before we recommend investment.",
  },
  {
    id: "04",
    name: "People & Culture Intelligence",
    body: "Organisational structure is documented. Organisational culture is not. The informal systems through which decisions are actually made, information actually moves, and accountability actually operates are frequently more consequential than the formal ones. We survey both layers — the structure and the culture beneath it — to establish what the organisation is genuinely capable of and where the constraints on execution actually live. A strategy the organisation cannot culturally execute is not a strategy.",
  },
  {
    id: "05",
    name: "Communication Intelligence",
    body: "Organisations communicate simultaneously in two directions: to the market and internally. Both channels are frequently misaligned with strategic intent. This arm examines how the business presents itself externally — brand, positioning, messaging — and how it communicates internally: decision clarity, information flow, and the alignment between leadership intent and team understanding. Misalignment in either direction is a strategic problem, not a communications one.",
  },
  {
    id: "06",
    name: "Data & Analytics Intelligence",
    body: "Decisions made without reliable evidence are hypotheses, not strategy. This arm assesses the quality and completeness of the organisation's evidence base: what data is being collected, how it is being interpreted, where the analytical gaps are, and which business questions are currently being answered by assumption rather than measurement. The output is an evidence map for the strategic work that follows.",
  },
  {
    id: "07",
    name: "Market & Competitive Intelligence",
    body: "Organisations tend to monitor their most visible competitors closely and their actual threats poorly. The most visible competitors are the ones that have already moved; the actual threats are the ones still below the surface. We document the competitive landscape as it exists — direct competitors, adjacent sector entrants, structural dynamics, and the weak signals that indicate where the terrain is shifting before that shift becomes apparent to the market. No legacy assumptions are preserved in the output.",
  },
  {
    id: "08",
    name: "Transformation Intelligence",
    body: "Recommendations that are not implemented are not recommendations. They are documents. This arm ensures the map produced by the preceding seven is actually used. We remain engaged through the execution phase not to deliver the strategy on the organisation's behalf, but to confirm the map is being followed, test the original diagnosis against emerging evidence as the organisation moves, and intervene when execution momentum outpaces strategic understanding — which it reliably does.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
            Survey Depth: Full System
          </div>
          <p className="depth-notation" style={{ color: "var(--color-navy-400)", marginBottom: "var(--space-4)" }}>
            What a Complete Survey Covers
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-3)",
            }}
          >
            The Survey Instruments
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-subhead)",
              color: "var(--color-navy-700)",
              lineHeight: "var(--lh-body)",
              maxWidth: "600px",
              marginBottom: "var(--space-6)",
            }}
          >
            Eight arms, deployed as one integrated system. No arm operates in isolation —
            the picture a single arm produces is partial. The complete survey requires all eight.
          </p>

          {/* Terrain diagram — Mira will replace with 8-capability terrain diagram */}
          <ContourReveal />
        </div>
      </section>

      {/* Instruments */}
      <section className="section" style={{ borderTop: "1px solid var(--color-parchment-300)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {INSTRUMENTS.map((inst) => (
              <div
                key={inst.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: "var(--space-6)",
                  paddingBottom: "var(--space-8)",
                  borderBottom: "1px solid var(--color-parchment-300)",
                  alignItems: "start",
                }}
              >
                <div>
                  <span className="depth-notation" style={{ display: "block", marginBottom: "var(--space-1)" }}>
                    Instrument
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                      fontWeight: 700,
                      color: "var(--color-parchment-300)",
                      lineHeight: 1,
                    }}
                  >
                    {inst.id}
                  </span>
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-heading)",
                      fontWeight: 600,
                      color: "var(--color-navy-900)",
                      letterSpacing: "var(--ls-heading)",
                      marginBottom: "var(--space-3)",
                    }}
                  >
                    {inst.name}
                  </h2>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                    {inst.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link href="/contact" style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-sm)", color: "var(--color-navy-600)" }}>
              Commission a survey →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
