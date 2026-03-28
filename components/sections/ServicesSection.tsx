"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Code,
  GitBranch,
  Users,
  TrendingUp,
} from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    title: "Test Automation",
    description:
      "I don't just write tests — I build entire frameworks. Cypress, Selenium, Cucumber BDD, Page Object Model, all wired into CI/CD so bugs get caught before anyone hits merge.",
    icon: Zap,
    gradient: "from-primary-500 to-primary-700",
  },
  {
    title: "Manual QA",
    description:
      "Sometimes the best bug-finder is a human with a plan. I design test strategies, run deep exploratory sessions, and catch the edge cases automation misses.",
    icon: ShieldCheck,
    gradient: "from-accent-400 to-accent-500",
  },
  {
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, Ruby on Rails, HTML, CSS, SCSS, Tailwind — I build interfaces that look great, load fast, and work on every screen size.",
    icon: Code,
    gradient: "from-primary-400 to-primary-600",
  },
  {
    title: "CI/CD & QAOps",
    description:
      "I plug quality directly into your pipeline. GitHub Actions, automated test gates, Slack alerts on failures — your team ships faster because quality is built in, not bolted on.",
    icon: GitBranch,
    gradient: "from-primary-500 to-accent-400",
  },
  {
    title: "Team Leadership",
    description:
      "I've mentored junior QA engineers, led sprint planning, and bridged the gap between dev and QA teams. Good quality culture starts with good communication.",
    icon: Users,
    gradient: "from-accent-500 to-primary-500",
  },
  {
    title: "Quality Strategy",
    description:
      "Before writing a single test, I ask: what matters most? I design testing strategies that focus effort where it counts — reducing bugs, speeding up releases, and building team confidence.",
    icon: TrendingUp,
    gradient: "from-primary-600 to-primary-400",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="What I Do"
            subtitle="Services and expertise I bring to every project"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={index * 0.05}>
                <motion.div
                  className="glass group relative h-full overflow-hidden rounded-2xl border border-transparent p-6 transition-colors duration-200 hover:border-primary-500/20"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 40px rgba(99, 102, 241, 0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Top accent line on hover */}
                  <div
                    className={`absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-200 group-hover:opacity-100`}
                  />

                  <div
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-md`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-heading text-base font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
