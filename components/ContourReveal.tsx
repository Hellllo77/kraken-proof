"use client";
import { useEffect, useRef } from "react";

/**
 * Terrain contour SVG — placeholder that will be replaced by Mira's design system.
 * Current implementation: animated depth-contour SVG in parchment+navy+amber palette.
 * Contour lines draw-in on IntersectionObserver (no scroll-scrub per design spec).
 */
export default function ContourReveal() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>(".contour-path");

    if (reduced) {
      paths.forEach((p) => p.classList.add("is-drawn"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          paths.forEach((path, i) => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = String(len);
            path.style.strokeDashoffset = String(len);
            setTimeout(() => path.classList.add("is-drawn"), i * 120);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(svg);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="container"
      style={{ marginTop: "var(--space-12)", opacity: 0.35 }}
      aria-hidden="true"
    >
      {/* Placeholder terrain contour — Mira replaces with 8-capability terrain diagram */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 200"
        width="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Contour bands — simplified placeholder */}
        <path
          className="contour-path"
          d="M 0 180 Q 100 120 200 140 Q 300 160 400 100 Q 500 40 600 80 Q 700 120 800 60"
          stroke="#0d1b2a"
          strokeWidth="1"
        />
        <path
          className="contour-path"
          d="M 0 160 Q 100 100 200 120 Q 300 140 400 80 Q 500 20 600 60 Q 700 100 800 40"
          stroke="#0d1b2a"
          strokeWidth="0.75"
        />
        <path
          className="contour-path"
          d="M 0 200 Q 150 140 300 160 Q 450 180 600 120 Q 700 80 800 100"
          stroke="#b45309"
          strokeWidth="1.5"
        />
        <path
          className="contour-path"
          d="M 50 190 Q 200 130 350 150 Q 500 170 650 110 Q 750 70 800 90"
          stroke="#0d1b2a"
          strokeWidth="0.5"
        />
        <path
          className="contour-path"
          d="M 0 140 Q 120 80 250 100 Q 380 120 500 60 Q 620 0 750 30 Q 780 40 800 20"
          stroke="#0d1b2a"
          strokeWidth="0.5"
        />
        {/* Depth notation labels */}
        <text x="10" y="176" fontFamily="monospace" fontSize="8" fill="#b45309" opacity="0.8">— 80m</text>
        <text x="10" y="156" fontFamily="monospace" fontSize="8" fill="#243b55" opacity="0.8">— 60m</text>
        <text x="10" y="136" fontFamily="monospace" fontSize="8" fill="#243b55" opacity="0.8">— 40m</text>
      </svg>
    </div>
  );
}
