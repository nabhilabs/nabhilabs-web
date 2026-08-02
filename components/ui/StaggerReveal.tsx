"use client";

import { useEffect, useRef, type ReactNode } from "react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

/** Lightweight stagger reveal — no Motion dependency. */
export function StaggerReveal({
  children,
  className = "",
  delay = 0,
  index = 0,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.revealed = "true";
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        window.setTimeout(() => {
          node.dataset.revealed = "true";
        }, delay + index * 100);
        io.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [delay, index]);

  return (
    <div
      className={`reveal-block h-full ${className}`}
      ref={ref}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      {children}
    </div>
  );
}
