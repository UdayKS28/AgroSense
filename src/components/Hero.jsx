import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SensorItem = ({ label, value, color, fill }) => (
  <div
    style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 14, transition: 'background 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
    onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
  >
    <div style={{ fontSize: 'clamp(9px, 1.5vw, 11px)', color: 'rgba(245,240,232,0.4)', marginBottom: 6 }}>{label}</div>
    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 3vw, 22px)', color }}>{value}</div>
    <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 100, overflow: 'hidden', marginTop: 7 }}>
      <div style={{ height: '100%', width: fill, background: color, borderRadius: 100 }} />
    </div>
  </div>
)

export default function Hero({ onGetStarted }) {
  const badgeRef = useRef()
  const headlineRef = useRef()
  const paraRef = useRef()
  const btnsRef = useRef()
  const statsRef = useRef()
  const rightRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 })

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo(headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, '-=0.2'
    )
    .fromTo(paraRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4'
    )
    .fromTo(btnsRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo(statsRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3'
    )
    .fromTo(rightRef.current,
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, '-=0.7'
    )
  }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', padding: 'clamp(80px, 12vw, 140px) clamp(16px, 5vw, 64px)', marginTop: '0', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 'clamp(80px, 15vh, 120px)' }}>

      <div style={{ position: 'absolute', top: -120, right: -120, width: 600, height: 600, background: 'radial-gradient(circle,rgba(74,124,89,0.18) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: 'radial-gradient(circle,rgba(245,166,35,0.08) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="hero-grid" style={{ maxWidth: '100%', margin: '0 auto', width: '100%', display: 'grid', gap: 'clamp(32px, 5vw, 80px)', alignItems: 'center', position: 'relative' }}>

        {/* LEFT */}
        <div>
          {/* Badge */}
          <div ref={badgeRef} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(74,124,89,0.2)', border: '1px solid rgba(74,124,89,0.4)', color: '#7cc894', fontSize: 12, padding: '6px 14px', borderRadius: 100, marginBottom: 24 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4a7c59', display: 'inline-block', animation: 'pulseDot 2s infinite' }} />
            IoT-powered precision farming platform
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px,5.5vw,64px)', lineHeight: 1.03, letterSpacing: -2.5, color: '#f5f0e8', marginBottom: 20 }}>
            Farm smarter.<br />
            Harvest <em style={{ fontStyle: 'normal', color: '#f5a623' }}>more.</em><br />
            Waste nothing.
          </h1>

          {/* Para */}
          <p ref={paraRef} style={{ fontSize: 'clamp(14px, 2.5vw, 16px)', color: 'rgba(245,240,232,0.58)', lineHeight: 1.75, marginBottom: 32, maxWidth: 440 }}>
            Real-time soil, water & yield intelligence for agri-businesses and cooperatives managing farms at scale — all in one unified dashboard.
          </p>

          {/* Buttons */}
          <div ref={btnsRef} style={{ display: 'flex', gap: 14, marginBottom: 44, flexWrap: 'wrap' }}>
            <button onClick={onGetStarted} className="btn-primary" style={{ border: 'none', cursor: 'pointer', background: '#f5a623', color: '#0c1a12' }}>Start Free Trial →</button>
            <a href="#features" className="btn-outline">▶ Watch Demo</a>
          </div>

          {/* Stats */}
          <div ref={statsRef} style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {[
              { num: '40%',    lbl: 'water saved avg.' },
              { num: '8,200+', lbl: 'farms connected'  },
              { num: '4.9★',   lbl: 'average rating'   },
            ].map(s => (
              <div key={s.lbl} style={{ borderLeft: '2px solid #4a7c59', paddingLeft: 16 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(18px, 3vw, 24px)', color: '#f5f0e8' }}>{s.num}</div>
                <div style={{ fontSize: 'clamp(11px, 1.5vw, 12px)', color: 'rgba(245,240,232,0.4)', marginTop: 3 }}>{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="hero-right" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(245,166,35,0.22)', borderRadius: 18, padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13, color: '#f5f0e8' }}>Field Dashboard · Block A — Shimoga</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'rgba(74,124,89,0.28)', border: '1px solid rgba(74,124,89,0.5)', color: '#7cc894', fontSize: 10, padding: '3px 10px', borderRadius: 100 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4a7c59', display: 'inline-block', animation: 'pulseDot 2s infinite' }} /> Live
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <SensorItem label="Soil Moisture" value="68%"  color="#7cc894" fill="68%" />
              <SensorItem label="Temperature"   value="24°C" color="#f5a623" fill="55%" />
              <SensorItem label="Rainfall"      value="12mm" color="#7bb8f5" fill="30%" />
              <SensorItem label="Crop Health"   value="Good" color="#7cc894" fill="82%" />
            </div>
            <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.28)', textAlign: 'right' }}>Updated 2 mins ago · 14 sensors active</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{ background: 'rgba(245,166,35,0.07)', border: '1px solid rgba(245,166,35,0.22)', borderRadius: 18, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(245,166,35,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>⚠️</div>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: '#f5a623' }}>Drought Alert</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.48)', lineHeight: 1.6 }}>Block C moisture below 30% — irrigation needed within 6h</div>
              <div style={{ fontSize: 9, color: 'rgba(245,240,232,0.22)', marginTop: 7 }}>3 mins ago</div>
            </div>

            <div style={{ background: 'rgba(74,124,89,0.08)', border: '1px solid rgba(74,124,89,0.28)', borderRadius: 18, padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 10 }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: 'rgba(74,124,89,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>📈</div>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 12, color: '#7cc894' }}>Yield Forecast</span>
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 26, color: '#f5f0e8', letterSpacing: -0.5 }}>4.2T</div>
              <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.38)', marginBottom: 10 }}>Predicted harvest · Oct 2026</div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 100, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '78%', background: '#4a7c59', borderRadius: 100 }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
                <span style={{ fontSize: 9, color: 'rgba(245,240,232,0.28)' }}>Target: 4.0T</span>
                <span style={{ fontSize: 9, color: 'rgba(245,240,232,0.28)' }}>78% confidence</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(123,184,245,0.06)', border: '1px solid rgba(123,184,245,0.18)', borderRadius: 18, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 30 }}>⛅</span>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 24, color: '#f5f0e8' }}>27°C</div>
                <div style={{ fontSize: 11, color: 'rgba(245,240,232,0.38)' }}>Partly cloudy · Shimoga, KA</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['💧 72% humidity', '🌬 14km/h wind'].map(p => (
                <span key={p} style={{ background: 'rgba(123,184,245,0.1)', border: '1px solid rgba(123,184,245,0.18)', borderRadius: 100, padding: '5px 11px', fontSize: 11, color: '#7bb8f5' }}>{p}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}