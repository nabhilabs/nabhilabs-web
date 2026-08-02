import type { ReactNode } from "react";

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
    <div
      className={`reveal-block h-full ${className}`}
      style={{ transitionDelay: `${delay + index * 100}ms` }}
    >
      {children}
    </div>
  );
}
