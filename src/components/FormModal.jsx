import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function FormModal({ isOpen, onClose }) {
  const modalRef = useRef()
  const contentRef = useRef()
  const [formStep, setFormStep] = useState('initial')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return

    if (isOpen) {
      // Show modal with backdrop
      gsap.fromTo(modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      )
      // Animate content
      gsap.fromTo(contentRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out' }
      )
    } else {
      // Hide animations
      gsap.to(contentRef.current,
        { opacity: 0, scale: 0.8, y: 20, duration: 0.3, ease: 'power2.in' }
      )
      gsap.to(modalRef.current,
        { opacity: 0, duration: 0.3, ease: 'power2.in', delay: 0.1,
          onComplete: () => {
            setFormStep('initial')
            setEmail('')
            setName('')
            setError('')
          }
        }
      )
    }
  }, [isOpen])

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!email) {
      setError('Please enter your email')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email')
      return
    }
    
    setFormStep('name')
  }

  const handleNameSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!name) {
      setError('Please enter your name')
      return
    }
    
    setFormStep('success')
    setTimeout(() => {
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(16px, 5vw, 32px)'
      }}
    >
      <div
        ref={contentRef}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'rgba(12, 26, 18, 0.95)', border: '1px solid rgba(245, 166, 35, 0.2)',
          borderRadius: 24, padding: 'clamp(32px, 5vw, 48px)', maxWidth: 420, width: '100%',
          backdropFilter: 'blur(20px)', position: 'relative'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'none', border: 'none', color: '#f5f0e8', fontSize: 28,
            cursor: 'pointer', opacity: 0.6, transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => e.target.style.opacity = 1}
          onMouseLeave={e => e.target.style.opacity = 0.6}
        >
          ✕
        </button>

        {formStep === 'initial' && (
          <form onSubmit={handleEmailSubmit}>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 28px)', color: '#f5f0e8', marginBottom: 12 }}>
              Start Your Free Trial
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245, 240, 232, 0.5)', marginBottom: 28, lineHeight: 1.6 }}>
              Join 8,200+ farms using AgroSense. 14-day free trial, no credit card required.
            </p>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, color: 'rgba(245, 240, 232, 0.6)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                placeholder="you@farm.com"
                style={{
                  width: '100%', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(245, 240, 232, 0.15)',
                  borderRadius: 12, padding: 12, color: '#f5f0e8', fontSize: 14, fontFamily: 'inherit',
                  outline: 'none', transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 166, 35, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(245, 240, 232, 0.15)'; e.target.style.background = 'rgba(255, 255, 255, 0.06)'; }}
              />
              {error && <div style={{ fontSize: 12, color: '#f57b7b', marginTop: 6 }}>⚠ {error}</div>}
            </div>

            <button
              type="submit"
              style={{
                width: '100%', background: '#f5a623', color: '#0c1a12', border: 'none',
                padding: 14, borderRadius: 100, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.target.style.opacity = 0.88; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = 1; e.target.style.transform = 'none'; }}
            >
              Continue →
            </button>
          </form>
        )}

        {formStep === 'name' && (
          <form onSubmit={handleNameSubmit}>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 28px)', color: '#f5f0e8', marginBottom: 12 }}>
              What's Your Name?
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245, 240, 232, 0.5)', marginBottom: 28, lineHeight: 1.6 }}>
              We'll personalize your onboarding experience.
            </p>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, color: 'rgba(245, 240, 232, 0.6)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1 }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setError(''); }}
                placeholder="Raj Kumar"
                autoFocus
                style={{
                  width: '100%', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(245, 240, 232, 0.15)',
                  borderRadius: 12, padding: 12, color: '#f5f0e8', fontSize: 14, fontFamily: 'inherit',
                  outline: 'none', transition: 'all 0.2s'
                }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(245, 166, 35, 0.5)'; e.target.style.background = 'rgba(255, 255, 255, 0.08)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(245, 240, 232, 0.15)'; e.target.style.background = 'rgba(255, 255, 255, 0.06)'; }}
              />
              {error && <div style={{ fontSize: 12, color: '#f57b7b', marginTop: 6 }}>⚠ {error}</div>}
            </div>

            <button
              type="submit"
              style={{
                width: '100%', background: '#f5a623', color: '#0c1a12', border: 'none',
                padding: 14, borderRadius: 100, fontSize: 14, fontWeight: 600,
                cursor: 'pointer', transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.target.style.opacity = 0.88; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.opacity = 1; e.target.style.transform = 'none'; }}
            >
              Get Started →
            </button>
          </form>
        )}

        {formStep === 'success' && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 16, animation: 'bounce 0.6s ease-out' }}>✅</div>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(24px, 5vw, 28px)', color: '#f5f0e8', marginBottom: 12 }}>
              Welcome, {name}!
            </h2>
            <p style={{ fontSize: 14, color: 'rgba(245, 240, 232, 0.5)', lineHeight: 1.6 }}>
              Check your email for setup instructions. Your 14-day trial starts now!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
