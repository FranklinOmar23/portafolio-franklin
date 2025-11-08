"use client"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  isVisible: boolean
  activeSection: string
}

export function Navigation({ isVisible, activeSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className={`flex items-center space-x-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Code2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">Franklin Disla</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["inicio", "sobre-mi", "proyectos", "experiencia", "contacto"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === section ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                {section === "inicio"
                  ? "Inicio"
                  : section === "sobre-mi"
                    ? "Sobre Mí"
                    : section === "proyectos"
                      ? "Proyectos"
                      : section === "experiencia"
                        ? "Experiencia"
                        : "Contacto"}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === section ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
