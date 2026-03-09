import { Work } from "@/types";
import { basePath } from "@/lib/constants";

export const works: Work[] = [
  {
    slug: "noldor",
    name: "Noldor",
    category: "sqa",
    tagline:
      "Insurance technology platform where I handle Manual and Automation QA with Cypress, Cucumber BDD, and CI/CD pipelines.",
    logo: `${basePath}/images/projects/noldor.png`,
    url: "https://noldor.com/",
    technologies: [
      "Cypress",
      "Cucumber/Gherkin",
      "JavaScript",
      "Ruby on Rails",
      "Stimulus",
      "PostgreSQL",
      "API",
      "CI/CD",
    ],
    featured: true,
    hasCaseStudy: true,
    summary:
      "Noldor is an insurance technology platform offering data management, schema mapping, and carrier portal solutions. As the Automation SQA Engineer at Nullbrainer, I own the complete E2E test automation suite built with Cypress and Cucumber (BDD) across multiple applications — Valinor QA, Carrier QA, and Data Client.",
    detailedSummary:
      "The QA monorepo is managed with Nx and follows the Page Object Model pattern. Feature files define scenarios in Gherkin, step definitions implement the logic, and page objects encapsulate UI interactions — ensuring maintainable, scalable, and readable tests.",
    problem:
      "Noldor's multi-portal insurance platform — spanning data uploads, schema configurations, reference tables, validation sets, and carrier workflows — required thorough regression testing across interconnected modules. Manual testing could not keep pace with rapid feature development.",
    solution:
      "Built a comprehensive Cypress + Cucumber BDD automation framework from scratch using an Nx monorepo structure. Designed modular page objects, reusable step definitions, and Gherkin feature files covering login, navigation, data uploads (CSV/XLS), schemas, reference tables, validation sets, output configs, and carrier-specific flows.",
    role: "Automation Software Quality Assurance Engineer",
    results: [
      "Automated 50+ E2E scenarios across Valinor, Carrier, and Data Client portals",
      "Established BDD workflow with Gherkin feature files for clear stakeholder communication",
      "Reduced manual regression testing time significantly through comprehensive automation",
      "Built reusable Page Object Model architecture enabling rapid test expansion",
      "Integrated automated test suite with CI/CD pipelines for continuous quality assurance",
    ],
    challenges: [
      "Coordinating test automation across multiple interconnected portals (Valinor, Carrier, Data Client) with shared dependencies",
      "Handling complex data upload workflows involving CSV, XLS, and JSON formats with validation",
      "Managing environment-specific credentials pulled from Terraform state for secure test execution",
    ],
    techStackDetails: [
      {
        category: "Testing",
        tools: ["Cypress 15", "Cucumber/Gherkin", "cypress-real-events"],
      },
      {
        category: "Build & Tooling",
        tools: ["Nx Monorepo", "TypeScript", "esbuild", "ESLint", "Prettier"],
      },
      {
        category: "Patterns",
        tools: ["Page Object Model", "BDD", "Step Definitions", "Custom Commands"],
      },
    ],
    keyContributions: [
      {
        title: "Multi-Portal Automation Architecture",
        description:
          "Designed an Nx monorepo structure housing separate Cypress projects for Valinor QA, Carrier QA, and Data Client — each with isolated configs, shared utilities, and independent execution.",
      },
      {
        title: "Cucumber BDD Integration",
        description:
          "Implemented Cucumber preprocessor with Gherkin feature files, enabling non-technical stakeholders to understand test scenarios while maintaining developer-friendly step definitions.",
        highlights: [
          "Feature files covering login, navigation, data uploads, schemas, mappings, and validations",
          "Step definitions organized by domain for maintainability",
          "Fixtures for structured test data management",
        ],
      },
      {
        title: "Page Object Model Implementation",
        description:
          "Built a clean POM architecture encapsulating all UI interactions into dedicated page objects, reducing duplication and simplifying test maintenance across portals.",
      },
    ],
    keyTakeaways: [
      "BDD with Cucumber bridges the communication gap between QA, developers, and business stakeholders",
      "Nx monorepo structure scales well for multi-application test suites with shared tooling",
      "Page Object Model is essential for maintainable automation in complex, multi-portal platforms",
    ],
  },
  {
    slug: "beambox",
    name: "Beambox",
    category: "sqa",
    tagline:
      "A comprehensive SaaS platform where I serve as QA Lead handling manual and automation testing with Cypress and CI/CD.",
    logo: `${basePath}/images/projects/beambox.svg`,
    url: "https://beambox.com/",
    technologies: [
      "Cypress",
      "JavaScript",
      "Ruby on Rails",
      "Stimulus",
      "PostgreSQL",
      "API",
      "CI/CD",
    ],
    featured: true,
    hasCaseStudy: true,
    summary:
      "Beambox is a comprehensive Ruby on Rails platform that empowers businesses to manage customer engagement, marketing automation, and performance analytics. As the Lead SQA Engineer, I owned the complete QA lifecycle — from test strategy and manual verification to the design and implementation of a full-scale Cypress automation framework integrated with CI/CD pipelines.",
    detailedSummary:
      "My work at Beambox directly improved release confidence, stability, and deployment speed while establishing a scalable QA foundation for future growth.",
    problem:
      "Beambox initially relied heavily on manual testing. Regression cycles were time-consuming, repetitive, and prone to human error. The lack of automated testing created bottlenecks, reduced release confidence, and prevented scalable QA processes.",
    solution:
      "I introduced Cypress for end-to-end test automation — completely from scratch — with a focus on modular structure, reusability, and integration with Rails workflows. Designed and implemented a complete Cypress automation framework with modular architecture, custom reusable commands, and CI/CD integration.",
    role: "Lead Software Quality Assurance Engineer",
    results: [
      "Increased automation coverage from 0% to 80% of core flows",
      "Reduced manual regression testing time from 3 hours to 40 minutes",
      "Reduced post-deployment bugs by over 60%",
      "Decreased pipeline execution time by 35%",
      "Improved release confidence and deployment speed significantly",
    ],
    achievements: [
      "Increased automation coverage from 0% to 80% of core flows",
      "Reduced manual regression testing time from 3 hours to 40 minutes",
      "Reduced post-deployment bugs by over 60%",
      "Decreased pipeline execution time by 35% after optimization",
      "Improved team collaboration with automated alerts and CI-based test runs",
    ],
    impactMetrics: [
      { metric: "Automation Coverage", before: "0%", after: "80%+" },
      {
        metric: "Regression Test Duration",
        before: "~3 hours",
        after: "~40 mins",
      },
      {
        metric: "Post-Deployment Issues",
        before: "High",
        after: "Reduced by 60%",
      },
      {
        metric: "Release Confidence",
        before: "Moderate",
        after: "Very High",
      },
    ],
    keyContributions: [
      {
        title: "Designed and Implemented Complete Automation Framework",
        description:
          "Introduced Cypress for end-to-end test automation from scratch with a focus on modular structure, reusability, and integration with Rails workflows.",
        highlights: [
          "Built a scalable Cypress folder architecture aligned with Rails structure",
          "Designed custom reusable commands for form handling, login sessions, and API calls",
          "Implemented data-driven testing to validate user flows with multiple datasets",
          "Developed parallel execution for faster test runs in CI/CD pipelines",
        ],
      },
      {
        title: "CI/CD Integration for Continuous Testing",
        description:
          "Configured Cypress to run within GitHub Actions and Bitbucket Pipelines for automated validation on every code push.",
        highlights: [
          "Triggered Cypress test runs on every PR and merge event",
          "Added video and screenshot recording for failed tests",
          "Optimized the pipeline, cutting duration by 35%",
        ],
      },
      {
        title: "Regression Automation of Core Modules",
        description:
          "Automated regression coverage for core features (Signup, Campaigns, Patient Management, Checkout) to run daily in staging.",
        highlights: [
          "Created scheduled regression runs on CI for build stability",
          "Configured Slack notifications for failed runs",
          "Ensured all critical business flows were fully covered",
        ],
      },
    ],
    techStackDetails: [
      { category: "Backend", tools: ["Ruby on Rails"] },
      { category: "Testing Framework", tools: ["Cypress (JavaScript)"] },
      { category: "CI/CD", tools: ["GitHub Actions", "Bitbucket Pipelines"] },
      { category: "Database", tools: ["PostgreSQL"] },
      { category: "Version Control", tools: ["Git", "Bitbucket"] },
    ],
    challenges: [
      "Manual regression bottleneck slowing releases — solved with scalable Cypress framework reducing test time by 70%",
      "Unstable test environment causing failures — solved with test data seeding and cleanup routines",
      "Limited production confidence — solved with safe, read-only production test suites",
      "Unstructured bug reports — solved with standardized templates reducing duplicate reports",
    ],
    leadership:
      "As QA Lead, mentored junior QA engineers in Cypress testing, debugging, and best practices. Led weekly QA sync-ups and partnered with product management to align coverage with high-impact business areas.",
    keyTakeaways: [
      "End-to-end automation transforms QA from a blocker to a release enabler",
      "CI-integrated testing ensures speed without sacrificing reliability",
      "Standardized reporting improves team efficiency and communication",
      "Strategic leadership in QA means building systems, not just finding bugs",
    ],
  },
  {
    slug: "easyllama",
    name: "EasyLlama",
    category: "frontend-sqa",
    tagline:
      "An e-learning platform where I provided both front-end development and QA services to ensure a smooth user experience.",
    logo: `${basePath}/images/projects/easyllama.png`,
    url: "https://www.easyllama.com/",
    technologies: ["Ruby on Rails", "HTML", "CSS", "SCSS", "JavaScript"],
    featured: true,
    hasCaseStudy: false,
  },
  {
    slug: "lumimeds",
    name: "Lumimeds",
    category: "sqa",
    tagline:
      "Advanced healthcare platform where I handled QA to ensure reliability across patient and provider portals.",
    logo: `${basePath}/images/projects/lumimeds.svg`,
    url: "https://lumimeds.com/",
    technologies: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "API Testing",
      "Manual Testing",
    ],
    featured: true,
    hasCaseStudy: true,
    summary:
      "Lumimeds is an advanced healthcare platform designed to streamline patient-provider interactions through telemedicine, pharmacy management, and appointment handling — all in one seamless ecosystem.",
    detailedSummary:
      "As Lead QA Engineer, I owned the responsibility of ensuring excellence, consistency, and user trust across the entire platform — from backend APIs to patient-facing UI.",
    problem:
      "Healthcare software requires extreme precision — one small bug can disrupt real patient care. Multiple interconnected modules with shared data dependencies, real-time features requiring precision testing, and critical HIPAA compliance needs.",
    solution:
      "Designed a modular test plan divided by product area, built a scalable QA framework with version-controlled test suites, implemented real-time defect tracking, and created a cross-portal testing matrix for the Admin, Provider, and Patient portals.",
    role: "Lead QA Engineer",
    results: [
      "Zero post-deployment critical bugs for 5 consecutive releases",
      "Reduced testing turnaround by 40% through smarter regression grouping",
      "Identified high-severity crashes in pharmacy workflows before production",
      "Improved communication between QA and development teams",
      "Contributed UX-level insights beyond traditional bug reports",
    ],
    achievements: [
      "Zero post-deployment critical bugs for 5 consecutive releases",
      "Designed a standardized QA checklist used across multiple teams",
      "Reduced testing turnaround by 40%",
      "Identified high-severity pharmacy crashes before production",
      "Improved QA-dev feedback cycles and team synergy",
    ],
    impactMetrics: [
      {
        metric: "Post-Deployment Bugs",
        before: "Multiple per release",
        after: "Zero for 5 releases",
      },
      {
        metric: "Testing Turnaround",
        before: "Standard timeline",
        after: "40% reduction",
      },
      {
        metric: "Release Confidence",
        before: "Moderate",
        after: "Very High",
      },
    ],
    keyContributions: [
      {
        title: "End-to-End Product Understanding",
        description:
          "Invested time to fully understand workflows from patient booking to provider encounters to pharmacy fulfillment, identifying undocumented edge cases.",
        highlights: [
          "Mapped complete user journeys across Admin, Provider, and Patient portals",
          "Identified undocumented edge cases through thorough workflow analysis",
          "Created comprehensive understanding of data dependencies between modules",
        ],
      },
      {
        title: "Scalable QA Framework",
        description:
          "Designed a modular test plan divided by product area with reusable, version-controlled test suites.",
        highlights: [
          "Appointments: Time zone validation, slot conflicts, status transitions",
          "Messages & Notifications: Real-time counter updates, read/unread states",
          "Encounters: Dynamic forms, prescription flows, attachments",
          "Pharmacy: Patient selection, prescription preparation, crash handling",
        ],
      },
      {
        title: "Cross-Portal Testing",
        description:
          "Built a cross-portal testing matrix highlighting dependencies and side effects across Admin, Provider, and Patient portals.",
        highlights: [
          "Tested holistic flows across all three portals",
          "Prevented dozens of potential live issues",
          "Ensured data consistency across all portals",
        ],
        example:
          "If a provider updates an encounter, notification triggers for the patient, and admin dashboard updates real-time.",
      },
    ],
    techStackDetails: [
      {
        category: "Testing & QA Management",
        tools: ["JIRA", "TestRail", "ClickUp"],
      },
      {
        category: "Automation & Debugging",
        tools: ["Postman", "Swagger", "Browser DevTools"],
      },
      {
        category: "Collaboration",
        tools: ["Slack", "GitHub", "Loom"],
      },
    ],
    challenges: [
      "Multiple interconnected modules with shared data dependencies — solved with cross-portal testing matrix",
      "Real-time features requiring precision testing — solved with comprehensive sync testing plans",
      "Staging vs production environment differences — solved with split testing strategy",
      "Frequent releases creating regression risk — solved with smarter regression grouping (40% faster)",
      "HIPAA compliance requirements — solved with security-focused testing protocols",
    ],
    leadership:
      "Worked at the intersection of development, design, and product management — transforming business logic into flawless user journeys. Advocated for user-centric quality ensuring features made sense for real-world healthcare audiences.",
    keyTakeaways: [
      "Always test like a user, not a tester",
      "Communication is the bridge between finding and fixing",
      "A great QA doesn't just identify issues — they prevent them",
      "Healthcare software requires extra diligence",
      "Quality became a culture, not a checkbox",
    ],
  },
  {
    slug: "worship-support-network",
    name: "Worship Support Network",
    category: "frontend-sqa",
    tagline: "A community platform for worship support and resources.",
    logo: `${basePath}/images/projects/WSN_logo.png`,
    url: "https://worshipsn.com/",
    technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS", "SCSS"],
    featured: false,
    hasCaseStudy: false,
  },
  {
    slug: "walexport",
    name: "Walexport",
    category: "frontend-sqa",
    tagline: "An export management platform with comprehensive features.",
    logo: `${basePath}/images/projects/logo-walexport.png`,
    url: "https://www.walexport.fr/",
    technologies: ["PHP", "SQL", "JavaScript", "HTML", "CSS", "SCSS"],
    featured: false,
    hasCaseStudy: false,
  },
];
