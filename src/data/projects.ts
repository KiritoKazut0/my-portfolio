
import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: {
      es: "Plataforma de Análisis de Comentarios y Detección de Noticias Falsas",
      en: "Comment Analysis and Fake News Detection Platform",
    },

    description: {
      es:
        "Diseñé una arquitectura basada en microservicios para el análisis de comentarios y la detección de noticias falsas, integrando un sistema RAG desarrollado en Python. Configuré Kong Gateway como punto de entrada centralizado para el enrutamiento y la limitación de solicitudes a las APIs.",

      en:
        "Designed a microservices-based architecture for comment analysis and fake news detection, integrating a Python-based RAG system. Configured Kong Gateway as a centralized entry point for API routing and rate limiting.",
    },

    image: "./images/projects/gatway.png",

    techStack: [
      "NestJS",
      "Python",
      "Microservices",
      "RAG",
      "Kong Gateway",
    ],

    githubUrl: "https://github.com/KiritoKazut0/microservices.git",
    featured: true,
  },

  {
    title: {
      es: "Sistema de Monitoreo de Producción de Hidrógeno",
      en: "Hydrogen Production Monitoring System",
    },

    description: {
      es:
        "Desarrollé un sistema para capturar, almacenar y visualizar métricas de monitoreo de producción de hidrógeno a partir de microalgas. Implementé un flujo de procesamiento con RabbitMQ, persistencia en MongoDB y comunicación en tiempo real mediante WebSockets, aplicando arquitectura hexagonal para desacoplar la lógica de dominio de la infraestructura.",

      en:
        "Developed a system to capture, store, and visualize monitoring metrics for hydrogen production from microalgae. Implemented a processing flow with RabbitMQ, MongoDB persistence, and real-time communication through WebSockets, applying hexagonal architecture to decouple domain logic from infrastructure.",
    },

    image: "./images/projects/hydrogen-production-dashboard.webp",

    techStack: [
      "Node.js",
      "RabbitMQ",
      "MongoDB",
      "WebSockets",
      "Hexagonal Architecture",
    ],

    githubUrl: "https://github.com/KiritoKazut0/AlgasHexagonal.git",
    featured: true,
  },

  {
    title: {
      es: "Plataforma de Alquiler de Habitaciones",
      en: "Room Rental Platform",
    },

    description: {
      es:
        "Desarrollé una aplicación web para la publicación y administración de habitaciones en alquiler. Implementé suscripciones premium y pagos recurrentes mediante Stripe, almacenamiento de imágenes en AWS S3 e integración entre una API desarrollada con NestJS y una interfaz construida con React.",

      en:
        "Developed a web application for publishing and managing rental rooms. Implemented premium subscriptions and recurring payments through Stripe, image storage using AWS S3, and integration between a NestJS API and a React frontend.",
    },

    image: "./images/projects/rooms.webp",

    techStack: [
      "NestJS",
      "React",
      "Stripe",
      "AWS S3",
    ],

    githubUrl: "https://github.com/KiritoKazut0/RoomlyBackend.git",
    featured: false,
  },

  {
    title: {
      es: "Sistema de Monitoreo y Control de Invernaderos",
      en: "Greenhouse Monitoring and Control System",
    },

    description: {
      es:
        "Desarrollé la integración entre sensores, actuadores y una aplicación web para el monitoreo de condiciones ambientales y el control remoto de dispositivos de un invernadero. Utilicé MQTT para la comunicación con dispositivos IoT y APIs REST para la integración con la aplicación.",

      en:
        "Developed the integration between sensors, actuators, and a web application for monitoring environmental conditions and remotely controlling greenhouse devices. Used MQTT for IoT device communication and REST APIs for application integration.",
    },

    image: "./images/projects/greenhouse-monitoring-dashboard.webp",

    techStack: [
      "Node.js",
      "MQTT",
      "IoT",
      "REST APIs",
    ],

    githubUrl: "https://github.com/KiritoKazut0/SensorHexagonal.git",
    featured: false,
  },
];
