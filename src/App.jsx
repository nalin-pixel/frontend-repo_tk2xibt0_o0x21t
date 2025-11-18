import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <footer className="bg-white/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} InternAlly — built to reduce application burnout.</p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#features" className="hover:text-slate-800">Features</a>
            <a href="#demo" className="hover:text-slate-800">Demo</a>
            <a href="#get-started" className="hover:text-slate-800">Get Started</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
