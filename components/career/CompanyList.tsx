"use client";

import { companies, type CompanyId } from "./career.content";
import styles from "./Career.module.css";

export function CompanyList({
  activeId,
  onSelect,
}: {
  activeId: CompanyId;
  onSelect: (id: CompanyId) => void;
}) {
  return (
    <ul className={styles.list}>
      {companies.map((company) => (
        <li key={company.id}>
          <button
            type="button"
            onClick={() => onSelect(company.id)}
            className={`${styles.item} ${company.id === activeId ? styles.itemActive : ""}`}
          >
            <span
              className={styles.logo}
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
              <img src={company.logo} alt="" />
            </span>
            <span className={styles.name}>{company.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
