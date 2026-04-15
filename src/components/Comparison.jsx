import { motion } from 'framer-motion'

const meItems = [
  'Production-ready HTML5 creatives',
  'Cross-platform execution at scale',
  'Design + code fluency in the same workflow',
  'Performance-aware design decisions',
  'Global agency production standards',
  'QA-first mindset from brief to delivery',
]

const othersItems = [
  'Static design files only',
  'No production awareness',
  'Handoff gap between design and code',
  'No performance consideration',
  'Limited to one discipline',
  'Design that never ships as intended',
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-5 inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M5 3l-4 4 4 4M9 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Comparison
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-4">
            Production vs. Static
          </h2>
          <p className="text-[#7a849a] text-lg max-w-lg mx-auto">
            The gap between designing it and delivering it — I work on both sides.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Me card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e2540]/3 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-semibold text-[#1a1d23] text-center mb-2">Me</h3>
            <div className="border-t border-dashed border-[#d0d5e0] my-5" />
            <ul className="space-y-3.5">
              {meItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#555e7a]">
                  <div className="w-5 h-5 rounded-full bg-[#1e2540]/10 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5.5l2 2 4-4" stroke="#1e2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href="#contact" className="btn-primary w-full justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Let's talk
              </a>
            </div>
          </motion.div>

          {/* Others card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-8 bg-white/50"
          >
            <h3 className="text-2xl font-light text-[#aab4c4] text-center mb-2">Others</h3>
            <div className="border-t border-dashed border-[#d0d5e0] my-5" />
            <ul className="space-y-3.5">
              {othersItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#aab4c4]">
                  <div className="w-5 h-5 rounded-full bg-[#eef0f4] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#aab4c4" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
