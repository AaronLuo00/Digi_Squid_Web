'use client'

import { motion } from 'framer-motion'

interface MarbleTrailProps {
  points: { x: number; y: number }[]
  color: string
}

const MarbleTrail = ({ points, color }: MarbleTrailProps) => {
  if (points.length < 2) return null

  // Create SVG path from points
  const pathD = `M ${points[0].x} ${points[0].y} ` +
    points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')

  return (
    <svg className="absolute inset-0 pointer-events-none">
      <defs>
        {/* Gradient for trail */}
        <linearGradient
          id={`trail-gradient-${color}`}
          gradientUnits="userSpaceOnUse"
          x1={points[0].x}
          y1={points[0].y}
          x2={points[points.length - 1].x}
          y2={points[points.length - 1].y}
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>

        {/* Glow filter */}
        <filter id={`glow-${color}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main trail */}
      <motion.path
        d={pathD}
        stroke={`url(#trail-gradient-${color})`}
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ filter: `url(#glow-${color})` }}
      />

      {/* Sparkle effects along the trail */}
      {points.map((point, index) => (
        <motion.circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            repeat: Infinity,
            repeatDelay: 1
          }}
          style={{ filter: `url(#glow-${color})` }}
        />
      ))}

      {/* Pulse effect at the end of trail */}
      <motion.circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill={color}
        initial={{ scale: 0.5, opacity: 0.8 }}
        animate={{
          scale: [0.5, 2],
          opacity: [0.8, 0]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.2
        }}
        style={{ filter: `url(#glow-${color})` }}
      />
    </svg>
  )
}

export default MarbleTrail
