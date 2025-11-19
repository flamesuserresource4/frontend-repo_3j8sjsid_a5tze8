import { useRef, useState } from 'react'

const rooms = [
  { name: 'Executive Suite', features: ['Private Balcony', 'Egyptian Cotton', 'Butler Service'], img: 'https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Nile View Cottage', features: ['Panoramic River View', 'Rainfall Shower', 'Outdoor Lounge'], img: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Garden Pavilion', features: ['Secluded Garden', 'Marble Bath', 'Artisanal Minibar'], img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2069&auto=format&fit=crop' },
]

export default function Accommodations() {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollTo = (idx) => {
    const el = scrollerRef.current?.children[idx]
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    setActive(idx)
  }

  return (
    <section id="accommodations" className="bg-[#0A192F] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-5xl font-serif">Accommodations</h2>
          <div className="flex gap-2">
            <button onClick={() => scrollTo(Math.max(0, active-1))} className="px-3 py-2 rounded-full border border-white/20 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all">◀</button>
            <button onClick={() => scrollTo(Math.min(rooms.length-1, active+1))} className="px-3 py-2 rounded-full border border-white/20 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all">▶</button>
          </div>
        </div>

        <div ref={scrollerRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
          {rooms.map((r, i) => (
            <div key={r.name} className="min-w-[320px] md:min-w-[420px] snap-start group rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-white/5 backdrop-blur-sm">
              <div className="h-64 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover opacity-0 transition-opacity duration-700" onLoad={(e)=> e.currentTarget.classList.remove('opacity-0')} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{r.name}</h3>
                <ul className="text-sm text-white/80 space-y-1">
                  {r.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
              </div>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
