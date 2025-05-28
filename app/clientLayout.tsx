"use client";

import type React from "react";

import { useState, useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/splash-screen";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashComplete, setSplashComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything on the server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <AnimatePresence>
        {!splashComplete && (
          <SplashScreen onComplete={() => setSplashComplete(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: splashComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <footer className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <p>
              © {new Date().getFullYear()} Nisrine Chakir. Built with Next.js.
              Look at some of my projects on Github.
            </p>
          </div>
        </footer>
      </motion.div>
    </ThemeProvider>
  );
}
