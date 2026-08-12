type SectionPillProps = {
  children: string;
};

export function SectionPill({ children }: SectionPillProps) {
  return (
    <span className="inline-flex rounded-full bg-[#e8ece6] px-3.5 py-1 text-xs font-medium tracking-[0.02em] text-[#5a7052]">
      {children}
    </span>
  );
}
