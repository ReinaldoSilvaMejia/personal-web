"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wrap } from "@/components/shared/Wrap";
import { heroDescriptionHtml, heroKeywords, heroRole } from "./hero.content";
import styles from "./Hero.module.css";

const HeroGear = dynamic(() => import("./HeroGear").then((mod) => mod.HeroGear), {
  ssr: false,
});

export function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="top" className={styles.hero}>
      <Wrap className={`w-full ${styles.heroInner}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.role}>{heroRole[lang]}</p>
            <h1 className={styles.title}>
              <span className={styles.markName}>Reinaldo</span> Silva Mejía
            </h1>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: heroDescriptionHtml[lang] }}
            />
          </div>
          <div className={styles.heroVisual}>
            <HeroGear />
          </div>
          <div className={styles.keywords}>
            {heroKeywords.map((kw) => (
              <span
                key={kw.label.es}
                className={`${styles.keyword} ${
                  kw.variant === "accent" ? styles.keywordAccent : styles.keywordMain
                }`}
              >
                {kw.label[lang]}
              </span>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
