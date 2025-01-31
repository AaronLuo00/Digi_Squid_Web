'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CyberModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  buttonText?: string
  onButtonClick?: (email?: string) => void
  showEmailInput?: boolean
}

const CyberModal = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText = 'Close',
  onButtonClick,
  showEmailInput = false
}: CyberModalProps) => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const handleSubmit = () => {
    if (showEmailInput) {
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        setIsValidEmail(false)
        return
      }
      setIsValidEmail(true)
      onButtonClick?.(email)
    } else {
      onButtonClick?.()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="relative pointer-events-auto">
              {/* Glow Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-squid-pink via-blue-500 to-squid-pink rounded-lg opacity-20 blur group-hover:opacity-30 transition-opacity" />
              
              {/* Content */}
              <div className="relative bg-gray-900/90 backdrop-blur-lg border border-squid-pink/50 rounded-lg p-8 min-w-[320px] max-w-md">
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl font-bold gradient-text mb-4"
                >
                  {title}
                </motion.h3>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 mb-6"
                >
                  {description}
                </motion.p>

                {/* Email Input */}
                {showEmailInput && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setIsValidEmail(true)
                      }}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-2 bg-gray-800/50 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                        isValidEmail 
                          ? 'border-gray-700 focus:border-squid-pink/50 focus:ring-squid-pink/20'
                          : 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20'
                      }`}
                    />
                    {!isValidEmail && (
                      <p className="mt-2 text-sm text-red-400">
                        Please enter a valid email address
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleSubmit}
                    className="squid-button px-6 py-2 rounded-lg hover:scale-105 active:scale-95 transition-transform"
                  >
                    {buttonText}
                  </button>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-squid-pink/50 -translate-x-1 -translate-y-1" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-squid-pink/50 translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-squid-pink/50 -translate-x-1 translate-y-1" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-squid-pink/50 translate-x-1 translate-y-1" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CyberModal
