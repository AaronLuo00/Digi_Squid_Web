'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tokenFeatures = [
  {
    title: '$DSG Token',
    description: 'The native token powering the DigitalSquid Games ecosystem.',
    details: [
      'Solana SPL Token',
      'Cross-game utility',
      'Tournament entry fees',
      'Alliance staking',
      'Governance rights',
      'Resource trading'
    ],
    href: '/docs/token-economics/token'
  },
  {
    title: 'Reward System',
    description: 'Multi-layered reward mechanisms across all game modes.',
    details: [
      'Tournament prizes',
      'Alliance bonuses',
      'Resource trading fees',
      'Achievement rewards',
      'Staking returns',
      'Referral benefits'
    ],
    href: '/docs/token-economics/rewards'
  }
]

const tokenDistribution = [
  { category: 'Team', percentage: 25, color: '#FF6B6B' },
  { category: 'Advisors & Partners', percentage: 20, color: '#4ECDC4' },
  { category: 'Community & Ecosystem', percentage: 15, color: '#45B7D1' },
  { category: 'Marketing & Operations', percentage: 15, color: '#96CEB4' },
  { category: 'Future Development', percentage: 5, color: '#FFEEAD' },
  { category: 'Public Circulation', percentage: 20, color: '#D4A5A5' }
]

const PieChart = () => {
  let cumulativePercentage = 0
  
  return (
    <svg viewBox="0 0 100 100" className="transform -rotate-90">
      {tokenDistribution.map((item, index) => {
        const startAngle = (cumulativePercentage * 360) / 100
        const endAngle = ((cumulativePercentage + item.percentage) * 360) / 100
        const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180)
        const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180)
        const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
        const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)
        const largeArcFlag = item.percentage > 50 ? 1 : 0

        cumulativePercentage += item.percentage

        return (
          <motion.path
            key={item.category}
            d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
            fill={item.color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="hover:opacity-80 transition-opacity cursor-pointer"
          />
        )
      })}
    </svg>
  )
}

export default function TokenEconomicsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">ECONOMICS</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Token Economics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          $DSG is the native token of DigitalSquid Games, powering our tournament 
          system and reward mechanisms on the Solana blockchain.
        </motion.p>
      </div>

      {/* Token Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-start justify-between p-6 border border-gray-800 rounded-xl"
      >
        <div className="w-64">
          <h2 className="text-2xl font-semibold mb-4">Token Distribution</h2>
          <PieChart />
        </div>
        <div className="flex-1 ml-8 space-y-2">
          {tokenDistribution.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-400">{item.category}</span>
              </div>
              <span className="text-sm font-mono text-squid-pink">
                {item.percentage}%
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Core Components */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Core Components
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tokenFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Link
                href={feature.href}
                className="block h-full p-6 border border-gray-800 rounded-xl hover:border-squid-pink/50 transition-colors group"
              >
                <h3 className="text-xl font-semibold mb-2 squid-text">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
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
    </div>
  )
}
