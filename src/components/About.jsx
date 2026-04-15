import { motion } from 'framer-motion'

const skills = [
  'Adobe Suite', 'HTML5', 'CSS3', 'JavaScript', 'React', 'GSAP', 'Figma',
  'UX Research', 'Design Systems', 'Motion Design',
  'Branding', 'Production QA',
]

const timeline = [
  {
    phase: 'Design & Multimedia',
    company: 'Colvatel',
    period: '2014 – 2018',
  },
  {
    phase: 'UX / UI & Systems',
    company: 'DB System',
    period: '2018 – 2021',
  },
  {
    phase: 'Production & Engineering',
    company: 'Publicis Groupe',
    period: '2021 – Present',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — portrait card (reference style) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-sm mx-auto lg:mx-0 w-full"
          >
            <div className="card overflow-hidden">
              {/* Large portrait photo */}
              <div className="relative w-full h-72 overflow-hidden">
                <img
                  src="/images/foto.png"
                  alt="Miguel Clavijo"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'saturate(0.72) brightness(1.05) contrast(0.93)' }}
                />
                {/* Soft bottom fade into card */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'linear-gradient(to bottom, transparent 55%, rgba(255,255,255,0.7) 100%)',
                }} />
              </div>

              {/* Identity info */}
              <div className="px-7 pt-4 pb-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-xs text-[#7a849a]">Open to opportunities</span>
                </div>

                <h2 className="text-2xl font-semibold text-[#1a1d23] mb-1">Miguel Clavijo</h2>
                <p className="text-sm text-[#7a849a] mb-5">Creative Engineer · Publicis Production</p>

                {/* Social links */}
                <div className="flex items-center gap-3 mb-6">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/miguel-ángel-clavijo-sánchez-2344b0231/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#eef0f4] flex items-center justify-center text-[#555e7a] hover:bg-[#1e2540] hover:text-white transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect x="1" y="1" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4 6v5M4 4.2v.1M7 11V8.5a1.5 1.5 0 013 0V11M7 7.5V11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  </a>
                  {/* Email */}
                  <a
                    href="mailto:clavijom2000@gmail.com"
                    className="w-9 h-9 rounded-full bg-[#eef0f4] flex items-center justify-center text-[#555e7a] hover:bg-[#1e2540] hover:text-white transition-all duration-200"
                    aria-label="Email"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect x="1" y="3" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M1 4.5l6.5 4 6.5-4" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  </a>
                  {/* Behance / Portfolio */}
                  <a
                    href="https://www.behance.net/MiguelAngelClavijo"
                    className="w-9 h-9 rounded-full bg-[#eef0f4] flex items-center justify-center text-[#555e7a] hover:bg-[#1e2540] hover:text-white transition-all duration-200"
                    aria-label="Portfolio"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="7.5" r="6" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4 7.5h7M7.5 4l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* CTA button */}
                <a href="#contact" className="btn-primary w-full justify-center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — bio + skills + experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <span className="section-label mb-6 inline-flex w-fit">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/><path d="M7 4v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              About
            </span>

            {/* Bio */}
            <p className="text-[#555e7a] text-base leading-relaxed mb-8">
              Multimedia engineer turned Creative Engineer. I work at the intersection where design stops being static and code starts becoming experiential — building digital production systems that perform in the real world.
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-[#d0d5e0] mb-6" />

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((s) => (
                <span key={s} className="tag border border-[#d0d5e0]">{s}</span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-[#d0d5e0] mb-6" />

            {/* Experience rows */}
            <div className="flex flex-col gap-1">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.phase}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="grid grid-cols-3 gap-4 px-4 py-3.5 rounded-xl hover:bg-white/60 transition-colors duration-150"
                >
                  <span className="text-sm font-medium text-[#1a1d23] text-left">{t.phase}</span>
                  <span className="text-sm text-[#7a849a] text-left">{t.company}</span>
                  <span className="text-sm text-[#aab4c4] text-left">{t.period}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
