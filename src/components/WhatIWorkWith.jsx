import { motion } from 'framer-motion'

const disciplines = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 7l8-4 8 4v8l-8 4-8-4V7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 3v16M3 7l8 4 8-4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Creative Engineering',
    description:
      'Building interactive HTML5 creatives, animated campaigns, and rich digital formats. Code that performs at scale across platforms.',
    tags: ['HTML5 Banners', 'GSAP', 'GWD', 'JavaScript', 'Responsive'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9l3 3-3 3M12 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Digital Production',
    description:
      'Campaign adaptation, format versioning, QA pipelines, and performance optimisation. Production that meets global agency standards.',
    tags: ['Campaign Adapt.', 'QA Workflows', 'Multi-format', 'Performance'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'UX / UI Systems',
    description:
      'Research-driven interface design. From user flows to component libraries — scalable systems with measurable usability improvements.',
    tags: ['User Research', 'Design Systems', 'Figma', 'Prototyping'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="11" cy="11" r="1.5" fill="currentColor"/>
      </svg>
    ),
    label: 'Branding & Visual Systems',
    description:
      'Identity, visual language, and digital brand guidelines. Coherent design systems that work across every touchpoint.',
    tags: ['Brand Identity', 'Visual Systems', 'Motion', 'Guidelines'],
  },
]

export default function WhatIWorkWith() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-5 inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Disciplines
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-4">
            What I work with
          </h2>
          <p className="text-[#7a849a] text-lg max-w-lg mx-auto">
            Four areas where design meets production — each rooted in real delivery experience.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First card — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 md:row-span-1 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1e2540] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
              {disciplines[0].icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1a1d23] mb-3">{disciplines[0].label}</h3>
            <p className="text-[#7a849a] text-sm leading-relaxed mb-5">{disciplines[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {disciplines[0].tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>

          {/* Second card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1e2540] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
              {disciplines[1].icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1a1d23] mb-3">{disciplines[1].label}</h3>
            <p className="text-[#7a849a] text-sm leading-relaxed mb-5">{disciplines[1].description}</p>
            <div className="flex flex-wrap gap-2">
              {disciplines[1].tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>

          {/* Third card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="card p-8 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1e2540] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
              {disciplines[2].icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1a1d23] mb-3">{disciplines[2].label}</h3>
            <p className="text-[#7a849a] text-sm leading-relaxed mb-5">{disciplines[2].description}</p>
            <div className="flex flex-wrap gap-2">
              {disciplines[2].tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>

          {/* Fourth card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8 group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-[#1e2540] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
              {disciplines[3].icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1a1d23] mb-3">{disciplines[3].label}</h3>
            <p className="text-[#7a849a] text-sm leading-relaxed mb-5">{disciplines[3].description}</p>
            <div className="flex flex-wrap gap-2">
              {disciplines[3].tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
