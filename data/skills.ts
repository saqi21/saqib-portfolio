import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", icon: "javascript", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 85, category: "frontend" },
  { name: "React", icon: "react", level: 90, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 80, category: "frontend" },
  { name: "HTML5", icon: "html", level: 95, category: "frontend" },
  { name: "CSS3", icon: "css", level: 92, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 90, category: "frontend" },
  { name: "UI/UX Design", icon: "palette", level: 88, category: "frontend" },

  // Backend
  { name: "Ruby", icon: "gem", level: 85, category: "backend" },
  { name: "Ruby on Rails", icon: "train", level: 75, category: "backend" },
  { name: "Java", icon: "coffee", level: 80, category: "backend" },
  { name: "REST APIs", icon: "api", level: 85, category: "backend" },
  { name: "SQL", icon: "database", level: 80, category: "backend" },

  // Testing & QA
  { name: "Cypress", icon: "test-tube", level: 90, category: "testing" },
  { name: "Selenium", icon: "monitor-check", level: 85, category: "testing" },
  { name: "Manual Testing", icon: "clipboard-check", level: 95, category: "testing" },
  { name: "API Testing", icon: "api-test", level: 88, category: "testing" },
  { name: "Cucumber BDD", icon: "cucumber", level: 85, category: "testing" },
  { name: "Regression Testing", icon: "regression", level: 92, category: "testing" },
  { name: "Test Planning", icon: "planning", level: 90, category: "testing" },

  // Tools
  { name: "Git & GitHub", icon: "git", level: 90, category: "tools" },
  { name: "VS Code", icon: "vscode", level: 95, category: "tools" },
  { name: "Jira", icon: "jira", level: 88, category: "tools" },
  { name: "Postman", icon: "postman", level: 85, category: "tools" },
  { name: "CI/CD", icon: "cicd", level: 78, category: "tools" },
  { name: "Figma", icon: "figma", level: 80, category: "tools" },
];
