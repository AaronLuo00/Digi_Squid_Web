'use client'

import { motion } from 'framer-motion'

const tokenUtility = [
  {
    title: 'Tournament Entry',
    description: 'Used to participate in weekly tournaments.',
    details: [
      'Entry fee: 100 $DSQD per tournament',
      'Refundable until tournament starts',
      'Added to prize pool'
    ]
  },
  {
    title: 'Reward Currency',
    description: 'Primary currency for tournament rewards and achievements.',
    details: [
      'Tournament prizes',
      'Daily survival rewards',
      'Achievement bonuses',
      'Special event rewards'
    ]
  },
  {
    title: 'Governance',
    description: 'Participate in platform governance decisions.',
    details: [
      'Vote on game parameters',
      'Propose new features',
      'Influence prize structures',
      'Community initiatives'
    ]
  }
]

const tokenomics = [
  {
    title: 'Initial Supply',
    value: '100,000,000 $DSQD',
    details: [
      'Fixed supply, no inflation',
      'Fully diluted at launch',
      'Transparent distribution'
    ]
  },
  {
    title: 'Token Burn',
    value: '10% of fees',
    details: [
      'Tournament fees',
      'Transaction fees',
      'Service fees'
    ]
  },
  {
    title: 'Staking Rewards',
    value: '15% APY',
    details: [
      'Lock period: 7-90 days',
      'Compound rewards',
      'Bonus multipliers'
    ]
  }
]

const vestingSchedule = [
  {
    category: 'Team',
    schedule: [
      { month: 6, percentage: 10 },
      { month: 12, percentage: 20 },
      { month: 18, percentage: 30 },
      { month: 24, percentage: 40 }
    ]
  },
  {
    category: 'Advisors',
    schedule: [
      { month: 3, percentage: 20 },
      { month: 6, percentage: 40 },
      { month: 9, percentage: 70 },
      { month: 12, percentage: 100 }
    ]
  },
  {
    category: 'Community',
    schedule: [
      { month: 1, percentage: 25 },
      { month: 2, percentage: 50 },
      { month: 3, percentage: 75 },
      { month: 4, percentage: 100 }
    ]
  }
]

export default function TokenPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">$DSQD</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          $DSQD Token
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          The native utility token of DigiSquid Games, built on Solana for 
          high-speed, low-cost transactions and seamless gameplay integration.
        </motion.p>
      </div>

      {/* Token Utility */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Token Utility
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tokenUtility.map((utility, index) => (
            <motion.div
              key={utility.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <h3 className="text-xl font-semibold mb-2 squid-text">
                {utility.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {utility.description}
              </p>
              <ul className="space-y-2">
                {utility.details.map((detail, i) => (
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

      {/* Tokenomics */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Tokenomics
        </motion.h2>
        <div className="space-y-6">
          {tokenomics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-squid-pink font-mono">{item.value}</span>
              </div>
              <div className="space-y-2">
                {item.details.map((detail, i) => (
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

      {/* Vesting Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="p-6 border border-gray-800 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">Vesting Schedule</h2>
        <div className="space-y-8">
          {vestingSchedule.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold squid-text">
                {category.category}
              </h3>
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                {category.schedule.map((point) => (
                  <motion.div
                    key={point.month}
                    initial={{ width: 0 }}
                    animate={{ width: `${point.percentage}%` }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute top-0 left-0 h-full bg-squid-pink rounded-full"
                    style={{ opacity: point.percentage / 100 }}
                  />
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                {category.schedule.map((point) => (
                  <div key={point.month} className="text-center">
                    <div>Month {point.month}</div>
                    <div className="text-squid-pink">{point.percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Smart Contract */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Smart Contract</h2>
        <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-300">
{`// DSQD Token Contract (Solana SPL)
{
  "name": "DigiSquid Token",
  "symbol": "DSQD",
  "decimals": 9,
  "total_supply": "100000000000000000",  // 100M with 9 decimals
  "mint_authority": null,  // Fixed supply
  "freeze_authority": null,  // No freeze capability
}`}
          </code>
        </pre>
      </motion.div>
    </div>
  )
}
