'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface CollisionEffectProps {
  x: number
  y: number
  color: string
  onComplete: () => void
}

const CollisionEffect = ({ x, y, color, onComplete }: CollisionEffectProps) => {
  // Generate random particles
  const particles = Array.from({ length: 8 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2
    return {
      angle,
      distance: Math.random() * 20 + 10,
      size: Math.random() * 3 + 2
    }
  })

  return (
    <AnimatePresence onExitComplete={onComplete}>
      <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
        {/* Ripple effect */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          initial={{ width: 0, height: 0, opacity: 0.7, borderWidth: 2 }}
          animate={{ 
            width: '40px', 
            height: '40px', 
            opacity: 0,
            borderWidth: 0
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ borderColor: color }}
        />

        {/* Particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{ 
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1
            }}
            animate={{ 
              x: Math.cos(particle.angle) * particle.distance,
              y: Math.sin(particle.angle) * particle.distance,
              scale: 0,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: color,
              boxShadow: `0 0 4px ${color}`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        {/* Flash effect */}
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          initial={{ scale: 0.5, opacity: 0.7 }}
          animate={{ scale: 1.5, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: color,
            filter: 'blur(4px)'
          }}
        />
      </div>
    </AnimatePresence>
  )
}

export default CollisionEffect
