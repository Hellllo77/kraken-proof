"use client";
import { useEffect, useRef } from "react";

// 14 concentric irregular contour loops radiating from focal point (30%, 20% of viewport)
// Computed as cubic-bezier ellipses with slight organic variance per loop
// ViewBox: 1440×900; focal: cx=432, cy=170
// Stroke properties: inner=depth-blue-500, loop5=amber (strategic zone), outer=depth-blue-400

type ContourDef = {
  d: string;
  stroke: string;
  strokeWidth: number;
  opacity: number;
  delay: number;
};

const CONTOURS: ContourDef[] = [
  // Loop 1 — innermost, tightest (rx=60 ry=40)
  {
    d: "M432,130 C465,130 492,148 492,170 C492,193 465,210 432,210 C399,210 372,193 372,170 C372,148 399,130 432,130 Z",
    stroke: "#3A6EA5", strokeWidth: 2, opacity: 0.5, delay: 0,
  },
  // Loop 2 (rx=130 ry=85)
  {
    d: "M432,85 C504,85 562,123 562,170 C562,217 504,255 432,255 C360,255 302,217 302,170 C302,123 360,85 432,85 Z",
    stroke: "#3A6EA5", strokeWidth: 1.5, opacity: 0.45, delay: 80,
  },
  // Loop 3 (rx=220 ry=145)
  {
    d: "M432,25 C553,25 652,90 652,170 C652,250 553,315 432,315 C311,315 212,250 212,170 C212,90 311,25 432,25 Z",
    stroke: "#3A6EA5", strokeWidth: 1, opacity: 0.4, delay: 160,
  },
  // Loop 4 (rx=330 ry=210)
  {
    d: "M432,-40 C614,-40 762,54 762,170 C762,287 614,380 432,380 C250,380 102,287 102,170 C102,54 250,-40 432,-40 Z",
    stroke: "#3A6EA5", strokeWidth: 1, opacity: 0.35, delay: 240,
  },
  // Loop 5 — AMBER strategic zone (rx=420 ry=270)
  {
    d: "M432,-100 C664,-100 852,21 852,170 C852,319 664,440 432,440 C200,440 12,319 12,170 C12,21 200,-100 432,-100 Z",
    stroke: "#C6862E", strokeWidth: 1.5, opacity: 0.6, delay: 320,
  },
  // Loop 6 (rx=530 ry=340)
  {
    d: "M432,-170 C725,-170 962,-18 962,170 C962,358 725,510 432,510 C139,510 -98,358 -98,170 C-98,-18 139,-170 432,-170 Z",
    stroke: "#3A6EA5", strokeWidth: 0.75, opacity: 0.3, delay: 400,
  },
  // Loop 7 (rx=650 ry=415)
  {
    d: "M432,-245 C791,-245 1082,-58 1082,170 C1082,399 791,585 432,585 C73,585 -218,399 -218,170 C-218,-58 73,-245 432,-245 Z",
    stroke: "#3A6EA5", strokeWidth: 0.75, opacity: 0.25, delay: 480,
  },
  // Loop 8 (rx=780 ry=480)
  {
    d: "M432,-310 C863,-310 1212,-95 1212,170 C1212,435 863,650 432,650 C1,650 -348,435 -348,170 C-348,-95 1,-310 432,-310 Z",
    stroke: "#5288BC", strokeWidth: 0.75, opacity: 0.22, delay: 560,
  },
  // Loop 9 (rx=920 ry=550)
  {
    d: "M432,-380 C940,-380 1352,-133 1352,170 C1352,474 940,720 432,720 C-76,720 -488,474 -488,170 C-488,-133 -76,-380 432,-380 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.18, delay: 640,
  },
  // Loop 10 (rx=1060 ry=620)
  {
    d: "M432,-450 C1018,-450 1492,-172 1492,170 C1492,513 1018,790 432,790 C-154,790 -628,513 -628,170 C-628,-172 -154,-450 432,-450 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.15, delay: 720,
  },
  // Loop 11 (rx=1200 ry=692)
  {
    d: "M432,-522 C1094,-522 1632,-212 1632,170 C1632,553 1094,862 432,862 C-230,862 -768,553 -768,170 C-768,-212 -230,-522 432,-522 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.12, delay: 800,
  },
  // Loop 12 (rx=1350 ry=760)
  {
    d: "M432,-590 C1178,-590 1782,-250 1782,170 C1782,591 1178,930 432,930 C-314,930 -918,591 -918,170 C-918,-250 -314,-590 432,-590 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.1, delay: 880,
  },
  // Loop 13 (rx=1500 ry=835)
  {
    d: "M432,-665 C1260,-665 1932,-291 1932,170 C1932,632 1260,1005 432,1005 C-396,1005 -1068,632 -1068,170 C-1068,-291 -396,-665 432,-665 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.07, delay: 960,
  },
  // Loop 14 — outermost (rx=1660 ry=910)
  {
    d: "M432,-740 C1348,-740 2092,-331 2092,170 C2092,672 1348,1080 432,1080 C-484,1080 -1228,672 -1228,170 C-1228,-331 -484,-740 432,-740 Z",
    stroke: "#5288BC", strokeWidth: 0.5, opacity: 0.05, delay: 1040,
  },
];

