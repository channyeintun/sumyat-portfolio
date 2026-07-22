import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile, projects } from "@/data/profile";
import { siteUrl } from "@/lib/site";

type CaseFilePageProps = {
  params: Promise<{ id: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: CaseFilePageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) return {};

  const url = `${siteUrl}/case-files/${project.id}`;

  return {
    title: `${project.title} / Case File`,
    description: project.description,
    alternates: { canonical: `/case-files/${project.id}` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      url,
      images: [
        {
          url: "/brand/social-share-card.png",
          width: 1200,
          height: 630,
          alt: `${project.title} — case file by ${profile.name}`,
        },
      ],
    },
  };
}

export default async function CaseFilePage({ params }: CaseFilePageProps) {
  const { id } = await params;
  const index = projects.findIndex((item) => item.id === id);

  if (index === -1) notFound();

  const project = projects[index];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const caseNumber = String(index + 1).padStart(2, "0");

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link href="/" className="group flex items-baseline gap-3">
            <span className="font-display text-xl font-semibold tracking-tight">
              {profile.name}
            </span>
            <span className="label hidden text-stone group-hover:text-accent sm:inline">
              Working Dossier
            </span>
          </Link>
          <Link
            href="/#projects"
            className="label flex items-center gap-2 text-ink transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span>
            All case files
          </Link>
        </div>
      </header>

      <article>
        <div className="border-b border-line bg-paper-2">
          <div className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            <p className="label flex flex-wrap items-center gap-2 text-stone">
              <span>Working Dossier</span>
              <span aria-hidden>/</span>
              <span>Case Files</span>
              <span aria-hidden>/</span>
              <span className="text-accent">№ {caseNumber}</span>
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_0.75fr] lg:gap-16">
            <div>
              <span className="label text-accent">{project.category}</span>
              <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.8rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.03em] text-ink">
                {project.title}
              </h1>
              <p className="mt-7 max-w-3xl border-l-2 border-accent pl-5 font-display text-xl leading-snug text-ink-2 sm:text-2xl">
                {project.description}
              </p>
            </div>

            <dl className="self-end border-t border-ink">
              {[
                { key: "Role", value: project.role },
                { key: "Engagement", value: project.timeline },
                { key: "Outcome", value: project.metric },
              ].map((item) => (
                <div
                  key={item.key}
                  className="border-b border-line py-3"
                >
                  <dt className="label text-stone">{item.key}</dt>
                  <dd className="mono mt-1 text-sm text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-16 grid gap-px border border-ink bg-ink lg:grid-cols-3">
            <section className="bg-paper p-6 sm:p-8">
              <h2 className="label border-b border-line pb-2 text-accent">
                01 · The Challenge
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-2">
                {project.problem}
              </p>
            </section>

            <section className="bg-paper p-6 sm:p-8">
              <h2 className="label border-b border-line pb-2 text-accent">
                02 · Approach
              </h2>
              <ol className="mt-5 space-y-4">
                {project.approach.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <span className="mono text-xs text-stone tnum">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-paper p-6 sm:p-8">
              <h2 className="label border-b border-line pb-2 text-accent">
                03 · Impact
              </h2>
              <ul className="mt-5 space-y-4">
                {project.impact.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-3 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-ink pt-4">
            {project.tags.map((tag) => (
              <li key={tag} className="mono text-xs text-stone">
                / {tag}
              </li>
            ))}
          </ul>

          <nav
            aria-label="Case file navigation"
            className="mt-16 grid gap-px border border-ink bg-ink sm:grid-cols-2"
          >
            <Link
              href={`/case-files/${previous.id}`}
              className="group bg-paper p-6 transition-colors hover:bg-paper-3"
            >
              <span className="label text-stone">← Previous file</span>
              <span className="font-display mt-3 block text-xl font-semibold leading-tight group-hover:text-accent">
                {previous.title}
              </span>
            </Link>
            <Link
              href={`/case-files/${next.id}`}
              className="group bg-paper p-6 text-right transition-colors hover:bg-paper-3"
            >
              <span className="label text-stone">Next file →</span>
              <span className="font-display mt-3 block text-xl font-semibold leading-tight group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          </nav>
        </div>
      </article>

      <footer className="border-t border-paper/20 bg-ink text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <span className="label text-accent">Open Correspondence</span>
            <p className="font-display mt-2 text-3xl font-semibold">
              Have a similar problem to solve?
            </p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="label inline-flex items-center gap-3 border border-paper/40 px-5 py-3 transition-colors hover:border-accent hover:bg-accent"
          >
            Start a conversation <span aria-hidden>→</span>
          </a>
        </div>
      </footer>
    </main>
  );
}
