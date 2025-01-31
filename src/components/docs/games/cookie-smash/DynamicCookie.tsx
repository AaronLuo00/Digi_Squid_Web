'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Point {
  x: number
  y: number
  active: boolean
}

interface CutPath {
  points: Point[]
  progress: number
  complete: boolean
  color: string
}

interface CollisionPoint {
  id: number
  x: number
  y: number
  color: string
}

const COOKIE_SIZE = 300 // Fixed cookie size in pixels
const CUTTING_COLORS = [
  'rgb(255, 0, 128)', // squid-pink
  'rgb(59, 130, 246)', // blue
  'rgb(16, 185, 129)', // green
  'rgb(245, 158, 11)'  // amber
]

const DynamicCookie = () => {
  const [paths, setPaths] = useState<CutPath[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [collisionPoints, setCollisionPoints] = useState<CollisionPoint[]>([])
  const pathIdRef = useRef(0)
  const collisionIdRef = useRef(0)
  
  useEffect(() => {
    // Update container size
    const updateSize = () => {
      const container = document.querySelector('.cookie-container')
      if (container) {
        setContainerSize({
          width: container.clientWidth,
          height: container.clientHeight
        })
      }
    }

    // Initial size
    updateSize()

    // Listen for resize
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return

    const centerX = containerSize.width / 2
    const centerY = containerSize.height / 2

    // Generate new cutting paths periodically
    const pathInterval = setInterval(() => {
      if (paths.length < 3) {
        const radius = COOKIE_SIZE * 0.4
        const points: Point[] = []
        
        // Generate a circular path with some randomness
        const numPoints = 12 // More points for smoother path
        for (let i = 0; i < numPoints; i++) {
          const angle = (i / numPoints) * Math.PI * 2
          const r = radius * (0.8 + Math.random() * 0.4)
          points.push({
            x: centerX + Math.cos(angle) * r + (Math.random() - 0.5) * 30,
            y: centerY + Math.sin(angle) * r + (Math.random() - 0.5) * 30,
            active: false
          })
        }
        
        setPaths(prev => [...prev, {
          points,
          progress: 0,
          complete: false,
          color: CUTTING_COLORS[prev.length % CUTTING_COLORS.length]
        }])
      }
    }, 5000)

    // Animate cutting progress
    const cutInterval = setInterval(() => {
      setPaths(prev => prev.map(path => {
        if (path.complete) return path
        
        // Update progress and point activation
        const newProgress = path.progress + 0.01
        const activePointIndex = Math.floor(newProgress * path.points.length)
        
        // Add collision effect at newly activated point
        if (activePointIndex > 0 && activePointIndex < path.points.length) {
          const point = path.points[activePointIndex]
          setCollisionPoints(prev => [...prev, {
            id: collisionIdRef.current++,
            x: point.x,
            y: point.y,
            color: path.color
          }])
        }

        const newPoints = path.points.map((point, index) => ({
          ...point,
          active: index <= activePointIndex
        }))

        return {
          ...path,
          points: newPoints,
          progress: newProgress,
          complete: newProgress >= 1
        }
      }))
    }, 50)

    return () => {
      clearInterval(pathInterval)
      clearInterval(cutInterval)
    }
  }, [paths.length, containerSize])

  const getPathD = (points: Point[]) => {
    if (points.length < 2) return ''
    return `M ${points[0].x} ${points[0].y} ` +
      points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ')
  }

  return (
    <div className="cookie-container relative h-[600px] w-full bg-gray-900/50 backdrop-blur overflow-hidden">
      {/* Cookie shape with improved visuals */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: COOKIE_SIZE,
          height: COOKIE_SIZE,
          left: containerSize.width ? (containerSize.width - COOKIE_SIZE) / 2 : 0,
          top: containerSize.height ? (containerSize.height - COOKIE_SIZE) / 2 : 0,
          background: 'radial-gradient(circle, rgb(217, 119, 6), rgb(180, 83, 9))',
          boxShadow: '0 0 30px rgba(217, 119, 6, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Cookie texture */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-900/20"
            style={{
              width: 4 + Math.random() * 8,
              height: 4 + Math.random() * 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
      
      {/* Cutting paths */}
      <svg className="absolute inset-0" viewBox={`0 0 ${containerSize.width} ${containerSize.height}`}>
        <defs>
          {paths.map((path, index) => (
            <linearGradient
              key={`trail-${index}`}
              id={`trail-${index}`}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={path.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={path.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {paths.map((path, index) => (
          <g key={index}>
            {/* Guide path */}
            <path
              d={getPathD(path.points)}
              stroke={path.color}
              strokeOpacity="0.2"
              strokeWidth="4"
              strokeDasharray="4 4"
              fill="none"
              style={{
                filter: `drop-shadow(0 0 4px ${path.color})`
              }}
            />
            
            {/* Active cut path */}
            <motion.path
              d={getPathD(path.points.filter(p => p.active))}
              stroke={path.color}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              animate={{
                strokeDasharray: ['0 20', '20 20'],
                strokeWidth: [4, 6, 4]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity
              }}
              style={{
                filter: `drop-shadow(0 0 8px ${path.color})`
              }}
            />
            
            {/* Trail effect */}
            <motion.path
              d={getPathD(path.points.filter(p => p.active))}
              stroke={`url(#trail-${index})`}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Active points */}
            {path.points.filter(p => p.active).map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="6"
                fill={path.color}
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${path.color}) drop-shadow(0 0 20px ${path.color})`
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Collision effects */}
      {collisionPoints.map(point => (
        <motion.div
          key={point.id}
          className="absolute"
          style={{
            left: point.x,
            top: point.y,
            width: 30,
            height: 30,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: [1, 2],
            opacity: [1, 0]
          }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => {
            setCollisionPoints(prev => prev.filter(p => p.id !== point.id))
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, ${point.color}, transparent)`,
              boxShadow: `0 0 20px ${point.color}`
            }}
          />
        </motion.div>
      ))}

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />

      {/* Grid overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,0,128,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,128,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>
  )
}

export default DynamicCookie
