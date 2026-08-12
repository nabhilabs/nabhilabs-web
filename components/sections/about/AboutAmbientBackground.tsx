"use client";

/** Pulsing mesh + fine-line grid for the About page atmosphere. */
export function AboutAmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="about-mesh-a absolute -left-[12%] top-[8%] size-[42rem] rounded-full bg-[#1a3323]/30 blur-[100px]" />
      <div className="about-mesh-b absolute -right-[8%] top-[38%] size-[36rem] rounded-full bg-[#31543a]/25 blur-[90px]" />
      <div className="about-mesh-c absolute bottom-[6%] left-[28%] size-[28rem] rounded-full bg-[#78966a]/20 blur-[80px]" />
      <div className="about-tech-grid absolute inset-0 opacity-[0.55]" />
    </div>
  );
}

export function AboutLiveStatus() {
  return (
    <div
      aria-hidden
      className="about-status-pulse pointer-events-none fixed right-6 top-24 z-20 hidden items-center gap-2 rounded-full border border-[#cde0b8]/25 bg-[#0f1c13]/80 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#cde0b8] backdrop-blur-md md:flex"
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#a3e635] opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-[#a3e635]" />
      </span>
      Nabhi_Labs // Online
    </div>
  );
}
