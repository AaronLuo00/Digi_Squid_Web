'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RulesList from '@/components/docs/RulesList'
import TerminalCodeBlock from '@/components/docs/TerminalCodeBlock'
import CyberModal from '@/components/ui/CyberModal'
import DynamicCookie from '@/components/docs/games/cookie-smash/DynamicCookie'

const basicRules = [
  {
    title: 'Point System',
    description: 'Strategic point allocation',
    icon: '🎯',
    subRules: [
      '6 base points per round',
      'Bank up to 3 points',
      'Minimum 1 point per action'
    ]
  },
  {
    title: 'Shape Complexity',
    description: 'Progressive shape difficulty',
    icon: '⭐',
    subRules: [
      'Basic shapes (6 points)',
      'Intermediate shapes (7 points)',
      'Advanced shapes (8 points)'
    ]
  },
  {
    title: 'Time Management',
    description: '35 seconds per round',
    icon: '⏱️',
    subRules: [
      '10 seconds planning',
      '20 seconds action',
      '5 seconds resolution'
    ]
  }
]

const advancedStrategies = [
  {
    title: 'Path Optimization',
    description: 'Efficient cutting techniques',
    icon: '✂️',
    subRules: [
      'Minimize point usage',
      'Optimize cutting angles',
      'Strategic point placement'
    ]
  },
  {
    title: 'Interference Tactics',
    description: 'Competitive elements',
    icon: '🎮',
    subRules: [
      'Cursor disruption',
      'Shape blurring',
      'Time pressure'
    ]
  },
  {
    title: 'Defense Mechanics',
    description: 'Counter-interference',
    icon: '🛡️',
    subRules: [
      'Stabilization techniques',
      'Visual clarity buffs',
      'Time freeze abilities'
    ]
  }
]

const actionSystemSections = [
  {
    title: 'Path Creation',
    code: `interface ActionSystem {
  // Path actions
  pathActions: {
    placeDot: {
      cost: 1,             // Cost per dot
      maxDots: 8,          // Maximum dots allowed
      undoAllowed: true,   // Allow undo action
      undoCost: 0          // No cost for undo
    },
    
    connections: {
      straight: {
        cost: 1,           // Straight line cost
        accuracy: "high",   // High precision required
        bonus: 1.2         // 20% bonus for perfect lines
      },
      curve: {
        cost: 2,           // Curve connection cost
        accuracy: "medium", // Medium precision required
        bonus: 1.5         // 50% bonus for perfect curves
      }
    }
  }
}`,
    language: 'typescript',
    description: 'Core path creation mechanics'
  },
  {
    title: 'Special Actions',
    code: `interface SpecialActions {
  quickCut: {
    cost: 4,             // High cost
    timeLimit: 5,        // 5 second limit
    bonus: 2.0,          // Double score
    failPenalty: -30     // Severe failure penalty
  },
  perfectLine: {
    cost: 3,             // Medium cost
    tolerance: 0.1,      // Very low error tolerance
    bonus: 1.5,          // 50% bonus
    attempts: 2          // Two attempts per round
  }
}`,
    language: 'typescript',
    description: 'Special action implementations'
  }
]

const competitionSystemSections = [
  {
    title: 'Offensive Actions',
    code: `interface CompetitionMechanics {
  // Offensive actions
  offensiveActions: {
    shakeCursor: {
      cost: 2,
      duration: 3,         // 3 seconds
      effect: "moderate",
      counterable: true
    },
    blurShape: {
      cost: 3,
      duration: 2,         // 2 seconds
      effect: "strong",
      counterable: true
    },
    rushTime: {
      cost: 4,
      effect: "Reduce opponent time by 5s",
      counterable: false
    }
  }
}`,
    language: 'typescript',
    description: 'Offensive gameplay mechanics'
  },
  {
    title: 'Defensive Actions',
    code: `interface DefensiveMechanics {
  // Defensive actions
  defensiveActions: {
    stabilize: {
      cost: 1,
      duration: 4,         // 4 seconds
      effect: "Immune to shake",
      proactive: true      // Can use preemptively
    },
    clarity: {
      cost: 2,
      duration: 3,         // 3 seconds
      effect: "Immune to blur",
      proactive: true
    },
    timeFreeze: {
      cost: 3,
      duration: 2,         // 2 seconds
      effect: "Pause timer",
      proactive: false     // Reactive use only
    }
  }
}`,
    language: 'typescript',
    description: 'Defensive counter-mechanics'
  }
]

export default function CookieSmashPage() {
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
          game: 'Cookie Smash',
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
            <DynamicCookie />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center gradient-text">Cookie Smash</h1>
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
            <h1 className="text-4xl font-bold">Cookie Smash</h1>
            <p className="text-xl text-gray-400">
              A strategic shape-cutting game where precision meets competition. Master the art
              of point management while dealing with real-time interference from opponents in
              this unique blend of skill and strategy.
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
          
          {/* Action System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Action System</h3>
            <p className="text-gray-400">
              Our sophisticated action system provides players with multiple tools for shape
              creation, each with its own cost-benefit trade-offs and mastery requirements.
            </p>
            <TerminalCodeBlock
              title="Action System Implementation"
              description="Core gameplay mechanics"
              language="typescript"
              sections={actionSystemSections}
            />
          </div>

          {/* Competition System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Competition System</h3>
            <p className="text-gray-400">
              The competition system adds an extra layer of strategy through offensive and
              defensive actions, creating dynamic player interactions.
            </p>
            <TerminalCodeBlock
              title="Competition System Implementation"
              description="Offensive and defensive mechanics"
              language="typescript"
              sections={competitionSystemSections}
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
            <h2 className="text-3xl font-bold">Ready to Test Your Precision?</h2>
            <p className="text-xl text-gray-400">
              Join the elite players who have mastered the art of strategic shape-cutting.
              Can you maintain precision under pressure?
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
        description="Ready to test your precision and strategy? Join our exclusive waitlist to be among the first players to experience this revolutionary game that combines skill, timing, and competitive tactics."
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
