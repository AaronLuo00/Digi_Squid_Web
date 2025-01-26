'use client'

import { motion } from 'framer-motion'

const personalityTraits = [
  {
    trait: 'Risk Tolerance',
    range: '0.3 - 0.8',
    description: 'Determines how likely an agent is to take risky actions.',
    effects: [
      'Higher values lead to more aggressive gameplay',
      'Affects decision-making in critical situations',
      'Influences resource management strategy'
    ]
  },
  {
    trait: 'Cooperation Tendency',
    range: '0.2 - 0.9',
    description: 'Defines the likelihood of forming alliances with other players.',
    effects: [
      'Higher values promote team formation',
      'Affects trust building rate',
      'Influences communication patterns'
    ]
  },
  {
    trait: 'Betrayal Threshold',
    range: '0.4 - 0.7',
    description: 'The point at which an agent might break existing alliances.',
    effects: [
      'Lower values indicate higher loyalty',
      'Affected by game progression',
      'Dynamic based on alliance performance'
    ]
  }
]

const behaviorExamples = [
  {
    type: 'Aggressive',
    traits: {
      risk: '0.7-0.8',
      coop: '0.2-0.4',
      betrayal: '0.4-0.5'
    },
    description: 'Prioritizes high-risk, high-reward strategies with minimal alliance formation.'
  },
  {
    type: 'Diplomatic',
    traits: {
      risk: '0.3-0.5',
      coop: '0.7-0.9',
      betrayal: '0.6-0.7'
    },
    description: 'Forms strong alliances but may betray when strategically advantageous.'
  },
  {
    type: 'Balanced',
    traits: {
      risk: '0.5-0.6',
      coop: '0.5-0.7',
      betrayal: '0.5-0.6'
    },
    description: 'Adapts strategy based on game state and player interactions.'
  }
]

export default function AIAgentsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">AGENTS</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          AI Agents
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Each AI agent is unique, with distinct personality traits that influence 
          their decision-making process and interaction patterns.
        </motion.p>
      </div>

      {/* Personality Traits */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Personality Traits
        </motion.h2>
        <div className="space-y-6">
          {personalityTraits.map((trait, index) => (
            <motion.div
              key={trait.trait}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold squid-text">{trait.trait}</h3>
                <span className="game-number text-xl">{trait.range}</span>
              </div>
              <p className="text-gray-400">{trait.description}</p>
              <ul className="space-y-2">
                {trait.effects.map((effect, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-squid-pink mr-2">→</span>
                    {effect}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Behavior Examples */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Behavior Examples
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {behaviorExamples.map((example, index) => (
            <motion.div
              key={example.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <h3 className="text-lg font-semibold mb-4 squid-text">
                {example.type}
              </h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Risk:</span>
                  <span className="text-squid-pink">{example.traits.risk}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cooperation:</span>
                  <span className="text-squid-pink">{example.traits.coop}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Betrayal:</span>
                  <span className="text-squid-pink">{example.traits.betrayal}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">{example.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Example */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Implementation Example</h2>
        <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm text-gray-300">
{`interface Personality {
  risk_tolerance: number     // Range: 0.3-0.8
  cooperation_tendency: number // Range: 0.2-0.9
  betrayal_threshold: number  // Range: 0.4-0.7
}

class AIAgent {
  personality: Personality
  allies: Set<Player>
  trust_levels: Map<Player, number>

  constructor() {
    this.personality = {
      risk_tolerance: 0.3 + Math.random() * 0.5,
      cooperation_tendency: 0.2 + Math.random() * 0.7,
      betrayal_threshold: 0.4 + Math.random() * 0.3
    }
  }

  evaluateAlliance(player: Player): boolean {
    const trust = this.trust_levels.get(player) || 0
    return trust > this.personality.betrayal_threshold
  }
}`}
          </code>
        </pre>
      </motion.div>
    </div>
  )
}
