'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const tokenMetrics = [
  {
    label: 'Total Supply',
    value: '100M',
    description: 'Maximum $DSQD tokens',
    change: '+0%'
  },
  {
    label: 'Circulating Supply',
    value: '45M',
    description: 'Currently in circulation',
    change: '+2.5%'
  },
  {
    label: 'Staked Amount',
    value: '30M',
    description: 'Locked in tournaments',
    change: '+5.8%'
  },
  {
    label: 'Trading Volume',
    value: '2.5M',
    description: '24h volume',
    change: '+12.3%'
  }
]

const tokenFeatures = [
  {
    title: '$DSQD Token',
    description: 'The native token powering the DigiSquid Games ecosystem.',
    details: [
      'Solana SPL Token',
      'Tournament entry fees',
      'Reward distribution',
      'Governance rights'
    ],
    href: '/docs/token-economics/token'
  },
  {
    title: 'Reward System',
    description: 'Dynamic reward mechanisms for tournament participation and victories.',
    details: [
      'Tournament prizes',
      'Survival rewards',
      'Achievement bonuses',
      'Staking returns'
    ],
    href: '/docs/token-economics/rewards'
  },
  {
    title: 'Economy Metrics',
    description: 'Real-time analytics and insights into the DigiSquid economy.',
    details: [
      'Market analysis',
      'User statistics',
      'Transaction data',
      'Growth metrics'
    ],
    href: '/docs/token-economics/metrics'
  }
]

const tokenDistribution = [
  { category: 'Tournament Rewards', percentage: 40 },
  { category: 'Community Treasury', percentage: 25 },
  { category: 'Team & Development', percentage: 20 },
  { category: 'Marketing', percentage: 10 },
  { category: 'Advisors', percentage: 5 }
]

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
          $DSQD is the native token of DigiSquid Games, powering our tournament 
          system and reward mechanisms on the Solana blockchain.
        </motion.p>
      </div>

      {/* Token Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        {tokenMetrics.map((metric) => (
          <div
            key={metric.label}
            className="p-4 border border-gray-800 rounded-lg bg-gray-900/50"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-400">{metric.label}</span>
              <span className={`text-xs ${
                metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {metric.change}
              </span>
            </div>
            <div className="text-2xl font-mono text-squid-pink mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-gray-500">{metric.description}</div>
          </div>
        ))}
      </motion.div>

      {/* Token Features */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-semibold"
        >
          Core Components
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tokenFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
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

      {/* Token Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-6 border border-gray-800 rounded-xl space-y-6"
      >
        <h2 className="text-2xl font-semibold">Token Distribution</h2>
        <div className="space-y-4">
          {tokenDistribution.map((item) => (
            <div key={item.category} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">{item.category}</span>
                <span className="text-squid-pink font-mono">{item.percentage}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.percentage}%` }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="h-full bg-squid-pink rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Contract Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Contract Information</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Token Address:</span>
            <code className="text-sm bg-gray-900/50 px-3 py-1 rounded-lg text-squid-pink">
              DSQD...xyz789
            </code>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Token Standard:</span>
            <span className="text-sm text-gray-300">Solana SPL Token</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Decimals:</span>
            <span className="text-sm text-gray-300">9</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
