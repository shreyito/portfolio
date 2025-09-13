"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain, Search, Activity } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  longDescription: string
  tags: string[]
  featured?: boolean
  icon: React.ReactNode
  metrics?: string
  vectorArt: React.ReactNode
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Agent for Automated Assignment Evaluation",
    description: "LLM-powered evaluation system with plagiarism detection",
    longDescription:
      "Engineered an AI agent using Gemini LLM and n8n to auto-evaluate 500+ submissions, reducing grading time by 85%. Automated Google Classroom, Drive, and Sheets API integration to generate per-student reports with plagiarism flags.",
    tags: ["Gemini LLM", "n8n", "Google APIs", "Python", "Automation"],
    featured: true,
    icon: <Brain className="h-6 w-6" />,
    metrics: "85% time reduction",
    vectorArt: (
      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
        <div className="relative">
          <Brain className="h-16 w-16 text-purple-500" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">AI</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "IAM/IGA Automation System",
    description: "SailPoint IIQ integration with AI-powered threat detection",
    longDescription:
      "Architected an agentic AI-powered IAM/IGA system integrated with SailPoint IIQ and n8n to automate threat detection and response protocols. Developed an LLM-powered chatbot plugin for SailPoint, reducing manual access request tickets by 30%.",
    tags: ["SailPoint IIQ", "IAM", "SCIM API", "Playwright", "Cybersecurity"],
    featured: true,
    icon: <Shield className="h-6 w-6" />,
    metrics: "30% ticket reduction",
    vectorArt: (
      <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg flex items-center justify-center">
        <div className="relative">
          <Shield className="h-16 w-16 text-red-500" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">IAM</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "NeuroMan - Early Neurodiagnosis Tool",
    description: "Flask-based diagnostic tool for neurodegenerative diseases",
    longDescription:
      "Built a Flask-based diagnostic tool that improved neurodegenerative prediction accuracy by 18%. Integrated MongoDB to manage 10,000+ health records, enabling sub-second, real-time queries.",
    tags: ["Flask", "MongoDB", "Machine Learning", "Healthcare", "Real-time"],
    icon: <Activity className="h-6 w-6" />,
    metrics: "18% accuracy improvement",
    vectorArt: (
      <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg flex items-center justify-center">
        <div className="relative">
          <Activity className="h-16 w-16 text-green-500" />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Fake News Detection System",
    description: "BERT-powered classifier for article verification",
    longDescription:
      "Developed a classifier using BERT and TF-IDF to achieve 92% accuracy on a dataset of 20,000+ articles. Deployed a Streamlit application for real-time article verification and fact-checking.",
    tags: ["BERT", "TF-IDF", "Streamlit", "NLP", "Classification"],
    icon: <Search className="h-6 w-6" />,
    metrics: "92% accuracy",
    vectorArt: (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg flex items-center justify-center">
        <div className="relative">
          <Search className="h-16 w-16 text-blue-500" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">92%</span>
          </div>
        </div>
      </div>
    ),
  },
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const featuredProjects = projects.filter((p) => p.featured)
  const regularProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Featured Work</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Projects</span> That Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Innovative solutions in Cybersecurity, AI, and Healthcare - from IAM automation to LLM-powered systems that
            solve real-world problems.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="modern-card overflow-hidden h-full hover:scale-[1.02] transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className={`absolute inset-0 transition-transform duration-700 ${
                        hoveredProject === project.id ? "scale-110" : "scale-100"
                      }`}
                    >
                      {project.vectorArt}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">{project.icon}</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                        Featured
                      </Badge>
                    </div>
                    {project.metrics && (
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-green-500/90 text-white border-0">{project.metrics}</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-end">
                     
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regular Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {regularProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="modern-card overflow-hidden h-full hover:scale-[1.02] transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className={`absolute inset-0 transition-transform duration-500 ${
                        hoveredProject === project.id ? "scale-105" : "scale-100"
                      }`}
                    >
                      {project.vectorArt}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white">{project.icon}</div>
                    </div>
                    {project.metrics && (
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-green-500/90 text-white border-0 text-xs">{project.metrics}</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
                        Details <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
