'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import RulesList from '@/components/docs/RulesList'
import TerminalCodeBlock from '@/components/docs/TerminalCodeBlock'
import CyberModal from '@/components/ui/CyberModal'
import DynamicTugOfWar from '@/components/docs/games/tug-of-war-alpha/DynamicTugOfWar'

const basicRules = [
  {
    title: 'Team Structure',
    description: 'Two teams with 4-5 players each',
    icon: '👥',
    subRules: [
      'Mix of real players and AI agents',
      'Team coordination is crucial',
      'Balance personal and team interests'
    ]
  },
  {
    title: 'Victory Conditions',
    description: 'First team to score 3 points wins',
    icon: '🏆',
    subRules: [
      'Based on total team pulling force',
      'Multiple rounds of competition',
      'Tests team endurance'
    ]
  },
  {
    title: 'Energy Management',
    description: 'Strategic use of energy resources',
    icon: '⚡',
    subRules: [
      'Limited energy per match',
      'Higher intensity costs more energy',
      'Rest actions to recover energy'
    ]
  }
]

const advancedStrategies = [
  {
    title: 'Betrayal Tactics',
    description: 'High-risk, high-reward strategies',
    icon: '🎭',
    subRules: [
      'Reduce team power by 40%',
      'Gain personal rewards',
      'Risk detection and penalties'
    ]
  },
  {
    title: 'Team Coordination',
    description: 'Synchronized team actions',
    icon: '🤝',
    subRules: [
      'Timing-based power boosts',
      'Energy sharing mechanics',
      'Group strategy formation'
    ]
  },
  {
    title: 'Detection System',
    description: 'Anti-betrayal mechanics',
    icon: '🔍',
    subRules: [
      'Pattern recognition',
      'Trust-based detection rates',
      'Group verification system'
    ]
  }
]

const betrayalSystemSections = [
  {
    title: 'Core Betrayal System',
    code: `interface BetrayalSystem {
  // Effects
  teamEffect: {
    powerReduction: 0.4,     // Reduce team power by 40%
    detectionWindow: 5000,   // Detection time window (ms)
    recoveryTime: 3000       // Recovery time from betrayal (ms)
  },
  
  // Conditions
  conditions: {
    minimumEnergy: 2,        // Minimum energy required
    cooldown: 2              // Cooldown rounds
  }
}`,
    language: 'typescript',
    description: 'Core betrayal mechanics implementation'
  },
  {
    title: 'Detection System',
    code: `interface BetrayalDetection {
  // Detection mechanics
  detectionCost: 50,          // Token cost to initiate detection
  baseDetectionRate: 0.4,     // Base detection probability
  experienceBonus: 0.1,       // Detection rate increase per success
  groupTrust: number          // Trust factor based on history
}`,
    language: 'typescript',
    description: 'Betrayal detection system'
  }
]

const rewardSystemSections = [
  {
    title: 'Reward System',
    code: `interface RewardSystem {
  // Base rewards
  normalRewards: {
    win: 200,              // Normal victory
    lose: 50               // Normal defeat
  },
  
  // Betrayal rewards
  betrayalRewards: {
    successfulBetrayal: 400,   // Successful team sabotage
    failedBetrayal: 20,        // Failed attempt
    exposed: -100              // Penalty when caught
  },
  
  // Loyalty rewards
  loyaltyRewards: {
    streak: 50,                // Consecutive loyalty bonus
    preventBetrayal: 100       // Successfully prevent betrayal
  }
}`,
    language: 'typescript',
    description: 'Comprehensive reward calculation'
  }
]

export default function TugOfWarPage() {
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
          game: 'Tug of War Alpha',
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
            <DynamicTugOfWar />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-center gradient-text">Tug of War Alpha</h1>
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
            <h1 className="text-4xl font-bold">Tug of War Alpha</h1>
            <p className="text-xl text-gray-400">
              A team-based competitive game where players must balance cooperation and betrayal.
              Form alliances, manage resources, and compete in intense tug-of-war matches powered
              by our advanced AI system.
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
          
          {/* Betrayal System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Betrayal System</h3>
            <p className="text-gray-400">
              Our sophisticated betrayal system creates intense social dynamics and strategic depth.
              Players must carefully weigh the risks and rewards of betrayal while maintaining
              team trust.
            </p>
            <TerminalCodeBlock
              title="Betrayal System Implementation"
              description="Core betrayal and detection mechanics"
              language="typescript"
              sections={betrayalSystemSections}
            />
          </div>

          {/* Reward System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Reward System</h3>
            <p className="text-gray-400">
              The reward system balances risk and reward, encouraging both loyalty and strategic betrayal
              through carefully calibrated incentives.
            </p>
            <TerminalCodeBlock
              title="Reward System Implementation"
              description="Reward calculation and distribution"
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
            <h2 className="text-3xl font-bold">Ready to Test Your Loyalty?</h2>
            <p className="text-xl text-gray-400">
              Join the elite players who have mastered the art of team dynamics.
              Will you be a loyal teammate or a cunning betrayer?
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
        description="Ready to test your team loyalty? Join our exclusive waitlist to be among the first players to experience this revolutionary game that combines team dynamics with strategic betrayal."
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
