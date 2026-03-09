import type { Metadata } from "next";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import {
  experiences,
  education,
  certificates,
  languages,
} from "@/data/experience";
import { works } from "@/data/works";
import { basePath, siteConfig } from "@/lib/constants";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of SaQiB Zafar — Front End Developer & SQA Engineer with expertise in React, Cypress, and test automation.",
};

const skillCategories = [
  {
    label: "Frontend Development",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5 & CSS3",
      "Tailwind CSS", "SCSS", "Ruby on Rails", "RESTful APIs", "Responsive Web Design",
    ],
  },
  {
    label: "QA & Automation Testing",
    skills: [
      "Manual Testing", "Automation Testing", "Cypress Automation", "Cucumber/BDD",
      "Selenium with Java", "Software Testing Methodology", "SDLC",
      "Test Case Development", "Defect Tracking", "API Testing", "API Automation",
      "Regression Testing", "Performance Testing", "SQL & Database Testing", "Mobile Testing",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "SQL", "PostgreSQL", "Postman", "Jira", "Figma", "CI/CD Integration"],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-20 text-gray-900 print:bg-white print:pt-0">
      {/* Print / Download Button */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pb-4 pt-8 print:hidden">
        <PrintButton />
      </div>

      {/* Resume Content */}
      <div
        id="resume-content"
        className="resume-pdf mx-auto max-w-4xl px-6 pb-16 text-[13px] leading-snug print:max-w-none print:px-12 print:pb-0"
      >
        {/* Header */}
        <header className="border-b-2 border-gray-900 pb-3">
          <div className="flex items-center gap-4">
            <Image
              src={`${basePath}/images/my-profile.png`}
              alt="Saqib Zafar"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Saqib Zafar
              </h1>
              <p className="text-sm font-medium text-gray-600">
                {personalInfo.title}
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-0.5 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {personalInfo.email}
            </span>
            <span className="inline-flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {personalInfo.phone}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {personalInfo.address}
            </span>
            <a
              href="https://www.linkedin.com/in/saqib-zafar-6966a7225/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 underline"
            >
              <Linkedin className="h-3 w-3" />
              LinkedIn
            </a>
            <a
              href="https://github.com/saqi21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 underline"
            >
              <Github className="h-3 w-3" />
              GitHub
            </a>
            <a
              href="https://saqi21.github.io/saqib-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-700 underline"
            >
              <ExternalLink className="h-3 w-3" />
              Portfolio
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mt-3">
          <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
            Professional Summary
          </h2>
          <p className="mt-1.5 text-gray-700">
            SQA Engineer and Front-End Developer with 3+ years of experience
            specializing in manual and automation testing with Cypress, Selenium,
            and Cucumber BDD. Proven track record of increasing automation
            coverage from 0% to 80% and reducing regression testing time by 70%.
            Skilled in leading QA teams, mentoring junior engineers, and bridging
            development and quality assurance. Passionate about delivering
            high-quality, bug-free software and building clean, responsive web
            interfaces.
          </p>
        </section>

        {/* Core Skills */}
        <section className="mt-3">
          <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
            Core Skills
          </h2>
          <div className="mt-1.5 space-y-1">
            {skillCategories.map((cat) => (
              <p key={cat.label} className="text-gray-700">
                <span className="font-semibold text-gray-900">{cat.label}:</span>{" "}
                {cat.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-3">
          <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
            Work Experience
          </h2>
          <div className="mt-2 space-y-3">
            {experiences.map((exp, i) => (
              <div key={i} className="">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[13px] font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-[11px] text-gray-500">
                    {exp.period}
                  </span>
                </div>
                <p className="text-[12px] italic text-gray-600">
                  {exp.company} | {exp.location}
                </p>
                <p className="mt-1 text-gray-700">{exp.description}</p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-1 list-inside list-disc space-y-0 text-gray-700">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-3">
          <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
            Projects
          </h2>
          <div className="mt-2 space-y-2">
            {works.map((work) => (
              <div key={work.slug} className="">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-[13px] font-bold text-gray-900">
                    {work.name}
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1.5 text-[11px] font-normal text-blue-700"
                      >
                        (
                        {work.url
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                        )
                      </a>
                    )}
                  </h3>
                  <span className="text-[11px] uppercase text-gray-500">
                    {work.category === "sqa" ? "SQA" : "Frontend & SQA"}
                  </span>
                </div>
                <p className="text-gray-700">{work.tagline}</p>
                <p className="text-[11px] text-gray-500">
                  <span className="font-medium">Tech:</span>{" "}
                  {work.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Two Column: Education + Right Column */}
        <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Education */}
          <section className="">
            <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
              Education
            </h2>
            <div className="mt-2 space-y-2">
              {education.map((edu, i) => (
                <div key={i}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-[13px] font-bold text-gray-900">
                      {edu.institution}
                    </h3>
                    <span className="text-[11px] text-gray-500">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-600">{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Right Column: Languages + Certificates */}
          <div className="space-y-3">
            {/* Languages */}
            <section className="">
              <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
                Languages
              </h2>
              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-0.5 text-gray-700">
                {languages.map((lang) => (
                  <span key={lang.name}>
                    <span className="font-semibold">{lang.name}</span>{" "}
                    <span className="italic text-gray-500">({lang.level})</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section className="">
              <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
                Certificates
              </h2>
              <div className="mt-2 space-y-1.5">
                {certificates.map((cert, i) => (
                  <div key={i}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-[13px] font-bold text-gray-900">
                        {cert.name}
                      </h3>
                      <span className="text-[11px] text-gray-500">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-[12px] italic text-gray-600">
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
