"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Phone,
  MapPin,
  Loader2,
} from "lucide-react";

import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeader from "@/components/shared/SectionHeader";
import { sendContactEmail } from "@/lib/emailjs";
import { personalInfo } from "@/data/personal";
import { socialIconMap } from "@/lib/icons";
import type { ContactFormData } from "@/types";

const iconMap = socialIconMap;
const getTimestamp = () => Date.now();

interface StatusMessage {
  type: "success" | "error" | "warning";
  text: string;
}

export default function ContactPage() {
  const [status, setStatus] = useState<StatusMessage | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const clearStatus = useCallback(() => {
    setStatus(null);
  }, []);

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(clearStatus, 5000);
    return () => clearTimeout(timer);
  }, [status, clearStatus]);

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check — bots fill hidden fields
    const honeypot = (document.querySelector('input[name="website"]') as HTMLInputElement)?.value;
    if (honeypot) return;

    const now = getTimestamp();

    // Rate limiting — 1 submission per 60 seconds
    const lastSent = localStorage.getItem("lastContactSent");
    if (lastSent && now - Number(lastSent) < 60000) {
      setStatus({ type: "warning", text: "Please wait a moment before sending again." });
      return;
    }

    try {
      const result = await sendContactEmail(data);

      if (result.success && result.warning) {
        localStorage.setItem("lastContactSent", String(now));
        setStatus({ type: "warning", text: result.message });
        reset();
      } else if (result.success) {
        localStorage.setItem("lastContactSent", String(now));
        setStatus({ type: "success", text: result.message });
        reset();
      } else {
        setStatus({ type: "error", text: result.message });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  const statusColor: Record<string, string> = {
    success: "text-green-600",
    error: "text-red-400",
    warning: "text-yellow-400",
  };

  return (
    <section className="section-padding mt-12">
      <div className="mx-auto max-w-6xl px-4">
        <ScrollReveal>
          <SectionHeader
            as="h1"
            title="Get In Touch"
            subtitle="Let's discuss your project"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Form */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-3">
            <div className="glass rounded-2xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Name Field */}
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-text-secondary"
                  >
                    <User className="h-4 w-4 text-primary-400" />
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="w-full rounded-xl border border-surface-200/50 bg-surface-800 px-4 py-3 text-text-primary transition placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-text-secondary"
                  >
                    <Mail className="h-4 w-4 text-primary-400" />
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? "true" : undefined}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="w-full rounded-xl border border-surface-200/50 bg-surface-800 px-4 py-3 text-text-primary transition placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-text-secondary"
                  >
                    <MessageSquare className="h-4 w-4 text-primary-400" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project..."
                    aria-invalid={errors.message ? "true" : undefined}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full resize-none rounded-xl border border-surface-200/50 bg-surface-800 px-4 py-3 text-text-primary transition placeholder:text-text-muted focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-700 py-3 font-medium text-white transition hover:shadow-lg hover:shadow-primary-500/25 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 text-center text-sm ${statusColor[status.type]}`}
                  >
                    {status.text}
                  </motion.p>
                )}
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info Sidebar */}
          <ScrollReveal
            direction="right"
            delay={0.2}
            className="lg:col-span-2"
          >
            <div className="glass flex h-full flex-col rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                Contact Information
              </h3>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Phone</p>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
                      className="font-medium text-text-primary transition hover:text-primary-400"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-text-primary transition hover:text-primary-400"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-500/10">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Location</p>
                    <p className="font-medium text-text-primary">
                      {personalInfo.address}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Spacer to push bottom content down */}
              <div className="flex-1" />

              {/* Availability Badge */}
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="text-sm font-medium text-green-600">
                  Available for new projects
                </span>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-3">
                {personalInfo.socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  if (!Icon) return null;

                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-primary-500/10"
                    >
                      <Icon className="h-5 w-5 text-text-secondary" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
