import type { Profile } from "../types/Profile";

export const profile: Profile = {
  name: "Norberto López",

  role: {
    es: "Desarrollador Backend",
    en: "Backend Developer",
  },

  headline: {
    es: {
      before:
        "Ingeniero en Software recién egresado con experiencia profesional desarrollando",
      highlight:
        "APIs, aplicaciones en tiempo real y sistemas distribuidos",
      after:
        "aplicando principios de arquitectura limpia, inyección de dependencias y diseño desacoplado con TypeScript y el ecosistema Node.js.",
    },

    en: {
      before:
        "Recent Software Engineering graduate with professional experience building",
      highlight:
        "APIs, real-time applications, and distributed systems",
      after:
        "by applying clean architecture principles, dependency injection, and loosely coupled design using TypeScript and the Node.js ecosystem.",
    },
  },

  about: {
    es:
      "Ingeniero en Software recién egresado con experiencia profesional participando en el desarrollo de plataformas SaaS, sistemas ERP y aplicaciones web. He trabajado tanto de manera individual como en equipo implementando funcionalidades de negocio, integraciones con APIs y aplicaciones en tiempo real.\n\nMi principal interés es el desarrollo backend y el diseño de software. Disfruto modelar problemas de negocio y construir APIs y sistemas mantenibles aplicando principios de arquitectura limpia, inversión de dependencias e inyección de dependencias utilizando TypeScript y el ecosistema Node.js.\n\nActualmente estoy profundizando en Java y Spring Boot para ampliar mis conocimientos en el desarrollo de aplicaciones backend y sistemas empresariales.",

    en:
      "Recent Software Engineering graduate with professional experience contributing to SaaS platforms, ERP systems, and web applications. I have worked both independently and as part of a team implementing business features, API integrations, and real-time applications.\n\nMy primary interest is backend development and software design. I enjoy modeling business problems and building APIs and maintainable systems by applying clean architecture principles, dependency inversion, and dependency injection using TypeScript and the Node.js ecosystem.\n\nI am currently deepening my knowledge of Java and Spring Boot to expand my expertise in backend development and enterprise applications.",
  },

  location: "Chiapas, México",

  availableForWork: true,

  cvUrl: "/cv.pdf",

  socials: {
    github: "https://github.com/kiritoKazut0",
    linkedin: "#",
    twitter: "#",
  },
};