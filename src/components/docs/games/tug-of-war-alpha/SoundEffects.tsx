'use client'

import { useEffect, useRef, useState } from 'react'

interface SoundEffectsProps {
  position: number
  teamAStrength: number
  teamBStrength: number
  showVictory: 'A' | 'B' | null
}

const SoundEffects = ({ position, teamAStrength, teamBStrength, showVictory }: SoundEffectsProps) => {
  const audioContext = useRef<AudioContext | null>(null)
  const oscillator = useRef<OscillatorNode | null>(null)
  const gainNode = useRef<GainNode | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Check for client-side environment
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize audio context only on client side
  useEffect(() => {
    if (!isClient) return

    audioContext.current = new AudioContext()
    gainNode.current = audioContext.current.createGain()
    gainNode.current.connect(audioContext.current.destination)
    gainNode.current.gain.value = 0.1 // Set initial volume

    return () => {
      audioContext.current?.close()
    }
  }, [isClient])

  // Handle tension sound
  useEffect(() => {
    if (!isClient || !audioContext.current || !gainNode.current) return

    // Create and configure oscillator
    if (!oscillator.current) {
      oscillator.current = audioContext.current.createOscillator()
      oscillator.current.type = 'sawtooth'
      oscillator.current.connect(gainNode.current)
      oscillator.current.start()
    }

    // Calculate frequency based on position (center = normal, edges = higher tension)
    const baseFreq = 100
    const tensionFactor = Math.abs(position - 50) / 50 // 0 at center, 1 at edges
    const frequency = baseFreq + (tensionFactor * 200)
    
    // Update oscillator frequency
    oscillator.current.frequency.setTargetAtTime(
      frequency,
      audioContext.current.currentTime,
      0.1
    )

    // Update volume based on total strength
    const totalStrength = teamAStrength + teamBStrength
    gainNode.current.gain.setTargetAtTime(
      0.05 + (totalStrength * 0.05),
      audioContext.current.currentTime,
      0.1
    )

    return () => {
      oscillator.current?.stop()
      oscillator.current?.disconnect()
      oscillator.current = null
    }
  }, [position, teamAStrength, teamBStrength, isClient])

  // Handle victory sound
  useEffect(() => {
    if (!isClient || !audioContext.current || !showVictory) return

    // Create victory sound
    const victoryOsc = audioContext.current.createOscillator()
    const victoryGain = audioContext.current.createGain()
    
    victoryOsc.connect(victoryGain)
    victoryGain.connect(audioContext.current.destination)
    
    // Configure victory sound
    victoryOsc.type = 'sine'
    victoryGain.gain.value = 0
    
    // Victory melody
    const startTime = audioContext.current.currentTime
    const notes = [440, 554.37, 659.25, 880] // A4, C#5, E5, A5
    
    notes.forEach((freq, i) => {
      victoryOsc.frequency.setValueAtTime(freq, startTime + i * 0.2)
      victoryGain.gain.setValueAtTime(0.2, startTime + i * 0.2)
      victoryGain.gain.setValueAtTime(0, startTime + (i + 1) * 0.2 - 0.05)
    })
    
    victoryOsc.start(startTime)
    victoryOsc.stop(startTime + notes.length * 0.2)
    
    return () => {
      victoryOsc.stop()
      victoryOsc.disconnect()
    }
  }, [showVictory, isClient])

  // Handle impact sounds
  useEffect(() => {
    if (!isClient || !audioContext.current) return
    
    // Create impact sound when strength changes significantly
    const createImpact = () => {
      const impactOsc = audioContext.current!.createOscillator()
      const impactGain = audioContext.current!.createGain()
      
      impactOsc.connect(impactGain)
      impactGain.connect(audioContext.current!.destination)
      
      impactOsc.type = 'square'
      impactOsc.frequency.value = 100
      
      const now = audioContext.current!.currentTime
      
      impactGain.gain.setValueAtTime(0.1, now)
      impactGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
      
      impactOsc.start(now)
      impactOsc.stop(now + 0.1)
    }

    if (Math.abs(teamAStrength - teamBStrength) > 0.3) {
      createImpact()
    }
  }, [teamAStrength, teamBStrength, isClient])

  // Don't render anything if not on client side
  if (!isClient) return null

  return null // Audio component doesn't render anything
}

export default SoundEffects
