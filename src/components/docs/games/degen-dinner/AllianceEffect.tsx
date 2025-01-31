import { motion } from 'framer-motion'

interface Point {
  x: number
  y: number
}

interface AllianceEffectProps {
  points: Point[]
  strength: number
}

const AllianceEffect = ({ points, strength }: AllianceEffectProps) => {
  if (points.length < 2) return null

  // Create a unique key for each line based on the points
  const getLineKey = (p1: Point, p2: Point) => {
    const minX = Math.min(p1.x, p2.x)
    const maxX = Math.max(p1.x, p2.x)
    const minY = Math.min(p1.y, p2.y)
    const maxY = Math.max(p1.y, p2.y)
    return `line-${minX}-${minY}-${maxX}-${maxY}`
  }

  // Create lines between all points
  const lines = points.flatMap((p1, i) => 
    points.slice(i + 1).map(p2 => ({
      key: getLineKey(p1, p2),
      x1: p1.x,
      y1: p1.y,
      x2: p2.x,
      y2: p2.y
    }))
  )

  return (
    <g>
      {lines.map(line => (
        <motion.line
          key={line.key}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="rgba(255, 0, 128, 0.3)"
          strokeWidth={2 * strength}
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </g>
  )
}

export default AllianceEffect
