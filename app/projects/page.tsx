"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg mb-6">A showcase of my personal projects and experiments.</p>

        <div className="flex flex-wrap gap-2">
          <Button variant={filter === null ? "default" : "outline"} onClick={() => setFilter(null)}>
            All
          </Button>
          <Button variant={filter === "web" ? "default" : "outline"} onClick={() => setFilter("web")}>
            Web
          </Button>
          <Button variant={filter === "mobile" ? "default" : "outline"} onClick={() => setFilter("mobile")}>
            Mobile
          </Button>
          <Button variant={filter === "design" ? "default" : "outline"} onClick={() => setFilter("design")}>
            Design
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="border border-gray-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-video bg-gray-900"></div>
            <div className="p-4">
              <span className="inline-block px-2 py-1 text-xs bg-gray-800 rounded mb-2">{project.category}</span>
              <h3 className="font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-800 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Personal Blog",
    description: "A blog built with Next.js and MDX for sharing my thoughts and tutorials.",
    technologies: ["Next.js", "MDX", "Tailwind"],
    category: "web",
  },
  {
    title: "Weather App",
    description: "A weather application that shows current conditions and forecasts.",
    technologies: ["React", "OpenWeather API"],
    category: "web",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts and progress.",
    technologies: ["React Native", "Firebase"],
    category: "mobile",
  },
  {
    title: "E-commerce UI Kit",
    description: "A collection of UI components for e-commerce applications.",
    technologies: ["Figma", "Tailwind"],
    category: "design",
  },
  {
    title: "Recipe Finder",
    description: "An app that helps you find recipes based on ingredients you have.",
    technologies: ["Vue.js", "Spoonacular API"],
    category: "web",
  },
  {
    title: "Budget Planner",
    description: "A mobile app for tracking expenses and planning budgets.",
    technologies: ["Flutter", "Firebase"],
    category: "mobile",
  },
]
