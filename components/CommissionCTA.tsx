import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

export default function CommissionCTA() {
  return (
    <section
      style={{
        background: "var(--navy-900)",
        paddingTop: "var(--space-32)",
        paddingBottom: "var(--space-32)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Echo contour SVG — 8% opacity */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.08,
          pointerEvents: "none",
        }}
      >
        <ellipse cx="720" cy="200" rx="600" ry="160" fill="none" stroke="#3A6EA5" strokeWidth="1" />
        <ellipse cx="720" cy="200" rx="480" ry="120" fill="none" stroke="#3A6EA5" strokeWidth="1" />
        <ellipse cx="720" cy="200" rx="360" ry="85"  fill="none" stroke="#C6862E" strokeWidth="1.5" />
        <ellipse cx="720" cy="200" rx="240" ry="55"  fill="none" stroke="#3A6EA5" strokeWidth="1" />
        <ellipse cx="720" cy="200" rx="120" ry="30"  fill="none" stroke="#3A6EA5" strokeWidth="1" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 2, maxWidth: "720px" }}>
        <RevealOnScroll>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-2xl)",
              fontWeight: 500,
              letterSpacing: "var(--ls-label)",
              textTransform: "uppercase",
              fontVariant: "small-caps",
              color: "var(--amber-500)",
              marginBottom: "var(--space-8)",
            }}
          >
            Commission a Survey
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)",
              justifyContent: "center",
              marginBottom: "var(--space-10)",
            }}
          >
            <div style={{ height: "1px", width: "60px", background: "var(--depth-blue-600)" }} />
            <span className="depth-notation" style={{ color: "var(--depth-blue-400)" }}>—400m COMMISSION</span>
            <div style={{ height: "1px", width: "60px", background: "var(--depth-blue-600)" }} />
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-md)",
              color: "var(--parchment-100)",
              lineHeight: "var(--lh-body)",
              maxWidth: "60ch",
              margin: "0 auto var(--space-10)",
              opacity: 0.9,
            }}
          >
            If your organisation is at a strategic inflection point, a KRAKEN survey produces a
            terrain map no internal team can generate alone.
          </p>

          <a
            href="mailto:hello@kraken.com.my"
            style={{
              display: "block",
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              fontSize: "var(--type-xl)",
              color: "var(--amber-500)",
              textDecoration: "none",
              borderBottom: "1px solid var(--amber-400)",
              paddingBottom: "2px",
              marginBottom: "var(--space-12)",
              transition: "color var(--dur-fast) var(--ease-survey-out)",
            }}
          >
            hello@kraken.com.my
          </a>

          <Link href="/contact" className="btn-ghost">
            Commission a survey →
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
