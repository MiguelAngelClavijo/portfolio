import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import WhatIWorkWith from './components/WhatIWorkWith'
import About from './components/About'
import Experience from './components/Experience'
import Comparison from './components/Comparison'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/40 to-indigo-100/20 blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-slate-100/50 to-blue-50/30 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Work />
          <WhatIWorkWith />
          <About />
          <Experience />
          <Comparison />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
