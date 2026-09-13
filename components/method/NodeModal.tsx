"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { nodeContent, type GraphNodeId } from "./method.content";
import styles from "./NodeModal.module.css";

export function NodeModal({
  nodeId,
  onClose,
}: {
  nodeId: GraphNodeId | null;
  onClose: () => void;
}) {
  const { lang } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (nodeId) panelRef.current?.focus({ preventScroll: true });
  }, [nodeId]);

  useEffect(() => {
    if (!nodeId) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [nodeId, onClose]);

  useEffect(() => {
    if (!nodeId) return;
    const scrollY = window.scrollY;
    const { body } = document;
    const original = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = original.position;
      body.style.top = original.top;
      body.style.width = original.width;
      body.style.overflow = original.overflow;
      window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
    };
  }, [nodeId]);

  if (!nodeId) return null;

  const content = nodeContent[nodeId];

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="node-modal-title"
        tabIndex={-1}
      >
        <button type="button" className={styles.close} aria-label="Cerrar" onClick={onClose}>
          ×
        </button>
        {content.icon ? <span className={styles.icon}>{content.icon}</span> : null}
        <h3 id="node-modal-title" className={styles.title}>
          {content.title[lang]}
        </h3>
        <div className={styles.body}>
          {content.body[lang].map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
      </div>
    </div>
  );
}
