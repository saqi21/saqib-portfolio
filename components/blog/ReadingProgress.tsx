"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(scrollTop / docHeight, 1);
        setProgress(pct);
        scaleX.set(pct);
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, [scaleX]);

  if (progress === 0) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500"
      style={{ scaleX }}
    />
  );
}
