import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Rocket } from "lucide-react"

export default function Experiments() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_10%_0%,rgba(139,92,246,0.08),transparent),radial-gradient(500px_200px_at_90%_20%,rgba(217,70,239,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent"
          >
            Futures Lab — playful, brave, and useful
          </motion.h2>
          <p className="mt-3 text-lg text-slate-600">
            A few bold UI patterns that still feel professional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Glassy blob card */}
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 130, damping: 16 }}
            className="relative overflow-hidden rounded-2xl border border-violet-200/60 bg-white/70 p-6 shadow-[0_10px_40px_-15px_rgba(168,85,247,0.35)] backdrop-blur"
          >
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 blur-2xl" />
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/30">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Command Palette</h3>
                <p className="mt-2 text-slate-600">Summon actions with a tap. Type to navigate, create, or ask the AI assistant.</p>
              </div>
            </div>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-300">
              Try a mock flow <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Neon underline card */}
          <motion.div
            initial={{ opacity: 0, y: 12, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 130, damping: 16 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">Neon Tabs</h3>
            <p className="mt-2 text-slate-600">Animated, skewed underline that reacts to hover and selection.</p>
            <div className="relative mt-6 inline-flex rounded-full bg-slate-100 p-1">
              {['Overview','Insights','Activity'].map((t, i) => (
                <button key={t} className="relative z-10 rounded-full px-3 py-1.5 text-sm text-slate-700 transition-colors hover:text-slate-900">
                  {t}
                </button>
              ))}
              <motion.span
                layoutId="neon-underline"
                className="absolute inset-y-1 left-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.35)]"
              />
            </div>
          </motion.div>

          {/* Scroll-linked card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 130, damping: 16 }}
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">Scroll-linked progress</h3>
            <p className="mt-2 text-slate-600">A playful indicator that tracks your reading progress.</p>
            <div className="mt-6 h-2 w-full overflow-hidden rounded bg-slate-100">
              <motion.div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 2, ease: "easeOut" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
