"use client";

import { useState, useEffect, useCallback } from "react";
import { Quote, Star, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const avatarColors = [
  "from-primary-500 to-primary-700",
  "from-accent-400 to-accent-500",
  "from-indigo-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const testimonial = testimonials[current];
  const colorClass = avatarColors[current % avatarColors.length];

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="Client Testimonials"
            subtitle="Real feedback from people I've worked with"
          />
        </ScrollReveal>

        {/* Slider */}
        <div
          className="mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <div className="glass group relative rounded-2xl border border-transparent p-8 transition-colors duration-300 hover:border-primary-500/20 md:p-10">
                  {/* Large quote icon */}
                  <Quote className="absolute right-6 top-6 h-16 w-16 text-primary-500/5 md:right-10 md:top-8 md:h-20 md:w-20" />

                  {/* Quote text */}
                  <p className="relative text-base leading-relaxed text-text-secondary md:text-lg md:leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-primary-500/15 to-transparent" />

                  {/* Author row */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${colorClass} text-sm font-bold text-white shadow-lg`}
                      >
                        {getInitials(testimonial.name)}
                      </div>

                      <div>
                        <p className="font-heading text-sm font-semibold text-text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        {/* Stars */}
                        <div className="mt-1 flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < testimonial.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-surface-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project badge */}
                    {testimonial.project && (
                      <div className="hidden items-center gap-1.5 rounded-full bg-primary-500/10 px-3 py-1.5 sm:flex">
                        <Briefcase className="h-3.5 w-3.5 text-primary-400" />
                        <span className="text-xs font-medium text-primary-500">
                          {testimonial.project}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Mobile project badge */}
                  {testimonial.project && (
                    <div className="mt-4 flex items-center gap-1.5 sm:hidden">
                      <Briefcase className="h-3.5 w-3.5 text-primary-400" />
                      <span className="text-xs font-medium text-primary-500">
                        Project: {testimonial.project}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {/* Prev button */}
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 bg-white/60 text-text-muted backdrop-blur-sm transition-all duration-200 hover:border-primary-500/30 hover:text-primary-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-primary-500"
                      : "w-2 bg-surface-200 hover:bg-primary-500/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-200 bg-white/60 text-text-muted backdrop-blur-sm transition-all duration-200 hover:border-primary-500/30 hover:text-primary-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
