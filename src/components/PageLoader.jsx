import { useEffect, useState } from 'react'
import BullLogo from '../assets/BullLogo'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1600)
    const removeTimer = setTimeout(() => setVisible(false), 2100)
    return () => { clearTimeout(fadeTimer); clearTimeout(removeTimer) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#080808',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      opacity: fading ? 0 : 1,
      transition: 'opacity 0.5s ease',
      pointerEvents: 'none'
    }}>
      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        
        {/* Spinning ring around the bull */}
        <svg
          width="80" height="80"
          viewBox="0 0 80 80"
          style={{ position: 'absolute', top: 0, left: 0, animation: 'spinRing 1.8s linear infinite' }}
        >
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="#B8860B"
            strokeWidth="2"
            strokeDasharray="180 45"
            strokeLinecap="round"
          />
        </svg>

        {/* Second arc spinning opposite direction, slightly slower */}
        <svg
          width="80" height="80"
          viewBox="0 0 80 80"
          style={{ position: 'absolute', top: 0, left: 0, animation: 'spinRingReverse 2.4s linear infinite' }}
        >
          <circle
            cx="40" cy="40" r="36"
            fill="none"
            stroke="rgba(184,134,11,0.2)"
            strokeWidth="1"
            strokeDasharray="60 165"
            strokeLinecap="round"
          />
        </svg>

        {/* Bull logo in center */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'bullPulse 1.8s ease-in-out infinite'
        }}>
          <BullLogo size={36} />
        </div>
      </div>

      <style>{`
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinRingReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes bullPulse {
          0%, 100% { opacity: 0.7; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  )
}

