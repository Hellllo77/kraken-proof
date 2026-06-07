"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  staggerCount: number;
}

export default function InstrumentReveal({ children, staggerCount }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rows = container.querySelectorAll<HTMLElement>(".reveal-row");

    if (reduced) {
      rows.forEach((r) => r.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          rows.forEach((row, i) => {
            setTimeout(() => row.classList.add("is-visible"), i * 60);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [staggerCount]);

  return <div ref={ref}>{children}</div>;
}
