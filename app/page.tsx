import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { HistoricalPeriodsSection } from "@/components/historical-periods-section"
import { KeyFiguresSection } from "@/components/key-figures-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <HistoricalPeriodsSection />
      <KeyFiguresSection />
    </main>
  )
}
