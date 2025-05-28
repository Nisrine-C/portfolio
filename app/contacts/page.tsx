"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactsPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:nisrinechakir237@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              nisrinechakir237@gmail.com
            </a>
            <a
              href="https://github.com/Nisrine-C"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              github.com/nisrine-c
            </a>
            <a
              href="https://www.linkedin.com/in/nisrine-c-a8520a235/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              linkedin.com/in/nisrine-c
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {isSubmitted ? (
            <motion.div
              className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-300">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-900 border-gray-700"
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
