type ChapterTagProps = {
  children: string;
  inverse?: boolean;
};

export function ChapterTag({
  children,
  inverse = false,
}: ChapterTagProps) {
  return (
    <span
      className={`inline-flex font-mono text-[0.65rem] uppercase tracking-[0.18em] ${
        inverse ? "text-white/60" : "text-[#4a5b4e]"
      }`}
    >
      [ {children} ]
    </span>
  );
}
