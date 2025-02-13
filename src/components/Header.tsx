'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './logo/Logo'

interface NavItem {
  name: string
  label: string
  href: string
  special?: boolean
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems: NavItem[] = [
    { name: '001', label: 'Documentation', href: '/docs' },
    { name: '002', label: 'Community', href: 'https://t.me/+j8wJ6jOYR3tjNWRl' },
    { name: '003', label: 'Twitter', href: 'https://x.com/DegenSquid_tech' },
    { name: '004', label: 'GitHub', href: 'https://github.com/CohumanSpace/degen-engine' },
    { name: '005', label: 'GET $DSG', href: 'https://gmgn.ai/sol/token/A7WgUQYq_7LsX88bhz8KiFcEFQYcdP6xMRsiMYPUXgYMPZMUzpump', special: true },
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-squid-pink/10"
    >
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Center Stats */}
          <div className="hidden lg:flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-squid-pink font-mono">ONLINE:</span>
              <span className="text-white font-mono">1,234</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-squid-pink font-mono">PRIZE POOL:</span>
              <span className="text-white font-mono">88000 $DSG</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-squid-pink font-mono">NEXT GAME:</span>
              <span className="text-white font-mono">12:00 UTC</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-2 ${
                  item.special ? 'font-medium nav-special' : ''
                }`}
              >
                <span className="game-number absolute -top-3 -left-4 opacity-50 group-hover:opacity-100 text-xs">
                  {item.name === '005' ? '$' : item.name}
                </span>
                <span 
                  className={`
                    text-sm transition-all duration-300
                    ${item.special 
                      ? 'text-squid-pink hover:text-white hover:shadow-glow' 
                      : 'text-gray-300 hover:text-squid-pink'
                    }
                  `}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden squid-button px-3 py-1 rounded-md"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen 
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-squid-pink/10"
            >
              <div className="px-4 py-2 space-y-1">
                {/* Mobile Stats */}
                <div className="grid grid-cols-2 gap-2 py-2 text-xs border-b border-squid-pink/10">
                  <div className="flex items-center space-x-2">
                    <span className="text-squid-pink font-mono">ONLINE:</span>
                    <span className="text-white font-mono">1,234</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-squid-pink font-mono">POOL:</span>
                    <span className="text-white font-mono">88K</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <span className="text-squid-pink font-mono">NEXT:</span>
                    <span className="text-white font-mono">12:00 UTC</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="py-2 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium relative group ${
                        item.special ? 'text-squid-pink' : 'text-gray-300'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="game-number absolute left-0 top-1/2 -translate-y-1/2 opacity-50 text-xs pl-1">
                        {item.name === '005' ? '$' : item.name}
                      </span>
                      <span className="pl-6">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
