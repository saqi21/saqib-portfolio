export const siteConfig = {
  name: "SaQiB Zafar",
  title: "SaQiB Zafar - Front End & SQA Engineer",
  description:
    "Front End Developer & Software Quality Assurance Engineer specializing in React, TypeScript, Cypress automation, and comprehensive QA strategies.",
  url: "https://saqi21.github.io/saqibzafar-portfolio",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const basePath = process.env.NODE_ENV === "production" ? "/saqibzafar-portfolio" : "";

export const resumeUrl = `${basePath}/resume/Saqib_Zafar_Resume.pdf`;
