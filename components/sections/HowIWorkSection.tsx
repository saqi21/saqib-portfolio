"use client";

import { motion } from "framer-motion";
import { Search, FileText, Rocket, MessageCircle } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    icon: MessageCircle,
    title: "Discovery",
    description:
      "We start with a conversation to understand your goals, requirements, and timeline.",
  },
  {
    icon: Search,
    title: "Planning",
    description:
      "I define the scope, create a test strategy or technical plan, and align on deliverables.",
  },
  {
    icon: FileText,
    title: "Execution",
    description:
      "I build, test, and iterate — keeping you in the loop with regular updates and demos.",
  },
  {
    icon: Rocket,
    title: "Delivery",
    description:
      "Clean handoff with documentation. Ongoing support available if needed.",
  },
];

export default function HowIWorkSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="How I Work"
            subtitle="A proven process that keeps projects on track"
          />
        </ScrollReveal>

        <div className="relative mt-14">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary-500/30 via-primary-500/10 to-transparent md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.1}
                >
                  <motion.div
                    className="glass group relative rounded-2xl p-6 sm:p-8"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 12px 40px rgba(99, 102, 241, 0.1)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {/* Step number */}
                    <span className="absolute -top-3 right-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-xs font-bold text-white shadow-lg">
                      {index + 1}
                    </span>

                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                    >
                      <Icon className="h-6 w-6 text-primary-400" />
                    </motion.div>

                    <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {step.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
