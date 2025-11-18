import Spline from "@splinetool/react-spline"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background gloss */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(700px_500px_at_80%_20%,rgba(14,165,233,0.13),transparent)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-24 pt-16 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-xs text-blue-700 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            InternAlly — AI-powered job search for students
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-5xl font-extrabold leading-[1.05] text-transparent md:text-6xl"
          >
            Cut application time in half. Beat the ATS. Land interviews.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Your personal AI co-pilot reviews your CV, auto-finds roles that fit, crafts tailored cover letters, and keeps your pipeline on track with a smart calendar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#get-started"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-700"
            >
              Start free — no card
            </a>
            <a href="#demo" className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
              See live demo
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1,2,3,4,5].map((i)=> (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="avatar" className="h-8 w-8 rounded-full border-2 border-white" />
              ))}
            </div>
            <span>2,400+ students accelerated</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Avg. 8 hrs saved per week</span>
          </div>
        </div>

        {/* 3D illustrative canvas */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-blue-50 shadow-xl">
          <div className="absolute inset-0 opacity-90 [mask-image:radial-gradient(white,transparent_85%)]">
            <Spline scene="https://prod.spline.design/7b0kGufX0pTt6Y1m/scene.splinecode" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(350px_120px_at_80%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(400px_160px_at_20%_90%,rgba(59,130,246,0.12),transparent)]" />
        </div>
      </div>

      {/* wave divider */}
      <svg className="-mb-px w-full text-blue-50" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="currentColor"><path d="M0 0h1440v40c-120 24-240 36-360 36S720 48 540 48 240 64 120 72 0 80 0 80z"/></svg>
    </section>
  )
}
