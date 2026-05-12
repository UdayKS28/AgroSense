import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { features, testimonials, plans, problems, stats, marqueeItems } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

// ── HOOK: reveal on scroll ────────────────────────────────────────
function useReveal(ref, from = { opacity: 0, y: 32 }) {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll ? ref.current.querySelectorAll('.reveal') : [ref.current]
    els.forEach(el => {
      gsap.fromTo(el, from, {
        opacity: 1, y: 0, x: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      })
    })
  }, [])
}

// ── MARQUEE ───────────────────────────────────────────────────────
export function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems]
  return (
    <div style={{ padding:'clamp(14px, 3vw, 20px) 0', overflow:'hidden', borderTop:'1px solid rgba(245,240,232,0.06)', borderBottom:'1px solid rgba(245,240,232,0.06)', background:'rgba(255,255,255,0.015)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize:12, color:'rgba(245,240,232,0.28)', whiteSpace:'nowrap', letterSpacing:'2px', fontWeight:500, textTransform:'uppercase' }}>
            {item}{i < doubled.length - 1 && <span style={{ margin:'0 22px', color:'rgba(245,166,35,0.4)' }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── PROBLEM ───────────────────────────────────────────────────────
export function Problem() {
  const ref = useRef()
  useReveal(ref)
  return (
    <section ref={ref} id="whyus" style={{ padding:'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 48px)' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <span className="section-label reveal">The Problem</span>
        <h2 className="section-title reveal">Indian farming is flying blind.</h2>
        <p className="section-sub reveal" style={{ marginBottom:44 }}>Every year, agri-businesses lose crores — not from bad farming, but from decisions made without real data.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(clamp(250px, 100%, 280px),1fr))', gap:'clamp(12px, 2vw, 16px)' }}>
          {problems.map(p => (
            <div key={p.title} className="reveal" style={{
              background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
              borderRadius:16, padding:26, display:'flex', gap:16, alignItems:'flex-start',
              transition:'all 0.3s', cursor:'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(245,90,90,0.3)'; e.currentTarget.style.transform='translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='none' }}>
              <div style={{ fontSize:28, flexShrink:0, marginTop:2 }}>{p.icon}</div>
              <div>
                <div style={{ fontFamily:'Syne', fontWeight:700, fontSize:16, color:'#f5f0e8', marginBottom:8 }}>{p.title}</div>
                <div style={{ fontSize:13, color:'rgba(245,240,232,0.45)', lineHeight:1.7 }}>{p.desc}</div>
                <span style={{ display:'inline-block', marginTop:12, background:'rgba(245,90,90,0.1)', border:'1px solid rgba(245,90,90,0.22)', color:'#f57b7b', fontSize:11, fontWeight:500, padding:'4px 11px', borderRadius:100 }}>{p.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FEATURES ──────────────────────────────────────────────────────
export function Features() {
  const ref = useRef()
  useReveal(ref)
  return (
    <section ref={ref} id="features" style={{ padding:'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 48px)', background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <span className="section-label reveal">Features</span>
        <h2 className="section-title reveal">Six modules. One dashboard.</h2>
        <p className="section-sub reveal" style={{ marginBottom:48 }}>Everything your agri-business needs to monitor, predict and act — in real time, from anywhere.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(clamp(260px, 100%, 300px),1fr))', gap:'clamp(12px, 2vw, 16px)' }}>
          {features.map(f => (
            <div key={f.name} className="reveal" style={{
              background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
              borderRadius:18, padding:26, transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', cursor:'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(245,166,35,0.35)'; e.currentTarget.style.background='rgba(245,166,35,0.04)'; e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.03)'; e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}>
              <div style={{ width:44, height:44, borderRadius:12, background:f.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, marginBottom:18 }}>{f.icon}</div>
              <div style={{ fontFamily:'Syne', fontWeight:700, fontSize:16, color:'#f5f0e8', marginBottom:9 }}>{f.name}</div>
              <div style={{ fontSize:13, color:'rgba(245,240,232,0.45)', lineHeight:1.7 }}>{f.desc}</div>
              <span style={{ display:'inline-block', marginTop:14, fontSize:11, color:'#4a7c59', background:'rgba(74,124,89,0.15)', padding:'4px 10px', borderRadius:100 }}>{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── STATS ─────────────────────────────────────────────────────────
export function Stats() {
  const ref = useRef()
  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current, { opacity:0, y:32 }, {
      opacity:1, y:0, duration:0.7, ease:'power2.out',
      scrollTrigger: { trigger:ref.current, start:'top 88%', toggleActions:'play none none none' },
    })
  }, [])
  return (
    <div style={{ padding:'clamp(40px, 8vw, 60px) clamp(16px, 5vw, 48px)' }}>
      <div ref={ref} style={{
        maxWidth:1140, margin:'0 auto',
        background:'rgba(245,166,35,0.06)', border:'1px solid rgba(245,166,35,0.15)',
        borderRadius:24, padding:'clamp(32px, 6vw, 52px) clamp(24px, 5vw, 40px)',
        display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:24,
      }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'Syne', fontWeight:800, fontSize:'clamp(28px, 5vw, 42px)', color:'#f5a623', letterSpacing:-2 }}>{s.num}</div>
            <div style={{ fontSize:'clamp(11px, 2vw, 13px)', color:'rgba(245,240,232,0.42)', marginTop:6 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── TESTIMONIALS ──────────────────────────────────────────────────
export function Testimonials() {
  const ref = useRef()
  useReveal(ref)
  return (
    <section ref={ref} id="stories" style={{ padding:'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 48px)' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <span className="section-label reveal">Success Stories</span>
        <h2 className="section-title reveal">Trusted by the people<br />who feed India.</h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(clamp(250px, 100%, 280px),1fr))', gap:'clamp(14px, 2vw, 18px)', marginTop:'clamp(32px, 5vw, 48px)' }}>
          {testimonials.map(t => (
            <div key={t.name} className="reveal" style={{
              background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)',
              borderRadius:18, padding:28, transition:'all 0.3s', cursor:'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(74,124,89,0.35)'; e.currentTarget.style.transform='translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='none' }}>
              <div style={{ color:'#f5a623', fontSize:13, marginBottom:16, letterSpacing:2 }}>{t.stars}</div>
              <div style={{ fontSize:14, color:'rgba(245,240,232,0.65)', lineHeight:1.8, marginBottom:22, fontStyle:'italic' }}>{t.quote}</div>
              <div style={{ display:'flex', alignItems:'center', gap:13 }}>
                <div style={{ width:42, height:42, borderRadius:'50%', background:t.avatarBg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{t.emoji}</div>
                <div>
                  <div style={{ fontFamily:'Syne', fontWeight:700, fontSize:14, color:'#f5f0e8' }}>{t.name}</div>
                  <div style={{ fontSize:11, color:'rgba(245,240,232,0.38)', marginTop:2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PRICING ───────────────────────────────────────────────────────
export function Pricing() {
  const ref = useRef()
  useReveal(ref)
  return (
    <section ref={ref} id="pricing" style={{ padding:'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 48px)', background:'rgba(255,255,255,0.015)', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth:1140, margin:'0 auto' }}>
        <span className="section-label reveal">Pricing</span>
        <h2 className="section-title reveal">Simple. Honest. Scalable.</h2>
        <p className="section-sub reveal" style={{ marginBottom:48 }}>No hidden fees. No lock-in contracts. Cancel anytime.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(clamp(250px, 100%, 280px),1fr))', gap:'clamp(14px, 2vw, 18px)' }}>
          {plans.map(p => (
            <div key={p.name} className="reveal" style={{
              background: p.featured ? 'rgba(245,166,35,0.05)' : 'rgba(255,255,255,0.03)',
              border: p.featured ? '1px solid rgba(245,166,35,0.45)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius:22, padding:32, transition:'all 0.3s', cursor:'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 20px 48px rgba(0,0,0,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}>
              {p.featured && <div style={{ background:'#f5a623', color:'#0c1a12', fontSize:11, fontWeight:600, padding:'4px 12px', borderRadius:100, display:'inline-block', marginBottom:16 }}>Most Popular</div>}
              <div style={{ fontFamily:'Syne', fontWeight:800, fontSize:18, color:'#f5f0e8', marginBottom:10 }}>{p.name}</div>
              <div style={{ fontFamily:'Syne', fontWeight:800, fontSize:36, color:'#f5a623', letterSpacing:-1.5 }}>
                {p.price}<span style={{ fontSize:14, color:'rgba(245,240,232,0.38)', fontFamily:'DM Sans', fontWeight:400, letterSpacing:0 }}>{p.period}</span>
              </div>
              <div style={{ fontSize:13, color:'rgba(245,240,232,0.42)', margin:'12px 0 22px', lineHeight:1.65 }}>{p.desc}</div>
              <div style={{ height:1, background:'rgba(255,255,255,0.07)', marginBottom:22 }} />
              <ul style={{ listStyle:'none', marginBottom:28, display:'flex', flexDirection:'column', gap:10 }}>
                {p.features.map(f => (
                  <li key={f} style={{ fontSize:13, color:'rgba(245,240,232,0.58)', display:'flex', alignItems:'center', gap:10 }}>
                    <span style={{ color:'#4a7c59', fontWeight:700, fontSize:14 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{
                display:'block', textAlign:'center', padding:13, borderRadius:100,
                fontSize:14, fontWeight:600, textDecoration:'none', transition:'all 0.2s',
                ...(p.featured
                  ? { background:'#f5a623', color:'#0c1a12' }
                  : { border:'1px solid rgba(245,240,232,0.2)', color:'#f5f0e8' })
              }}
                onMouseEnter={e => { if(p.featured) { e.target.style.opacity=0.85 } else { e.target.style.borderColor='rgba(245,240,232,0.5)'; e.target.style.background='rgba(245,240,232,0.05)' } }}
                onMouseLeave={e => { if(p.featured) { e.target.style.opacity=1 } else { e.target.style.borderColor='rgba(245,240,232,0.2)'; e.target.style.background='transparent' } }}>
                {p.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── CTA ───────────────────────────────────────────────────────────
export function CTA() {
  const ref = useRef()
  useEffect(() => {
    if (!ref.current) return
    gsap.fromTo(ref.current, { opacity:0, y:32 }, {
      opacity:1, y:0, duration:0.7, ease:'power2.out',
      scrollTrigger: { trigger:ref.current, start:'top 88%', toggleActions:'play none none none' },
    })
  }, [])
  return (
    <section id="contact" style={{ padding:'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 48px)', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:400, background:'radial-gradient(ellipse,rgba(74,124,89,0.18) 0%,transparent 70%)', pointerEvents:'none' }} />
      <div ref={ref} style={{ position:'relative', maxWidth:680, margin:'0 auto' }}>
        <h2 style={{ fontFamily:'Syne', fontWeight:800, fontSize:'clamp(28px, 6vw, 52px)', color:'#f5f0e8', letterSpacing:-2, marginBottom:18, lineHeight:1.08 }}>
          Your fields are talking.<br />
          Are you <em style={{ fontStyle:'normal', color:'#f5a623' }}>listening?</em>
        </h2>
        <p style={{ fontSize:'clamp(14px, 2.5vw, 16px)', color:'rgba(245,240,232,0.5)', marginBottom:32, lineHeight:1.75 }}>
          Join 8,200+ farms already using AgroSense to grow smarter, save water, and harvest more — season after season.
        </p>
        <a href="#" className="btn-primary" style={{ fontSize:'clamp(13px, 2vw, 16px)', padding:'clamp(12px, 2vw, 16px) clamp(24px, 4vw, 36px)' }}>
          Start Free Trial — No Credit Card →
        </a>
        <p style={{ fontSize:12, color:'rgba(245,240,232,0.28)', marginTop:16 }}>
          14-day free trial &nbsp;·&nbsp; Setup in under 30 minutes &nbsp;·&nbsp; Cancel anytime
        </p>
      </div>
    </section>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ padding:'clamp(24px, 5vw, 32px) clamp(16px, 5vw, 48px)', borderTop:'1px solid rgba(245,240,232,0.07)', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16, flexDirection:'column', gap:'24px' }}>
      <div style={{ fontFamily:'Syne', fontWeight:800, fontSize:'clamp(14px, 4vw, 18px)', color:'#f5f0e8' }}>
        Agro<span style={{ color:'#f5a623' }}>Sense</span>
      </div>
      <div style={{ display:'flex', gap:'clamp(16px, 3vw, 24px)', flexWrap:'wrap', justifyContent:'center' }}>
        {['Privacy Policy','Terms of Use','Contact','Documentation'].map(l => (
          <a key={l} href="#" style={{ fontSize:'clamp(11px, 2vw, 13px)', color:'rgba(245,240,232,0.32)', textDecoration:'none', transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='rgba(245,240,232,0.7)'}
            onMouseLeave={e => e.target.style.color='rgba(245,240,232,0.32)'}>{l}</a>
        ))}
      </div>
      <div style={{ fontSize:'clamp(10px, 2vw, 12px)', color:'rgba(245,240,232,0.22)', textAlign:'center' }}>© 2026 AgroSense · Built for Indian agri-businesses</div>
    </footer>
  )
}