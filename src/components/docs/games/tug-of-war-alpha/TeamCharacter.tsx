'use client'

import { motion } from 'framer-motion'

interface TeamCharacterProps {
  strength: number
  isLeaning: boolean
  isWinning: boolean
}

const TeamCharacter = ({ strength, isLeaning, isWinning }: TeamCharacterProps) => {
  // Calculate character tilt based on strength and position
  const tiltAngle = isLeaning ? -15 : 15
  const scale = 0.8 + (strength * 0.4) // Scale between 0.8 and 1.2

  return (
    <motion.div
      className="relative"
      animate={{
        rotate: tiltAngle,
        scale: scale,
        y: isWinning ? [-2, 2] : 0 // Bounce when winning
      }}
      transition={{
        rotate: { type: "spring", stiffness: 200, damping: 20 },
        scale: { duration: 0.5 },
        y: {
          duration: 0.5,
          repeat: isWinning ? Infinity : 0,
          repeatType: "reverse"
        }
      }}
    >
      {/* Character body */}
      <motion.div
        className="relative text-4xl"
        animate={{
          filter: [
            'brightness(1)',
            `brightness(${1 + strength * 0.5})`,
            'brightness(1)'
          ]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity
        }}
      >
        👥
      </motion.div>

      {/* Effort indicators */}
      {strength > 0.9 && (
        <motion.div
          className="absolute -top-2 -right-2 text-sm"
          animate={{
            opacity: [0, 1, 0],
            y: [-5, -10, -5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          💪
        </motion.div>
      )}

      {/* Sweat effect for high effort */}
      {strength > 0.95 && (
        <motion.div
          className="absolute -top-1 left-1 text-xs"
          animate={{
            opacity: [0, 1, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity
          }}
        >
          💦
        </motion.div>
      )}

      {/* Victory effect */}
      {isWinning && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 text-sm"
          animate={{
            y: [-2, -6, -2],
            rotate: [-10, 10, -10]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          🎉
        </motion.div>
      )}
    </motion.div>
  )
}

export default TeamCharacter
