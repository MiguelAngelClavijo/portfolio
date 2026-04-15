import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, connect to a form service (Formspree, EmailJS, etc.)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="card p-8 md:p-14 relative overflow-hidden">
          {/* BG blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100/40 to-purple-50/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label mb-6 inline-flex">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 3h10a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/><path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.5"/></svg>
                Contact
              </span>

              <h2 className="text-4xl md:text-5xl font-light text-[#1a1d23] mb-5 mt-5">
                Let's talk<br/>production.
              </h2>
              <p className="text-[#7a849a] text-base leading-relaxed mb-8">
                Interested in working together or just want to discuss digital production, HTML5 campaigns, or design systems? Reach out.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:clavijom2000@gmail.com"
                  className="flex items-center gap-3 text-sm text-[#555e7a] hover:text-[#1a1d23] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef0f4] flex items-center justify-center group-hover:bg-[#1e2540] group-hover:text-white transition-all">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2"/><path d="M1 5l7 4.5L15 5" stroke="currentColor" strokeWidth="1.2"/></svg>
                  </div>
                  clavijom2000@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/miguel-ángel-clavijo-sánchez-2344b0231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#555e7a] hover:text-[#1a1d23] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef0f4] flex items-center justify-center group-hover:bg-[#1e2540] group-hover:text-white transition-all">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M4 6.5v5M4 4.5v.01M7 11.5V9a1.5 1.5 0 013 0v2.5M7 8v3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  </div>
                  linkedin.com/in/miguelángelclavijo
                </a>

                <a
                  href="tel:+573052670670"
                  className="flex items-center gap-3 text-sm text-[#555e7a] hover:text-[#1a1d23] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#eef0f4] flex items-center justify-center group-hover:bg-[#1e2540] group-hover:text-white transition-all">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h3l1.5 3.5-1.75 1.25a8 8 0 004.5 4.5L11.5 9.5 15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  +57 305 267 0670
                </a>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#1a7a5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#1a1d23]">Message sent</h3>
                  <p className="text-sm text-[#7a849a]">I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-[#7a849a] mb-1.5 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-[#eef0f4] border border-transparent focus:border-[#1e2540]/20 focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1a1d23] placeholder-[#aab4c4] outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#7a849a] mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#eef0f4] border border-transparent focus:border-[#1e2540]/20 focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1a1d23] placeholder-[#aab4c4] outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#7a849a] mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hi…"
                      className="w-full bg-[#eef0f4] border border-transparent focus:border-[#1e2540]/20 focus:bg-white rounded-xl px-4 py-3 text-sm text-[#1a1d23] placeholder-[#aab4c4] outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Send message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
