import type { Metadata } from "next";
import Link from "next/link";
import ConceptANav from "@/components/ConceptANav";
import ConceptAHeroImmersive from "@/components/ConceptAHeroImmersive";
import ConceptAEmerge from "@/components/ConceptAEmerge";
import "./concept-a.css";

export const metadata: Metadata = {
  title: "The Commission at Depth",
  description:
    "KRAKEN surveys the strategic terrain so your decisions are made from maps, not assumptions.",
};

const INSTRUMENTS = [
  {
    num: "01",
    name: "Strategic Diagnosis",
    body: "We diagnose before we prescribe. The presenting problem is not the actual problem — it is the symptom the organisation has decided to name.",
  },
  {
    num: "02",
    name: "Competitive Terrain Mapping",
    body: "The most visible competitors are the ones that have already moved. We map the competitive landscape as it is, not as it is commonly perceived.",
  },
  {
    num: "03",
    name: "Market Positioning Analysis",
    body: "Where you stand in the market, and where you can credibly move. Positioning is not aspiration — it is the territory your organisation can actually hold.",
  },
  {
    num: "04",
    name: "Organisational Diagnostics",
    body: "Formal structure is documented. Actual culture is not. We survey both layers — the informal systems through which decisions are made are frequently more consequential than the formal ones.",
  },
  {
    num: "05",
    name: "Digital Intelligence Assessment",
    body: "Most failed digital transformations share a common origin: technology decisions made before an accurate assessment of organisational readiness. We establish what the organisation can actually execute.",
  },
  {
    num: "06",
    name: "Operational Analysis",
    body: "Decisions made without reliable evidence are hypotheses, not strategy. We assess what data is being collected, how it is being interpreted, and which questions are answered by assumption rather than measurement.",
  },
  {
    num: "07",
    name: "Growth Architecture",
    body: "Growth without a structural foundation does not compound — it dissipates. This arm maps the conditions under which sustainable growth is achievable, and the levers that actually move it.",
  },
  {
    num: "08",
    name: "Delivery Alignment",
    body: "Recommendations that are not implemented are documents. This arm ensures the terrain map produced by the preceding seven is actually followed — and that execution momentum does not outpace strategic understanding.",
  },
];

const PHASES = [
  {
    label: "Phase 01",
    name: "Listen",
    body: "Client interviews, stakeholder mapping, contextual discovery. Surface observation before any instrument is deployed.",
    week: "W1–2",
  },
  {
    label: "Phase 02",
    name: "Survey",
    body: "Eight instruments deployed in sequence. Evidence gathered, not assumed. The work of the survey itself.",
    week: "W3–6",
  },
  {
    label: "Phase 03",
    name: "Analyse",
    body: "Cross-instrument findings integrated. The terrain map begins to form. Pattern analysis across all eight dimensions.",
    week: "W7–8",
  },
  {
    label: "Phase 04",
    name: "Chart",
    body: "Terrain map produced. Findings briefed to leadership. Implementation roadmap set. Transformation arm activated.",
    week: "W9–10",
  },
];

