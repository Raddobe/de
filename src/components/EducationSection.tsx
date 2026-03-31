import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, BookOpen } from "lucide-react";

const education = {
  de: [
    {
      degree: "Bachelor of Science – Desktop Publishing & Grafikdesign",
      institution: "Universität",
      period: "2015 – 2019",
      description: "Schwerpunkt auf visuellem Design, Typografie und digitalen Medien.",
      icon: GraduationCap,
    },
    {
      degree: "DaF Kurs (Deutsch als Fremdsprache)",
      institution: "Sprachinstitut, Deutschland",
      period: "2022 – 2023",
      description: "Intensiver Deutschkurs zur Integration und beruflichen Weiterentwicklung.",
      icon: BookOpen,
    },
  ],
  en: [
    {
      degree: "Bachelor of Science – Desktop Publishing & Graphic Design",
      institution: "University",
      period: "2015 – 2019",
      description: "Focus on visual design, typography, and digital media.",
      icon: GraduationCap,
    },
    {
      degree: "DaF Course (German as a Foreign Language)",
      institution: "Language Institute, Germany",
      period: "2022 – 2023",
      description: "Intensive German course for integration and professional development.",
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
