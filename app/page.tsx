import HeroSection from "@/components/sections/HeroSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import HowIWorkSection from "@/components/sections/HowIWorkSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ProjectsPreview />
      <TestimonialsSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection />
      <HowIWorkSection />
      <ArticlesSection />
      <ContactCTA />
    </>
  );
}
