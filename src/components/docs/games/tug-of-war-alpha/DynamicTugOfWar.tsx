'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ForceParticles from './ForceParticles'
import TeamCharacter from './TeamCharacter'
import StrategyIndicator, { Strategy } from './StrategyIndicator'

const PULL_STRENGTH = 4 // Base force multiplier
const BETRAYAL_BONUS = 1.5 // Extra strength when betraying
const MUTUAL_PENALTY = 0.5 // Penalty when both betray
const STRATEGY_CHANGE_INTERVAL = 2000 // Strategy change interval in ms
const BETRAY_PROBABILITY = 0.4 // Probability of choosing betray

const DynamicTugOfWar = () => {
  const [position, setPosition] = useState(50) // Start at center
  const [teamAStrength, setTeamAStrength] = useState(0.75) // Initial strength
  const [teamBStrength, setTeamBStrength] = useState(0.75) // Initial strength
  const [teamAStrategy, setTeamAStrategy] = useState<Strategy>('cooperate')
  const [teamBStrategy, setTeamBStrategy] = useState<Strategy>('cooperate')
  const [isClient, setIsClient] = useState(false)
  const ropeControls = useAnimation()

  // Set client-side flag
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Calculate strength modifiers based on strategies
  const getStrengthModifier = (ownStrategy: Strategy, opponentStrategy: Strategy) => {
    if (ownStrategy === 'betray' && opponentStrategy === 'cooperate') {
      return BETRAYAL_BONUS // Successful betrayal
    } else if (ownStrategy === 'betray' && opponentStrategy === 'betray') {
      return MUTUAL_PENALTY // Mutual betrayal penalty
    } else {
      return 1 // Normal strength
    }
  }

  // Random strategy selection with bias
  const getRandomStrategy = (currentStrategy: Strategy, opponentStrategy: Strategy): Strategy => {
    // Increase betrayal probability if opponent is cooperating
    const adjustedBetrayProb = opponentStrategy === 'cooperate' 
      ? BETRAY_PROBABILITY * 1.2 
      : BETRAY_PROBABILITY * 0.8

    // Add some inertia - 20% chance to keep current strategy
    if (Math.random() < 0.2) return currentStrategy

    return Math.random() < adjustedBetrayProb ? 'betray' : 'cooperate'
  }
  
  // Calculate rope path points
  const ropePoints = useMemo(() => {
    const points = []
    const segments = 20
    const amplitude = 5 // Wave height
    const frequency = 2 // Wave frequency
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * 100
      const wave = Math.sin((x * Math.PI * frequency)) * amplitude
      const y = 50 + wave // Center vertically
      points.push({ x, y })
    }
    
    return points
  }, [])

  // Generate SVG path from points
  const ropePath = useMemo(() => {
    return ropePoints.reduce((path, point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`
      // Use cubic bezier curves for smooth rope
      const prevPoint = ropePoints[i - 1]
      const cpx1 = prevPoint.x + (point.x - prevPoint.x) / 3
      const cpx2 = point.x - (point.x - prevPoint.x) / 3
      return `${path} C ${cpx1} ${prevPoint.y}, ${cpx2} ${point.y}, ${point.x} ${point.y}`
    }, '')
  }, [ropePoints])
  
  // Rope animation effect
  useEffect(() => {
    if (!isClient) return

    ropeControls.start({
      pathLength: 1,
      pathOffset: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }, [ropeControls, position, isClient])

  // Game logic effects
  useEffect(() => {
    if (!isClient) return

    // Simulate team strength changes
    const strengthInterval = setInterval(() => {
      setTeamAStrength(Math.random() * 0.5 + 0.75)
      setTeamBStrength(Math.random() * 0.5 + 0.75)
    }, 500)

    // Strategy change interval
    const strategyInterval = setInterval(() => {
      setTeamAStrategy(prev => getRandomStrategy(prev, teamBStrategy))
      setTeamBStrategy(prev => getRandomStrategy(prev, teamAStrategy))
    }, STRATEGY_CHANGE_INTERVAL)

    // Update rope position
    const positionInterval = setInterval(() => {
      setPosition(prev => {
        // Apply strategy modifiers to strength
        const modifiedTeamAStrength = teamAStrength * getStrengthModifier(teamAStrategy, teamBStrategy)
        const modifiedTeamBStrength = teamBStrength * getStrengthModifier(teamBStrategy, teamAStrategy)
        
        const pull = (modifiedTeamAStrength - modifiedTeamBStrength) * PULL_STRENGTH
        const newPos = prev + pull
        return Math.max(20, Math.min(80, newPos))
      })
    }, 50)

    return () => {
      clearInterval(strengthInterval)
      clearInterval(strategyInterval)
      clearInterval(positionInterval)
    }
  }, [isClient, teamAStrength, teamBStrength, teamAStrategy, teamBStrategy])

  return (
    <div className="relative h-full w-full bg-gray-900/50 backdrop-blur overflow-hidden">
      {/* Strategy indicators */}
      <div className="absolute left-4 top-4 flex flex-col gap-2">
        <StrategyIndicator
          strategy="cooperate"
          isActive={teamAStrategy === 'cooperate'}
          position="left"
        />
        <StrategyIndicator
          strategy="betray"
          isActive={teamAStrategy === 'betray'}
          position="left"
        />
      </div>
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <StrategyIndicator
          strategy="cooperate"
          isActive={teamBStrategy === 'cooperate'}
          position="right"
        />
        <StrategyIndicator
          strategy="betray"
          isActive={teamBStrategy === 'betray'}
          position="right"
        />
      </div>

      {/* Teams */}
      <motion.div
        animate={{ 
          x: position > 50 ? -20 : 0 // Move back when losing
        }}
        transition={{ duration: 0.5 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-4"
      >
        <TeamCharacter
          strength={teamAStrength * getStrengthModifier(teamAStrategy, teamBStrategy)}
          isLeaning={true}
          isWinning={false}
        />
        <TeamCharacter
          strength={teamAStrength * getStrengthModifier(teamAStrategy, teamBStrategy)}
          isLeaning={true}
          isWinning={false}
        />
      </motion.div>
      <motion.div
        animate={{ 
          x: position < 50 ? 20 : 0 // Move back when losing
        }}
        transition={{ duration: 0.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-4"
      >
        <TeamCharacter
          strength={teamBStrength * getStrengthModifier(teamBStrategy, teamAStrategy)}
          isLeaning={false}
          isWinning={false}
        />
        <TeamCharacter
          strength={teamBStrength * getStrengthModifier(teamBStrategy, teamAStrategy)}
          isLeaning={false}
          isWinning={false}
        />
      </motion.div>

      {/* Force Particles */}
      <ForceParticles
        position={position}
        intensity={teamAStrength * getStrengthModifier(teamAStrategy, teamBStrategy)}
        side="left"
      />
      <ForceParticles
        position={position}
        intensity={teamBStrength * getStrengthModifier(teamBStrategy, teamAStrategy)}
        side="right"
      />

      {/* Rope */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Rope shadow */}
          <motion.path
            d={ropePath}
            stroke="rgba(0,0,0,0.3)"
            strokeWidth="4"
            fill="none"
            animate={ropeControls}
            style={{ translateY: '2px' }}
          />
          {/* Main rope */}
          <motion.path
            d={ropePath}
            stroke="url(#ropeGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={ropeControls}
          />
          {/* Rope texture */}
          <motion.path
            d={ropePath}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
            strokeDasharray="2 4"
            fill="none"
            animate={ropeControls}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ff1493' }} />
              <stop offset="50%" style={{ stopColor: '#ffd700' }} />
              <stop offset="100%" style={{ stopColor: '#ff1493' }} />
            </linearGradient>
          </defs>
        </svg>

        {/* Center marker */}
        <motion.div 
          className="w-8 h-8 rounded-full bg-white shadow-glow absolute"
          style={{ 
            top: '50%',
            transform: 'translateY(-50%)'
          }}
          animate={{
            x: `${position}%`,
            rotate: position * 3.6, // Rotate based on position
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        />
      </div>

      {/* Power indicators */}
      <motion.div
        animate={{ 
          opacity: teamAStrength,
          scale: teamAStrength > teamBStrength ? 1.1 : 1
        }}
        className="absolute left-24 top-1/4 text-squid-pink text-xl font-mono"
      >
        POWER {(teamAStrength * getStrengthModifier(teamAStrategy, teamBStrategy) * 100).toFixed(0)}%
      </motion.div>
      <motion.div
        animate={{ 
          opacity: teamBStrength,
          scale: teamBStrength > teamAStrength ? 1.1 : 1
        }}
        className="absolute right-24 top-1/4 text-squid-pink text-xl font-mono"
      >
        POWER {(teamBStrength * getStrengthModifier(teamBStrategy, teamAStrategy) * 100).toFixed(0)}%
      </motion.div>

      {/* Force field effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${position}% 50%, rgba(255,20,147,0.1) 0%, transparent 70%)`
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-squid-pink/50 to-transparent" />
    </div>
  )
}

export default DynamicTugOfWar
