"use client";
import dynamic from "next/dynamic";

// HeroContour uses browser APIs (getTotalLength, scroll events) — client-only
const HeroContour = dynamic(() => import("./HeroContour"), { ssr: false });

export default function ClientHeroContour() {
  return <HeroContour />;
}
