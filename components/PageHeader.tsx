import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  depthMark: string;
}

export default function PageHeader({ title, depthMark }: Props) {
  return (
    <section
      style={{
        background: "var(--parchment-100)",
        paddingTop: "calc(var(--nav-height) + var(--space-20))",
        paddingBottom: "var(--space-16)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3-line contour echo at 15% opacity — inner page survey-zone entry */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 240"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <ellipse cx="1100" cy="90" rx="540" ry="160" fill="none" stroke="var(--depth-blue-500)" strokeWidth="1" />
        <ellipse cx="1100" cy="90" rx="380" ry="110" fill="none" stroke="var(--depth-blue-500)" strokeWidth="1" />
        <ellipse cx="1100" cy="90" rx="230" ry="68" fill="none" stroke="var(--amber-500)" strokeWidth="1.5" />
      </svg>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <p
          className="depth-notation"
          style={{ color: "var(--depth-blue-500)", marginBottom: "var(--space-6)", textAlign: "right" }}
        >
          {depthMark}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--type-3xl)",
            fontWeight: 700,
            color: "var(--navy-900)",
            lineHeight: "var(--lh-heading)",
            letterSpacing: "var(--ls-heading)",
            marginBottom: "var(--space-8)",
          }}
        >
          {title}
        </h1>

        {/* Amber double rule — chart boundary */}
        <div style={{ height: "6px", background: "var(--amber-500)", marginBottom: "2px" }} />
        <div style={{ height: "1px", background: "var(--amber-500)" }} />
      </div>
    </section>
  );
}
