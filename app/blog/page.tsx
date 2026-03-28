import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { articles } from "@/data/articles";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on software engineering, quality assurance, front-end development, and professional growth by SaQiB Zafar.",
  openGraph: {
    title: "Blog | SaQiB Zafar",
    description:
      "Articles on software engineering, quality assurance, front-end development, and professional growth.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pb-12 pt-36">
        <div className="container mx-auto max-w-7xl px-4">
          <ScrollReveal>
            <SectionHeader
              as="h1"
              title="Blog"
              subtitle="Thoughts on software engineering, quality assurance, and professional growth"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => {
              const hasContent = !!article.content;

              const card = (
                <article className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-transparent transition-all duration-300 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5">
                  {/* Image */}
                  <div className="h-40 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4">
                    {/* Tags */}
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary-500/10 px-2 py-0.5 text-[10px] font-medium text-primary-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="line-clamp-2 font-heading text-sm font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-primary-500">
                      {article.title}
                    </h2>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-muted">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center gap-3 text-[10px] text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-[10px] font-medium text-primary-400 transition-colors duration-200 group-hover:text-primary-500">
                        {hasContent ? (
                          <>
                            Read
                            <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </>
                        ) : (
                          <>
                            LinkedIn
                            <ExternalLink className="h-3 w-3" />
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </article>
              );

              return (
                <ScrollReveal key={article.id} delay={index * 0.1}>
                  {hasContent ? (
                    <Link
                      href={`/blog/${article.slug}`}
                      className="group block h-full"
                    >
                      {card}
                    </Link>
                  ) : (
                    <a
                      href={article.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      {card}
                    </a>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
