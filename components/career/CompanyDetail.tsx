"use client";

import { Pill } from "@/components/shared/Pill";
import type { Lang } from "@/lib/i18n";
import { projectsHeading, tasksHeading, type Company } from "./career.content";
import styles from "./Career.module.css";

export function CompanyDetail({ company, lang }: { company: Company; lang: Lang }) {
  const clienteLabel = lang === "es" ? "Cliente" : "Client";
  const hasCliente = company.cliente[lang] !== "—";

  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <span
          className={styles.panelLogo}
          style={
            company.logoBg
              ? ({
                  "--logo-bg": company.logoBg,
                  "--logo-padding": "0px",
                  "--logo-scale": company.logoScale ?? 1,
                } as React.CSSProperties)
              : undefined
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={company.logo} alt={company.name} />
        </span>
        <h3 className={styles.role}>{company.role[lang]}</h3>
        <div className={styles.tags}>
          <Pill variant="accent">Sector: {company.sector[lang]}</Pill>
          {hasCliente ? (
            <Pill variant="main">
              {clienteLabel}: {company.cliente[lang]}
            </Pill>
          ) : null}
        </div>
      </div>

      <div className={styles.card}>
        <h3>{projectsHeading[lang]}</h3>
        <ul>
          {company.projects[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.card}>
        <h3>{tasksHeading[lang]}</h3>
        <ul>
          {company.tasks[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
