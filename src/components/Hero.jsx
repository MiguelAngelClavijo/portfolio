import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      {/* Availability badge */}
      <motion.div {...fadeUp(0.1)} className="mb-8">
        <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/60 text-[#555e7a] text-sm px-4 py-2 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </span>
      </motion.div>

      {/* Main heading */}
      <div className="max-w-4xl mx-auto">
        <motion.h1
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-[#1a1d23] leading-[1.05] tracking-tight mb-2"
        >
          I'm Miguel
        </motion.h1>
        <motion.h1
          {...fadeUp(0.3)}
          className="text-5xl md:text-7xl lg:text-8xl font-light text-[#1a1d23] leading-[1.05] tracking-tight"
        >
          Creative{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#1e2540] to-[#4a5280] bg-clip-text text-transparent font-medium">
              Engineer
            </span>
            <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1e2540]/30 to-[#4a5280]/10 rounded-full" />
          </span>
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.4)}
        className="mt-8 text-[#7a849a] text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
      >
        Bridging creativity, design and production systems
        <br className="hidden sm:block" />
        in global digital environments.
      </motion.p>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.5)}
        className="mt-10 flex flex-col sm:flex-row items-center gap-3"
      >
        <a href="#work" className="btn-primary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          View Work
        </a>
        <a href="#about" className="btn-secondary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 12c0-2.21 2.239-4 5-4s5 1.79 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          About Me
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div
        {...fadeUp(0.6)}
        className="mt-16 grid grid-cols-3 gap-6 md:gap-12"
      >
        {[
          { value: '6+', label: 'Years experience' },
          { value: '30+', label: 'Campaigns delivered' },
          { value: '2k+', label: 'Tool users' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-[#1a1d23]">{s.value}</div>
            <div className="text-xs md:text-sm text-[#7a849a] mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-[#aab4c4]"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
