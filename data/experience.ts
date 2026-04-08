import { Experience, Education, Certificate } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Software Quality Assurance Engineer",
    company: "Devsloop",
    period: "Nov 2022 - Present",
    location: "Gujranwala, Punjab, Pakistan",
    description:
      "Lead SQA for Beambox & Lumimeds projects. Built automation frameworks with Cypress, mentored junior engineers, and owned the complete QA lifecycle from test strategy to CI/CD integration.",
    highlights: [
      "Lead SQA across Beambox, Lumimeds & DoubleList — owning test strategy, execution, and automation",
      "Increased automation coverage from 0% to 80% of core flows at Beambox using Cypress",
      "Reduced manual regression testing time from 3 hours to 40 minutes",
      "Achieved zero post-deployment critical bugs for 5 consecutive releases at Lumimeds",
      "Mentored junior QA engineers in manual and automated testing best practices",
      "Integrated automated test suites with CI/CD pipelines for continuous quality assurance",
    ],
  },
  {
    title: "Ruby on Rails Frontend Engineer",
    company: "Devsloop",
    period: "Jul 2022 - Nov 2022",
    location: "Gujranwala, Punjab, Pakistan",
    description:
      "At EasyLlama, leveraged Ruby on Rails' MVC framework to create responsive, user-focused interfaces. Developed and maintained scalable APIs, managed routes, and optimized code for seamless client-server integration.",
    highlights: [
      "Leveraged RoR's MVC structure for building robust web applications with optimized performance",
      "Developed responsive, visually appealing interfaces ensuring seamless experience across devices",
      "Created, maintained, and integrated RESTful APIs supporting frontend functionalities",
      "Managed routes, backend tasks, and frontend integration for cohesive web applications",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science - Computer Science",
    institution: "GIFT University",
    period: "Oct 2018 - Nov 2022",
    location: "Gujranwala",
    description:
      "Graduated with strong skills in programming and UI development. Built a Complaint Management System using CodeIgniter and completed multiple hands-on semester projects.",
  },
  {
    degree: "FSc Pre-Engineering",
    institution: "Punjab Group of Colleges",
    period: "Sep 2016 - Mar 2018",
    location: "Daska",
    description:
      "Completed Intermediate in Pre-Engineering with a strong focus on Mathematics and Chemistry.",
  },
  {
    degree: "Matriculation (Science)",
    institution: "Govt High School Mundeke Goraya",
    period: "Nov 2014 - Mar 2016",
    location: "Daska",
    description:
      "Completed Matric in Science (Bio) with Mathematics as one of the strongest subjects.",
  },
];

export const certificates: Certificate[] = [
  {
    name: "Great Learning Certified Selenium Basic",
    issuer: "Great Learning",
    date: "Jun 2024",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Jun 2024",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Punjabi", level: "Native" },
  { name: "Urdu", level: "Native" },
];
