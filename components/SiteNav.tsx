"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/about",        label: "The Cartographers" },
  { href: "/capabilities", label: "The Survey Instruments" },
  { href: "/insights",     label: "Dispatches" },
  { href: "/contact",      label: "Commission a Survey" },
];

export default function SiteNav() {
  const path = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-parchment-300)",
        background: "var(--color-parchment-100)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "var(--space-3)",
          paddingBottom: "var(--space-3)",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "var(--type-subhead)",
            color: "var(--color-navy-900)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          Kraken Interactive
        </Link>

        {/* Nav links */}
        <ul
          style={{
            display: "flex",
            gap: "var(--space-6)",
            listStyle: "none",
            alignItems: "center",
          }}
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
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--color-navy-900)" : "var(--color-navy-700)",
                    textDecoration: "none",
                    borderBottom: active ? "1px solid var(--color-amber-600)" : "none",
                    paddingBottom: "2px",
                    transition: "color var(--dur-fast)",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
