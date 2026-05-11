import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Marquee, Problem, Features, Stats, Testimonials, Pricing, CTA, Footer } from './components/Sections'

export default function App() {
  return (
    <>
      <div className="grain" />
      <Navbar />
      <Hero />
      <Marquee />
      <Problem />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  )
}