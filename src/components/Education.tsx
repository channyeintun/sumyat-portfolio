import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education, certifications, languages } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-20 bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Background" title="Education & Credentials" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">Education</h3>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                {education.degree}
              </p>
              <p className="mt-1 text-sm text-slate-600">{education.school}</p>
              <p className="mt-1 text-sm text-teal-600">{education.period}</p>
              <p className="mt-3 text-xs italic text-slate-400">
                {education.note}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">
                Certifications
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="h-full rounded-2xl border border-slate-200 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <h3 className="text-lg font-bold text-slate-900">Languages</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-slate-700">{lang.name}</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      {lang.level}
                    </span>
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
