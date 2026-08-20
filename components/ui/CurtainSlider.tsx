"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import gsap from "gsap";
import {
  MorphSlider,
  type MorphSliderHandle,
} from "@/components/ui/MorphSlider";

export type CurtainSlide = {
  src: string;
  alt: string;
  chapter: string;
  title: string;
  gist: string;
  href: string;
  cta: string;
  /** Ambient glow tint for this slide (rgba recommended) */
  accent?: string;
};

type CurtainSliderProps = {
  slides: CurtainSlide[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
};

type Ember = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

export function CurtainSlider({
  slides,
  className = "",
  autoplay = true,
  autoplayDelay = 6000,
}: CurtainSliderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const morphRef = useRef<MorphSliderHandle>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const metaParallaxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const indexRef = useRef(0);
  const prevIndexRef = useRef(0);
  const reducedRef = useRef(false);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const [index, setIndex] = useState(0);

  const count = slides.length;
  const safeIndex = ((index % count) + count) % count;
  const current = slides[safeIndex]!;
  const accent = current.accent ?? "rgba(205, 224, 184, 0.4)";

  const morphItems = useMemo(
    () => slides.map((slide) => ({ image: slide.src, caption: slide.title })),
    [slides],
  );

  const animateMeta = useCallback(
    (from: number, to: number) => {
      const meta = metaRef.current;
      if (!meta || reducedRef.current) return;
      const dir = to === (from + 1) % count ? 1 : -1;
      gsap.fromTo(
        meta,
        { y: dir * 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
      );
    },
    [count],
  );

  const handleIndexChange = useCallback(
    (to: number) => {
      const from = prevIndexRef.current;
      if (to !== from) animateMeta(from, to);
      prevIndexRef.current = to;
      indexRef.current = to;
      setIndex(to);
    },
    [animateMeta],
  );

  const next = useCallback(() => morphRef.current?.next(), []);
  const prev = useCallback(() => morphRef.current?.prev(), []);

  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Copy parallax — wallpaper morph handles its own drift
  useEffect(() => {
    if (reducedRef.current) return;
    const root = rootRef.current;
    if (!root) return;

    let raf = 0;
    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;

    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      const metaParallax = metaParallaxRef.current;
      if (metaParallax) {
        metaParallax.style.transform = `translate3d(${cx * 10}px, ${cy * 7}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      tx = nx * 2;
      ty = ny * 2;
      pointerRef.current = { x: nx + 0.5, y: ny + 0.5 };
    };

    const onLeave = () => {
      tx = 0;
      ty = 0;
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
      if (metaParallaxRef.current) metaParallaxRef.current.style.transform = "";
    };
  }, []);

  // Ambient embers
  useEffect(() => {
    if (reducedRef.current) return;
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const embers: Ember[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = root.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      embers.length = 0;
      const n = Math.min(42, Math.floor((w * h) / 28000));
      for (let i = 0; i < n; i++) {
        embers.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 1.8,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.12 - Math.random() * 0.25,
          a: 0.15 + Math.random() * 0.45,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const px = pointerRef.current.x * w;
      const py = pointerRef.current.y * h;

      for (const e of embers) {
        const dx = px - e.x;
        const dy = py - e.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 160000) {
          e.vx += dx * 0.000008;
          e.vy += dy * 0.000008;
        }

        e.x += e.vx;
        e.y += e.vy;
        e.vx *= 0.99;
        e.vy *= 0.99;

        if (e.y < -8) {
          e.y = h + 8;
          e.x = Math.random() * w;
        }
        if (e.x < -8) e.x = w + 8;
        if (e.x > w + 8) e.x = -8;

        ctx.beginPath();
        ctx.fillStyle = `rgba(205,224,184,${e.a})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    seed();
    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const label = `${String(safeIndex + 1).padStart(2, "0")} / ${String(count).padStart(2, "0")}`;

  const breathStyle = {
    "--curtain-accent": accent,
  } as CSSProperties;

  return (
    <div
      aria-roledescription="carousel"
      className={`relative isolate min-h-[100svh] w-full overflow-hidden bg-[#0e1012] text-white select-none ${className}`}
      ref={rootRef}
      role="region"
      style={breathStyle}
    >
      <div aria-hidden className="absolute inset-0">
        <MorphSlider
          ref={morphRef}
          aberration={0.35}
          autoplay={autoplay}
          autoplayDelay={autoplayDelay / 1000}
          className="h-full w-full"
          drift={0.4}
          duration={1.1}
          intensity={0.55}
          items={morphItems}
          loop
          onIndexChange={handleIndexChange}
          overlayColor="#000000"
          radius={0}
          scale={2.4}
          showCaptions={false}
          showControls={false}
          showIndicators={false}
          transition="melt"
        />
        <div
          className="curtain-breathe pointer-events-none absolute inset-[8%_5%_12%_35%] rounded-full blur-3xl transition-[background] duration-700"
          style={{
            background: `radial-gradient(ellipse at 60% 45%, var(--curtain-accent), transparent 68%)`,
          }}
        />
        <canvas
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] opacity-80"
          ref={canvasRef}
        />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col px-6 pt-28 md:px-10 md:pt-32">
        <div className="pointer-events-auto flex flex-1 items-center">
          <div className="will-change-transform" ref={metaParallaxRef}>
            <div
              className="max-w-xl md:max-w-[28rem] lg:max-w-[32rem]"
              ref={metaRef}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#cde0b8]">
                {current.chapter}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,6.5vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                {current.title}
              </h1>
              <p className="mt-5 max-w-md text-sm font-light leading-7 text-white/65 md:text-[15px]">
                {current.gist}
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#cde0b8] px-6 py-3 text-xs font-medium text-[#0f1c13] transition-colors hover:bg-white"
                href={current.href}
              >
                {current.cta}
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>

        <p className="pointer-events-none pb-10 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55 md:pb-14">
          {label}
        </p>
      </div>

      <button
        aria-label="Previous service"
        className="absolute left-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white/15 md:left-6"
        onClick={prev}
        type="button"
      >
        ←
      </button>
      <button
        aria-label="Next service"
        className="absolute right-4 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-sm transition-colors hover:bg-white/15 md:right-6"
        onClick={next}
        type="button"
      >
        →
      </button>
    </div>
  );
}
