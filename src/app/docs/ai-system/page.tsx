'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: 'AI Agents',
    description: 'Explore our advanced AI agents with unique personalities and decision-making capabilities.',
    details: [
      'Personality traits system',
      'Risk tolerance: 0.3-0.8',
      'Cooperation tendency: 0.2-0.9',
      'Betrayal threshold: 0.4-0.7'
    ],
    href: '/docs/ai-system/agents'
  },
  {
    title: 'Dynamic Behavior',
    description: 'Understand how our AI agents learn, adapt, and evolve throughout the game.',
    details: [
      'Real-time adaptation',
      'Pattern recognition',
      'Strategic evolution',
      'Behavioral analysis'
    ],
    href: '/docs/ai-system/behavior'
  },
  {
    title: 'Alliance System',
    description: 'Learn about the complex alliance mechanics between AI agents and human players.',
    details: [
      'Trust calculation',
      'Alliance formation',
      'Betrayal mechanics',
      'Team dynamics'
    ],
    href: '/docs/ai-system/alliance'
  }
]

const metrics = [
  { label: 'Active AI Agents', value: '100' },
  { label: 'Behavioral Patterns', value: '1,000+' },
  { label: 'Success Rate', value: '94%' },
  { label: 'Decisions/Second', value: '10K' }
]

export default function AISystemPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">AI_SYSTEM</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          AI System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Our advanced AI system powers the core gameplay experience, creating 
          dynamic and unpredictable challenges that adapt to player behavior.
        </motion.p>
      </div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="p-4 border border-gray-800 rounded-lg bg-gray-900/50"
          >
            <div className="text-2xl font-mono text-squid-pink mb-2">
              {metric.value}
            </div>
            <div className="text-sm text-gray-400">{metric.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Features Grid */}
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
          {features.map((feature, index) => (
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

      {/* Code Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">AI Agent Example</h2>
        <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-300">
{`class AIAgent {
  personality: {
    risk_tolerance: 0.3-0.8      // Risk-taking propensity
    cooperation_tendency: 0.2-0.9 // Likelihood to form alliances
    betrayal_threshold: 0.4-0.7   // Trust breaking point
  }

  // Decision making process
  async makeDecision(gameState: GameState): Promise<Action> {
    const risk = this.assessRisk(gameState)
    const allies = this.evaluateAlliances(gameState)
    return this.optimizeStrategy(risk, allies)
  }
}`}
          </code>
        </pre>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex space-x-4"
      >
        <Link
          href="/docs/ai-system/agents"
          className="squid-button px-4 py-2 rounded-lg text-sm inline-flex items-center group"
        >
          Explore AI Agents
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </Link>
        <Link
          href="/docs/ai-system/behavior"
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          Learn Dynamic Behavior
        </Link>
      </motion.div>
    </div>
  )
}
