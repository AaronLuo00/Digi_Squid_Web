'use client'

import { motion } from 'framer-motion'

const allianceFeatures = [
  {
    title: 'Trust System',
    description: 'Multi-layered trust calculation based on interaction history and behavior patterns.',
    metrics: [
      {
        name: 'Cooperation Rate',
        description: 'Percentage of successful cooperative actions',
        range: '0.0 - 1.0'
      },
      {
        name: 'Loyalty Score',
        description: 'Consistency in alliance maintenance',
        range: '0.0 - 100.0'
      },
      {
        name: 'Betrayal Risk',
        description: 'Probability of alliance breakdown',
        range: '0% - 100%'
      },
      {
        name: 'Resource Synergy',
        description: 'Combined resource utilization efficiency',
        range: '1.0x - 3.0x'
      }
    ]
  },
  {
    title: 'Alliance Formation',
    description: 'Strategic partnership evaluation and team building mechanics.',
    metrics: [
      {
        name: 'Compatibility Index',
        description: 'Match rate between player strategies',
        range: '0.0 - 1.0'
      },
      {
        name: 'Resource Synergy',
        description: 'Combined resource utilization efficiency',
        range: '1.0x - 3.0x'
      },
      {
        name: 'Team Balance',
        description: 'Distribution of skills and roles',
        range: '0.0 - 1.0'
      },
      {
        name: 'Cross-game Value',
        description: 'Potential benefits in other games',
        range: '0.0 - 2.0x'
      }
    ]
  },
  {
    title: 'Network Effects',
    description: 'Impact of alliance relationships on game dynamics.',
    metrics: [
      {
        name: 'Influence Range',
        description: 'Reach of alliance network effects',
        range: '1 - 6 players'
      },
      {
        name: 'Power Index',
        description: 'Combined strength of alliance network',
        range: '1.0x - 5.0x'
      },
      {
        name: 'Stability Factor',
        description: 'Long-term alliance sustainability',
        range: '0.0 - 1.0'
      },
      {
        name: 'Resource Flow',
        description: 'Efficiency of resource distribution',
        range: '0.5x - 2.0x'
      }
    ]
  }
]

const resourceSystem = [
  {
    component: 'Resource Evaluation',
    description: 'System for analyzing and optimizing resource-based alliance decisions.',
    features: [
      'Resource compatibility analysis',
      'Synergy potential calculation',
      'Distribution optimization',
      'Cross-game resource mapping'
    ],
    code: `class ResourceEvaluator {
  evaluateAlliance(
    ownResources: Resources,
    partnerResources: Resources
  ): AllianceValue {
    return this.computeValue(
      this.calculateSynergy(ownResources, partnerResources),
      this.optimizeDistribution(ownResources, partnerResources)
    )
  }
}`
  },
  {
    component: 'Trust Calculator',
    description: 'Multi-layered system for computing and updating trust levels.',
    features: [
      'Historical interaction analysis',
      'Resource sharing patterns',
      'Betrayal risk assessment',
      'Cross-game trust transfer'
    ],
    code: `class TrustCalculator {
  calculateTrust(
    partner: Player,
    context: GameContext
  ): TrustScore {
    return this.synthesizeTrust(
      this.computeBaseScore(partner),
      this.evaluateResourceTrust(partner),
      this.getCrossGameTrust(partner),
      context
    )
  }
}`
  }
]

const allianceStages = [
  {
    stage: 'Formation',
    actions: [
      'Evaluate potential allies',
      'Calculate compatibility scores',
      'Assess resource synergies',
      'Propose alliance terms'
    ],
    code: `const evaluateAlliance = (
  player: Player,
  potential: Player
): AllianceScore => computeFinalScore(
  calculateCompatibility(player.strategy, potential.strategy),
  evaluateResourceSynergy(player.resources, potential.resources),
  assessCrossGamePotential(player, potential)
)`
  },
  {
    stage: 'Maintenance',
    actions: [
      'Monitor trust levels',
      'Optimize resource sharing',
      'Track alliance performance',
      'Coordinate actions'
    ],
    code: `const updateAllianceStatus = (
  alliance: Alliance,
  performance: Performance
): void => {
  const stability = assessStability(
    calculateTrustScore(alliance),
    evaluateResourceUse(alliance)
  )
  if (shouldAdjust(stability)) {
    optimizeAlliance(alliance, performance)
  }
}`
  },
  {
    stage: 'Evolution',
    actions: [
      'Adapt to changing conditions',
      'Strengthen resource synergies',
      'Expand alliance benefits',
      'Optimize team dynamics'
    ],
    code: `const evolveAlliance = (
  alliance: Alliance,
  gameState: GameState
): AllianceAction => optimizeAlliance(
  evaluatePerformance(alliance),
  assessGrowthPotential(alliance),
  calculateCrossGameBenefits(alliance)
)`
  }
]

export default function AllianceSystemPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">ALLIANCE</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Alliance System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          A sophisticated system managing relationships between AI agents and players, 
          featuring resource-based evaluation and multi-layered trust mechanics.
        </motion.p>
      </div>

      {/* Alliance Features */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Core Features
        </motion.h2>
        <div className="space-y-6">
          {allianceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <h3 className="text-xl font-semibold squid-text">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {feature.metrics.map((metric) => (
                  <div
                    key={metric.name}
                    className="p-4 bg-gray-900/50 rounded-lg space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-300">
                        {metric.name}
                      </span>
                      <span className="text-xs text-squid-pink font-mono">
                        {metric.range}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">{metric.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Resource System */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Resource System
        </motion.h2>
        <div className="space-y-6">
          {resourceSystem.map((component, index) => (
            <motion.div
              key={component.component}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
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

      {/* Alliance Lifecycle */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Alliance Lifecycle
        </motion.h2>
        <div className="space-y-6">
          {allianceStages.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="relative p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <div className="absolute -top-3 -left-2">
                <span className="game-number text-sm">STAGE_{index + 1}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4 squid-text">
                  {stage.stage}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    {stage.actions.map((action, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500">
                        <span className="text-squid-pink mr-2">→</span>
                        {action}
                      </div>
                    ))}
                  </div>
                  <div>
                    <pre className="bg-gray-900/70 p-2 rounded-lg overflow-x-auto">
                      <code className="text-xs text-gray-400">{stage.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Implementation Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Implementation Notes</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Alliance system runs on a tick-based update cycle (10 ticks/second)</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Trust calculations use exponential weighted moving average</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Resource synergy effects propagate through alliance network</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Cross-game alliance benefits apply to connected games</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Alliance dissolution triggers a 60-second cooldown period</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
