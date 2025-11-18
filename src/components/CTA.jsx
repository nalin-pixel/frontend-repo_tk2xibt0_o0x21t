import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_10%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(500px_200px_at_90%_20%,rgba(14,165,233,0.12),transparent)]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-extrabold text-transparent"
        >
          Start applying smarter in minutes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-3 max-w-2xl text-slate-300"
        >
          Sign in with your .edu email to unlock student perks. Free plan includes CV review, 5 job matches/day, and the tracker.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a href="#" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700">
            Create free account
          </a>
          <a href="/test" className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-slate-600">
            Check system status
          </a>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["No card required","Privacy-first","Cancel anytime"].map((b) => (
            <div key={b} className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 text-slate-300">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
