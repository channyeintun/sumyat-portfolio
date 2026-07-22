import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="Professional Record"
            title="A chronology of work."
          />
        </Reveal>

        <ol>
          {experience.map((job, index) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal delay={index * 100}>
                <article className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[auto_1fr] md:gap-10 lg:gap-16">
                  {/* Period rail */}
                  <div className="flex items-start gap-3 md:w-56 md:flex-col md:gap-1">
                    <span className="mono text-sm text-accent">
                      {String(experience.length - index).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="mono text-sm text-ink tnum">{job.period}</p>
                      <p className="label mt-1 text-stone">{job.mode}</p>
                    </div>
                  </div>

                  {/* Entry body */}
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-base font-medium text-accent-2">
                      {job.company}
                    </p>

                    {job.bullets.length > 0 ? (
                      <ul className="mt-5 space-y-3">
                        {job.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="grid grid-cols-[auto_1fr] gap-3 text-[0.95rem] leading-relaxed text-ink-2"
                          >
                            <span className="mono text-xs text-stone tnum">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mono mt-5 text-sm text-stone">
                        — In progress. Entry to be filed.
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
