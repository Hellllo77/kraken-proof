import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-parchment-300)",
        background: "var(--color-parchment-200)",
        padding: "var(--space-8) 0",
        marginTop: "auto",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-8)",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--type-sm)",
              color: "var(--color-navy-900)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: "var(--space-1)",
            }}
          >
            Kraken Interactive
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-sm)",
              color: "var(--color-navy-400)",
              maxWidth: "320px",
              lineHeight: "var(--lh-body)",
              marginBottom: "var(--space-2)",
            }}
          >
            Strategic intelligence consultancy. We map the terrain before we advise.
          </p>
          <address
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-xs)",
              color: "var(--color-navy-400)",
              lineHeight: "var(--lh-body)",
              fontStyle: "normal",
              marginBottom: "var(--space-1)",
            }}
          >
            Kraken Interactive Sdn. Bhd.<br />
            16-2 Jalan PJU 8/3A, Damansara Perdana<br />
            47820 Petaling Jaya, Selangor
          </address>
          <a
            href="mailto:hello@kraken.com.my"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--type-xs)",
              color: "var(--color-navy-500)",
              textDecoration: "none",
            }}
          >
            hello@kraken.com.my
          </a>
        </div>

        <nav>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
            {[
              { href: "/about",        label: "The Cartographers" },
              { href: "/capabilities", label: "The Survey Instruments" },
              { href: "/insights",     label: "Dispatches from the Field" },
              { href: "/contact",      label: "Commission a Survey" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--type-sm)",
                    color: "var(--color-navy-600)",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className="container"
        style={{
          borderTop: "1px solid var(--color-parchment-300)",
          marginTop: "var(--space-6)",
          paddingTop: "var(--space-4)",
        }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--type-xs)", color: "var(--color-navy-400)" }}>
          © {new Date().getFullYear()} Kraken Interactive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
