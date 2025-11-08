"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Globe, Github, ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredList } from "@/components/staggered-list"

const projects = [
  {
    title: "Sistema de Gestión Empresarial",
    description:
      "Plataforma completa desarrollada con C# y React para gestión de recursos empresariales con integración a SQL Server.",
    tech: ["C#", "React", "SQL Server", "ASP.NET"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Plugin WordPress Personalizado",
    description: "Plugin avanzado para WordPress que automatiza procesos de facturación y gestión de clientes.",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Dashboard en Tiempo Real",
    description: "Dashboard en tiempo real con autenticación y base de datos en Supabase, desarrollado con Next.js.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "Tailwind"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "API REST con Node.js",
    description: "API robusta para aplicación móvil con autenticación JWT e integración con múltiples bases de datos.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Infraestructura Windows Server",
    description:
      "Diseño e implementación de infraestructura completa con Windows Server, Active Directory, DNS, DHCP y políticas de grupo.",
    tech: ["Windows Server", "Active Directory", "PowerShell", "Hyper-V"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ProjectsSection() {
  return (
    <AnimatedSection animation="zoom-in" duration={0.8}>
      <section
        id="proyectos"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Selección de proyectos que demuestran mi experiencia en desarrollo full stack y liderazgo técnico.
            </p>
          </div>

          <StaggeredList staggerDelay={0.15} animation="fade-up">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center group mb-16`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    <div className="aspect-video relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Floating Number */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-emerald-600 dark:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500">
                      <span className="text-2xl font-bold text-white">0{index + 1}</span>
                    </div>
                  </div>
                  {/* Decorative Element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 dark:bg-emerald-900 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <Badge
                      variant="outline"
                      className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800"
                    >
                      <Rocket className="w-3 h-3 mr-1" />
                      Proyecto Destacado
                    </Badge>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-2xl transition-all duration-500">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-4 py-2 bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-300 cursor-default shadow-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    >
                      <Globe className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Ver Demo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-105 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </StaggeredList>

          {/* View All Projects Button */}
          <div className="text-center mt-16 relative z-10">
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-105 transition-all duration-300 group"
            >
              Ver Todos los Proyectos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
