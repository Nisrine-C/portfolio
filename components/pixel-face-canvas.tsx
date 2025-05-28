"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface PixelFaceCanvasProps {
  state: "frown" | "smile"
  size?: number
  pixelSize?: number
  color?: string
}

export default function PixelFaceCanvas({
  state,
  size = 240,
  pixelSize = 30,
  color = "#ffffff",
}: PixelFaceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Define pixel grids for frown and smile
  const frownGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]

  const smileGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw pixels
    const grid = state === "frown" ? frownGrid : smileGrid
    const gridSize = grid.length
    const padding = 0 // Padding around the grid

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        if (grid[y][x] === 1) {
          ctx.fillStyle = color
          ctx.fillRect(
            x * pixelSize + padding,
            y * pixelSize + padding,
            pixelSize - padding * 2,
            pixelSize - padding * 2,
          )
        }
      }
    }
  }, [state, size, pixelSize, color])

  return (
    <motion.canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="block"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  )
}
