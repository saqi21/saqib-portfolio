"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { articles } from "@/data/articles";

export default function ArticlesSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="Latest Writing"
            subtitle="Thoughts on engineering and quality"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <motion.div
                  className="glass overflow-hidden rounded-2xl border border-transparent transition-colors duration-300 hover:border-primary-500/20"
                  whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Image Area */}
                  <div className="h-40 w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={160}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="text-xs text-primary-400">
                      {article.readTime}
                    </span>
                    <h3 className="mt-1 line-clamp-2 font-heading text-sm font-semibold text-text-primary">
                      {article.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-1 text-xs text-text-muted transition-colors duration-200 group-hover:text-primary-400">
                      <span>Read on LinkedIn</span>
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </div>
                </motion.div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
