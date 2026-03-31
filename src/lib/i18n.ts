// Internationalization system for DE/EN language support

export type Language = "de" | "en";

export const translations = {
  de: {
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      experience: "Erfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      title: "UX/UI Designer & Web Designer",
      subtitle: "Ich gestalte digitale Erlebnisse, die begeistern — mit Fokus auf Ästhetik, Benutzerfreundlichkeit und Innovation.",
      cta: "Projekte ansehen",
      location: "Hannover, Deutschland",
    },
    about: {
      title: "Über mich",
      p1: "Ich bin ein leidenschaftlicher UX/UI- und Webdesigner mit Erfahrung in der Gestaltung moderner, benutzerfreundlicher digitaler Produkte. Mein Ansatz verbindet Design Thinking mit datengestützter Nutzererforschung.",
      p2: "Von User Research über Wireframing bis hin zum finalen UI-Design begleite ich den gesamten Designprozess. Ich arbeite mit Tools wie Figma, Adobe XD, Illustrator und Photoshop.",
      p3: "Mein Ziel ist es, digitale Produkte zu schaffen, die nicht nur gut aussehen, sondern auch intuitiv und barrierefrei nutzbar sind.",
    },
    skills: {
      title: "Fähigkeiten",
      categories: {
        design: "Design",
        tools: "Tools & Software",
        methods: "Methoden",
      },
    },
    experience: {
      title: "Berufserfahrung",
    },
    education: {
      title: "Ausbildung",
    },
    projects: {
      title: "Projekte",
      viewProject: "Projekt ansehen",
      categories: {
        web: "Web Design",
        app: "App Design",
        graphic: "Grafik Design",
      },
    },
    contact: {
      title: "Kontakt",
      subtitle: "Haben Sie ein Projekt im Sinn? Lassen Sie uns zusammenarbeiten.",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Nachricht senden",
      phone: "Telefon",
      location: "Standort",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title: "UX/UI Designer & Web Designer",
      subtitle: "I craft digital experiences that delight — focusing on aesthetics, usability, and innovation.",
      cta: "View Projects",
      location: "Hannover, Germany",
    },
    about: {
      title: "About Me",
      p1: "I'm a passionate UX/UI and web designer with experience crafting modern, user-friendly digital products. My approach combines Design Thinking with data-driven user research.",
      p2: "From user research through wireframing to final UI design, I guide the entire design process. I work with tools like Figma, Adobe XD, Illustrator, and Photoshop.",
      p3: "My goal is to create digital products that not only look great but are also intuitive and accessible.",
    },
    skills: {
      title: "Skills",
      categories: {
        design: "Design",
        tools: "Tools & Software",
        methods: "Methods",
      },
    },
    experience: {
      title: "Work Experience",
    },
    education: {
      title: "Education",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      categories: {
        web: "Web Design",
        app: "App Design",
        graphic: "Graphic Design",
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Let's work together.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      phone: "Phone",
      location: "Location",
    },
  },
} as const;

export function t(lang: Language, path: string): string {
  const keys = path.split(".");
  let result: any = translations[lang];
  for (const key of keys) {
    result = result?.[key];
  }
  return result ?? path;
}
