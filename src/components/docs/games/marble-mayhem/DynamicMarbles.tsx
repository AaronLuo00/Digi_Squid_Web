'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ClientOnly from '@/components/utils/ClientOnly'

interface Marble {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
  glowing: boolean
}

const DynamicMarbles = () => {
  const [marbles, setMarbles] = useState<Marble[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  
  useEffect(() => {
    // Update container size
    const updateSize = () => {
      const container = document.querySelector('.marble-container')
      if (container) {
        setContainerSize({
          width: container.clientWidth,
          height: container.clientHeight
        })
      }
    }

    // Initial size
    updateSize()

    // Listen for resize
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return

    // Colors for marbles
    const colors = [
      'rgb(255, 0, 128)', // squid-pink
      'rgb(59, 130, 246)', // blue-500
      'rgb(16, 185, 129)', // emerald-500
      'rgb(245, 158, 11)', // amber-500
    ]

    // Generate random marbles
    const newMarbles = Array.from({ length: 25 }, (_, i) => {
      // Padding to keep marbles away from edges
      const padding = 50
      return {
        id: i,
        x: padding + Math.random() * (containerSize.width - padding * 2),
        y: padding + Math.random() * (containerSize.height - padding * 2),
        size: 20 + Math.random() * 20, // Larger marbles (20-40px)
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        glowing: Math.random() > 0.5 // More glowing marbles
      }
    })

    setMarbles(newMarbles)
  }, [containerSize])

  return (
    <ClientOnly>
      <div className="marble-container relative w-full h-[600px] bg-gray-900/50 backdrop-blur overflow-hidden">
      {/* Dynamic background grid */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,0,128,0.1) 1px, transparent 1px),
            radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px, 30px 30px',
          backgroundPosition: '0 0, 10px 10px',
          animation: 'gridMove 20s linear infinite'
        }}
      />

      {/* Marbles */}
      {marbles.map(marble => (
        <motion.div
          key={marble.id}
          className="absolute rounded-full"
          initial={{ 
            left: marble.x,
            top: marble.y,
            scale: 0
          }}
          animate={{
            left: [marble.x - 20, marble.x + 20, marble.x],
            top: [marble.y + 20, marble.y - 20, marble.y],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: marble.duration,
            delay: marble.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: marble.size,
            height: marble.size,
            backgroundColor: marble.color,
            boxShadow: marble.glowing 
              ? `0 0 30px ${marble.color}, 0 0 60px ${marble.color}`
              : `0 0 15px ${marble.color}`,
          }}
        />
      ))}

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />

      <style jsx global>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0, 10px 10px;
          }
          100% {
            background-position: 20px 20px, 30px 30px;
          }
        }
      `}</style>
      </div>
    </ClientOnly>
  )
}

export default DynamicMarbles
