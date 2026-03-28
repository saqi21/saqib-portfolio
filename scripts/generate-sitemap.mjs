import { writeFileSync } from "fs";

const SITE_URL = "https://saqi21.github.io/saqib-portfolio";
const today = new Date().toISOString().split("T")[0];

// Static pages
const staticPages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/projects", priority: "0.9", changefreq: "weekly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/resume", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
];

// Project slugs
const projects = [
  "beambox",
  "easyllama",
  "lumimeds",
  "noldor",
  "worship-support-network",
  "walexport",
];

// Blog article slugs with dates
const articles = [
  { slug: "future-of-qa-5-trends-test-automation-engineer-must-embrace-2026", date: "2026-03-20" },
  { slug: "power-of-perseverance-never-give-up-on-your-dreams", date: "2026-03-15" },
  { slug: "achieving-work-life-balance-prioritizing-family", date: "2026-03-10" },
  { slug: "embracing-change-key-to-personal-professional-growth", date: "2026-03-05" },
  { slug: "bridging-the-gap-manual-vs-automation-testing", date: "2026-02-27" },
  { slug: "revolutionizing-qa-emerging-tools-best-practices", date: "2026-02-14" },
  { slug: "from-code-to-perfection-how-qa-shapes-future", date: "2026-02-01" },
  { slug: "future-of-front-end-development-emerging-trends", date: "2026-01-18" },
  { slug: "unleashing-your-potential-skill-enhancement-stack-diversification", date: "2026-01-05" },
];

function buildUrl(path, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  // Static pages
  ...staticPages.map((p) => buildUrl(p.path, today, p.changefreq, p.priority)),
  // Projects
  ...projects.map((slug) => buildUrl(`/projects/${slug}`, today, "monthly", "0.8")),
  // Blog articles
  ...articles.map((a) => buildUrl(`/blog/${a.slug}`, a.date, "monthly", "0.8")),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap, "utf-8");
console.log(`Sitemap generated with ${urls.length} URLs`);
