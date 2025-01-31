'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CodeHighlight from './CodeHighlight'

interface CodeSection {
  title: string
  code: string
  language: string
  description?: string
  isOpen?: boolean
}

interface CollapsibleCodeProps {
  sections: CodeSection[]
}

const CollapsibleCode = ({ sections }: CollapsibleCodeProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    sections.reduce((acc, section) => ({
      ...acc,
      [section.title]: section.isOpen ?? true
    }), {})
  )

  return (
    <div className="space-y-2">
      {sections.map((section) => (
        <div 
          key={section.title} 
          className="border border-gray-800 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenSections(prev => ({
              ...prev,
              [section.title]: !prev[section.title]
            }))}
            className="w-full px-4 py-3 bg-gray-900 flex items-center justify-between hover:bg-gray-800/50 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <motion.span
                animate={{ rotate: openSections[section.title] ? 90 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-squid-pink/70 group-hover:text-squid-pink transition-colors"
              >
                →
              </motion.span>
              <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                {section.title}
              </span>
            </div>
          </button>
          <AnimatePresence initial={false}>
            {openSections[section.title] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <CodeHighlight
                  code={section.code}
                  language={section.language}
                  description={section.description}
                  showLineNumbers={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default CollapsibleCode
