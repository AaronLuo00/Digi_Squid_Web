'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Node {
  id: number
  x: number
  y: number
  connections: number[]
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  glow: boolean
}

const generateNodes = (count: number): Node[] => {
  const nodes = Array.from({ length: count }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    connections: [] as number[]
  }))

  nodes.forEach(node => {
    const connectionCount = Math.floor(Math.random() * 3) + 1
    for (let i = 0; i < connectionCount; i++) {
      const targetId = Math.floor(Math.random() * count)
      if (targetId !== node.id && !node.connections.includes(targetId)) {
        node.connections.push(targetId)
      }
    }
  })

  return nodes
}

const ConnectionLine = ({ start, end }: { start: Node; end: Node }) => (
  <motion.line
    x1={`${start.x}%`}
    y1={`${start.y}%`}
    x2={`${end.x}%`}
    y2={`${end.y}%`}
    stroke="rgba(255, 99, 132, 0.2)"
    strokeWidth="1"
    initial={{ pathLength: 0, opacity: 0.2 }}
    animate={{ 
      pathLength: [0, 1, 0],
      opacity: [0.2, 0.5, 0.2]
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

const NeonGlow = () => (
  <>
    <motion.div
      className="absolute w-[40vw] h-[40vw] rounded-full left-1/4 top-1/4"
      style={{
        background: 'radial-gradient(circle, rgba(255,99,132,0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        willChange: 'transform, opacity'
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div
      className="absolute w-[30vw] h-[30vw] rounded-full right-1/3 bottom-1/3"
      style={{
        background: 'radial-gradient(circle, rgba(78,205,196,0.15) 0%, transparent 70%)',
        filter: 'blur(30px)',
        willChange: 'transform, opacity'
      }}
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.2, 0.4]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </>
)

const DocsBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setNodes(generateNodes(8))
    
    const newParticles = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: index % 3 === 0 ? '#FF6B6B' : index % 3 === 1 ? '#4ECDC4' : '#45B7D1',
      speed: Math.random() * 3 + 2,
      glow: Math.random() > 0.7
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/90 to-gray-900/90"
        style={{ willChange: 'opacity' }}
      />
      
      {/* Dynamic grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          willChange: 'transform'
        }}
      />

      {/* Node connections */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ willChange: 'transform' }}
      >
        {nodes.map(node => 
          node.connections.map(targetId => (
            <ConnectionLine
              key={`${node.id}-${targetId}`}
              start={node}
              end={nodes[targetId]}
            />
          ))
        )}
      </svg>

      {/* Node points */}
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 bg-squid-pink rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 10px rgba(255, 99, 132, 0.5)',
            willChange: 'transform, opacity'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Neon glow effects */}
      <div className="absolute inset-0">
        <NeonGlow />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: particle.glow ? `0 0 10px ${particle.color}` : 'none',
            filter: particle.glow ? 'blur(1px)' : 'none',
            willChange: 'transform, opacity'
          }}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 20 - 10)}%`,
              `${particle.x}%`
            ],
            y: [
              `${particle.y}%`,
              `${particle.y + (Math.random() * 20 - 10)}%`,
              `${particle.y}%`
            ],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.speed,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default DocsBackground
