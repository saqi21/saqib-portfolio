"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { basePath } from "@/lib/constants";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "80%", label: "Automation Coverage at Beambox" },
  { value: "0", label: "Critical Bugs Across 5 Releases" },
];

export default function AboutSection() {
  const handleDownloadResume = async () => {
    const { generateResumePdf } = await import("@/lib/generateResumePdf");
    generateResumePdf();
  };

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="About Me"
            subtitle="Building flawless interfaces. Breaking bugs before users do."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Bio (shows second on mobile, first on desktop) */}
          <ScrollReveal direction="left" delay={0.2} className="order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-text-secondary">
                I help product teams ship confidently. Whether that means
                building responsive UIs in React/Next.js or designing
                automation frameworks that catch bugs before users do, I
                obsess over the details that make software reliable.
              </p>
              <p className="leading-relaxed text-text-muted">
                The combination of frontend engineering and QA is rare — and
                powerful. I don&apos;t just build it, I make sure it works.
                From increasing automation coverage from 0% to 80% at
                Beambox, to achieving zero critical bugs across 5 consecutive
                releases at Lumimeds, I bring a quality-first mindset to
                everything I ship.
              </p>
              <div>
                <motion.button
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </motion.button>
              </div>
            </div>
          </ScrollReveal>

          {/* Profile Image + Stats (shows first on mobile) */}
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
                    <span className="gradient-text font-heading text-3xl font-bold md:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs text-text-secondary">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
