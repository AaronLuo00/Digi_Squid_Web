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
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 1, 0],
        rotate: [0, 360]
      }}
      transition={{
        duration: 1.2,
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
        
        {/* Enhanced Sparkles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 360
          return (
            <motion.g key={`sparkle-${angle}`}>
              <motion.path
                d="M 20 20 L 20 10"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                transform={`rotate(${angle} 20 20)`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: "easeOut",
                  times: [0, 0.3, 1]
                }}
              />
              <motion.circle
                cx={20 + Math.cos((angle * Math.PI) / 180) * 8}
                cy={20 + Math.sin((angle * Math.PI) / 180) * 8}
                r="2"
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            </motion.g>
          )
        })}

        {/* Pulse rings */}
        {[1, 2, 3].map((ring) => (
          <motion.circle
            key={`ring-${ring}`}
            cx="20"
            cy="20"
            r="8"
            stroke={color}
            strokeWidth="1"
            fill="none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 2, 3],
              opacity: [0.6, 0.2, 0]
            }}
            transition={{
              duration: 1.5,
              delay: ring * 0.2,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          />
        ))}
      </svg>
    </motion.div>
  )
}

export default TradeEffect
