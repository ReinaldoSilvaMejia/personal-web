"use client";

import type { Lang } from "@/lib/i18n";
import type { ConnectCardData } from "./connect.content";
import styles from "./Connect.module.css";

export function ConnectCard({ card, lang }: { card: ConnectCardData; lang: Lang }) {
  return (
    <a
      href={card.href}
      className={styles.card}
      {...(card.external ? { target: "_blank", rel: "noopener" } : {})}
    >
      <span
        className={styles.icon}
        style={
          card.iconBg
            ? ({
                "--icon-bg": card.iconBg,
                "--icon-padding": "0px",
                "--icon-scale": card.iconScale ?? 1,
              } as React.CSSProperties)
            : undefined
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={card.icon} alt="" />
      </span>
      <span className={styles.text}>
        <span className={styles.title}>{card.title[lang]}</span>
        <span className={styles.sub}>{card.subtitle[lang]}</span>
      </span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </a>
  );
}
