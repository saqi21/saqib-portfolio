"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from "lucide-react";
import { experiences, education } from "@/data/experience";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey"
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-400 to-transparent md:left-1/2 md:-translate-x-px md:block" />
          <div className="absolute left-6 top-0 block h-full w-0.5 bg-gradient-to-b from-primary-500 via-accent-400 to-transparent md:hidden" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="relative flex items-start"
                >
                  {/* Desktop layout */}
                  <div className="hidden w-full md:flex">
                    {/* Left content area */}
                    <div className="w-1/2 pr-12">
                      {isLeft && (
                        <ScrollReveal direction="left" delay={index * 0.15}>
                          <TimelineCard experience={exp} />
                        </ScrollReveal>
                      )}
                    </div>

                    {/* Center dot */}
                    <motion.div
                      className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 }}
                    >
                      <motion.div
                        className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-surface-900 bg-gradient-to-r from-primary-500 to-accent-400 shadow-lg shadow-primary-500/25"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Briefcase className="h-4 w-4 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Right content area */}
                    <div className="w-1/2 pl-12">
                      {!isLeft && (
                        <ScrollReveal direction="right" delay={index * 0.15}>
                          <TimelineCard experience={exp} />
                        </ScrollReveal>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex w-full md:hidden">
                    {/* Dot on the left line */}
                    <motion.div
                      className="absolute left-6 z-10 flex -translate-x-1/2 items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.1 }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-surface-900 bg-gradient-to-r from-primary-500 to-accent-400 shadow-lg shadow-primary-500/25">
                        <Briefcase className="h-3 w-3 text-white" />
                      </div>
                    </motion.div>

                    {/* Card content */}
                    <div className="ml-14 w-full">
                      <ScrollReveal direction="left" delay={index * 0.15}>
                        <TimelineCard experience={exp} />
                      </ScrollReveal>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <ScrollReveal direction="up" delay={0}>
            <div className="mb-8 flex items-center gap-3">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-accent-400"
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <GraduationCap className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                Education
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.institution} direction="up" delay={index * 0.1}>
                <motion.div
                  className="glass group relative overflow-hidden rounded-2xl p-6"
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient accent bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-400 transition-all duration-300 group-hover:w-1.5" />

                  <div className="pl-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-400/15"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <GraduationCap className="h-5 w-5 text-primary-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-heading text-lg font-semibold text-text-primary">
                            {edu.degree}
                          </h4>
                          <p className="mt-0.5 text-sm font-medium text-primary-400">
                            {edu.institution}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="inline-flex w-fit shrink-0 items-center gap-1.5 self-start rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400 sm:self-auto">
                        <CheckCircle className="h-3 w-3" />
                        Completed
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-text-muted">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sub-component ──────────────────────────────────────────── */

interface TimelineCardProps {
  experience: (typeof experiences)[number];
}

function TimelineCard({ experience }: TimelineCardProps) {
  return (
    <motion.div
      className="glass group rounded-2xl p-6"
      whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(102, 126, 234, 0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-sm font-medium text-primary-400">
          {experience.period}
        </span>
        {experience.type && (
          <span className="inline-block rounded-full border border-accent-400/30 bg-accent-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-400">
            {experience.type}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-heading text-xl font-semibold text-text-primary">
        {experience.title}
      </h3>

      <div className="mt-1 flex flex-col gap-1 text-sm text-text-secondary sm:flex-row sm:items-center sm:gap-2">
        <span>{experience.company}</span>
        <span className="hidden text-text-muted sm:inline">&middot;</span>
        <div className="flex items-center gap-1">
          <MapPin className="h-3 w-3 text-text-muted" />
          <span>{experience.location}</span>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {experience.description}
      </p>
    </motion.div>
  );
}
