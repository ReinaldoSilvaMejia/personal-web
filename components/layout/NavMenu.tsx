"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wrap } from "@/components/shared/Wrap";
import type { Bilingual } from "@/lib/i18n";

const LINKS: { href: string; label: Bilingual }[] = [
  { href: "#top", label: { es: "Inicio", en: "Home" } },
  { href: "#method", label: { es: "Metodología", en: "Methodology" } },
  { href: "#career", label: { es: "Trayectoria", en: "Career" } },
  { href: "#connect", label: { es: "Contacto", en: "Contact" } },
];

export function NavMenu({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: () => void;
}) {
  const { lang } = useLanguage();

  if (!open) return null;

  return (
    <nav
      data-nav-menu
      id="nav-menu"
      className="absolute inset-x-0 top-full border-b border-linea bg-superficie shadow-[0_16px_28px_rgba(0,0,0,0.14)]"
    >
      <Wrap className="flex flex-col items-stretch gap-0.5 py-2.5 sm:flex-row sm:items-center sm:gap-1.5">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className="rounded-[10px] px-4 py-3.5 font-semibold text-texto transition-colors hover:bg-base hover:text-acento sm:px-3.5 sm:py-2.5 sm:text-[0.95rem]"
          >
            {link.label[lang]}
          </a>
        ))}
      </Wrap>
    </nav>
  );
}
