"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTheme } from "@/components/providers/ThemeProvider";
import { useHeaderScroll } from "@/lib/useHeaderScroll";
import { NavMenu } from "./NavMenu";
import type { Lang } from "@/lib/i18n";

function SunRaysIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block h-4 w-4 max-[640px]:h-5 max-[640px]:w-5"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
      <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
      <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
    </svg>
  );
}

function CrescentMoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="block h-4 w-4 max-[640px]:h-5 max-[640px]:w-5"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

const LANG_CODES: Lang[] = ["es", "en"];

export function SiteHeader() {
  const { lang, setLang } = useLanguage();
  const { mode, toggleMode } = useTheme();
  const [navOpen, setNavOpen] = useState(false);
  const hidden = useHeaderScroll(navOpen);

  useEffect(() => {
    if (!navOpen) return;

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("[data-nav-menu]") || target.closest("[data-nav-trigger]")) return;
      setNavOpen(false);
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setNavOpen(false);
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [navOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b border-linea bg-base transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-[clamp(20px,4vw,48px)] max-[640px]:h-[88px]">
        <button
          type="button"
          data-nav-trigger
          aria-label="Abrir menú"
          aria-expanded={navOpen}
          aria-controls="nav-menu"
          onClick={() => setNavOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-texto sm:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <button
          type="button"
          data-nav-trigger
          aria-label="Abrir menú"
          aria-expanded={navOpen}
          aria-controls="nav-menu"
          onClick={() => setNavOpen((v) => !v)}
          className="hidden -m-1.5 rounded-lg p-1.5 font-serif text-[1.1rem] font-bold text-texto transition-colors hover:bg-linea sm:block"
        >
          Reinaldo<span className="text-acento">.</span>Silva
        </button>

        <div className="flex items-center gap-2.5 max-[640px]:gap-3.5">
          <div
            role="group"
            aria-label="Seleccionar idioma"
            className="flex items-center gap-0.5 rounded-full border border-linea-fuerte p-[3px] max-[640px]:gap-[3px] max-[640px]:p-1"
          >
            {LANG_CODES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`rounded-full px-[13px] py-1.5 text-[0.78rem] font-bold tracking-[0.02em] transition-colors max-[640px]:px-[17px] max-[640px]:py-2 max-[640px]:text-[0.88rem] ${
                  lang === code
                    ? "bg-acento text-sobre-acento"
                    : "text-gris hover:text-texto"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            role="switch"
            aria-checked={mode === "dark"}
            aria-label="Cambiar entre modo día y modo noche"
            onClick={toggleMode}
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-acento bg-acento text-sobre-acento transition-opacity hover:opacity-88 max-[640px]:h-[46px] max-[640px]:w-[46px]"
          >
            {mode === "dark" ? <CrescentMoonIcon /> : <SunRaysIcon />}
          </button>
        </div>
      </div>

      <NavMenu open={navOpen} onNavigate={() => setNavOpen(false)} />
    </header>
  );
}
