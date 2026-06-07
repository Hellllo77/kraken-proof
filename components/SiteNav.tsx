"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/about",        label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/insights",     label: "Insights" },
  { href: "/contact",      label: "Contact" },
];

export default function SiteNav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [path]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: "var(--nav-height)",
          background: scrolled ? "var(--parchment-200)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(58,110,165,0.3)" : "none",
          transition: "background var(--dur-standard) var(--ease-survey-out), border-bottom var(--dur-standard) var(--ease-survey-out)",
        }}
      >
        <nav
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "var(--type-sm)",
              color: "var(--navy-900)",
              textDecoration: "none",
              letterSpacing: "var(--ls-caps)",
              textTransform: "uppercase",
            }}
          >
            Kraken Interactive
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              gap: "var(--space-10)",
              listStyle: "none",
              alignItems: "center",
            }}
            className="nav-desktop"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const active = path === href || path.startsWith(href + "/");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--type-sm)",
                      fontWeight: active ? 500 : 400,
                      color: active ? "var(--navy-900)" : "var(--navy-700)",
                      textDecoration: "none",
                      letterSpacing: "var(--ls-caps)",
                      textTransform: "uppercase",
                      borderBottom: active ? "2px solid var(--amber-500)" : "2px solid transparent",
                      paddingBottom: "2px",
                      transition: "color var(--dur-fast) var(--ease-survey-out), border-color var(--dur-fast) var(--ease-survey-out)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "var(--space-2)",
              color: "var(--navy-900)",
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-lg)",
              lineHeight: 1,
            }}
            className="nav-hamburger"
          >
            {menuOpen ? "×" : "≡"}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 199,
            background: "var(--navy-900)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "var(--space-12) clamp(16px,2.5vw,32px)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <p className="depth-notation" style={{ color: "var(--depth-blue-400)", marginBottom: "var(--space-10)" }}>
            —Navigation
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--type-2xl)",
                    fontWeight: 600,
                    color: path.startsWith(href) ? "var(--amber-500)" : "var(--parchment-100)",
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Responsive styles via style tag */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
