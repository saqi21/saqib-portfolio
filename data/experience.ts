import { Experience, Education, Certificate } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Automation SQA Engineer",
    company: "Nullbrainer",
    period: "Dec 2025 - Present",
    location: "Remote - USA",
    description:
      "Building and maintaining end-to-end test automation using Cypress with Cucumber (BDD) for the Noldor insurance platform. Writing feature files and step definitions to ensure comprehensive coverage across multiple portals.",
    highlights: [
      "Built Cypress + Cucumber BDD automation framework from scratch using Nx monorepo",
      "Automated 50+ E2E scenarios across Valinor, Carrier, and Data Client portals",
      "Integrated automated test suite with CI/CD pipelines for continuous quality assurance",
      "Designed modular Page Object Model architecture enabling rapid test expansion",
    ],
  },
  {
    title: "Lead SQA Engineer & Frontend Developer",
    company: "Devsloop",
    period: "Jul 2022 - Nov 2025",
    location: "Gujranwala, Punjab, Pakistan",
    description:
      "Progressed from Frontend Engineer to Lead SQA across multiple client projects including Beambox, EasyLlama, Lumimeds, and DoubleList. Built automation frameworks, mentored junior engineers, and delivered front-end features.",
    highlights: [
      "Led QA for Beambox, EasyLlama, Lumimeds & DoubleList — owning test strategy, execution, and automation",
      "Increased automation coverage from 0% to 80% of core flows at Beambox using Cypress",
      "Reduced manual regression testing time from 3 hours to 40 minutes",
      "Achieved zero post-deployment critical bugs for 5 consecutive releases at Lumimeds",
      "Mentored junior QA engineers in manual and automated testing best practices",
      "Built responsive front-end interfaces for EasyLlama using Ruby on Rails MVC",
      "Created and integrated RESTful APIs supporting frontend functionalities",
    ],
  },
  {
    title: "Front End Developer",
    company: "Shoretec Solutions",
    period: "Jun 2020 - May 2023",
    location: "Remote - USA",
    description:
      "Worked on the Worship Support Network and Walexport projects, creating responsive and user-friendly interfaces with front-end best practices.",
    highlights: [
      "Developed dynamic, responsive web interfaces using PHP with HTML, CSS, and JavaScript",
      "Developed features for mobile and desktop platforms, ensuring cross-browser compatibility",
      "Collaborated with back-end developers to enhance website functionality and integrate features",
      "Improved user experience by optimizing web applications for speed and scalability",
      "Contributed in Scrum environments, participating in daily stand-ups and sprint planning",
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
