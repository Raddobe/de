import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { Palette, Users, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Palette, key: "design" },
  { icon: Users, key: "userCentric" },
  { icon: Lightbulb, key: "innovation" },
];

const highlightLabels = {
  de: { design: "Kreatives Design", userCentric: "Nutzerzentriert", innovation: "Innovation" },
  en: { design: "Creative Design", userCentric: "User-Centric", innovation: "Innovation" },
};

export default function AboutSection() {
  const { lang, t } = useLanguage();

  return (
    <SectionWrapper id="about" title={t("about.title")}>
      <div className="grid md:grid-cols-5 gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("about.p3")}</p>
        </motion.div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 space-y-4"
        >
          {highlights.map(({ icon: Icon, key }, i) => (
            <div
              key={key}
              className="glass rounded-xl p-5 hover-lift flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-primary" />
              </div>
              <span className="font-heading font-medium text-foreground">
                {highlightLabels[lang][key as keyof typeof highlightLabels.de]}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
