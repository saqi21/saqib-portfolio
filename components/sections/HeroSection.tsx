"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import CanvasFallback from "@/components/three/CanvasFallback";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWebGL } from "@/hooks/useWebGL";
import { personalInfo } from "@/data/personal";
import { resumeUrl } from "@/lib/constants";

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

const iconMap: Record<string, LucideIcon> = {
  Github,
  Linkedin,
  Facebook,
  Instagram,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
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

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
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
        {/* Intro Text */}
        <motion.p
          className="text-base sm:text-lg text-text-secondary"
          variants={itemVariants}
        >
          Hey, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="gradient-text mt-1 sm:mt-2 font-heading text-[clamp(2.5rem,10vw,4rem)] font-bold md:text-8xl"
          variants={itemVariants}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="mt-2 sm:mt-4 max-w-xl text-base sm:text-xl text-text-secondary md:text-2xl"
          variants={itemVariants}
        >
          {personalInfo.title}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-5 sm:mt-8 flex w-full flex-col items-center justify-center gap-3 px-4 sm:w-auto sm:flex-row sm:gap-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-500 px-5 py-2.5 text-sm font-medium text-primary-400 transition-all duration-300 hover:bg-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 sm:w-auto sm:px-6 sm:py-3"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.a>
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 hover:brightness-110 sm:w-auto sm:px-6 sm:py-3"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
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
                transition={{ delay: 0.6 + index * 0.08, type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-text-secondary transition-colors duration-300 hover:border-primary-500/50 hover:bg-primary-500/10 hover:text-primary-400"
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll Indicator — in-flow on mobile */}
        <motion.div
          className="mt-6 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
      </motion.div>

      {/* Scroll Indicator — absolute on desktop */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
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
