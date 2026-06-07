import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CommissionCTA from "@/components/CommissionCTA";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "The Cartographers",
  description: "Strategic intelligence consultancy. Est. 2010. Malaysia + SEA.",
};

const APPROACH_NOTES = [
  {
    label: "Listen First",
    body: "We enter the terrain without a hypothesis. Discovery before diagnosis.",
  },
  {
    label: "Diagnose Deeply",
    body: "The presenting problem is rarely the actual problem. We map to the bedrock.",
  },
  {
    label: "Present Through Delivery",
    body: "Recommendations that are not implemented are documents. We remain engaged.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="The Cartographers" depthMark="—40m ORIGIN" />

      {/* ── ORIGIN STORY — 7/5 editorial split ── */}
      <section className="section" style={{ background: "var(--parchment-100)" }}>
        <div className="container">
          <div className="editorial-split">
            {/* Left: prose + pull quote */}
            <div style={{ maxWidth: "760px" }}>
              <RevealOnScroll>
                <blockquote className="field-note" style={{ marginBottom: "var(--space-10)" }}>
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
                    We began in 2010 as a digital agency. The work was technically sound. And then,
                    consistently, the results did not match the expectations.
                  </p>
                </blockquote>
              </RevealOnScroll>

              <RevealOnScroll delay={80}>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    maxWidth: "var(--max-prose)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  We began in 2010 as a digital agency. We were capable practitioners: websites built to
                  brief, campaigns executed on time, projects delivered within scope. Clients were
                  professionally satisfied. The work was technically sound.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    maxWidth: "var(--max-prose)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  And then, consistently, the results did not match the expectations. Not our results.
                  Theirs.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    maxWidth: "var(--max-prose)",
                    marginBottom: "var(--space-6)",
                  }}
                >
                  Understanding what was happening took several years — which is itself instructive about
                  the difficulty of accurate self-diagnosis. What we eventually mapped was this: we had
                  been answering questions that had not yet been properly asked.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-base)",
                    color: "var(--navy-700)",
                    lineHeight: "var(--lh-body)",
                    maxWidth: "var(--max-prose)",
                  }}
                >
                  Clients arrived with a solution already in mind and we had delivered it without
                  examining the premises. The actual problem lived deeper in the terrain — in the
                  structural assumptions leadership had never examined, in the gap between the strategy
                  on paper and the organisation&apos;s actual capacity to execute it.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right: editorial image + annotation */}
            <RevealOnScroll delay={160}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: "var(--space-8)",
                  alignItems: "start",
                }}
              >
                <div>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                      marginBottom: "var(--space-4)",
                    }}
                  >
                    <Image
                      src="/assets/about-desk.jpg"
                      alt="Survey map and instruments on a desk — strategic intelligence workspace"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 1200px) 100vw, 800px"
                      priority={false}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-2xs)",
                      letterSpacing: "var(--ls-label)",
                      color: "var(--depth-blue-500)",
                      textTransform: "uppercase",
                    }}
                  >
                    Survey workspace — evidence before recommendation
                  </p>
                </div>

                <div
                  style={{
                    borderLeft: "1px solid var(--amber-500)",
                    paddingLeft: "var(--space-5)",
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "var(--space-2)",
                  }}
                >
                  <p className="depth-notation" style={{ color: "var(--depth-blue-500)" }}>
                    Est. 2010
                  </p>
                  <p className="depth-notation" style={{ color: "var(--depth-blue-500)" }}>
                    Malaysia + SEA
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── REPOSITIONING — Where this takes us ── */}
      <section className="section" style={{ background: "var(--parchment-200)" }}>
        <div className="container">
          {/* Amber + navy double rule */}
          <div style={{ height: "6px", background: "var(--amber-500)", marginBottom: "2px" }} />
          <div style={{ height: "1px", background: "var(--navy-900)", marginBottom: "var(--space-16)" }} />

          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-2xl)",
                fontWeight: 700,
                color: "var(--navy-900)",
                lineHeight: "var(--lh-heading)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-8)",
              }}
            >
              Where this takes us.
            </h2>
          </RevealOnScroll>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--space-12)",
            }}
          >
            <RevealOnScroll delay={60}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--type-base)",
                  color: "var(--navy-700)",
                  lineHeight: "var(--lh-body)",
                  maxWidth: "var(--max-prose)",
                  marginBottom: "var(--space-6)",
                }}
              >
                That recognition is what this practice is now built on. The work we take on has not
                changed in type; the discipline that precedes it has. We enter engagements later in the
                diagnostic process than most firms, and earlier in the strategic one — before the brief
                has been finalised, not after.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--type-base)",
                  color: "var(--navy-700)",
                  lineHeight: "var(--lh-body)",
                  maxWidth: "var(--max-prose)",
                }}
              >
                We are a small firm by design. The instruments we deploy are human ones: structured
                attention, disciplined inquiry, pattern recognition, and the honesty to report what the
                survey finds rather than what the client would prefer to hear.
              </p>
            </RevealOnScroll>

            {/* Approach field notes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "var(--space-8)",
              }}
            >
              {APPROACH_NOTES.map((note, i) => (
                <RevealOnScroll key={note.label} delay={i * 80}>
                  <div style={{ borderTop: "1px solid var(--depth-blue-500)", paddingTop: "var(--space-4)" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--type-xs)",
                        fontWeight: 600,
                        letterSpacing: "var(--ls-label)",
                        textTransform: "uppercase",
                        color: "var(--depth-blue-500)",
                        marginBottom: "var(--space-3)",
                      }}
                    >
                      {note.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "var(--type-sm)",
                        color: "var(--navy-700)",
                        lineHeight: "var(--lh-body)",
                      }}
                    >
                      {note.body}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPALS — placeholder pending KRAKEN supply ── */}
      <section className="section" style={{ background: "var(--parchment-300)" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          {/* Navy rule above */}
          <div style={{ height: "1px", background: "var(--navy-900)", opacity: 0.3, marginBottom: "var(--space-10)" }} />
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-xs)",
              fontWeight: 600,
              letterSpacing: "var(--ls-label)",
              textTransform: "uppercase",
              color: "var(--depth-blue-500)",
              marginBottom: "var(--space-4)",
            }}
          >
            Principals
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-base)",
              fontStyle: "italic",
              color: "var(--navy-700)",
              lineHeight: "var(--lh-body)",
              opacity: 0.6,
            }}
          >
            Principals — to be supplied by Kraken Interactive. Section populated on receipt
            of confirmed names and bios.
          </p>
        </div>
      </section>

      {/* ── Capabilities CTA ── */}
      <section className="section" style={{ background: "var(--parchment-100)" }}>
        <div className="container">
          <RevealOnScroll>
            <Link
              href="/capabilities"
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
              The survey instruments →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <CommissionCTA />
    </>
  );
}
