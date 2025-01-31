'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const GameMechanicsIcon = ({ className = '', size = 40 }: IconProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Background Circuit */}
      <motion.path
        d="M20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2Z"
        stroke="rgba(78,205,196, 0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Controller Base */}
      <motion.path
        d="M12 14H28V26H12V14Z"
        fill="url(#controllerGradient)"
        filter="url(#glow)"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* D-Pad */}
      <motion.path
        d="M16 18V22M14 20H18"
        stroke="#4ECDC4"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Action Buttons */}
      {[
        { key: 0, cx: 26.000000, cy: 20.000000, delay: 0 },
        { key: 90, cx: 24.000000, cy: 22.000000, delay: 0.25 },
        { key: 180, cx: 22.000000, cy: 20.000000, delay: 0.5 },
        { key: 270, cx: 24.000000, cy: 18.000000, delay: 0.75 }
      ].map((button) => (
        <motion.circle
          key={button.key}
          cx={button.cx}
          cy={button.cy}
          r="1.5"
          fill="#FF6B6B"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: button.delay
          }}
        />
      ))}

      {/* Circuit Lines */}
      <motion.path
        d="M8 20H10M30 20H32M20 8V10M20 30V32"
        stroke="#45B7D1"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="controllerGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#45B7D1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  )
}

export default GameMechanicsIcon
