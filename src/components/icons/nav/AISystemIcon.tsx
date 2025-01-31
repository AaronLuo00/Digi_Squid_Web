'use client'

import { motion } from 'framer-motion'

interface IconProps {
  className?: string
  size?: number
}

const AISystemIcon = ({ className = '', size = 40 }: IconProps) => {
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

      {/* AI Head Base */}
      <motion.path
        d="M14 12H26V28H14V12Z"
        fill="url(#aiGradient)"
        filter="url(#glow)"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Neural Network Nodes */}
      {[
        { key: 0, cx: 28.000000, cy: 20.000000, delay: 0 },
        { key: 72, cx: 22.472000, cy: 27.608000, delay: 0.2 },
        { key: 144, cx: 13.472000, cy: 27.608000, delay: 0.4 },
        { key: 216, cx: 13.472000, cy: 12.392000, delay: 0.6 },
        { key: 288, cx: 22.472000, cy: 12.392000, delay: 0.8 }
      ].map((node) => (
        <motion.g key={node.key}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="1.5"
            fill="#4ECDC4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: node.delay
            }}
          />
          <motion.path
            d={`M${node.cx} ${node.cy}L20 20`}
            stroke="#4ECDC4"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay
            }}
          />
        </motion.g>
      ))}

      {/* AI Eyes */}
      <motion.circle
        cx="16"
        cy="18"
        r="2"
        fill="#FF6B6B"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.circle
        cx="24"
        cy="18"
        r="2"
        fill="#FF6B6B"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />

      {/* Data Flow */}
      <motion.path
        d="M16 24H24"
        stroke="#45B7D1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2 2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Gradients and Filters */}
      <defs>
        <linearGradient id="aiGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#45B7D1" stopOpacity="0.2" />
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

export default AISystemIcon
