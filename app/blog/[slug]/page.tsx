import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import ConnectCTA from "@/components/blog/ConnectCTA";
import { articles } from "@/data/articles";
import { siteConfig, basePath } from "@/lib/constants";

export function generateStaticParams() {
  return articles
    .filter((a) => a.content)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.tags.join(", "),
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["SaQiB Zafar"],
      tags: article.tags,
      images: [{ url: article.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const articleIndex = articles.findIndex((a) => a.slug === slug);
  if (articleIndex === -1 || !articles[articleIndex].content) {
    notFound();
  }

  const article = articles[articleIndex];
  const content = article.content!;

  // Find prev/next articles that have content
  const articlesWithContent = articles.filter((a) => a.content);
  const contentIndex = articlesWithContent.findIndex((a) => a.slug === slug);
  const prevArticle = contentIndex > 0 ? articlesWithContent[contentIndex - 1] : null;
  const nextArticle =
    contentIndex < articlesWithContent.length - 1
      ? articlesWithContent[contentIndex + 1]
      : null;

  const articleUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <article className="min-h-screen">
      <ReadingProgress />

      {/* Back Button */}
      <div className="mx-auto max-w-3xl px-4 pt-28">
        <ScrollReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-primary-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </ScrollReveal>
      </div>

      {/* Hero */}
      <section className="pb-8 pt-6">
        <div className="mx-auto max-w-3xl px-4">
          <ScrollReveal>
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-500"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mt-6 font-heading text-3xl font-bold leading-tight text-text-primary md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
              <ShareButtons url={articleUrl} title={article.title} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-10">
        <div className="mx-auto max-w-3xl px-4">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-4">
          {/* Intro */}
          <ScrollReveal>
            <div
              className="prose-custom text-lg leading-relaxed text-text-secondary"
              dangerouslySetInnerHTML={{ __html: content.intro }}
            />
          </ScrollReveal>

          {/* Sections */}
          {content.sections.map((section, i) => (
            <ScrollReveal key={i} delay={0.05}>
              <div className="mt-10">
                <h2 className="font-heading text-2xl font-bold text-text-primary">
                  {section.heading}
                </h2>

                {section.content && (
                  <div
                    className="prose-custom mt-4 leading-relaxed text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}

                {section.items && (
                  <div className="mt-6 space-y-5">
                    {section.items.map((item, j) => (
                      <div
                        key={j}
                        className="glass rounded-xl p-5 transition-all duration-300 hover:border-primary-500/15"
                      >
                        <h3 className="font-heading text-base font-semibold text-text-primary">
                          <span className="mr-2 text-primary-500">
                            {j + 1}.
                          </span>
                          {item.title}
                        </h3>
                        <div
                          className="prose-custom mt-2 leading-relaxed text-text-secondary"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}

          {/* Conclusion */}
          <ScrollReveal>
            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Conclusion
              </h2>
              <div
                className="prose-custom mt-4 leading-relaxed text-text-secondary"
                dangerouslySetInnerHTML={{ __html: content.conclusion }}
              />
            </div>
          </ScrollReveal>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />

          {/* Author */}
          <ScrollReveal>
            <div className="glass flex items-center justify-between rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={`${basePath}/images/profile-white-bg.png`}
                    alt="SaQiB Zafar"
                    width={56}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-primary">
                    SaQiB Zafar
                  </p>
                  <p className="text-sm text-text-muted">
                    Software Engineer — SQA & Frontend Developer
                  </p>
                </div>
              </div>
              <div className="hidden sm:block">
                <ShareButtons url={articleUrl} title={article.title} />
              </div>
            </div>
          </ScrollReveal>

          {/* Connect CTA */}
          <div className="mt-8">
            <ConnectCTA />
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {prevArticle ? (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  scroll={true}
                  className="glass group flex items-center gap-3 rounded-xl p-4 transition-all duration-300 hover:border-primary-500/20"
                >
                  <ArrowLeft className="h-5 w-5 shrink-0 text-text-muted transition-colors group-hover:text-primary-400" />
                  <div className="min-w-0">
                    <span className="text-xs text-text-muted">Previous</span>
                    <p className="truncate font-heading text-sm font-medium text-text-primary">
                      {prevArticle.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  scroll={true}
                  className="glass group flex items-center justify-end gap-3 rounded-xl p-4 text-right transition-all duration-300 hover:border-primary-500/20"
                >
                  <div className="min-w-0">
                    <span className="text-xs text-text-muted">Next</span>
                    <p className="truncate font-heading text-sm font-medium text-text-primary">
                      {nextArticle.title}
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
      </section>
    </article>
  );
}
