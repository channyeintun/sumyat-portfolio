import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { faqs } from "@/data/profile";

export default function Faq() {
  return (
    <section
      id="faq"
      className="scroll-mt-16 border-b border-ink bg-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Enquiries on File"
            title="Questions, answered."
          />
        </Reveal>

        <dl className="border-t-2 border-ink">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              {/* Native <details> keeps every answer in the DOM — visible to
                  answer engines and crawlers even while visually collapsed. */}
              <details className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-baseline gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <span className="mono shrink-0 text-xs text-accent tnum">
                    Q.{String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-display flex-1 text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-accent sm:text-2xl">
                    {item.q}
                  </dt>
                  <span
                    aria-hidden
                    className="mono shrink-0 translate-y-0.5 text-lg leading-none text-stone transition-transform duration-300 group-open:rotate-45 group-hover:text-accent"
                  >
                    +
                  </span>
                </summary>
                <dd className="grid grid-cols-[auto_1fr] gap-4 pb-6">
                  <span aria-hidden className="w-[2.1rem] shrink-0" />
                  <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-2">
                    {item.a}
                  </p>
                </dd>
              </details>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
