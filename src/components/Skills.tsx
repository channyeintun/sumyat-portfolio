import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { technicalSkills, softSkills } from "@/data/profile";

function Index({
  code,
  title,
  items,
}: {
  code: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between border-b-2 border-ink pb-2">
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
        <span className="mono text-xs text-stone">{code}</span>
      </div>
      <ol>
        {items.map((item, i) => (
          <li
            key={item}
            className="group flex items-baseline border-b border-line-2 py-3 transition-colors hover:text-accent"
          >
            <span className="mono w-9 shrink-0 text-xs text-stone tnum group-hover:text-accent">
              {code}.{String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.95rem] font-medium text-ink group-hover:text-accent">
              {item}
            </span>
            <span className="leader" />
            <span className="mono text-[0.65rem] text-stone opacity-0 transition-opacity group-hover:opacity-100">
              ●
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Competency Index"
            title="What I bring to the table."
          />
        </Reveal>

        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          <Reveal delay={0}>
            <Index code="T" title="Technical" items={technicalSkills} />
          </Reveal>
          <Reveal delay={100}>
            <Index code="S" title="Practice & People" items={softSkills} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
