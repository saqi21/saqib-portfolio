import { personalInfo } from "@/data/personal";
import {
  experiences,
  education,
  certificates,
  languages,
} from "@/data/experience";
import { works } from "@/data/works";

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

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildResumeHtml(): string {

  const experiencesHtml = experiences
    .map((exp) => {
      const highlightsHtml =
        exp.highlights && exp.highlights.length > 0
          ? `<ul style="list-style:disc inside;padding:0;margin-top:3px;">${exp.highlights.map((h) => `<li style="margin-top:1px;font-size:12px;line-height:1.5;color:#374151;">${escapeHtml(h)}</li>`).join("")}</ul>`
          : "";
      return `
        <div style="margin-top:10px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;column-gap:16px;">
            <h3 style="font-size:13px;font-weight:700;color:#111827;">${escapeHtml(exp.title)}</h3>
            <span style="font-size:10px;color:#6b7280;">${escapeHtml(exp.period)}</span>
          </div>
          <p style="font-size:12px;font-style:italic;color:#4b5563;">${escapeHtml(exp.company)} | ${escapeHtml(exp.location)}</p>
          <p style="margin-top:3px;font-size:12px;line-height:1.5;color:#374151;">${escapeHtml(exp.description)}</p>
          ${highlightsHtml}
        </div>`;
    })
    .join("");

  const projectsHtml = works
    .map((work) => {
      const urlText = work.url
        ? `<a href="${work.url}" style="margin-left:6px;font-size:10px;font-weight:400;color:#1d4ed8;text-decoration:underline;">(${work.url.replace(/^https?:\/\//, "").replace(/\/$/, "")})</a>`
        : "";
      const catLabel = work.category === "sqa" ? "SQA" : "Frontend &amp; SQA";
      return `
        <div style="margin-top:6px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;column-gap:16px;">
            <h3 style="font-size:13px;font-weight:700;color:#111827;">${escapeHtml(work.name)}${urlText}</h3>
            <span style="font-size:10px;text-transform:uppercase;color:#6b7280;">${catLabel}</span>
          </div>
          <p style="font-size:12px;line-height:1.5;color:#374151;">${escapeHtml(work.tagline)}</p>
          <p style="font-size:10px;color:#6b7280;"><span style="font-weight:500;">Tech:</span> ${escapeHtml(work.technologies.join(", "))}</p>
        </div>`;
    })
    .join("");

  const educationHtml = education
    .map(
      (edu) => `
        <div style="margin-top:6px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;column-gap:16px;">
            <h3 style="font-size:13px;font-weight:700;color:#111827;">${escapeHtml(edu.institution)}</h3>
            <span style="font-size:10px;color:#6b7280;">${escapeHtml(edu.period)}</span>
          </div>
          <p style="font-size:12px;color:#4b5563;">${escapeHtml(edu.degree)}</p>
        </div>`
    )
    .join("");

  const languagesHtml = languages
    .map(
      (lang) =>
        `<span style="margin-right:16px;"><span style="font-weight:600;color:#374151;">${escapeHtml(lang.name)}</span> <span style="font-style:italic;color:#6b7280;">(${escapeHtml(lang.level)})</span></span>`
    )
    .join("");

  const certificatesHtml = certificates
    .map(
      (cert) => `
        <div style="margin-top:4px;">
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;column-gap:16px;">
            <h3 style="font-size:13px;font-weight:700;color:#111827;">${escapeHtml(cert.name)}</h3>
            <span style="font-size:10px;color:#6b7280;">${escapeHtml(cert.date)}</span>
          </div>
          <p style="font-size:12px;font-style:italic;color:#4b5563;">${escapeHtml(cert.issuer)}</p>
        </div>`
    )
    .join("");

  const skillsHtml = skillCategories
    .map(
      (cat) =>
        `<p style="margin-top:3px;font-size:12px;line-height:1.5;color:#374151;"><span style="font-weight:600;color:#111827;">${escapeHtml(cat.label)}:</span> ${escapeHtml(cat.skills.join(", "))}</p>`
    )
    .join("");

  return `
    <div id="resume-pdf-content" style="color:#111827;background:#ffffff;padding:0 20px 20px;max-width:780px;margin:0 auto;font-size:12px;line-height:1.5;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;">
      <header style="border-bottom:2px solid #111827;padding-bottom:10px;text-align:center;">
        <h1 style="font-size:1.5rem;font-weight:700;letter-spacing:-0.025em;color:#111827;margin:0;">Saqib Zafar</h1>
        <p style="font-size:14px;font-weight:500;color:#4b5563;margin:0;">${escapeHtml(personalInfo.title)}</p>
        <div style="margin-top:8px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;column-gap:16px;row-gap:2px;font-size:12px;color:#4b5563;">
          <span>saqib@devslooptech.com</span>
          <span>${escapeHtml(personalInfo.phone)}</span>
          <span>${escapeHtml(personalInfo.address)}</span>
          <a href="https://www.linkedin.com/in/saqib-zafar-6966a7225/" style="color:#1d4ed8;text-decoration:underline;">LinkedIn</a>
          <a href="https://github.com/saqi21" style="color:#1d4ed8;text-decoration:underline;">GitHub</a>
        </div>
      </header>

      <section style="margin-top:10px;">
        <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Professional Summary</h2>
        <p style="font-size:12px;line-height:1.5;color:#374151;">Software Quality Assurance Engineer at Devsloop with 3+ years of experience specializing in manual and automation testing with Cypress, Selenium, and Cucumber BDD. Proven track record of increasing automation coverage from 0% to 80% and reducing regression testing time by 70%. Skilled in leading QA teams, mentoring junior engineers, and training interns to build strong testing foundations. Passionate about delivering high-quality, bug-free software and building scalable test automation frameworks.</p>
      </section>

      <section style="margin-top:10px;">
        <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Core Skills</h2>
        ${skillsHtml}
      </section>

      <section style="margin-top:10px;">
        <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Work Experience</h2>
        ${experiencesHtml}
      </section>

      <section style="margin-top:10px;">
        <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Projects</h2>
        ${projectsHtml}
      </section>

      <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:24px;">
        <section>
          <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Education</h2>
          ${educationHtml}
        </section>
        <div>
          <section>
            <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Languages</h2>
            <div style="margin-top:4px;">${languagesHtml}</div>
          </section>
          <section style="margin-top:10px;">
            <h2 style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#111827;border-bottom:1px solid #d1d5db;padding-bottom:4px;margin-bottom:6px;">Certificates</h2>
            ${certificatesHtml}
          </section>
        </div>
      </div>
    </div>
  `;
}

export async function generateResumePdf(): Promise<void> {
  const html2pdf = (await import("html2pdf.js")).default;

  // Create a hidden container with the resume HTML
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "780px";
  container.innerHTML = buildResumeHtml();
  document.body.appendChild(container);

  const element = container.querySelector("#resume-pdf-content");
  if (!element) {
    document.body.removeChild(container);
    return;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (html2pdf() as any)
      .set({
        margin: [18, 14, 18, 14],
        filename: "Saqib_Zafar_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: "css" },
      })
      .from(element)
      .save();
  } finally {
    document.body.removeChild(container);
  }
}
