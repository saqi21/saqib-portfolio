import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SaQiB Zafar — Frontend Developer & SQA Engineer. Available for freelance projects, QA automation consulting, and full-time opportunities.",
  keywords: [
    "Contact SaQiB Zafar",
    "Hire QA Engineer",
    "Hire Front End Developer",
    "Freelance Developer Pakistan",
    "QA Consultant",
  ],
  openGraph: {
    title: "Contact | SaQiB Zafar",
    description:
      "Get in touch with SaQiB Zafar — available for freelance projects, QA automation consulting, and full-time opportunities.",
    url: "https://saqi21.github.io/saqib-portfolio/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
