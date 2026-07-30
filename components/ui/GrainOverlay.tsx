export function GrainOverlay() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035] mix-blend-overlay"
    >
      <filter id="nabhi-grain">
        <feTurbulence
          baseFrequency="0.78"
          numOctaves="4"
          seed="12"
          stitchTiles="stitch"
          type="fractalNoise"
        />
      </filter>
      <rect filter="url(#nabhi-grain)" height="100%" width="100%" />
    </svg>
  );
}
