"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import { personalInfo } from "@/data/personal";

export default function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-primary-500/10 via-surface-800 to-accent-500/10" />
            <div className="absolute inset-0 -z-10 rounded-3xl border border-surface-200/30" />

            {/* Animated radial glow decoration */}
            <motion.div
              className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Content */}
            <motion.h2
              className="gradient-text p-2.5 font-heading text-3xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              Let&apos;s Build Something Great
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-lg text-lg text-text-secondary"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Need a QA engineer who builds? Or a developer who tests?
              Let&apos;s talk about your project.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110 sm:min-w-[220px]"
                >
                  <Calendar className="h-4 w-4" />
                  Start a Project
                </Link>
              </motion.div>
              <motion.div
                className="w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-500/30 px-8 py-3.5 text-sm font-medium text-primary-400 transition-all duration-300 hover:bg-primary-500/10 sm:min-w-[220px]"
                >
                  <Mail className="h-4 w-4" />
                  Email Me Directly
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
