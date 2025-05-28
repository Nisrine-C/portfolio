import Link from "next/link";
import {
  Github,
  Mail,
  Linkedin,
  ArrowRight,
  Pin,
  FileDown,
} from "lucide-react";
import AnimatedBlob from "@/components/animated-blob";
import { Button } from "@/components/ui/button";
import BlogPreview from "@/components/blog-preview";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Introduction */}
      <section className="max-w-4xl mx-auto mt-16 p-8 border border-gray-800 rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <AnimatedBlob />
          <div>
            <div className="flex flex-row justify-between">
              <h1 className="text-3xl font-bold mb-1">Nisrine Chakir</h1>
              <Link
                href="/cv.pdf"
                download
                className="inline-block  text-white px-4 py-2 rounded-md  text-sm font-medium border border-gray-800 rounded-xl"
              >
                <FileDown className="size-5" />
              </Link>
            </div>

            <p className="text-gray-400 mb-4 flex items-center gap-2">
              Temara - Morocco
            </p>

            <p className="text-[36px]"> Hello world</p>
            <p className="mb-6">
              I am a Developer. I have been programming for more than 4 years.
            </p>
            <div className="flex space-x-4">
              <Link
                href="mailto:nisrinechakir237@gmail.com"
                aria-label="Email"
                target="_blank"
              >
                <Mail className="size-5" />
              </Link>
              <Link
                href="https://github.com/Nisrine-C"
                aria-label="GitHub"
                target="_blank"
              >
                <Github className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nisrine-c-a8520a235/"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <Link
            href="/about"
            className="text-teal-400 flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.slice(0, 8).map((skill) => (
            <div key={skill.name} className="flex items-center gap-2">
              <span className="bg-gray-800 p-1 rounded-md">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Link
            href="/about"
            className="text-teal-400 flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="space-y-12">
          <div className="relative pl-8 border-l border-gray-700">
            <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
            <h3 className="text-teal-400 font-medium">MTDS</h3>
            <h4 className="font-bold mb-1">Web Developer</h4>
            <p className="text-sm text-gray-400 mb-4">June - July 2023</p>
            <p className="text-gray-300">
              I developped web applications using modern technologies like
              Laravel, React and Javascript.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
          <Link
            href="/blog"
            className="text-teal-400 flex items-center gap-1 hover:underline"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BlogPreview
            title="Getting Started with Next.js"
            excerpt="Learn how to build modern web applications with Next.js and React."
            date="April 15, 2025"
            slug="getting-started-with-nextjs"
          />
          <BlogPreview
            title="The Power of TypeScript"
            excerpt="Discover how TypeScript can improve your development workflow and catch errors early."
            date="April 10, 2025"
            slug="power-of-typescript"
          />
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Read More Articles</Link>
          </Button>
        </div>
      </section>
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
];
