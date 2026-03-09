import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Quote,
  Lightbulb,
  Layers,
  Target,
  Users,
  Wrench,
  Trophy,
  BookOpen,
} from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { works } from "@/data/works";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

function getCategoryLabel(category: string) {
  switch (category) {
    case "sqa":
      return "SQA";
    case "frontend-sqa":
      return "Frontend & SQA";
    default:
      return category;
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const workIndex = works.findIndex((w) => w.slug === slug);
  if (workIndex === -1) {
    notFound();
  }

  const work = works[workIndex];
  const prevWork = workIndex > 0 ? works[workIndex - 1] : null;
  const nextWork = workIndex < works.length - 1 ? works[workIndex + 1] : null;

  return (
    <article className="min-h-screen">
      {/* Back Button */}
      <div className="mx-auto max-w-5xl px-4 pt-28">
        <ScrollReveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </ScrollReveal>
      </div>

      {work.hasCaseStudy ? (
        <CaseStudyLayout work={work} />
      ) : (
        <SimpleLayout work={work} />
      )}

      {/* Previous / Next Navigation */}
      <div className="mx-auto max-w-5xl px-4 pb-20">
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {prevWork ? (
              <Link
                href={`/projects/${prevWork.slug}`}
                className="glass group flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:border-primary-500/20"
              >
                <ArrowLeft className="h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-primary-400" />
                <div className="min-w-0">
                  <span className="text-xs text-text-muted">Previous</span>
                  <p className="truncate font-heading text-sm font-medium text-text-primary">
                    {prevWork.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextWork ? (
              <Link
                href={`/projects/${nextWork.slug}`}
                className="glass group flex items-center justify-end gap-3 rounded-xl p-4 text-right transition-all duration-300 hover:border-primary-500/20"
              >
                <div className="min-w-0">
                  <span className="text-xs text-text-muted">Next</span>
                  <p className="truncate font-heading text-sm font-medium text-text-primary">
                    {nextWork.name}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-primary-400" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </ScrollReveal>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Full Case Study Layout                                            */
/* ------------------------------------------------------------------ */

function CaseStudyLayout({ work }: { work: (typeof works)[number] }) {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-8">
        <div className="mx-auto max-w-5xl px-4">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-surface-800 p-4">
                <Image
                  src={work.logo}
                  alt={work.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="gradient-text font-heading text-4xl font-bold md:text-5xl">
                    {work.name}
                  </h1>
                  <span className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-400">
                    {getCategoryLabel(work.category)}
                  </span>
                </div>
                {work.role && (
                  <p className="mt-2 text-lg text-text-secondary">{work.role}</p>
                )}
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary-400 transition-colors duration-200 hover:text-primary-500"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 pb-8">
        {/* Overview */}
        {(work.summary || work.detailedSummary) && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={BookOpen} title="Overview" />
              <div className="glass rounded-2xl p-6 md:p-8">
                {work.summary && (
                  <p className="leading-relaxed text-text-secondary">
                    {work.summary}
                  </p>
                )}
                {work.detailedSummary && (
                  <p className="mt-4 leading-relaxed text-text-secondary">
                    {work.detailedSummary}
                  </p>
                )}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* The Problem */}
        {work.problem && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={AlertTriangle} title="The Problem" />
              <div className="glass rounded-2xl border-l-4 border-accent-500/50 p-6 md:p-8">
                <p className="leading-relaxed text-text-secondary">
                  {work.problem}
                </p>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* The Solution */}
        {work.solution && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Lightbulb} title="The Solution" />
              <div className="glass rounded-2xl border-l-4 border-primary-500/50 p-6 md:p-8">
                <p className="leading-relaxed text-text-secondary">
                  {work.solution}
                </p>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Key Contributions */}
        {work.keyContributions && work.keyContributions.length > 0 && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Layers} title="Key Contributions" />
              <div className="space-y-6">
                {work.keyContributions.map((contribution, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 md:p-8"
                  >
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {contribution.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-secondary">
                      {contribution.description}
                    </p>
                    {contribution.highlights && contribution.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {contribution.highlights.map((highlight, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {contribution.example && (
                      <div className="mt-4 rounded-lg bg-surface-200/50 p-4">
                        <p className="text-sm italic text-text-muted">
                          <span className="font-medium text-primary-400">Example: </span>
                          {contribution.example}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Impact Metrics */}
        {work.impactMetrics && work.impactMetrics.length > 0 && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Target} title="Impact Metrics" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {work.impactMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <p className="text-sm font-medium uppercase tracking-wider text-text-muted">
                      {metric.metric}
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <div>
                        <span className="text-sm text-text-muted">Before</span>
                        <p className="mt-1 font-heading text-lg font-semibold text-accent-400">
                          {metric.before}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-primary-400" />
                      <div>
                        <span className="text-sm text-text-muted">After</span>
                        <p className="mt-1 font-heading text-lg font-semibold text-primary-400">
                          {metric.after}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Tech Stack */}
        {work.techStackDetails && work.techStackDetails.length > 0 && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Wrench} title="Tech Stack" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {work.techStackDetails.map((category, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6"
                  >
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-400">
                      {category.category}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-surface-700 px-3 py-1 text-sm text-text-secondary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Challenges */}
        {work.challenges && work.challenges.length > 0 && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={AlertTriangle} title="Challenges" />
              <div className="space-y-3">
                {work.challenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="glass flex items-start gap-3 rounded-xl p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-xs font-bold text-accent-400">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Key Results */}
        {((work.results && work.results.length > 0) ||
          (work.achievements && work.achievements.length > 0)) && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Trophy} title="Key Results" />
              <div className="glass rounded-2xl p-6 md:p-8">
                <ul className="space-y-3">
                  {(work.results ?? work.achievements ?? []).map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Leadership */}
        {work.leadership && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Users} title="Leadership" />
              <div className="glass relative rounded-2xl p-6 md:p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-500/10" />
                <p className="relative leading-relaxed text-text-secondary italic">
                  {work.leadership}
                </p>
              </div>
            </section>
          </ScrollReveal>
        )}

        {/* Key Takeaways */}
        {work.keyTakeaways && work.keyTakeaways.length > 0 && (
          <ScrollReveal>
            <section>
              <SectionTitle icon={Lightbulb} title="Key Takeaways" />
              <div className="glass rounded-2xl p-6 md:p-8">
                <ul className="space-y-3">
                  {work.keyTakeaways.map((takeaway, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-text-secondary"
                    >
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </ScrollReveal>
        )}
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Simple Layout (no case study)                                     */
/* ------------------------------------------------------------------ */

function SimpleLayout({ work }: { work: (typeof works)[number] }) {
  return (
    <section className="pb-16 pt-8">
      <div className="mx-auto max-w-5xl px-4">
        <ScrollReveal>
          <div className="glass rounded-2xl p-8 md:p-12">
            {/* Hero */}
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-surface-800 p-4">
                <Image
                  src={work.logo}
                  alt={work.name}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="gradient-text mt-6 font-heading text-4xl font-bold md:text-5xl">
                {work.name}
              </h1>
              <span className="mt-3 rounded-full bg-primary-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-400">
                {getCategoryLabel(work.category)}
              </span>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
                {work.tagline}
              </p>
            </div>

            {/* Technologies */}
            <div className="mt-10">
              <h2 className="text-center font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                Technologies
              </h2>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {work.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-surface-700 px-4 py-2 text-sm text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* External Link */}
            {work.url && (
              <div className="mt-10 text-center">
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit Live Site
                </a>
              </div>
            )}

            {/* No Case Study Note */}
            <div className="mt-12 rounded-xl bg-surface-200/50 p-6 text-center">
              <p className="text-sm text-text-muted">
                A detailed case study for this project is not available yet. Check
                back soon for an in-depth look at the development process and
                outcomes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared sub-component                                              */
/* ------------------------------------------------------------------ */

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary-400" />
      <h2 className="font-heading text-2xl font-bold text-text-primary">
        {title}
      </h2>
    </div>
  );
}
