import { useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maya P.",
    role: "CS Sophomore, UIUC",
    quote:
      "InternAlly helped me cut down my applications from 45 minutes to around 15. I got two interviews the first week.",
    avatar: "https://i.pravatar.cc/100?img=15",
    color: "from-violet-500/20 to-fuchsia-400/20",
  },
  {
    name: "Daniel R.",
    role: "Business Freshman, UCLA",
    quote:
      "The CV review caught gaps I never saw. The cover letters sounded like me, just better.",
    avatar: "https://i.pravatar.cc/100?img=32",
    color: "from-fuchsia-500/20 to-pink-400/20",
  },
  {
    name: "Sarah K.",
    role: "Data Science Junior, UT Austin",
    quote:
      "The pipeline and nudges kept me consistent. I stopped dropping the ball on follow-ups.",
    avatar: "https://i.pravatar.cc/100?img=23",
    color: "from-pink-500/20 to-rose-400/20",
  },
  {
    name: "Leo W.",
    role: "Software Intern, Waterloo",
    quote:
      "I finally understood why a role fit me — the insights were gold in interviews.",
    avatar: "https://i.pravatar.cc/100?img=5",
    color: "from-indigo-500/20 to-violet-500/20",
  },
]

function useRing(n, step = 1.2) {
  return useMemo(() => Array.from({ length: n }, (_, i) => i * step), [n, step])
}

export default function Testimonials() {
  const ring = useRing(6, 0.6)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-violet-50 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_240px_at_80%_10%,rgba(217,70,239,0.10),transparent),radial-gradient(500px_200px_at_20%_90%,rgba(139,92,246,0.10),transparent)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent"
          >
            Students sharing wins
          </motion.h2>
          <p className="mt-3 text-lg text-slate-600">
            Real stories from early career seekers beating the odds.
          </p>
        </div>

        <div className="mt-14">
          <div className="relative">
            {/* Orbiting quote chips */}
            <div className="pointer-events-none absolute inset-0">
              {ring.map((r, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 40 + i * 5, ease: "linear", repeat: Infinity }}
                  style={{ transformOrigin: `${8 + i * 6}rem center` }}
                >
                  <div className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 p-2 backdrop-blur">
                    <Quote className="h-3 w-3 text-fuchsia-600" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel */}
            <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 12, rotate: i % 2 ? -1.5 : 1.5, skewX: i % 2 ? -3 : 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0, skewX: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 140, damping: 16 }}
                  className="card-hover-tilt group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className={`absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-to-br ${t.color} blur-2xl`} />
                  <div className="tilt-up relative z-10">
                    <div className="flex items-center gap-3">
                      <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full border-2 border-white" />
                      <div>
                        <figcaption className="font-semibold text-slate-900">{t.name}</figcaption>
                        <div className="text-sm text-slate-500">{t.role}</div>
                      </div>
                      <div className="ml-auto flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="mt-4 text-slate-700">
                      “{t.quote}”
                    </blockquote>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
