import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Robert Botto",
    role: "Project Manager",
    company: "Adly (Beambox)",
    rating: 5,
    text: "Saqib was instrumental in getting Beambox to production-ready quality. He caught edge cases in our Wi-Fi marketing flows that nobody else noticed — things like session timeouts on slow networks and inconsistent form behavior across devices. His regression suite alone saved us days of manual re-testing every sprint. Genuinely one of the most thorough QA engineers I've managed.",
    project: "Beambox",
  },
  {
    id: "2",
    name: "Allen",
    role: "CEO",
    company: "Lumimeds",
    rating: 5,
    text: "We brought Saqib on to help with both the frontend and QA for Lumimeds. He rebuilt several key patient-facing pages and then set up Cypress tests to make sure nothing broke as we iterated. What impressed me most was how he communicated — he'd flag issues with clear screenshots and steps to reproduce, not just vague bug reports. That kind of clarity made a real difference for our small team.",
    project: "Lumimeds",
  },
  {
    id: "3",
    name: "Mark Sullivan",
    role: "Engineering Lead",
    company: "Shoretec Solutions",
    rating: 5,
    text: "Saqib handled QA for the Worship Support Network platform and was incredibly methodical. He tested every user flow — from event registration to donation processing — across multiple browsers and devices. He also wrote detailed test documentation that our team still references. When something broke in staging, he was usually the first to catch it and report it before anyone else even noticed.",
    project: "Worship Support Network",
  },
  {
    id: "4",
    name: "Michaël Devyver",
    role: "Co-founder & Product Manager",
    company: "EasyLlama",
    rating: 5,
    text: "Saqib started on the frontend side building out training modules and compliance pages, and his attention to pixel-perfect design was excellent. But what really stood out was when he transitioned into QA — he brought that frontend understanding into testing, so he knew exactly where to look for issues. He improved our release confidence significantly.",
    project: "EasyLlama",
  },
  {
    id: "5",
    name: "Daniel Krause",
    role: "Technical Director",
    company: "Walexport",
    rating: 4,
    text: "Saqib helped us test the Walexport e-commerce platform during a critical relaunch. He focused on checkout flows, payment gateway integrations, and cross-browser compatibility. Found a payment edge case in Safari that would have cost us real money if it shipped. Solid work under tight deadlines.",
    project: "Walexport",
  },
];
