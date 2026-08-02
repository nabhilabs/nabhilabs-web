import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Server-friendly reveal — CSS handles motion via .reveal-block when desired. */
export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={`reveal-block ${className}`}>{children}</div>;
}
