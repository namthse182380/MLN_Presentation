// app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { LawsHorizontalScrollSection } from "@/components/laws-horizontal-scroll-section";
import { AnalysisHorizontalScrollSection } from "@/components/analysis-horizontal-scroll-section";
import { ConclusionSection } from "@/components/conclusion-section";

export default function Home() {
  return (
    <div className="scroll-container">
      <HeroSection />
      <LawsHorizontalScrollSection />
      <AnalysisHorizontalScrollSection />
      <ConclusionSection />
    </div>
  );
}