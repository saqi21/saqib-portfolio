import { Article } from "@/types";
import { basePath } from "@/lib/constants";

export const articles: Article[] = [
  {
    id: "1",
    title:
      "Unleashing Your Potential: Skill Enhancement and Stack Diversification",
    description:
      "Exploring the importance of continuously enhancing your skill set and diversifying your technical stack in software engineering.",
    image: `${basePath}/images/articles/article01.png`,
    readTime: "4 min read",
    url: "https://www.linkedin.com/pulse/unleashing-your-potential-power-skill-enhancement-stack-saqib-zafar-5hknf/",
  },
  {
    id: "5",
    title: "The Future of Front-End Development: Emerging Trends",
    description:
      "Exploring emerging trends and technologies shaping front-end development, from new frameworks to advancements in UX design.",
    image: `${basePath}/images/articles/article05.png`,
    readTime: "6 min read",
    url: "https://www.linkedin.com/pulse/future-front-end-development-emerging-trends-saqib-zafar-eqy3f/",
  },
  {
    id: "6",
    title: "From Code to Perfection: How QA Shapes the Future",
    description:
      "The critical role of Quality Assurance in the software development lifecycle and how meticulous QA processes ensure flawless products.",
    image: `${basePath}/images/articles/article06.png`,
    readTime: "5 min read",
    url: "https://www.linkedin.com/pulse/from-code-perfection-how-quality-assurance-shapes-future-saqib-zafar-75x4f/",
  },
  {
    id: "7",
    title: "Revolutionizing QA: Emerging Tools and Best Practices",
    description:
      "How AI-powered testing, modern automation frameworks, and practices like shift-left testing and BDD are revolutionizing Quality Assurance.",
    image: `${basePath}/images/articles/article07.png`,
    readTime: "5 min read",
    url: "https://www.linkedin.com/pulse/revolutionizing-quality-assurance-emerging-tools-best-saqib-zafar-fpflf",
  },
];
