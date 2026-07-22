import Link from "next/link";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/profile";

// Case-file line-art glyphs, one per project (from the brand asset set).
const GLYPHS: Record<string, string> = {
  "financial-advisory-suite": "/brand/glyph-bpmn.svg",
  "reporting-dashboards": "/brand/glyph-bars.svg",
  "data-pipeline": "/brand/glyph-pipeline.svg",
  "api-test-framework": "/brand/glyph-api.svg",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-ink bg-paper-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Selected Case Files"
            title="Evidence of the work."
          />
        </Reveal>

        <div className="grid gap-px border border-ink bg-ink md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <Link
                href={`/case-files/${project.id}`}
                aria-label={`Read case file for ${project.title}`}
                className="group relative flex h-full w-full flex-col overflow-hidden bg-paper p-7 text-left transition-colors duration-300 hover:bg-paper-3 focus:outline-none focus-visible:bg-paper-3 sm:p-8"
              >
                {/* Case-file glyph — faint watermark, brightens on hover */}
                {GLYPHS[project.id] && (
                  <img
                    src={GLYPHS[project.id]}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 opacity-[0.07] transition-opacity duration-300 group-hover:opacity-[0.16]"
                  />
                )}

                {/* Case number + metric */}
                <div className="relative z-10 flex items-baseline justify-between">
                  <span className="font-display text-5xl font-semibold leading-none text-ink/12 transition-colors group-hover:text-accent/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mono text-right text-sm font-bold text-accent tnum">
                    {project.metric}
                  </span>
                </div>

                <span className="relative z-10 label mt-6 text-stone">
                  {project.category}
                </span>
                <h3 className="relative z-10 font-display mt-2 text-2xl font-semibold leading-tight text-ink">
                  {project.title}
                </h3>

                <p className="relative z-10 mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-2">
                  {project.description}
                </p>

                <ul className="relative z-10 mt-6 flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="mono text-[0.7rem] text-stone">
                      / {tag}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="mono text-xs text-ink">{project.timeline}</span>
                  <span className="label flex items-center gap-2 text-ink transition-colors group-hover:text-accent">
                    Open file
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