export default function HeroContour() {
  const svgRef = useRef<SVGSVGElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGPathElement>(".contour-path");

    if (reduced) {
      // Static: all loops fully drawn immediately
      paths.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len}`;
        p.style.strokeDashoffset = "0";
      });
      return;
    }

    // Animated draw-in: set dasharray to path length, then trigger CSS animation
    paths.forEach((path, i) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
      const delay = CONTOURS[i]?.delay ?? i * 80;
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset 800ms cubic-bezier(0.6, 0, 0.4, 1) 0ms`;
        path.style.strokeDashoffset = "0";
      }, delay);
    });

    // Parallax: 3 groups at different scroll rates
    // Layer depths: deep (0.15×), mid (0.08×), surface (0.03×)
    const handleScroll = () => {
      const y = window.scrollY;
      const deep = svg.querySelector<SVGGElement>("#layer-deep");
      const mid  = svg.querySelector<SVGGElement>("#layer-mid");
      const surf = svg.querySelector<SVGGElement>("#layer-surf");
      if (deep) deep.style.transform = `translateY(${y * 0.15}px)`;
      if (mid)  mid.style.transform  = `translateY(${y * 0.08}px)`;
      if (surf) surf.style.transform = `translateY(${y * 0.03}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // Split contours into 3 parallax layers
  const deep = CONTOURS.slice(0, 5);   // innermost — largest scroll offset
  const mid  = CONTOURS.slice(5, 9);   // mid
  const surf = CONTOURS.slice(9);       // outermost — smallest scroll offset

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMinYMin slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <g id="layer-deep" style={{ willChange: "transform" }}>
        {deep.map((c, i) => (
          <path
            key={`deep-${i}`}
            className="contour-path"
            d={c.d}
            fill="none"
            stroke={c.stroke}
            strokeWidth={c.strokeWidth}
            opacity={c.opacity}
          />
        ))}
      </g>
      <g id="layer-mid" style={{ willChange: "transform" }}>
        {mid.map((c, i) => (
          <path
            key={`mid-${i}`}
            className="contour-path"
            d={c.d}
            fill="none"
            stroke={c.stroke}
            strokeWidth={c.strokeWidth}
            opacity={c.opacity}
          />
        ))}
      </g>
      <g id="layer-surf" style={{ willChange: "transform" }}>
        {surf.map((c, i) => (
          <path
            key={`surf-${i}`}
            className="contour-path"
            d={c.d}
            fill="none"
            stroke={c.stroke}
            strokeWidth={c.strokeWidth}
            opacity={c.opacity}
          />
        ))}
      </g>

      {/* Depth notation labels at loop endpoints */}
      <text x="780" y="168" fontFamily="var(--font-display)" fontSize="9" fill="#C6862E" opacity="0.7" letterSpacing="0.08em">—40m UNDERSTAND</text>
      <text x="950" y="168" fontFamily="var(--font-display)" fontSize="8" fill="#3A6EA5" opacity="0.5" letterSpacing="0.08em">—120m SURVEY</text>
      <text x="1060" y="168" fontFamily="var(--font-display)" fontSize="7" fill="#3A6EA5" opacity="0.35" letterSpacing="0.08em">—260m ANALYSE</text>
      <text x="1140" y="168" fontFamily="var(--font-display)" fontSize="7" fill="#5288BC" opacity="0.25" letterSpacing="0.08em">—400m CHART</text>
    </svg>
  );
}
