"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Shield, Code, LineChart, Brain, Zap, Award } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming",
      items: ["Python", "C/C++", "JavaScript", "SQL"],
      progress: 92,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity/IAM",
      items: ["SailPoint IIQ", "SCIM API", "IAM", "Workflow Automation"],
      progress: 88,
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & ML",
      items: ["LLMs", "TensorFlow", "Scikit-learn", "BERT"],
      progress: 90,
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Data & Analytics",
      items: ["MongoDB", "PostgreSQL", "Pandas", "NumPy"],
      progress: 85,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const achievements = [
    { number: "8.74", label: "CGPA" },
    { number: "8+", label: "Major Projects" },
    { number: "85%", label: "Automation Efficiency" },
    { number: "92%", label: "ML Model Accuracy" },
  ]

  const certifications = [
    { name: "Machine Learning", provider: "SimpliLearn", year: "2025" },
    { name: "Applied ML in Python", provider: "Coursera", year: "2023" },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6">
            <Zap className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Security-focused <span className="gradient-text">Developer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-2 shadow-2xl">
                <Image
                  src="/profile-photo.jpg"
                  alt="Shreya Raj Gupta - Professional Photo"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">8.74</div>
                  <div className="text-sm">CGPA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Bridging Cybersecurity, AI, and Software Engineering</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Shreya Raj Gupta, a Computer Science Engineering student at VIT Bhopal University with a
                specialization in Health Informatics. Currently maintaining an impressive 8.74 CGPA while building
                cutting-edge solutions in cybersecurity and AI.
              </p>
              <p>
                My expertise spans IAM/IGA automation using SailPoint IIQ, LLM-powered evaluation systems, and
                full-stack data solutions. I've successfully reduced manual processes by up to 85% through intelligent
                automation and achieved 92% accuracy in machine learning models.
              </p>
              <p>
                As Vice-President of Mozilla Firefox Club and through various internships, I've led teams, coordinated
                major events, and delivered scalable applications that solve real-world problems in healthcare,
                education, and cybersecurity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="modern-card h-full hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{skill.title}</h3>
                  <div className="space-y-2 mb-4">
                    {skill.items.map((item) => (
                      <div key={item} className="text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span>{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements and Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="modern-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Key Achievements</h3>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="modern-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50">
                  <Award className="h-5 w-5 text-purple-500" />
                  <div className="flex-1">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
