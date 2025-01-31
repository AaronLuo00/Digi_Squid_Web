'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CodeHighlight from './CodeHighlight'
import CollapsibleCode from './CollapsibleCode'

interface CodeSection {
  title: string
  code: string
  language: string
  description?: string
  isOpen?: boolean
}

interface TerminalCodeBlockProps {
  title?: string
  description?: string
  code?: string
  language: string
  sections?: CodeSection[]
  showLineNumbers?: boolean
}

const TerminalCodeBlock = ({
  title,
  description,
  code = '',
  language,
  sections = [],
  showLineNumbers = true
}: TerminalCodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg overflow-hidden border border-gray-800 group"
    >
      {/* Terminal Header */}
      <div className="bg-gray-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
            />
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer"
            />
            <motion.div 
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer"
            />
          </div>
          {title && (
            <div className="ml-4">
              <h4 className="text-sm font-medium text-squid-pink">{title}</h4>
              {description && (
                <p className="text-xs text-gray-400">{description}</p>
              )}
            </div>
          )}
        </div>
        {!sections.length && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyToClipboard}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              isCopied 
                ? 'bg-green-500/20 text-green-400'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </motion.button>
        )}
      </div>

      {/* Code Content */}
      {sections.length > 0 ? (
        <CollapsibleCode sections={sections} />
      ) : (
        <CodeHighlight
          code={code}
          language={language}
          showLineNumbers={showLineNumbers}
        />
      )}

      {/* Footer */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">{language}</span>
        {!sections.length && (
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-500">Lines: {code.split('\n').length}</span>
            <span className="text-xs text-gray-500">Characters: {code.length}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default TerminalCodeBlock
