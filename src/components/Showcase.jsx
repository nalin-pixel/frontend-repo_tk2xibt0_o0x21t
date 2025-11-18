import { motion } from "framer-motion"

const items = [
  {
    title: "CV Heatmap",
    subtitle: "Know what recruiters see",
    img: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Match Insights",
    subtitle: "Why this role fits you",
    img: "https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Pipeline + Calendar",
    subtitle: "Never miss a follow-up",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Showcase() {
  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_200px_at_50%_0%,rgba(168,85,247,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent"
          >
            Feels like magic. Works like a system.
          </motion.h2>
          <p className="mt-3 text-lg text-slate-600">
            A bespoke interface that turns chaos into progress.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10, rotate: i % 2 ? -1.2 : 1.2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, type: "spring", stiffness: 140, damping: 16 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white will-change-transform"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={card.img} alt="preview" className="h-full w-full origin-center object-cover transition-transform duration-500 group-hover:scale-105 group-hover:skew-y-1" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-1 text-slate-600">{card.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
