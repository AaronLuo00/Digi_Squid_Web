'use client'

import { motion } from 'framer-motion'

const tokenUtility = [
  {
    title: 'Tournament Entry',
    description: 'Used to participate in weekly tournaments.',
    details: [
      'Entry fee: 100 $DSG per tournament',
      'Refundable until tournament starts',
      'Added to prize pool',
      'Special event discounts'
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
  },
  {
    title: 'Free Entry Tickets',
    description: 'Stake tokens to earn free tournament entry tickets.',
    details: [
      'Weekly ticket rewards',
      'Special event entries',
      'Bonus ticket chances',
      'Tournament discounts'
    ]
  },
  {
    title: 'Game Asset Trading',
    description: 'Trade in-game assets and items using $DSG.',
    details: [
      'Marketplace listings',
      'Asset auctions',
      'Cross-game trading',
      'Item crafting'
    ]
  },
  {
    title: 'Community Rewards',
    description: 'Earn tokens through community participation.',
    details: [
      'Content creation',
      'Bug reporting',
      'Community moderation',
      'Event organization'
    ]
  }
]

const tokenomics = [
  {
    title: 'Initial Supply',
    value: '1,000,000,000 $DSG',
    details: [
      'Fixed supply, no inflation',
      'Fully diluted at launch',
      'Transparent distribution',
      'Verifiable on-chain'
    ]
  },
  {
    title: 'Token Burn',
    value: '10% of fees',
    details: [
      'Tournament fees',
      'Transaction fees',
      'Service fees',
      'Marketplace fees'
    ]
  },
  {
    title: 'Staking Rewards',
    value: '15% APY',
    details: [
      'Lock period: 7-90 days',
      'Compound rewards',
      'Bonus multipliers',
      'Free tournament tickets'
    ]
  }
]

const tokenDistribution = [
  {
    category: 'Core Team (25%)',
    details: [
      'Development team',
      'Operations team',
      '12 months lock-up',
      '200,000,000 $DSG'
    ]
  },
  {
    category: 'Advisors & Partners (20%)',
    details: [
      'Technical advisors',
      'Game design advisors',
      'Strategic partners',
      '9 months lock-up',
      '160,000,000 $DSG'
    ]
  },
  {
    category: 'Community & Ecosystem (15%)',
    details: [
      'Community building',
      'Ecosystem development',
      'Event rewards',
      '6 months lock-up',
      '120,000,000 $DSG'
    ]
  },
  {
    category: 'Marketing & Operations (15%)',
    details: [
      'Marketing campaigns',
      'Operational costs',
      'Liquidity management',
      '6 months lock-up',
      '120,000,000 $DSG'
    ]
  },
  {
    category: 'Future Development (5%)',
    details: [
      'Product development',
      'Technical upgrades',
      'Emergency reserve',
      '12 months lock-up',
      '40,000,000 $DSG'
    ]
  },
  {
    category: 'Public Circulation (20%)',
    details: [
      'Initial liquidity',
      'Public trading',
      'No lock-up',
      '200,000,000 $DSG'
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
          <span className="game-number text-xl">$DSG</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          $DSG Token
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

      {/* Token Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="p-6 border border-gray-800 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">Token Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tokenDistribution.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-gray-900/50 rounded-lg space-y-3"
            >
              <h3 className="text-lg font-semibold squid-text">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-squid-pink mr-2">→</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}
