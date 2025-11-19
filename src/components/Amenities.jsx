import { useState } from 'react'

const AMENITIES = [
  { key: 'pool', label: 'Infinity Pool', img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2069&auto=format&fit=crop' },
  { key: 'spa', label: 'Spa Services', img: 'https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=2070&auto=format&fit=crop' },
  { key: 'cruise', label: 'Sunset Cruise', img: 'https://images.unsplash.com/photo-1518834107812-67b5a96c1f1e?q=80&w=2069&auto=format&fit=crop' },
  { key: 'fitness', label: 'Fitness Studio', img: 'https://images.unsplash.com/photo-1517344884500-96ed3f6f7623?q=80&w=2069&auto=format&fit=crop' },
]

export default function Amenities() {
  const [active, setActive] = useState(AMENITIES[0])

  return (
    <section id="amenities" className="bg-[#F7F7F0] text-[#1C1C1C] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div className="sticky top-24 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 bg-white">
          <img key={active.key} src={active.img} alt={active.label} className="w-full h-[420px] object-cover opacity-0 transition-opacity duration-700" onLoad={(e)=> e.currentTarget.classList.remove('opacity-0')} />
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Amenities & Activities</h2>
          {AMENITIES.map(item => (
            <button key={item.key} onMouseEnter={() => setActive(item)} onFocus={() => setActive(item)} className={`w-full text-left p-5 rounded-xl border transition-all bg-white hover:-translate-y-0.5 ${active.key===item.key ? 'border-[#D4AF37] shadow-lg' : 'border-[#D4AF37]/30'} `}>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">{item.label}</span>
                <span className="text-[#D4AF37]">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
