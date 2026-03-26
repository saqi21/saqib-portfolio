"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { socialIconMap } from "@/lib/icons";
import CanvasFallback from "@/components/three/CanvasFallback";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWebGL } from "@/hooks/useWebGL";
import { personalInfo } from "@/data/personal";


const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
  loading: () => <CanvasFallback />,
});

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  { ssr: false }
);

const FloatingGeometry = dynamic(
  () => import("@/components/three/FloatingGeometry"),
  { ssr: false }
);

const iconMap = socialIconMap;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  const { normalizedX, normalizedY } = useMousePosition();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const webGLSupported = useWebGL();

  const mousePosition = useMemo(
    () => ({ x: normalizedX, y: normalizedY }),
    [normalizedX, normalizedY]
  );

  const handleDownloadResume = async () => {
    const { generateResumePdf } = await import("@/lib/generateResumePdf");
    generateResumePdf();
  };

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {webGLSupported ? (
          <Scene>
            <ParticleField
              count={isMobile ? 400 : 800}
              mousePosition={mousePosition}
            />
            <FloatingGeometry visible={!isMobile} />
          </Scene>
        ) : (
          <CanvasFallback />
        )}
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Availability badge */}
        <motion.div
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-400/20 bg-accent-400/5 px-4 py-1.5"
          variants={itemVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
          </span>
          <span className="text-xs font-medium text-accent-400">
            Available for new projects
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="gradient-text font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-tight"
          variants={itemVariants}
        >
          SaQiB Zafar
        </motion.h1>

        {/* Value Proposition */}
        <motion.p
          className="mt-3 max-w-2xl text-base sm:text-xl text-text-secondary md:text-2xl"
          variants={itemVariants}
        >
          I build pixel-perfect interfaces and bulletproof test automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-6 sm:mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110 sm:w-auto sm:px-6 sm:py-3"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.button
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-500/40 bg-surface-950/50 px-5 py-2.5 text-sm font-medium text-primary-400 transition-all duration-300 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 sm:w-auto sm:px-6 sm:py-3"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-4 sm:mt-6 flex items-center gap-3"
          variants={itemVariants}
        >
          {personalInfo.socialLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            if (!Icon) return null;
            return (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 + index * 0.03, duration: 0.2 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200/50 text-text-secondary transition-colors duration-300 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </motion.div>

      </motion.div>

      {/* Scroll Indicator — absolute to section */}
      <motion.div
        className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.2 }}
      >
        <motion.button
          onClick={() => {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex cursor-pointer flex-col items-center gap-1"
        >
          <span className="text-xs text-text-muted">Scroll</span>
          <ChevronDown className="h-5 w-5 text-text-muted" />
        </motion.button>
      </motion.div>
    </section>
  );
}
