"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { basePath } from "@/lib/constants";
import { generateResumePdf } from "@/lib/generateResumePdf";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "19+", label: "Happy Clients" },
];

export default function AboutSection() {
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
                Hey! I am SaQiB — a Software Quality Assurance Engineer and
                Front-End Developer. I make sure apps and websites
                work the way they should — no bugs, no broken buttons, no
                surprises. I test software thoroughly, find problems before users
                do, and build smooth, good-looking websites that people actually
                enjoy using.
              </p>
              <p className="leading-relaxed text-text-muted">
                I am someone who pays close attention to the small things. If
                something feels off, I will find it and fix it. I love what I do
                because every day is a new puzzle to solve. Whether I am testing
                an app from top to bottom or building a website from scratch, I
                always aim to deliver work that is clean, reliable, and easy to
                use. When I am not working, I am usually learning something new
                or finding better ways to do things.
              </p>
              <div>
                <motion.button
                  onClick={() => generateResumePdf()}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110"
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
                  className="relative overflow-hidden rounded-2xl border border-black/5 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src={`${basePath}/images/my-profile.png`}
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
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="glass flex flex-col items-center justify-center rounded-xl p-3 text-center sm:p-5"
                    whileHover={{
                      scale: 1.05,
                      y: -4,
                      boxShadow: "0 8px 30px rgba(102, 126, 234, 0.12)",
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
