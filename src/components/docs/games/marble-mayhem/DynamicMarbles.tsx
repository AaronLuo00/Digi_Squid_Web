'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import ClientOnly from '@/components/utils/ClientOnly'
import MarbleTrail from './MarbleTrail'
import CollisionEffect from './CollisionEffect'

interface Position {
  x: number
  y: number
}

interface Marble {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
  glowing: boolean
  velocity: {
    x: number
    y: number
  }
  history: Position[]
  colliding: boolean
}

interface Collision {
  id: string
  x: number
  y: number
  color: string
  timestamp: number
}

const COLLISION_DURATION = 500 // 500ms
const HISTORY_LENGTH = 5 // Number of positions to keep in history
const VELOCITY_DAMPING = 0.98 // Velocity reduction factor
const COLLISION_ELASTICITY = 0.8 // How bouncy collisions are
const MAX_MARBLES = 30 // Maximum number of marbles
const SPAWN_INTERVAL = 1000 // Spawn interval in milliseconds

// Counters for generating unique IDs
let marbleIdCounter = 0
const generateMarbleId = () => {
  marbleIdCounter += 1
  return marbleIdCounter
}

let collisionIdCounter = 0
const generateCollisionId = (i: number, j: number) => {
  collisionIdCounter += 1
  return `collision-${collisionIdCounter}-${i}-${j}`
}

