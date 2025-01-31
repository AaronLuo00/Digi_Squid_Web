'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const TugOfWarIcon = ({ className = '', size = 40 }: IconProps) => {
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

      {/* Left Player */}
      <motion.path
        d="M12 20C12 17.7909 10.2091 16 8 16C5.79086 16 4 17.7909 4 20"
        stroke="#FF6B6B"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Right Player */}
      <motion.path
        d="M28 20C28 17.7909 29.7909 16 32 16C34.2091 16 36 17.7909 36 20"
        stroke="#4ECDC4"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      {/* Data Stream Rope */}
      <motion.path
        d="M8 20H32"
        stroke="url(#ropeGradient)"
        strokeWidth="2"
        strokeDasharray="4 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Blockchain Nodes */}
      <motion.circle
        cx="14"
        cy="20"
        r="2"
        fill="#FF6B6B"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.circle
        cx="20"
        cy="20"
        r="2"
        fill="#45B7D1"
        initial={{ scale: 1.2 }}
        animate={{ scale: 0.8 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.circle
        cx="26"
        cy="20"
        r="2"
        fill="#4ECDC4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="ropeGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="50%" stopColor="#45B7D1" />
          <stop offset="100%" stopColor="#4ECDC4" />
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

export default TugOfWarIcon
