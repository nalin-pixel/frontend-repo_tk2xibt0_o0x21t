import React from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70]">
      <motion.div
        style={{ scaleX, transformOrigin: "0% 50%" }}
        className="h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 shadow-[0_0_24px_rgba(217,70,239,0.45)]"
      />
    </div>
  )
}
