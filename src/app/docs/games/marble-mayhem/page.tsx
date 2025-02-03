'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RulesList from '@/components/docs/RulesList'
import TerminalCodeBlock from '@/components/docs/TerminalCodeBlock'
import CyberModal from '@/components/ui/CyberModal'
import DynamicMarbles from '@/components/docs/games/marble-mayhem/DynamicMarbles'

const basicRules = [
  {
    title: 'Betting System',
    description: 'Strategic marble betting each round',
    icon: '🎲',
    subRules: [
      'Bet 1-8 marbles per round',
      'Blind betting system',
      'Initial 10 marbles per player'
    ]
  },
  {
    title: 'Victory Conditions',
    description: 'Most marbles after 5 rounds wins',
    icon: '🏆',
    subRules: [
      'Multiplier-based victories',
      'Risk-reward balance',
      'Strategic loss management'
    ]
  },
  {
    title: 'Game Flow',
    description: '5 rounds of strategic betting',
    icon: '🔄',
    subRules: [
      'Simultaneous betting',
      'Real-time outcome calculation',
      'Progressive difficulty'
    ]
  }
]

const advancedStrategies = [
  {
    title: 'Pattern Mixing',
    description: 'Advanced betting patterns',
    icon: '📊',
    subRules: [
      'Create false patterns',
      'Mix betting sizes',
      'Adapt to opponents'
    ]
  },
  {
    title: 'Risk Management',
    description: 'Strategic resource control',
    icon: '💎',
    subRules: [
      'Marble reserve management',
      'Calculated risk-taking',
      'Loss minimization'
    ]
  },
  {
    title: 'Psychological Warfare',
    description: 'Mental game mastery',
    icon: '🧠',
    subRules: [
      'Opponent reading',
      'Pattern recognition',
      'Timing manipulation'
    ]
  }
]

const strategySystemSections = [
  {
    title: 'Strategy Options',
    code: `interface StrategyOptions {
  // Basic betting strategies
  betting: {
    small: {
      range: [1, 2],
      risk: "low",
      reward: "stable",
      expectedValue: 1.1,     // Slightly positive EV
      winRate: "65-70%"       // High win rate
    },
    medium: {
      range: [3, 5],
      risk: "medium",
      reward: "balanced",
      expectedValue: 1.0,     // Neutral EV
      winRate: "48-52%"       // Balanced win rate
    },
    large: {
      range: [6, 8],
      risk: "high",
      reward: "volatile",
      expectedValue: 0.9,     // Slightly negative EV
      winRate: "30-35%"       // Low win rate, high return
    }
  }
}`,
    language: 'typescript',
    description: 'Core strategy options and expected outcomes'
  },
  {
    title: 'Strategy Analysis',
    code: `interface StrategyAnalysis {
  // Matchup matrix (win rates)
  matchups: {
    smallVsSmall: "50%",
    smallVsMedium: "40%",
    smallVsLarge: "65%",
    mediumVsMedium: "50%",
    mediumVsLarge: "35%",
    largeVsLarge: "50%"
  },

  // Risk-reward profile
  riskReward: {
    small: {
      maxGain: bet * 2.2,
      maxLoss: bet * 0.8,
      volatility: "low"
    },
    medium: {
      maxGain: bet * 1.8,
      maxLoss: bet * 1.0,
      volatility: "medium"
    },
    large: {
      maxGain: bet * 1.5,
      maxLoss: bet * 1.2,
      volatility: "high"
    }
  }
}`,
    language: 'typescript',
    description: 'Strategy matchup analysis and risk profiles'
  }
]

const rewardSystemSections = [
  {
    title: 'Dynamic Rewards',
    code: `interface RewardSystem {
  // Base reward calculation
  baseReward: {
    smallBet: {
      win: bet * 2.2,      // Higher multiplier for small bets
      lose: -bet * 0.8     // Lower loss for small bets
    },
    mediumBet: {
      win: bet * 1.8,      // Standard multiplier
      lose: -bet           // Standard loss
    },
    largeBet: {
      win: bet * 1.5,      // Lower multiplier
      lose: -bet * 1.2     // Higher loss
    }
  }
}`,
    language: 'typescript',
    description: 'Dynamic reward calculation system'
  }
]

export default function MarbleMayhemPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleJoinWaitlist = async (email?: string) => {
    if (!email) return

    try {
      setIsSubmitting(true)
      const response = await fetch('https://formspree.io/f/myzkjkzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          game: 'Marble Mayhem',
          timestamp: new Date().toISOString()
        })
      })
      
      if (response.ok) {
        setIsModalOpen(false)
        setIsSuccessModalOpen(true)
      } else {
        console.error('Failed to join waitlist')
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="h-[600px] relative overflow-hidden bg-gradient-to-b from-gray-900 to-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full">
            <DynamicMarbles />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center gradient-text">Marble Mayhem</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Game Overview */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold">Marble Mayhem</h1>
            <p className="text-xl text-gray-400">
              A strategic betting game where players must master the art of risk management
              and psychological warfare. Compete against other players and AI agents in this
              intense battle of wits and probability.
            </p>
          </motion.div>
        </section>

        {/* Basic Rules */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Game Rules</h2>
          <RulesList rules={basicRules} category="Basic Mechanics" />
        </section>

        {/* Advanced Strategies */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Advanced Strategies</h2>
          <RulesList rules={advancedStrategies} category="Pro Tips" />
        </section>

        {/* Technical Implementation */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Technical Deep Dive</h2>
          
          {/* Strategy System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Strategy System</h3>
            <p className="text-gray-400">
              Our comprehensive strategy system provides players with multiple viable approaches,
              each with its own risk-reward profile and counter-strategies.
            </p>
            <TerminalCodeBlock
              title="Strategy System Implementation"
              description="Core strategy mechanics and analysis"
              language="typescript"
              sections={strategySystemSections}
            />
          </div>

          {/* Reward System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Reward System</h3>
            <p className="text-gray-400">
              The dynamic reward system ensures that all strategies remain viable while
              maintaining the risk-reward balance of different betting approaches.
            </p>
            <TerminalCodeBlock
              title="Reward System Implementation"
              description="Dynamic reward calculation"
              language="typescript"
              sections={rewardSystemSections}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Test Your Strategy?</h2>
            <p className="text-xl text-gray-400">
              Join the elite players who have mastered the art of strategic betting.
              Can you outthink and outmaneuver your opponents?
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="squid-button px-8 py-4 text-lg"
            >
              Enter Game →
            </motion.button>
          </motion.div>
        </section>
      </div>

      {/* Coming Soon Modal */}
      <CyberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Launching Soon 🚀"
        description="Ready to test your strategic prowess? Join our exclusive waitlist to be among the first players to experience this revolutionary game that combines probability, psychology, and strategic thinking."
        buttonText={isSubmitting ? "Joining..." : "Join the Elite Waitlist →"}
        showEmailInput={true}
        onButtonClick={handleJoinWaitlist}
      />

      {/* Success Modal */}
      <CyberModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Welcome to the Future 🎮"
        description="You're now on our exclusive waitlist. We'll notify you as soon as we're ready for your strategic prowess."
        buttonText="Got it!"
        onButtonClick={() => setIsSuccessModalOpen(false)}
      />
    </div>
  )
}
