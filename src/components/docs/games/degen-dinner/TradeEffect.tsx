import { motion } from 'framer-motion'

interface TradeEffectProps {
  x: number
  y: number
  color: string
}

const TradeEffect = ({ x, y, color }: TradeEffectProps) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: 40,
        height: 40,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
        times: [0, 0.3, 1]
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 40 40">
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          stroke={color}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        />
        
        <motion.circle
          cx="20"
          cy="20"
          r="12"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 0.3, 1]
          }}
          style={{ opacity: 0.3 }}
        />
        
        {/* Sparkles */}
        {[0, 90, 180, 270].map((angle, i) => (
          <motion.path
            key={`sparkle-${angle}`}
            d="M 20 20 L 20 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${angle} 20 20)`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: "easeOut",
              times: [0, 0.3, 1]
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default TradeEffect
