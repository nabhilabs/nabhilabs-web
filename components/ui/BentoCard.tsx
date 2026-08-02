import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export function BentoCard({ children, className = "" }: BentoCardProps) {
  return (
    <div
      className={`bento-card group relative transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 ${className}`}
    >
      <span aria-hidden className="bento-card__glow pointer-events-none" />
      {children}
    </div>
  );
}
