"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export default function ConceptAHeroImmersive({ children }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (videoRef.current) {
            videoRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
          }
          if (imgRef.current) {
            imgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="ca-hero">
      {/* Grain SVG filter definition — hidden, referenced by .ca-hero::after */}
      <svg
        aria-hidden="true"
        focusable="false"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter
            id="ca-grain"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="linearRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves={3}
              stitchTiles="stitch"
              result="noiseOut"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noiseOut"
              result="greyNoise"
            />
            <feBlend
              in="SourceGraphic"
              in2="greyNoise"
              mode="overlay"
              result="blended"
            />
            <feComposite in="blended" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* z-index 2 — video layer, screen blend: dark→transparent, light→glow */}
      <video
        ref={videoRef}
        className="ca-hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/assets/concept-a/hero-depth.mp4" type="video/mp4" />
      </video>

      {/* z-index 3 — static image, same screen blend (always present as visual layer) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/assets/concept-a/hero-depth.jpg"
        alt=""
        aria-hidden="true"
        className="ca-hero-img"
      />

      {/* z-index 5 — text content above all visual layers */}
      <div className="ca-hero-content">
        {children}
      </div>
    </section>
  );
}
