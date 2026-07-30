"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

type ClarityRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ClarityReveal({
  children,
  className = "",
}: ClarityRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 100, damping: 20 });
  const y = useSpring(pointerY, { stiffness: 100, damping: 20 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 55%"],
  });
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(4px)", "blur(0px)"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const maskImage = useMotionTemplate`radial-gradient(circle 150px at ${x}px ${y}px, black 0%, black 55%, transparent 100%)`;

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  return (
    <div
      className={`relative ${className}`}
      onPointerEnter={moveLens}
      onPointerMove={moveLens}
      ref={containerRef}
    >
      <motion.div style={{ filter, opacity }}>{children}</motion.div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
