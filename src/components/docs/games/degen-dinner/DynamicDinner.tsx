'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ClientOnly from '@/components/utils/ClientOnly'
import TradeEffect from './TradeEffect'
import AllianceEffect from './AllianceEffect'
import DynamicBackground from './DynamicBackground'
import './DynamicDinner.css'

interface Position {
  x: number
  y: number
}

interface Resource {
  id: string
  type: string
  x: number
  y: number
  trading: boolean
  tradingWith: string // Changed to string only
  value: number
  prevValue?: number
}

interface Alliance {
  members: Resource[]
  strength: number
}

interface TradeCompletion {
  id: string
  x: number
  y: number
  color: string
  timestamp: number
}

interface TradingLine {
  source: string
  target: string
  x1: number
  y1: number
  x2: number
  y2: number
  color: string
}

const RESOURCE_SIZE = 60 // Size in pixels for resources
const MAX_RESOURCES = 10 // Maximum number of resources
const ADD_INTERVAL = 1500 // Add resource every 1.5 seconds
const REMOVE_INTERVAL = 5000 // Try to remove resource every 5 seconds
const TRADE_EFFECT_DURATION = 2000 // Duration for trade completion effects

const resourceTypes = [
  { type: '🍖', name: 'Meat' },
  { type: '🥖', name: 'Bread' },
  { type: '🥗', name: 'Salad' },
  { type: '🥤', name: 'Drink' },
  { type: '🍰', name: 'Dessert' },
  { type: '🍜', name: 'Noodles' },
  { type: '🍚', name: 'Rice' },
  { type: '🥩', name: 'Steak' },
  { type: '🍣', name: 'Sushi' },
  { type: '🥘', name: 'Paella' }
]

// Generate unique ID using timestamp and random number
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

