import { Menu, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <div className="relative">
      {/* soft top gradient */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-blue-600/20 to-transparent blur-2xl" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg shadow-blue-500/30"
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white shadow-[0_0_0_3px_#1e293b] ring-2 ring-blue-400"
            />
          </div>
          <div className="leading-tight">
            <span className="block text-sm tracking-wide text-slate-500">for students</span>
            <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-2xl font-extrabold text-transparent">InternAlly</span>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {[
            "CV Review",
            "Job Matches",
            "Tracker",
            "Cover Letters",
            "Company Research",
          ].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30 md:inline-block"
          >
            Get Started
          </a>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>
    </div>
  )
}
