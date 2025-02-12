'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function GameDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [lightColor, setLightColor] = useState<'red' | 'green'>('red')
  const [playerPosition, setPlayerPosition] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setLightColor(prev => prev === 'red' ? 'green' : 'red')
    }, Math.random() * 1000 + 500)

    return () => clearInterval(interval)
  }, [isPlaying])

  useEffect(() => {
    if (!isPlaying || lightColor === 'red') return

    const interval = setInterval(() => {
      setPlayerPosition(prev => {
        if (prev >= 100) {
          setIsPlaying(false)
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPlaying, lightColor])

  return (
    <motion.div 
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative"
    >
      <div className="text-center mb-6 sm:mb-8 px-4">
        <span className="game-number text-base sm:text-lg mb-2 block">GAME #456</span>
        <h2 className="text-2xl sm:text-3xl font-bold squid-text mb-3 sm:mb-4">Red Light, Green Light</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Test your reflexes against our AI movement prediction system. 
          One wrong move, and it&apos;s game over.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
        <div className="relative h-32 sm:h-40 mb-4 border border-gray-800 rounded-lg overflow-hidden touch-none">
          {/* Game Grid */}
          <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] opacity-10">
            {[...Array(100)].map((_, i) => (
              <div key={i} className="border border-gray-700" />
            ))}
          </div>

          {/* Traffic Light */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 sm:w-8 h-16 sm:h-20 bg-gray-800 rounded-full p-1.5 sm:p-2 flex flex-col justify-between">
            <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full ${lightColor === 'red' ? 'bg-red-500 animate-pulse' : 'bg-red-900'}`} />
            <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full ${lightColor === 'green' ? 'bg-green-500 animate-pulse' : 'bg-green-900'}`} />
          </div>

          {/* Player */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-squid-pink rounded-sm"
            animate={{ x: `${playerPosition}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              setIsPlaying(!isPlaying)
              if (!isPlaying) {
                setPlayerPosition(0)
                setLightColor('red')
              }
            }}
            className="squid-button px-6 py-3 sm:py-2 rounded-lg text-sm font-semibold min-w-[120px]"
          >
            {isPlaying ? 'Reset Game' : 'Start Demo'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
