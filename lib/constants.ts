export const siteConfig = {
  name: "SaQiB Zafar",
  title: "SaQiB Zafar | Front End Developer & SQA Engineer | React, Cypress, Selenium",
  description:
    "SaQiB Zafar — Front End Developer & SQA Engineer with 3+ years of experience in React, Next.js, TypeScript, Cypress automation, Selenium, and Cucumber BDD. Specializing in test automation, manual testing, and building responsive web applications.",
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
