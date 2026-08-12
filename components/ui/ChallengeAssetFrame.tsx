import Image from "next/image";

type ChallengeAssetFrameProps = {
  alt: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

export function ChallengeAssetFrame({
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 90vw, 42vw",
  src,
}: ChallengeAssetFrameProps) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md lg:mx-0 lg:max-w-none">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[-8%] rounded-[2rem] bg-[radial-gradient(circle_at_50%_42%,rgba(163,230,53,0.28)_0%,rgba(205,224,184,0.22)_22%,rgba(235,240,232,0.45)_48%,rgba(255,255,255,0)_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[40%] h-[58%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.24)_0%,rgba(120,150,106,0.08)_45%,transparent_72%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[6%] rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_50%,rgba(26,51,35,0.04)_0%,transparent_68%)]"
      />

      <div className="relative h-full w-full">
        <Image
          alt={alt}
          className="object-contain object-center mix-blend-screen drop-shadow-[0_24px_48px_rgba(26,51,35,0.12)]"
          fill
          priority={priority}
          sizes={sizes}
          src={src}
        />
      </div>
    </div>
  );
}
