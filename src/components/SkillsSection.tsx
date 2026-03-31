import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";

const skillData = {
  design: [
    { name: "User Interface Design", level: 95 },
    { name: "Interaction Design", level: 90 },
    { name: "Responsive Design", level: 92 },
    { name: "Typography", level: 88 },
    { name: "Design Systems", level: 85 },
    { name: "Wireframing & Prototyping", level: 93 },
  ],
  tools: [
    { name: "Figma", level: 95 },
    { name: "Adobe XD", level: 88 },
    { name: "Adobe Illustrator", level: 85 },
    { name: "Adobe Photoshop", level: 82 },
    { name: "HTML / CSS", level: 80 },
  ],
  methods: [
    { name: "Design Thinking", level: 90 },
    { name: "User Research", level: 88 },
    { name: "User Flow / User Journey", level: 85 },
    { name: "Persona Development", level: 82 },
    { name: "Usability Testing", level: 80 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-heading font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { t } = useLanguage();

  const categories = [
    { key: "design", data: skillData.design },
    { key: "tools", data: skillData.tools },
    { key: "methods", data: skillData.methods },
  ];

  return (
    <SectionWrapper id="skills" title={t("skills.title")}>
      <div className="grid md:grid-cols-3 gap-10">
        {categories.map(({ key, data }) => (
          <div key={key}>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
              {t(`skills.categories.${key}`)}
            </h3>
            <div className="space-y-5">
              {data.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
