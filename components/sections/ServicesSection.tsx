"use client";

import { motion } from "framer-motion";
import { Code, ShieldCheck, Zap, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Code,
  ShieldCheck,
  Zap,
  Server,
};

export default function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            title="What I Do"
            subtitle="Services I offer"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <motion.div
                  className="glass group h-full cursor-default rounded-2xl border border-transparent p-8 transition-colors duration-300 hover:border-primary-500/20"
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.08)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-primary-500/10"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {Icon && <Icon className="text-primary-400" size={28} />}
                  </motion.div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
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
