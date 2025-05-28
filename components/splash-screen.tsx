"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PixelFaceCanvas from "./pixel-face-canvas"

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [showSplash, setShowSplash] = useState(true)
  const [faceState, setFaceState] = useState<"frown" | "smile">("frown")

  useEffect(() => {
    // Always show the splash animation regardless of localStorage
    // This ensures the animation will play and complete

    // Set timeout to change from frown to smile after 1.5 seconds
    const smileTimer = setTimeout(() => {
      setFaceState("smile")
    }, 1500)

    // Set timeout to complete the splash screen after 3 seconds
    const completeTimer = setTimeout(() => {
      setShowSplash(false)
      // Call onComplete to signal the parent component
      onComplete()
      // Store in localStorage for future visits if needed
      try {
        localStorage.setItem("hasVisitedBefore", "true")
      } catch (e) {
        // Handle potential localStorage errors silently
        console.log("Could not access localStorage")
      }
    }, 3000)

    return () => {
      clearTimeout(smileTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence mode="wait">
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key="splash-screen"
        >
          <motion.div
            className="relative"
            animate={{ scale: faceState === "smile" ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <PixelFaceCanvas state={faceState} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
