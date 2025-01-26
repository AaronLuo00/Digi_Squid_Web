'use client'

import { motion } from 'framer-motion'

export const GameShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Circle */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-32 h-32 border-2 border-squid-pink rounded-full opacity-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Triangle */}
      <motion.div
        className="absolute top-[40%] left-[5%]"
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-20">
          <path
            d="M50 10L90 90H10L50 10Z"
            stroke="#FF0266"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Square */}
      <motion.div
        className="absolute bottom-[20%] right-[15%]"
        initial={{ opacity: 0, rotate: 45 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
          <rect
            x="10"
            y="10"
            width="60"
            height="60"
            stroke="#FF0266"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Umbrella symbol */}
      <motion.div
        className="absolute top-[60%] left-[10%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-20">
          <path
            d="M30 10 L30 50 M10 30 C10 20 20 10 30 10 C40 10 50 20 50 30"
            stroke="#FF0266"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Honeycomb Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hexagon-pattern bg-repeat"></div>
      </div>

      {/* Game Numbers */}
      <div className="absolute top-[15%] left-[20%] text-squid-pink opacity-10 transform -rotate-12 text-xl font-mono">
        456
      </div>
      <div className="absolute bottom-[25%] right-[25%] text-squid-pink opacity-10 transform rotate-45 text-xl font-mono">
        067
      </div>
      <div className="absolute top-[45%] right-[8%] text-squid-pink opacity-10 transform rotate-90 text-xl font-mono">
        123
      </div>
    </div>
  )
}

export default GameShapes
