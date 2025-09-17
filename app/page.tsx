// app/page.tsx
import { HeroSection } from "@/components/hero-section";
// import { AnalysisHorizontalScrollSection } from "@/components/analysis-horizontal-scroll-section";
import { LawsHorizontalScrollSection } from "@/components/laws-horizontal-scroll-section";
import { ExamplesSection } from "@/components/examples-section";
// import { EthicsSection } from "@/components/ethics-section";
import { SkillsSection } from "@/components/skills-section";
// import { ChatbotSection } from "@/components/chatbot-section";
import { ConclusionSection } from "@/components/conclusion-section";
import { DotNavigation } from "@/components/dot-navigation";

export default function Home() {
  return (
    <>
      <DotNavigation />
      <main className="scroll-container">
        <section id="hero"><HeroSection /></section>
        <section id="analysis"><LawsHorizontalScrollSection /></section>
        <section id="examples"><ExamplesSection /></section>
        {/* <section id="e/thics"><EthicsSection /></section> */}
        <section id="skills"><SkillsSection /></section>
        {/* <section id="chatbot"><ChatbotSection /></section> */}
        <section id="conclusion"><ConclusionSection /></section>
      </main>
    </>
  );
}