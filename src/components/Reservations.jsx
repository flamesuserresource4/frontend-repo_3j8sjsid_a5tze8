import { useEffect, useRef } from 'react'

export default function Reservations() {
  const formRef = useRef(null)

  useEffect(() => {
    const el = formRef.current
    if (!el) return
    el.querySelectorAll('input, textarea').forEach((input) => {
      input.addEventListener('focus', () => input.parentElement.classList.add('ring-1','ring-[#D4AF37]'))
      input.addEventListener('blur', () => input.parentElement.classList.remove('ring-1','ring-[#D4AF37]'))
    })
  }, [])

  return (
    <section id="reservations" className="relative bg-[#0A192F] text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif mb-8">Reservations & Contact</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
          <form ref={formRef} className="grid md:grid-cols-2 gap-6">
            {['Full Name','Email','Check-in','Check-out'].map((label, i) => (
              <label key={label} className="relative block">
                <span className="absolute -top-3 left-3 bg-[#0A192F] px-2 text-xs text-white/70">{label}</span>
                <div className="rounded-xl border border-white/20 transition-all">
                  <input required type={label.includes('Check') ? 'date' : (label==='Email'?'email':'text')} placeholder={label} className="w-full bg-transparent px-4 py-3 outline-none placeholder-white/30" />
                </div>
              </label>
            ))}
            <label className="md:col-span-2 relative block">
              <span className="absolute -top-3 left-3 bg-[#0A192F] px-2 text-xs text-white/70">Message</span>
              <div className="rounded-xl border border-white/20 transition-all">
                <textarea rows={4} placeholder="Tell us more..." className="w-full bg-transparent px-4 py-3 outline-none placeholder-white/30" />
              </div>
            </label>

            <button type="button" className="md:col-span-2 justify-self-start px-6 py-3 rounded-full bg-[#0A192F] border border-white/20 hover:bg-[#D4AF37] hover:text-black transition-all shadow-[0_0_0_0_rgba(212,175,55,0.0)] hover:shadow-[0_0_30px_8px_rgba(212,175,55,0.25)]">
              Check Availability
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-white/60 text-sm">
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
        </div>
        <p className="mt-2">© {new Date().getFullYear()} Hotel Paradise on the Nile</p>
      </div>
    </section>
  )
}
