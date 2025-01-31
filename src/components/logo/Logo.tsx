'use client'

import { motion, Variants } from 'framer-motion'

const Logo = () => {
  const iconSize = 28
  const strokeWidth = 2
  const color = "#FF0266"

  const shapeVariants: Variants = {
    initial: { opacity: 0, scale: 0, rotate: -30 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    hover: (custom: number) => ({
      scale: 1.1,
      rotate: custom,
      filter: "drop-shadow(0 0 8px rgba(255,2,102,0.8))"
    })
  }

  const lineVariants: Variants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 0.5
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <motion.div
        className="relative"
        whileHover="hover"
        initial="initial"
        animate="animate"
      >
        {/* SVG Container */}
        <svg width="98" height="28" viewBox="0 0 98 28">
          {/* Circle (Manager) */}
          <motion.circle
            cx="14"
            cy="14"
            r="12"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            variants={shapeVariants}
            custom={-10}
            transition={{ duration: 0.5 }}
            className="filter drop-shadow-[0_0_4px_rgba(255,2,102,0.7)]"
          />

          {/* Triangle (Soldier) */}
          <motion.path
            d="M49 2 
               L63 26 
               L35 26 Z"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            variants={shapeVariants}
            custom={10}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="filter drop-shadow-[0_0_4px_rgba(255,2,102,0.7)]"
          />

          {/* Square (Worker) */}
          <motion.rect
            x="72"
            y="2"
            width="24"
            height="24"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            variants={shapeVariants}
            custom={45}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="filter drop-shadow-[0_0_4px_rgba(255,2,102,0.7)]"
          />

          {/* Connecting Lines */}
          <motion.path
            d="M28 14 H84"
            stroke={color}
            strokeWidth={1}
            strokeDasharray="4 4"
            variants={lineVariants}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Additional decorative lines */}
          <motion.path
            d="M49 14 V26"
            stroke={color}
            strokeWidth={1}
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 0.3
            }}
            transition={{ 
              duration: 1,
              delay: 0.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </svg>

        {/* Pulse Effects */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-squid-pink to-transparent opacity-50" />
        </motion.div>

        {/* Glow Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-squid-pink/0 via-squid-pink/5 to-squid-pink/0"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.span
          className="text-2xl digimon-text inline-block"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 8px rgba(255,2,102,0.5)"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          DigiSquid
        </motion.span>
        <motion.div
          className="absolute -top-1 -right-3 text-squid-pink opacity-50 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          001
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Logo
