'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const CookieIcon = ({ className = '', size = 40 }: IconProps) => {
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
        stroke="rgba(255,207,107, 0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Cookie Base */}
      <motion.path
        d="M20 8L28 12L32 20L28 28L20 32L12 28L8 20L12 12L20 8Z"
        fill="url(#cookieGradient)"
        filter="url(#glow)"
        initial={{ scale: 0.9, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Circuit Pattern */}
      <motion.path
        d="M16 16L24 24M24 16L16 24"
        stroke="#4ECDC4"
        strokeWidth="1"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Code Fragments */}
      {[
        { angle: 45, cx: 27.070000, cy: 27.070000, delay: 0.125 },
        { angle: 135, cx: 12.930000, cy: 27.070000, delay: 0.375 },
        { angle: 225, cx: 12.930000, cy: 12.930000, delay: 0.625 },
        { angle: 315, cx: 27.070000, cy: 12.930000, delay: 0.875 }
      ].map((fragment) => (
        <motion.circle
          key={fragment.angle}
          cx={fragment.cx}
          cy={fragment.cy}
          r="2"
          fill="#FF6B6B"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: fragment.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Breaking Effect */}
      <motion.path
        d="M20 14L20 26M14 20L26 20"
        stroke="#FFFFFF"
        strokeWidth="0.5"
        strokeDasharray="2 2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="cookieGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFA500" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF8C00" stopOpacity="0.4" />
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

export default CookieIcon
