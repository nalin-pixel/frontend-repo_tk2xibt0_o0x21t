import { motion } from "framer-motion"

const logos = [
  { name: "OpenAI", url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" },
  { name: "Figma", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/4/41/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" },
]

function MarqueeRow({ reverse = false, speed = 35 }) {
  const sequence = [...logos, ...logos]
  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex shrink-0 gap-10 px-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        aria-hidden
      >
        {sequence.map((l, i) => (
          <div key={`${l.name}-${i}`} className="group relative grid place-items-center">
            <div className="relative flex h-10 items-center opacity-70 transition-opacity group-hover:opacity-100">
              <img src={l.url} alt={l.name} className="h-7 w-auto invert-0" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Brands() {
  return (
    <section className="relative bg-white py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_160px_at_20%_0%,rgba(139,92,246,0.10),transparent)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-fuchsia-200/70 bg-white/60 px-3 py-1 text-xs text-fuchsia-700 backdrop-blur">
            Trusted by students landing roles at
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <MarqueeRow />
          <MarqueeRow reverse speed={42} />
        </div>
      </div>
    </section>
  )
}
