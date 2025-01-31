'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RulesList from '@/components/docs/RulesList'
import TerminalCodeBlock from '@/components/docs/TerminalCodeBlock'
import CyberModal from '@/components/ui/CyberModal'
import DynamicDinner from '@/components/docs/games/degen-dinner/DynamicDinner'

const basicRules = [
  {
    title: 'Resource Management',
    description: 'Strategic food resource control',
    icon: '🍽️',
    subRules: [
      'Multiple resource types',
      'Resource combinations',
      'Trading mechanics'
    ]
  },
  {
    title: 'Social Dynamics',
    description: 'Complex alliance system',
    icon: '🤝',
    subRules: [
      'Form temporary alliances',
      'Strategic voting',
      'Trust building'
    ]
  },
  {
    title: 'Game Structure',
    description: '5 rounds of strategic play',
    icon: '🎲',
    subRules: [
      '4 tables of 5 players',
      'Proposal and voting phases',
      'Resource distribution'
    ]
  }
]

const advancedStrategies = [
  {
    title: 'Alliance Building',
    description: 'Strategic partnerships',
    icon: '🤝',
    subRules: [
      'Temporary alliances',
      'Stable partnerships',
      'Strategic coalitions'
    ]
  },
  {
    title: 'Resource Trading',
    description: 'Complex trading mechanics',
    icon: '💱',
    subRules: [
      'Resource valuation',
      'Trade negotiations',
      'Market manipulation'
    ]
  },
  {
    title: 'Political Maneuvering',
    description: 'Advanced social tactics',
    icon: '👑',
    subRules: [
      'Vote trading',
      'Coalition building',
      'Influence management'
    ]
  }
]

const allianceSystemSections = [
  {
    title: 'Alliance Types',
    code: `interface AllianceSystem {
  // Alliance types
  types: {
    temporary: {
      duration: 1,        // One round
      benefits: {
        voteBonus: 1.3,   // 30% voting power bonus
        tradingBonus: 1.2  // 20% trading bonus
      },
      restrictions: {
        noResourceShare: true,  // No resource sharing
        noSaveBonus: true      // No storage bonus
      }
    },
    stable: {
      duration: 3,        // Three rounds
      benefits: {
        resourceShare: true,    // Resource sharing enabled
        savingBonus: 1.5       // 50% storage bonus
      },
      restrictions: {
        earlyBreakPenalty: true,  // Early dissolution penalty
        limitedTrading: true      // Limited external trading
      }
    },
    strategic: {
      duration: "game",   // Full game duration
      benefits: {
        fullBonus: 2.0,        // 100% all bonuses
        sharedVictory: true    // Shared victory enabled
      },
      restrictions: {
        noNewAlliances: true,     // No additional alliances
        severeBreakPenalty: true  // Severe betrayal penalty
      }
    }
  }
}`,
    language: 'typescript',
    description: 'Alliance system implementation'
  }
]

const resourceSystemSections = [
  {
    title: 'Resource Management',
    code: `interface ResourceSystem {
  // Resource combinations
  combinations: {
    basic: {
      components: ["Staple", "Protein"],
      bonus: 1.2,          // 20% bonus
      duration: 1          // 1 round duration
    },
    quality: {
      components: ["Staple", "Protein", "Vegetable"],
      bonus: 1.5,          // 50% bonus
      duration: 2          // 2 rounds duration
    },
    perfect: {
      components: ["All"],
      bonus: 2.0,          // 100% bonus
      duration: 3          // 3 rounds duration
    }
  },
  
  // Resource effects
  effects: {
    starvation: {
      threshold: 2,        // Minimum requirement
      penalty: "Elimination"
    },
    surplus: {
      threshold: 8,        // Excess resources
      effect: "Vote bonus"
    },
    scarcity: {
      threshold: 3,        // Resource shortage
      effect: "Alliance penalty"
    }
  }
}`,
    language: 'typescript',
    description: 'Resource management system'
  },
  {
    title: 'Trading System',
    code: `interface TradingSystem {
  // Trading rules
  rules: {
    maxTradesPerRound: 3,
    allowedTypes: {
      resources: true,     // Resource trading
      votes: true,         // Vote trading
      promises: true       // Promise making
    },
    restrictions: {
      minimumTrade: 1,     // Minimum trade amount
      maximumTrade: 5      // Maximum trade amount
    }
  },
  
  // Market dynamics
  market: {
    supplyDemand: true,    // Dynamic pricing
    valueFluctuation: true, // Resource value changes
    tradingFees: false     // No trading fees
  }
}`,
    language: 'typescript',
    description: 'Trading mechanics implementation'
  }
]

export default function DegenDinnerPage() {
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
          game: 'Degen Dinner',
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
      <section className="h-[50vh] relative overflow-hidden bg-gradient-to-b from-gray-900 to-primary">
        <div className="absolute inset-0">
          <div className="h-full w-full">
            <DynamicDinner />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center gradient-text">Degen Dinner</h1>
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
            <h1 className="text-4xl font-bold">Degen Dinner</h1>
            <p className="text-xl text-gray-400">
              A social strategy game where players must balance resource management with complex
              social dynamics. Form alliances, trade resources, and navigate political
              landscapes in this unique dining experience.
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
          
          {/* Alliance System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Alliance System</h3>
            <p className="text-gray-400">
              Our sophisticated alliance system creates dynamic social interactions with
              various partnership options and strategic considerations.
            </p>
            <TerminalCodeBlock
              title="Alliance System Implementation"
              description="Core alliance mechanics"
              language="typescript"
              sections={allianceSystemSections}
            />
          </div>

          {/* Resource System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resource System</h3>
            <p className="text-gray-400">
              The resource management system combines strategic resource combinations with
              a dynamic trading marketplace.
            </p>
            <TerminalCodeBlock
              title="Resource System Implementation"
              description="Resource and trading mechanics"
              language="typescript"
              sections={resourceSystemSections}
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
            <h2 className="text-3xl font-bold">Ready to Join the Feast?</h2>
            <p className="text-xl text-gray-400">
              Join the elite players who have mastered the art of social strategy.
              Can you balance resources and relationships to emerge victorious?
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
        description="Ready to test your social strategy? Join our exclusive waitlist to be among the first players to experience this revolutionary game that combines resource management with complex social dynamics."
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
