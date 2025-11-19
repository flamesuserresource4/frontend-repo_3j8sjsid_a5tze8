import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Accommodations from './components/Accommodations'
import Amenities from './components/Amenities'
import Reservations from './components/Reservations'

function App() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Accommodations />
      <Amenities />
      <Reservations />
    </div>
  )
}

export default App
