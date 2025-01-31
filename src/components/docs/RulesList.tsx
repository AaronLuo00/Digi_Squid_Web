'use client'

import { motion } from 'framer-motion'

interface Rule {
  title: string
  description: string
  icon?: string
  subRules?: string[]
}

interface RulesListProps {
  rules: Rule[]
  category: string
}

const RulesList = ({ rules, category }: RulesListProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-squid-pink">{category}</h3>
      <div className="grid gap-4">
        {rules.map((rule, index) => (
          <motion.div
            key={rule.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-squid-pink/50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              {rule.icon && (
                <span className="text-2xl">{rule.icon}</span>
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2">{rule.title}</h4>
                <p className="text-gray-400 text-sm">{rule.description}</p>
                {rule.subRules && rule.subRules.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {rule.subRules.map((subRule, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-center space-x-2">
                        <span className="w-1 h-1 bg-squid-pink rounded-full"></span>
                        <span>{subRule}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RulesList
