"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { works } from "@/data/works";
import { useTheme } from "@/hooks/useTheme";

const logos = works.filter((w) => w.featured);

export default function TrustedBySection() {
  const { theme, mounted } = useTheme();

  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <motion.p
          className="text-center text-sm font-medium uppercase tracking-widest text-text-secondary"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by teams at
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {logos.map((work) => (
            <motion.div
              key={work.slug}
              className="flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={work.logo}
                alt={work.name}
                width={100}
                height={40}
                className={`h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 sm:h-10 ${
                  !mounted || theme === "dark"
                    ? "brightness-0 invert opacity-50 hover:opacity-100"
                    : "brightness-0 opacity-40 hover:opacity-80"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
