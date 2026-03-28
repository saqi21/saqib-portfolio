export const siteConfig = {
  name: "SaQiB Zafar",
  title: "SaQiB Zafar — Frontend Developer & QA Automation Engineer",
  description:
    "I build pixel-perfect interfaces and bulletproof test automation. 5+ years shipping React, Next.js, and Cypress automation frameworks for teams across the USA, Europe, and Pakistan.",
  url: "https://saqi21.github.io/saqib-portfolio",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const basePath = process.env.NODE_ENV === "production" ? "/saqib-portfolio" : "";

export const resumeUrl = `${basePath}/resume/Saqib_Zafar_Resume.pdf`;
