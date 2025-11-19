import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.2}px)`
      }
    }
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 6
      const y = (e.clientY / innerHeight - 0.5) * 6
      if (bgRef.current) {
        bgRef.current.style.transform += ` translate(${x}px, ${y}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  useEffect(() => {
    const pulse = () => {
      if (!ctaRef.current) return
      ctaRef.current.animate([
        { boxShadow: '0 0 0 0 rgba(212,175,55,0.6)' },
        { boxShadow: '0 0 40px 10px rgba(212,175,55,0.0)' }
      ], { duration: 1800, iterations: Infinity })
    }
    pulse()
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-[#0A192F] text-white">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517837016564-bfc3ffd67455?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <svg className="absolute -right-1/3 top-1/4 w-[1200px] h-[1200px] opacity-10" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50C240 120 220 200 300 260C380 320 460 360 520 420" stroke="#D4AF37" strokeWidth="1.5"/>
        </svg>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight mb-4">Where the Nile Begins. Luxury Awaits.</h1>
        <p className="text-lg sm:text-xl text-white/80 mb-8">An Exclusive Retreat in Jinja, Uganda.</p>
        <a href="#reservations" ref={ctaRef} className="px-6 py-3 rounded-full bg-white/5 border border-[#D4AF37]/60 text-white hover:scale-105 hover:bg-[#D4AF37]/20 transition-all duration-300 shadow-[0_0_0_0_rgba(212,175,55,0.5)]">
          Book Your Sanctuary
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase animate-bounce">Scroll</div>
    </section>
  )
}