export default function ConceptAPage() {
  return (
    <>
      <ConceptANav />

      {/* ── Section 1: Hero — dark navy + video + grain + parallax ── */}
      <ConceptAHeroImmersive>
        <div className="ca-container ca-hero-grid-wrapper">
          <div className="ca-grid">
            <div className="ca-col-1">
              <span className="ca-section-num">01</span>
            </div>
            <div className="ca-col-2-9">
              <h1 className="ca-hero-headline">
                There are no reliable charts for the strategic terrain of a growing business.
              </h1>
              <p className="ca-hero-sub">We make them.</p>
              <a href="mailto:hello@kraken.com.my" className="ca-hero-cta">
                Commission a survey →
              </a>
            </div>
            <div className="ca-col-10-12">
              <p className="ca-annotation">
                Kraken Interactive
                <br />
                Established 2010
              </p>
            </div>
          </div>
        </div>
      </ConceptAHeroImmersive>

      {/* ── Section 2: Philosophy ── */}
      <section className="ca-section">
        <div className="ca-container">
          <div className="ca-grid">
            <div className="ca-col-1">
              <span className="ca-section-num">02</span>
            </div>
            <ConceptAEmerge className="ca-col-2-9">
              <p className="ca-body" style={{ marginBottom: "1.5em" }}>
                Most organisations arrive at KRAKEN with a solution already in hand.
                Before we design anything, we survey.
              </p>
              <p className="ca-body" style={{ marginBottom: 0 }}>
                The terrain of a growing business is rarely what its leadership believes it to be.
                The gap between the stated problem and the actual problem is where most strategic
                engagements fail. We close that gap before anything else.
              </p>
              <blockquote className="ca-pull-quote">
                The problem with solutions is knowing what the problem is.
              </blockquote>
            </ConceptAEmerge>
            <div className="ca-col-10-12">
              <p className="ca-annotation">Field observation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Eight Instruments ── */}
      <section className="ca-section ca-section-alt">
        <div className="ca-container">
          <div className="ca-grid">
            <div className="ca-col-1">
              <span className="ca-section-num">03</span>
            </div>
            <div className="ca-col-2-13">
              <ConceptAEmerge>
                <h2 className="ca-section-headline">
                  Eight instruments. One complete survey.
                </h2>
              </ConceptAEmerge>
              <div className="ca-instruments-grid" style={{ marginTop: "3em" }}>
                {INSTRUMENTS.map((inst, i) => (
                  <ConceptAEmerge key={inst.num}>
                    <span
                      className={
                        i === 0 ? "ca-instrument-num ca-instrument-num--amber" : "ca-instrument-num"
                      }
                    >
                      {inst.num}
                    </span>
                    <h3 className="ca-instrument-name">{inst.name}</h3>
                    <p className="ca-instrument-body">{inst.body}</p>
                  </ConceptAEmerge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Survey Process ── */}
      <section className="ca-section">
        <div className="ca-container">
          <div className="ca-grid">
            <div className="ca-col-1">
              <span className="ca-section-num">04</span>
            </div>
            <div className="ca-col-2-13">
              <ConceptAEmerge>
                <h2 className="ca-section-headline">The survey, structured.</h2>
              </ConceptAEmerge>
              <div className="ca-phases">
                {PHASES.map((phase) => (
                  <ConceptAEmerge key={phase.label}>
                    <div className="ca-phase">
                      <div>
                        <span className="ca-phase-label">{phase.label}</span>
                        <h3 className="ca-phase-name">{phase.name}</h3>
                        <p className="ca-phase-body">{phase.body}</p>
                      </div>
                      <span className="ca-phase-week">{phase.week}</span>
                    </div>
                  </ConceptAEmerge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Dispatches — EMPTY-STATE VERBATIM ── */}
      <section className="ca-section ca-section-alt">
        <div className="ca-container">
          <div className="ca-grid">
            <div className="ca-col-1">
              <span className="ca-section-num">05</span>
            </div>
            <div className="ca-col-2-13">
              <ConceptAEmerge>
                <h2 className="ca-section-headline">Recent field dispatches.</h2>
                <div className="ca-dispatches-empty">
                  <p className="ca-dispatches-empty-copy">
                    Dispatches from the field are published when the survey work produces findings
                    worth sharing. The first dispatch is in preparation.
                  </p>
                </div>
              </ConceptAEmerge>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Commission CTA ── */}
      <section className="ca-cta-section">
        <div className="ca-container">
          <ConceptAEmerge>
            <hr className="ca-cta-amber-rule" aria-hidden="true" />
            <h2 className="ca-cta-headline">Commission a survey.</h2>
            <p className="ca-cta-body">
              KRAKEN surveys the strategic terrain so your decisions are made from maps, not
              assumptions.
            </p>
            <a href="mailto:hello@kraken.com.my" className="ca-cta-email">
              hello@kraken.com.my
            </a>
            <br />
            <a href="mailto:hello@kraken.com.my" className="ca-cta-link">
              Commission a survey →
            </a>
          </ConceptAEmerge>
        </div>
      </section>
    </>
  );
}
