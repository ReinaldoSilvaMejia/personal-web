"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Wrap } from "@/components/shared/Wrap";
import { CompanyDetail } from "./CompanyDetail";
import { CompanyList } from "./CompanyList";
import { careerIntro, companies, type CompanyId } from "./career.content";
import styles from "./Career.module.css";

export function CareerSection() {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState<CompanyId>("next-flow");
  const activeCompany = companies.find((c) => c.id === activeId) ?? companies[0];

  return (
    <section
      id="career"
      className="scroll-mt-[73px] pt-14 pb-20 max-[640px]:scroll-mt-[89px] max-[640px]:pt-10 max-[640px]:pb-16"
    >
      <SectionDivider />
      <Wrap className="mb-9">
        <SectionIntro eyebrow={careerIntro.eyebrow[lang]} title={careerIntro.title[lang]} />
      </Wrap>
      <Wrap>
        <div className={styles.grid}>
          <CompanyList activeId={activeId} onSelect={setActiveId} />
          <CompanyDetail company={activeCompany} lang={lang} />
        </div>
      </Wrap>
    </section>
  );
}
