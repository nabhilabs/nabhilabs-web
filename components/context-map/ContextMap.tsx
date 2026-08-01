"use client";

import "./context-map.css";

export function ContextMap() {
  return (
    <div className="relative mt-7 aspect-[2485/800] w-full">
      <img
        alt=""
        className="absolute inset-0 z-[1] h-full w-full object-contain"
        src="/assets/context map/Grid Layer - Layer 1.svg"
      />
      <img
        alt=""
        className="absolute inset-0 z-[2] h-full w-full object-contain"
        src="/assets/context map/Glowing Layer - Layer 5.svg"
      />
      <img
        alt=""
        className="context-map-layer4 absolute inset-0 z-[3] h-full w-full object-contain"
        src="/assets/context map/Glowing Layer - Layer 4.svg"
      />
      <img
        alt=""
        className="context-map-layer6 absolute inset-0 z-[4] h-full w-full object-contain"
        src="/assets/context map/Glowing Layer - Layer 3.svg"
      />
      <img
        alt=""
        className="absolute inset-0 z-[5] h-full w-full object-contain"
        src="/assets/context map/Original.svg"
      />
    </div>
  );
}
