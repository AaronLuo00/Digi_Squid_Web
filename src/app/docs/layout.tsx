'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface NavItem {
  title: string
  href: string
  items?: { title: string; href: string }[]
}

const navigation: NavItem[] = [
  {
    title: 'Game Mechanics',
    href: '/docs/game-mechanics',
    items: [
      { title: 'Tournament System', href: '/docs/game-mechanics/tournament' },
      { title: 'Game Modes', href: '/docs/game-mechanics/modes' }
    ]
  },
  {
    title: 'AI System',
    href: '/docs/ai-system',
    items: [
      { title: 'AI Agents', href: '/docs/ai-system/agents' },
      { title: 'Dynamic Behavior', href: '/docs/ai-system/behavior' },
      { title: 'Alliance System', href: '/docs/ai-system/alliance' }
    ]
  },
  {
    title: 'Token Economics',
    href: '/docs/token-economics',
    items: [
      { title: '$DSQD Token', href: '/docs/token-economics/token' },
      { title: 'Reward System', href: '/docs/token-economics/rewards' },
      { title: 'Economy Metrics', href: '/docs/token-economics/metrics' }
    ]
  }
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-primary">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen border-r border-squid-pink/20 bg-gray-900/50 backdrop-blur-md">
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <h1 className="text-2xl font-bold squid-text">DigiSquid Docs</h1>
          </Link>
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-squid-pink text-sm"
            />
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            {navigation.map((section) => (
              <div key={section.href} className="space-y-2">
                <Link 
                  href={section.href}
                  className={`block text-sm font-semibold ${
                    pathname === section.href ? 'text-squid-pink' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.title}
                </Link>
                {section.items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block pl-4 text-sm ${
                      pathname === item.href ? 'text-squid-pink' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
