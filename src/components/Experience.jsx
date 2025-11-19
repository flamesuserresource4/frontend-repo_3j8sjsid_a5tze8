import { useEffect, useRef } from 'react'

const items = [
  {
    title: 'The River',
    desc: 'At the very mouth of the Nile, serenity flows through every moment.',
    img: 'https://images.unsplash.com/photo-1501769752-a59efa2294fa?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'The Cuisine',
    desc: 'Epicurean delights crafted from the freshest local ingredients.',
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'The Service',
    desc: 'Bespoke attention that anticipates your every need.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2070&auto=format&fit=crop'
  }
]

export default function Experience() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('[data-card]') || []
    cards.forEach((card, i) => {
      card.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0px)' },
      ], { duration: 600, delay: i * 150, fill: 'both', easing: 'ease-out' })
    })
  }, [])

  return (
    <section id="experience" className="relative bg-[#F7F7F0] text-[#1C1C1C] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif mb-10">The Experience</h2>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={it.title} data-card className="group relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.5deg]">
              <div className="h-56 overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 opacity-0" onLoad={(e)=> e.currentTarget.classList.remove('opacity-0')} />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-2">{it.title}</h3>
                <p className="text-sm text-black/70">{it.desc}</p>
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-[#D4AF37]/0 group-hover:ring-[#D4AF37]/50 transition-all" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
