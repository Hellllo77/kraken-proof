"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function ConceptANav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ca-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Site navigation">
      <div className="ca-nav-inner">
        <Link href="/concept-a" className="ca-nav-logo">
          Kraken
        </Link>
        <ul className="ca-nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className="ca-nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
