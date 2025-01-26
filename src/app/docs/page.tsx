'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const features = [
  {
    title: 'Game Mechanics',
    description: 'Learn about our tournament system, game modes, and victory conditions.',
    icon: '🎮',
    href: '/docs/game-mechanics'
  },
  {
    title: 'AI System',
    description: 'Explore our advanced AI agents, their behavior patterns, and alliance dynamics.',
    icon: '🤖',
    href: '/docs/ai-system'
  },
  {
    title: 'Token Economics',
    description: 'Understand $DSQD token utility, reward mechanisms, and economic model.',
    icon: '💎',
    href: '/docs/token-economics'
  }
]

const quickLinks = [
  { title: 'Tournament System', href: '/docs/game-mechanics/tournament' },
  { title: 'AI Agents', href: '/docs/ai-system/agents' },
  { title: 'Reward System', href: '/docs/token-economics/rewards' }
]

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          DigiSquid Documentation
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg"
        >
          Your comprehensive guide to the DigiSquid Games ecosystem. Learn about our game mechanics, 
          AI system, and token economics.
        </motion.p>
      </div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-6 border border-squid-pink/20 rounded-xl bg-gray-900/50 backdrop-blur-sm"
      >
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span className="text-squid-pink font-mono text-sm">→</span>
              <span className="ml-2 text-sm">{link.title}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link
              href={feature.href}
              className="block p-6 border border-gray-800 rounded-xl hover:border-squid-pink/50 transition-colors group"
            >
              <span className="text-3xl mb-4 block transform group-hover:scale-110 transition-transform">
                {feature.icon}
              </span>
              <h3 className="text-lg font-semibold mb-2 squid-text">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Getting Started */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 border border-gray-800 rounded-xl space-y-4"
      >
        <h2 className="text-xl font-semibold">Getting Started</h2>
        <p className="text-gray-400">
          DigiSquid Games combines AI-driven gameplay with blockchain rewards to create 
          an unprecedented gaming experience. Start with our tournament system guide to 
          understand how to participate and earn rewards.
        </p>
        <div className="flex space-x-4">
          <Link
            href="/docs/game-mechanics/tournament"
            className="squid-button px-4 py-2 rounded-lg text-sm inline-flex items-center group"
          >
            Tournament Guide
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
