'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const PIXEL_SIZE = 20
const COLORS = ['#FF0266', '#00F0FF', '#2D1B69']

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Ensure ctx is not null in the closure
    const context = ctx
    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const cols = Math.ceil(width / PIXEL_SIZE)
    const rows = Math.ceil(height / PIXEL_SIZE)
    const pixels: { x: number; y: number; color: string; delay: number }[] = []

    // Initialize pixels
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() < 0.1) { // Only create pixels for 10% of the grid
          pixels.push({
            x: i * PIXEL_SIZE,
            y: j * PIXEL_SIZE,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            delay: Math.random() * 2000 // Random delay up to 2 seconds
          })
        }
      }
    }

    // Animation function
    let startTime: number | null = null
    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime

      context.clearRect(0, 0, width, height)

      pixels.forEach((pixel) => {
        if (elapsed > pixel.delay) {
          const alpha = Math.sin((elapsed - pixel.delay) / 1000) * 0.5 + 0.5
          context.fillStyle = pixel.color + Math.floor(alpha * 255).toString(16).padStart(2, '0')
          context.fillRect(pixel.x, pixel.y, PIXEL_SIZE, PIXEL_SIZE)
        }
      })

      requestAnimationFrame(animate)
    }

    const animationFrame = requestAnimationFrame(animate)

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1 }}
    />
  )
}
