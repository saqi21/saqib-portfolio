"use client";

import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ProjectsMarquee() {
  // Double the items for seamless infinite loop
  const marqueeItems = [...works, ...works];

  return (
    <section className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="Projects"
            subtitle="Companies and products I have worked with"
          />
        </ScrollReveal>
      </div>

      {/* Marquee container */}
      <div className="group relative mt-12">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-surface-950 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-surface-950 to-transparent" />

        {/* Scrolling track */}
        <div className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((work, index) => (
            <Link
              key={`${work.slug}-${index}`}
              href={`/projects/${work.slug}`}
              className="glass flex h-[180px] w-[280px] shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-transparent p-6 transition-all duration-300 hover:border-primary-500/20 hover:shadow-lg hover:shadow-primary-500/10"
            >
              <Image
                src={work.logo}
                alt={work.name}
                width={80}
                height={80}
                className="h-[60px] w-auto object-contain"
              />
              <div className="text-center">
                <p className="font-heading text-sm font-semibold text-text-primary">
                  {work.name}
                </p>
                <span className="text-xs uppercase tracking-wider text-primary-400">
                  {work.category === "sqa" ? "SQA" : "Frontend & SQA"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
