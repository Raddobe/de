import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Monitor, Smartphone, Image } from "lucide-react";

const projects = {
  de: [
    {
      title: "Dg-Product Webshop",
      category: "web",
      description: "Modernes E-Commerce-Design mit intuitivem Benutzerfluss und klarer Produktpräsentation.",
      tags: ["UI Design", "E-Commerce", "Figma"],
    },
    {
      title: "Teaching Platform",
      category: "web",
      description: "Online-Lernplattform mit übersichtlichem Dashboard und interaktivem Kursdesign.",
      tags: ["UX Research", "Web Design", "Prototyping"],
    },
    {
      title: "Mix Panel Dashboard",
      category: "web",
      description: "Analytics-Dashboard mit Datenvisualisierung und benutzerfreundlicher Navigation.",
      tags: ["Dashboard", "Data Viz", "UI Design"],
    },
    {
      title: "NFT Marketplace",
      category: "web",
      description: "Digitaler Marktplatz für NFTs mit modernem, dunklem Interface-Design.",
      tags: ["Web3", "UI Design", "Dark Mode"],
    },
    {
      title: "Fitness App",
      category: "web",
      description: "Fitness-Website mit motivierendem Design und übersichtlicher Kursstruktur.",
      tags: ["Responsive", "UI Design", "Branding"],
    },
    {
      title: "TopHero App",
      category: "app",
      description: "Mobile App mit spielerischem Interface und engagierendem Onboarding-Prozess.",
      tags: ["Mobile UI", "App Design", "Gamification"],
    },
    {
      title: "EventTrue App",
      category: "app",
      description: "Event-Management-App mit elegantem Design und reibungslosem Buchungsablauf.",
      tags: ["Mobile UX", "App Design", "Booking"],
    },
    {
      title: "Markenidentitäten",
      category: "graphic",
      description: "Verschiedene Branding-Projekte mit Logo-Design und visueller Identität.",
      tags: ["Branding", "Logo", "Print"],
    },
  ],
  en: [
    {
      title: "Dg-Product Webshop",
      category: "web",
      description: "Modern e-commerce design with intuitive user flow and clear product presentation.",
      tags: ["UI Design", "E-Commerce", "Figma"],
    },
    {
      title: "Teaching Platform",
      category: "web",
      description: "Online learning platform with clean dashboard and interactive course design.",
      tags: ["UX Research", "Web Design", "Prototyping"],
    },
    {
      title: "Mix Panel Dashboard",
      category: "web",
      description: "Analytics dashboard with data visualization and user-friendly navigation.",
      tags: ["Dashboard", "Data Viz", "UI Design"],
    },
    {
      title: "NFT Marketplace",
      category: "web",
      description: "Digital marketplace for NFTs with modern, dark interface design.",
      tags: ["Web3", "UI Design", "Dark Mode"],
    },
    {
      title: "Fitness Website",
      category: "web",
      description: "Fitness website with motivational design and organized course structure.",
      tags: ["Responsive", "UI Design", "Branding"],
    },
    {
      title: "TopHero App",
      category: "app",
      description: "Mobile app with playful interface and engaging onboarding process.",
      tags: ["Mobile UI", "App Design", "Gamification"],
    },
    {
      title: "EventTrue App",
      category: "app",
      description: "Event management app with elegant design and seamless booking flow.",
      tags: ["Mobile UX", "App Design", "Booking"],
    },
    {
      title: "Brand Identities",
      category: "graphic",
      description: "Various branding projects including logo design and visual identity.",
      tags: ["Branding", "Logo", "Print"],
    },
  ],
};

const categoryIcons = {
  web: Monitor,
  app: Smartphone,
  graphic: Image,
};

const filters = ["all", "web", "app", "graphic"] as const;

export default function ProjectsSection() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? projects[lang]
    : projects[lang].filter((p) => p.category === activeFilter);

  const filterLabels: Record<string, string> = {
    all: lang === "de" ? "Alle" : "All",
    web: t("projects.categories.web"),
    app: t("projects.categories.app"),
    graphic: t("projects.categories.graphic"),
  };

  return (
    <SectionWrapper id="projects" title={t("projects.title")}>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {filterLabels[filter]}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => {
            const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl overflow-hidden hover-lift group"
              >
                {/* Colored header area */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                  <Icon size={40} className="text-primary/40 group-hover:text-primary/70 transition-colors" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-[10px] rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
                      {filterLabels[project.category]}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[11px] rounded-full bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
