"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { ProjectCardSkeleton } from "@/components/shared/SkeletonCard";
import { works } from "@/data/works";

const featuredWorks = works;

function ProjectCard({ work }: { work: (typeof works)[number] }) {
  return (
    <Link href={`/projects/${work.slug}`} className="group block h-full">
      <motion.div
        className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-transparent transition-colors duration-300 hover:border-primary-500/20"
        whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.1)" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Logo Area */}
        <div className="flex aspect-[16/9] items-center justify-center bg-[#e2e8f0] p-6 md:aspect-[4/3]">
          <Image
            src={work.logo}
            alt={`${work.name} — ${work.category === "sqa" ? "QA Automation" : "Frontend & QA"} project`}
            width={160}
            height={160}
            className="h-auto max-h-[120px] w-auto max-w-[160px] object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs uppercase tracking-wider text-primary-400">
            {work.category === "sqa" ? "SQA" : "Frontend & SQA"}
          </span>
          <h3 className="mt-1 font-heading text-xl font-semibold text-text-primary">
            {work.name}
          </h3>
          <p className="mt-2 flex-1 text-sm text-text-secondary">
            {work.tagline}
          </p>

          {/* Tech Stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {work.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-surface-700 px-2 py-1 text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function ProjectsPreview() {
  const [page, setPage] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();
  const perPage = isMobile ? 1 : 3;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const totalPages = Math.ceil(featuredWorks.length / perPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev >= totalPages - 1 ? 0 : prev + 1));
  };

  const visibleWorks = featuredWorks.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <div>
            <SectionHeader
              title="Featured Work"
              subtitle="Recent projects I've worked on"
            />
            {totalPages > 1 && (
              <div className="mt-6 flex justify-center gap-2 sm:mt-0 sm:justify-end">
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/30 text-primary-400 transition-colors hover:bg-primary-500/10"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="h-5 w-5" />
                </motion.button>
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/30 text-primary-400 transition-colors hover:bg-primary-500/10"
                  aria-label="Next projects"
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </div>
            )}
          </div>
        </ScrollReveal>

        <div className="relative mt-12 overflow-hidden">
          {!loaded ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {Array.from({ length: perPage }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 gap-6 md:grid-cols-3"
              >
                {visibleWorks.map((work) => (
                  <div key={work.slug} className="h-full">
                    <ProjectCard work={work} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Dots indicator */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-6 bg-primary-500"
                    : "w-2 bg-surface-700 hover:bg-primary-500/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Projects Link */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-primary-500 px-6 py-3 text-sm font-medium text-primary-400 transition-all duration-300 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20"
              >
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
