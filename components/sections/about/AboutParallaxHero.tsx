"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChapterTag } from "@/components/ui/ChapterTag";

const WALLPAPER_WIDTH = 1472;
const WALLPAPER_HEIGHT = 1068;
const WALLPAPER_ASPECT = WALLPAPER_WIDTH / WALLPAPER_HEIGHT;

const AMBIENT_NODES = [
  { x: "14%", y: "24%", size: 6, delay: 0 },
  { x: "82%", y: "30%", size: 4, delay: 0.35 },
  { x: "68%", y: "68%", size: 5, delay: 0.7 },
  { x: "28%", y: "58%", size: 3, delay: 1.05 },
] as const;

function AmbientNode({
  node,
  index,
  sx,
  sy,
}: {
  node: (typeof AMBIENT_NODES)[number];
  index: number;
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}) {
  const x = useTransform(sx, [-0.5, 0.5], [-10 - index * 2, 10 + index * 2]);
  const y = useTransform(sy, [-0.5, 0.5], [-8 - index, 8 + index]);

  return (
    <motion.span
      aria-hidden
      className="about-hero-node pointer-events-none absolute rounded-full bg-[#cde0b8]/90 shadow-[0_0_18px_4px_rgba(163,230,53,0.35)]"
      style={{
        left: node.x,
        top: node.y,
        width: node.size,
        height: node.size,
        x,
        y,
      }}
    />
  );
}

export function AboutParallaxHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 140, damping: 22, mass: 0.6 });

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const imgX = useTransform(sx, [-0.5, 0.5], ["3.5%", "-3.5%"]);
  const imgY = useTransform(sy, [-0.5, 0.5], ["3.5%", "-3.5%"]);
  const imgScale = useTransform(sx, [-0.5, 0.5], [1.1, 1.1]);
  const textX = useTransform(sx, [-0.5, 0.5], ["-14px", "14px"]);
  const textY = useTransform(sy, [-0.5, 0.5], ["-10px", "10px"]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      aria-labelledby="about-hero-title"
      className="relative z-10 px-6 pt-24 md:px-10 md:pt-28"
    >
      <div className="mx-auto mb-4 w-full max-w-[95rem]">
        <ChapterTag>00 // About</ChapterTag>
      </div>

      <div className="mx-auto w-full max-w-[95rem]">
        <div
          className="relative overflow-hidden rounded-2xl border border-[#1a3323]/40 shadow-[0_24px_80px_rgba(15,28,19,0.22)]"
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          ref={ref}
          style={{
            aspectRatio: `${WALLPAPER_WIDTH} / ${WALLPAPER_HEIGHT}`,
            maxHeight: "calc(100svh - 7rem)",
            width: `min(100%, calc((100svh - 7rem) * ${WALLPAPER_ASPECT}))`,
          }}
        >
          {reduceMotion ? (
            <div className="absolute inset-0">
              <Image
                alt="Nabhi Labs co-founders outdoors on a grassy hill under a bright sky"
                className="object-cover object-center"
                fill
                priority
                sizes="(max-width: 1280px) calc(100vw - 3rem), 95rem"
                src="/assets/about_us_wallpaper.png"
              />
            </div>
          ) : (
            <>
              <motion.div
                className="absolute inset-[-6%] will-change-transform"
                style={{ x: imgX, y: imgY, scale: imgScale }}
              >
                <Image
                  alt="Nabhi Labs co-founders outdoors on a grassy hill under a bright sky"
                  className="object-cover object-center"
                  fill
                  priority
                  sizes="(max-width: 1280px) calc(100vw - 3rem), 95rem"
                  src="/assets/about_us_wallpaper.png"
                />
              </motion.div>

              {AMBIENT_NODES.map((node, index) => (
                <AmbientNode index={index} key={node.x} node={node} sx={sx} sy={sy} />
              ))}
            </>
          )}

          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,28,19,0.18)_0%,rgba(15,28,19,0.42)_55%,rgba(14,16,18,0.55)_100%)]"
          />

          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12">
            {reduceMotion ? (
              <h1
                className="font-display text-[clamp(2.75rem,6vw,4.25rem)] font-semibold tracking-[-0.04em] text-white drop-shadow-[0_2px_28px_rgba(15,28,19,0.55)]"
                id="about-hero-title"
              >
                About Us
              </h1>
            ) : (
              <motion.h1
                className="font-display text-[clamp(2.75rem,6vw,4.25rem)] font-semibold tracking-[-0.04em] text-white drop-shadow-[0_2px_28px_rgba(15,28,19,0.55)]"
                id="about-hero-title"
                style={{ x: textX, y: textY }}
              >
                About Us
              </motion.h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
