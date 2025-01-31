'use client'

import { motion } from 'framer-motion'

const gameModes = [
  {
    number: '456',
    title: 'Red Light, Green Light X',
    description: 'A test of reflexes and timing against AI movement prediction.',
    mechanics: [
      {
        title: 'Movement Detection',
        description: 'AI system analyzes player movements in real-time using advanced prediction algorithms.'
      },
      {
        title: 'Progressive Difficulty',
        description: 'Green light duration decreases while red light detection becomes more sensitive.'
      },
      {
        title: 'Survival Points',
        description: 'Points awarded based on distance covered and movement precision.'
      }
    ],
    strategy: [
      'Study AI detection patterns',
      'Optimize movement timing',
      'Balance speed with precision'
    ]
  },
  {
    number: '123',
    title: 'Tug of War Alpha',
    description: 'Strategic team-based competition with dynamic alliances.',
    mechanics: [
      {
        title: 'Team Formation',
        description: 'Players can form teams or compete solo, with AI agents as potential allies.'
      },
      {
        title: 'Alliance System',
        description: 'Dynamic trust mechanics affect team strength and coordination.'
      },
      {
        title: 'Power Distribution',
        description: 'Team strength calculated based on individual stats and coordination level.'
      }
    ],
    strategy: [
      'Analyze potential allies',
      'Monitor trust indicators',
      'Plan strategic betrayals'
    ]
  },
  {
    number: '067',
    title: 'Marble Mayhem',
    description: 'Resource management and strategic decision-making challenge.',
    mechanics: [
      {
        title: 'Resource System',
        description: 'Players manage limited marbles through multiple rounds of strategic play.'
      },
      {
        title: 'Betting Mechanics',
        description: 'Risk-reward decisions with real-time opponent behavior analysis.'
      },
      {
        title: 'AI Psychology',
        description: 'AI agents display unique personality traits affecting their gameplay style.'
      }
    ],
    strategy: [
      'Track opponent patterns',
      'Manage resources carefully',
      'Adapt to AI personalities'
    ]
  },
  {
    number: '218',
    title: 'Cookie Smash',
    description: 'Strategic shape-cutting challenge with point-based mechanics.',
    mechanics: [
      {
        title: 'Precision Cutting',
        description: 'Players must cut shapes with exact precision to maximize points.'
      },
      {
        title: 'Speed vs Accuracy',
        description: 'Balance between fast execution and maintaining cutting accuracy.'
      },
      {
        title: 'Pattern Recognition',
        description: 'Identify optimal cutting paths while avoiding structural weaknesses.'
      }
    ],
    strategy: [
      'Study shape patterns carefully',
      'Practice precision movements',
      'Adapt to time pressure'
    ]
  },
  {
    number: '199',
    title: 'Degen Dinner',
    description: 'Complex resource management and alliance formation system.',
    mechanics: [
      {
        title: 'Multi-table Dynamics',
        description: 'Players navigate between multiple dinner tables, each with unique opportunities.'
      },
      {
        title: 'Resource Trading',
        description: 'Strategic trading of food and information between players and tables.'
      },
      {
        title: 'Alliance Formation',
        description: 'Form temporary or permanent alliances to maximize survival chances.'
      }
    ],
    strategy: [
      'Build strategic partnerships',
      'Time resource exchanges',
      'Maintain table presence'
    ]
  }
]

export default function GameModesPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-4"
        >
          <span className="game-number text-xl">MODES</span>
          <div className="h-px flex-1 bg-squid-pink/30" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold"
        >
          Game Modes
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Each game mode presents unique challenges and requires different strategies. 
          Master all modes to increase your chances of tournament success.
        </motion.p>
      </div>

      {/* Game Modes */}
      <div className="space-y-12">
        {gameModes.map((mode, index) => (
          <motion.div
            key={mode.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="space-y-6"
          >
            {/* Mode Header */}
            <div className="flex items-center space-x-4">
              <span className="game-number text-xl">{mode.number}</span>
              <h2 className="text-2xl font-bold squid-text">{mode.title}</h2>
            </div>
            
            <p className="text-gray-400">{mode.description}</p>

            {/* Game Mechanics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mode.mechanics.map((mechanic) => (
                <div
                  key={mechanic.title}
                  className="p-4 border border-gray-800 rounded-lg bg-gray-900/50"
                >
                  <h3 className="text-lg font-semibold mb-2">{mechanic.title}</h3>
                  <p className="text-sm text-gray-500">{mechanic.description}</p>
                </div>
              ))}
            </div>

            {/* Strategy Tips */}
            <div className="p-4 border border-squid-pink/20 rounded-lg bg-gray-900/50">
              <h3 className="text-lg font-semibold mb-4">Strategy Tips</h3>
              <ul className="space-y-2">
                {mode.strategy.map((tip, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="text-squid-pink mr-2">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Pro Tips</h2>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Practice each mode individually before entering tournaments</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Study AI behavior patterns to predict their actions</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Balance risk and reward based on tournament stage</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-squid-pink mt-1">→</span>
            <span>Form alliances early but be prepared for betrayal</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
