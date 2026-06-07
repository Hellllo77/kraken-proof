import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export const TestRender: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const scale = spring({
    frame,
    fps,
    config: { damping: 80, stiffness: 200 },
    from: 0.85,
    to: 1,
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#050A0F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ opacity, transform: `scale(${scale})`, textAlign: "center" }}>
        <div
          style={{
            color: "#C9A96E",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Strategic Intelligence
        </div>
        <div
          style={{
            color: "#E8E0D4",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          KRAKEN
        </div>
        <div
          style={{
            color: "#7A8C9A",
            fontSize: 20,
            letterSpacing: "0.25em",
            marginTop: 8,
          }}
        >
          Interactive
        </div>
      </div>
    </div>
  );
};
