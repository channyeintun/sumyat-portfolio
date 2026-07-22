import { profile, technicalSkills } from "@/data/profile";
import HeroPhoto from "./HeroPhoto";

const meta = [
  { k: "Discipline", v: "IT Business Analysis" },
  { k: "Focus", v: "Fintech · Requirements · BI" },
  { k: "Based", v: profile.location },
  { k: "Experience", v: "3+ years, fully remote" },
  { k: "Availability", v: `Open — ${profile.availability} notice` },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-16 overflow-hidden border-b border-ink"
    >
      {/* Dossier header strip */}
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2.5 sm:px-8">
          <span className="label text-ink">Working Dossier</span>
          <span className="label hidden text-stone sm:block">
            Ref. SMN · Rev. 2026
          </span>
          <span className="label flex items-center gap-2 text-stone">
            <span className="h-1.5 w-1.5 rounded-full bg-accent blink" />
            Available
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.55fr_1fr] lg:gap-16 lg:py-20">
          {/* Editorial masthead */}
          <div className="flex flex-col">
            <div className="animate-rise label mb-6 flex items-center gap-3 text-stone">
              <span className="text-accent">§00</span>
              <span className="leader hidden sm:block" />
              <span>Title Page</span>
            </div>

            <h1
              className="animate-rise font-display text-[clamp(3.2rem,11vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.02em] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              Su Myat
              <br />
              <span className="italic text-accent">Noe.</span>
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl border-l-2 border-accent pl-5 font-display text-xl leading-snug text-ink sm:text-2xl"
              style={{ animationDelay: "160ms" }}
            >
              I turn tangled business intent into specifications engineers can
              build — and data leaders can trust.
            </p>

            <p
              className="animate-rise mt-6 max-w-xl text-[0.95rem] leading-relaxed text-ink-2"
              style={{ animationDelay: "220ms" }}
            >
              {profile.summary}
            </p>

            {/* Spec metadata table */}
            <dl
              className="animate-rise mt-9 max-w-xl border-t border-ink"
              style={{ animationDelay: "300ms" }}
            >
              {meta.map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline gap-3 border-b border-line-2 py-2.5"
                >
                  <dt className="label w-28 shrink-0 text-stone">{row.k}</dt>
                  <dd className="leader hidden sm:block" />
                  <dd className="mono text-sm text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "380ms" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-paper transition-colors hover:bg-accent"
              >
                <span className="label">Start a conversation</span>
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href={profile.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mono text-sm text-ink"
              >
                Read the full deck ↗
              </a>
              <a
                href="/resume.pdf"
                download="Su-Myat-Noe-Resume.pdf"
                className="link-underline mono text-sm text-ink"
              >
                Download résumé ↓
              </a>
            </div>
          </div>

          {/* Portrait plate */}
          <div
            className="animate-rise flex items-start justify-center lg:justify-end"
            style={{ animationDelay: "260ms" }}
          >
            <HeroPhoto />
          </div>
        </div>
      </div>

      {/* Running toolkit ticker */}
      <div className="overflow-hidden border-t border-ink bg-ink py-3">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
          {[...technicalSkills, ...technicalSkills].map((skill, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="label text-paper">{skill}</span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
