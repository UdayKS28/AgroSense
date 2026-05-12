import { useState, useEffect } from 'react'

export default function Navbar({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Features', 'Why Us', 'Pricing', 'Stories']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? 'clamp(8px, 2vw, 12px) clamp(16px, 5vw, 48px)' : 'clamp(12px, 3vw, 18px) clamp(16px, 5vw, 48px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(12,26,18,0.98)' : 'rgba(12,26,18,0.85)',
        borderBottom: '1px solid rgba(245,166,35,0.12)',
        backdropFilter: 'blur(18px)',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <a href="#home" style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(16px, 4vw, 22px)', color: '#f5f0e8', textDecoration: 'none', letterSpacing: -0.5 }}>
          Agro<span style={{ color: '#f5a623' }}>Sense</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 32 }} className="nav-desktop-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`}
              style={{ fontSize: 14, color: 'rgba(245,240,232,0.52)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#f5f0e8'}
              onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,0.52)'}
            >{l}</a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a href="#" style={{ fontSize: 14, color: 'rgba(245,240,232,0.45)', textDecoration: 'none' }}
            className="nav-signin">Sign in</a>
          <button onClick={onGetStarted} className="btn-primary" style={{ padding: '9px 20px', fontSize: 13, border: 'none', cursor: 'pointer', background: '#f5a623', color: '#0c1a12' }}>Get Started →</button>
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, padding: 4 }}
            className="flex md:hidden">
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 24, height: 2, background: '#f5f0e8', borderRadius: 2, display: 'block',
                transform: menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)' : menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
                transition: 'all 0.3s' }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'rgba(12,26,18,0.98)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Syne', fontSize: 28, fontWeight: 700, color: '#f5f0e8', textDecoration: 'none' }}
            >{l}</a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>Get Started →</a>
        </div>
      )}
    </>
  )
}