const DynamicDinner = () => {
  const [resources, setResources] = useState<Resource[]>([])
  const [alliances, setAlliances] = useState<Alliance[]>([])
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [tradeCompletions, setTradeCompletions] = useState<TradeCompletion[]>([])
  const [isClient, setIsClient] = useState(false)
  
  // Use refs for random values to maintain consistency during SSR
  const randomPositionsRef = useRef<{ [key: string]: Position }>({})
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Clean up old trade completion effects
  useEffect(() => {
    const cleanup = setInterval(() => {
      const now = Date.now()
      setTradeCompletions(prev => 
        prev.filter(t => now - t.timestamp < TRADE_EFFECT_DURATION)
      )
    }, TRADE_EFFECT_DURATION)
    
    return () => clearInterval(cleanup)
  }, [])

  useEffect(() => {
    // Update container size
    const updateSize = () => {
      const container = document.querySelector('.dinner-container')
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

  const getRandomPosition = useCallback((id: string): Position => {
    if (!randomPositionsRef.current[id]) {
      const padding = RESOURCE_SIZE
      randomPositionsRef.current[id] = {
        x: padding + (containerSize.width - padding * 2) * Math.random(),
        y: padding + (containerSize.height - padding * 2) * Math.random()
      }
    }
    return randomPositionsRef.current[id]
  }, [containerSize])

  useEffect(() => {
    if (!isClient || containerSize.width === 0 || containerSize.height === 0) return

    // Add resources periodically
    const addInterval = setInterval(() => {
      setResources(prev => {
        // Don't add if we're at or above max
        if (prev.length >= MAX_RESOURCES) {
          return prev
        }

        const id = generateId()
        const position = getRandomPosition(id)
        return [...prev, {
          id,
          type: resourceTypes[Math.floor(Math.random() * resourceTypes.length)].type,
          x: position.x,
          y: position.y,
          trading: false,
          tradingWith: '', // Empty string as default
          value: 50 + Math.random() * 50
        }]
      })
    }, ADD_INTERVAL)

    // Remove resources periodically
    const removeInterval = setInterval(() => {
      setResources(prev => {
        // Remove excess resources
        if (prev.length > MAX_RESOURCES) {
          return prev.slice(0, MAX_RESOURCES)
        }
        // Randomly remove resources if we're above minimum
        if (prev.length > 5 && Math.random() > 0.7) {
          const removeIndex = Math.floor(Math.random() * prev.length)
          const newResources = [...prev]
          newResources.splice(removeIndex, 1)
          return newResources
        }
        return prev
      })
    }, REMOVE_INTERVAL)

    // Update trading status and create alliances
    const tradeInterval = setInterval(() => {
      setResources(prev => {
        const updated = prev.map(r => ({
          ...r,
          prevValue: r.value,
          trading: false,
          tradingWith: '', // Reset to empty string
          value: Math.max(20, Math.min(100, r.value + (Math.random() - 0.5) * 10))
        }))
        
        if (updated.length >= 2) {
          const numTrades = Math.floor(Math.random() * 2) + 1
          for (let i = 0; i < numTrades; i++) {
            const idx1 = Math.floor(Math.random() * updated.length)
            let idx2 = Math.floor(Math.random() * updated.length)
            while (idx2 === idx1) {
              idx2 = Math.floor(Math.random() * updated.length)
            }
            
            const resource1 = updated[idx1]
            const resource2 = updated[idx2]
            const midX = (resource1.x + resource2.x) / 2
            const midY = (resource1.y + resource2.y) / 2
            
            setTradeCompletions(prev => [...prev, {
              id: generateId(),
              x: midX,
              y: midY,
              color: getResourceColor(resource1.type),
              timestamp: Date.now()
            }])
            
            updated[idx1].trading = true
            updated[idx1].tradingWith = updated[idx2].id
            updated[idx2].trading = true
            updated[idx2].tradingWith = updated[idx1].id
          }
        }
        
        return updated
      })

      setAlliances(prev => {
        if (prev.length < 3 && Math.random() > 0.7) {
          const memberCount = Math.floor(Math.random() * 2) + 2
          const availableResources = resources.filter(r => !r.trading)
          if (availableResources.length >= 2) {
            const selectedMembers = Array.from({ length: memberCount }, () => {
              const index = Math.floor(Math.random() * availableResources.length)
              return availableResources[index]
            }).filter((r, i, arr) => 
              r !== undefined && arr.findIndex(a => a?.id === r.id) === i
            )
            
            if (selectedMembers.length >= 2) {
              return [...prev, {
                members: selectedMembers,
                strength: Math.random() * 0.5 + 0.5
              }]
            }
          }
          return prev
        }
        return prev.map(alliance => ({
          ...alliance,
          strength: Math.max(0.2, alliance.strength + (Math.random() - 0.5) * 0.1)
        }))
      })
    }, 1000)

    return () => {
      clearInterval(addInterval)
      clearInterval(removeInterval)
      clearInterval(tradeInterval)
    }
  }, [resources.length, containerSize, isClient, getRandomPosition])

  const getResourceColor = (type: string) => {
    switch (type) {
      case '🍖': return 'rgb(239, 68, 68)' // red
      case '🥖': return 'rgb(245, 158, 11)' // amber
      case '🥗': return 'rgb(16, 185, 129)' // emerald
      case '🥤': return 'rgb(59, 130, 246)' // blue
      case '🍰': return 'rgb(236, 72, 153)' // pink
      case '🍜': return 'rgb(217, 70, 239)' // purple
      case '🍚': return 'rgb(229, 231, 235)' // gray
      case '🥩': return 'rgb(220, 38, 38)' // dark red
      case '🍣': return 'rgb(251, 146, 60)' // orange
      case '🥘': return 'rgb(251, 191, 36)' // yellow
      default: return 'rgb(255, 0, 128)' // squid-pink
    }
  }

  const getTradingLines = (): TradingLine[] => {
    const lines: TradingLine[] = []
    resources.forEach(resource => {
      if (resource.trading && resource.tradingWith !== '') {
        const target = resources.find(r => r.id === resource.tradingWith)
        if (target && resource.id < target.id) { // Only add once to avoid duplicates
          lines.push({
            source: resource.id,
            target: target.id,
            x1: resource.x,
            y1: resource.y,
            x2: target.x,
            y2: target.y,
            color: getResourceColor(resource.type)
          })
        }
      }
    })
    return lines
  }

  if (!isClient) {
    return <div className="dinner-container" />
  }

  const tradingLines = getTradingLines()

  return (
    <ClientOnly>
      <div className="dinner-container">
        <DynamicBackground />

        <AnimatePresence>
          {resources.map(resource => (
            <motion.div
              key={`resource-${resource.id}`}
              className="resource"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{
                x: resource.x,
                y: resource.y,
                scale: resource.trading ? [1, 1.2, 1] : 1,
                opacity: 1,
                rotate: resource.trading ? [-10, 10, -10] : 0
              }}
              exit={{
                scale: 0,
                opacity: 0,
                rotate: 180,
                transition: { duration: 0.5 }
              }}
              transition={{
                type: 'spring',
                damping: 15,
                stiffness: 200
              }}
            >
              <div
                className="resource-glow"
                style={{
                  '--glow-color': `${getResourceColor(resource.type)}20`
                } as React.CSSProperties}
              />
              
              <div className="resource-icon">
                <span>{resource.type}</span>
                <motion.div
                  className="resource-value"
                  style={{
                    '--value-color': getResourceColor(resource.type)
                  } as React.CSSProperties}
                  animate={{
                    scale: resource.prevValue !== undefined && resource.value !== resource.prevValue ? [1, 1.2, 1] : 1,
                    y: resource.prevValue !== undefined && resource.value !== resource.prevValue ? [-2, 0] : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {resource.value.toFixed(0)}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <svg className="absolute inset-0 pointer-events-none">
          <defs>
            <linearGradient id="trading-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 0, 128, 0.6)" />
              <stop offset="50%" stopColor="rgba(255, 0, 128, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 0, 128, 0.6)" />
            </linearGradient>
          </defs>

          {tradingLines.map(line => (
            <g key={`trade-${line.source}-${line.target}`}>
              <motion.line
                className="trading-line"
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#trading-gradient)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity
                }}
              />
              
              <motion.circle
                className="trading-particle"
                r="4"
                style={{
                  '--particle-color': line.color
                } as React.CSSProperties}
                fill={line.color}
                animate={{
                  cx: [line.x1, line.x2],
                  cy: [line.y1, line.y2],
                  opacity: [1, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </g>
          ))}
        </svg>

        <svg className="absolute inset-0 pointer-events-none">
          {alliances.map((alliance, index) => {
            if (alliance.members.length < 2) return null

            return (
              <AllianceEffect
                key={`alliance-${alliance.members.map(m => m.id).join('-')}`}
                points={alliance.members.map(m => ({ x: m.x, y: m.y }))}
                strength={alliance.strength}
              />
            )
          })}
        </svg>

        {tradeCompletions.map(completion => (
          <TradeEffect
            key={completion.id}
            x={completion.x}
            y={completion.y}
            color={completion.color}
          />
        ))}

        <div className="grid-overlay" />
        <div className="border-glow top-0 inset-x-0" />
        <div className="border-glow bottom-0 inset-x-0" />
        <div className="border-glow-vertical left-0 inset-y-0" />
        <div className="border-glow-vertical right-0 inset-y-0" />
      </div>
    </ClientOnly>
  )
}

export default DynamicDinner
