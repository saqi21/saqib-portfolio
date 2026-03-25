"use client";

import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ConnectCTA() {
  return (
    <ScrollReveal>
      <div className="relative overflow-hidden rounded-2xl border border-primary-500/15 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 p-6 sm:p-8">
        {/* Glow */}
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-primary-500/10 blur-3xl" />

        <div className="relative">
          <h3 className="font-heading text-lg font-bold text-text-primary">
            Enjoyed this article?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
            I write about QA engineering, test automation, and the tools shaping
            our industry. Connect with me on LinkedIn or explore my projects to
            see these principles in action.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <motion.a
              href="https://www.linkedin.com/in/saqibzafar-sqa/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-500 px-5 py-2.5 text-sm font-medium text-primary-400 transition-all duration-300 hover:bg-primary-500/10"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
