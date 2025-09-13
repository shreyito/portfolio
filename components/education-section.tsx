"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, Calendar, MapPin, Trophy, Users, Briefcase } from "lucide-react"

type TimelineItem = {
  id: number
  title: string
  institution: string
  period: string
  location: string
  description: string
  type: "education" | "experience" | "leadership"
  details?: string[]
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Software Developer Intern",
    institution: "Ilantus Services",
    period: "May 2025 - July 2025",
    location: "Remote",
    description: "Architected AI-powered IAM/IGA systems and automated identity lifecycle management.",
    type: "experience",
    details: [
      "Built LLM-powered chatbot plugin for SailPoint",
      "Reduced manual access requests by 30%",
      "Automated JML lifecycles via SCIM APIs",
      "Implemented Playwright automation scripts",
    ],
  },
  {
    id: 2,
    title: "UI/UX Developer Intern",
    institution: "Eko Hand (Startup)",
    period: "Jan 2025 - Apr 2025",
    location: "Remote",
    description: "Designed intuitive UI/UX and analyzed user traffic for optimization.",
    type: "experience",
    details: [
      "Increased user retention by 25%",
      "Improved feature adoption by 15%",
      "Designed complete UI/UX in Figma",
      "Conducted user traffic analysis",
    ],
  },
  {
    id: 3,
    title: "Vice-President",
    institution: "Mozilla Firefox Club",
    period: "2024 - 2025",
    location: "VIT Bhopal, MP",
    description: "Led a 50-member team and increased engagement by 40%.",
    type: "leadership",
    details: [
      "Managed 50-member team",
      "Increased engagement by 40%",
      "Organized technical workshops",
      "Coordinated major events",
    ],
  },
  {
    id: 4,
    title: "B.Tech - Computer Science Engineering",
    institution: "VIT Bhopal University",
    period: "2022 - 2026",
    location: "Bhopal, MP",
    description: "Specialization in Health Informatics with CGPA: 8.74",
    type: "education",
    details: ["Health Informatics Specialization", "CGPA: 8.74/10", "Focus on AI and Healthcare Technology"],
  },
  {
    id: 5,
    title: "CBSE Class XII",
    institution: "DAV Public School",
    period: "2021",
    location: "Ranchi, JH",
    description: "Achieved 87.8% in CBSE Board Examinations",
    type: "education",
    details: ["87.8% in CBSE", "Science Stream", "Strong foundation in Mathematics and Physics"],
  },
]

const achievements = [
  {
    title: "SIH 2024 Finalist",
    description: "Smart India Hackathon - National Level Competition",
    icon: <Trophy className="h-5 w-5" />,
    year: "2024",
  },
  {
    title: "Health Hackathon Participant",
    description: "VIT Bhopal & Johns Hopkins - Healthcare Prototype",
    icon: <Award className="h-5 w-5" />,
    year: "2025",
  },
  {
    title: "SolVIT Hackathon",
    description: "Advanced to Round 3 with Full-stack Application",
    icon: <Trophy className="h-5 w-5" />,
    year: "2025",
  },
  {
    title: "Industry Conclave Coordinator",
    description: "Main Coordinator and Valedictory Session Anchor",
    icon: <Users className="h-5 w-5" />,
    year: "2024",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-6">
            <GraduationCap className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Journey</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional experiences that have shaped my expertise in cybersecurity, AI, and
            software development.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative max-w-6xl mx-auto hidden md:block mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-background shadow-lg"></div>

                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                  <Card className="modern-card hover:scale-[1.02] transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center mb-3">
                        {item.type === "education" ? (
                          <GraduationCap className="h-6 w-6 mr-3 text-blue-500" />
                        ) : item.type === "experience" ? (
                          <Briefcase className="h-6 w-6 mr-3 text-green-500" />
                        ) : (
                          <Award className="h-6 w-6 mr-3 text-purple-500" />
                        )}
                        <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                      </div>
                      <div className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {item.institution}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      {item.details && (
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 mb-20">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-3">
                    {item.type === "education" ? (
                      <GraduationCap className="h-6 w-6 mr-3 text-blue-500" />
                    ) : item.type === "experience" ? (
                      <Briefcase className="h-6 w-6 mr-3 text-green-500" />
                    ) : (
                      <Award className="h-6 w-6 mr-3 text-purple-500" />
                    )}
                    <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                  </div>
                  <div className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {item.institution}
                  </div>
                  <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.details && (
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8">Notable Achievements</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">{achievement.year}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
