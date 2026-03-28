"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  as?: "h1" | "h2";
}

export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  as: Tag = "h2",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const headingProps = {
    className: "gradient-text font-heading text-3xl font-bold md:text-4xl",
    initial: { opacity: 0, y: 8 } as const,
    animate: isInView ? { opacity: 1, y: 0 } : undefined,
    transition: { duration: 0.2, ease: "easeOut" as const },
  };

  return (
    <div ref={ref} className={centered ? "text-center" : ""}>
      {Tag === "h1" ? (
        <motion.h1 {...headingProps}>{title}</motion.h1>
      ) : (
        <motion.h2 {...headingProps}>{title}</motion.h2>
      )}
      <motion.div
        className={`mt-3 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${
          centered ? "mx-auto" : ""
        }`}
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : undefined}
        transition={{ duration: 0.25, delay: 0.05, ease: "easeOut" }}
      />
      <motion.p
        className={`mt-3 max-w-2xl text-text-secondary ${
          centered ? "mx-auto" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.2, delay: 0.08, ease: "easeOut" }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
