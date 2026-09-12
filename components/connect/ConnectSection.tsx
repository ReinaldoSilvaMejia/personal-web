"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Wrap } from "@/components/shared/Wrap";
import { ConnectCard } from "./ConnectCard";
import { connectCards, connectIntro } from "./connect.content";
import styles from "./Connect.module.css";

export function ConnectSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="connect"
      className="scroll-mt-[73px] pt-14 pb-24 max-[640px]:scroll-mt-[89px] max-[640px]:pt-10 max-[640px]:pb-[72px]"
    >
      <SectionDivider />
      <Wrap className="mb-10">
        <SectionIntro
          eyebrow={connectIntro.eyebrow[lang]}
          title={connectIntro.title[lang]}
          subtitle={connectIntro.subtitle[lang]}
          align="center"
        />
      </Wrap>
      <Wrap>
        <div className={styles.grid}>
          {connectCards.map((card) => (
            <ConnectCard key={card.href} card={card} lang={lang} />
          ))}
        </div>
      </Wrap>
    </section>
  );
}
