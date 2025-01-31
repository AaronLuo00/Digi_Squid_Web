'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Token {
  id: number
  symbol: string
  x: number
  y: number
  scale: number
  rotation: number
}

const FloatingTokens = () => {
  // Initialize with empty array to avoid hydration mismatch
  const [tokens, setTokens] = useState<Token[]>([])

  useEffect(() => {
    // Only generate random positions on client side
    const generateTokens = () => [
      // 代币
      {
        id: 1,
        symbol: '$DSG',
        x: Math.random() * 40 + 10,  // 左半部分
        y: Math.random() * 80 + 10,
        scale: 1.2,
        rotation: 0
      },
      {
        id: 2,
        symbol: '$DSG',
        x: Math.random() * 40 + 50,  // 右半部分
        y: Math.random() * 80 + 10,
        scale: 1.2,
        rotation: 0
      },
      {
        id: 3,
        symbol: '$Digimon',
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        scale: 0.8,
        rotation: 0
      },
      
      // 游戏图标
      {
        id: 4,
        symbol: '🎮',           // 游戏手柄
        x: Math.random() * 40 + 10,  // 左上区域
        y: Math.random() * 30 + 10,
        scale: 1.0,
        rotation: 0
      },
      {
        id: 5,
        symbol: '🎲',           // 骰子（博弈）
        x: Math.random() * 40 + 50,  // 右上区域
        y: Math.random() * 30 + 10,
        scale: 1.0,
        rotation: 0
      },
      {
        id: 6,
        symbol: '🏆',           // 奖杯（竞技）
        x: Math.random() * 40 + 10,  // 左中区域
        y: Math.random() * 30 + 40,
        scale: 1.0,
        rotation: 0
      },
      {
        id: 7,
        symbol: '🎪',           // 竞技场
        x: Math.random() * 40 + 50,  // 右中区域
        y: Math.random() * 30 + 40,
        scale: 1.0,
        rotation: 0
      },
      {
        id: 8,
        symbol: '🎭',           // 角色扮演
        x: Math.random() * 80 + 10,  // 底部区域
        y: Math.random() * 30 + 70,
        scale: 1.0,
        rotation: 0
      }
    ]
    setTokens(generateTokens())
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      {tokens.map((token) => (
        <motion.div
          key={token.id}
          className="absolute"
          style={{
            left: `${token.x}%`,
            top: `${token.y}%`,
            transform: `translate(-50%, -50%) scale(${token.scale}) rotate(${token.rotation}deg)`
          }}
          animate={{
            y: ['-20px', '20px', '-20px'],
            rotate: [-60, 60, -60],
            scale: [token.scale, token.scale * 1.1, token.scale]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className={`
            font-mono text-xl font-bold
            ${token.symbol === '$DSG' ? 'text-squid-pink' : token.symbol === '$Digimon' ? 'text-cyan-400' : 'text-white'}
            drop-shadow-glow
          `}>
            {token.symbol}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingTokens
