"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Flame } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArticleCardSkeleton } from "@/components/shared/SkeletonCard";
import { articles } from "@/data/articles";

function isRecent(dateStr: string): boolean {
  const articleDate = new Date(dateStr);
  const now = new Date();
  const diffDays = (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= 30;
}

export default function ArticlesSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="articles" className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="Latest Writing"
            subtitle="Thoughts on engineering and quality"
          />
        </ScrollReveal>

        {!loaded ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.slice(0, 4).map((article, index) => {
            const hasContent = !!article.content;
            const fresh = isRecent(article.date);

            const cardContent = (
              <motion.div
                className="glass relative overflow-hidden rounded-2xl border border-transparent transition-colors duration-300 hover:border-primary-500/20"
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 40px rgba(102, 126, 234, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Image Area */}
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={160}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Fresh Badge */}
                  {fresh && (
                    <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-accent-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
                      <Flame className="h-3 w-3" />
                      Fresh
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-primary-400">
                      {article.readTime}
                    </span>
                    <span className="text-xs text-text-muted">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="mt-1.5 line-clamp-2 font-heading text-sm font-semibold text-text-primary">
                    {article.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-primary-400 transition-all duration-200 group-hover:gap-2">
                    {hasContent ? (
                      <>
                        <span>Read the Full Breakdown</span>
                        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    ) : (
                      <>
                        <span>Read on LinkedIn</span>
                        <ExternalLink className="h-3 w-3" />
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );

            return (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                {hasContent ? (
                  <Link href={`/blog/${article.slug}`} className="group block">
                    {cardContent}
                  </Link>
                ) : (
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    {cardContent}
                  </a>
                )}
              </ScrollReveal>
            );
          })}
        </div>
        )}

        {/* View All Button */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
