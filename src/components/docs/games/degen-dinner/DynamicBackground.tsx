import { motion } from 'framer-motion'

const DynamicBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 0, 128, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 0, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}
      />

      {/* Animated circles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full"
          style={{
            width: 200 + i * 100,
            height: 200 + i * 100,
            border: '1px solid rgba(255, 0, 128, 0.1)',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Glowing orbs */}
      {[
        { x: [-95, -95], y: [0, 0], delay: 0 },           // 0 degrees
        { x: [47.5, 47.5], y: [82.5, 82.5], delay: 0.33 }, // 120 degrees
        { x: [47.5, 47.5], y: [-82.5, -82.5], delay: 0.66 } // 240 degrees
      ].map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: 10,
            height: 10,
            background: 'rgba(255, 0, 128, 0.3)',
            filter: 'blur(5px)',
            left: '50%',
            top: '50%'
          }}
          animate={{
            x: orb.x,
            y: orb.y,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: orb.delay
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              transparent 0%,
              rgba(0, 0, 0, 0.2) 100%
            )
          `
        }}
      />
    </div>
  )
}

export default DynamicBackground
