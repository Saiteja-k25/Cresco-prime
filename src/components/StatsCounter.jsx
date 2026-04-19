import { useEffect, useRef, useState } from 'react'

export function AnimatedNumber({ end, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 2000
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end])

  return (
    <span ref={ref} style={{ fontFamily: "'Cormorant Garamond', serif", color: '#D4AF6A', fontSize: '52px', fontWeight: 600 }}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section style={{ background: '#0A0A0A', padding: '80px 40px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
        <div>
          <AnimatedNumber end={500} suffix="+" />
          <p style={{ color: '#9E9E8F', marginTop: '8px' }}>Active Traders</p>
        </div>
        <div style={{ borderLeft: '1px solid #C9A84C44', paddingLeft: '80px' }}>
          <AnimatedNumber end={10} suffix="Cr+" />
          <p style={{ color: '#9E9E8F', marginTop: '8px' }}>Capital Deployed</p>
        </div>
        <div style={{ borderLeft: '1px solid #C9A84C44', paddingLeft: '80px' }}>
          <AnimatedNumber end={3} suffix="+" />
          <p style={{ color: '#9E9E8F', marginTop: '8px' }}>Years of Excellence</p>
        </div>
      </div>
    </section>
  )
}
