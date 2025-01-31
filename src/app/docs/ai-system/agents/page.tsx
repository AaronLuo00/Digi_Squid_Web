'use client'

import { motion } from 'framer-motion'

const personalityTraits = [
  {
    trait: 'Risk Tolerance',
    range: '0.2 - 0.9',
    description: 'Determines how likely an agent is to take risky actions.',
    effects: [
      'Higher values lead to more aggressive gameplay',
      'Affects decision-making in critical situations',
      'Influences resource management strategy',
      'Adapts based on game outcomes'
    ]
  },
  {
    trait: 'Cooperation Tendency',
    range: '0.1 - 1.0',
    description: 'Defines the likelihood of forming alliances with other players.',
    effects: [
      'Higher values promote team formation',
      'Affects trust building rate',
      'Influences communication patterns',
      'Evolves through alliance experiences'
    ]
  },
  {
    trait: 'Betrayal Threshold',
    range: '0.3 - 0.8',
    description: 'The point at which an agent might break existing alliances.',
    effects: [
      'Lower values indicate higher loyalty',
      'Affected by game progression',
      'Dynamic based on alliance performance',
      'Adjusts to betrayal history'
    ]
  },
  {
    trait: 'Resource Priority',
    range: '0.4 - 0.9',
    description: 'How much emphasis is placed on resource acquisition and management.',
    effects: [
      'Influences trading decisions',
      'Affects resource allocation',
      'Balances short vs long-term gains',
      'Adapts to resource scarcity'
    ]
  }
]

const neuralSystem = [
  {
    component: 'Personality Network',
    description: 'Neural network that processes game state and history to evolve personality traits.',
    features: [
      'Multi-layer perception architecture',
      'Experience-based weight adjustment',
      'Cross-game learning capability',
      'Real-time trait adaptation'
    ],
    code: `class PersonalityNetwork {
  evolveTraits(
    gameState: GameState,
    history: GameHistory
  ): PersonalityTraits {
    return this.network.forward(
      this.preprocessInput(gameState, history)
    )
  }
}`
  },
  {
    component: 'Adaptation Engine',
    description: 'System for real-time adjustment of personality traits based on game context.',
    features: [
      'Context-aware trait modification',
      'Performance-based optimization',
      'Gradual personality evolution',
      'Game-specific adaptations'
    ],
    code: `class AdaptationEngine {
  adjustTraits(
    currentTraits: PersonalityTraits,
    performance: Performance
  ): PersonalityTraits {
    return this.applyAdjustment(
      currentTraits,
      this.calculateAdjustment(performance)
    )
  }
}`
  }
]

const behaviorExamples = [
  {
    type: 'Aggressive',
    traits: {
      risk: '0.7-0.9',
      coop: '0.1-0.3',
      betrayal: '0.3-0.4',
      resource: '0.8-0.9'
    },
    description: 'Prioritizes high-risk, high-reward strategies with minimal alliance formation.',
    scenarios: [
      'Early resource competition',
      'Direct confrontations',
      'Solo survival strategies'
    ]
  },
  {
    type: 'Diplomatic',
    traits: {
      risk: '0.3-0.5',
      coop: '0.8-1.0',
      betrayal: '0.6-0.8',
      resource: '0.4-0.6'
    },
    description: 'Forms strong alliances but may betray when strategically advantageous.',
    scenarios: [
      'Alliance negotiations',
      'Resource sharing',
      'Strategic betrayals'
    ]
  },
  {
    type: 'Balanced',
    traits: {
      risk: '0.5-0.7',
      coop: '0.5-0.7',
      betrayal: '0.5-0.6',
      resource: '0.5-0.7'
    },
    description: 'Adapts strategy based on game state and player interactions.',
    scenarios: [
      'Mixed strategy gameplay',
      'Situational alliances',
      'Balanced resource management'
    ]
  },
  {
    type: 'Survivalist',
    traits: {
      risk: '0.2-0.4',
      coop: '0.3-0.5',
      betrayal: '0.7-0.8',
      resource: '0.7-0.9'
    },
    description: 'Focuses on survival and resource accumulation with cautious play.',
    scenarios: [
      'Resource hoarding',
      'Defensive positioning',
      'Opportunistic alliances'
    ]
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
          Each AI agent features a sophisticated neural network-based personality system
          that evolves through gameplay experience and cross-game learning.
        </motion.p>
      </div>

      {/* Neural System */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Neural Personality System
        </motion.h2>
        <div className="space-y-6">
          {neuralSystem.map((component, index) => (
            <motion.div
              key={component.component}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <h3 className="text-xl font-semibold squid-text">{component.component}</h3>
              <p className="text-gray-400">{component.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Features</h4>
                  <ul className="space-y-2">
                    {component.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <span className="text-squid-pink mr-2">→</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Implementation</h4>
                  <pre className="bg-gray-900/50 p-2 rounded-lg overflow-x-auto">
                    <code className="text-xs text-gray-400">{component.code}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Personality Traits */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
              transition={{ delay: 0.7 + index * 0.1 }}
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
          transition={{ delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Behavior Examples
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {behaviorExamples.map((example, index) => (
            <motion.div
              key={example.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
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
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Resource:</span>
                  <span className="text-squid-pink">{example.traits.resource}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">{example.description}</p>
              <div className="space-y-1">
                {example.scenarios.map((scenario, i) => (
                  <div key={i} className="text-xs text-gray-500">
                    <span className="text-squid-pink mr-1">•</span>
                    {scenario}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
