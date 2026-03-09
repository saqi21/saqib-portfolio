export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "testing" | "tools";
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  project?: string;
}

export interface TechStackCategory {
  category: string;
  tools: string[];
}

export interface KeyContribution {
  title: string;
  description: string;
  highlights?: string[];
  example?: string;
}

export interface ImpactMetric {
  metric: string;
  before: string;
  after: string;
}

export interface Work {
  slug: string;
  name: string;
  category: "sqa" | "frontend-sqa";
  tagline: string;
  logo: string;
  url?: string;
  technologies: string[];
  featured: boolean;
  hasCaseStudy: boolean;
  // Case study fields
  summary?: string;
  detailedSummary?: string;
  problem?: string;
  solution?: string;
  role?: string;
  results?: string[];
  achievements?: string[];
  challenges?: string[];
  impactMetrics?: ImpactMetric[];
  keyContributions?: KeyContribution[];
  techStackDetails?: TechStackCategory[];
  leadership?: string;
  keyTakeaways?: string[];
}
