import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = {
  de: [
    {
      role: "Grafikdesigner & UI/UX Designer",
      company: "Freiberuflich",
      period: "2020 – Heute",
      description: "Gestaltung von Webseiten, mobilen Apps und Markenidentitäten für verschiedene Kunden. Verantwortlich für den gesamten Designprozess von der Konzeption bis zur Umsetzung.",
      tasks: ["Web Design", "App Design", "Grafikdesign", "Branding"],
    },
    {
      role: "UI/UX Designer",
      company: "Designagentur",
      period: "2018 – 2020",
      description: "Entwicklung benutzerfreundlicher Interfaces für Web- und Mobile-Anwendungen. Durchführung von User Research und Usability-Tests.",
      tasks: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ],
  en: [
    {
      role: "Graphic Designer & UI/UX Designer",
      company: "Freelance",
      period: "2020 – Present",
      description: "Designing websites, mobile apps, and brand identities for various clients. Responsible for the entire design process from concept to implementation.",
      tasks: ["Web Design", "App Design", "Graphic Design", "Branding"],
    },
    {
      role: "UI/UX Designer",
      company: "Design Agency",
      period: "2018 – 2020",
      description: "Developing user-friendly interfaces for web and mobile applications. Conducting user research and usability testing.",
      tasks: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ],
};

export default function ExperienceSection() {
  const { lang, t } = useLanguage();

  return (
    <SectionWrapper id="experience" title={t("experience.title")}>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12">
          {experiences[lang].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="glass rounded-xl p-6 hover-lift">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-primary text-sm font-medium">{exp.company}</p>
                  </div>
                  <span className="text-muted-foreground text-sm mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tasks.map((task) => (
                    <span key={task} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
