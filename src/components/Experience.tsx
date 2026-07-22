import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Career Path" title="Work Experience" />
        </Reveal>

        <ol className="relative border-l-2 border-slate-200 pl-8">
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`} className="mb-12 last:mb-0">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-white bg-teal-600 shadow" />

              <Reveal delay={index * 120}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {job.role}
                  </h3>
                  <span className="text-sm font-medium text-teal-600">
                    {job.period}
                  </span>
                </div>

                <p className="mt-1 text-sm font-semibold text-slate-500">
                  {job.company} · {job.mode}
                </p>

                {job.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2 text-slate-600">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
