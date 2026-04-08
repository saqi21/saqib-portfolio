import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import {
  experiences,
  education,
  certificates,
  languages,
} from "@/data/experience";
import { works } from "@/data/works";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume | SaQiB Zafar — SQA Engineer & Frontend Developer",
  description:
    "Download SaQiB Zafar's resume — SQA Engineer & Frontend Developer with 5+ years of experience in Cypress automation, Selenium, React, Next.js, and TypeScript.",
  keywords: [
    "SaQiB Zafar Resume",
    "SQA Engineer Resume",
    "Front End Developer Resume",
    "Cypress Automation Resume",
    "QA Engineer CV",
    "Download Resume",
  ],
  openGraph: {
    title: "Resume | SaQiB Zafar",
    description:
      "SQA Engineer & Frontend Developer with 5+ years of experience. View work experience, skills, certifications, and projects.",
    url: "https://saqi21.github.io/saqib-portfolio/resume",
    type: "website",
  },
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
    <div className="min-h-screen bg-surface-950 pt-28 pb-20 print:bg-white print:pt-0 print:pb-0">
      {/* Floating Buttons */}
      <PrintButton />

      {/* 3D Paper Resume */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 print:px-0">
        <div
          id="resume-content"
          className="resume-pdf relative rounded-xl bg-white px-8 py-10 text-[13px] leading-snug text-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,0,0,0.05)] ring-1 ring-gray-200/50 sm:px-12 print:rounded-none print:px-12 print:py-0 print:shadow-none print:ring-0"
          style={{
            transform: "perspective(1200px) rotateY(0deg)",
          }}
        >
          {/* Subtle 3D edge effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-2 rounded-l-xl bg-gradient-to-r from-gray-200/80 to-transparent print:hidden" />

          {/* Header */}
          <header className="border-b-2 border-gray-900 pb-3 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Saqib Zafar
            </h1>
            <p className="text-sm font-medium text-gray-600">
              {personalInfo.title}
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1">
                <Mail className="h-3 w-3" />
                saqib@devslooptech.com
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
            </div>
          </header>

          {/* Summary */}
          <section className="mt-3">
            <h2 className="border-b border-gray-300 pb-1 text-sm font-bold uppercase tracking-widest text-gray-900">
              Professional Summary
            </h2>
            <p className="mt-1.5 text-gray-700">
              Software Quality Assurance Engineer at Devsloop with 3+ years of
              experience specializing in manual and automation testing with Cypress,
              Selenium, and Cucumber BDD. Proven track record of increasing automation
              coverage from 0% to 80% and reducing regression testing time by 70%.
              Skilled in leading QA teams, mentoring junior engineers, and training
              interns to build strong testing foundations. Passionate about delivering
              high-quality, bug-free software and building scalable test automation
              frameworks.
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
                <div key={i}>
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
                <div key={work.slug}>
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
            <section>
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
              <section>
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
              <section>
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
    </div>
  );
}
