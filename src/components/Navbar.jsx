import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#accommodations', label: 'Accommodations' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#reservations', label: 'Reservations' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-md bg-slate-900/60 shadow-lg' : 'bg-transparent'} `}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-serif tracking-wide text-white/90 hover:text-white transition-colors">
          Hotel Paradise
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className={`text-sm uppercase tracking-wider transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} text-slate-200/80 hover:text-[#D4AF37]`}>
              {l.label}
            </a>
          ))}
        </nav>

        <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-full border border-white/10 text-white/90 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-[#D4AF37] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
