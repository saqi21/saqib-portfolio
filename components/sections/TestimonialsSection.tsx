"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="glass flex h-full flex-col rounded-2xl border border-transparent p-6 transition-colors duration-300 hover:border-primary-500/20"
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Quote icon */}
        <Quote className="h-6 w-6 text-primary-500/30" />

        {/* Quote text */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />

        {/* Author & Rating */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-text-primary">{testimonial.name}</p>
            <p className="text-xs text-text-muted">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < testimonial.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-surface-700"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project badge */}
        {testimonial.project && (
          <span className="mt-3 inline-block w-fit rounded-full bg-primary-500/10 px-2.5 py-0.5 text-xs text-primary-400">
            {testimonial.project}
          </span>
        )}
      </motion.div>
    </ScrollReveal>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="Testimonials"
            subtitle="What people say about my work"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
