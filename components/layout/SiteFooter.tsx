"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wrap } from "@/components/shared/Wrap";
import type { Bilingual } from "@/lib/i18n";

const footerText = {
  heading: { es: "Enlaces de interés", en: "Links of interest" } satisfies Bilingual,
};

const relatedLinks = [
  { href: "https://www.irenevera.es/es", label: "Irene Vera" },
  { href: "https://joseaguilo.com/", label: "Jose Aguiló" },
];

export function SiteFooter() {
  const { lang } = useLanguage();

  return (
    <footer className="border-t border-linea py-10">
      <Wrap className="flex flex-col items-center gap-3 text-center">
        <span className="text-[0.78rem] font-bold uppercase tracking-[0.02em] text-gris">
          {footerText.heading[lang]}
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {relatedLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] font-semibold text-texto underline decoration-linea-fuerte underline-offset-4 transition-colors hover:text-acento"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Wrap>
    </footer>
  );
}
