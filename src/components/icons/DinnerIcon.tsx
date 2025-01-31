'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const DinnerIcon = ({ className = '', size = 40 }: IconProps) => {
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
        stroke="rgba(255,99,132, 0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Holographic Table */}
      <motion.path
        d="M10 24L20 20L30 24L20 28L10 24Z"
        fill="url(#tableGradient)"
        filter="url(#glow)"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Token Symbols */}
      {[
        { angle: 0, cx: 28.000000, cy: 20.000000, delay: 0, path: "M28.000000 20.000000L20.000000 20.000000" },
        { angle: 72, cx: 22.472000, cy: 27.608000, delay: 0.2, path: "M22.472000 27.608000L20.000000 20.000000" },
        { angle: 144, cx: 13.472000, cy: 27.608000, delay: 0.4, path: "M13.472000 27.608000L20.000000 20.000000" },
        { angle: 216, cx: 13.472000, cy: 12.392000, delay: 0.6, path: "M13.472000 12.392000L20.000000 20.000000" },
        { angle: 288, cx: 22.472000, cy: 12.392000, delay: 0.8, path: "M22.472000 12.392000L20.000000 20.000000" }
      ].map((symbol) => (
        <motion.g key={symbol.angle}>
          <motion.circle
            cx={symbol.cx}
            cy={symbol.cy}
            r="2"
            fill="#4ECDC4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d={symbol.path}
            stroke="#4ECDC4"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: symbol.delay
            }}
          />
        </motion.g>
      ))}

      {/* Alliance Lines */}
      <motion.path
        d="M15 16L25 24M25 16L15 24"
        stroke="#FF6B6B"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Holographic Projections */}
      <motion.circle
        cx="20"
        cy="20"
        r="4"
        stroke="url(#holoGradient)"
        strokeWidth="0.5"
        fill="none"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="tableGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.3" />
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

export default DinnerIcon
