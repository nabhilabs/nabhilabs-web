"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";

export function AmbientLight() {
  const cursorX = useMotionValue(-400);
  const cursorY = useMotionValue(-400);
  const x = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const y = useSpring(cursorY, { stiffness: 100, damping: 20 });
  const background = useMotionTemplate`radial-gradient(400px at ${x}px ${y}px, rgba(205,224,184,0.18), transparent 80%)`;

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background }}
    />
  );
}
