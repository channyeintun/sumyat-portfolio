import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, certifications, languages } from "@/data/profile";

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-16 border-b border-ink bg-paper-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Credentials & Record"
            title="On paper, formally."
          />
        </Reveal>

        <div className="grid gap-px border border-ink bg-ink md:grid-cols-3">
          {/* Education */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col bg-paper p-7">
              <span className="label text-stone">Education</span>
              <p className="font-display mt-4 text-lg font-semibold leading-snug text-ink">
                {education.degree}
              </p>
              <p className="mt-2 text-sm text-ink-2">{education.school}</p>
              <p className="mono mt-1 text-sm text-accent-2 tnum">
                {education.period}
              </p>
              <p className="mono mt-auto pt-4 text-xs italic text-stone">
                {education.note}
              </p>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={100}>
            <div className="flex h-full flex-col bg-paper p-7">
              <span className="label text-stone">Certifications</span>
              <ul className="mt-4 space-y-3">
                {certifications.map((cert, i) => (
                  <li
                    key={cert}
                    className="grid grid-cols-[auto_1fr] gap-3 text-sm leading-snug text-ink-2"
                  >
                    <span className="mono text-xs text-accent tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={200}>
            <div className="flex h-full flex-col bg-paper p-7">
              <span className="label text-stone">Languages</span>
              <ul className="mt-4">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-baseline border-b border-line-2 py-2.5 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-ink">
                      {lang.name}
                    </span>
                    <span className="leader" />
                    <span className="mono text-xs text-stone">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
