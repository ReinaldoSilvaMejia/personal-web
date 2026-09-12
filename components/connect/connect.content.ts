import type { Bilingual } from "@/lib/i18n";

export const connectIntro = {
  eyebrow: { es: "Contacto", en: "Contact" },
  title: { es: "Conóceme de forma...", en: "Get to know me, your way..." },
  subtitle: {
    es: "Selecciona una faceta para conectar conmigo",
    en: "Pick a facet to connect with me",
  },
};

export type ConnectCardData = {
  href: string;
  icon: string;
  /** Background color behind the icon, matching its own brand color so the square image blends into the circular frame. */
  iconBg?: string;
  /** Extra zoom applied to the icon image, for icons with a lot of built-in margin around the mark. */
  iconScale?: number;
  title: Bilingual;
  subtitle: Bilingual;
  external: boolean;
};

export const connectCards: ConnectCardData[] = [
  {
    href: "https://www.linkedin.com/in/reinaldosilvamejia/",
    icon: "/img/linkedin-icon.webp",
    iconBg: "#0066c8",
    iconScale: 1.67,
    title: { es: "Profesional", en: "Professional" },
    subtitle: {
      es: "Experiencia y proyectos en LinkedIn",
      en: "Experience and projects on LinkedIn",
    },
    external: true,
  },
  {
    href: "https://www.instagram.com/reisilva24/",
    icon: "/img/Instagram_icon.png",
    iconBg: "#ffffff",
    title: { es: "Personal", en: "Personal" },
    subtitle: { es: "Mi día a día y aficiones", en: "My day-to-day and hobbies" },
    external: true,
  },
  {
    href: "https://www.tiktok.com/@reisilva24",
    icon: "/img/tik-tok-logo.webp",
    iconBg: "#000000",
    iconScale: 1.67,
    title: { es: "Creativa", en: "Creative" },
    subtitle: { es: "Contenido en video y experimentos", en: "Video content and experiments" },
    external: true,
  },
  {
    href: "mailto:reinaldosilvamejia@hotmail.com",
    icon: "/img/email-icon.png",
    iconBg: "#ffffff",
    title: { es: "Directa", en: "Direct" },
    subtitle: { es: "Contacto directo vía e-mail", en: "Direct contact via e-mail" },
    external: false,
  },
];
