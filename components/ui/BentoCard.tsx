"use client";

import { useRef, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export function BentoCard({ children, className = "" }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    el.style.setProperty("--tilt-x", `${(-py * 4).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * 4).toFixed(2)}deg`);
    el.style.setProperty("--spot-x", `${x}px`);
    el.style.setProperty("--spot-y", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  const style = {
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
    "--spot-x": "50%",
    "--spot-y": "50%",
    transform:
      "perspective(1000px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y))",
  } as CSSProperties;

  return (
    <div
      className={`bento-card group relative will-change-transform transition-[transform,border-color,background-color] duration-300 ease-out ${className}`}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      ref={ref}
      style={style}
    >
      <span aria-hidden className="bento-card__glow pointer-events-none" />
      {children}
    </div>
  );
}
