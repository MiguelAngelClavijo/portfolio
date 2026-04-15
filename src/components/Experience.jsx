import { motion } from 'framer-motion'

const roles = [
  {
    title: 'Creative Engineer',
    company: 'Publicis Groupe',
    period: '2022 – Present',
    location: 'Bogotá, Colombia',
    highlights: [
      'HTML5 creative production for global brand campaigns',
      'Multi-format adaptation across 20+ ad specs',
      'QA, performance audits, and compliance reviews',
      'Coordination with creative, strategy, and media teams',
    ],
    current: true,
  },
  {
    title: 'Designer & UX Lead',
    company: 'DB System',
    period: '2019 – 2022',
    location: 'Bogotá, Colombia',
    highlights: [
      'Brand identity and visual system from scratch',
      'UX research and interface redesign for SaaS products',
      'Built internal design system and component library',
      'Led design review cycles with engineering team',
    ],
    current: false,
  },
  {
    title: 'Multimedia Designer',
    company: 'Colvatel',
    period: '2017 – 2019',
    location: 'Bogotá, Colombia',
    highlights: [
      'IoT dashboard UI for building management systems',
      'Motion graphics and branded video content',
      'Digital campaigns and print collateral',
      'UX design for internal enterprise tools',
    ],
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-5 inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="3.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 3.5V3a2 2 0 014 0v.5" stroke="currentColor" strokeWidth="1.5"/></svg>
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-4">
            Where I've worked
          </h2>
        </motion.div>

        <div className="space-y-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 md:p-8 group hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                {/* Left col */}
                <div className="md:w-56 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[#1a1d23]">{r.title}</h3>
                    {r.current && (
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-medium text-[#555e7a]">{r.company}</p>
                  <p className="text-xs text-[#aab4c4] mt-1">{r.period}</p>
                  <p className="text-xs text-[#aab4c4]">{r.location}</p>
                </div>

                {/* Right col — highlights */}
                <div className="flex-1 border-t border-[#eef0f4] md:border-t-0 md:border-l md:border-[#eef0f4] pt-4 md:pt-0 md:pl-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                    {r.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[#7a849a]">
                        <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7.5l3 3 6-6" stroke="#1e2540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
