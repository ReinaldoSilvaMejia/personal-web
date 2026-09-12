import type { Bilingual } from "@/lib/i18n";

export type GraphNodeId =
  | "yo"
  | "stack"
  | "dev"
  | "analisis-tecnico"
  | "formador"
  | "soporte"
  | "comunicacion"
  | "metodologias"
  | "analisis-funcional";

export type GraphNodeLayout = { id: GraphNodeId; cx: number; cy: number; r: number };

export const graphNodes: GraphNodeLayout[] = [
  { id: "yo", cx: 487, cy: 291, r: 85 },
  { id: "stack", cx: 135, cy: 108, r: 72 },
  { id: "dev", cx: 467, cy: 102, r: 78 },
  { id: "analisis-tecnico", cx: 207, cy: 299, r: 72 },
  { id: "formador", cx: 285, cy: 435, r: 72 },
  { id: "soporte", cx: 673, cy: 113, r: 72 },
  { id: "comunicacion", cx: 842, cy: 229, r: 78 },
  { id: "metodologias", cx: 764, cy: 435, r: 78 },
  { id: "analisis-funcional", cx: 597, cy: 526, r: 68 },
];

export const graphEdges: [GraphNodeId, GraphNodeId][] = [
  ["yo", "stack"],
  ["yo", "analisis-tecnico"],
  ["yo", "dev"],
  ["yo", "formador"],
  ["yo", "analisis-funcional"],
  ["yo", "metodologias"],
  ["yo", "comunicacion"],
  ["stack", "dev"],
  ["stack", "analisis-tecnico"],
  ["analisis-tecnico", "dev"],
  ["dev", "soporte"],
  ["soporte", "comunicacion"],
  ["comunicacion", "metodologias"],
  ["dev", "metodologias"],
  ["analisis-tecnico", "metodologias"],
  ["dev", "formador"],
  ["formador", "metodologias"],
  ["analisis-funcional", "metodologias"],
];

export const graphLabels: Record<GraphNodeId, Bilingual<string[]>> = {
  yo: { es: ["Yo"], en: ["Me"] },
  stack: { es: ["Stack", "tecnológico"], en: ["Technology", "stack"] },
  dev: { es: ["Desarrollo de", "Software"], en: ["Software", "Development"] },
  "analisis-tecnico": { es: ["Análisis", "técnico"], en: ["Technical", "Analysis"] },
  formador: { es: ["Formador"], en: ["Trainer"] },
  soporte: { es: ["Soporte TI"], en: ["IT Support"] },
  comunicacion: { es: ["Comunicación", "con clientes"], en: ["Client", "Communication"] },
  metodologias: { es: ["Metodologías"], en: ["Methodologies"] },
  "analisis-funcional": { es: ["Análisis", "funcional"], en: ["Functional", "Analysis"] },
};

export const methodIntro = {
  eyebrow: { es: "Metodología", en: "Methodology" },
  title: { es: "Cómo trabajo", en: "How I work" },
  subtitle: {
    es: "Este es el mapa de las piezas que forman mi forma de trabajar. Ninguna vive aislada: haz clic en cualquier nodo para ver cómo la aplico.",
    en: "This is the map of the pieces that make up how I work. None of them live in isolation: click any node to see how I apply it.",
  },
  hint: {
    es: "Consejo: cada círculo es clicable.",
    en: "Tip: every circle is clickable.",
  },
};

export type NodeContent = {
  icon: string;
  title: Bilingual;
  /** Paragraphs of HTML (may contain <strong>) — same trusted-content pattern as hero.content.ts. */
  body: Bilingual<string[]>;
};

