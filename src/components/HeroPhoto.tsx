"use client";

import { profile } from "@/data/profile";

const PHOTO_SRC = "/profile.png";

export default function HeroPhoto() {
  return (
    <div className="relative mx-auto max-w-md w-full">
      {/* Outer decorative ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-teal-400/20 to-emerald-400/30 opacity-70 blur-xl transition duration-500 hover:opacity-100" />

      {/* Main Container Card */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-cyan-400/40">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-950/90">
          <div
            className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url(${PHOTO_SRC})` }}
            role="img"
            aria-label={`${profile.name} — ${profile.title}`}
          />

          {/* Bottom vignette */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Specialization Floating Pill Overlay */}
          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-slate-900/80 p-3 shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wide text-slate-200 uppercase">
                  Primary Domain
                </span>
              </div>
              <span className="text-[11px] font-medium text-cyan-300">Fintech & Data</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Requirements, BPMN & Financial BI Models
            </p>
          </div>
        </div>
      </div>

      {/* Floating Interactive Badge Chips around photo */}
      <div className="pointer-events-none absolute -top-4 -right-4 z-10 hidden sm:flex animate-float items-center gap-2 rounded-2xl border border-cyan-400/30 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-cyan-200 shadow-xl backdrop-blur-md">
        <span className="text-base">📊</span> Power BI & Excel
      </div>
    </div>
  );
}

