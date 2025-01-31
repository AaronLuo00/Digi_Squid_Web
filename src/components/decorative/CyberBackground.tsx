'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  type: 'square' | 'circle' | 'triangle'
  color: string
}

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const isInitializedRef = useRef(false)

  // Initialize particles only on client side
  useEffect(() => {
    if (typeof window === 'undefined' || isInitializedRef.current) return
    isInitializedRef.current = true
    
    const initParticles = () => {
      const particles: Particle[] = []
      const types = ['square', 'circle', 'triangle']
      const colors = ['#ff2975', '#00f6ff']

      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 2,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2,
          type: types[Math.floor(Math.random() * types.length)] as Particle['type'],
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }

      particlesRef.current = particles
    }

    initParticles()
  }, [])

  // Animation loop
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size only on client side
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Draw grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 41, 117, 0.1)'
      ctx.lineWidth = 1

      // Primary grid
      const gridSize = 30
      ctx.beginPath()
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()

      // Secondary grid
      ctx.strokeStyle = 'rgba(0, 246, 255, 0.05)'
      ctx.beginPath()
      const largeGridSize = 60
      for (let x = 0; x <= canvas.width; x += largeGridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      for (let y = 0; y <= canvas.height; y += largeGridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()
    }

    // Draw particles
    const drawParticle = (particle: Particle) => {
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 15
      ctx.shadowColor = particle.color

      switch (particle.type) {
        case 'square':
          ctx.fillRect(
            particle.x - particle.size / 2,
            particle.y - particle.size / 2,
            particle.size,
            particle.size
          )
          break
        case 'circle':
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
          ctx.fill()
          break
        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size / 2)
          ctx.lineTo(particle.x + particle.size / 2, particle.y + particle.size / 2)
          ctx.lineTo(particle.x - particle.size / 2, particle.y + particle.size / 2)
          ctx.closePath()
          ctx.fill()
          break
      }
    }

    // Draw connecting lines
    const drawConnections = () => {
      const maxDistance = 150
      const particles = particlesRef.current

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Update particle positions
    const updateParticles = () => {
      const particles = particlesRef.current

      particles.forEach(particle => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.x -= dx * force * 0.03
          particle.y -= dy * force * 0.03
        }
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      drawGrid()
      updateParticles()
      drawConnections()
      
      particlesRef.current.forEach(drawParticle)
      
      requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    // Start animation and add event listeners
    animate()
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/50 to-primary opacity-50" />
      </motion.div>
    </>
  )
}

export default CyberBackground