export const nodeContent: Record<GraphNodeId, NodeContent> = {
  yo: {
    icon: "",
    title: { es: "Yo", en: "Me" },
    body: {
      es: [
        "Graduado en Ingeniería Informática en la UIB, me defino como una persona profesional, analítica y realista.",
        "Más allá del ámbito profesional, soy una persona con intereses variados y, sobre todo, que vive la vida con pasión. Me encanta tocar la guitarra, soy un entusiasta de los relojes, y me gusta el buen vino y, por supuesto, el buen whisky.",
      ],
      en: [
        "A graduate in Computer Engineering from the UIB, I see myself as a professional, analytical, and realistic person.",
        "Beyond the professional side, I have varied interests and, above all, I live life with passion. I love playing guitar, I'm a watch enthusiast, and I enjoy good wine and, of course, good whisky.",
      ],
    },
  },
  stack: {
    icon: "🧰",
    title: { es: "Stack tecnológico", en: "Technology stack" },
    body: {
      es: [
        "<strong>Frontend:</strong> React + Next.js y Angular.",
        "<strong>Backend:</strong> Java Spring Boot con IntelliJ y .NET Core.",
        "<strong>Base de datos:</strong> PostgreSQL.",
        "<strong>CI/CD:</strong> BitBucket, AWS y Kubernetes.",
        "<strong>Ofimática:</strong> Office 365.",
        "<strong>Gestión:</strong> Jira.",
        "<strong>IA:</strong> Claude.",
      ],
      en: [
        "<strong>Frontend:</strong> React + Next.js and Angular.",
        "<strong>Backend:</strong> Java Spring Boot with IntelliJ and .NET Core.",
        "<strong>Database:</strong> PostgreSQL.",
        "<strong>CI/CD:</strong> BitBucket, AWS, and Kubernetes.",
        "<strong>Office tools:</strong> Office 365.",
        "<strong>Project management:</strong> Jira.",
        "<strong>AI:</strong> Claude.",
      ],
    },
  },
  dev: {
    icon: "🧑‍💻",
    title: { es: "Desarrollo de Software", en: "Software Development" },
    body: {
      es: [
        "Es el núcleo de lo que hago, pero el rol cambia dependiendo de las necesidades.",
        "<strong>Como Tech Lead</strong> me encargo de coordinar y repartir carga de trabajo entre los desarrolladores. Mi objetivo es cumplir en tiempo y forma lo pactado con el cliente.",
        "<strong>Como desarrollador</strong> implemento directamente la solución tecnológica. Me enfoco en la trazabilidad, la monitorización y el rendimiento. Mi objetivo es cumplir con las tareas planificadas durante el sprint.",
      ],
      en: [
        "This is the core of what I do, but the role changes depending on the needs.",
        "<strong>As Tech Lead</strong>, I coordinate and distribute the workload among developers. My goal is to deliver what was agreed with the client on time and as specified.",
        "<strong>As a developer</strong>, I implement the technical solution directly. I focus on traceability, monitoring, and performance. My goal is to complete the tasks planned for the sprint.",
      ],
    },
  },
  "analisis-tecnico": {
    icon: "🔍",
    title: { es: "Análisis técnico", en: "Technical Analysis" },
    body: {
      es: [
        "Primero entiendo cómo encaja un requisito en el sistema y analizo la mejor manera de cumplir con el objetivo.",
        "No se trata de traducir, se trata de listar tareas realistas que satisfagan las necesidades del cliente y que no comprometan el sistema.",
        "Durante este análisis se plantean cuestiones de arquitectura, escalabilidad y el stack tecnológico más adecuado.",
      ],
      en: [
        "First, I understand how a requirement fits into the system and analyze the best way to meet the objective.",
        "It's not about translating — it's about listing realistic tasks that satisfy the client's needs without compromising the system.",
        "During this analysis, questions of architecture, scalability, and the most suitable technology stack come up.",
      ],
    },
  },
  formador: {
    icon: "🎓",
    title: { es: "Formador", en: "Trainer" },
    body: {
      es: [
        "Formo a personas de diferentes niveles, desde alumnos de formación profesional que quieren empezar a programar, hasta alumnos de la Universidad Europea en el máster de Business Process Management.",
        "También creo cursos personalizados de tecnología, como de Inteligencia Artificial, guías de usuario o informática avanzada.",
      ],
      en: [
        "I train people at different levels, from vocational training students who want to start programming, to Universidad Europea students in the Business Process Management Master's program.",
        "I also create personalized technology courses, such as on Artificial Intelligence, user guides, or advanced computing.",
      ],
    },
  },
  soporte: {
    icon: "🧑‍🔧",
    title: { es: "Soporte TI", en: "IT Support" },
    body: {
      es: [
        "<strong>Soporte:</strong> resolver incidencias en caliente, responder a dudas sobre los sistemas y atender al cliente en caso de necesitar valoración técnica.",
        "<strong>Mantenimiento:</strong> se trata de actualizar los sistemas ya existentes (sean heredados o propios). La intención es mantener la seguridad y agregar funcionalidades a petición del cliente.",
      ],
      en: [
        "<strong>Support:</strong> solving issues on the fly, answering questions about the systems, and assisting the client whenever technical input is needed.",
        "<strong>Maintenance:</strong> updating existing systems (whether legacy or my own). The goal is to keep them secure and add functionality as the client requests it.",
      ],
    },
  },
  comunicacion: {
    icon: "💬",
    title: { es: "Comunicación con clientes", en: "Client Communication" },
    body: {
      es: [
        "Gracias al correo electrónico y a Teams, la comunicación que mantengo con los clientes siempre es trazable. Mantener un contacto estrecho con los clientes me permite alinear las necesidades de negocio con TI.",
        "Lo ideal es definir métricas objetivas para evaluar la evolución y el rendimiento de los proyectos, productos o servicios.",
      ],
      en: [
        "Thanks to email and Teams, the communication I keep with clients is always traceable. Staying in close contact with clients lets me align business needs with IT.",
        "Ideally, I define objective metrics to evaluate the evolution and performance of projects, products, or services.",
      ],
    },
  },
  metodologias: {
    icon: "🧭",
    title: { es: "Metodologías", en: "Methodologies" },
    body: {
      es: [
        "Dependiendo de las necesidades puedo trabajar de las siguientes formas:",
        "<strong>Enfocado a proyectos (Cascada):</strong> con un tiempo, un presupuesto y unos requisitos bien definidos.",
        "<strong>Enfocado a productos (Agile):</strong> se define una responsabilidad, una meta y periódicamente vamos entregando valor al cliente, priorizando la velocidad pero siempre asegurando la calidad.",
        "<strong>Enfocado a procesos (BPM):</strong> se entiende la empresa como un conjunto de procesos, y dichos procesos se apoyan en herramientas informáticas para la automatización, el control y la monitorización.",
      ],
      en: [
        "Depending on the needs, I can work in the following ways:",
        "<strong>Project-focused (Waterfall):</strong> with a well-defined timeline, budget, and requirements.",
        "<strong>Product-focused (Agile):</strong> a responsibility and a goal are defined, and value is delivered to the client periodically, prioritizing speed while always ensuring quality.",
        "<strong>Process-focused (BPM):</strong> the company is understood as a set of processes, and those processes are supported by software tools for automation, control, and monitoring.",
      ],
    },
  },
  "analisis-funcional": {
    icon: "📋",
    title: { es: "Análisis funcional", en: "Functional Analysis" },
    body: {
      es: [
        "Traduzco necesidades de negocio a requisitos técnicos: qué debe hacer el sistema y por qué, antes de decidir cómo.",
        "Es el puente entre lo que el negocio necesita y lo que el equipo de desarrollo construye.",
      ],
      en: [
        "I translate business needs into technical requirements: what the system must do and why, before deciding how.",
        "It's the bridge between what the business needs and what the development team builds.",
      ],
    },
  },
};
