import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Cartographers",
  description: "We began in 2008 as a digital agency. We are a strategic intelligence consultancy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
            Survey Depth: Methodology
          </div>
          <p className="depth-notation" style={{ color: "var(--color-navy-400)", marginBottom: "var(--space-3)" }}>
            How We Learned to Ask Better Questions
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-6)",
            }}
          >
            The Cartographers
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            {/* Origin */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-heading)",
                  fontWeight: 600,
                  color: "var(--color-navy-900)",
                  marginBottom: "var(--space-3)",
                }}
              >
                Origin
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-2)" }}>
                We began in 2008 as a digital agency. We were capable practitioners: websites built to brief,
                campaigns executed on time, projects delivered within scope. Clients were professionally satisfied.
                The work was technically sound.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                And then, consistently, the results did not match the expectations. Not our results. Theirs.
              </p>
            </div>

            {/* The Diagnosis */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-heading)",
                  fontWeight: 600,
                  color: "var(--color-navy-900)",
                  marginBottom: "var(--space-3)",
                }}
              >
                The Diagnosis
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-2)" }}>
                Understanding what was happening took several years — which is itself instructive about the
                difficulty of accurate self-diagnosis. What we eventually mapped was this: we had been answering
                questions that had not yet been properly asked.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                Clients arrived with a solution already in mind and we had delivered it without examining
                the premises. The actual problem lived deeper in the terrain. In the structural assumptions
                leadership had never examined. In the gap between the strategy on paper and the organisation&apos;s
                actual capacity to execute it.
              </p>
            </div>

            {/* The Repositioning */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-heading)",
                  fontWeight: 600,
                  color: "var(--color-navy-900)",
                  marginBottom: "var(--space-3)",
                }}
              >
                The Repositioning
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-2)" }}>
                Shifting from a firm that delivers to a firm that diagnoses first is not a comfortable transition.
                It means entering engagements without a predetermined output. It means turning down projects where
                the client wants immediate execution.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                The repositioning was complete by 2015. Since then, Kraken Interactive has operated as a
                strategic intelligence consultancy: engaged before the brief is finalised, not after it has
                been written. The recommendation is only as good as the survey that precedes it.
              </p>
            </div>

            {/* How We Work */}
            <div
              className="field-note"
              style={{ padding: "var(--space-4)" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-heading)",
                  fontWeight: 600,
                  color: "var(--color-navy-900)",
                  marginBottom: "var(--space-3)",
                }}
              >
                How We Work
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)", marginBottom: "var(--space-2)" }}>
                We are a small firm by design. The instruments we deploy are human ones: structured attention,
                disciplined inquiry, pattern recognition developed over seventeen years of fieldwork, and the
                honesty to report what the survey finds rather than what the client would prefer to hear.
              </p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
                These instruments do not scale through headcount. The same people who conduct the site walk
                are the ones who write the recommendations and remain present through delivery. This limits
                how many surveys we can run simultaneously. We take on engagements accordingly.
              </p>
            </div>

            {/* Principals — placeholder for copy */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--type-heading)",
                  fontWeight: 600,
                  color: "var(--color-navy-900)",
                  marginBottom: "var(--space-3)",
                }}
              >
                The Principals
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-400)", lineHeight: "var(--lh-body)", fontStyle: "italic" }}>
                [ Principal bios — copy to be provided by client. See research-lead brief. ]
              </p>
            </div>
          </div>

          <div style={{ marginTop: "var(--space-8)" }}>
            <Link href="/capabilities" style={{ fontFamily: "var(--font-display)", fontSize: "var(--type-sm)", color: "var(--color-navy-600)" }}>
              The survey instruments →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
