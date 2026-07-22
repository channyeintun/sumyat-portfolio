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
                className="group flex h-full w-full flex-col rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold tracking-wider text-cyan-600 uppercase">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {project.metric}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-cyan-700">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-cyan-600">
                  View details
                  <svg
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 3.79a.75.75 0 011.06 0l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06L11.94 10 7.21 5.27a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
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
