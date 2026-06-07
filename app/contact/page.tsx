import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CommissionCTA from "@/components/CommissionCTA";
import ContactForm from "@/components/ContactForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Commission a Survey",
  description: "Begin an engagement. Describe the terrain — we will take it from there.",
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Commission a Survey" depthMark="—400m ENGAGE" />

      {/* ── Editorial intro block ── */}
      <section className="section" style={{ background: "var(--parchment-100)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "var(--space-16)",
            }}
          >
            {/* Left: body copy */}
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
                    The right starting point is a conversation, not a brief.
                  </p>
                </blockquote>
              </RevealOnScroll>

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
                  If your organisation is at a strategic inflection point, a KRAKEN survey produces a
                  terrain map no internal team can generate alone. Describe the terrain you are
                  operating in and what you are trying to understand. We will take it from there.
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
                  We take on a limited number of engagements at any one time. If we are not the right
                  firm for this moment, we will say so directly.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right: contact details */}
            <RevealOnScroll delay={120}>
              <div
                style={{
                  borderLeft: "1px solid var(--amber-500)",
                  paddingLeft: "var(--space-8)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-6)",
                  maxWidth: "480px",
                }}
              >
                <div>
                  <p className="depth-notation" style={{ color: "var(--depth-blue-500)", marginBottom: "var(--space-2)" }}>
                    Direct contact
                  </p>
                  <a
                    href="mailto:hello@kraken.com.my"
                    style={{
                      display: "block",
                      fontFamily: "var(--font-body)",
                      fontStyle: "italic",
                      fontSize: "var(--type-lg)",
                      color: "var(--amber-500)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--amber-400)",
                      paddingBottom: "2px",
                      transition: "color var(--dur-fast) var(--ease-survey-out)",
                    }}
                  >
                    hello@kraken.com.my
                  </a>
                </div>

                <div>
                  <p className="depth-notation" style={{ color: "var(--depth-blue-500)", marginBottom: "var(--space-2)" }}>
                    Office
                  </p>
                  <address
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "var(--type-sm)",
                      color: "var(--navy-700)",
                      lineHeight: "1.8",
                      fontStyle: "normal",
                    }}
                  >
                    Kraken Interactive Sdn. Bhd.<br />
                    16-2 Jalan PJU 8/3A, Damansara Perdana<br />
                    47820 Petaling Jaya, Selangor
                  </address>
                </div>

                <div>
                  <p className="depth-notation" style={{ color: "var(--depth-blue-500)", marginBottom: "var(--space-2)" }}>
                    Survey depth
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-xs)",
                      letterSpacing: "var(--ls-label)",
                      color: "var(--depth-blue-400)",
                    }}
                  >
                    —400m ENGAGE
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Contact form section ── */}
      <section className="section" style={{ background: "var(--parchment-200)" }}>
        <div className="container">
          {/* Amber + navy double rule */}
          <div style={{ height: "6px", background: "var(--amber-500)", marginBottom: "2px" }} />
          <div style={{ height: "1px", background: "var(--navy-900)", marginBottom: "var(--space-16)" }} />

          <RevealOnScroll>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-xl)",
                fontWeight: 700,
                color: "var(--navy-900)",
                letterSpacing: "var(--ls-heading)",
                marginBottom: "var(--space-10)",
              }}
            >
              Begin the survey.
            </h2>
          </RevealOnScroll>

          <ContactForm calLink={CAL_LINK} />
        </div>
      </section>

      <CommissionCTA />
    </>
  );
}
