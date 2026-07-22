import { profile } from "@/data/profile";
import HeroPhoto from "./HeroPhoto";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden bg-[#0a141d] text-white"
    >
      {/* Background blueprint grid & radial glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-600/20 via-teal-500/10 to-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-teal-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Content Column */}
          <div className="flex flex-col items-start gap-6">
            {/* Status Pill */}
            <div
              className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 shadow-inner backdrop-blur-md"
              style={{ animationDelay: "0ms" }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span>Available in {profile.availability} • Remote Worldwide</span>
            </div>

            {/* Main Headline */}
            <div
              className="animate-fade-in-up flex flex-col gap-2"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-baseline gap-3">
                <h1 className="font-title text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl">
                  {profile.name}
                </h1>
                <span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 font-mono text-sm font-medium text-cyan-300">
                  {profile.nickname}
                </span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 sm:text-2xl lg:text-3xl">
                {profile.title}
              </h2>
            </div>

            {/* Summary */}
            <p
              className="animate-fade-in-up max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Bridging business vision and technical execution. Specializing in financial technology, system specs, BPMN workflow modeling, and automated reporting to turn complex data into actionable outcomes.
            </p>

            {/* Specialization Tags */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2 pt-1"
              style={{ animationDelay: "280ms" }}
            >
              {[
                "Fintech Platform Specs",
                "SQL & Python ETL",
                "Power BI & Excel",
                "Agile & Backlog Management",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm transition hover:border-cyan-400/40 hover:text-cyan-200"
                >
                  ⚡ {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="animate-fade-in-up flex flex-wrap items-center gap-4 pt-3"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition duration-300 hover:shadow-cyan-400/40 hover:scale-[1.02]"
              >
                <span>Get In Touch</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-slate-500 hover:bg-slate-800 hover:text-cyan-300"
              >
                <span>View Portfolio Deck</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Location & Remote note */}
            <div
              className="animate-fade-in-up flex items-center gap-2 text-xs text-slate-400"
              style={{ animationDelay: "420ms" }}
            >
              <span>📍 {profile.location}</span>
              <span>•</span>
              <span className="text-cyan-400/90">Collaborated across 5 global time zones</span>
            </div>
          </div>

          {/* Photo Visual Column */}
          <div
            className="animate-fade-in-up flex justify-center lg:justify-end"
            style={{ animationDelay: "200ms" }}
          >
            <HeroPhoto />
          </div>
        </div>

        {/* Bento Stat Highlights Bar below hero */}
        <div
          className="animate-fade-in-up mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-20"
          style={{ animationDelay: "480ms" }}
        >
          <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-lg backdrop-blur-md transition duration-300 hover:border-cyan-400/40 hover:bg-slate-900/80">
            <div className="text-2xl font-black text-cyan-300 sm:text-3xl">3+ Years</div>
            <div className="mt-1 text-sm font-medium text-slate-200">Remote BA Experience</div>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Leading requirements from initiation to deployment across 5 global timezones.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-lg backdrop-blur-md transition duration-300 hover:border-teal-400/40 hover:bg-slate-900/80">
            <div className="text-2xl font-black text-teal-300 sm:text-3xl">50+ Specs</div>
            <div className="mt-1 text-sm font-medium text-slate-200">Detailed User Stories</div>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Agile backlog grooming, BPMN workflows, and testable acceptance criteria.
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-lg backdrop-blur-md transition duration-300 hover:border-emerald-400/40 hover:bg-slate-900/80">
            <div className="text-2xl font-black text-emerald-300 sm:text-3xl">-20% Time</div>
            <p className="mt-1 text-sm font-medium text-slate-200">Data & ETL Automation</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              Reduced manual reporting overhead with SQL queries, Python (Pandas) & Power BI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

