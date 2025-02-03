'use client'

import { motion } from 'framer-motion'

interface CollisionEffectProps {
  x: number
  y: number
  color: string
}

const CollisionEffect = ({ x, y, color }: CollisionEffectProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: 60,
        height: 60,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 1 }}
      animate={{
        scale: [1, 2],
        opacity: [1, 0]
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}50 0%, transparent 70%)`
        }}
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{
          scale: [0.5, 2],
          opacity: [0.8, 0]
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      />

      {/* Spark particles */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const distance = 30
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: color,
              left: '50%',
              top: '50%',
              filter: `blur(1px) brightness(1.5)`
            }}
            initial={{
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1
            }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        )
      })}

      {/* Center flash */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: color,
          filter: 'blur(2px)'
        }}
        initial={{ scale: 0.2, opacity: 1 }}
        animate={{
          scale: [0.2, 1.5],
          opacity: [1, 0]
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
          opacity: 0.5
        }}
        initial={{ scale: 0.5 }}
        animate={{ scale: [0.5, 1.5] }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />
    </motion.div>
  )
}

export default CollisionEffect
