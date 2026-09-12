"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SectionDivider } from "@/components/shared/SectionDivider";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { Wrap } from "@/components/shared/Wrap";
import { MethodGraph } from "./MethodGraph";
import { NodeModal } from "./NodeModal";
import { methodIntro, type GraphNodeId } from "./method.content";
import graphStyles from "./MethodGraph.module.css";

export function MethodSection() {
  const { lang } = useLanguage();
  const [activeNode, setActiveNode] = useState<GraphNodeId | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  function handleSelect(id: GraphNodeId) {
    lastTriggerRef.current = document.activeElement as HTMLElement | null;
    setActiveNode(id);
  }

  function handleClose() {
    setActiveNode(null);
    lastTriggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <section
      id="method"
      className="scroll-mt-[73px] pt-14 pb-20 max-[640px]:scroll-mt-[89px] max-[640px]:pt-10 max-[640px]:pb-16"
    >
      <SectionDivider />
      <Wrap className="mb-9">
        <SectionIntro
          eyebrow={methodIntro.eyebrow[lang]}
          title={methodIntro.title[lang]}
          subtitle={methodIntro.subtitle[lang]}
        />
      </Wrap>
      <Wrap>
        <MethodGraph onSelect={handleSelect} />
        <p className={graphStyles.hint}>{methodIntro.hint[lang]}</p>
      </Wrap>
      <NodeModal nodeId={activeNode} onClose={handleClose} />
    </section>
  );
}
