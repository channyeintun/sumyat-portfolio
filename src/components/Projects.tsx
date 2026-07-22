"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/profile";

const SHARED_NAME = "project-modal";

// Case-file line-art glyphs, one per project (from the brand asset set).
const GLYPHS: Record<string, string> = {
  "financial-advisory-suite": "/brand/glyph-bpmn.svg",
  "reporting-dashboards": "/brand/glyph-bars.svg",
  "data-pipeline": "/brand/glyph-pipeline.svg",
  "api-test-framework": "/brand/glyph-api.svg",
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// A view transition's `ready`/`finished` promises reject when it is skipped or
// superseded by a newer one — that's expected, so swallow both rejections
// rather than let them surface as unhandled errors.
function runViewTransition(update: () => void, onDone: () => void) {
  const transition = document.startViewTransition(() => flushSync(update));
  transition.ready.catch(() => {});
  transition.finished.then(onDone, onDone);
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const activeRef = useRef<Project | null>(null);
  activeRef.current = active;

  const open = useCallback((project: Project) => {
    if (!document.startViewTransition || prefersReducedMotion()) {
      setActive(project);
      return;
    }
    // Tag the clicked card so it becomes the "old" shared element.
    flushSync(() => setPendingId(project.id));
    runViewTransition(
      () => {
        setActive(project);
        setPendingId(null);
      },
      () => setPendingId(null),
    );
  }, []);

  const close = useCallback(() => {
    const current = activeRef.current;
    if (!current) return;
    if (!document.startViewTransition || prefersReducedMotion()) {
      setActive(null);
      return;
    }
    runViewTransition(
      () => {
        setActive(null);
        setPendingId(current.id);
      },
      () => setPendingId(null),
    );
  }, []);

  // Close on Escape + lock body scroll while the modal is open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close]);

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
              <button
                type="button"
                onClick={() => open(project)}
                aria-label={`View case file for ${project.title}`}
                style={{
                  viewTransitionName:
                    pendingId === project.id ? SHARED_NAME : undefined,
                }}
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

                {/* Tags */}
                <ul className="relative z-10 mt-6 flex flex-wrap gap-x-3 gap-y-1">
                  {project.tags.map((tag) => (
                    <li key={tag} className="mono text-[0.7rem] text-stone">
                      / {tag}
                    </li>
                  ))}
                </ul>

                {/* Footer rule */}
                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-line pt-4">
                  <span className="mono text-xs text-ink">{project.timeline}</span>
                  <span className="label flex items-center gap-2 text-ink transition-colors group-hover:text-accent">
                    Open file
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} index={projects.indexOf(active)} onClose={close} />}
    </section>
  );
}

function ProjectModal({
  project,
  index,
  onClose,
}: {
  project: Project;
  index: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/45 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ viewTransitionName: SHARED_NAME }}
        className="relative my-6 w-full max-w-2xl border border-ink bg-paper shadow-[12px_12px_0_0_var(--ink)]"
      >
        {/* File header bar */}
        <div className="flex items-center justify-between border-b border-ink bg-ink px-6 py-3 text-paper">
          <span className="label">
            Case File № {String(index + 1).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="label flex items-center gap-2 transition-colors hover:text-accent"
          >
            Close <span aria-hidden>✕</span>
          </button>
        </div>

        <div className="p-6 sm:p-7">
          <span className="label text-stone">{project.category}</span>
          <h3
            id="project-modal-title"
            className="font-display mt-1.5 text-2xl font-semibold leading-tight text-ink sm:text-3xl"
          >
            {project.title}
          </h3>

          {/* Meta strip */}
          <dl className="mt-4 grid grid-cols-2 gap-px border border-ink bg-ink sm:grid-cols-3">
            {[
              { k: "Role", v: project.role },
              { k: "Engagement", v: project.timeline },
              { k: "Outcome", v: project.metric },
            ].map((row) => (
              <div key={row.k} className="bg-paper px-3.5 py-3">
                <dt className="label text-stone">{row.k}</dt>
                <dd className="mono mt-1 text-sm text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 space-y-5">
            <section>
              <h4 className="label border-b border-line pb-1.5 text-accent">
                01 · The Challenge
              </h4>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-2">
                {project.problem}
              </p>
            </section>

            <section>
              <h4 className="label border-b border-line pb-1.5 text-accent">
                02 · Approach
              </h4>
              <ul className="mt-2.5 space-y-2">
                {project.approach.map((item, i) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-[0.9rem] leading-relaxed text-ink-2"
                  >
                    <span className="mono text-xs text-stone tnum">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="label border-b border-line pb-1.5 text-accent">
                03 · Impact
              </h4>
              <ul className="mt-2.5 space-y-2">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-[0.9rem] leading-relaxed text-ink-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-ink pt-4">
            {project.tags.map((tag) => (
              <li key={tag} className="mono text-xs text-stone">
                / {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
