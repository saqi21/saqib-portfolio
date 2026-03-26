"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight, Mail, MapPin } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { personalInfo } from "@/data/personal";
import { articles } from "@/data/articles";
import { socialIconMap } from "@/lib/icons";

const iconMap = socialIconMap;

const recentArticles = articles.filter((a) => a.content).slice(0, 2);

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-surface-200/20 bg-surface-900">
      {/* Subtle gradient glow at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Top section: 4-column grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="gradient-text font-heading text-3xl font-bold">
              SaQiB Zafar
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              The developer who tests. The tester who builds. Helping teams
              ship confident, zero-bug releases.
            </p>

            {/* Mini contact info */}
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-text-muted transition-colors duration-200 hover:text-primary-400"
              >
                <Mail className="h-3.5 w-3.5" />
                {personalInfo.email}
              </a>
              <p className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.address}
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {personalInfo.socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-surface-200/30 text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-primary-400 hover:shadow-lg hover:shadow-primary-500/10"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Navigation
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-text-muted transition-all duration-200 hover:text-primary-400"
                  >
                    <span className="h-px w-0 bg-primary-500 transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Articles */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Recent Articles
            </h4>
            <div className="mt-5 space-y-4">
              {recentArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.slug}`}
                  className="group block"
                >
                  <p className="line-clamp-2 text-sm text-text-muted transition-colors duration-200 group-hover:text-primary-400">
                    {article.title}
                  </p>
                  <span className="mt-1 text-xs text-text-muted/60">
                    {article.readTime} · {article.date}
                  </span>
                </Link>
              ))}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs font-medium text-primary-400 transition-all duration-200 hover:gap-2"
              >
                View all articles
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* CTA / Let's Work */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Let&apos;s Work Together
            </h4>
            <p className="mt-5 text-sm leading-relaxed text-text-muted">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities and interesting ideas.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:brightness-110"
            >
              Start a Conversation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-surface-200/15 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} SaQiB Zafar. All rights reserved.
          </p>
          <p className="text-xs text-text-muted/50">
            Designed &amp; built by SaQiB Zafar
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-surface-200/30 bg-surface-950/90 text-text-muted shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/40 hover:text-primary-400 hover:shadow-primary-500/20"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
}
