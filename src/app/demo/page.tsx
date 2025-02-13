'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import PixelBackground from '@/components/decorative/PixelBackground'
import GameDemo from '@/components/demo/GameDemo'
import AIDemo from '@/components/demo/AIDemo'
import TokenDemo from '@/components/demo/TokenDemo'

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <Header />
      <PixelBackground />
      
      <div className="container mx-auto px-4 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="game-number text-xl mb-2 block">#DEMO_2025</span>
          <h1 className="text-4xl md:text-6xl font-bold squid-text mb-4">
            Experience DegenSquid
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dive into the future of AI-driven gaming. Explore our unique blend of 
            survival mechanics, artificial intelligence, and blockchain rewards.
          </p>
        </motion.div>

        <div className="space-y-32">
          <GameDemo />
          <AIDemo />
          <TokenDemo />
        </div>
      </div>
    </main>
  )
}
