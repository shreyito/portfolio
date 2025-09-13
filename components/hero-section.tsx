"use client"

import { Suspense } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Sparkles, Code, Palette } from "lucide-react"

// Fallback component for 3D scene
function SceneFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
      </div>
    </div>
  )
}

// Dynamic import with error boundary
const ThreeScene = dynamic(() => import("./three-scene").catch(() => ({ default: SceneFallback })), {
  ssr: false,
  loading: () => <SceneFallback />,
})

export function HeroSection() {
  const stats = [
    { icon: <Code className="h-5 w-5" />, label: "Projects", value: "8+" },
    { icon: <Palette className="h-5 w-5" />, label: "CGPA", value: "8.74" },
   
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
              >
                <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                <span className="text-sm font-medium">Available for new opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="gradient-text">SHREYA</span>
                <br />
                <span className="text-foreground">RAJ GUPTA</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-muted-foreground font-light"
              >
                Security-focused Software Developer & AI Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Specializing in IAM/IGA automation, LLM-powered systems, and full-stack data solutions that bridge
                Cybersecurity, AI, and Software Engineering.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-purple-500">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[500px] lg:h-[600px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
            <div className="relative z-10 w-full h-full">
              <Suspense fallback={<SceneFallback />}>
                <ThreeScene />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <a
          href="#projects"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
