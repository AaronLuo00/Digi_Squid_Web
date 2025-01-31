'use client'

import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-solidity'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

interface CodeHighlightProps {
  code: string
  language: string
  title?: string
  description?: string
  showLineNumbers?: boolean
}

const CodeHighlight = ({ 
  code, 
  language, 
  title, 
  description,
  showLineNumbers = true 
}: CodeHighlightProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll()
    }
  }, [code])

  return (
    <div className="code-block">
      {(title || description) && (
        <div className="px-4 py-3 bg-gray-900 border-b border-gray-800">
          {title && <h4 className="text-sm font-medium text-squid-pink">{title}</h4>}
          {description && <p className="text-xs text-gray-400 mt-1">{description}</p>}
        </div>
      )}
      <pre className={`${showLineNumbers ? 'line-numbers' : ''} language-${language}`}>
        <code className={`language-${language}`}>{code.trim()}</code>
      </pre>
    </div>
  )
}

export default CodeHighlight
