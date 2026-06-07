import type { Metadata } from "next";
import Link from "next/link";
import ConceptANav from "@/components/ConceptANav";
import "./concept-a.css";

export const metadata: Metadata = {
  title: "Concept A — Restrained Authority",
  description: "KRAKEN Interactive concept direction: type-led, no imagery, 12-column grid.",
};

const INSTRUMENTS = [
  {
    num: "01",
    name: "Strategic Diagnosis",
    body: "We diagnose before we prescribe. The presenting problem is not the actual problem — it is the symptom the organisation has decided to name. Before any other survey work begins, we establish what the actual problem is.",
  },
  {
    num: "02",
    name: "Competitive Terrain Mapping",
    body: "The most visible competitors are the ones that have already moved. The actual threats are still below the surface. We map the competitive landscape as it is, not as it is commonly perceived.",
  },
  {
    num: "03",
    name: "Technology Readiness",
    body: "Most failed digital transformations share a common origin: technology decisions made before an accurate assessment of organisational readiness. We establish what the organisation can actually execute, not what it aspires to.",
  },
  {
    num: "04",
    name: "Organisational Capacity",
    body: "Formal structure is documented. Actual culture is not. The informal systems through which decisions are made and accountability operates are frequently more consequential than the formal ones. We survey both layers.",
  },
  {
    num: "05",
    name: "Communication Intelligence",
    body: "Organisations communicate in two directions simultaneously: to the market and internally. Both channels are frequently misaligned with strategic intent. This arm maps the gap between what is said and what is understood.",
  },
  {
    num: "06",
    name: "Evidence & Analytics",
    body: "Decisions made without reliable evidence are hypotheses, not strategy. We assess what data is being collected, how it is being interpreted, and which business questions are answered by assumption rather than measurement.",
  },
  {
    num: "07",
    name: "Market Landscape",
    body: "Organisations monitor their most visible competitors closely and their actual threats poorly. The most dangerous competitors are the ones still forming. We document the terrain as it actually exists.",
  },
  {
    num: "08",
    name: "Transformation Delivery",
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
    name: "Synthesis",
    body: "Cross-instrument findings integrated. The terrain map begins to form. Pattern analysis across all eight dimensions.",
    week: "W7–9",
  },
  {
    label: "Phase 04",
    name: "Deliver",
    body: "Terrain map produced. Findings briefed to leadership. Implementation roadmap set. Transformation arm activated.",
    week: "W10–12",
  },
];

const DISPATCHES = [
  {
    date: "Field Dispatch — June 2026",
    headline: "Why most digital transformation briefs describe the wrong problem",
    body: "The brief arrives with a solution already attached. In twelve years of survey work, we have never encountered a brief that did not contain an implicit answer to the question it was ostensibly asking.",
  },
  {
    date: "Field Dispatch — May 2026",
    headline: "The gap between stated strategy and actual operation",
    body: "Organisations describe their operations one way. The operations actually run another. This gap is not unusual — it is the default condition of any organisation that has grown faster than its documentation.",
  },
];

export default function ConceptAPage() {
  return (
    <>
      <ConceptANav />

      <div className="ca-page-content">

        {/* ── Section 1: Hero ── */}
        <section className="ca-hero">
          <div className="ca-container" style={{ width: "100%" }}>
            <div className="ca-grid" style={{ paddingBottom: "var(--ca-section-pad)" }}>
              <div className="ca-col-1">
                <span className="ca-section-num">01</span>
              </div>
              <div className="ca-col-2-9">
                <h1 className="ca-hero-headline">
                  There are no reliable charts for the strategic terrain of a growing business.
                </h1>
                <p className="ca-hero-sub">We make them.</p>
                <Link href="/contact" className="ca-hero-cta">
                  Commission a survey →
                </Link>
              </div>
              <div className="ca-col-10-12">
                <p className="ca-annotation">
                  Kraken Interactive<br />
                  Established 2010
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Animated heavy rule — draws left→right on load */}
        <hr className="ca-section-rule" aria-hidden="true" />

        {/* ── Section 2: Philosophy ── */}
        <section className="ca-section">
          <div className="ca-container">
            <div className="ca-grid">
              <div className="ca-col-1">
                <span className="ca-section-num">02</span>
              </div>
              <div className="ca-col-2-9">
                <p className="ca-body" style={{ marginBottom: "1.5em" }}>
                  Most organisations arrive at KRAKEN with a solution already in hand.
                  Before we design anything, we survey.
                </p>
                <p className="ca-body" style={{ marginBottom: "0" }}>
                  The terrain of a growing business is rarely what its leadership believes it to be.
                  The gap between the stated problem and the actual problem is where most strategic
                  engagements fail. We close that gap before anything else.
                </p>
                <blockquote className="ca-pull-quote">
                  The problem with solutions is knowing what the problem is.
                </blockquote>
              </div>
              <div className="ca-col-10-12">
                <p className="ca-annotation">
                  Field observation
                </p>
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
                <h2 className="ca-section-headline">
                  Eight instruments. One complete survey.
                </h2>
                <div className="ca-instruments-grid">
                  {INSTRUMENTS.map((inst) => (
                    <div key={inst.num}>
                      <span className="ca-instrument-num">{inst.num}</span>
                      <h3 className="ca-instrument-name">{inst.name}</h3>
                      <p className="ca-instrument-body">{inst.body}</p>
                    </div>
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
                <h2 className="ca-section-headline">
                  The survey, structured.
                </h2>
                <div className="ca-phases">
                  {PHASES.map((phase) => (
                    <div key={phase.label} className="ca-phase">
                      <div>
                        <span className="ca-phase-label">{phase.label}</span>
                        <h3 className="ca-phase-name">{phase.name}</h3>
                        <p className="ca-phase-body">{phase.body}</p>
                      </div>
                      <span className="ca-phase-week">{phase.week}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 5: Dispatches ── */}
        <section className="ca-section ca-section-alt">
          <div className="ca-container">
            <div className="ca-grid">
              <div className="ca-col-1">
                <span className="ca-section-num">05</span>
              </div>
              <div className="ca-col-2-13">
                <h2 className="ca-section-headline">
                  Recent field dispatches.
                </h2>
                <div className="ca-dispatches-grid">
                  {DISPATCHES.map((d) => (
                    <article key={d.headline} className="ca-dispatch-card">
                      <span className="ca-card-date">{d.date}</span>
                      <h3 className="ca-card-headline">{d.headline}</h3>
                      <p className="ca-card-body">{d.body}</p>
                      <Link href="/insights" className="ca-card-cta">
                        Read dispatch →
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Static heavy rule before dark CTA — does NOT animate */}
        <hr className="ca-section-cta-rule" aria-hidden="true" />

        {/* ── Section 6: Commission CTA ── */}
        <section className="ca-cta-section">
          <div className="ca-container">
            <div className="ca-cta-inner">
              <h2 className="ca-cta-headline">Commission a survey.</h2>
              <p className="ca-cta-body">
                If your organisation is at a strategic inflection point, a KRAKEN survey produces
                a terrain map no internal team can generate alone.
              </p>
              <a href="mailto:hello@kraken.com.my" className="ca-cta-email">
                hello@kraken.com.my
              </a>
              <br />
              <Link href="/contact" className="ca-cta-link">
                Commission a survey →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
