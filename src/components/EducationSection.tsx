import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, BookOpen } from "lucide-react";

const education = {
  de: [
    {
      degree: "Bachelor of Science in Radiologie",
      institution: "Isfahan University of Medical Sciences",
      period: "2020 – 2024",
      description: "Akademischer Hintergrund im Bereich Radiologie mit strukturierter, analytischer Ausbildung und wissenschaftlicher Arbeitsweise.",
      icon: GraduationCap,
    },
    {
      degree: "UI/UX-Design Kurs (240 Stunden)",
      institution: "Isfahan Design Academy",
      period: "",
      description: "Praxisorientierte Weiterbildung mit Schwerpunkt auf User Experience, User Interface Design, Wireframing, Prototyping und Designprozessen.",
      icon: BookOpen,
    },
  ],
  en: [
    {
      degree: "Bachelor of Science in Radiology",
      institution: "Isfahan University of Medical Sciences",
      period: "2020 – 2024",
      description: "Academic background in radiology with structured, analytical training and a research-driven approach.",
      icon: GraduationCap,
    },
    {
      degree: "UI/UX Design Course (240 hours)",
      institution: "Isfahan Design Academy",
      period: "2021 – 2022",
      description: "Practice-oriented training focused on user experience, user interface design, wireframing, prototyping, and design processes.",
      icon: BookOpen,
    },
  ],
};

export default function EducationSection() {
  const { lang, t } = useLanguage();

  return (
    <SectionWrapper id="education" title={t("education.title")}>
      <div className="grid md:grid-cols-2 gap-6">
        {education[lang].map((edu, i) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-6 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mt-1">{edu.period}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
