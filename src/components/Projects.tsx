"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects, type Project } from "@/data/profile";

const SHARED_NAME = "project-modal";

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

function ProjectLogo({ id }: { id: string }) {
  switch (id) {
    case "financial-advisory-suite":
      return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-teal-500 to-emerald-500 p-2.5 text-white shadow-md shadow-cyan-500/20">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M8 11l3 3 5-5" />
          </svg>
        </div>
      );
    case "reporting-dashboards":
      return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400 p-2.5 text-white shadow-md shadow-blue-500/20">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </div>
      );
    case "data-pipeline":
      return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-2.5 text-white shadow-md shadow-emerald-500/20">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        </div>
      );
    case "api-test-framework":
      return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-teal-500 to-cyan-500 p-2.5 text-white shadow-md shadow-indigo-500/20">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
      );
    default:
      return (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 p-2.5 text-white shadow-md">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
      );
  }
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
    <section id="projects" className="scroll-mt-20 bg-sky-50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Selected Work" title="Projects" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 120}>
              <button
                type="button"
                onClick={() => open(project)}
                aria-label={`View details for ${project.title}`}
                style={{
                  viewTransitionName:
                    pendingId === project.id ? SHARED_NAME : undefined,
                }}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/80 hover:shadow-xl hover:shadow-cyan-950/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {/* Top subtle gradient accent line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 opacity-80 group-hover:h-1.5 transition-all duration-300" />

                {/* Logo & Category / Metric Row */}
                <div className="flex items-start justify-between gap-4">
                  <ProjectLogo id={project.id} />
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="rounded-full border border-cyan-200/70 bg-cyan-50/80 px-2.5 py-0.5 text-[11px] font-bold text-cyan-800 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="mt-5">
                  <h3 className="font-title text-xl font-extrabold text-slate-900 transition duration-300 group-hover:text-cyan-700">
                    {project.title}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span>🏢 {project.timeline}</span>
                    <span>•</span>
                    <span className="text-cyan-700 font-semibold">{project.role}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                {/* Tags */}
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-slate-200/60 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition group-hover:border-cyan-200/60 group-hover:bg-cyan-50/40 group-hover:text-slate-800"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Action CTA Link */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-cyan-600 transition duration-300 group-hover:text-cyan-700">
                  <span className="inline-flex items-center gap-1">
                    Explore Case Study
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition duration-300 group-hover:translate-x-1 group-hover:bg-cyan-600 group-hover:text-white">
                    →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ viewTransitionName: SHARED_NAME }}
        className="relative my-8 w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>

        <div className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold tracking-wider text-cyan-600 uppercase">
              {project.category}
            </span>
            <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              {project.metric}
            </span>
          </div>

          <h3
            id="project-modal-title"
            className="font-title mt-4 text-2xl font-black text-slate-900 sm:text-3xl"
          >
            {project.title}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500">
            <span>
              <span className="font-semibold text-slate-700">Role:</span>{" "}
              {project.role}
            </span>
            <span>
              <span className="font-semibold text-slate-700">Where:</span>{" "}
              {project.timeline}
            </span>
          </div>

          <div className="mt-6 space-y-6">
            <section>
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                The Challenge
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.problem}
              </p>
            </section>

            <section>
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Approach
              </h4>
              <ul className="mt-2 space-y-2">
                {project.approach.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Impact
              </h4>
              <ul className="mt-2 space-y-2">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.79 6.8-6.79a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2 border-t border-slate-100 pt-6">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
