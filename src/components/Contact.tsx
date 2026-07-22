import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedinUrl },
  { label: "Portfolio Deck", value: "Google Slides ↗", href: profile.portfolioUrl },
  { label: "Résumé", value: "Download PDF ↓", href: "/resume.pdf", download: true },
  { label: "Location", value: `${profile.location} · Remote worldwide`, href: undefined },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-ink py-20 text-paper sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Open Correspondence"
            title="Let's write the next spec together."
            dark
          />
        </Reveal>

        <Reveal delay={80}>
          <p className="max-w-2xl text-lg leading-relaxed text-paper/75">
            Open to Business Analyst roles — remote or on-site. Send the problem;
            I&apos;ll send back structure, questions, and a plan. Expect a reply
            within a day.
          </p>
        </Reveal>

        <div className="mt-14 border-t border-paper/20">
          {rows.map((row, index) => {
            const inner = (
              <>
                <span className="label w-40 shrink-0 text-accent">
                  {row.label}
                </span>
                <span className="mono text-base text-paper sm:text-lg">
                  {row.value}
                </span>
                {row.href && (
                  <span className="ml-auto text-paper/40 transition-all group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                )}
              </>
            );

            const cls =
              "group flex items-center gap-4 border-b border-paper/20 py-5 transition-colors hover:bg-paper/[0.04]";

            return (
              <Reveal key={row.label} delay={index * 70}>
                {row.href ? (
                  <a
                    href={row.href}
                    download={row.download ? "Su-Myat-Noe-Resume.pdf" : undefined}
                    target={
                      row.download || row.href.startsWith("mailto")
                        ? undefined
                        : "_blank"
                    }
                    rel="noopener noreferrer"
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Oversized signature CTA */}
        <Reveal delay={120}>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-16 flex flex-wrap items-end justify-between gap-4 border-t-2 border-paper pt-6"
          >
            <span className="font-display text-[clamp(2.5rem,9vw,6rem)] font-semibold italic leading-[0.9] tracking-tight text-paper transition-colors group-hover:text-accent">
              Say hello →
            </span>
            <span className="label pb-3 text-paper/55">
              {profile.email}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
