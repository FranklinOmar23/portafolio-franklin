"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { ImageUpload } from "@/components/image-upload"
import { StarsBackground } from "@/components/stars-background"
import { FloatingParticles } from "@/components/floating-particles"
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Users,
  Rocket,
  Database,
  Server,
  Target,
  Award,
  Calendar,
  Settings,
  Shield,
  FileCode,
  Briefcase,
  ExternalLink,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredList } from "@/components/staggered-list"
import { RevealOnScroll } from "@/components/reveal-on-scroll"

export default function Portfolio() {
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=500&width=400")
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

  const skills = [
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "React", icon: Code2, category: "Frontend" },
    { name: "C#", icon: FileCode, category: "Backend" },
    { name: "JavaScript", icon: Code2, category: "Frontend" },
    { name: "SQL Server", icon: Database, category: "Database" },
    { name: "Supabase", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "WordPress", icon: Globe, category: "CMS" },
    { name: "Plugin Development", icon: Settings, category: "CMS" },
    { name: "Scrum Master", icon: Users, category: "Management" },
    { name: "TypeScript", icon: Code2, category: "Frontend" },
    { name: "Next.js", icon: Rocket, category: "Frontend" },
    { name: "Windows Server", icon: Server, category: "Infrastructure" },
    { name: "Server Administration", icon: Settings, category: "Infrastructure" },
    { name: "Active Directory", icon: Shield, category: "Infrastructure" },
    { name: "IIS", icon: Globe, category: "Infrastructure" },
    { name: "PowerShell", icon: Code2, category: "Infrastructure" },
    { name: "Hyper-V", icon: Server, category: "Infrastructure" },
  ]

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
      description:
        "API robusta para aplicación móvil con autenticación JWT e integración con múltiples bases de datos.",
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

  const experience = [
    {
      title: "Cofundador & Desarrollador Full Stack",
      company: "Arcode Dominicana",
      companyLink: "https://arcodedominicana.com",
      period: "2020 - Presente",
      description:
        "Cofundador de empresa tecnológica especializada en desarrollo de software. Liderazgo técnico, arquitectura de sistemas y desarrollo full stack con tecnologías modernas.",
      icon: Rocket,
    },
    {
      title: "Encargado de Soporte Técnico",
      company: "TSI Dominicana",
      period: "2019 - Presente",
      description:
        "Responsable del soporte técnico especializado, administración y creación de servidores Windows Server, gestión de Active Directory, configuración de IIS y resolución de incidencias críticas de infraestructura, aplicando metodologías ágiles como Scrum Master certificado.",
      icon: Shield,
    },
    {
      title: "Scrum Master & Desarrollador",
      company: "Proyectos Freelance",
      period: "2018 - 2020",
      description:
        "Gestión ágil de proyectos de desarrollo, facilitación de ceremonias Scrum y desarrollo de aplicaciones web con React y Node.js.",
      icon: Users,
    },
  ]

  const certifications = [
    "Certified Scrum Master (CSM)",
    "Especialista en Microsoft SQL Server",
    "Desarrollo de Plugins WordPress",
    "Desarrollador Certificado Supabase",
    "Administración de Windows Server",
    "Especialista en Microsoft Active Directory",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800 transition-colors relative">
      {/* Agregar aquí los componentes de fondo */}
      <StarsBackground />
      <FloatingParticles />

      {/* Navigation */}
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
              <Link
                href="#inicio"
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === "inicio" ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                Inicio
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === "inicio" ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="#sobre-mi"
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === "sobre-mi" ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                Sobre Mí
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === "sobre-mi" ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="#proyectos"
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === "proyectos" ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                Proyectos
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === "proyectos" ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="#experiencia"
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === "experiencia" ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                Experiencia
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === "experiencia" ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <Link
                href="#contacto"
                className={`text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 relative group ${
                  activeSection === "contacto" ? "text-emerald-600 dark:text-emerald-400" : ""
                }`}
              >
                Contacto
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === "contacto" ? "w-full" : ""
                  }`}
                ></span>
              </Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Badge
                  variant="outline"
                  className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 animate-bounce"
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Disponible para proyectos
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hola, soy{" "}
                  <span className="text-emerald-600 dark:text-emerald-400 inline-block hover:scale-110 transition-transform duration-300">
                    Franklin Disla
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  Desarrollador Full Stack & Cofundador
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cofundador de Arcode Dominicana y Encargado de Soporte en TSI Dominicana. Especializado en Node.js,
                  React, C#, administración de servidores Windows Server y metodologías ágiles como Scrum Master
                  certificado.
                </p>
              </div>
              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contáctame
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Ver Proyectos
                </Button>
              </div>
              <div
                className={`flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="flex items-center space-x-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>República Dominicana</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                  <Briefcase className="w-4 h-4" />
                  <Link
                    href="https://arcodedominicana.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1 group"
                  >
                    Arcode Dominicana
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
                <div className="flex items-center space-x-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                  <Shield className="w-4 h-4" />
                  <span>TSI Dominicana</span>
                </div>
              </div>
            </div>
            <div
              className={`relative transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <ImageUpload currentImage={profileImage} onImageChange={setProfileImage} />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 dark:from-emerald-600 dark:to-teal-700 rounded-2xl transform rotate-6 opacity-20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection animation="fade-up" duration={0.8}>
        <section
          id="sobre-mi"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-down" delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                  Sobre Mí
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Combino la experiencia técnica en desarrollo full stack con el liderazgo empresarial y la gestión ágil
                  de proyectos.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Mi Trayectoria</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Como cofundador de{" "}
                    <Link
                      href="https://arcodedominicana.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold inline-flex items-center gap-1 group"
                    >
                      Arcode Dominicana
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    , he liderado el desarrollo de soluciones tecnológicas innovadoras utilizando tecnologías como
                    Node.js, React, C# y bases de datos como SQL Server y PostgreSQL.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    En mi rol como Encargado de Soporte en TSI Dominicana, gestiono equipos técnicos, administro
                    servidores Windows Server, configuro Active Directory e IIS, y resuelvo incidencias críticas de
                    infraestructura, aplicando metodologías ágiles como Scrum Master certificado.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">60+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">6+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Certificaciones</h4>
                  {/* Wrap certifications list with StaggeredList */}
                  <StaggeredList staggerDelay={0.05} animation="fade-right" className="space-y-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-gray-600 dark:text-gray-300">{cert}</span>
                      </div>
                    ))}
                  </StaggeredList>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Stack Tecnológico</h3>

                {/* Backend Skills */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Backend & Bases de Datos</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((skill) => skill.category === "Backend" || skill.category === "Database")
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <skill.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Frontend</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((skill) => skill.category === "Frontend")
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer"
                        >
                          <skill.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Other Skills */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">CMS & Gestión</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((skill) => skill.category === "CMS" || skill.category === "Management")
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer"
                        >
                          <skill.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Infrastructure Skills */}
                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Infraestructura & Servidores</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((skill) => skill.category === "Infrastructure")
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer"
                        >
                          <skill.icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
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

      {/* Experience Section */}
      <AnimatedSection animation="fade-left" duration={0.8}>
        <section
          id="experiencia"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                Experiencia Profesional
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Mi trayectoria profesional combinando desarrollo de software, liderazgo empresarial y soporte técnico
                especializado.
              </p>
            </div>

            {/* Replace experience.map() with StaggeredList */}
            <StaggeredList staggerDelay={0.2} animation="zoom-in">
              {experience.map((exp, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <exp.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        {exp.companyLink ? (
                          <Link
                            href={exp.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline flex items-center gap-1 group/link"
                          >
                            {exp.company}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </Link>
                        ) : (
                          <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </Card>
              ))}
            </StaggeredList>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Section */}
      <RevealOnScroll direction="bottom" delay={0.2}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600 dark:bg-emerald-800 transition-colors relative overflow-hidden z-10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="space-y-6">
              <Link
                href="https://arcodedominicana.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover:scale-110 transition-transform duration-300 inline-flex items-center gap-2">
                  Arcode Dominicana
                  <ExternalLink className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                </h2>
              </Link>
              <p className="text-xl text-emerald-100 dark:text-emerald-200 max-w-3xl mx-auto leading-relaxed">
                Como cofundador, lideramos el desarrollo de soluciones tecnológicas innovadoras, desde aplicaciones web
                con React y Node.js hasta sistemas empresariales con C# y SQL Server. Especializados en WordPress y
                desarrollo de plugins personalizados.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <Link href="https://arcodedominicana.com" target="_blank" rel="noopener noreferrer">
                  Visitar Arcode Dominicana
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Target className="w-12 h-12 text-emerald-200 dark:text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Innovación</h3>
                  <p className="text-emerald-100 dark:text-emerald-200">
                    Tecnologías modernas para soluciones eficientes
                  </p>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Award className="w-12 h-12 text-emerald-200 dark:text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Calidad</h3>
                  <p className="text-emerald-100 dark:text-emerald-200">Metodologías ágiles y mejores prácticas</p>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <Users className="w-12 h-12 text-emerald-200 dark:text-emerald-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Soporte</h3>
                  <p className="text-emerald-100 dark:text-emerald-200">Acompañamiento técnico especializado</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Contact Section */}
      <AnimatedSection animation="fade-up" duration={0.8}>
        <section
          id="contacto"
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300">
                Hablemos
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                ¿Necesitas desarrollo full stack, soporte técnico o gestión ágil de proyectos? Contacta conmigo para
                discutir tu próximo proyecto.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">franklin@arcodedominicana.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Phone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Teléfono</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (809) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Ubicación</h3>
                      <p className="text-gray-600 dark:text-gray-300">Santo Domingo, República Dominicana</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200 dark:bg-gray-700" />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Sígueme en redes</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950 bg-transparent transform hover:scale-110 hover:rotate-12 transition-all duration-300"
                    >
                      <Globe className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-gray-900 dark:text-white">Envíame un mensaje</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Completa el formulario y te responderé lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Asunto</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400"
                        placeholder="¿En qué puedo ayudarte?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 hover:border-emerald-400"
                        placeholder="Cuéntame sobre tu proyecto..."
                      />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                      <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8 transition-colors relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-6 w-6 text-emerald-400 animate-pulse" />
            <span className="text-lg font-semibold">Franklin Disla</span>
          </div>
          <p className="text-gray-400">© 2025 Franklin Disla. Todos los derechos reservados.</p>
          <p className="text-gray-500 text-sm mt-2">Desarrollado con React, Next.js y mucho ☕</p>
          <div className="mt-4">
            <Link
              href="https://arcodedominicana.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 inline-flex items-center gap-1 group"
            >
              Powered by Arcode Dominicana
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
