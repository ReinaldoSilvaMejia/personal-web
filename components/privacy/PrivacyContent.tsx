"use client";

import { Fragment } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Wrap } from "@/components/shared/Wrap";
import {
  PRIVACY_CONTACT_EMAIL,
  privacyIntro,
  privacySections,
  privacyUpdated,
} from "./privacy.content";

/** Replaces every "{email}" in a text with a mailto link. */
function withEmail(text: string) {
  return text.split("{email}").map((part, i, parts) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
          className="font-semibold text-acento underline underline-offset-4"
        >
          {PRIVACY_CONTACT_EMAIL}
        </a>
      )}
    </Fragment>
  ));
}

export function PrivacyContent() {
  const { lang } = useLanguage();

  return (
    <Wrap className="py-14 max-[640px]:py-10">
      <article className="mx-auto max-w-[760px]">
        <span className="text-[0.78rem] font-bold uppercase tracking-[0.02em] text-gris">
          {privacyIntro.eyebrow[lang]}
        </span>
        <h1 className="mt-2 font-serif text-[clamp(1.9rem,4vw,2.6rem)] font-bold leading-tight text-texto">
          {privacyIntro.title[lang]}
        </h1>
        <p className="mt-2 text-[0.9rem] text-gris">{privacyUpdated[lang]}</p>
        <p className="mt-6 text-[1.05rem] leading-relaxed text-texto">
          {privacyIntro.lead[lang]}
        </p>

        {privacySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mt-10 scroll-mt-[100px]"
          >
            <h2 className="font-serif text-[1.3rem] font-bold text-texto">
              {section.title[lang]}
            </h2>
            {section.body?.[lang].map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-texto">
                {withEmail(p)}
              </p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed text-texto marker:text-acento">
                {section.list[lang].map((item, i) => (
                  <li key={i}>{withEmail(item)}</li>
                ))}
              </ul>
            )}
            {section.after?.[lang].map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-texto">
                {withEmail(p)}
              </p>
            ))}
          </section>
        ))}
      </article>
    </Wrap>
  );
}
