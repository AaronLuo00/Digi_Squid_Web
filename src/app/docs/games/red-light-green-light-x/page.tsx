'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DynamicTrafficLight from '@/components/docs/games/red-light-green-light-x/DynamicTrafficLight'
import RulesList from '@/components/docs/RulesList'
import TerminalCodeBlock from '@/components/docs/TerminalCodeBlock'
import CyberModal from '@/components/ui/CyberModal'

const basicRules = [
  {
    title: 'Movement Mechanics',
    description: 'Players can move during green light phase and must freeze during red light.',
    icon: '🎮',
    subRules: [
      'Use WASD or arrow keys for movement',
      'Smooth acceleration and deceleration',
      'Momentum-based movement system'
    ]
  },
  {
    title: 'AI Detection System',
    description: 'Advanced AI system monitors player movement during red light phase.',
    icon: '🤖',
    subRules: [
      'Real-time movement analysis',
      'Pattern recognition for cheating detection',
      'Dynamic difficulty adjustment'
    ]
  },
  {
    title: 'Scoring System',
    description: 'Points are awarded based on distance covered and movement precision.',
    icon: '🎯',
    subRules: [
      'Base points for successful completion',
      'Speed bonuses for efficient movement',
      'Multipliers for consecutive successful rounds'
    ]
  }
]

const advancedStrategies = [
  {
    title: 'Pattern Mixing',
    description: 'Combine different movement patterns to confuse AI prediction system.',
    icon: '🔄',
    subRules: [
      'Alternate between fast and slow movements',
      'Use random stop intervals',
      'Implement fake-out movements'
    ]
  },
  {
    title: 'Risk Management',
    description: 'Balance speed and safety to maximize points while avoiding elimination.',
    icon: '⚖️',
    subRules: [
      'Calculate risk-reward ratios',
      'Optimize stopping positions',
      'Time management strategies'
    ]
  },
  {
    title: 'Team Tactics',
    description: 'Coordinate with other players to create distractions and opportunities.',
    icon: '👥',
    subRules: [
      'Synchronized movements',
      'Distraction techniques',
      'Position trading strategies'
    ]
  }
]

const movementPredictionSections = [
  {
    title: 'Core Movement Predictor',
    code: `class MovementPredictor {
  private readonly historySize = 100;
  private movementHistory: Movement[] = [];
  private readonly neuralNetwork: NeuralNetwork;

  constructor() {
    this.neuralNetwork = new NeuralNetwork({
      inputNodes: 6,  // x, y, velocity, direction, time, pattern
      hiddenNodes: 12,
      outputNodes: 2  // predicted x, y
    });
  }
}`,
    language: 'typescript',
    description: 'Core class setup with neural network initialization'
  },
  {
    title: 'Movement Recording',
    code: `// Record player movement for pattern analysis
recordMovement(movement: Movement): void {
  this.movementHistory.push(movement);
  if (this.movementHistory.length > this.historySize) {
    this.movementHistory.shift();
  }
  this.updatePredictionModel();
}

// Predict next movement based on historical patterns
predictNextMovement(): PredictedMovement {
  const recentPatterns = this.extractPatterns();
  const features = this.preprocessFeatures(recentPatterns);
  return this.neuralNetwork.predict(features);
}`,
    language: 'typescript',
    description: 'Movement recording and prediction methods'
  },
  {
    title: 'Pattern Analysis',
    code: `// Extract movement patterns for analysis
private extractPatterns(): Pattern[] {
  return this.movementHistory.reduce((patterns, movement, index) => {
    if (index < 2) return patterns;
    
    const pattern = {
      previousMovement: this.movementHistory[index - 1],
      currentMovement: movement,
      timeGap: movement.timestamp - this.movementHistory[index - 1].timestamp,
      acceleration: this.calculateAcceleration(index)
    };
    
    patterns.push(pattern);
    return patterns;
  }, [] as Pattern[]);
}

// Calculate movement acceleration
private calculateAcceleration(index: number): Vector2D {
  const current = this.movementHistory[index];
  const previous = this.movementHistory[index - 1];
  const timeDelta = current.timestamp - previous.timestamp;
  
  return {
    x: (current.velocity.x - previous.velocity.x) / timeDelta,
    y: (current.velocity.y - previous.velocity.y) / timeDelta
  };
}`,
    language: 'typescript',
    description: 'Pattern extraction and acceleration calculation'
  }
]

export default function RedLightGreenLightPage() {
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
          game: 'Red Light, Green Light X',
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
      <section className="h-[50vh] relative overflow-hidden">
        <DynamicTrafficLight />
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
            <h1 className="text-4xl font-bold">Red Light, Green Light X</h1>
            <p className="text-xl text-gray-400">
              Welcome to the next evolution of the classic children's game. In this AI-powered
              version, you're not just playing against other players - you're matching wits with
              our advanced movement prediction system.
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
          
          {/* Movement Prediction System */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Movement Prediction System</h3>
            <p className="text-gray-400">
              Our AI system uses a neural network to analyze player movement patterns and predict
              future actions. This allows for dynamic difficulty adjustment and advanced cheating
              detection.
            </p>
            <TerminalCodeBlock
              title="Movement Prediction Implementation"
              description="Neural network-based movement prediction system"
              language="typescript"
              sections={movementPredictionSections}
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
            <h2 className="text-3xl font-bold">Ready to Test Your Skills?</h2>
            <p className="text-xl text-gray-400">
              Join the elite players who have mastered the art of movement prediction.
              Can you outsmart our AI?
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
        description="Ready to challenge our AI? Join our exclusive waitlist to be among the first players to test your reflexes against our advanced movement prediction system."
        buttonText={isSubmitting ? "Joining..." : "Join Waitlist →"}
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
