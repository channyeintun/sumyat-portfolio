export default function SectionHeading({
  index,
  eyebrow,
  title,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  dark?: boolean;
}) {
  const line = dark ? "border-paper/25" : "border-ink";
  const stone = dark ? "text-paper/55" : "text-stone";
  const ink = dark ? "text-paper" : "text-ink";

  return (
    <div className={`mb-12 border-t-2 ${line} pt-4`}>
      <div className="flex items-baseline justify-between gap-4">
        <span className={`mono text-sm ${dark ? "text-accent" : "text-accent"}`}>
          §{index}
        </span>
        <span className={`label ${stone}`}>{eyebrow}</span>
      </div>
      <h2
        className={`font-display mt-4 text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.02em] ${ink}`}
      >
        {title}
      </h2>
    </div>
  );
}
