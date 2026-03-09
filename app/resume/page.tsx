import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import { experiences, education } from "@/data/experience";
import { works } from "@/data/works";
import { siteConfig } from "@/lib/constants";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of SaQiB Zafar — Front End Developer & SQA Engineer with expertise in React, Cypress, and test automation.",
};

const frontendSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Ruby on Rails",
];
const testingSkills = [
  "Cypress",
  "Cucumber/BDD",
  "Selenium",
  "Manual Testing",
  "API Testing",
  "Regression Testing",
  "Test Planning",
];
const toolsSkills = [
  "Git/GitHub",
  "CI/CD",
  "Jira",
  "Postman",
  "VS Code",
  "Figma",
  "PostgreSQL",
  "REST APIs",
];

export default function ResumePage() {
  const featuredWorks = works.filter((w) => w.featured);

  return (
    <div className="min-h-screen bg-white pt-20 text-gray-900 print:bg-white print:pt-0">
      {/* Print / Download Button */}
      <div className="mx-auto max-w-4xl px-6 pb-4 pt-8 print:hidden">
        <div className="flex items-center gap-3">
          <PrintButton />
          <span className="text-sm text-gray-500">
            Use Ctrl+P / Cmd+P to print or save as PDF
          </span>
        </div>
      </div>

      {/* Resume Content */}
      <div className="mx-auto max-w-4xl px-6 pb-16 print:max-w-none print:px-12 print:pb-0">
        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-4">
          <h1 className="text-3xl font-bold tracking-tight print:text-2xl">
            Saqib Zafar
          </h1>
          <p className="mt-1 text-lg font-medium text-gray-600 print:text-base">
            {personalInfo.title}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-gray-600">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              {personalInfo.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              {personalInfo.phone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {personalInfo.address}
            </span>
            <a
              href="https://www.linkedin.com/in/saqib-zafar-6966a7225/"
              className="inline-flex items-center gap-1.5 text-blue-700 print:text-gray-600"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/saqi21"
              className="inline-flex items-center gap-1.5 text-blue-700 print:text-gray-600"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={siteConfig.url}
              className="inline-flex items-center gap-1.5 text-blue-700 print:text-gray-600"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Portfolio
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-700">
            Experienced SQA Engineer and Front-End Developer with 4+ years of
            expertise in manual and automation testing using Cypress, Cucumber
            BDD, and Selenium. Proven track record of building scalable test
            automation frameworks from scratch, leading QA teams, and integrating
            CI/CD pipelines. Skilled in React, TypeScript, and Next.js for
            front-end development. Passionate about delivering high-quality
            software and driving continuous improvement.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            Technical Skills
          </h2>
          <div className="mt-2 space-y-1.5 text-sm">
            <div>
              <span className="font-semibold text-gray-800">Frontend: </span>
              <span className="text-gray-700">{frontendSkills.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">
                Testing & QA:{" "}
              </span>
              <span className="text-gray-700">{testingSkills.join(", ")}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Tools: </span>
              <span className="text-gray-700">{toolsSkills.join(", ")}</span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            Work Experience
          </h2>
          <div className="mt-3 space-y-5">
            {experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-gray-600">
                  {exp.company} | {exp.location}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-700">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            Key Projects
          </h2>
          <div className="mt-3 space-y-4">
            {featuredWorks.map((work) => (
              <div key={work.slug}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-bold text-gray-900">
                    {work.name}
                    {work.url && (
                      <a
                        href={work.url}
                        className="ml-2 text-xs font-normal text-blue-700 print:text-gray-500"
                      >
                        ({work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        )
                      </a>
                    )}
                  </h3>
                  <span className="text-xs uppercase text-gray-500">
                    {work.category === "sqa" ? "SQA" : "Frontend & SQA"}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-700">{work.tagline}</p>
                <p className="mt-1 text-xs text-gray-500">
                  <span className="font-medium">Tech:</span>{" "}
                  {work.technologies.join(", ")}
                </p>
                {work.results && work.results.length > 0 && (
                  <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-sm text-gray-700">
                    {work.results.slice(0, 3).map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-5">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            Education
          </h2>
          <div className="mt-3 space-y-3">
            {education.map((edu, i) => (
              <div key={i}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-xs text-gray-500">{edu.period}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {edu.institution}, {edu.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
