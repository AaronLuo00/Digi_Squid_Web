'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  scale: number
  opacity: number
  color: string
}

interface ForceParticlesProps {
  position: number
  intensity: number
  side: 'left' | 'right'
}

const ForceParticles = ({ position, intensity, side }: ForceParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Create new particles based on intensity
    const interval = setInterval(() => {
      if (intensity > 0.8) { // Only show particles when intensity is high
        const newParticles: Particle[] = []
        const particleCount = Math.floor(intensity * 3)
        
        for (let i = 0; i < particleCount; i++) {
          const baseX = side === 'left' ? position + 5 : position - 5
          const offset = i % 2 === 0 ? i : -i // Deterministic offset
          const particle: Particle = {
            id: count + i,
            x: baseX + offset,
            y: 50 + (i % 3) * 5, // Deterministic y position
            scale: 0.8 + (i % 3) * 0.2, // Deterministic scale
            opacity: 0.5 + (i % 2) * 0.3, // Deterministic opacity
            color: `hsl(${320 + (i % 3) * 20}, 100%, 50%)` // Deterministic color
          }
          newParticles.push(particle)
        }
        
        setParticles(prev => [...prev, ...newParticles])
        setCount(prev => prev + particleCount)
      }
    }, 100)

    // Remove old particles
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-20)) // Keep only last 20 particles
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [position, intensity, side, count])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: particle.color,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            scale: particle.scale,
            opacity: particle.opacity
          }}
          animate={{
            x: side === 'left' ? [-20, -40] : [20, 40],
            y: [0, particle.y > 50 ? 20 : -20], // Deterministic movement
            scale: [particle.scale, 0],
            opacity: [particle.opacity, 0]
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default ForceParticles
