
import type { Experience } from "../types/Experience";

export const experiences: Experience[] = [
  {
    period: {
      es: "Ago 2026 - Actualidad",
      en: "Nov 2026 - Present",
    },

    title: "Proyecto freelance · Sistema de gestión administrativa",

    role: {
      es: "Desarrollador de Software Freelance",
      en: "Freelance Software Developer",
    },

    location: {
      es: "Chiapas, México • Proyecto en desarrollo",
      en: "Chiapas, Mexico • Ongoing project",
    },

    description: {
      es:
        "Diseño y desarrollo el backend de un sistema de gestión administrativa con NestJS, MySQL y TypeORM. Mi trabajo abarca la implementación de reglas de negocio, automatización de procesos financieros, autenticación y gestión de sesiones. También colaboro en el frontend con Next.js y me encargué del despliegue de la aplicación.",

      en:
        "I design and develop the backend of an administrative management system using NestJS, MySQL, and TypeORM. My work includes business logic implementation, financial process automation, authentication, and session management. I also contribute to the Next.js frontend and handled application deployment.",
    },

    highlights: [
      {
        es:
          "Desarrollo APIs REST y módulos administrativos con NestJS, MySQL y TypeORM, implementando validaciones y reglas de negocio.",
        en:
          "Develop REST APIs and administrative modules using NestJS, MySQL, and TypeORM, implementing validations and business rules.",
      },
      {
        es:
          "Automaticé la generación anual de cobros prediales mediante tareas programadas y el cálculo de multas a partir de registros de asistencia a reuniones.",
        en:
          "Automated annual property-tax charges through scheduled tasks and fine calculation based on meeting attendance records.",
      },
      {
        es:
          "Incorporé mecanismos de idempotencia para prevenir la duplicación de cobros, multas y registros de pagos.",
        en:
          "Implemented idempotency mechanisms to help prevent duplicate charges, fines, and payment records.",
      },
      {
        es:
          "Implementé registros históricos de cargos y recargos, conservando importes y tarifas aplicadas para proporcionar trazabilidad sobre los adeudos.",
        en:
          "Implemented charge and surcharge histories, preserving applied amounts and rates to provide traceability for outstanding balances.",
      },
      {
        es:
          "Implementé autenticación mediante access tokens de corta duración y refresh tokens transmitidos mediante cookies, incluyendo renovación de sesiones, revocación y controles contra reutilización de tokens.",
        en:
          "Implemented authentication using short-lived access tokens and cookie-based refresh tokens, including session renewal, revocation, and token-reuse controls.",
      },
      {
        es:
          "Configuré el despliegue del backend en Railway y del frontend en Vercel, incluyendo dominios y subdominios. También colaboro en la integración de APIs, protección de rutas y refactorización de componentes con Next.js.",
        en:
          "Configured backend deployment on Railway and frontend deployment on Vercel, including domains and subdomains. I also contribute to API integrations, route protection, and component refactoring with Next.js.",
      },
    ],

    images: [
      './images/experience/freelance/Captura de pantalla (688).png',
      './images/experience/freelance/Captura de pantalla (689).png',
      './images/experience/freelance/Captura de pantalla (691).png',
      './images/experience/freelance/Captura de pantalla (692).png',
      './images/experience/freelance/Captura de pantalla (693).png',
      './images/experience/freelance/Captura de pantalla (695).png'
    ],

    technologies: [
      "TypeScript",
      "NestJS",
      "MySQL",
      "TypeORM",
      "Next.js",
      "REST APIs",
      "JWT",
      "Swagger",
      "Railway",
      "Vercel",
      "shadcn/ui",
    ],
  },

  {
    period: {
      es: "Ene 2026 - May 2026",
      en: "Jan 2026 - May 2026",
    },

    title: "Cloudteen.io",

    role: {
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
    },

    location: {
      es: "Chiapas, México • Prácticas y colaboración posterior",
      en: "Chiapas, Mexico • Internship and subsequent collaboration",
    },

    description: {
      es:
        "Ingresé como practicante y posteriormente continué colaborando en el desarrollo de aplicaciones web. Trabajé en una plataforma SaaS multiusuario para restaurantes, funcionalidades de reservación y pagos para canchas de pádel, y módulos de un sistema ERP.",

      en:
        "I joined as an intern and continued collaborating afterward on web application development. I worked on a multi-user SaaS platform for restaurants, booking and payment features for padel courts, and ERP system modules.",
    },

    highlights: [
      {
        es:
          "Desarrollé el frontend de una plataforma SaaS multiusuario para restaurantes, integrando APIs de pedidos, menú y facturación.",
        en:
          "Developed the frontend of a multi-user restaurant SaaS platform, integrating ordering, menu, and billing APIs.",
      },
      {
        es:
          "Implementé flujos de pagos y reservaciones para canchas de pádel, contemplando diferentes escenarios y reglas de negocio.",
        en:
          "Implemented payment and booking flows for padel courts, covering different business scenarios and rules.",
      },
      {
        es:
          "Colaboré en el desarrollo y refactorización de módulos ERP, integración de servicios backend y manejo de flujos de datos en el frontend.",
        en:
          "Contributed to ERP module development and refactoring, backend service integration, and frontend data handling.",
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
      "REST APIs",
    ],
  },

  {
    period: {
      es: "Dic 2023",
      en: "Dec 2023",
    },

    title: "Hightech Process Counselours",

    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },

    location: {
      es: "Chiapas, México • Prácticas profesionales",
      en: "Chiapas, Mexico • Professional internship",
    },

    description: {
      es:
        "Desarrollé una aplicación de mensajería en tiempo real con autenticación JWT, persistencia de mensajes en MongoDB, comunicación mediante Socket.IO e integración con WhatsApp a través de Twilio.",

      en:
        "Developed a real-time messaging application with JWT authentication, MongoDB message persistence, Socket.IO communication, and WhatsApp integration through Twilio.",
    },

    highlights: [
      {
        es:
          "Desarrollé una aplicación de mensajería con conversaciones y comunicación en tiempo real utilizando Socket.IO.",
        en:
          "Developed a messaging application with conversations and real-time communication using Socket.IO.",
      },
      {
        es:
          "Implementé autenticación JWT, persistencia en MongoDB y mecanismos de recuperación de mensajes pendientes después de reconexiones.",
        en:
          "Implemented JWT authentication, MongoDB persistence, and mechanisms for recovering pending messages after reconnections.",
      },
      {
        es:
          "Integré la API de WhatsApp mediante Twilio para permitir comunicación con servicios externos.",
        en:
          "Integrated the WhatsApp API through Twilio to enable communication with external services.",
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
