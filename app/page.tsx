import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsMarquee from "@/components/sections/ProjectsMarquee";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsMarquee />
      <ArticlesSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
