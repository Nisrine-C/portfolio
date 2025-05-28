"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg">A collection of projects I've worked on throughout my career.</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="border border-gray-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="aspect-video bg-gray-900"></div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    Source Code
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-teal-400 hover:text-teal-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Link>
                )}
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
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD", "Redux"],
    github: "https://github.com/yourusername/task-management-app",
    live: "https://task-app-demo.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
  },
]
