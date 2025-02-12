'use client'

import { motion } from 'framer-motion'

const tournamentStages = [
  {
    stage: 1,
    name: 'Qualification',
    description: 'Players must survive initial challenges to qualify for the main tournament.',
    details: [
      'Top 100 players qualify',
      'AI difficulty: Moderate',
      'Duration: 24 hours',
      'Entry fee: 100 $DSG'
    ]
  },
  {
    stage: 2,
    name: 'Group Stage',
    description: 'Qualified players are divided into groups to compete in various game modes.',
    details: [
      '10 groups of 20 players',
      'AI difficulty: High',
      'Duration: 48 hours',
      'Top 5 from each group advance'
    ]
  },
  {
    stage: 3,
    name: 'Finals',
    description: 'The ultimate test of skill, strategy, and survival.',
    details: [
      '50 players compete',
      'AI difficulty: Maximum',
      'Duration: 24 hours',
      'Winner takes 50% of prize pool'
    ]
  }
]

const rewardStructure = [
  { position: '1st', reward: '44,000 $DSG', color: 'text-yellow-500' },
  { position: '2nd', reward: '22,000 $DSG', color: 'text-gray-300' },
  { position: '3rd', reward: '11,000 $DSG', color: 'text-amber-600' },
  { position: '4th-10th', reward: '1,571 $DSG each', color: 'text-gray-400' }
]

const tournamentStats = [
  { label: 'Prize Pool', value: '88,000 $DSG' },
  { label: 'Human Players', value: '100' },
  { label: 'AI Agents', value: '100' },
  { label: 'Duration', value: '4 Days' }
]

export default function TournamentPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">TOURNAMENT</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Weekly Tournament
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Join our weekly mega-tournament where 100 human players compete against 100 advanced AI agents 
          for an impressive prize pool of 88,000 $DSG. Experience the ultimate test of skill and strategy 
          in this high-stakes competition.
        </motion.p>
      </div>

      {/* Tournament Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-6 border border-squid-pink/20 rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Tournament Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tournamentStats.map((stat) => (
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

      {/* Tournament Stages */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Tournament Stages
        </motion.h2>
        <div className="space-y-6">
          {tournamentStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="relative p-6 border border-gray-800 rounded-xl"
            >
              <div className="absolute -top-3 -left-2">
                <span className="game-number text-xl">STAGE_{stage.stage}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2 squid-text">{stage.name}</h3>
                <p className="text-gray-400 mb-4">{stage.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stage.details.map((detail, i) => (
                    <div key={i} className="text-sm text-gray-500">
                      <span className="text-squid-pink mr-2">→</span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reward Structure */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="p-6 border border-squid-pink/20 rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <h2 className="text-xl font-semibold mb-6">Reward Structure</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {rewardStructure.map((reward) => (
            <div key={reward.position} className="text-center space-y-2">
              <div className={`text-lg font-semibold ${reward.color}`}>
                {reward.position}
              </div>
              <div className="text-sm text-gray-400">{reward.reward}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Important Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Important Notes</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Tournaments start every Monday at 00:00 UTC</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Entry fees are non-refundable and go directly to the prize pool</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>AI difficulty increases progressively throughout each stage</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Players must maintain active participation to prevent elimination</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
