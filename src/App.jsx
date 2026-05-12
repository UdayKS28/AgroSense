import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FormModal from './components/FormModal'
import { Marquee, Problem, Features, Stats, Testimonials, Pricing, CTA, Footer } from './components/Sections'

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="grain" />
      <FormModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Navbar onGetStarted={() => setShowModal(true)} />
      <Hero onGetStarted={() => setShowModal(true)} />
      <Marquee />
      <Problem />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing onSelectPlan={() => setShowModal(true)} />
      <CTA onGetStarted={() => setShowModal(true)} />
      <Footer />
    </>
  )
}