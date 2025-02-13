'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface TokenTransaction {
  id: string
  type: 'reward' | 'stake' | 'transfer'
  amount: number
  timestamp: number
}

export default function TokenDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [transactions, setTransactions] = useState<TokenTransaction[]>([])
  const [totalStaked, setTotalStaked] = useState(5000)
  const [rewardPool, setRewardPool] = useState(7500)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  const simulateTransactions = () => {
    setIsAnimating(true)
    const newTransactions: TokenTransaction[] = []
    let iteration = 0
    
    const interval = setInterval(() => {
      const type = ['reward', 'stake', 'transfer'][Math.floor(Math.random() * 3)] as TokenTransaction['type']
      const amount = Math.floor(Math.random() * 1000) + 100
      
      newTransactions.push({
        id: `tx-${Date.now()}-${iteration}`,
        type,
        amount,
        timestamp: Date.now()
      })

      setTransactions([...newTransactions].slice(-5))

      // Update stats based on transaction type
      switch (type) {
        case 'stake':
          setTotalStaked(prev => prev + amount)
          break
        case 'reward':
          setRewardPool(prev => Math.max(0, prev - amount))
          break
      }

      iteration++
      if (iteration >= 10) {
        clearInterval(interval)
        setIsAnimating(false)
      }
    }, 800)
  }

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative"
    >
      <div className="text-center mb-8">
        <span className="game-number text-lg mb-2 block">GAME #218</span>
        <h2 className="text-3xl font-bold squid-text mb-4">Token Economics</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience our dynamic token economy. Watch how $DSG flows through the 
          ecosystem, rewarding players and maintaining game balance.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 border border-gray-800 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">Total Staked</div>
            <motion.div 
              className="token-amount text-2xl"
              animate={{ scale: totalStaked > 5000 ? [1, 1.1, 1] : 1 }}
            >
              {totalStaked.toLocaleString()} $DSG
            </motion.div>
          </div>
          <div className="p-4 border border-gray-800 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">Reward Pool</div>
            <motion.div 
              className="token-amount text-2xl"
              animate={{ scale: rewardPool < 7500 ? [1, 1.1, 1] : 1 }}
            >
              {rewardPool.toLocaleString()} $DSG
            </motion.div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="border border-gray-800 rounded-lg overflow-hidden mb-6">
          <div className="px-4 py-2 bg-gray-800/50 border-b border-gray-700">
            <span className="text-sm text-gray-400">Recent Transactions</span>
          </div>
          <div className="divide-y divide-gray-800">
            {transactions.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                No transactions yet
              </div>
            ) : (
              transactions.map(tx => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="px-4 py-3 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <span className={`
                      w-2 h-2 rounded-full
                      ${tx.type === 'reward' ? 'bg-green-500' : 
                        tx.type === 'stake' ? 'bg-blue-500' : 
                        'bg-squid-pink'}
                    `} />
                    <span className="text-sm capitalize">{tx.type}</span>
                  </div>
                  <span className="token-amount text-sm">
                    {tx.type === 'reward' ? '-' : '+'}{tx.amount} $DSG
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={simulateTransactions}
            disabled={isAnimating}
            className="squid-button px-6 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
          >
            {isAnimating ? 'Simulating...' : 'Simulate Transactions'}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
