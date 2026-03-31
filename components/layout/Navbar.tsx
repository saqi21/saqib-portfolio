"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sun, Moon } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { useTheme } from "@/hooks/useTheme";
import Logo from "@/components/shared/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, mounted, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDownloadResume = async () => {
    const { generateResumePdf } = await import("@/lib/generateResumePdf");
    generateResumePdf();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[60]"
      >
        <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-4">
        <nav
          className={`navbar-3d relative flex items-center justify-between rounded-xl border px-5 transition-all duration-500 sm:px-7 ${
            scrolled
              ? "border-surface-200/50 bg-surface-950/90 py-2.5 backdrop-blur-2xl"
              : "border-surface-200/30 bg-surface-950/70 py-3 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Logo className="h-9 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary-400 ${
                  pathname === link.href
                    ? "text-primary-400"
                    : "text-text-secondary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary-500"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-surface-200/50 text-text-secondary transition-colors hover:border-primary-500/30 hover:text-primary-400"
              aria-label="Toggle theme"
            >
              {!mounted ? <Sun size={16} className="opacity-0" /> : theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-5 py-2 text-sm font-medium text-primary-400 transition-all duration-200 hover:border-primary-500/60 hover:bg-primary-500/20"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {!mounted ? <Sun size={18} className="opacity-0" /> : theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:text-text-primary"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-surface-950/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`text-2xl font-medium font-heading transition-colors duration-200 hover:text-primary-400 ${
                      pathname === link.href
                        ? "gradient-text"
                        : "text-text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + navLinks.length * 0.06 }}
              >
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    handleDownloadResume();
                  }}
                  className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-6 py-3 text-lg font-medium text-primary-400 transition-all duration-200 hover:border-primary-500/60 hover:bg-primary-500/20"
                >
                  <Download size={20} />
                  Resume
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
