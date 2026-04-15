import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Understand context',
    description:
      'Read the brief. Understand the platform, media specs, brand guidelines, and delivery requirements before touching a single file.',
    tag: 'Discovery',
  },
  {
    number: '02',
    title: 'Design system / concept',
    description:
      'Define the visual direction, component logic, or interaction model. Scalable by default — built to adapt across formats and breakpoints.',
    tag: 'Design',
  },
  {
    number: '03',
    title: 'Production & adaptation',
    description:
      "Build it. Whether it's HTML5 banners, UI components, or a brand system — production happens with performance and consistency in mind.",
    tag: 'Build',
  },
  {
    number: '04',
    title: 'QA & optimisation',
    description:
      'Test across environments, audit performance, validate against spec. Nothing ships without passing the brief it was built against.',
    tag: 'Delivery',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-5 inline-flex">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l1.5 4.5H13l-3.75 2.75L10.75 13 7 10.25 3.25 13l1.5-4.75L1 5.5h4.5L7 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-4">
            From brief to delivery
          </h2>
          <p className="text-[#7a849a] text-lg max-w-lg mx-auto">
            A production workflow refined across campaigns, products, and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-8 group hover:shadow-card-hover transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="w-10 h-10 rounded-full bg-[#1e2540] text-white text-sm font-semibold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                {step.number}
              </div>

              <h3 className="text-lg font-semibold text-[#1a1d23] mb-3">{step.title}</h3>
              <p className="text-sm text-[#7a849a] leading-relaxed mb-6">{step.description}</p>

              {/* Divider + tag */}
              <div className="border-t border-dashed border-[#d0d5e0] pt-5 flex justify-end">
                <span className="text-xs font-medium text-[#7a849a] bg-[#eef0f4] px-3 py-1.5 rounded-lg">
                  {step.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
