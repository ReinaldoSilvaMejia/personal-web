import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { MethodSection } from "@/components/method/MethodSection";
import { CareerSection } from "@/components/career/CareerSection";
import { ConnectSection } from "@/components/connect/ConnectSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[73px] max-[640px]:pt-[89px]">
        <Hero />
        <MethodSection />
        <CareerSection />
        <ConnectSection />
      </main>
      <SiteFooter />
    </>
  );
}
