import type { Bilingual } from "@/lib/i18n";
import type { PillVariant } from "@/components/shared/Pill";

export const heroRole: Bilingual = {
  es: "Ingeniero Informático",
  en: "Software Engineer",
};

/**
 * Rendered via dangerouslySetInnerHTML — trusted, author-controlled copy.
 * `.desc-link` / `.highlight-main` are escaped as :global() in Hero.module.css
 * so these plain class names keep working inside the injected HTML.
 */
export const heroDescriptionHtml: Bilingual = {
  es: "Con <strong>5 años</strong> de experiencia optimizando procesos en travel tech, fintech y aerolíneas. <strong>Analizo, diseño y construyo sistemas que funcionan</strong>. Desde automatización de campañas masivas hasta motores de reservas críticos. <strong>Responsabilidad y entrega a tiempo</strong>, es lo que mejor me define. <a href='#method' class='desc-link'><span class='highlight-main'>Conoce cómo trabajo</span></a>",
  en: "With <strong>5 years</strong> of experience optimizing processes in travel tech, fintech, and airlines. <strong>I analyze, design, and build systems that work</strong>. From massive campaign automation to critical reservation engines. <strong>Responsibility and on-time delivery</strong>, is what defines me best. <a href='#method' class='desc-link'><span class='highlight-main'>Discover how I work</span></a>",
};

export const heroKeywords: { label: Bilingual; variant: PillVariant }[] = [
  { label: { es: "Senior Software Engineer", en: "Senior Software Engineer" }, variant: "accent" },
  { label: { es: "Optimización de procesos", en: "Process Optimization" }, variant: "main" },
  { label: { es: "Integración de sistemas", en: "Systems Integration" }, variant: "main" },
  { label: { es: "Analista funcional", en: "Functional Analyst" }, variant: "accent" },
  { label: { es: "Automatización + IA", en: "Automation + AI" }, variant: "accent" },
];
