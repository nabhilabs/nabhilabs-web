"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";

/** Attach pointer-driven tilt + spotlight CSS vars to any element */
export function usePointerTilt(strength = 5) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = (x / rect.width) * 2 - 1;
    const py = (y / rect.height) * 2 - 1;
    el.style.setProperty("--tilt-x", `${(-py * strength).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * strength).toFixed(2)}deg`);
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

  return { ref, onMove, onLeave, style };
}
