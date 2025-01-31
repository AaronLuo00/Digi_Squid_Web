'use client'

import { motion } from 'framer-motion'

export type Strategy = 'cooperate' | 'betray'

interface StrategyIndicatorProps {
  strategy: Strategy
  isActive: boolean
  position: 'left' | 'right'
}

const StrategyIndicator = ({ strategy, isActive, position }: StrategyIndicatorProps) => {
  const getColor = () => {
    if (!isActive) return 'bg-gray-700'
    return strategy === 'cooperate' ? 'bg-emerald-500' : 'bg-red-500'
  }

  const getText = () => {
    return strategy === 'cooperate' ? 'COOPERATE' : 'BETRAY'
  }

  return (
    <motion.div
      className={`px-4 py-2 rounded-lg ${getColor()} text-white font-bold
        relative overflow-hidden`}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.95
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
    >
      {/* Glitch effect */}
      <motion.div
        className="absolute inset-0 bg-white mix-blend-overlay"
        animate={{
          opacity: isActive ? [0, 0.1, 0] : 0,
          clipPath: [
            'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)',
            'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
          ]
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Text with cyber effect */}
      <div className="relative z-10 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${isActive ? 'animate-pulse' : ''} 
          ${strategy === 'cooperate' ? 'bg-emerald-300' : 'bg-red-300'}`} 
        />
        {getText()}
      </div>

      {/* Background pulse */}
      {isActive && (
        <motion.div
          className={`absolute inset-0 ${strategy === 'cooperate' ? 'bg-emerald-400' : 'bg-red-400'}`}
          animate={{
            opacity: [0.2, 0, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      )}

      {/* Side indicators */}
      <div className={`absolute ${position === 'left' ? '-right-1' : '-left-1'} top-1/2 -translate-y-1/2
        w-1 h-8 ${getColor()} rounded-full`} 
      />
    </motion.div>
  )
}

export default StrategyIndicator
