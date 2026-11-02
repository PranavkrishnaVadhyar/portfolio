import { BlogsSection } from "@/components/blogs-section"
import { JsonLd } from "@/components/json-ld"
import { pageMetadata, homeSchema } from "@/lib/seo"
import content from "@/data/portfolio.json"
import { MotionSystem } from "@/components/motion-system"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export const metadata=pageMetadata("/")
export default function Portfolio() {
  return (
    <MotionSystem><div className="portfolio-shell"><a className="skip-link" href="#main-content">{content.navigation.skip}</a>
      <Navigation /><JsonLd value={homeSchema()}/>
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div></MotionSystem>
  )
}
