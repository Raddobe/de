import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = {
  de: [
    {
      role: "Grafikdesigner & UI/UX Designer",
      company: "Zentrum der Stadtverwaltung Isfahan",
      period: "2020 – 2021",
      description:
        "Arbeit an visuellen Kommunikationsprojekten und digitalen Interfaces mit einem starken Fokus auf Klarheit, Funktionalität und Ästhetik. Gestaltung benutzerorientierter Lösungen für digitale Produkte sowie Entwicklung visueller Konzepte im Bereich Grafik- und Interface-Design.",
      tasks: ["Grafikdesign", "UI/UX Design", "Interface Design", "Visuelle Kommunikation"],
    },
    {
      role: "UI/UX Designer",
      company: "Freie Projekte & Produktkonzepte",
      period: "2021 – Heute",
      description:
        "Konzeption und Gestaltung digitaler Erlebnisse für Web- und Mobile-Produkte – von der ersten Idee bis zum visuellen Interface. Arbeit an User Flows, Wireframes, Prototypen und modernen UI-Systemen mit Fokus auf Nutzerbedürfnisse und konsistente Designqualität.",
      tasks: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
  ],
  en: [
    {
      role: "Graphic Designer & UI/UX Designer",
      company: "Isfahan Municipality Center",
      period: "2020 – 2021",
      description:
        "Working on visual communication projects and digital interfaces with a strong focus on clarity, functionality, and aesthetics. Designing user-centered solutions for digital products and developing visual concepts in graphic and interface design.",
      tasks: ["Graphic Design", "UI/UX Design", "Interface Design", "Visual Communication"],
    },
    {
      role: "UI/UX Designer",
      company: "Freelance Projects & Product Concepts",
      period: "2021 – Present",
      description:
        "Conceptualizing and designing digital experiences for web and mobile products—from the first idea to the visual interface. Working on user flows, wireframes, prototypes, and modern UI systems with a focus on user needs and consistent design quality.",
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
