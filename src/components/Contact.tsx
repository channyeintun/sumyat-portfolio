import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const items = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedinUrl,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Let's Connect" title="Get In Touch" dark />

          <p className="max-w-2xl text-slate-300">
            Open to Business Analyst opportunities — remote or on-site.
            Reach out and I&apos;ll get back to you as soon as possible.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const content = (
              <>
                <p className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium break-words text-white">
                  {item.value}
                </p>
              </>
            );

            const className =
              "block h-full rounded-xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10";

            return (
              <Reveal key={item.label} delay={index * 90}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
