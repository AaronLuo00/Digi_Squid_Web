'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const DynamicTrafficLight = () => {
  const [isGreen, setIsGreen] = useState(true)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [particleCount, setParticleCount] = useState(0)

  // Light change effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGreen(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Particle effect
  useEffect(() => {
    const createParticle = () => {
      const id = particleCount
      // Use deterministic values based on id
      const x = (id % 10) * 10 // Spread particles across width
      const y = ((id % 5) * 20) + 10 // Spread particles across height
      
      setParticles(prev => [...prev, { id, x, y }])
      setParticleCount(prev => prev + 1)
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id))
      }, 2000)
    }

    const interval = setInterval(createParticle, 200)
    return () => clearInterval(interval)
  }, [particleCount])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background gradient */}
      <div 
        className={`absolute inset-0 transition-colors duration-1000 ${
          isGreen ? 'bg-gradient-to-r from-green-900/50 to-green-600/30' 
                  : 'bg-gradient-to-r from-red-900/50 to-red-600/30'
        }`}
      />

      {/* Floating particles */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={`absolute w-2 h-2 rounded-full ${
              isGreen ? 'bg-green-400' : 'bg-red-400'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            scale: isGreen ? [1, 1.1, 1] : [1, 1.1, 1],
            boxShadow: isGreen 
              ? ['0 0 20px #22c55e', '0 0 40px #22c55e', '0 0 20px #22c55e']
              : ['0 0 20px #ef4444', '0 0 40px #ef4444', '0 0 20px #ef4444']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`w-24 h-24 rounded-full ${
            isGreen ? 'bg-green-500' : 'bg-red-500'
          }`}
        />
      </div>

      {/* Text overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          {isGreen ? 'GREEN LIGHT!' : 'RED LIGHT!'}
        </h1>
        <p className="text-gray-300">
          {isGreen ? 'Move carefully...' : 'Freeze!'}
        </p>
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }} />
    </div>
  )
}

export default DynamicTrafficLight
