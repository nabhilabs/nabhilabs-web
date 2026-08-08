import "./context-map.css";

const layers = [
  {
    src: "/assets/context map/Grid Layer - Layer 1.svg",
    alt: "Context map grid foundation layer",
    className: "absolute inset-0 z-[1] h-full w-full object-contain",
  },
  {
    src: "/assets/context map/Glowing Layer - Layer 5.svg",
    alt: "Context map outer glow network layer",
    className: "absolute inset-0 z-[2] h-full w-full object-contain",
  },
  {
    src: "/assets/context map/Glowing Layer - Layer 4.svg",
    alt: "Context map mid glow connection layer",
    className:
      "context-map-layer4 absolute inset-0 z-[3] h-full w-full object-contain",
  },
  {
    src: "/assets/context map/Glowing Layer - Layer 3.svg",
    alt: "Context map pulse connection layer",
    className:
      "context-map-layer6 absolute inset-0 z-[4] h-full w-full object-contain",
  },
  {
    src: "/assets/context map/Original.svg",
    alt: "Nabhi context map showing connected systems and relationships",
    className: "absolute inset-0 z-[5] h-full w-full object-contain",
  },
] as const;

type ContextMapProps = {
  className?: string;
};

export function ContextMap({ className = "" }: ContextMapProps) {
  return (
    <div className={`relative aspect-[2485/800] w-full ${className}`.trim()}>
      {layers.map((layer, index) => (
        <img
          alt={layer.alt}
          className={layer.className}
          decoding="async"
          height={800}
          key={layer.src}
          loading={index === 0 ? "eager" : "lazy"}
          src={layer.src}
          width={2485}
        />
      ))}
    </div>
  );
}
