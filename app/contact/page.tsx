import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Commission a Survey",
  description: "Begin an engagement with Kraken Interactive. Describe the terrain — we will take it from there.",
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="section">
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="depth-notation" style={{ marginBottom: "var(--space-3)" }}>
            Survey Depth: Initial Engagement
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-display)",
              fontWeight: 700,
              color: "var(--color-navy-900)",
              lineHeight: "var(--lh-tight)",
              letterSpacing: "var(--ls-heading)",
              marginBottom: "var(--space-4)",
            }}
          >
            Commission a Survey
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-subhead)",
              color: "var(--color-navy-700)",
              lineHeight: "var(--lh-body)",
              maxWidth: "560px",
              marginBottom: "var(--space-6)",
            }}
          >
            The right starting point is a conversation, not a brief. Describe the terrain you are
            operating in and what you are trying to understand. We will take it from there.
          </p>

          <div
            className="field-note"
            style={{ padding: "var(--space-4)", maxWidth: "560px", marginBottom: "var(--space-6)" }}
          >
            <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>Field Note</p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-body)", color: "var(--color-navy-700)", lineHeight: "var(--lh-body)" }}>
              We take on a limited number of engagements at any one time. If we are not the right firm
              for this moment, we will say so directly.
            </p>
          </div>

          <div style={{ marginBottom: "var(--space-8)" }}>
            <p className="depth-notation" style={{ marginBottom: "var(--space-1)" }}>Direct contact</p>
            <a
              href="mailto:hello@kraken.com.my"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                color: "var(--color-navy-700)",
                textDecoration: "none",
                display: "block",
                marginBottom: "var(--space-2)",
              }}
            >
              hello@kraken.com.my
            </a>
            <address
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-sm)",
                color: "var(--color-navy-400)",
                lineHeight: "var(--lh-body)",
                fontStyle: "normal",
              }}
            >
              Kraken Interactive Sdn. Bhd.<br />
              16-2 Jalan PJU 8/3A, Damansara Perdana<br />
              47820 Petaling Jaya, Selangor
            </address>
          </div>
        </div>
      </section>

      {/* Form + Cal.com */}
      <section
        className="section"
        style={{ borderTop: "1px solid var(--color-parchment-300)" }}
      >
        <div className="container">
          <ContactForm calLink={CAL_LINK} />
        </div>
      </section>
    </>
  );
}
