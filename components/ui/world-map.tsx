"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";

export type MapPin = { lat: number; lng: number; label?: string };

interface MapProps {
  /** Connection arcs — leave empty until more locations are ready */
  dots?: Array<{
    start: MapPin;
    end: MapPin;
  }>;
  /** Standalone location markers (e.g. Hyderabad only) */
  pins?: MapPin[];
  lineColor?: string;
  pinColor?: string;
  /** Dot fill for the base map grid */
  dotColor?: string;
  backgroundColor?: string;
  className?: string;
}

export default function WorldMap({
  pins = [],
  pinColor = "#a3e635",
  dotColor = "#1a332366",
  backgroundColor = "#f2f4f0",
  className = "",
}: MapProps) {
  const { svgMap, projectedPins, viewBox } = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });

    pins.forEach((pin, index) => {
      map.addPin({
        lat: pin.lat,
        lng: pin.lng,
        data: pin.label ?? `pin-${index}`,
        svgOptions: { color: pinColor, radius: 0.65 },
      });
    });

    const projected = pins.map((pin, index) => {
      const key = pin.label ?? `pin-${index}`;
      const point = map.getPoints().find((p) => p.data === key);
      return {
        ...pin,
        x: point?.x ?? 0,
        y: point?.y ?? 0,
      };
    });

    const svg = map.getSVG({
      radius: 0.22,
      color: dotColor,
      shape: "circle",
      backgroundColor,
    });

    const match = svg.match(/viewBox="([^"]+)"/);
    return {
      svgMap: svg,
      projectedPins: projected,
      viewBox: match?.[1] ?? "0 0 198 100",
    };
  }, [backgroundColor, dotColor, pinColor, pins]);

  return (
    <div
      className={`relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-[#f2f4f0] font-sans ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- dotted-map SVG data URI */}
      <img
        alt=""
        aria-hidden
        className="pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]"
        draggable={false}
        height={495}
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        width={1056}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        viewBox={viewBox}
      >
        {projectedPins.map((pin) => (
          <g key={`pulse-${pin.label ?? `${pin.x}-${pin.y}`}`}>
            <motion.circle
              animate={{ opacity: 1, scale: 1 }}
              cx={pin.x}
              cy={pin.y}
              fill={pinColor}
              initial={{ opacity: 0, scale: 0.4 }}
              r="0.7"
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <circle cx={pin.x} cy={pin.y} fill={pinColor} opacity="0.45" r="0.7">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.8s"
                from="0.7"
                repeatCount="indefinite"
                to="2.8"
              />
              <animate
                attributeName="opacity"
                begin="0s"
                dur="1.8s"
                from="0.45"
                repeatCount="indefinite"
                to="0"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
