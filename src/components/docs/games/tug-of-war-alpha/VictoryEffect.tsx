'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface VictoryEffectProps {
  team: 'A' | 'B'
}

interface Confetti {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  color: string
}

const VictoryEffect = ({ team }: VictoryEffectProps) => {
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [count, setCount] = useState(0)

  // Get color from victory palette based on index
  const getColor = (index: number) => {
    const colors = [
      '#ff1493', // Pink
      '#ffd700', // Gold
      '#00ffff', // Cyan
      '#ff4500', // Orange Red
      '#7fff00'  // Chartreuse
    ]
    return colors[index % colors.length]
  }

  useEffect(() => {
    // Create initial burst of confetti
    const initialConfetti: Confetti[] = []
    for (let i = 0; i < 50; i++) {
      initialConfetti.push({
        id: i,
        x: team === 'A' ? 25 : 75, // Start from winning team's side
        y: 50,
        rotation: (i * 7.2) % 360, // 360/50 = 7.2, evenly distributed
        scale: 0.5 + (i % 5) * 0.1, // 0.5-0.9 deterministic scale
        color: getColor(i)
      })
    }
    setConfetti(initialConfetti)

    // Add more confetti periodically
    const interval = setInterval(() => {
      setConfetti(prev => {
        if (prev.length >= 100) return prev // Cap maximum confetti
        
        const newConfetti: Confetti[] = []
        for (let i = 0; i < 5; i++) {
          const newId = count + i
          newConfetti.push({
            id: newId,
            x: team === 'A' ? 25 : 75,
            y: 50,
            rotation: (newId * 7.2) % 360,
            scale: 0.5 + (newId % 5) * 0.1,
            color: getColor(newId)
          })
        }
        setCount(prev => prev + 5)
        return [...prev, ...newConfetti]
      })
    }, 500)

    // Cleanup old confetti
    const cleanup = setInterval(() => {
      setConfetti(prev => prev.slice(-50)) // Keep only last 50 pieces
    }, 2000)

    return () => {
      clearInterval(interval)
      clearInterval(cleanup)
    }
  }, [team, count])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Victory text */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <div className="text-6xl font-bold text-center">
          <motion.div
            animate={{ 
              color: ['#ff1493', '#ffd700', '#00ffff', '#ff1493'],
              textShadow: [
                '0 0 20px rgba(255,20,147,0.5)',
                '0 0 30px rgba(255,215,0,0.5)',
                '0 0 20px rgba(0,255,255,0.5)',
                '0 0 20px rgba(255,20,147,0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            TEAM {team} WINS!
          </motion.div>
        </div>
      </motion.div>

      {/* Confetti */}
      {confetti.map(piece => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3"
          style={{
            backgroundColor: piece.color,
            borderRadius: piece.id % 2 === 0 ? '50%' : '0%',
            top: `${piece.y}%`,
            left: `${piece.x}%`,
            rotate: `${piece.rotation}deg`,
            scale: piece.scale,
            opacity: 0.8
          }}
          animate={{
            x: [0, ((piece.id % 2) * 2 - 1) * 400], // Deterministic movement based on id
            y: [0, 200 + (piece.id % 3) * 100], // Deterministic height based on id
            rotate: [`${piece.rotation}deg`, `${piece.rotation + 360}deg`],
            scale: [piece.scale, 0],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 2 + (piece.id % 3), // Deterministic duration
            ease: "easeOut"
          }}
        />
      ))}

      {/* Victory glow */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at ${team === 'A' ? '25%' : '75%'} 50%, rgba(255,20,147,0.2) 0%, transparent 70%)`,
            `radial-gradient(circle at ${team === 'A' ? '25%' : '75%'} 50%, rgba(255,215,0,0.2) 0%, transparent 70%)`,
            `radial-gradient(circle at ${team === 'A' ? '25%' : '75%'} 50%, rgba(255,20,147,0.2) 0%, transparent 70%)`
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default VictoryEffect
