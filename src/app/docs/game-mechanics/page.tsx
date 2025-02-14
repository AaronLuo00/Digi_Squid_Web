'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const playModes = [
  {
    title: 'Single Play Mode',
    description: 'Challenge AI agents in individual matches anytime.',
    details: [
      'Flexible entry fee ($100-$1000 DSG)',
      'Dynamic prize pool calculation',
      'Instant match creation',
      'One-on-one with AI'
    ],
    href: '/docs/game-mechanics/modes/single-play'
  },
  {
    title: 'Weekly Tournament',
    description: 'Compete in our mega-tournament with 100 players and 100 AI agents.',
    details: [
      '88,000 $DSG prize pool',
      'Multiple tournament stages',
      'Team formation mechanics',
      'Live streaming finals'
    ],
    href: '/docs/game-mechanics/tournament'
  }
]

const gameModes = [
  {
    number: '456',
    title: 'Red Light, Green Light X',
    description: 'Test your reflexes against our advanced AI movement prediction system.',
    details: [
      'Neural network-based movement detection',
      'Dynamic difficulty adaptation',
      'Real-time pattern analysis',
      'Multi-player synchronization'
    ]
  },
  {
    number: '123',
    title: 'Tug of War Alpha',
    description: 'Form alliances and compete in strategic team-based challenges.',
    details: [
      'Dynamic force mechanics',
      'Team coordination system',
      'Real-time strategy adaptation',
      'Alliance management'
    ]
  },
  {
    number: '067',
    title: 'Marble Mayhem',
    description: 'Master resource management with innovative betting mechanics.',
    details: [
      'Dynamic betting system',
      'Real-time interference',
      'Multi-round strategy',
      'Resource optimization'
    ]
  },
  {
    number: '218',
    title: 'Cookie Smash',
    description: 'Strategic shape-cutting challenge with point-based mechanics.',
    details: [
      'Precision cutting system',
      'Speed-accuracy balance',
      'Pattern recognition',
      'Competitive interference'
    ]
  },
  {
    number: '199',
    title: 'Degen Dinner',
    description: 'Complex resource management and alliance formation system.',
    details: [
      'Multi-table dynamics',
      'Resource trading system',
      'Alliance formation',
      'Betrayal mechanics'
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
          DigitalSquid Games offers two distinct ways to play: Single Play Mode for instant matches,
          and Weekly Tournaments for high-stakes competition. Choose your preferred mode and start 
          earning rewards.
        </motion.p>
      </div>

      {/* Play Modes */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Play Modes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {playModes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={mode.href}
                className="block h-full p-6 border border-gray-800 rounded-xl hover:border-squid-pink/50 transition-colors group"
              >
                <h3 className="text-xl font-semibold mb-2 squid-text">{mode.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{mode.description}</p>
                <ul className="space-y-2">
                  {mode.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <span className="text-squid-pink mr-2">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Game Types */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-2xl font-semibold"
        >
          Game Types
        </motion.h2>
        <div className="space-y-6">
          {gameModes.map((mode, index) => (
            <motion.div
              key={mode.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
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
        transition={{ delay: 1.2 }}
        className="flex space-x-4"
      >
        <Link
          href="/docs/game-mechanics/modes/single-play"
          className="squid-button px-4 py-2 rounded-lg text-sm inline-flex items-center group"
        >
          Try Single Play Mode
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </Link>
        <Link
          href="/docs/game-mechanics/tournament"
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          Join Weekly Tournament
        </Link>
      </motion.div>
    </div>
  )
}
