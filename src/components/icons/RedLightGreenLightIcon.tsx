'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const RedLightGreenLightIcon = ({ className = '', size = 40 }: IconProps) => {
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
        stroke="rgba(255, 99, 132, 0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Robot Eye Frame */}
      <motion.circle
        cx="20"
        cy="20"
        r="12"
        stroke="#4ECDC4"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Traffic Light Elements */}
      <motion.circle
        cx="20"
        cy="15"
        r="3"
        fill="#FF6B6B"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <motion.animate
          attributeName="fill-opacity"
          values="1;0.2;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.circle>

      <motion.circle
        cx="20"
        cy="25"
        r="3"
        fill="#4ECDC4"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      >
        <motion.animate
          attributeName="fill-opacity"
          values="0.2;1;0.2"
          dur="2s"
          repeatCount="indefinite"
        />
      </motion.circle>

      {/* Digital Circuit Lines */}
      <motion.path
        d="M8 20H14M26 20H32M20 32V26M20 14V8"
        stroke="#45B7D1"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Glow Filter */}
      <defs>
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

export default RedLightGreenLightIcon
