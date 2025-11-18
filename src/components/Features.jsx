import { motion } from "framer-motion"
import { FileText, CalendarDays, Compass, Bot, Mail, Building2 } from "lucide-react"

const features = [
  {
    title: "AI CV Review",
    desc: "Upload once. Get a skills map, ATS score, and line-by-line suggestions.",
    icon: FileText,
    accent: "from-blue-500 to-sky-400",
  },
  {
    title: "Smart Job Matches",
    desc: "We parse descriptions and match roles to your real strengths.",
    icon: Compass,
    accent: "from-sky-500 to-cyan-400",
  },
  {
    title: "Application Tracker",
    desc: "A kanban pipeline with a calendar that reminds, nudges, and celebrates.",
    icon: CalendarDays,
    accent: "from-cyan-500 to-teal-400",
  },
  {
    title: "AI Cover Letters",
    desc: "Tailored, human-sounding letters grounded in your CV and the role.",
    icon: Mail,
    accent: "from-blue-600 to-indigo-500",
  },
  {
    title: "Company Research",
    desc: "Key facts, culture signals, and recent news distilled for interviews.",
    icon: Building2,
    accent: "from-indigo-500 to-blue-500",
  },
  {
    title: "Agentic Workflow",
    desc: "Your InternAlly bot automates repetitive steps so you don't burn out.",
    icon: Bot,
    accent: "from-blue-400 to-sky-400",
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-blue-50 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_180px_at_10%_20%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_220px_at_90%_30%,rgba(14,165,233,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold text-transparent"
          >
            One workspace for your entire hunt
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-3 text-lg text-slate-600"
          >
            Designed for students to move fast, stay organized, and beat the ATS with less effort.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-blue-500/20`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-white opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
