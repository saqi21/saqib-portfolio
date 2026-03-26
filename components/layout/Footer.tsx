import Link from "next/link";
import { navLinks } from "@/lib/constants";
import { personalInfo } from "@/data/personal";
import { socialIconMap } from "@/lib/icons";

const iconMap = socialIconMap;

export default function Footer() {
  return (
    <footer className="border-t border-surface-200/30 bg-surface-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Branding */}
          <div>
            <h3 className="gradient-text font-heading text-2xl font-bold">
              SaQiB
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              Front End Developer & SQA Engineer crafting elegant, tested, and
              performant digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
              Connect
            </h4>
            <div className="flex gap-4">
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
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-200/20 text-text-secondary transition-all duration-200 hover:bg-primary-500/20 hover:text-primary-400"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-surface-200/30 pt-8 text-center text-xs text-text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} SaQiB Zafar. All rights reserved.</p>
          <p>Built with Next.js &amp; Three.js</p>
        </div>
      </div>
    </footer>
  );
}
