'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AINode {
  id: string
  type: 'input' | 'hidden' | 'output'
  x: number
  y: number
  value: number
  connections: string[]
}

export default function AIDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSimulating, setIsSimulating] = useState(false)
  const [nodes, setNodes] = useState<AINode[]>([
    // Input nodes
    { id: 'i1', type: 'input', x: 10, y: 20, value: 0.7, connections: ['h1', 'h2'] },
    { id: 'i2', type: 'input', x: 10, y: 50, value: 0.3, connections: ['h1', 'h3'] },
    { id: 'i3', type: 'input', x: 10, y: 80, value: 0.5, connections: ['h2', 'h3'] },
    // Hidden nodes
    { id: 'h1', type: 'hidden', x: 40, y: 35, value: 0, connections: ['o1', 'o2'] },
    { id: 'h2', type: 'hidden', x: 40, y: 50, value: 0, connections: ['o1', 'o3'] },
    { id: 'h3', type: 'hidden', x: 40, y: 65, value: 0, connections: ['o2', 'o3'] },
    // Output nodes
    { id: 'o1', type: 'output', x: 70, y: 35, value: 0, connections: [] },
    { id: 'o2', type: 'output', x: 70, y: 50, value: 0, connections: [] },
    { id: 'o3', type: 'output', x: 70, y: 65, value: 0, connections: [] },
  ])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const getNodeColor = (type: string, value: number) => {
    const alpha = Math.max(0.2, value)
    switch (type) {
      case 'input':
        return `rgba(0, 240, 255, ${alpha})`
      case 'hidden':
        return `rgba(255, 2, 102, ${alpha})`
      case 'output':
        return `rgba(45, 27, 105, ${alpha})`
      default:
        return 'rgba(255, 255, 255, 0.5)'
    }
  }

  const simulateAI = () => {
    setIsSimulating(true)
    let iteration = 0
    
    const interval = setInterval(() => {
      setNodes(prevNodes => {
        const newNodes = [...prevNodes]
        
        // Update hidden nodes
        newNodes
          .filter(node => node.type === 'hidden')
          .forEach(node => {
            const inputNodes = prevNodes.filter(n => 
              n.type === 'input' && n.connections.includes(node.id)
            )
            const avgInput = inputNodes.reduce((sum, n) => sum + n.value, 0) / inputNodes.length
            node.value = Math.sin(iteration + avgInput) * 0.5 + 0.5
          })

        // Update output nodes
        newNodes
          .filter(node => node.type === 'output')
          .forEach(node => {
            const hiddenNodes = prevNodes.filter(n => 
              n.type === 'hidden' && n.connections.includes(node.id)
            )
            const avgHidden = hiddenNodes.reduce((sum, n) => sum + n.value, 0) / hiddenNodes.length
            node.value = Math.sin(iteration + avgHidden) * 0.5 + 0.5
          })

        return newNodes
      })

      iteration += 0.1
      if (iteration > 10) {
        clearInterval(interval)
        setIsSimulating(false)
      }
    }, 50)
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative"
    >
      <div className="text-center mb-8">
        <span className="game-number text-lg mb-2 block">GAME #067</span>
        <h2 className="text-3xl font-bold squid-text mb-4">Neural Network Decisions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Watch our AI agents process game data in real-time, making split-second decisions 
          based on player behavior and game state.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
        <div className="relative h-64 mb-4 border border-gray-800 rounded-lg overflow-hidden">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {nodes.map(node =>
              node.connections.map(targetId => {
                const target = nodes.find(n => n.id === targetId)
                if (!target) return null
                return (
                  <motion.line
                    key={`${node.id}-${targetId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={getNodeColor(node.type, (node.value + target.value) / 2)}
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isSimulating ? 1 : 0.3 }}
                    transition={{ duration: 1, repeat: isSimulating ? Infinity : 0 }}
                  />
                )
              })
            )}
          </svg>

          {/* Nodes */}
          {nodes.map(node => (
            <motion.div
              key={node.id}
              className="absolute w-4 h-4 -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                backgroundColor: getNodeColor(node.type, node.value),
                boxShadow: `0 0 10px ${getNodeColor(node.type, node.value)}`,
              }}
              animate={{
                scale: isSimulating ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 1,
                repeat: isSimulating ? Infinity : 0,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={simulateAI}
            disabled={isSimulating}
            className="squid-button px-6 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
          >
            {isSimulating ? 'Simulating...' : 'Run Simulation'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
