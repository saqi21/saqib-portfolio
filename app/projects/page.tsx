"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { works } from "@/data/works";

const categories = [
  { label: "All", value: "all" },
  { label: "SQA", value: "sqa" },
  { label: "Frontend & SQA", value: "frontend-sqa" },
] as const;

type CategoryValue = (typeof categories)[number]["value"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");

  const filteredWorks =
    activeCategory === "all"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <section className="section-padding pt-36">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="My Projects"
            subtitle="Work I'm proud of"
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25"
                    : "glass text-text-secondary hover:text-text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work) => (
              <motion.div
                key={work.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/projects/${work.slug}`}
                  className="group block h-full"
                >
                  <div className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-transparent transition-all duration-300 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/5">
                    {/* Logo Area */}
                    <div className="flex h-48 items-center justify-center bg-surface-800 p-8">
                      <Image
                        src={work.logo}
                        alt={work.name}
                        width={100}
                        height={100}
                        className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-primary-400">
                          {work.category === "sqa"
                            ? "SQA"
                            : "Frontend & SQA"}
                        </span>
                        {work.hasCaseStudy && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent-500/15 px-2 py-0.5 text-xs text-accent-400">
                            <BookOpen className="h-3 w-3" />
                            Case Study
                          </span>
                        )}
                      </div>

                      {/* Name */}
                      <h3 className="mt-2 font-heading text-xl font-semibold text-text-primary transition-colors duration-200 group-hover:text-primary-400">
                        {work.name}
                      </h3>

                      {/* Tagline */}
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                        {work.tagline}
                      </p>

                      {/* Technologies */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {work.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-surface-700 px-2.5 py-1 text-xs text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* External URL */}
                      {work.url && (
                        <div className="mt-4">
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(work.url, "_blank", "noopener,noreferrer");
                            }}
                            className="inline-flex items-center gap-1 text-xs text-text-muted transition-colors duration-200 hover:text-primary-400"
                          >
                            <ExternalLink className="h-3 w-3" />
                            {work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-text-muted">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
