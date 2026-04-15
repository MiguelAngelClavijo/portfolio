import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-card border border-white/60'
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <a href="#" className="text-[#1a1d23] font-semibold text-base tracking-tight hover:opacity-70 transition-opacity">
            Miguel Clavijo
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#555e7a] hover:text-[#1a1d23] text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#eef0f4] transition-all duration-150"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              <span>Get In Touch</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-[#eef0f4] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" stroke="#1a1d23" strokeWidth="1.5" strokeLinecap="round"/>
              ) : (
                <>
                  <path d="M3 5h14M3 10h14M3 15h14" stroke="#1a1d23" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-card border border-white/60 p-4"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[#555e7a] hover:text-[#1a1d23] text-sm font-medium px-4 py-3 rounded-xl hover:bg-[#eef0f4] transition-all"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#eef0f4] mt-2">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-sm w-full justify-center">
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
