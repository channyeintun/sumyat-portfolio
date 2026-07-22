import Image from "next/image";
import type { ProjectEvidence as Evidence } from "@/data/profile";

export default function ProjectEvidence({ evidence }: { evidence: Evidence }) {
  return (
    <section className="mt-16 border-t-2 border-ink pt-4">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <span className="mono text-sm text-accent">§04</span>
        <span className="label text-stone">Evidence Register</span>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <span className="label text-accent">{evidence.kind}</span>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {evidence.title}
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-2">
            {evidence.description}
          </p>
          <a
            href={evidence.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mono mt-6 inline-block text-sm text-ink"
          >
            {evidence.sourceLabel}
          </a>
          <p className="mono mt-5 border-l border-line pl-4 text-xs leading-relaxed text-stone">
            {evidence.note}
          </p>
        </div>

        <dl className="grid self-start gap-px border border-ink bg-ink sm:grid-cols-3">
          {evidence.facts.map((fact) => (
            <div key={fact.label} className="bg-paper p-5">
              <dt className="label text-stone">{fact.label}</dt>
              <dd className="font-display mt-2 text-xl font-semibold leading-tight text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {evidence.images && evidence.images.length > 0 && (
        <div
          className={`mt-10 grid gap-6 ${
            evidence.images.length > 1 ? "lg:grid-cols-2" : ""
          }`}
        >
          {evidence.images.map((item) => (
            <figure key={item.src} className="border border-ink bg-paper-2 p-2">
              <div className="overflow-hidden border border-line bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes={evidence.images!.length > 1 ? "(min-width: 1024px) 50vw, 100vw" : "100vw"}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="label px-2 pb-1 pt-3 text-stone">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
