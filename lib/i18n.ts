export type Lang = "es" | "en";

/** A value that has both a Spanish and an English version. */
export type Bilingual<T = string> = { es: T; en: T };

export function pick<T>(value: Bilingual<T>, lang: Lang): T {
  return value[lang];
}
