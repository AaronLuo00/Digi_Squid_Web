'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import GameMechanicsIcon from '@/components/icons/nav/GameMechanicsIcon'
import AISystemIcon from '@/components/icons/nav/AISystemIcon'
import TokenEconomicsIcon from '@/components/icons/nav/TokenEconomicsIcon'
import RedLightGreenLightIcon from '@/components/icons/RedLightGreenLightIcon'
import TugOfWarIcon from '@/components/icons/TugOfWarIcon'
import MarbleIcon from '@/components/icons/MarbleIcon'
import CookieIcon from '@/components/icons/CookieIcon'
import DinnerIcon from '@/components/icons/DinnerIcon'

const navigation = {
  main: [
    {
      title: 'Game Mechanics',
      href: '/docs/game-mechanics',
      icon: GameMechanicsIcon,
      items: [
        { title: 'Single Play Mode', href: '/docs/game-mechanics/modes/single-play' },
        { title: 'Tournament System', href: '/docs/game-mechanics/tournament' },
        { title: 'Game Modes', href: '/docs/game-mechanics/modes' }
      ]
    },
    {
      title: 'AI System',
      href: '/docs/ai-system',
      icon: AISystemIcon,
      items: [
        { title: 'AI Agents', href: '/docs/ai-system/agents' },
        { title: 'Behavior Patterns', href: '/docs/ai-system/behavior' },
        { title: 'Alliance Dynamics', href: '/docs/ai-system/alliance' }
      ]
    },
    {
      title: 'Token Economics',
      href: '/docs/token-economics',
      icon: TokenEconomicsIcon,
      items: [
        { title: 'Token Utility', href: '/docs/token-economics/token' },
        { title: 'Reward System', href: '/docs/token-economics/rewards' }
      ]
    }
  ],
  games: [
    {
      title: 'Red Light, Green Light X',
      href: '/docs/games/red-light-green-light-x',
      icon: RedLightGreenLightIcon,
      number: '456'
    },
    {
      title: 'Tug of War ALPHA',
      href: '/docs/games/tug-of-war-alpha',
      icon: TugOfWarIcon,
      number: '123'
    },
    {
      title: 'Marble Mayhem',
      href: '/docs/games/marble-mayhem',
      icon: MarbleIcon,
      number: '067'
    },
    {
      title: 'Cookie Smash',
      href: '/docs/games/cookie-smash',
      icon: CookieIcon,
      number: '218'
    },
    {
      title: 'Degen Dinner',
      href: '/docs/games/degen-dinner',
      icon: DinnerIcon,
      number: '199'
    }
  ]
}

const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 squid-button p-2 rounded-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMobile ? { x: "-320px" } : {}}
            animate={{ x: "0px" }}
            exit={isMobile ? { x: "-320px" } : {}}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="fixed top-0 left-0 w-[80vw] max-w-[320px] md:w-64 h-screen overflow-y-auto z-40"
          >
            {/* Glass effect background */}
            <div 
              className="absolute inset-0 bg-gray-900/50 backdrop-blur-md border-r border-gray-800/50"
              style={{ willChange: 'backdrop-filter' }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-6 space-y-8">
              {/* Logo */}
              <Link href="/" className="block">
                <h1 className="text-xl font-bold squid-text">DigitalSquid Docs</h1>
              </Link>

              {/* Main Navigation */}
              <div className="space-y-8">
                {/* Main Sections */}
                <div className="space-y-2">
            {navigation.main.map((section) => (
              <div key={section.title} className="space-y-2">
                <Link
                  href={section.href}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-2 px-2 py-2.5 md:py-1.5 rounded-lg transition-all duration-200 ${
                    isActive(section.href)
                      ? 'bg-squid-pink/20 text-squid-pink shadow-lg shadow-squid-pink/20'
                      : 'hover:bg-gray-800/50 hover:shadow-md'
                  }`}
                >
                  <section.icon size={24} />
                  <span className="font-medium">{section.title}</span>
                </Link>
                {section.items && (
                  <div className="ml-8 space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`block px-2 py-2 md:py-1 text-sm rounded-lg transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-squid-pink/20 text-squid-pink shadow-lg shadow-squid-pink/20'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:shadow-md'
                        }`}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

                {/* Games Section */}
                <div className="space-y-2">
                  <div className="px-2 py-1.5 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Games
                  </div>
                  {navigation.games.map((game) => (
              <Link
                key={game.href}
                href={game.href}
                onClick={handleLinkClick}
                className={`flex items-center space-x-2 px-2 py-2.5 md:py-1.5 rounded-lg transition-all duration-200 group ${
                  isActive(game.href)
                    ? 'bg-squid-pink/20 text-squid-pink shadow-lg shadow-squid-pink/20'
                    : 'hover:bg-gray-800/50 hover:shadow-md'
                }`}
              >
                <game.icon size={24} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium truncate">{game.title}</span>
                    <span className="text-xs text-gray-500">#{game.number}</span>
                  </div>
                </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
