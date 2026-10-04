import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Política de privacidad / Privacy policy — Reinaldo Silva Mejía",
  description:
    "Política de privacidad del asistente de WhatsApp. Privacy policy of the WhatsApp assistant.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[73px] max-[640px]:pt-[89px]">
        <PrivacyContent />
      </main>
      <SiteFooter />
    </>
  );
}
