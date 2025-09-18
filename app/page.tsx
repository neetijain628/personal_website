import { HeroSection } from "@/components/hero-section"
import { BiographySection } from "@/components/biography-section"
import { ResumeSection } from "@/components/resume-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BiographySection />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
