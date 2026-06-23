import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    period: {
      en: "Jan 2025 - May 2025",
      es: "Ene 2025 - May 2025"
    },

    title: "Cloudteen.io",

    role: {
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
    },

    location: {
      es: "Chiapas, México • Experiencia Profesional",
      en: "Chiapas, Mexico • Professional Experience",
    },

    description: {
      es:
        "Participé en el desarrollo de una plataforma SaaS multiusuario para restaurantes, un sistema ERP y una aplicación de reservación de canchas de pádel, colaborando en la implementación de funcionalidades de negocio e integración con APIs dentro de equipos multidisciplinarios.",

      en:
        "Contributed to the development of a multi-tenant SaaS platform for restaurants, an ERP system, and a padel court reservation application, collaborating on business feature implementation and API integrations within multidisciplinary teams.",
    },

    highlights: [
      {
        es:
          "Desarrollé de forma individual una plataforma SaaS multiusuario para restaurantes consumiendo e integrando APIs orientadas al negocio.",
        en:
          "Independently developed a multi-tenant SaaS platform for restaurants by consuming and integrating business-oriented APIs.",
      },
      {
        es:
          "Implementé módulos de pagos y reservaciones contemplando distintos escenarios y reglas de negocio.",
        en:
          "Implemented payment and reservation modules covering multiple business scenarios and rules.",
      },
      {
        es:
          "Participé en el desarrollo y refactorización de módulos de un sistema ERP colaborando con servicios backend y flujos de datos complejos.",
        en:
          "Contributed to the development and refactoring of ERP modules, collaborating with backend services and complex data flows.",
      },
    ],
    images: [
      "./images/experience/cloudteen/padel-reserva.webp",
      "./images/experience/cloudteen/odix.webp",
      "./images/experience/cloudteen/erp.webp",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Zustand",
      "TanStack Query",
      "REST API",
    ],
  },

  {
    period: {
      en: "Dec 2023",
      es: "Dic 2023"
    },
    title: "Hightech Process Counselours",

    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },

    location: {
      es: "Chiapas, México • Prácticas Profesionales",
      en: "Chiapas, Mexico • Professional Internship",
    },

    description: {
      es:
        "Desarrollé de forma individual una aplicación de mensajería en tiempo real implementando autenticación mediante JWT, persistencia de mensajes, comunicación con WebSockets e integración con la API de WhatsApp utilizando Twilio.",

      en:
        "Independently developed a real-time messaging application implementing JWT-based authentication, message persistence, WebSocket communication, and WhatsApp API integration using Twilio.",
    },

    highlights: [
      {
        es:
          "Diseñé conversaciones privadas y notificaciones en tiempo real utilizando WebSockets.",
        en:
          "Designed private conversations and real-time notifications using WebSockets.",
      },
      {
        es:
          "Implementé mecanismos de sincronización y recuperación de mensajes pendientes después de reconexiones.",
        en:
          "Implemented synchronization and message recovery mechanisms for pending messages after reconnections.",
      },
      {
        es:
          "Integré servicios externos mediante la API de WhatsApp utilizando Twilio.",
        en:
          "Integrated external services through the WhatsApp API using Twilio.",
      },
    ],

    images: [
      "./images/experience/hightech/chat.webp",
      "./images/experience/hightech/contactos.webp",
    ],

    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "JWT",
      "MongoDB",
      "Twilio",
    ],
  },
];