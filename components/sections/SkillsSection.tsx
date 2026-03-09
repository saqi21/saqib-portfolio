"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode2,
  Atom,
  SquareCode,
  FileText,
  Paintbrush,
  Wind,
  Palette,
  Gem,
  TrainFront,
  Coffee,
  Plug,
  Database,
  TestTube2,
  MonitorCheck,
  ClipboardCheck,
  SearchCheck,
  Leaf,
  RotateCcw,
  CalendarCheck,
  GitBranch,
  Code,
  LayoutList,
  Send,
  Workflow,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/data/skills";
import type { Skill } from "@/types";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";

const skillIconMap: Record<string, LucideIcon> = {
  javascript: Code2,
  typescript: FileCode2,
  react: Atom,
  nextjs: SquareCode,
  html: FileText,
  css: Paintbrush,
  tailwind: Wind,
  palette: Palette,
  gem: Gem,
  train: TrainFront,
  coffee: Coffee,
  api: Plug,
  database: Database,
  "test-tube": TestTube2,
  "monitor-check": MonitorCheck,
  "clipboard-check": ClipboardCheck,
  "api-test": SearchCheck,
  cucumber: Leaf,
  regression: RotateCcw,
  planning: CalendarCheck,
  git: GitBranch,
  vscode: Code,
  jira: LayoutList,
  postman: Send,
  cicd: Workflow,
  figma: PenTool,
};

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "testing", label: "Testing & QA" },
  { key: "tools", label: "Tools" },
] as const;

type CategoryFilter = (typeof categories)[number]["key"];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("testing");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        {/* Category filter tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-primary-500 to-accent-400 text-white shadow-lg shadow-primary-500/25"
                  : "glass text-text-secondary hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <ScrollReveal direction="up" delay={0.1} className="mt-10">
          <motion.div
            layout
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </AnimatePresence>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Sub-component ──────────────────────────────────────────── */

const iconColorMap: Record<string, string> = {
  frontend: "from-primary-400 to-primary-600",
  backend: "from-accent-400 to-accent-500",
  testing: "from-primary-500 to-accent-400",
  tools: "from-primary-600 to-primary-700",
};

const levelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Learning";
};

const levelColor = (level: number) => {
  if (level >= 90) return "text-green-400";
  if (level >= 80) return "text-primary-400";
  if (level >= 70) return "text-accent-400";
  return "text-yellow-400";
};

function SkillCard({ skill }: { skill: Skill }) {
  const gradientClass =
    iconColorMap[skill.category] ?? "from-primary-500 to-accent-400";
  const IconComponent = skillIconMap[skill.icon];

  return (
    <motion.div
      layout
      layoutId={skill.name}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.15)" }}
      className="glass group relative overflow-hidden rounded-xl p-5 text-center"
    >
      {/* Top gradient accent on hover */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-gradient-to-r from-primary-500 to-accent-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientClass} text-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/25`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {IconComponent ? (
          <IconComponent className="h-6 w-6" />
        ) : (
          <span className="text-lg font-bold">{skill.name.charAt(0)}</span>
        )}
      </motion.div>

      {/* Skill name */}
      <p className="mt-3 text-sm font-semibold text-text-primary">
        {skill.name}
      </p>

      {/* Level label */}
      <span className={`mt-1 inline-block text-xs font-medium ${levelColor(skill.level)}`}>
        {levelLabel(skill.level)}
      </span>

      {/* Progress bar */}
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-700">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${gradientClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}
