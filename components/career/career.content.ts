import type { Bilingual } from "@/lib/i18n";

export type CompanyId = "next-flow" | "uem" | "minsait" | "sembo" | "logitravel" | "webbeds";

export type Company = {
  id: CompanyId;
  name: string;
  logo: string;
  /** Background color behind the logo, matching its own brand color so the square image blends into the circular frame. */
  logoBg?: string;
  /** Extra zoom applied to the logo image, for logos with a lot of built-in margin around the mark. */
  logoScale?: number;
  role: Bilingual;
  sector: Bilingual;
  cliente: Bilingual;
  projects: Bilingual<string[]>;
  tasks: Bilingual<string[]>;
};

export const careerIntro = {
  eyebrow: { es: "Trayectoria", en: "Career" },
  title: { es: "Empresas por las que he pasado", en: "Companies I've worked at" },
};

export const projectsHeading = { es: "🚀 Proyectos Destacados", en: "🚀 Featured Projects" };
export const tasksHeading = {
  es: "⚡ Responsabilidades y Tareas",
  en: "⚡ Responsibilities and Tasks",
};

export const companies: Company[] = [
  {
    id: "next-flow",
    name: "The Next Flow",
    logo: "/img/the_next_flow_sl_logo.jpg",
    role: { es: "Team Lead & Senior Software Engineer", en: "Team Lead & Senior Software Engineer" },
    sector: { es: "Aerolíneas", en: "Airlines" },
    cliente: { es: "Iberojet / Ávoris", en: "Iberojet / Ávoris" },
    projects: {
      es: [
        "Motor de reservas para la unificación y control del sistema de reservas.",
        "Unificación de sistemas de registros de vuelo para trazar la información de vuelo.",
        "Sistema de notificaciones automatizadas vía WhatsApp para pasajeros.",
      ],
      en: [
        "Booking engine to unify and control the reservation system.",
        "Unification of flight record systems to track flight information.",
        "Automated WhatsApp notification system for passengers.",
      ],
    },
    tasks: {
      es: [
        "Coordinar y ofrecer soporte técnico a un equipo de desarrolladores.",
        "Analizar, planificar y desarrollar aplicaciones para la optimización operativa de la aerolínea.",
        "Apoyar a los analistas de los diferentes sistemas en las integraciones técnicas.",
      ],
      en: [
        "Coordinate and provide technical support to a team of developers.",
        "Analyze, plan, and develop applications to optimize the airline's operations.",
        "Support analysts across different systems with technical integrations.",
      ],
    },
  },
  {
    id: "uem",
    name: "Universidad Europea",
    logo: "/img/universidad_europea_de_madrid_logo.jpg",
    logoBg: "#ff2d24",
    role: { es: "Profesor de Máster", en: "Master's Degree Lecturer" },
    sector: { es: "Educativo", en: "Education" },
    cliente: { es: "—", en: "—" },
    projects: {
      es: [
        'Impartir el módulo "Introducción al Business Process Management" en el Máster Universitario en Dirección de Operaciones y Procesos Estratégicos.',
      ],
      en: [
        "Teaching the \"Introduction to Business Process Management\" module in the Master's Degree in Operations Management and Strategic Processes.",
      ],
    },
    tasks: {
      es: [
        "Enseñar la metodología BPMN a los alumnos mediante casos prácticos.",
        "Explicar la importancia del stack tecnológico en la optimización de procesos.",
      ],
      en: [
        "Teach BPMN methodology to students through practical case studies.",
        "Explain the importance of the technology stack in process optimization.",
      ],
    },
  },
  {
    id: "minsait",
    name: "Minsait Payments",
    logo: "/img/minsait_logo.jpg",
    logoBg: "#490e2a",
    role: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    sector: { es: "Fintech / Banca", en: "Fintech / Banking" },
    cliente: { es: "Banco Santander", en: "Banco Santander" },
    projects: {
      es: ["Sistema de registro y procesador de pagos mediante TPV. (Getnet)"],
      en: ["Payment registration and processing system via POS terminals. (Getnet)"],
    },
    tasks: {
      es: [
        "Análisis técnico y desarrollo de microservicios transaccionales.",
        "Documentación técnica y guías de arquitectura de usuario.",
        "Optimización de integraciones con base de datos de alto rendimiento.",
      ],
      en: [
        "Technical analysis and development of transactional microservices.",
        "Technical documentation and user architecture guides.",
        "Optimization of integrations with high-performance databases.",
      ],
    },
  },
  {
    id: "sembo",
    name: "Sembo",
    logo: "/img/sembo_travel_logo.jpg",
    logoBg: "#c6b4f0",
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    sector: { es: "Travel Tech", en: "Travel Tech" },
    cliente: { es: "—", en: "—" },
    projects: {
      es: [
        "Integración de servicios de terceros mediante TravelGate.",
        "Rediseño completo del flujo de pixel tracking de la compañía.",
      ],
      en: [
        "Integration of third-party services via TravelGate.",
        "Complete redesign of the company's pixel tracking flow.",
      ],
    },
    tasks: {
      es: [
        "Desarrollo de interfaces dinámicas en Vue.js para el motor de reservas.",
        "Migración de código legacy a arquitecturas modernas en .NET Core.",
        "Diseñar y mejorar los dashboards de Grafana para la monitorización.",
      ],
      en: [
        "Development of dynamic Vue.js interfaces for the booking engine.",
        "Migration of legacy code to modern .NET Core architectures.",
        "Design and improve Grafana dashboards for monitoring.",
      ],
    },
  },
  {
    id: "logitravel",
    name: "Logitravel",
    logo: "/img/logitravel_logo.jpg",
    logoBg: "#ffffff",
    role: { es: "Core Software Engineer", en: "Core Software Engineer" },
    sector: { es: "Turismo / E-commerce", en: "Tourism / E-commerce" },
    cliente: { es: "Viajes el Corte Inglés", en: "Viajes el Corte Inglés" },
    projects: {
      es: [
        "Automatización de campañas publicitarias integradas con Google Ads.",
        "Desarrollo de juego Wordle personalizado para promocionar destinos en tendencia.",
      ],
      en: [
        "Automation of advertising campaigns integrated with Google Ads.",
        "Development of a custom Wordle-style game to promote trending destinations.",
      ],
    },
    tasks: {
      es: [
        "Mantenimiento y evolución de sistemas backend en VB .NET.",
        "Soporte a los usuarios de las herramientas de la intranet.",
        "Monitorización y control de excepciones mediante canales de Hangouts.",
      ],
      en: [
        "Maintenance and evolution of backend systems in VB .NET.",
        "Support for intranet tool users.",
        "Monitoring and exception control via Hangouts channels.",
      ],
    },
  },
  {
    id: "webbeds",
    name: "WebBeds",
    logo: "/img/webbeds_logo.jpg",
    logoBg: "#e2130a",
    logoScale: 1.09,
    role: { es: "Software Engineer Intern", en: "Software Engineer Intern" },
    sector: { es: "B2B Travel Distribution", en: "B2B Travel Distribution" },
    cliente: { es: "—", en: "—" },
    projects: {
      es: ["Implementación de Elasticsearch en búsquedas de disponibilidad."],
      en: ["Implementation of Elasticsearch for availability searches."],
    },
    tasks: {
      es: [
        "Desarrollo de servicios API REST utilizando .NET Core.",
        "Despliegue y configuración de entornos de pruebas con Docker.",
      ],
      en: [
        "Development of REST API services using .NET Core.",
        "Deployment and configuration of test environments with Docker.",
      ],
    },
  },
];
