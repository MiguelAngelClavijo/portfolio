export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 px-6 border-t border-[#d0d5e0]/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#aab4c4]">
        <span>© {year} Miguel Clavijo · Creative Engineer</span>
        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-[#555e7a] transition-colors">Work</a>
          <a href="#about" className="hover:text-[#555e7a] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#555e7a] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
