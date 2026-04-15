import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    image: '/images/publicis.jpeg',
    title: 'Global Digital Campaign Production',
    client: 'Publicis Groupe',
    year: '2026 – Present',
    description:
      'Production and adaptation of HTML5 creatives for global campaigns, ensuring cross-platform compatibility, performance optimization, and technical compliance.',
    contributions: [
      'HTML5 banner production (GWD, GSAP)',
      'Campaign adaptation across 20+ formats',
      'QA, performance & compliance audits',
      'Cross-team coordination with creative leads',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'GWD', 'Figma', 'Adobe Suite'],
    color: 'from-blue-50 to-indigo-50',
    accent: '#3b4fd8',
    number: '01',
  },
  {
    id: 2,
    image: '/images/firma.png',
    title: 'App Signature System',
    client: 'Internal Tool',
    year: '2023',
    description:
      'Internal web tool for generating branded email signatures, used by 2,000+ employees. Designed for zero-friction adoption across multiple brand lines.',
    contributions: [
      'Full UI design and component architecture',
      'React-based dynamic preview',
      'Multi-brand theme support',
      'Export to HTML with copy-to-clipboard',
    ],
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    color: 'from-emerald-50 to-teal-50',
    accent: '#1a7a5e',
    number: '02',
  },
  {
    id: 3,
    image: '/images/minhacienda.png',
    title: 'Government UX Platform',
    client: 'MinHacienda Colombia',
    year: '2023 – 2024',
    description:
      'UX research and interface redesign for a public financial management platform. Reduced task completion time and improved accessibility.',
    contributions: [
      'Stakeholder interviews and usability testing',
      'Information architecture restructure',
      'Hi-fi prototype with measurable improvements',
      'Design system documentation',
    ],
    tech: ['Figma', 'UX Research', 'Accessibility', 'InVision'],
    color: 'from-amber-50 to-orange-50',
    accent: '#b45309',
    number: '03',
  },
  {
    id: 4,
    image: '/images/dbsystem.png',
    title: 'DB System Digital Ecosystem',
    client: 'DB System',
    year: '2023 – 2025',
    description:
      'Full digital identity system for a technology company — from brand strategy to responsive web presence and interface guidelines.',
    contributions: [
      'Brand identity and visual system',
      'Web design and front-end build',
      'UX flows and component library',
      'Marketing collateral & motion guidelines',
    ],
    tech: ['Figma', 'HTML/CSS', 'WordPress', 'Illustrator', 'After Effects'],
    color: 'from-rose-50 to-pink-50',
    accent: '#9d174d',
    number: '04',
  },
  {
    id: 5,
    image: '/images/sui.png',
    title: 'Otros proyectos',
    client: 'Externo',
    year: '2018 – Presente',
    description:
      'Interface design for a Building Management System dashboard. Connected IoT sensor data to an operator-facing control panel with real-time monitoring.',
    contributions: [
      'Product design and user research',
      'Dashboard UI for real-time sensor data',
      'Interaction logic and state design',
      'Handoff documentation for dev team',
    ],
    tech: ['Sketch', 'InVision', 'Zeplin', 'UX Design', 'IoT Protocols'],
    color: 'from-slate-50 to-blue-50',
    accent: '#1e3a5f',
    number: '05',
  },
]

function ProjectCard({ project, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`card cursor-pointer overflow-hidden flex flex-col transition-shadow duration-300 ${
        isActive ? 'shadow-card-hover' : 'hover:shadow-card-hover'
      }`}
    >
      {/* Fixed-height header — shows image if provided, gradient + number otherwise */}
      <div
        className={`h-36 shrink-0 flex items-center justify-center relative overflow-hidden ${
          project.image ? '' : `bg-gradient-to-br ${project.color}`
        }`}
      >
        {project.image ? (
          <>
            {/* Image: desaturated, cooled down, soft contrast */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              style={{
                filter: 'saturate(0.42) brightness(1.06) contrast(0.88) hue-rotate(-12deg)',
              }}
            />
            {/* Cool blue-grey tint — shifts warm tones toward page palette */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'rgba(200, 210, 228, 0.22)',
              mixBlendMode: 'color',
            }} />
            {/* Strong radial vignette — dissolves edges into card background */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(246,247,250,0.82) 100%)',
            }} />
            {/* Bottom fade into white card content area */}
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(to bottom, rgba(246,247,250,0.05) 0%, rgba(255,255,255,0.6) 100%)',
            }} />
          </>
        ) : (
          <span className="text-7xl font-bold text-[#1a1d23]/5 select-none">
            {project.number}
          </span>
        )}
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <span
            className="text-xs font-semibold text-white px-3 py-1.5 rounded-lg"
            style={{ backgroundColor: project.accent }}
          >
            {project.client}
          </span>
          <span className="text-xs text-[#7a849a] bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            {project.year}
          </span>
        </div>
      </div>

      {/* Static content — min-h keeps collapsed cards visually equal */}
      <div className="p-6 min-h-[160px]">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-semibold text-[#1a1d23] text-lg leading-snug">
            {project.title}
          </h3>
          <motion.span
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="shrink-0 w-8 h-8 rounded-full bg-[#eef0f4] flex items-center justify-center mt-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="#1a1d23" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.span>
        </div>

        <p className="text-sm text-[#7a849a] leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Expandable content — only THIS card changes, siblings are untouched */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pt-5 mt-5 border-t border-[#eef0f4]">
                <p className="text-xs font-semibold text-[#aab4c4] uppercase tracking-wider mb-3">
                  Key contributions
                </p>
                <ul className="space-y-2 mb-5">
                  {project.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-[#555e7a]">
                      <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7.5l3 3 6-6" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-[#aab4c4] uppercase tracking-wider mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Work() {
  const [activeId, setActiveId] = useState(null)
  const toggle = (id) => setActiveId(activeId === id ? null : id)

  return (
    <section id="work" className="py-24 px-6">
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
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1.5" fill="currentColor" />
              <rect x="8" y="1" width="5" height="5" rx="1.5" fill="currentColor" />
              <rect x="1" y="8" width="5" height="5" rx="1.5" fill="currentColor" />
              <rect x="8" y="8" width="5" height="5" rx="1.5" fill="currentColor" />
            </svg>
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-4">
            Projects that ship.
          </h2>
          <p className="text-[#7a849a] text-lg max-w-lg mx-auto">
            End-to-end case studies across production, UX, and digital systems.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {/* Row 1 — always items-start, height equalised via min-h on content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {projects.slice(0, 2).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={p.id === 1 ? 'md:col-span-2' : ''}
              >
                <ProjectCard
                  project={p}
                  isActive={activeId === p.id}
                  onClick={() => toggle(p.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Row 2 — cards 03, 04, 05 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {projects.slice(2).map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 2) * 0.08 }}
              >
                <ProjectCard
                  project={p}
                  isActive={activeId === p.id}
                  onClick={() => toggle(p.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
