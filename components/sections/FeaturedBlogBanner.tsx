"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import { articles } from "@/data/articles";

export default function FeaturedBlogBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const featured = articles.find((a) => a.content);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!featured) return null;

  const hiddenPaths = [`/blog/${featured.slug}`, "/blog", "/resume"];
  const shouldHide = hiddenPaths.some(
    (p) => pathname === p || (p === "/blog" && pathname.startsWith("/blog/"))
  );
  if (shouldHide || dismissed || !visible) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed left-1/2 top-20 z-50 -translate-x-1/2 sm:top-[76px]"
        >
          <div className="relative flex items-center gap-2 rounded-full border border-black/5 bg-white/95 py-1.5 pl-3 pr-1.5 shadow-lg shadow-black/8 backdrop-blur-md sm:gap-3 sm:py-2 sm:pl-4 sm:pr-2">
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>

            {/* Text */}
            <Link
              href={`/blog/${featured.slug}`}
              onClick={() => setDismissed(true)}
              className="group flex items-center gap-1.5 sm:gap-2"
            >
              <span className="max-w-[180px] truncate text-xs font-medium text-text-primary sm:max-w-[320px] sm:text-sm">
                {featured.title}
              </span>
              <span className="inline-flex shrink-0 items-center gap-0.5 text-xs font-semibold text-primary-500 transition-all duration-200 group-hover:gap-1">
                Read
                <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Link>

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full text-text-muted/40 transition-all duration-200 hover:bg-surface-200 hover:text-text-primary"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
