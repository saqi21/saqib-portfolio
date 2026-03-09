"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className={centered ? "text-center" : ""}>
      <motion.h2
        className="gradient-text font-heading text-3xl font-bold md:text-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={`mt-4 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${
          centered ? "mx-auto" : ""
        }`}
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.p
        className={`mt-4 max-w-2xl text-text-secondary ${
          centered ? "mx-auto" : ""
        }`}
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
