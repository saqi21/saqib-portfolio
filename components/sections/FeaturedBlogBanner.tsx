"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Sparkles } from "lucide-react";

import { articles } from "@/data/articles";

export default function FeaturedBlogBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const featured = articles.find((a) => a.content);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!featured) return null;

  // Hide on the featured article page, blog listing, and resume
  const hiddenPaths = [`/blog/${featured.slug}`, "/blog", "/resume"];
  const shouldHide = hiddenPaths.some(
    (p) => pathname === p || (p === "/blog" && pathname.startsWith("/blog/"))
  );
  if (shouldHide || dismissed || !visible) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ x: 400, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 400, opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
          }}
          className="fixed bottom-6 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] sm:w-[380px]"
        >
          <div className="relative overflow-hidden rounded-2xl border border-primary-500/20 bg-white shadow-2xl shadow-primary-500/10">
            {/* Gradient top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-400" />

            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute right-3 top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-text-muted transition-all duration-200 hover:bg-surface-200 hover:text-text-primary"
            >
              <X className="h-3.5 w-3.5" />
            </button>

            <Link
              href={`/blog/${featured.slug}`}
              className="group block p-4"
              onClick={() => setDismissed(true)}
            >
              {/* Header */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  <Sparkles className="h-2.5 w-2.5" />
                  New Article
                </span>
              </div>

              {/* Content row */}
              <div className="mt-3 flex gap-3">
                {/* Thumbnail */}
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-primary-500">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted">
                    {featured.readTime}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-3 flex items-center justify-between">
                <p className="line-clamp-1 max-w-[200px] text-xs text-text-muted">
                  {featured.description}
                </p>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-primary-500 transition-all duration-200 group-hover:gap-2">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {/* Animated pulse ring */}
            <div className="absolute -bottom-1 -right-1 h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary-500" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
