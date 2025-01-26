'use client'

import { motion } from 'framer-motion'

const growthMetrics = [
  {
    title: 'User Growth',
    current: '12,345',
    change: '+25.4%',
    timeframe: 'Last 30 days',
    stats: [
      { label: 'New Users', value: '3,456' },
      { label: 'Active Users', value: '8,901' },
      { label: 'Retention Rate', value: '76%' }
    ]
  },
  {
    title: 'Tournament Activity',
    current: '234',
    change: '+15.7%',
    timeframe: 'Last 30 days',
    stats: [
      { label: 'Total Games', value: '1,234' },
      { label: 'Avg Players', value: '156' },
      { label: 'Completion Rate', value: '92%' }
    ]
  },
  {
    title: 'Token Metrics',
    current: '7.5M',
    change: '+32.1%',
    timeframe: 'Last 30 days',
    stats: [
      { label: 'Trading Volume', value: '2.5M' },
      { label: 'Holders', value: '5,678' },
      { label: 'Staked Amount', value: '30M' }
    ]
  }
]

const economicIndicators = [
  {
    category: 'Token Velocity',
    metrics: [
      {
        name: 'Transaction Rate',
        value: '450/hour',
        trend: 'increasing',
        description: 'Average number of token transfers per hour'
      },
      {
        name: 'Holding Period',
        value: '45 days',
        trend: 'stable',
        description: 'Average duration tokens are held'
      },
      {
        name: 'Circulation Speed',
        value: '0.8x/day',
        trend: 'decreasing',
        description: 'Rate at which tokens change hands'
      }
    ]
  },
  {
    category: 'Market Dynamics',
    metrics: [
      {
        name: 'Liquidity Depth',
        value: '$2.5M',
        trend: 'increasing',
        description: 'Total value in liquidity pools'
      },
      {
        name: 'Price Impact',
        value: '0.2%',
        trend: 'stable',
        description: 'Average price impact per $10k trade'
      },
      {
        name: 'Volume/MCap',
        value: '0.15',
        trend: 'increasing',
        description: 'Daily volume to market cap ratio'
      }
    ]
  },
  {
    category: 'Ecosystem Health',
    metrics: [
      {
        name: 'Active Wallets',
        value: '8,901',
        trend: 'increasing',
        description: 'Unique wallets with activity in last 7 days'
      },
      {
        name: 'Stake Ratio',
        value: '45%',
        trend: 'stable',
        description: 'Percentage of supply being staked'
      },
      {
        name: 'Network Growth',
        value: '+5.4%',
        trend: 'increasing',
        description: 'Weekly growth in unique addresses'
      }
    ]
  }
]

const dataPoints = [
  {
    title: 'Transaction Analysis',
    description: 'Key patterns in token movement and usage.',
    code: `
// Transaction volume analysis
const analyzeVolume = (
  transactions: Transaction[]
): VolumeMetrics => {
  return {
    daily: calculateDailyVolume(transactions),
    average: calculateAverage(transactions),
    peaks: identifyPeaks(transactions),
    trends: analyzeTrends(transactions)
  };
}`
  },
  {
    title: 'User Behavior',
    description: 'Patterns in user interaction with the token.',
    code: `
// User behavior analysis
const analyzeUsers = (
  actions: UserAction[]
): UserMetrics => {
  return {
    retention: calculateRetention(actions),
    engagement: measureEngagement(actions),
    patterns: identifyPatterns(actions),
    segments: segmentUsers(actions)
  };
}`
  },
  {
    title: 'Economic Health',
    description: 'Overall ecosystem health indicators.',
    code: `
// Economic health indicators
const analyzeHealth = (
  metrics: EconomicMetrics
): HealthScore => {
  return {
    liquidity: assessLiquidity(metrics),
    stability: measureStability(metrics),
    growth: calculateGrowth(metrics),
    sustainability: evaluateSustainability(metrics)
  };
}`
  }
]

export default function MetricsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">METRICS</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Economy Metrics
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Real-time analytics and insights into the DigiSquid Games economy, 
          tracking growth, engagement, and token metrics.
        </motion.p>
      </div>

      {/* Growth Metrics */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Growth Metrics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {growthMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold squid-text">
                  {metric.title}
                </h3>
                <span className={`text-sm ${
                  metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-mono text-squid-pink mb-2">
                {metric.current}
              </div>
              <div className="text-xs text-gray-500 mb-4">
                {metric.timeframe}
              </div>
              <div className="space-y-2">
                {metric.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm text-gray-400">{stat.label}</span>
                    <span className="text-sm text-gray-300">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Economic Indicators */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Economic Indicators
        </motion.h2>
        <div className="space-y-6">
          {economicIndicators.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4 squid-text">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.metrics.map((metric) => (
                  <div
                    key={metric.name}
                    className="p-4 bg-gray-900/50 rounded-lg space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-300">
                        {metric.name}
                      </span>
                      <span className={`text-xs ${
                        metric.trend === 'increasing' ? 'text-green-500' :
                        metric.trend === 'decreasing' ? 'text-red-500' :
                        'text-gray-400'
                      }`}>
                        {metric.trend}
                      </span>
                    </div>
                    <div className="text-xl text-squid-pink font-mono">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data Analysis */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Data Analysis
        </motion.h2>
        <div className="space-y-6">
          {dataPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <div className="space-y-2">
                <h3 className="text-xl font-semibold squid-text">
                  {point.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {point.description}
                </p>
              </div>
              <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {point.code}
                </code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
