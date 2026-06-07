import type { Metadata } from "next";
import Link from "next/link";
import ContourReveal from "@/components/ContourReveal";

export const metadata: Metadata = {
  title: "The Survey Instruments",
  description: "Eight disciplines, deployed as one integrated system.",
};

const INSTRUMENTS = [
  {
    id: "01",
    name: "Strategic Diagnosis",
    body: "The opening instrument, and the one most frequently abbreviated by firms eager to reach the solution phase. Before any other survey work begins, we establish what the actual problem is — not the presenting symptom, but the underlying condition that the symptom describes. This phase is frequently the most consequential and the least visible.",
  },
  {
    id: "02",
    name: "Competitive Terrain Mapping",
    body: "We document the competitive landscape as it exists, not as leadership perceives it. The gap between these two pictures is almost always instructive. Competitor positions, pricing structures, messaging strategies, and operational patterns are mapped against the organisation's own stated position.",
  },
  {
    id: "03",
    name: "Organisational Diagnostics",
    body: "Structure, decision patterns, and the informal systems that govern actual operations. The organisation chart describes authority; the diagnostic maps what actually happens when decisions need to be made. The gap between these two structures is where most strategic plans break down during execution.",
  },
  {
    id: "04",
    name: "Market Positioning Analysis",
    body: "Establishing the gap between how the organisation presents itself and how it is understood — by customers, by competitors, and by prospective employees. Repositioning efforts that skip this diagnostic frequently fail because they are correcting a self-image rather than a market reality.",
  },
  {
    id: "05",
    name: "Digital Intelligence Assessment",
    body: "Determining what the organisation can actually execute digitally before any technology recommendation is made. Most digital transformation failures are execution failures dressed as technology selection problems. We diagnose the constraint first.",
  },
  {
    id: "06",
    name: "Operational Analysis",
    body: "Mapping the processes that convert inputs to outputs, and the friction points that compound over time. Operational inefficiency frequently presents as a strategy problem or a talent problem. The diagnostic determines which it actually is.",
  },
  {
    id: "07",
    name: "Growth Architecture",
    body: "Designing the strategy: where the leverage points are, which opportunities are genuinely available given the actual constraints, and in what sequence. Growth architecture is only meaningful as a synthesis of the preceding diagnostics — it cannot be performed in isolation from them.",
  },
  {
    id: "08",
    name: "Delivery Alignment",
    body: "Remaining engaged through execution to ensure the map is being followed as the terrain changes. Most strategic failures occur at this stage. We are present to read the terrain as it shifts — not to execute for the organisation, but to ensure the organisation's execution remains connected to the strategic picture.",
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
            Eight disciplines, deployed as one integrated system. No instrument operates in isolation —
            the picture a single instrument produces is partial. The complete survey requires all eight.
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
