"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function CustomCursor() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    // Event delegation — no MutationObserver needed, no listener accumulation
    const hoverSelector = "a, button, [role='button'], input, textarea, select, [data-cursor-hover]";
    const handleMouseOver = (e: Event) => {
      if ((e.target as HTMLElement).closest(hoverSelector)) setHovering(true);
    };
    const handleMouseOut = (e: Event) => {
      if ((e.target as HTMLElement).closest(hoverSelector)) setHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isMobile, visible, x, y]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      >
        <div
          className={`h-full w-full rounded-full border transition-all duration-150 ${
            hovering
              ? "border-primary-400/60 bg-primary-500/10"
              : "border-primary-500/30 bg-transparent"
          }`}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          x: cursorX.current,
          y: cursorY.current,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          x: cursorX.current,
          y: cursorY.current,
          width: hovering ? 6 : 5,
          height: hovering ? 6 : 5,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.05 }}
      >
        <div className="h-full w-full rounded-full bg-primary-400" />
      </motion.div>
    </>
  );
}
