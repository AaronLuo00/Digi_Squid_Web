'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const MarbleIcon = ({ className = '', size = 40 }: IconProps) => {
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
        stroke="rgba(69,183,209, 0.2)"
        strokeWidth="1"
        strokeDasharray="3 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Holographic Marble */}
      <motion.circle
        cx="20"
        cy="20"
        r="12"
        fill="url(#marbleGradient)"
        filter="url(#glow)"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Crypto Symbols */}
      <motion.path
        d="M17 16L23 24M23 16L17 24"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Data Particles */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <motion.circle
          key={angle}
          cx={20 + 14 * Math.cos((angle * Math.PI) / 180)}
          cy={20 + 14 * Math.sin((angle * Math.PI) / 180)}
          r="1"
          fill="#4ECDC4"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: angle / 360,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradients and Filters */}
      <defs>
        <radialGradient id="marbleGradient" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#45B7D1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.4" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <motion.animate
          xlinkHref="#marbleGradient"
          attributeName="cx"
          values="0.3;0.7;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
        <motion.animate
          xlinkHref="#marbleGradient"
          attributeName="cy"
          values="0.3;0.7;0.3"
          dur="3s"
          repeatCount="indefinite"
        />
      </defs>
    </motion.svg>
  )
}

export default MarbleIcon
