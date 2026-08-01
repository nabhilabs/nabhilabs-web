"use client";

import {
  useRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
  threshold?: number;
};

type MagneticAnchorProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    as: "a";
    href: string;
  };

type MagneticButtonElProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    as?: "button";
  };

type MagneticButtonProps = MagneticAnchorProps | MagneticButtonElProps;

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function useMagneticHandlers(strength: number, threshold: number) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = event.clientX - cx;
    const dy = event.clientY - cy;

    const pullX = Math.max(-threshold, Math.min(threshold, dx * strength));
    const pullY = Math.max(-threshold, Math.min(threshold, dy * strength));
    el.style.transform = `translate3d(${pullX.toFixed(2)}px, ${pullY.toFixed(2)}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  };

  const style = {
    willChange: "transform",
    transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
  } as CSSProperties;

  return { ref, onMove, onLeave, style };
}

export function MagneticButton(props: MagneticButtonProps) {
  const { children, className = "", strength = 0.35, threshold = 40 } = props;
  const { ref, onMove, onLeave, style } = useMagneticHandlers(
    strength,
    threshold,
  );

  if (props.as === "a") {
    const { as: _as, strength: _s, threshold: _t, ...rest } = props;
    return (
      <a
        {...rest}
        className={`magnetic-ready inline-flex ${className}`}
        onMouseLeave={onLeave}
        onMouseMove={onMove}
        ref={ref as RefObject<HTMLAnchorElement>}
        style={style}
      >
        {children}
      </a>
    );
  }

  const {
    as: _as,
    strength: _s,
    threshold: _t,
    type = "button",
    ...rest
  } = props;

  return (
    <button
      {...rest}
      className={`magnetic-ready inline-flex ${className}`}
      onMouseLeave={onLeave}
      onMouseMove={onMove}
      ref={ref as RefObject<HTMLButtonElement>}
      style={style}
      type={type}
    >
      {children}
    </button>
  );
}
