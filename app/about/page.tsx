"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg">
          I'm a passionate Full-Stack Web Developer with expertise in modern web
          technologies.
        </p>
      </motion.div>

      <motion.section
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gray-800 p-2 rounded-md">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Experience</h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l border-gray-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
              <h3 className="text-teal-400 font-medium">
                {experience.company}
              </h3>
              <h4 className="font-bold mb-1">{experience.position}</h4>
              <p className="text-sm text-gray-400 mb-4">{experience.period}</p>
              <p className="text-gray-300">{experience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Git", icon: "📂" },
  { name: "Python", icon: "🐍" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🔺" },
  { name: "Vue.js", icon: "💚" },
];

const experiences = [
  {
    company: "MTDS",
    position: "Web Developer",
    period: "Jun - Jul 2024",
    description:
      " I developped web applications using modern technologies like Laravel, React and Javascript.",
  },
  {
    company: "MTDS",
    position: "Web Developer",
    period: "AP - Jun 2023",
    description:
      "Built and deployed full-stack web applications using Laravel and TailwindCSS, with responsibilities spanning database design, cPanel deployment, and end-to-end project collaboration.",
  },
  {
    company: "Casanet",
    position: "Junior Front End Developer",
    period: "Jun - Jul 2022",
    description:
      "Built responsive user interfaces, ensured cross-browser compatibility and mobile optimization, and collaborated with UX designers to implement visually appealing and user-friendly layouts.",
  },
];
