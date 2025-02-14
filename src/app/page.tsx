'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import CyberBackground from '@/components/decorative/CyberBackground'
import FloatingTokens from '@/components/decorative/FloatingTokens'
import RedLightGreenLightIcon from '@/components/icons/RedLightGreenLightIcon'
import TugOfWarIcon from '@/components/icons/TugOfWarIcon'
import MarbleIcon from '@/components/icons/MarbleIcon'
import CookieIcon from '@/components/icons/CookieIcon'
import DinnerIcon from '@/components/icons/DinnerIcon'

export default function Home() {
  const features = [
    {
      number: '456',
      title: 'Red Light, Green Light X',
      description: 'Test your reflexes against AI agents that learn and adapt to player patterns. Real-time movement prediction and dynamic difficulty adjustment.',
      icon: RedLightGreenLightIcon,
      tokenReward: '1000 $DSG',
      players: 'Registration Open',
      entryFee: '$0 - $1000 DSG'
    },
    {
      number: '123',
      title: 'Tug of War ALPHA',
      description: 'Form alliances and compete in team-based challenges. Each player\'s decision affects the entire team\'s outcome. Choose between cooperation and betrayal.',
      icon: TugOfWarIcon,
      tokenReward: '2000 $DSG',
      players: 'Registration Open',
      entryFee: '$0 - $1000 DSG'
    },
    {
      number: '067',
      title: 'Marble Mayhem',
      description: 'Master the art of resource management with our innovative point-based betting system. Multiple strategies and real-time interference mechanics.',
      icon: MarbleIcon,
      tokenReward: '1500 $DSG',
      players: 'Registration Open',
      entryFee: '$0 - $1000 DSG'
    },
    {
      number: '218',
      title: 'Cookie Smash',
      description: 'Strategic shape-cutting challenge with point-based actions. Balance between accuracy and speed while countering opponent interference.',
      icon: CookieIcon,
      tokenReward: '1800 $DSG',
      players: 'Registration Open',
      entryFee: '$0 - $1000 DSG'
    },
    {
      number: '199',
      title: 'Digital Dinner',
      description: 'Complex resource management and alliance system. Form temporary or strategic alliances, trade resources, and participate in critical voting phases.',
      icon: DinnerIcon,
      tokenReward: '2500 $DSG',
      players: 'Registration Open',
      entryFee: '$0 - $1000 DSG'
    }
  ]

  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <CyberBackground />
      <FloatingTokens />
      <Header />
      
      {/* Split Screen Hero Section */}
      <section className="min-h-screen pt-16 sm:pt-20 relative split-section-bg">
        {/* Left Side - Game Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative px-4 sm:px-8 py-8 sm:py-12 lg:py-24 flex flex-col justify-center items-center lg:items-end">
            <div className="max-w-xl w-full space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <span className="game-number text-xl tracking-widest">GAME #2024</span>
                  <div className="flex-1 h-px bg-squid-pink/30"></div>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                  <span className="text-white block">Welcome to</span>
                  <span className="squid-text block mt-2">DigitalSquid</span>
                  <span className="text-white block mt-2">Games</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-gray-400 text-base sm:text-lg">
                  Enter the next generation of AI-driven survival games. 
                  Where strategy meets artificial intelligence, and only the most adaptable survive.
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="https://www.digital.tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="engine-credit group"
                  >
                    <span className="game-number text-xs mr-2">※</span>
                    <span className="text-gray-400 group-hover:text-squid-pink transition-colors">
                      Built based on Digital Engine
                    </span>
                  </a>
                </motion.div>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-squid-pink font-mono">Total Prize Pool:</span>
                    <span className="token-amount">88000 $DSG</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-squid-pink font-mono">Players Online:</span>
                    <span className="text-white font-mono text-xl">Registration Phase</span>
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
                  href="https://github.com/CohumanSpace/digital-engine"
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
          <div className="relative px-4 sm:px-8 py-8 sm:py-12 lg:py-24">
            <div className="max-w-xl mx-auto space-y-6 sm:space-y-8">
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
                      className="game-card p-4 sm:p-6 rounded-xl relative group cursor-pointer hover:scale-[1.02] transition-transform"
                    >
                      <Link 
                        href={`/docs/games/${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="block"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                            <feature.icon size={40} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold squid-text truncate">
                              {feature.title}
                            </h3>
                            <p className="text-gray-400 mt-2 text-sm line-clamp-2">
                              {feature.description}
                            </p>
                            <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-gray-400 text-xs font-mono">
                                Players: {feature.players}
                              </span>
                              <span className="text-squid-pink/70 text-xs font-mono">
                                Entry Fee: {feature.entryFee}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="game-number font-mono">{feature.number}</span>
                          </div>
                        </div>
                        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-squid-pink text-sm font-mono tracking-wider">ENTER GAME →</span>
                        </div>
                      </Link>
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
