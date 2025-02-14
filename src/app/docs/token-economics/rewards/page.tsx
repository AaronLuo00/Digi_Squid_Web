'use client'

import { motion } from 'framer-motion'

const rewardTypes = [
  {
    title: 'Single Play Rewards',
    description: 'Rewards for individual and team matches.',
    tiers: [
      { position: 'Solo Victory', reward: '95% of Prize Pool', color: 'text-yellow-500' },
      { position: 'Team Victory', reward: '90% Split', color: 'text-gray-300' },
      { position: 'Mixed Battle Win', reward: '92% Split', color: 'text-amber-600' },
      { position: 'Runner-up', reward: 'Proportional Share', color: 'text-gray-400' }
    ]
  },
  {
    title: 'Tournament Rewards',
    description: 'Weekly tournament prize distribution.',
    tiers: [
      { position: '1st Place', reward: '44,000 $DSG', color: 'text-yellow-500' },
      { position: '2nd Place', reward: '22,000 $DSG', color: 'text-gray-300' },
      { position: '3rd Place', reward: '11,000 $DSG', color: 'text-amber-600' },
      { position: '4th-10th', reward: '1,571 $DSG each', color: 'text-gray-400' }
    ]
  },
  {
    title: 'Achievement Bonuses',
    description: 'Special rewards for accomplishing specific feats.',
    tiers: [
      { position: 'Perfect Game', reward: '1,000 $DSG', color: 'text-yellow-500' },
      { position: 'Win Streak (5)', reward: '500 $DSG', color: 'text-amber-600' },
      { position: 'Team MVP', reward: '250 $DSG', color: 'text-gray-300' },
      { position: 'AI Master', reward: '300 $DSG', color: 'text-gray-400' }
    ]
  }
]

const rewardMultipliers = [
  {
    factor: 'AI Difficulty',
    multipliers: [
      { condition: 'Basic AI', value: '1.0x' },
      { condition: 'Advanced AI', value: '1.2x' },
      { condition: 'Expert AI', value: '1.5x' }
    ]
  },
  {
    factor: 'Staking Amount',
    multipliers: [
      { condition: '1,000 $DSG', value: '1.1x' },
      { condition: '5,000 $DSG', value: '1.3x' },
      { condition: '10,000 $DSG', value: '1.5x' }
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
    name: 'Single Play Prize',
    formula: 'Total Entry Fees × (1 - Platform Fee)',
    example: `
// Example calculation
const calculateSinglePlayPrize = (
  entryFee: number,
  players: number,
  platformFee: number
): number => {
  const totalFees = entryFee * players;
  return totalFees * (1 - platformFee);
}

// 4 players, $500 DSG entry, 7.5% fee
const prize = calculateSinglePlayPrize(500, 4, 0.075);  // 1,850 $DSG

// Distribution example for team game
const teamDistribution = {
  first: prize * 0.5,    // 925 $DSG
  second: prize * 0.3,   // 555 $DSG
  third: prize * 0.2     // 370 $DSG
};`
  },
  {
    name: 'Tournament Prize',
    formula: 'Fixed Prize Pool with Position-based Distribution',
    example: `
// Example calculation
const calculateTournamentPrize = (
  position: number,
  prizePool: number = 88000
): number => {
  const distribution = {
    1: 0.5,    // 50% for 1st = 44,000 $DSG
    2: 0.25,   // 25% for 2nd = 22,000 $DSG
    3: 0.125,  // 12.5% for 3rd = 11,000 $DSG
    other: 0.125 / 7  // ~1.8% each for 4th-10th = 1,571 $DSG
  };
  
  return prizePool * (position <= 3 
    ? distribution[position] 
    : (position <= 10 ? distribution.other : 0));
}`
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
          DigitalSquid Games features two main reward systems: Single Play rewards based on entry fees
          and platform fees, and Tournament rewards with fixed prize pools. Both systems are enhanced 
          by achievement bonuses and multipliers.
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
