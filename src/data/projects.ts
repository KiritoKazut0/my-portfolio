import type { Project } from "../types/Project";

export const projects: Project[] = [
  {
    title: {
      es: "Sistema de Monitoreo de Producción de Hidrógeno",
      en: "Hydrogen Production Monitoring System",
    },

  description: {
  es: "Plataforma para el monitoreo en tiempo real de la producción de hidrógeno a partir de microalgas. Implementé la integración entre dispositivos IoT y la aplicación web para capturar, persistir y visualizar métricas de sensores industriales.",
  en: "Platform for real-time monitoring of hydrogen production from microalgae. Implemented the integration between IoT devices and the web application to capture, persist, and visualize industrial sensor metrics.",
},

    image: "./images/projects/hydrogen-production-dashboard.webp",
    techStack: [
      "Node.js",
      "RabbitMQ",
      "WebSockets",
      "MongoDB",
    ],

    githubUrl: "https://github.com/KiritoKazut0/AlgasHexagonal.git",
    liveUrl: "#",
    featured: true
  },
  {
  title: {
    es: "Sistema de Monitoreo y Control de Invernaderos",
    en: "Greenhouse Monitoring and Control System",
  },

  description: {
  es:
    "Desarrollé una plataforma IoT para el monitoreo y control remoto de invernaderos utilizando MQTT y APIs REST para la comunicación entre sensores, actuadores y la aplicación web.",

  en:
    "Developed an IoT platform for greenhouse monitoring and remote control using MQTT and REST APIs to enable communication between sensors, actuators, and the web application.",
},
  image: "./images/projects/greenhouse-monitoring-dashboard.webp",

  techStack: [
    "Node.js",
    "MQTT",
    "IoT",
    "REST API"
  ],

  githubUrl: "https://github.com/KiritoKazut0/SensorHexagonal.git",
  liveUrl: "#",
  featured: true
},
{
  title: {
    es: "Plataforma de Alquiler de Habitaciones",
    en: "Room Rental Platform",
  },

 description: {
  es:
    "Desarrollé una plataforma web para la publicación y gestión de habitaciones en alquiler, implementando suscripciones premium, pagos recurrentes con Stripe y almacenamiento seguro de imágenes en AWS S3.",

  en:
    "Developed a web platform for publishing and managing rental rooms, implementing premium subscriptions, recurring payments with Stripe, and secure image storage on AWS S3.",
},

  image: "./images/projects/rooms.webp",

  techStack: [
    "NestJS",
    "React",
    "Stripe",
    "AWS S3",
  ],

  githubUrl: "https://github.com/KiritoKazut0/RoomlyBackend.git",
  liveUrl: "#",
  featured: true,
},
{
  title: {
    es: "Plataforma de Análisis de Comentarios y Detección de Noticias Falsas",
    en: "Comment Analysis and Fake News Detection Platform",
  },

  description: {
  es:
    "Diseñé una arquitectura basada en microservicios para el análisis de comentarios y la detección de noticias falsas, implementando un sistema RAG en Python y utilizando Kong Gateway como punto central de exposición y orquestación de APIs.",

  en:
    "Designed a microservices-based architecture for comment analysis and fake news detection, implementing a Python-based RAG system and using Kong Gateway as the central entry point for API exposure and orchestration.",
},
  image: "./images/projects/gatway.png",

  techStack: [
    "NestJS",
    "Microservices",
    "RAG",
    "Kong Gateway"
  ],

  githubUrl: "https://github.com/KiritoKazut0/microservices.git",
  liveUrl: "#",
  featured: true
}
];