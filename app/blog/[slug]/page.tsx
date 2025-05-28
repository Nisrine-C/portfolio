"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

export default function BlogPostPage() {
  const { slug } = useParams()

  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === slug)

  // If no post is found, show 404
  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link href="/blog" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <p className="text-gray-400 mb-2">{post.date}</p>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      </motion.div>

      <motion.div
        className="prose prose-invert max-w-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {post.content.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-300">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  )
}

const blogPosts = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    date: "April 15, 2025",
    slug: "getting-started-with-nextjs",
    content: [
      "Next.js is a powerful React framework that makes building web applications easier and more efficient. In this post, we'll explore the basics of Next.js and how to get started with your first project.",
      "First, let's understand what Next.js offers. It provides features like server-side rendering, static site generation, API routes, and more out of the box. These features help you build fast, SEO-friendly applications without the need for complex configurations.",
      "To create a new Next.js project, you can use the create-next-app command. This sets up a new project with all the necessary configurations and folder structure. Once your project is set up, you can start building your pages in the pages directory.",
      "Next.js uses a file-based routing system, which means that each file in the pages directory becomes a route in your application. For example, pages/about.js becomes the /about route. This makes it easy to organize your application and add new pages.",
      "One of the most powerful features of Next.js is its data fetching capabilities. You can use getStaticProps for static site generation, getServerSideProps for server-side rendering, and getStaticPaths for dynamic routes. These functions allow you to fetch data at build time or request time, depending on your needs.",
      "In conclusion, Next.js is a versatile framework that can help you build modern web applications with ease. Whether you're building a simple blog or a complex e-commerce site, Next.js provides the tools you need to succeed.",
    ],
  },
  {
    title: "The Power of TypeScript",
    excerpt: "Discover how TypeScript can improve your development workflow and catch errors early.",
    date: "April 10, 2025",
    slug: "power-of-typescript",
    content: [
      "TypeScript has become an essential tool for many JavaScript developers. In this post, we'll explore the benefits of TypeScript and how it can improve your development workflow.",
      "TypeScript is a superset of JavaScript that adds static typing to the language. This means that you can define the types of your variables, function parameters, and return values. This helps catch errors early in the development process, before your code even runs.",
      "One of the biggest advantages of TypeScript is its excellent editor support. With TypeScript, you get features like autocompletion, type checking, and refactoring tools that make your development experience more productive. These features help you write better code faster.",
      "TypeScript also makes your code more maintainable. By adding type annotations, you're essentially adding documentation to your code. This makes it easier for other developers (or future you) to understand what your code does and how to use it.",
      "Another benefit of TypeScript is its ability to work with existing JavaScript code. You can gradually add TypeScript to your project, starting with just a few files and adding more as you go. This makes it easy to adopt TypeScript in existing projects.",
      "In conclusion, TypeScript is a powerful tool that can help you write better, more maintainable code. By catching errors early and providing better tooling, TypeScript can significantly improve your development workflow.",
    ],
  },
  {
    title: "CSS Grid Layout: A Complete Guide",
    excerpt: "Master CSS Grid Layout with this comprehensive guide to building complex layouts.",
    date: "April 5, 2025",
    slug: "css-grid-layout-guide",
    content: [
      "CSS Grid Layout is a powerful tool for creating complex web layouts. In this guide, we'll explore the basics of CSS Grid and how to use it effectively in your projects.",
      "CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to create complex layouts with rows and columns, without having to rely on floats or positioning. This makes it much easier to create responsive designs that work across different screen sizes.",
      "To create a grid container, you simply set display: grid on an element. Then, you can define the rows and columns of your grid using the grid-template-rows and grid-template-columns properties. For example, grid-template-columns: 1fr 2fr 1fr creates a grid with three columns, where the middle column is twice as wide as the others.",
      "One of the most powerful features of CSS Grid is the ability to place items precisely within the grid. You can use the grid-column and grid-row properties to specify which grid lines an item should start and end at. This gives you fine-grained control over the layout of your page.",
      "CSS Grid also provides powerful alignment features. You can use properties like justify-items, align-items, justify-content, and align-content to control how items are aligned within their grid cells and how the grid itself is aligned within its container.",
      "In conclusion, CSS Grid Layout is a versatile tool that can help you create complex, responsive layouts with ease. By understanding the basics of CSS Grid, you can take your web design skills to the next level.",
    ],
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Learn techniques to optimize your React applications for better performance.",
    date: "March 28, 2025",
    slug: "optimizing-react-performance",
    content: [
      "React is known for its performance, but there are still ways to optimize your React applications for even better performance. In this post, we'll explore some techniques to make your React apps faster and more efficient.",
      "One of the most important aspects of React performance is minimizing unnecessary renders. React's virtual DOM is efficient, but rendering is still one of the most expensive operations. You can use React.memo, useMemo, and useCallback to prevent unnecessary renders and recalculations.",
      "Another important aspect is managing state efficiently. Using tools like Redux or React Context can help you manage state in a more organized way, but they can also introduce performance issues if not used correctly. It's important to structure your state in a way that minimizes renders when the state changes.",
      "Code splitting is another powerful technique for improving performance. By splitting your code into smaller chunks that are loaded only when needed, you can reduce the initial load time of your application. React.lazy and Suspense make this easy to implement.",
      "Optimizing images and other assets is also crucial for performance. Using modern image formats, lazy loading images, and optimizing asset sizes can significantly improve the loading speed of your application.",
      "In conclusion, optimizing React performance requires a combination of techniques, from minimizing renders to optimizing assets. By applying these techniques, you can create React applications that are fast, efficient, and provide a great user experience.",
    ],
  },
  {
    title: "Introduction to Tailwind CSS",
    excerpt: "Get started with Tailwind CSS and learn how it can speed up your development process.",
    date: "March 20, 2025",
    slug: "introduction-to-tailwind-css",
    content: [
      "Tailwind CSS has gained immense popularity in recent years for its utility-first approach to styling. In this post, we'll introduce Tailwind CSS and show you how it can speed up your development process.",
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Instead of writing custom CSS, you apply pre-existing classes directly to your HTML elements. For example, instead of writing a custom class for a button, you might use classes like bg-blue-500 text-white py-2 px-4 rounded.",
      "One of the biggest advantages of Tailwind CSS is its speed of development. Since you're applying styles directly in your HTML, you don't have to switch between HTML and CSS files or come up with class names. This can significantly speed up your development process.",
      "Tailwind CSS is also highly customizable. You can configure colors, spacing, breakpoints, and more in the tailwind.config.js file. This allows you to create a design system that matches your brand and design requirements.",
      "Another benefit of Tailwind CSS is its built-in responsive design system. You can apply different styles at different breakpoints using prefixes like sm:, md:, lg:, and xl:. For example, text-center md:text-left makes text centered on small screens and left-aligned on medium screens and up.",
      "In conclusion, Tailwind CSS is a powerful tool that can help you build custom designs quickly and efficiently. By understanding the basics of Tailwind CSS, you can take advantage of its utility-first approach to speed up your development process.",
    ],
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to make your web applications accessible to all users.",
    date: "March 15, 2025",
    slug: "building-accessible-web-applications",
    content: [
      "Web accessibility is an essential aspect of web development that ensures your applications can be used by everyone, including people with disabilities. In this post, we'll explore how to build accessible web applications.",
      "One of the most important aspects of accessibility is semantic HTML. Using the right HTML elements for their intended purpose provides a solid foundation for accessibility. For example, using <button> for buttons, <a> for links, and heading elements (<h1>, <h2>, etc.) for headings helps screen readers and other assistive technologies understand your content.",
      "ARIA (Accessible Rich Internet Applications) attributes can enhance the accessibility of your web applications, especially for complex interactive components. ARIA attributes provide additional information to assistive technologies about the roles, states, and properties of elements on the page.",
      "Keyboard accessibility is another crucial aspect. Many users rely on keyboards to navigate websites, so it's important to ensure that all interactive elements can be accessed and operated using only a keyboard. This includes managing focus, providing visible focus indicators, and ensuring a logical tab order.",
      "Color contrast is important for users with visual impairments. Text should have sufficient contrast with its background to be readable. Tools like the WebAIM Contrast Checker can help you ensure your color combinations meet accessibility standards.",
      "In conclusion, building accessible web applications requires attention to various aspects, from semantic HTML to keyboard accessibility. By incorporating accessibility into your development process, you can create web applications that can be used by everyone, regardless of their abilities.",
    ],
  },
]
