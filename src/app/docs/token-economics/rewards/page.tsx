'use client'

import { motion } from 'framer-motion'

const rewardTypes = [
  {
    title: 'Tournament Prizes',
    description: 'Primary rewards for tournament performance.',
    tiers: [
      { position: '1st Place', reward: '3,750 $DSQD', color: 'text-yellow-500' },
      { position: '2nd Place', reward: '1,875 $DSQD', color: 'text-gray-300' },
      { position: '3rd Place', reward: '937 $DSQD', color: 'text-amber-600' },
      { position: 'Top 10', reward: '134 $DSQD', color: 'text-gray-400' }
    ]
  },
  {
    title: 'Survival Rewards',
    description: 'Daily rewards for staying alive in tournaments.',
    tiers: [
      { position: 'Day 1', reward: '10 $DSQD', color: 'text-gray-400' },
      { position: 'Day 3', reward: '50 $DSQD', color: 'text-gray-300' },
      { position: 'Day 5', reward: '100 $DSQD', color: 'text-amber-600' },
      { position: 'Day 7', reward: '200 $DSQD', color: 'text-yellow-500' }
    ]
  },
  {
    title: 'Achievement Bonuses',
    description: 'Special rewards for accomplishing specific feats.',
    tiers: [
      { position: 'First Win', reward: '500 $DSQD', color: 'text-yellow-500' },
      { position: 'Perfect Game', reward: '1,000 $DSQD', color: 'text-amber-600' },
      { position: 'Team Victory', reward: '250 $DSQD', color: 'text-gray-300' },
      { position: 'Survival Streak', reward: '300 $DSQD', color: 'text-gray-400' }
    ]
  }
]

const rewardMultipliers = [
  {
    factor: 'Consecutive Participation',
    multipliers: [
      { condition: '3 tournaments', value: '1.1x' },
      { condition: '5 tournaments', value: '1.25x' },
      { condition: '10 tournaments', value: '1.5x' }
    ]
  },
  {
    factor: 'Staking Amount',
    multipliers: [
      { condition: '1,000 $DSQD', value: '1.1x' },
      { condition: '5,000 $DSQD', value: '1.3x' },
      { condition: '10,000 $DSQD', value: '1.5x' }
    ]
  },
  {
    factor: 'Performance History',
    multipliers: [
      { condition: '3 top 10 finishes', value: '1.2x' },
      { condition: '5 top 5 finishes', value: '1.4x' },
      { condition: 'Previous winner', value: '1.6x' }
    ]
  }
]

const rewardFormulas = [
  {
    name: 'Tournament Prize',
    formula: 'Base Prize × Performance Multiplier × Staking Multiplier',
    example: `
// Example calculation
const calculatePrize = (
  baseAmount: number,
  performance: number,
  staking: number
): number => {
  return baseAmount * performance * staking;
}

// First place with 1.5x performance and 1.3x staking
const prize = calculatePrize(3750, 1.5, 1.3);  // 7,312.5 $DSQD`
  },
  {
    name: 'Survival Reward',
    formula: 'Daily Rate × Survival Days × Streak Multiplier',
    example: `
// Example calculation
const calculateSurvival = (
  dailyRate: number,
  days: number,
  streak: number
): number => {
  return dailyRate * days * (1 + (streak * 0.1));
}

// 5 days survival with 3-day streak
const reward = calculateSurvival(10, 5, 3);  // 65 $DSQD`
  }
]

export default function RewardsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">REWARDS</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Reward System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Our comprehensive reward system incentivizes participation, skill, and 
          long-term engagement through various reward mechanisms.
        </motion.p>
      </div>

      {/* Reward Types */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Reward Types
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewardTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <h3 className="text-xl font-semibold mb-2 squid-text">
                {type.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {type.description}
              </p>
              <div className="space-y-3">
                {type.tiers.map((tier) => (
                  <div
                    key={tier.position}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-500">
                      {tier.position}
                    </span>
                    <span className={`text-sm font-mono ${tier.color}`}>
                      {tier.reward}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reward Multipliers */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Reward Multipliers
        </motion.h2>
        <div className="space-y-6">
          {rewardMultipliers.map((factor, index) => (
            <motion.div
              key={factor.factor}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 squid-text">
                {factor.factor}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {factor.multipliers.map((multiplier) => (
                  <div
                    key={multiplier.condition}
                    className="p-4 bg-gray-900/50 rounded-lg"
                  >
                    <div className="text-sm text-gray-400 mb-1">
                      {multiplier.condition}
                    </div>
                    <div className="text-xl text-squid-pink font-mono">
                      {multiplier.value}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reward Formulas */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Reward Calculations
        </motion.h2>
        <div className="space-y-6">
          {rewardFormulas.map((formula, index) => (
            <motion.div
              key={formula.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <h3 className="text-xl font-semibold squid-text">
                {formula.name}
              </h3>
              <div className="p-4 bg-gray-900/50 rounded-lg">
                <code className="text-sm text-squid-pink font-mono">
                  {formula.formula}
                </code>
              </div>
              <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {formula.example}
                </code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
