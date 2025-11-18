import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, Activity, Wand2 } from "lucide-react"

export default function FloatingDock() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const items = [
    { key: "search", label: "Search Jobs", icon: Search, hint: "Ctrl/⌘K" },
    { key: "create", label: "Quick Create", icon: Plus, hint: "C" },
    { key: "track", label: "Open Tracker", icon: Activity, hint: "T" },
    { key: "surprise", label: "AI Surprise", icon: Wand2, hint: "S" },
  ]

  return (
    <div className="fixed inset-x-0 bottom-6 z-[65] flex justify-center px-6">
      <div className="relative">
        <div className="mx-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-2 shadow-xl backdrop-blur">
          {items.map((it) => (
            <button
              key={it.key}
              onMouseEnter={() => setHovered(it.key)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpen(true)}
              className="group relative inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              <it.icon className="h-4 w-4 text-violet-600" />
              <span className="hidden sm:inline">{it.label}</span>
              <span className="ml-1 hidden text-xs text-slate-400 sm:inline">{it.hint}</span>
              <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/0 to-fuchsia-500/0 opacity-0 transition-opacity group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 group-hover:opacity-100" />
            </button>
          ))}
        </div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-full border border-violet-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-lg"
            >
              Tip: Press Ctrl/⌘K to open
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CommandPalette open={open} setOpen={setOpen} />
    </div>
  )
}

function CommandPalette({ open, setOpen }) {
  const [query, setQuery] = useState("")
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [setOpen])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[66] grid place-items-center bg-slate-950/50 p-6 backdrop-blur"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-violet-200/60 bg-white/90 p-4 shadow-2xl backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
              <Search className="h-4 w-4 text-violet-600" />
              <input
                autoFocus={mounted}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask, search, or create…"
                className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 outline-none"
              />
              <kbd className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">Esc</kbd>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                { title: "Find internships near me", icon: Search },
                { title: "Create a follow-up task", icon: Plus },
                { title: "Open application tracker", icon: Activity },
                { title: "Draft cover letter for Data Intern", icon: Wand2 },
              ]
                .filter((a) => a.title.toLowerCase().includes(query.toLowerCase()))
                .map((a) => (
                  <button key={a.title} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left text-sm text-slate-700 hover:border-violet-200">
                    <a.icon className="h-4 w-4 text-violet-600" />
                    <span>{a.title}</span>
                    <span className="ml-auto text-xs text-slate-400">Enter</span>
                    <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-violet-500/0 to-fuchsia-500/0 opacity-0 transition-opacity group-hover:from-violet-500/5 group-hover:to-fuchsia-500/5 group-hover:opacity-100" />
                  </button>
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
