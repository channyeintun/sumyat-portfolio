import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { technicalSkills, softSkills } from "@/data/profile";

function SkillList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-6 text-lg font-bold text-slate-900">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-[#f0f9ff] px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-[#e0f2fe] transition duration-200 hover:-translate-y-0.5 hover:bg-[#e0f2fe]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Toolkit" title="Skills" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0}>
            <SkillList title="Technical Skills" items={technicalSkills} />
          </Reveal>
          <Reveal delay={120}>
            <SkillList title="Soft Skills" items={softSkills} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
