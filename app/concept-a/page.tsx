import type { Metadata } from "next";
import Script from "next/script";
import ConceptANav from "@/components/ConceptANav";
import ConceptAHeroImmersive from "@/components/ConceptAHeroImmersive";
import ConceptAEmerge from "@/components/ConceptAEmerge";
import "./concept-a.css";

export const metadata: Metadata = {
  title: "The Commission at Depth",
  description:
    "KRAKEN surveys the strategic terrain so your decisions are made from maps, not assumptions.",
  openGraph: {
    title: "The Commission at Depth — Kraken Interactive",
    description:
      "KRAKEN surveys the strategic terrain so your decisions are made from maps, not assumptions.",
    images: [
      {
        url: "/assets/hero-poster-v2.jpg",
        width: 1920,
        height: 1080,
        alt: "KRAKEN — The Commission at Depth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Commission at Depth — Kraken Interactive",
    images: ["/assets/hero-poster-v2.jpg"],
  },
};

/* Real KRAKEN Intelligence names from TerrainDiagram.tsx (verbatim) */
const INSTRUMENTS = [
  {
    name: "Strategic Intelligence",
    desc: "Establishing what the actual problem is before any other survey work begins. The opening arm — and the one most frequently abbreviated.",
    featured: true,
  },
  {
    name: "Operational Intelligence",
    desc: "Mapping how the business actually operates — where decisions stall, effort duplicates, and friction compounds.",
    featured: false,
  },
  {
    name: "Technology Intelligence",
    desc: "Determining what the organisation can actually execute digitally before any recommendation is made.",
    featured: false,
  },
  {
    name: "People & Culture Intelligence",
    desc: "Surveying both the formal structure and the informal systems beneath it.",
    featured: false,
  },
  {
    name: "Communication Intelligence",
    desc: "Examining how the business presents itself externally and communicates internally.",
    featured: false,
  },
  {
    name: "Data & Analytics Intelligence",
    desc: "Establishing the quality and completeness of the evidence base that strategic decisions rest on.",
    featured: false,
  },
  {
    name: "Market & Competitive Intelligence",
    desc: "Documenting the competitive landscape as it exists — not as leadership perceives it.",
    featured: false,
  },
  {
    name: "Transformation Intelligence",
    desc: "Ensuring the map produced by the preceding seven arms is followed through execution.",
    featured: false,
  },
];

const PHASES = [
  {
    label: "Listen",
    duration: "W1–2",
    name: "Listen",
    body: "Client interviews, stakeholder mapping, contextual discovery. Surface observation before any instrument is deployed.",
  },
  {
    label: "Survey",
    duration: "W3–6",
    name: "Survey",
    body: "Eight instruments deployed in sequence. Evidence gathered, not assumed. The work of the survey itself.",
  },
  {
    label: "Analyse",
    duration: "W7–10",
    name: "Analyse",
    body: "Cross-instrument findings integrated. The terrain map begins to form. Pattern analysis across all eight dimensions.",
  },
  {
    label: "Chart",
    duration: "W11–12",
    name: "Chart",
    body: "Terrain map produced. Findings briefed to leadership. Implementation roadmap set. Transformation arm activated.",
  },
];

export default function ConceptAPage() {
  return (
    <div className="ca-page">
      <ConceptANav />

      {/* ── Section 1: HERO — Pattern: FULL-BLEED ASYMMETRIC (text right of center) ── */}
      {/* Atmospheric depth occupies left 57%; editorial text block anchored right */}
      <ConceptAHeroImmersive>
        {/* Left column: intentionally empty — visual depth from video/image layers */}
        <div className="ca-hero-atmosphere" aria-hidden="true" />

        {/* Right column: editorial text block */}
        <div className="ca-hero-text">
          <p className="ca-hero-annotation">
            KRAKEN INTERACTIVE<br />
            STRATEGIC SURVEY WORK<br />
            EST. 2010
          </p>
          <h1 className="ca-hero-headline">
            There are no reliable charts for the strategic terrain of a growing business.
          </h1>
          <p className="ca-hero-sub">We make them.</p>
          <a href="mailto:hello@kraken.com.my" className="ca-hero-cta">
            Commission a survey ↗
          </a>
        </div>

        {/* Amber rule at bottom — attention direction, draws eye to content threshold */}
        <div className="ca-hero-rule" aria-hidden="true" />
      </ConceptAHeroImmersive>

      {/* ── Section 2: PREMISE — Pattern: SPLIT-2COL (pull-quote left | body right) ── */}
      {/* Explicitly different from hero full-bleed and instruments mosaic */}
      <section className="ca-section-premise">
        <div className="ca-img-layer" data-parallax-rate="0.15" aria-hidden="true" />
        <ConceptAEmerge>
          <div className="ca-premise">
            <blockquote className="ca-premise-quote">
              &ldquo;The problem with most strategies is not the answer. It is the question that was never asked.&rdquo;
            </blockquote>
            <div className="ca-premise-body">
              <p>
                Most organisations arrive at KRAKEN with a solution already in hand. A rebrand.
                A new platform. A restructure. Before we design anything, we survey.
              </p>
              <p>
                The terrain of a growing business is rarely what its leadership believes it to be.
                The gap between the stated problem and the actual problem is where most strategic
                engagements fail. We close that gap before anything else.
              </p>
              <p>
                A KRAKEN survey is not a consultancy engagement. It is not advice.
                It is a complete, evidenced map of the strategic terrain — produced with
                eight instruments over ten to twelve weeks.
              </p>
            </div>
          </div>
        </ConceptAEmerge>
      </section>

      {/* ── Section 3: INSTRUMENTS — Pattern: ASYMMETRIC MOSAIC ── */}
      {/* 3-col newspaper grid; Strategic Intelligence spans 2 cols (featured);
          NO numbered markers; NO identical card structure; NO icon+heading+text template */}
      <section className="ca-section-instruments">
        <div className="ca-img-layer" data-parallax-rate="0.10" aria-hidden="true" />
        <div className="ca-instruments-container">
          <ConceptAEmerge>
            <div className="ca-instruments-header">
              <h2 className="ca-instruments-headline">Eight survey instruments.</h2>
            </div>
          </ConceptAEmerge>

          <div className="ca-instruments-mosaic">
            {INSTRUMENTS.map((inst) => (
              <div
                key={inst.name}
                className={`ca-instrument ca-instrument-card${inst.featured ? " ca-instrument--featured" : ""}`}
              >
                <h3 className="ca-instrument-name">{inst.name}</h3>
                <p className="ca-instrument-desc">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: SURVEY METHOD — Pattern: HORIZONTAL KPI-STRIP ── */}
      {/* 4 phases side-by-side on desktop — reads as a chart, not a list.
          2px amber border-top separates from instruments section. */}
      <section className="ca-section-method">
        <div className="ca-img-layer" data-parallax-rate="0.20" aria-hidden="true" />
        <div className="ca-method-container">
          <ConceptAEmerge>
            <div className="ca-method-header">
              <h2 className="ca-method-headline">The survey, structured.</h2>
            </div>
          </ConceptAEmerge>

          {/* Horizontal flex on desktop, vertical stack on mobile */}
          <div className="ca-phases">
            {PHASES.map((phase) => (
              <div key={phase.label} className="ca-phase ca-phase-item">
                <span className="ca-phase-label">{phase.label}</span>
                <span className="ca-phase-name">{phase.name}</span>
                <span className="ca-phase-duration">{phase.duration}</span>
                <p className="ca-phase-body">{phase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: DISPATCHES — Pattern: CENTERED EDITORIAL ── */}
      {/* Narrow single column; empty state acknowledged without apology.
          Amber rules above+below contain the absence as designed space. */}
      <section className="ca-section-dispatches">
        <div className="ca-img-layer" aria-hidden="true" />
        <div className="ca-dispatches-container">
          <ConceptAEmerge>
            <h2 className="ca-dispatches-headline">Field dispatches.</h2>
            <div className="ca-dispatches-empty">
              <p className="ca-dispatches-copy">
                Dispatches from the field are published when the survey work produces findings
                worth sharing. The first dispatch is in preparation.
              </p>
            </div>
          </ConceptAEmerge>
        </div>
      </section>

      {/* ── Section 6: COMMISSION CTA — Pattern: FULL-BLEED ASYMMETRIC (headline left, email right) ── */}
      {/* 2px amber border-top signals "this is the moment". */}
      {/* Different from hero: headline meets email across a horizontal axis */}
      <section className="ca-section-cta">
        <div className="ca-video-layer" data-parallax-rate="0.10" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="none" aria-hidden="true">
            <source src="/assets/concept-a/cta-ambient-depth.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="ca-cta-container">
          <ConceptAEmerge>
            <div className="ca-cta-header">
              <h2 className="ca-cta-headline">Commission a survey.</h2>
              <a href="mailto:hello@kraken.com.my" className="ca-cta-email">
                hello@kraken.com.my ↗
              </a>
            </div>
            <p className="ca-cta-body">
              KRAKEN surveys the strategic terrain so your decisions are made from maps,
              not assumptions.
            </p>
            <a href="mailto:hello@kraken.com.my" className="ca-cta-link">
              Begin a survey →
            </a>
          </ConceptAEmerge>
        </div>
      </section>
      {/* ── Concept A Footer — address, contact, est. year ── */}
      <footer className="ca-footer">
        <div className="ca-footer-inner">
          <address className="ca-footer-address">
            Kraken Interactive Sdn. Bhd.&nbsp;&middot;&nbsp;
            16-2 Jalan PJU 8/3A, Damansara Perdana,&nbsp;
            47820 Petaling Jaya, Selangor&nbsp;&middot;&nbsp;
            <a href="mailto:hello@kraken.com.my">hello@kraken.com.my</a>
          </address>
          <span className="ca-footer-est">Est. 2010</span>
        </div>
      </footer>

      <Script src="/concept-a-interior-parallax.js" strategy="afterInteractive" />
    </div>
  );
}
