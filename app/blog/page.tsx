"use client"

import { motion } from "framer-motion"
import BlogPreview from "@/components/blog-preview"

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-300 text-lg">
          Thoughts, ideas, and insights about web development, design, and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPreview key={post.slug} title={post.title} excerpt={post.excerpt} date={post.date} slug={post.slug} />
        ))}
      </div>
    </div>
  )
}

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "April 15, 2025",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "The Power of TypeScript",
    excerpt: "Discover how TypeScript can improve your development workflow and catch errors early.",
    date: "April 10, 2025",
    slug: "power-of-typescript",
  },
  {
    title: "CSS Grid Layout: A Complete Guide",
    excerpt: "Master CSS Grid Layout with this comprehensive guide to building complex layouts.",
    date: "April 5, 2025",
    slug: "css-grid-layout-guide",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Learn techniques to optimize your React applications for better performance.",
    date: "March 28, 2025",
    slug: "optimizing-react-performance",
  },
  {
    title: "Introduction to Tailwind CSS",
    excerpt: "Get started with Tailwind CSS and learn how it can speed up your development process.",
    date: "March 20, 2025",
    slug: "introduction-to-tailwind-css",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to make your web applications accessible to all users.",
    date: "March 15, 2025",
    slug: "building-accessible-web-applications",
  },
]
