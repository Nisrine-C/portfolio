"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface BlogPreviewProps {
  title: string
  excerpt: string
  date: string
  slug: string
}

export default function BlogPreview({ title, excerpt, date, slug }: BlogPreviewProps) {
  return (
    <motion.div
      className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/blog/${slug}`}>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{excerpt}</p>
        <div className="text-teal-400 text-sm font-medium">Read more →</div>
      </Link>
    </motion.div>
  )
}
