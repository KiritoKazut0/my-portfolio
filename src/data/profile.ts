
import type { Profile } from "../types/Profile";

export const profile: Profile = {
  name: "Norberto López",

  role: {
    es: "Desarrollador de Software",
    en: "Software Developer",
  },

  headline: {
    es: {
      before: "Desarrollador de software con experiencia en",
      highlight: "aplicaciones web, APIs y sistemas de gestión",
      after:
        "a través de proyectos freelance y colaboraciones con empresas, trabajando tanto en frontend como en backend.",
    },

    en: {
      before: "Software developer experienced in building",
      highlight: "web applications, APIs, and management systems",
      after:
        "through freelance projects and work with companies, contributing to both frontend and backend development.",
    },
  },

  about: {
    es:
      "Soy egresado de Ingeniería en Software de la Universidad Politécnica de Chiapas. Mi experiencia incluye proyectos freelance, prácticas profesionales y colaboraciones con empresas en el desarrollo de aplicaciones web, plataformas SaaS y sistemas de gestión.\n\nHe trabajado en frontend y backend con tecnologías como TypeScript, React, Next.js y NestJS. He desarrollado interfaces, APIs REST, integraciones con servicios externos y funcionalidades basadas en reglas de negocio, además de participar en el modelado de bases de datos, la automatización de procesos y el despliegue de aplicaciones.\n\nTambién he desarrollado proyectos académicos relacionados con IoT, aplicaciones en tiempo real, microservicios y sistemas RAG. Me interesa construir soluciones mantenibles y continuar profundizando en diseño y arquitectura de software. Actualmente estoy ampliando mis conocimientos en Java y Spring Boot.",

    en:
      "I am a Software Engineering graduate from Universidad Politécnica de Chiapas. My experience includes freelance projects, internships, and collaborations with companies developing web applications, SaaS platforms, and management systems.\n\nI have worked across frontend and backend development using technologies such as TypeScript, React, Next.js, and NestJS. My experience includes building user interfaces, REST APIs, third-party integrations, and business logic, as well as database modeling, process automation, and application deployment.\n\nI have also developed academic projects involving IoT, real-time applications, microservices, and RAG systems. I am interested in building maintainable software and continuing to improve my software design and architecture skills. I am currently expanding my knowledge of Java and Spring Boot.",
  },

  location: "Chiapas, México",

  availableForWork: true,

  cvUrl: "/cv.pdf",

  socials: {
    github: "https://github.com/kiritoKazut0",
    linkedin: "",
    twitter: "",
  },
};
