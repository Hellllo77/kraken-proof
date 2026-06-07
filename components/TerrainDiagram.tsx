"use client";
import { useState, useCallback } from "react";

interface Zone {
  id: string;
  name: string;
  depth: string;
  desc: string;
  isAmber: boolean;
  // SVG polygon points (800×480 viewBox)
  points: string;
  labelX: number;
  labelY: number;
}

const ZONES: Zone[] = [
  {
    id: "01",
    name: "Strategic Intelligence",
    depth: "—260m",
    desc: "Establishing what the actual problem is before any other survey work begins. The opening arm — and the one most frequently abbreviated.",
    isAmber: true,
    points: "420,100 760,100 800,160 800,300 680,340 420,320 380,220 400,140",
    labelX: 590,
    labelY: 210,
  },
  {
    id: "03",
    name: "Technology Intelligence",
    depth: "—80m",
    desc: "Determining what the organisation can actually execute digitally before any recommendation is made.",
    isAmber: false,
    points: "0,0 800,0 800,100 420,100 400,140 0,140",
    labelX: 370,
    labelY: 55,
  },
  {
    id: "05",
    name: "Communication Intelligence",
    depth: "—120m",
    desc: "Examining how the business presents itself externally and communicates internally.",
    isAmber: false,
    points: "0,140 400,140 380,220 420,320 240,360 0,340",
    labelX: 190,
    labelY: 235,
  },
  {
    id: "07",
    name: "Market & Competitive Intelligence",
    depth: "—160m",
    desc: "Documenting the competitive landscape as it exists — not as leadership perceives it.",
    isAmber: false,
    points: "240,360 420,320 680,340 800,300 800,440 400,480 200,480",
    labelX: 490,
    labelY: 395,
  },
  {
    id: "02",
    name: "Operational Intelligence",
    depth: "—100m",
    desc: "Mapping how the business actually operates — where decisions stall, effort duplicates, and friction compounds.",
    isAmber: false,
    points: "0,340 240,360 200,480 0,480",
    labelX: 95,
    labelY: 415,
  },
  {
    id: "04",
    name: "People & Culture Intelligence",
    depth: "—140m",
    desc: "Surveying both the formal structure and the informal systems beneath it.",
    isAmber: false,
    points: "800,300 800,440 680,340",
    labelX: 750,
    labelY: 365,
  },
  {
    id: "06",
    name: "Data & Analytics Intelligence",
    depth: "—180m",
    desc: "Establishing the quality and completeness of the evidence base that strategic decisions rest on.",
    isAmber: false,
    points: "0,0 0,140 400,140 420,100",
    labelX: 185,
    labelY: 70,
  },
  {
    id: "08",
    name: "Transformation Intelligence",
    depth: "—400m",
    desc: "Ensuring the map produced by the preceding seven arms is followed through execution.",
    isAmber: false,
    points: "800,440 800,480 400,480 200,480 400,480 680,340",
    labelX: 700,
    labelY: 460,
  },
];

