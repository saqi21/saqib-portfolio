import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | SQA & Frontend Work",
  description:
    "Explore SaQiB Zafar's portfolio of SQA and Front-End projects including Noldor, Beambox, EasyLlama, and Lumimeds. Automation testing with Cypress, Selenium, and responsive web development with React and Ruby on Rails.",
  keywords: [
    "SaQiB Zafar Projects",
    "SQA Projects",
    "Cypress Automation Projects",
    "React Projects",
    "Frontend Portfolio",
    "Beambox QA",
    "Noldor Testing",
    "EasyLlama",
    "Lumimeds",
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
