import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BullLogo from '../assets/BullLogo';


export default function BullHero() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isLowEnd = typeof navigator !== 'undefined' &&
    (navigator.hardwareConcurrency <= 2 || window.innerWidth < 768);

  // Text entrance refs
  const eyebrowRef = useRef(null);
  const headingL1Ref = useRef(null);
  const headingL2Ref = useRef(null);
  const headingL3Ref = useRef(null);
  const subtextRef = useRef(null);
  const ctaRowRef = useRef(null);
  const trustRowRef = useRef(null);

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Scroll indicator fade
  useEffect(() => {
    const handleScrollIndicator = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScrollIndicator, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollIndicator);
  }, []);

  // Scroll-driven bull animation (horn tilt + eye glow)
  useEffect(() => {
    if (isLowEnd) return;

    const handleScroll = () => {
      const hero = document.getElementById('hero-section');
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height));

      const bull = document.getElementById('bull-container');
      if (!bull) return;

      // Stage 1 (0 to 0.25): Bull rises up slightly, glow starts
      if (scrollProgress <= 0.25) {
        const p = scrollProgress / 0.25;
        bull.style.transform = `translateY(${(1 - p) * 20}px) scale(${0.95 + p * 0.05})`;
        bull.style.filter = `drop-shadow(0 0 ${p * 30}px rgba(184,134,11,${p * 0.5}))`;
      }
      // Stage 2 (0.25 to 0.55): Bull tilts forward (charging pose)
      else if (scrollProgress <= 0.55) {
        const p = (scrollProgress - 0.25) / 0.3;
        bull.style.transform = `translateY(0px) scale(1) rotateY(${p * -12}deg) rotateZ(${p * 3}deg)`;
        bull.style.filter = `drop-shadow(0 0 30px rgba(184,134,11,0.5)) drop-shadow(0 ${p * 8}px ${p * 20}px rgba(184,134,11,0.3))`;
      }
      // Stage 3 (0.55 to 0.8): Horns light up — intense gold glow on top
      else if (scrollProgress <= 0.8) {
        const p = (scrollProgress - 0.55) / 0.25;
        bull.style.transform = `translateY(0px) scale(${1 + p * 0.04}) rotateY(-12deg) rotateZ(3deg)`;
        bull.style.filter = `drop-shadow(0 0 ${30 + p * 20}px rgba(184,134,11,${0.5 + p * 0.3})) drop-shadow(0 ${-p * 15}px ${p * 25}px rgba(212,175,106,${p * 0.6}))`;
      }
      // Stage 4 (0.8 to 1.0): Settle back, full glow
      else {
        const p = (scrollProgress - 0.8) / 0.2;
        bull.style.transform = `translateY(0px) scale(1.04) rotateY(${-12 + p * 12}deg) rotateZ(${3 - p * 3}deg)`;
        bull.style.filter = `drop-shadow(0 0 40px rgba(184,134,11,0.7))`;
      }

      // Glow ring pulse based on scroll
      const ring = document.getElementById('bull-glow-ring');
      if (ring) {
        ring.style.opacity = String(0.3 + scrollProgress * 0.7);
        ring.style.transform = `translate(-50%, -50%) scale(${1 + scrollProgress * 0.15})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLowEnd]);

  // Stagger delay helper for text entrance
  const textEntrance = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s, transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
  });

  return (
    <section
      id="hero-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#080808',
        overflowX: 'hidden',
        width: '100%',
        paddingLeft: 0,
      }}
    >
      {/* Atmosphere overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(184,134,11,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(184,134,11,0.03) 0%, transparent 50%)',
        }}
      />

      <div
        className="hero-grid"
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          minHeight: '100vh',
          position: 'relative',
          zIndex: 1,
        }}
      >

        {/* ============================
            LEFT COLUMN — Text Content
            ============================ */}
        <div
          className="hero-left-col"
          style={{
            flex: '0 0 55%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'max(48px, 6vw)',
            paddingRight: '32px',
            minWidth: 0,
            overflow: 'visible',
            zIndex: 10,
            paddingTop: '80px',
            paddingBottom: '80px',
          }}
        >
          {/* Eyebrow */}
          <div ref={eyebrowRef} style={{ ...textEntrance(0.1), fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.25em', color: '#B8860B', fontWeight: 500, textTransform: 'uppercase', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', verticalAlign: 'middle', width: '32px', height: '1px', background: '#B8860B', marginRight: '12px' }}></span>
            INSTITUTIONAL TRADING PLATFORM
          </div>

          {/* Headings */}
          <div style={{ lineHeight: 1.05 }}>
            <div ref={headingL1Ref} style={{ ...textEntrance(0.25), fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#F0EDE8', fontSize: 'clamp(44px, 5.5vw, 76px)' }}>
              Trade with
            </div>
            <div ref={headingL2Ref} className="shimmer-text" style={{ ...textEntrance(0.35), fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 'clamp(44px, 5.5vw, 76px)' }}>
              Conviction.
            </div>
            <div ref={headingL3Ref} style={{ ...textEntrance(0.45), fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#8A8880', fontSize: 'clamp(32px, 4vw, 56px)' }}>
              Grow with Purpose.
            </div>
          </div>

          {/* Subtext */}
          <div ref={subtextRef} style={{ ...textEntrance(0.55), fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#8A8880', fontSize: '16px', lineHeight: 1.8, maxWidth: '440px', marginTop: '28px' }}>
            Cresco Prime gives serious traders access to institutional capital, professional terminals, and the education to become consistently profitable.
          </div>

          {/* CTA Row */}
          <div ref={ctaRowRef} style={{ ...textEntrance(0.65), display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/signup')}
              style={{
                background: '#B8860B',
                color: '#080808',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.04em',
                padding: '13px 32px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D4AF6A'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8860B'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Start Trading →
            </button>
            <button
              onClick={() => navigate('/services')}
              style={{
                background: 'transparent',
                color: '#B8860B',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                fontSize: '14px',
                letterSpacing: '0.04em',
                padding: '12px 32px',
                border: '1px solid rgba(184,134,11,0.35)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8860B'; e.currentTarget.style.color = '#D4AF6A'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.35)'; e.currentTarget.style.color = '#B8860B'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Learn More
            </button>
          </div>

          {/* Trust Row */}
          <div ref={trustRowRef} className="trust-row" style={{
            ...textEntrance(0.8),
            display: 'flex', gap: '32px', borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: '32px', marginTop: '48px', flexWrap: 'wrap'
          }}>
            {[
              { val: '500+', label: 'Active Traders' },
              { val: '₹10Cr+', label: 'Capital Deployed' },
              { val: '67%', label: 'Avg Win Rate' }
            ].map((stat, i) => (
              <div key={i} className="trust-item">
                <div style={{ fontFamily: "'Cormorant Garamond', serif", color: '#D4AF6A', fontSize: '26px', fontWeight: 600 }}>{stat.val}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", color: '#4A4845', fontSize: '11px', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================
            RIGHT COLUMN — Animated Bull
            ============================ */}
        <div
          className="hero-right-col"
          style={{
            flex: '0 0 45%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            minHeight: '400px',
            perspective: '800px',
            perspectiveOrigin: 'center center',
          }}
        >
          {/* Bull outer container — NO box, NO border, fully transparent */}
          <div
            style={{
              position: 'relative',
              width: '460px',
              height: '460px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 'none',
            }}
          >
            {/* Glow ring — soft circle */}
            <div
              id="bull-glow-ring"
              className="bull-glow-ring"
              style={{
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                border: '1px solid rgba(184,134,11,0.06)',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                opacity: 0.3,
                transition: 'opacity 0.15s, transform 0.15s',
              }}
            />

            {/* Radial glow behind the bull */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.12) 0%, rgba(184,134,11,0.04) 40%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Bull SVG — animated via scroll */}
            <div
              id="bull-container"
              className={`bull-entrance ${mounted ? 'bull-entered' : ''}`}
              style={{
                zIndex: 10,
                transition: 'transform 0.08s linear, filter 0.08s linear',
                willChange: 'transform, filter',
              }}
            >
              <BullLogo className="bull-actual-svg" size={420} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          opacity: scrolled ? 0 : 1, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 20
        }}
      >
        <span style={{ color: '#B8860B', fontSize: '10px', letterSpacing: '2px' }}>SCROLL</span>
        <div style={{ width: '1px', height: '40px', background: 'rgba(184,134,11,0.4)', position: 'relative' }}>
          <div style={{
            position: 'absolute', bottom: 0, left: '-4px', width: '9px', height: '9px',
            borderRight: '1px solid rgba(184,134,11,0.4)',
            borderBottom: '1px solid rgba(184,134,11,0.4)',
            transform: 'rotate(45deg)'
          }}></div>
        </div>
      </div>

      <style>{`
        /* Shimmer on "Conviction." */
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #B8860B 0%, #D4AF6A 20%, #B8860B 40%, #B8860B 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        /* Bull entrance keyframe */
        @keyframes bullEntrance {
          from { opacity: 0; transform: translateY(30px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .bull-entrance {
          opacity: 0;
          transform: translateY(30px) scale(0.92);
        }
        .bull-entered {
          animation: bullEntrance 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
        }

        /* Hover states for buttons */
        .hero-btn-primary:hover {
          background: #D4AF6A !important;
          transform: translateY(-2px);
        }
        .hero-btn-secondary:hover {
          background: rgba(184,134,11,0.06) !important;
          border-color: #D4AF6A !important;
          transform: translateY(-2px);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hero-grid {
            flex-direction: column !important;
          }
          .hero-left-col {
            flex: none !important;
            padding: 100px 24px 40px !important;
            text-align: left;
            min-width: 0 !important;
          }
          .hero-right-col {
            flex: none !important;
            padding-bottom: 60px;
            perspective: none !important;
          }
          /* Disable 3D transforms on mobile */
          #bull-container {
            transform: none !important;
            filter: none !important;
          }
          .bull-actual-svg {
            width: 260px !important;
            height: 260px !important;
          }
          .bull-glow-ring {
            width: 300px !important;
            height: 300px !important;
          }
          .trust-row {
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
