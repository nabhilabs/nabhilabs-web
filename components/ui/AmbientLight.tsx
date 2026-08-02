"use client";

import { useEffect, useRef } from "react";

/** Cursor glow without Motion — CSS variables + rAF. */
export function AmbientLight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    let targetX = -400;
    let targetY = -400;
    let currentX = -400;
    let currentY = -400;
    let raf = 0;

    const tick = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      node.style.setProperty("--ax", `${currentX}px`);
      node.style.setProperty("--ay", `${currentY}px`);
      raf = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      ref={ref}
      style={{
        background:
          "radial-gradient(400px at var(--ax, -400px) var(--ay, -400px), rgba(205,224,184,0.18), transparent 80%)",
      }}
    />
  );
}
