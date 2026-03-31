import { motion, useScroll, useTransform } from "framer-motion";
import { LanguageProvider } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const grow = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const fade = useTransform(scrollYProgress, [0, 0.2, 1], [0.04, 0.1, 0.16]);

  return (
    <LanguageProvider>
      <div className="min-h-screen relative overflow-hidden">
        <motion.svg
          style={{ scaleY: grow, opacity: fade, transformOrigin: "top center" }}
          className="pointer-events-none absolute inset-0 w-full h-full"
          viewBox="0 0 1200 2400"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M600 0 C 800 120 400 260 600 380 C 820 520 380 700 600 860 C 840 1040 360 1260 600 1480 C 860 1720 340 1980 600 2200"
            stroke="hsl(var(--primary) / 0.22)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.svg>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
