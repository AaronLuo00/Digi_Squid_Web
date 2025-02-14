'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const matchTypes = [
  {
    title: 'Solo vs AI',
    description: 'Challenge a single AI agent in a one-on-one match.',
    details: [
      'One human player',
      'One advanced AI opponent',
      'Customizable AI difficulty',
      'Direct competition'
    ]
  },
  {
    title: 'Team Match',
    description: 'Form a team with friends or AI allies to compete together.',
    details: [
      'Multiple human players (2-4)',
      'Balanced AI team matching',
      'Dynamic team coordination',
      'Resource sharing system'
    ]
  },
  {
    title: 'Mixed Battle',
    description: 'Join a mixed lobby of human players and AI agents.',
    details: [
      'Up to 6 total participants',
      'Flexible team formation',
      'Cross-team alliances',
      'Dynamic difficulty scaling'
    ]
  }
]

const matchStats = [
  { label: 'Entry Fee Range', value: '$100-$1000 DSG' },
  { label: 'Match Duration', value: '15-30 mins' },
  { label: 'AI Opponents', value: '1-5' },
  { label: 'Platform Fee', value: '5-10%' }
]

const systemFeatures = [
  {
    title: 'Matchmaking System',
    description: 'Advanced matchmaking algorithm that ensures balanced and engaging matches.',
    details: [
      'Skill-based player matching',
      'Dynamic AI difficulty adjustment',
      'Team balance optimization',
      'Regional server selection'
    ]
  },
  {
    title: 'Prize Pool Calculation',
    description: 'Dynamic prize pool system with variable platform fee based on game conditions.',
    details: [
      'Base pool = Total entry fees',
      'Platform fee: 5-10%',
      'Fee varies with AI count',
      'Fee adjusts with popularity'
    ]
  },
  {
    title: 'Team Formation',
    description: 'Flexible team formation options for different play styles.',
    details: [
      'Human-only teams (2-4 players)',
      'Mixed human-AI teams',
      'Dynamic role assignment',
      'In-game communication system'
    ]
  }
]

export default function SinglePlayPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">SINGLE_PLAY</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Single Play Mode
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Experience DigitalSquid games in flexible formats. Play solo against AI, team up with
          friends, or join mixed battles with both human players and AI agents. Choose your 
          entry fee and compete for dynamic prize pools.
        </motion.p>
      </div>

      {/* Match Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 border border-squid-pink/20 rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Match Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {matchStats.map((stat) => (
            <div
              key={stat.label}
              className="text-center space-y-2"
            >
              <div className="text-2xl font-mono text-squid-pink">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Match Types */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold"
        >
          Match Types
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {matchTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2 squid-text">{type.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{type.description}</p>
              <ul className="space-y-2">
                {type.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-squid-pink mr-2">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Features */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-2xl font-semibold"
        >
          System Features
        </motion.h2>
        <div className="space-y-6">
          {systemFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2 squid-text">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feature.details.map((detail, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-squid-pink mr-2">→</span>
                    {detail}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Prize Pool Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Prize Pool Example</h2>
        <p className="text-gray-400">
          The prize pool is calculated based on the total entry fees, with a dynamic platform fee 
          that varies according to the number of AI agents and game popularity. Higher AI count 
          and game popularity may result in slightly higher platform fees.
        </p>
        <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-300">
{`Example Calculation:
4 players × $500 DSG entry fee = $2,000 DSG total fees
Platform Fee: 7.5% (based on 3 AI agents & game popularity)
Prize Pool = $2,000 × (1 - 0.075) = $1,850 DSG

Distribution:
1st Place: 50% = $925 DSG
2nd Place: 30% = $555 DSG
3rd Place: 20% = $370 DSG`}
          </code>
        </pre>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3 }}
        className="flex space-x-4"
      >
        <Link
          href="/docs/ai-system/agents"
          className="squid-button px-4 py-2 rounded-lg text-sm inline-flex items-center group"
        >
          Learn About AI Agents
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </Link>
        <Link
          href="/docs/game-mechanics/tournament"
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          Explore Tournament Mode
        </Link>
      </motion.div>
    </div>
  )
}
