import React, { useEffect, useRef, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function Spotlight() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.2 })
  const frame = useRef(0)

  useEffect(() => {
    setMounted(true)
    const onMove = (e) => {
      const nx = e.clientX
      const ny = e.clientY
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(() => {
        x.set(nx)
        y.set(ny)
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(frame.current)
    }
  }, [x, y])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] mix-blend-normal">
      {/* Soft vignette + grain to elevate depth */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_10%,rgba(139,92,246,0.08),transparent_70%)]" />
      <div className="noise-overlay absolute inset-0 opacity-[0.08]" />

      {/* Spotlight highlight that follows cursor */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: sx && sy ? sx.to((vx) => vx) && sy.to((vy) => vy) : undefined,
        }}
      >
        {/* We can't directly bind gradient center to a function in style with two springs, so render a child with inline style from latest values */}
        <MotionSpot sx={sx} sy={sy} />
      </motion.div>
    </div>
  )
}

function MotionSpot({ sx, sy }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const unsubX = sx.on("change", (vx) => setPos((p) => ({ ...p, x: vx })))
    const unsubY = sy.on("change", (vy) => setPos((p) => ({ ...p, y: vy })))
    return () => {
      unsubX?.()
      unsubY?.()
    }
  }, [sx, sy])

  const size = 240
  const bg = `radial-gradient(${size}px ${size}px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.14), transparent 60%)`

  return <div className="absolute inset-0" style={{ background: bg, mixBlendMode: "soft-light" }} />
}
