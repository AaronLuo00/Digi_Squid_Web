'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const TokenEconomicsIcon = ({ className = '', size = 40 }: IconProps) => {
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

      {/* Token Base */}
      <motion.path
        d="M20 8L28 12L32 20L28 28L20 32L12 28L8 20L12 12L20 8Z"
        fill="url(#tokenGradient)"
        filter="url(#glow)"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Value Flow Lines */}
      {[
        { angle: 0, path: "M20 20L34 20", delay: 0 },
        { angle: 60, path: "M20 20L27 32.1", delay: 0.167 },
        { angle: 120, path: "M20 20L13 32.1", delay: 0.333 },
        { angle: 180, path: "M20 20L6 20", delay: 0.5 },
        { angle: 240, path: "M20 20L13 7.9", delay: 0.667 },
        { angle: 300, path: "M20 20L27 7.9", delay: 0.833 }
      ].map((line) => (
        <motion.path
          key={line.angle}
          d={line.path}
          stroke="#4ECDC4"
          strokeWidth="0.5"
          strokeDasharray="2 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: line.delay
          }}
        />
      ))}

      {/* Crypto Symbol */}
      <motion.path
        d="M17 16L23 24M23 16L17 24"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Holographic Effect */}
      <motion.circle
        cx="20"
        cy="20"
        r="8"
        stroke="url(#holoGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2, opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="tokenGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#45B7D1" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="holoGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#45B7D1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4ECDC4" stopOpacity="0.8" />
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

export default TokenEconomicsIcon