export default function TerrainDiagram() {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const handleKey = useCallback(
    (e: React.KeyboardEvent, id: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveZone((prev) => (prev === id ? null : id));
      }
      if (e.key === "Escape") setActiveZone(null);
    },
    []
  );

  const activeData = ZONES.find((z) => z.id === activeZone);

  return (
    <div
      aria-label="KRAKEN Interactive — Eight Survey Instruments terrain map"
      style={{ width: "100%", position: "relative" }}
    >
      {/* Terrain SVG */}
      <svg
        viewBox="0 0 800 480"
        width="100%"
        height="auto"
        style={{ display: "block", background: "var(--navy-900)", maxHeight: "480px" }}
        role="img"
      >
        {/* Grid overlay — faint 20px mesh */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1A3A5C" strokeWidth="0.4" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="800" height="480" fill="url(#grid)" />

        {ZONES.map((zone) => {
          const isActive = activeZone === zone.id;
          const fillColor = zone.isAmber ? "#C6862E" : "#3A6EA5";
          const fillOpacity = isActive ? 0.22 : 0.08;
          const strokeOpacity = zone.isAmber ? (isActive ? 1 : 0.8) : (isActive ? 0.85 : 0.35);
          const strokeWidth = zone.isAmber ? "1.5" : "1";

          return (
            <g
              key={zone.id}
              role="button"
              tabIndex={0}
              aria-label={`${zone.name} — ${zone.depth} — ${zone.desc}`}
              aria-pressed={isActive}
              onClick={() => setActiveZone((prev) => (prev === zone.id ? null : zone.id))}
              onKeyDown={(e) => handleKey(e, zone.id)}
              style={{ cursor: "pointer", outline: "none" }}
            >
              <polygon
                points={zone.points}
                fill={fillColor}
                fillOpacity={fillOpacity}
                stroke={fillColor}
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
                style={{ transition: "fill-opacity 0.25s, stroke-opacity 0.25s" }}
              />
              {/* Zone label */}
              <text
                x={zone.labelX}
                y={zone.labelY - 8}
                textAnchor="middle"
                fontFamily="var(--font-display, system-ui)"
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="0.08em"
                fill={zone.isAmber ? "#C6862E" : "#EBE4D6"}
                fillOpacity={isActive ? 1 : 0.75}
                style={{ textTransform: "uppercase", pointerEvents: "none" }}
              >
                {zone.name.toUpperCase()}
              </text>
              {/* Depth mark */}
              <text
                x={zone.labelX}
                y={zone.labelY + 4}
                textAnchor="middle"
                fontFamily="var(--font-display, system-ui)"
                fontSize="7"
                fill={zone.isAmber ? "#D89B40" : "#5288BC"}
                fillOpacity={0.7}
                style={{ pointerEvents: "none" }}
              >
                {zone.depth}
              </text>
              {/* Active focus ring */}
              {isActive && (
                <polygon
                  points={zone.points}
                  fill="none"
                  stroke="#C6862E"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                  strokeDasharray="4 2"
                />
              )}
            </g>
          );
        })}

        {/* Central focal marker on Strategic Intelligence */}
        <circle cx="590" cy="210" r="4" fill="#C6862E" fillOpacity="0.6" />
        <circle cx="590" cy="210" r="8" fill="none" stroke="#C6862E" strokeWidth="0.75" strokeOpacity="0.4" />

        {/* Compass rose — bottom right */}
        <g transform="translate(760, 455)" opacity="0.3">
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#EBE4D6" strokeWidth="0.75" />
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#EBE4D6" strokeWidth="0.75" />
          <text x="0" y="-13" textAnchor="middle" fontSize="6" fill="#EBE4D6" fontFamily="system-ui">N</text>
        </g>
      </svg>

      {/* Active zone description panel */}
      {activeData && (
        <div
          role="region"
          aria-live="polite"
          style={{
            background: "var(--navy-800)",
            borderTop: `2px solid ${activeData.isAmber ? "var(--amber-500)" : "var(--depth-blue-500)"}`,
            padding: "var(--space-6) var(--space-8)",
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            gap: "var(--space-6)",
            alignItems: "start",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--type-2xs)",
              fontWeight: 600,
              letterSpacing: "var(--ls-label)",
              textTransform: "uppercase",
              color: activeData.isAmber ? "var(--amber-500)" : "var(--depth-blue-400)",
              minWidth: "28px",
            }}
          >
            {activeData.id}
          </span>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--type-sm)",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: activeData.isAmber ? "var(--amber-500)" : "var(--parchment-100)",
                marginBottom: "var(--space-2)",
              }}
            >
              {activeData.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--type-sm)",
                color: "var(--parchment-400)",
                lineHeight: "var(--lh-body)",
              }}
            >
              {activeData.desc}
            </p>
          </div>
          <p
            className="depth-notation"
            style={{ color: activeData.isAmber ? "var(--amber-400)" : "var(--depth-blue-400)", whiteSpace: "nowrap" }}
          >
            {activeData.depth}
          </p>
        </div>
      )}

      {/* Accessibility: full text list for screen readers */}
      <ul
        aria-label="All eight survey instruments"
        style={{ position: "absolute", left: "-9999px", top: 0, width: "1px", height: "1px", overflow: "hidden" }}
      >
        {ZONES.map((z) => (
          <li key={z.id}>{z.name}: {z.desc}</li>
        ))}
      </ul>
    </div>
  );
}
