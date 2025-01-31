'use client'

import { motion } from 'framer-motion'

const behaviorSystems = [
  {
    title: 'Pattern Recognition',
    description: 'AI agents analyze and learn from player behavior patterns.',
    capabilities: [
      'Historical action analysis',
      'Strategy identification',
      'Behavioral prediction',
      'Cross-game pattern matching'
    ],
    implementation: `const analyzePattern = (history: Action[]): Pattern => ({
  aggression: calculateAggression(history),
  cooperation: assessCooperation(history),
  consistency: evaluateConsistency(history),
  crossGamePatterns: analyzeCrossGameBehavior(history)
})`
  },
  {
    title: 'Real-time Adaptation',
    description: 'Agents adjust their strategies based on current game state and player actions.',
    capabilities: [
      'Dynamic difficulty scaling',
      'Situational awareness',
      'Tactical adjustments',
      'Performance optimization'
    ],
    implementation: `const adaptStrategy = (
  currentState: GameState,
  playerAction: Action
): Strategy => optimizeResponse(
  assessRisk(currentState),
  determineCounter(playerAction),
  getCrossGameInsights(playerAction)
)`
  },
  {
    title: 'Learning System',
    description: 'Continuous improvement through gameplay experience and outcome analysis.',
    capabilities: [
      'Success rate tracking',
      'Strategy effectiveness',
      'Outcome optimization',
      'Knowledge transfer'
    ],
    implementation: `class LearningModule {
  updateKnowledge(action: Action, outcome: Outcome): void {
    this.successRate.update(action, outcome)
    this.adjustWeights(outcome.effectiveness)
    this.optimizeStrategy()
  }
}`
  }
]

const crossGameLearning = [
  {
    component: 'Knowledge Transfer',
    description: 'System for sharing and applying learned behaviors across different games.',
    features: [
      'Pattern abstraction',
      'Strategy mapping',
      'Behavior translation',
      'Context adaptation'
    ],
    code: `class KnowledgeTransfer {
  transferBehavior(
    sourceGame: GameType,
    targetGame: GameType,
    behavior: Behavior
  ): AdaptedBehavior {
    const abstractPattern = this.abstractBehavior(behavior)
    return this.adaptToGameMechanics(
      this.mapToNewContext(abstractPattern, targetGame)
    )
  }
}`
  },
  {
    component: 'Memory Network',
    description: 'Neural network for storing and retrieving cross-game experiences.',
    features: [
      'Experience embedding',
      'Contextual retrieval',
      'Similarity matching',
      'Adaptive recall'
    ],
    code: `class MemoryNetwork {
  retrieveRelevantExperience(
    currentState: GameState,
    targetGame: GameType
  ): Experience[] {
    const stateEmbedding = this.embedState(currentState)
    return this.adaptMemoriesToContext(
      this.findSimilarExperiences(stateEmbedding, targetGame)
    )
  }
}`
  }
]

const adaptationPhases = [
  {
    phase: 'Observation',
    description: 'Monitor player actions and game state changes',
    metrics: [
      'Action frequency',
      'Pattern consistency',
      'Response timing',
      'Cross-game correlations'
    ]
  },
  {
    phase: 'Analysis',
    description: 'Process collected data to identify patterns and strategies',
    metrics: [
      'Success probability',
      'Risk assessment',
      'Pattern matching',
      'Knowledge transfer rate'
    ]
  },
  {
    phase: 'Adaptation',
    description: 'Adjust behavior based on analysis results',
    metrics: [
      'Strategy updates',
      'Behavior shifts',
      'Performance tracking',
      'Learning efficiency'
    ]
  },
  {
    phase: 'Optimization',
    description: 'Fine-tune responses and improve performance',
    metrics: [
      'Response accuracy',
      'Adaptation speed',
      'Resource efficiency',
      'Cross-game success rate'
    ]
  }
]

export default function DynamicBehaviorPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">BEHAVIOR</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Dynamic Behavior
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Our AI agents feature advanced learning and adaptation capabilities, 
          with sophisticated cross-game knowledge transfer and real-time optimization.
        </motion.p>
      </div>

      {/* Behavior Systems */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-semibold"
        >
          Core Systems
        </motion.h2>
        <div className="space-y-6">
          {behaviorSystems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-6 border border-gray-800 rounded-xl space-y-4"
            >
              <h3 className="text-xl font-semibold squid-text">{system.title}</h3>
              <p className="text-gray-400">{system.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Capabilities</h4>
                  <ul className="space-y-2">
                    {system.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-500">
                        <span className="text-squid-pink mr-2">→</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Implementation</h4>
                  <pre className="bg-gray-900/50 p-2 rounded-lg overflow-x-auto">
                    <code className="text-xs text-gray-400">{system.implementation}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cross-Game Learning */}
      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-2xl font-semibold"
        >
          Cross-Game Learning
        </motion.h2>
        <div className="space-y-6">
          {crossGameLearning.map((component, index) => (
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

      {/* Adaptation Process */}
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-2xl font-semibold"
        >
          Adaptation Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adaptationPhases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="relative p-6 border border-gray-800 rounded-xl bg-gray-900/50"
            >
              <div className="absolute -top-3 -left-2">
                <span className="game-number text-sm">PHASE_{index + 1}</span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2 squid-text">
                  {phase.phase}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{phase.description}</p>
                <div className="space-y-2">
                  {phase.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-500">
                      <span className="text-squid-pink mr-2">→</span>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* System Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">System Overview</h2>
        <pre className="bg-gray-900/50 p-2 rounded-lg overflow-x-auto">
          <code className="text-xs text-gray-400">{`class DynamicBehaviorSystem {
  async processGameState(
    state: GameState,
    gameType: GameType
  ): Promise<Action> {
    const observation = this.patternRecognition.analyze(state)
    const relevantExperiences = await this.crossGameMemory
      .retrieveRelevantExperience(state, gameType)
    const knowledge = this.learningModule.getCurrentKnowledge()
    const adaptedStrategies = this.knowledgeTransfer
      .transferBehavior(relevantExperiences, gameType)
    
    return this.adaptationEngine
      .optimize(observation, knowledge, adaptedStrategies)
      .getBestAction()
  }
}`}</code>
        </pre>
      </motion.div>
    </div>
  )
}
