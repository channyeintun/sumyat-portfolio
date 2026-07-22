"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const PHOTO_SRC = "/profile.png";

export default function HeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = PHOTO_SRC;
    img.onload = () => setLoaded(true);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="relative mx-auto max-w-md w-full">
      {/* Outer decorative ambient glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-teal-400/20 to-emerald-400/30 opacity-70 blur-xl transition duration-500 hover:opacity-100" />

      {/* Main Container Card */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xl transition duration-500 hover:border-cyan-400/40">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/80 to-slate-950/90">
          {loaded ? (
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${PHOTO_SRC})` }}
              role="img"
              aria-label={`${profile.name} — ${profile.title}`}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0c2a33] via-[#144754] to-[#0a1d24] p-6 text-center">
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 p-1 shadow-lg shadow-cyan-500/30">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 font-title text-4xl font-extrabold text-cyan-300">
                  {initials}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{profile.name}</h3>
                <p className="text-xs font-medium text-cyan-300/90">{profile.title}</p>
              </div>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] text-slate-400 backdrop-blur-md">
                <span>📷</span> Place photo at <code className="text-cyan-300">public/profile.png</code>
              </span>
            </div>
          )}

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

