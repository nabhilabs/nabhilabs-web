"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
};

export function StaggerReveal({
  children,
  className = "",
  delay = 0,
  index = 0,
}: StaggerRevealProps) {
  return (
    <motion.div
      className={`h-full will-change-transform ${className}`}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.55,
        delay: delay + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ amount: 0.2, once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
