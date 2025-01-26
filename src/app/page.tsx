'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import GameShapes from '@/components/decorative/GameShapes'

export default function Home() {
  const features = [
    {
      number: '456',
      title: 'Red Light, Green Light',
      description: 'AI-powered movement prediction system. Test your reflexes against intelligent agents that learn and adapt to player behavior patterns.',
      icon: '🚦',
      tokenReward: '1000 $DSQD',
      players: '234'
    },
    {
      number: '123',
      title: 'Dynamic Team Challenges',
      description: 'Form alliances or compete solo in team-based survival games. Every agent has unique traits that influence their cooperation or betrayal tendencies.',
      icon: '🤝',
      tokenReward: '2000 $DSQD',
      players: '567'
    },
    {
      number: '067',
      title: 'Strategic Resource Management',
      description: 'Manage your in-game resources wisely. Each decision could be the difference between survival and elimination.',
      icon: '💎',
      tokenReward: '1500 $DSQD',
      players: '189'
    },
    {
      number: '218',
      title: 'Adaptive Difficulty System',
      description: 'The game evolves with you. AI agents become more challenging as you progress, creating an ever-increasing test of skill and strategy.',
      icon: '🎯',
      tokenReward: '3000 $DSQD',
      players: '345'
    }
  ]

  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <GameShapes />
      <Header />
      
      {/* Split Screen Hero Section */}
      <section className="min-h-screen pt-20 relative split-section-bg">
        {/* Left Side - Game Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative px-8 py-12 lg:py-24 flex flex-col justify-center items-center lg:items-end">
            <div className="max-w-xl w-full space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="game-number text-xl tracking-widest">GAME #2024</span>
                  <div className="flex-1 h-px bg-squid-pink/30"></div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="text-white block">Welcome to</span>
                  <span className="squid-text block mt-2">DigiSquid</span>
                  <span className="text-white block mt-2">Games</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-gray-400 text-lg">
                  Enter the next generation of AI-driven survival games. 
                  Where strategy meets artificial intelligence, and only the most adaptable survive.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="https://www.digimon.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="engine-credit group"
                  >
                    <span className="game-number text-xs mr-2">※</span>
                    <span className="text-gray-400 group-hover:text-squid-pink transition-colors">
                      Built based on Digimon Engine
                    </span>
                  </a>
                </motion.div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-squid-pink font-mono">Total Prize Pool:</span>
                    <span className="token-amount">7500 $DSQD</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-squid-pink font-mono">Players Online:</span>
                    <span className="text-white font-mono text-xl">1,234</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://github.com/yourusername/digisquid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="squid-button px-8 py-4 rounded-lg text-lg font-semibold group relative inline-flex items-center justify-center"
                >
                  <span className="game-number absolute -top-3 -left-2 opacity-50 group-hover:opacity-100 font-mono">456</span>
                  <span>GitHub Repo</span>
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </a>
                <Link 
                  href="/demo"
                  className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors text-lg relative group inline-block"
                >
                  <span className="game-number absolute -top-3 -left-2 opacity-50 group-hover:opacity-100 font-mono">067</span>
                  Watch Demo
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Game Modes */}
          <div className="relative px-8 py-12 lg:py-24">
            <div className="max-w-xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-squid-pink font-mono text-xl">ACTIVE GAMES</span>
                  <div className="flex-1 h-px bg-squid-pink/30"></div>
                </div>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index + 0.8 }}
                      className="game-card p-6 rounded-xl relative group cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold squid-text truncate">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                            {feature.description}
                          </p>
                          <div className="mt-3 flex items-center space-x-4">
                            <span className="text-squid-pink/70 text-xs font-mono">
                              Players: {feature.players}
                            </span>
                            <span className="token-amount text-sm">
                              {feature.tokenReward}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="game-number font-mono">{feature.number}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-squid-pink text-sm font-mono tracking-wider">ENTER GAME →</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
