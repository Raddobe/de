import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import SectionWrapper from "./SectionWrapper";
import { Monitor, Smartphone, Image } from "lucide-react";
import artisticLayoutImage from "@/assets/Artistic Layout.jpg";
import brochureImage from "@/assets/Broschüre.jpg";
import cosmeticAdImage from "@/assets/Cosmetic Ad.jpg";
import crampImage from "@/assets/cramp.jpg";
import dgProductImage from "@/assets/dgproduckt.jpg";
import digitalProductImage from "@/assets/Digital Product Presentation.jpg";
import fitnessImage from "@/assets/fitness.jpg";
import foodDeliveryImage from "@/assets/Food Delivery App.jpg";
import headlineImage from "@/assets/Headline App.jpg";
import iranHomeImage from "@/assets/iranhome.jpg";
import mixpanelImage from "@/assets/mixpanel.jpg";
import nftImage from "@/assets/nft.jpg";
import packagingImage from "@/assets/Packaging Design.jpg";
import posterSeriesImage from "@/assets/Poster Series.jpg";
import publicationImage from "@/assets/Publication Design.jpg";

const projects = {
  de: [
    {
      title: "Dg-Product Webshop",
      category: "web",
      image: dgProductImage,
      description:
        "Modernes E-Commerce-Design mit klarer Produktpräsentation, strukturiertem Seitenaufbau und benutzerfreundlichem Interface.",
      tags: ["UI Design", "E-Commerce", "Web Design"],
    },
    {
      title: "Mix Panel Dashboard",
      category: "web",
      image: mixpanelImage,
      description:
        "Modernes Dashboard-Konzept mit übersichtlicher Informationsarchitektur, klaren UI-Komponenten und intuitiver Benutzerführung.",
      tags: ["Dashboard", "UI Design", "Data Interface"],
    },
    {
      title: "NFT Marketplace Concept",
      category: "web",
      image: nftImage,
      description:
        "Dunkles, modernes Interface-Konzept für einen digitalen NFT-Marktplatz mit starkem visuellen Fokus und klarer Content-Struktur.",
      tags: ["Web3", "UI Design", "Dark Mode"],
    },
    {
      title: "Fitness Website",
      category: "web",
      image: fitnessImage,
      description:
        "Dynamisches Webdesign für eine Sport- und Fitnessplattform mit motivierender visueller Sprache und übersichtlicher Inhaltsstruktur.",
      tags: ["Responsive Design", "UI Design", "Branding"],
    },
    {
      title: "Digital Product Presentation",
      category: "web",
      image: digitalProductImage,
      description:
        "Visuelles Konzept zur Präsentation digitaler Produkte, Interfaces und Systemansichten mit Fokus auf Klarheit und Designkonsistenz.",
      tags: ["Product Design", "UI System", "Presentation"],
    },
    {
      title: "Iran Home Platform",
      category: "web",
      image: iranHomeImage,
      description:
        "Sauberes und modernes Website-Konzept für eine informationsorientierte Plattform mit strukturierter Navigation und ruhigem Layout.",
      tags: ["Web Design", "Interface Design", "UX Structure"],
    },
    {
      title: "Food Delivery App",
      category: "app",
      image: foodDeliveryImage,
      description:
        "Mobiles App-Konzept für Essensbestellung mit klarer Produktdarstellung, benutzerfreundlicher Navigation und modernem Interface.",
      tags: ["Mobile UI", "App Design", "Food Tech"],
    },
    {
      title: "cramp App",
      category: "app",
      image: crampImage,
      description:
        "UI-Konzept für eine mobile Anwendung mit klarem Informationsaufbau, modernen Interface-Komponenten und nutzerorientierter Struktur.",
      tags: ["Mobile UX", "App Design", "UI System"],
    },
    {
      title: "Headline App",
      category: "app",
      image: headlineImage,
      description:
        "Modernes Mobile-App-Design mit ruhiger visueller Sprache, klarer Benutzerführung und zeitgemäßem Interface-Stil.",
      tags: ["Mobile UI", "App Design", "Interface Design"],
    },
    {
      title: "Produktwerbung & Social Media Visual",
      category: "graphic",
      image: cosmeticAdImage,
      description:
        "Gestaltung eines werblichen Key Visuals für ein Produkt mit Fokus auf visuelle Hierarchie, Produktpräsentation und markenorientierte Farbgestaltung.",
      tags: ["Advertising", "Product Design", "Visual Design"],
    },
    {
      title: "Packaging Design",
      category: "graphic",
      image: packagingImage,
      description:
        "Verpackungskonzept mit klarer Markenwirkung, illustrativer Gestaltung und produktbezogener visueller Identität.",
      tags: ["Packaging", "Branding", "Print Design"],
    },
    {
      title: "Broschüren- und Faltblattdesign",
      category: "graphic",
      image: brochureImage,
      description:
        "Gestaltung eines mehrseitigen Printlayouts mit strukturierter Informationsaufbereitung und präziser typografischer Anordnung.",
      tags: ["Print Design", "Layout", "Typography"],
    },
    {
      title: "Posterdesign-Serie",
      category: "graphic",
      image: posterSeriesImage,
      description:
        "Entwicklung visueller Poster mit starkem Fokus auf grafische Komposition, Farbwirkung und wirkungsvolle Kommunikation.",
      tags: ["Poster Design", "Print", "Visual Communication"],
    },
    {
      title: "Editorial & Artistic Layout",
      category: "graphic",
      image: artisticLayoutImage,
      description:
        "Kreatives Layoutprojekt mit experimenteller Bildsprache, gestalterischer Komposition und editoriellem Charakter.",
      tags: ["Editorial", "Layout Design", "Art Direction"],
    },
    {
      title: "Cover- und Publikationsdesign",
      category: "graphic",
      image: publicationImage,
      description:
        "Gestaltung eines modernen Covers mit sauberem Layout, illustrativen Elementen und professioneller Druckästhetik.",
      tags: ["Cover Design", "Publication", "Print Media"],
    },
  ],
  en: [
    {
      title: "Dg-Product Webshop",
      category: "web",
      image: dgProductImage,
      description:
        "Modern e-commerce design with clear product presentation, structured layout, and user-friendly interface.",
      tags: ["UI Design", "E-Commerce", "Web Design"],
    },
    {
      title: "Mix Panel Dashboard",
      category: "web",
      image: mixpanelImage,
      description:
        "Modern dashboard concept with clean information architecture, clear UI components, and intuitive navigation.",
      tags: ["Dashboard", "UI Design", "Data Interface"],
    },
    {
      title: "NFT Marketplace Concept",
      category: "web",
      image: nftImage,
      description:
        "Dark, modern interface concept for a digital NFT marketplace with strong visual focus and clear content structure.",
      tags: ["Web3", "UI Design", "Dark Mode"],
    },
    {
      title: "Fitness Website",
      category: "web",
      image: fitnessImage,
      description:
        "Dynamic web design for a sports and fitness platform with motivating visuals and a clear content structure.",
      tags: ["Responsive Design", "UI Design", "Branding"],
    },
    {
      title: "Digital Product Presentation",
      category: "web",
      image: digitalProductImage,
      description:
        "Visual concept for presenting digital products, interfaces, and system views with a focus on clarity and design consistency.",
      tags: ["Product Design", "UI System", "Presentation"],
    },
    {
      title: "Iran Home Platform",
      category: "web",
      image: iranHomeImage,
      description:
        "Clean, modern website concept for an information-focused platform with structured navigation and a calm layout.",
      tags: ["Web Design", "Interface Design", "UX Structure"],
    },
    {
      title: "Food Delivery App",
      category: "app",
      image: foodDeliveryImage,
      description:
        "Mobile app concept for food ordering with clear product presentation, user-friendly navigation, and a modern interface.",
      tags: ["Mobile UI", "App Design", "Food Tech"],
    },
    {
      title: "cramp App",
      category: "app",
      image: crampImage,
      description:
        "UI concept for a mobile application with clear information structure, modern interface components, and a user-centered layout.",
      tags: ["Mobile UX", "App Design", "UI System"],
    },
    {
      title: "Headline App",
      category: "app",
      image: headlineImage,
      description:
        "Modern mobile app design with a calm visual tone, clear user guidance, and a contemporary interface style.",
      tags: ["Mobile UI", "App Design", "Interface Design"],
    },
    {
      title: "Product Advertising & Social Media Visual",
      category: "graphic",
      image: cosmeticAdImage,
      description:
        "Designing a promotional key visual focused on visual hierarchy, product presentation, and brand-oriented color styling.",
      tags: ["Advertising", "Product Design", "Visual Design"],
    },
    {
      title: "Packaging Design",
      category: "graphic",
      image: packagingImage,
      description:
        "Packaging concept with strong brand impact, illustrative design, and product-centered visual identity.",
      tags: ["Packaging", "Branding", "Print Design"],
    },
    {
      title: "Brochure & Foldout Design",
      category: "graphic",
      image: brochureImage,
      description:
        "Multi-page print layout with structured information hierarchy and precise typographic arrangement.",
      tags: ["Print Design", "Layout", "Typography"],
    },
    {
      title: "Poster Series",
      category: "graphic",
      image: posterSeriesImage,
      description:
        "Visual poster development with strong focus on graphic composition, color impact, and effective communication.",
      tags: ["Poster Design", "Print", "Visual Communication"],
    },
    {
      title: "Editorial & Artistic Layout",
      category: "graphic",
      image: artisticLayoutImage,
      description:
        "Creative layout project with experimental imagery, design composition, and an editorial character.",
      tags: ["Editorial", "Layout Design", "Art Direction"],
    },
    {
      title: "Cover & Publication Design",
      category: "graphic",
      image: publicationImage,
      description:
        "Modern cover design with clean layout, illustrative elements, and professional print aesthetics.",
      tags: ["Cover Design", "Publication", "Print Media"],
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
                className="glass bg-card/80 dark:bg-card/60 rounded-xl overflow-hidden hover-lift group shadow-sm"
              >
                {/* Image header area */}
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <Icon size={40} className="text-primary/40 group-hover:text-primary/70 transition-colors" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-[10px] rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider">
                      {filterLabels[project.category]}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/70 dark:text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] rounded-full bg-secondary/70 text-secondary-foreground"
                      >
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
