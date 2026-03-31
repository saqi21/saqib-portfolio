"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import LiveTestReport from "@/components/sections/LiveTestReport";
import { basePath } from "@/lib/constants";

const stats = [
  { value: "5+", label: "Years in Tech" },
  { value: "6+", label: "Products Shipped" },
  { value: "80%", label: "Automation Coverage" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="About Me"
            subtitle="The developer who tests. The tester who builds."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Bio */}
          <ScrollReveal direction="left" delay={0.2} className="order-2 lg:order-1">
            <div className="flex flex-col gap-5">
              <p className="text-lg leading-relaxed text-text-secondary">
                Most QA engineers find testing. I came from the other side — I
                was a frontend developer building interfaces for US-based
                clients when I noticed a pattern: the bugs I kept fixing should
                have been caught long before they reached me. That pulled me
                into QA, and I never looked back.
              </p>
              <p className="leading-relaxed text-text-secondary">
                Now I work at the intersection of both disciplines. I build
                full-stack applications using modern frameworks like React,
                Next.js, and Ruby on Rails — then architect the Cypress
                automation frameworks that keep it all honest. The results
                speak for themselves — automation coverage from{" "}
                <span className="font-semibold text-primary-400">
                  0% to 80%
                </span>{" "}
                at Beambox,{" "}
                <span className="font-semibold text-primary-400">
                  zero critical bugs across 5 consecutive releases
                </span>{" "}
                at Lumimeds.
              </p>
              <p className="leading-relaxed text-text-muted">
                Over 5+ years, I&apos;ve shipped insurance platforms, healthcare
                systems, e-learning tools, and SaaS products with remote teams
                across the USA, Europe, and Pakistan. My edge? I don&apos;t just
                write tests — I think like the user who&apos;ll rage-quit, break
                things like the hacker who&apos;ll try, and ship like someone
                whose reputation is on every release.
              </p>

              {/* CTA */}
              <div className="mt-1">
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110"
                  >
                    See My Work
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Profile Image + Stats */}
          <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
            <div className="flex flex-col items-center gap-8">
              {/* Profile Image */}
              <motion.div
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 blur-sm" />
                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-surface-200/50 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`${basePath}/images/profile-white-bg.png`}
                    alt="SaQiB Zafar"
                    width={320}
                    height={320}
                    className="h-auto w-[280px] object-cover md:w-[320px]"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Stats */}
              <div className="grid w-full grid-cols-3 gap-2 sm:gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="glass flex flex-col items-center justify-center rounded-xl p-3 text-center sm:p-5"
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      boxShadow: "0 8px 30px rgba(99, 102, 241, 0.12)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      className="gradient-text font-heading text-3xl font-bold md:text-4xl"
                    />
                    <span className="mt-1 text-xs text-text-secondary">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Live Test Report */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <LiveTestReport />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
