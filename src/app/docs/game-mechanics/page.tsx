'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const gameModes = [
  {
    number: '456',
    title: 'Red Light, Green Light',
    description: 'Test your reflexes against our AI movement prediction system.',
    details: [
      'AI-powered movement detection',
      'Progressive difficulty scaling',
      'Real-time reaction analysis'
    ]
  },
  {
    number: '123',
    title: 'Tug of War',
    description: 'Form alliances or compete solo in team-based challenges.',
    details: [
      'Dynamic team formation',
      'Strategic alliance mechanics',
      'Betrayal risk assessment'
    ]
  },
  {
    number: '067',
    title: 'Marble Game',
    description: 'Strategic resource management and decision making.',
    details: [
      'Resource optimization',
      'Risk-reward calculations',
      'Multi-round strategy'
    ]
  }
]

export default function GameMechanicsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">MECHANICS</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Game Mechanics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          DigiSquid Games features multiple game modes, each with unique mechanics and 
          strategies. Master these games to survive and earn rewards in our weekly tournaments.
        </motion.p>
      </div>

      {/* Tournament Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 border border-squid-pink/20 rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Tournament Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="text-2xl font-mono text-squid-pink">100</div>
            <div className="text-sm text-gray-400">Human Players</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-mono text-squid-pink">100</div>
            <div className="text-sm text-gray-400">AI Agents</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-mono text-squid-pink">7,500</div>
            <div className="text-sm text-gray-400">$DSQD Prize Pool</div>
          </div>
        </div>
      </motion.div>

      {/* Game Modes */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold"
        >
          Game Modes
        </motion.h2>
        <div className="space-y-6">
          {gameModes.map((mode, index) => (
            <motion.div
              key={mode.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl hover:border-squid-pink/50 transition-colors group"
            >
              <div className="flex items-start space-x-6">
                <div className="game-number text-xl">{mode.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 squid-text">{mode.title}</h3>
                  <p className="text-gray-400 mb-4">{mode.description}</p>
                  <ul className="space-y-2">
                    {mode.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <span className="text-squid-pink mr-2">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex space-x-4"
      >
        <Link
          href="/docs/game-mechanics/tournament"
          className="squid-button px-4 py-2 rounded-lg text-sm inline-flex items-center group"
        >
          Learn Tournament System
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </Link>
        <Link
          href="/docs/game-mechanics/modes"
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          Explore Game Modes
        </Link>
      </motion.div>
    </div>
  )
}