const DynamicMarbles = () => {
  const [marbles, setMarbles] = useState<Marble[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [collisions, setCollisions] = useState<Collision[]>([])
  const animationFrameRef = useRef<number | null>(null)
  
  // Container ref for size measurements
  const containerRef = useRef<HTMLDivElement>(null)

  // Size initialization and update effect
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        if (rect.width > 0 && rect.height > 0) {
          setContainerSize({
            width: rect.width,
            height: rect.height
          })
          console.log('Container size updated:', rect.width, rect.height)
        } else {
          console.warn('Container has zero dimensions')
        }
      }
    }

    // Initial size check
    updateSize()
    
    // Multiple checks to ensure proper initialization
    const checks = [100, 500, 1000] // Check at 100ms, 500ms, and 1000ms
    const timers = checks.map(delay => setTimeout(updateSize, delay))

    // Resize handler
    const handleResize = () => {
      requestAnimationFrame(updateSize)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Debug effect for marble creation
  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      console.log('Valid container size detected:', containerSize)
    }
  }, [containerSize])

  // Animation loop
  const updateMarbles = useCallback(() => {
    setMarbles(prevMarbles => {
      const updatedMarbles = prevMarbles.map(marble => {
        // Update position based on velocity
        const newX = marble.x + marble.velocity.x
        const newY = marble.y + marble.velocity.y

        // Bounce off walls
        let newVelocityX = marble.velocity.x
        let newVelocityY = marble.velocity.y

        if (newX - marble.size/2 < 0 || newX + marble.size/2 > containerSize.width) {
          newVelocityX = -marble.velocity.x * COLLISION_ELASTICITY
        }
        if (newY - marble.size/2 < 0 || newY + marble.size/2 > containerSize.height) {
          newVelocityY = -marble.velocity.y * COLLISION_ELASTICITY
        }

        // Apply damping
        newVelocityX *= VELOCITY_DAMPING
        newVelocityY *= VELOCITY_DAMPING

        // Update position history
        const newHistory = [...marble.history, { x: marble.x, y: marble.y }]
        if (newHistory.length > HISTORY_LENGTH) {
          newHistory.shift()
        }

        return {
          ...marble,
          x: Math.max(marble.size/2, Math.min(containerSize.width - marble.size/2, newX)),
          y: Math.max(marble.size/2, Math.min(containerSize.height - marble.size/2, newY)),
          velocity: {
            x: newVelocityX,
            y: newVelocityY
          },
          history: newHistory,
          colliding: false
        }
      })

      // Check for collisions
      const newCollisions: Collision[] = []
      for (let i = 0; i < updatedMarbles.length; i++) {
        for (let j = i + 1; j < updatedMarbles.length; j++) {
          const m1 = updatedMarbles[i]
          const m2 = updatedMarbles[j]
          
          const dx = m2.x - m1.x
          const dy = m2.y - m1.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < (m1.size + m2.size) / 2) {
            // Collision detected
            const angle = Math.atan2(dy, dx)
            const speed1 = Math.sqrt(m1.velocity.x * m1.velocity.x + m1.velocity.y * m1.velocity.y)
            const speed2 = Math.sqrt(m2.velocity.x * m2.velocity.x + m2.velocity.y * m2.velocity.y)
            
            // Update velocities
            updatedMarbles[i].velocity = {
              x: -Math.cos(angle) * speed2 * COLLISION_ELASTICITY,
              y: -Math.sin(angle) * speed2 * COLLISION_ELASTICITY
            }
            updatedMarbles[j].velocity = {
              x: Math.cos(angle) * speed1 * COLLISION_ELASTICITY,
              y: Math.sin(angle) * speed1 * COLLISION_ELASTICITY
            }
            
            updatedMarbles[i].colliding = true
            updatedMarbles[j].colliding = true

            // Add collision effect
            newCollisions.push({
              id: generateCollisionId(i, j),
              x: (m1.x + m2.x) / 2,
              y: (m1.y + m2.y) / 2,
              color: m1.color,
              timestamp: Date.now()
            })
          }
        }
      }

      // Update collisions
      setCollisions(prev => [
        ...prev.filter(c => Date.now() - c.timestamp < COLLISION_DURATION),
        ...newCollisions
      ])

      return updatedMarbles
    })

    animationFrameRef.current = requestAnimationFrame(updateMarbles)
  }, [containerSize])

  // Colors for marbles
  const colors = [
    'rgb(255, 0, 128)', // squid-pink
    'rgb(59, 130, 246)', // blue-500
    'rgb(16, 185, 129)', // emerald-500
    'rgb(245, 158, 11)', // amber-500
  ]

  // Debug log when marbles are created
  useEffect(() => {
    if (marbles.length > 0) {
      console.log('New marble created. Total marbles:', marbles.length)
      console.log('First marble position:', marbles[0].x, marbles[0].y)
    }
  }, [marbles])

  // Function to create a new marble
  const createNewMarble = (): Marble => {
    const padding = 50
    const angle = Math.random() * Math.PI * 2
    const speed = 2 + Math.random() * 2

    return {
      id: generateMarbleId(),
      x: padding + Math.random() * (containerSize.width - padding * 2),
      y: padding + Math.random() * (containerSize.height - padding * 2),
      size: 30 + Math.random() * 20, // Larger marbles (30-50px)
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      glowing: Math.random() > 0.5,
      velocity: {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
      },
      history: [],
      colliding: false
    }
  }

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return

    // Reset counters when component mounts
    marbleIdCounter = 0
    collisionIdCounter = 0

    // Generate initial marbles
    const initialMarbles = Array.from({ length: 5 }, () => createNewMarble())
    setMarbles(initialMarbles)

    // Create interval for spawning new marbles
    const spawnInterval = setInterval(() => {
      setMarbles(prevMarbles => {
        if (prevMarbles.length >= MAX_MARBLES) {
          // Remove oldest marble and add new one
          return [...prevMarbles.slice(1), createNewMarble()]
        }
        // Add new marble
        return [...prevMarbles, createNewMarble()]
      })
    }, SPAWN_INTERVAL)

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(updateMarbles)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      clearInterval(spawnInterval)
    }
  }, [containerSize, updateMarbles])

  return (
    <ClientOnly>
      <div 
        ref={containerRef}
        className="marble-container relative w-full h-[600px] bg-gray-900/50 backdrop-blur overflow-hidden" 
        style={{ minHeight: '600px', minWidth: '300px' }}
      >
        {/* Dynamic background grid */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255,0,128,0.1) 1px, transparent 1px),
              radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px, 30px 30px',
            backgroundPosition: '0 0, 10px 10px',
            animation: 'gridMove 20s linear infinite'
          }}
        />

        {/* Marble trails */}
        {marbles.map(marble => (
          <MarbleTrail
            key={`trail-${marble.id}`}
            points={marble.history}
            color={marble.color}
          />
        ))}

        {/* Marbles */}
        {marbles.map(marble => (
          <motion.div
            key={marble.id}
            className="absolute rounded-full"
            style={{
              width: marble.size,
              height: marble.size,
              left: marble.x,
              top: marble.y,
              transform: 'translate(-50%, -50%)',
              backgroundColor: marble.color,
              boxShadow: marble.glowing 
                ? `0 0 30px ${marble.color}, 0 0 60px ${marble.color}`
                : `0 0 15px ${marble.color}`,
            }}
            animate={{
              scale: marble.colliding ? [1, 1.2, 1] : 1,
              rotate: 360
            }}
            transition={{
              scale: { duration: 0.3 },
              rotate: { duration: marble.duration, repeat: Infinity, ease: "linear" }
            }}
          >
            {/* Inner texture */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, 
                  ${marble.color}00 0%, 
                  ${marble.color}40 50%, 
                  ${marble.color}00 100%)`
              }}
            />
          </motion.div>
        ))}

        {/* Collision effects */}
        {collisions.map(collision => (
          <CollisionEffect
            key={collision.id}
            x={collision.x}
            y={collision.y}
            color={collision.color}
          />
        ))}

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-squid-pink/50 to-transparent" />

      <style jsx global>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0, 10px 10px;
          }
          100% {
            background-position: 20px 20px, 30px 30px;
          }
        }
      `}</style>
      </div>
    </ClientOnly>
  )
}

export default DynamicMarbles
