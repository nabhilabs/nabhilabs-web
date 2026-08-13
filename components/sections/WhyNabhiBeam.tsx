"use client";

import Image from "next/image";
import {
  forwardRef,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type RefObject,
} from "react";
import {
  Database,
  Eye,
  FileText,
  Layers3,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { cn } from "@/lib/cn";

type CircleProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ className, children, ...props }, ref) => (
    <div
      className={cn(
        "z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-[#cde0b8]/25 bg-[#1a3323] text-[#cde0b8] shadow-[0_0_24px_rgba(163,230,53,0.08)]",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);
Circle.displayName = "Circle";

type BeamNodeProps = {
  icon: ReactNode;
  label: string;
  side: "left" | "right";
  circleRef: RefObject<HTMLDivElement | null>;
};

function BeamNode({ icon, label, side, circleRef }: BeamNodeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        side === "right" ? "flex-row-reverse text-right" : "flex-row text-left",
      )}
    >
      <Circle ref={circleRef}>{icon}</Circle>
      <p className="max-w-[7.5rem] font-mono text-[9px] uppercase leading-4 tracking-[0.12em] text-white/55 sm:max-w-[9rem]">
        {label}
      </p>
    </div>
  );
}

export function WhyNabhiBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const left1Ref = useRef<HTMLDivElement>(null);
  const left2Ref = useRef<HTMLDivElement>(null);
  const left3Ref = useRef<HTMLDivElement>(null);
  const left4Ref = useRef<HTMLDivElement>(null);
  const right1Ref = useRef<HTMLDivElement>(null);
  const right2Ref = useRef<HTMLDivElement>(null);
  const right3Ref = useRef<HTMLDivElement>(null);
  const right4Ref = useRef<HTMLDivElement>(null);

  const leftNodes = [
    {
      label: "Documents",
      icon: <FileText aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: left1Ref,
      curvature: 55,
    },
    {
      label: "Conversations",
      icon: <MessageSquare aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: left2Ref,
      curvature: 20,
    },
    {
      label: "Systems data",
      icon: <Database aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: left3Ref,
      curvature: -20,
    },
    {
      label: "People & roles",
      icon: <Users aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: left4Ref,
      curvature: -55,
    },
  ] as const;

  const rightNodes = [
    {
      label: "Active clarity",
      icon: <Sparkles aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: right1Ref,
      curvature: 55,
    },
    {
      label: "Trusted decisions",
      icon: <ShieldCheck aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: right2Ref,
      curvature: 20,
    },
    {
      label: "Connected context",
      icon: <Layers3 aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: right3Ref,
      curvature: -20,
    },
    {
      label: "Shared visibility",
      icon: <Eye aria-hidden className="size-4" strokeWidth={1.75} />,
      ref: right4Ref,
      curvature: -55,
    },
  ] as const;

  return (
    <div
      className="relative mx-auto flex h-[28rem] w-full max-w-4xl items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#071c14]/60 p-6 sm:h-[30rem] md:p-10"
      ref={containerRef}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.1),transparent_55%)]"
      />

      <div className="relative z-[1] flex size-full max-w-3xl flex-row items-stretch justify-between gap-4 sm:gap-8">
        <div className="flex flex-col justify-center gap-5 sm:gap-6">
          {leftNodes.map((node) => (
            <BeamNode
              circleRef={node.ref}
              icon={node.icon}
              key={node.label}
              label={node.label}
              side="left"
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <Circle
            className="size-16 border-[#a3e635]/35 bg-[#0f1c13] shadow-[0_0_40px_rgba(163,230,53,0.18)] sm:size-[4.5rem]"
            ref={centerRef}
          >
            <Image
              alt="Nabhi Labs"
              className="object-contain"
              height={36}
              src="/favicon.svg"
              width={36}
            />
          </Circle>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#a3e635]">
            Nabhi
          </p>
        </div>

        <div className="flex flex-col justify-center gap-5 sm:gap-6">
          {rightNodes.map((node) => (
            <BeamNode
              circleRef={node.ref}
              icon={node.icon}
              key={node.label}
              label={node.label}
              side="right"
            />
          ))}
        </div>
      </div>

      {leftNodes.map((node, index) => (
        <AnimatedBeam
          containerRef={containerRef}
          curvature={node.curvature}
          delay={0.15 * index}
          duration={4.5}
          fromRef={node.ref}
          gradientStartColor="#cde0b8"
          gradientStopColor="#a3e635"
          key={`in-${node.label}`}
          pathColor="rgba(205,224,184,0.22)"
          pathWidth={1.75}
          toRef={centerRef}
        />
      ))}

      {rightNodes.map((node, index) => (
        <AnimatedBeam
          containerRef={containerRef}
          curvature={node.curvature}
          delay={0.2 + 0.15 * index}
          duration={4.5}
          fromRef={centerRef}
          gradientStartColor="#cde0b8"
          gradientStopColor="#a3e635"
          key={`out-${node.label}`}
          pathColor="rgba(205,224,184,0.22)"
          pathWidth={1.75}
          toRef={node.ref}
        />
      ))}
    </div>
  );
}
