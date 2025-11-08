"use client"

import { useState, useEffect } from "react"
import { StarsBackground } from "@/components/stars-background"
import { FloatingParticles } from "@/components/floating-particles"
import { Navigation } from "@/components/sections/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { ExperienceSection } from "@/components/sections/experience"
import { CompanySection } from "@/components/sections/company"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 transition-colors relative">
      <StarsBackground />
      <FloatingParticles />

      <Navigation isVisible={isVisible} activeSection={activeSection} />
      <HeroSection isVisible={isVisible} />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <CompanySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
