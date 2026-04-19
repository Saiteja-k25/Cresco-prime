import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, TrendingUp, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import { AnimatedNumber } from '../components/StatsCounter';
import BullHero from '../components/BullHero';
import GoldButton, { GhostButton } from '../components/GoldButton';

/* ═══════════════════════════════════════════════
   SECTION 1 — Hero
   ═══════════════════════════════════════════════ */

function TradingCard() {
  return (
    <div
      style={{
        background: '#141414',
        border: '1px solid rgba(201,168,76,0.13)',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 0 40px rgba(201,168,76,0.06)',
        width: '100%',
        maxWidth: '360px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#F5F5F0', fontWeight: 700, fontSize: '16px', fontFamily: "'DM Sans', sans-serif" }}>NIFTY 50</span>
          <span style={{ background: 'rgba(201,168,76,0.13)', color: '#C9A84C', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>NSE</span>
        </div>
        <span style={{ color: '#22C55E', fontSize: '14px', fontWeight: 600 }}>▲ 0.42%</span>
      </div>

      {/* Price */}
      <div style={{ marginBottom: '12px' }}>
        <span style={{ color: '#F5F5F0', fontSize: '28px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif" }}>22,541.80</span>
      </div>

      {/* SVG Chart */}
      <svg viewBox="0 0 280 120" style={{ width: '100%', height: 'auto' }} preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Area */}
        <defs>
          <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,95 C20,90 40,85 60,80 C80,75 100,70 120,55 C140,40 160,50 180,45 C200,40 220,30 240,25 C260,20 270,18 280,15 L280,120 L0,120 Z"
          fill="url(#heroChartGrad)"
        />
        <path
          d="M0,95 C20,90 40,85 60,80 C80,75 100,70 120,55 C140,40 160,50 180,45 C200,40 220,30 240,25 C260,20 270,18 280,15"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="280" cy="15" r="3" fill="#C9A84C" />
        <circle cx="280" cy="15" r="6" fill="#C9A84C" fillOpacity="0.2" />
      </svg>

      {/* Stats Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {[
          { label: 'Open', value: '22,450' },
          { label: 'High', value: '22,680' },
          { label: 'Low', value: '22,380' },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ color: '#5A5A50', fontSize: '11px', marginBottom: '2px' }}>{s.label}</div>
            <div style={{ color: '#9E9E8F', fontSize: '13px', fontWeight: 600 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Market Status */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
        <span style={{ color: '#22C55E', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em' }}>MARKET OPEN</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="hero-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px', width: '100%' }}>
        <div className="hero-grid">
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 600 }}>
              INSTITUTIONAL TRADING PLATFORM
            </span>
            <h1
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 'clamp(42px, 6vw, 72px)',
                color: '#F5F5F0',
                fontWeight: 700,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Trade Smarter.<br />
              Grow Stronger.
            </h1>
            <p style={{ color: '#9E9E8F', fontSize: '18px', maxWidth: '480px', marginTop: '24px', lineHeight: 1.7 }}>
              Cresco Prime provides professional trading terminals backed by organizational capital — with the education and tools to make you consistently profitable.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '40px', flexWrap: 'wrap' }}>
              <Link
                to="/signup"
                className="btn-primary-hero"
                style={{
                  background: '#C9A84C',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  padding: '14px 32px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'background 0.3s',
                }}
              >
                Start Trading
              </Link>
              <Link
                to="/about"
                className="btn-ghost-hero"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(201,168,76,0.26)',
                  color: '#C9A84C',
                  fontWeight: 600,
                  padding: '14px 32px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'border-color 0.3s',
                }}
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div style={{ display: 'flex', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
              {['500+ Active Traders', 'SEBI Compliant', 'Since 2026'].map((item) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9E9E8F', fontSize: '13px' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TradingCard />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 2 — Live Ticker
   ═══════════════════════════════════════════════ */

const tickerData = [
  { sym: 'NIFTY 50', price: '22,541', change: '0.42%', up: true },
  { sym: 'BANKNIFTY', price: '48,230', change: '0.18%', up: false },
  { sym: 'SENSEX', price: '74,190', change: '0.61%', up: true },
  { sym: 'GOLD', price: '71,450', change: '1.2%', up: true },
  { sym: 'CRUDE OIL', price: '6,840', change: '0.34%', up: false },
  { sym: 'USD/INR', price: '83.42', change: '0.09%', up: true },
];

function TickerItems() {
  return (
    <>
      {tickerData.map((t, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginRight: '48px', whiteSpace: 'nowrap' }}>
          <span style={{ color: '#F5F5F0', fontSize: '13px', fontWeight: 600 }}>{t.sym}</span>
          <span style={{ color: '#9E9E8F', fontSize: '13px' }}>{t.price}</span>
          <span style={{ color: t.up ? '#22C55E' : '#EF4444', fontSize: '13px', fontWeight: 600 }}>
            {t.up ? '▲' : '▼'}{t.change}
          </span>
        </span>
      ))}
    </>
  );
}

function LiveTicker() {
  return (
    <div style={{ height: '40px', background: '#0A0A08', borderTop: '1px solid rgba(184,134,11,0.08)', borderBottom: '1px solid rgba(184,134,11,0.08)', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <div className="ticker-track">
        <div className="ticker-content">
          <TickerItems />
          <TickerItems />
          <TickerItems />
          <TickerItems />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 3 — Platform Features
   ═══════════════════════════════════════════════ */

const features = [
  {
    icon: Monitor,
    title: 'Professional Terminals',
    text: 'Access institutional-grade trading terminals with real-time data, advanced charting, and direct market execution.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Analytics',
    text: 'Track every position, measure risk-adjusted returns, and get a clear picture of your trading performance.',
  },
  {
    icon: BookOpen,
    title: 'Structured Education',
    text: 'Learn proven strategies, market structure analysis, and risk management from experienced traders.',
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

function PlatformFeatures() {
  return (
    <section id="features" style={{ background: '#080808', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#B8860B', textTransform: 'uppercase', fontWeight: 500 }}>THE PLATFORM</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F0EDE8', fontWeight: 500, margin: '12px 0 48px' }}>
          Everything you need to trade professionally
        </h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="feature-card"
              style={{
                background: '#0E0E0C',
                border: '1px solid rgba(184,134,11,0.1)',
                borderRadius: '8px',
                padding: '32px',
                transition: 'border-color 0.3s, transform 0.3s',
                cursor: 'default',
              }}
            >
              <f.icon size={28} color="#B8860B" strokeWidth={1.5} style={{ marginBottom: '20px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 12px' }}>{f.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: '#8A8880', fontSize: '14px', lineHeight: 1.75, margin: 0 }}>{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 4 — Stats Bar
   ═══════════════════════════════════════════════ */

function StatsBar() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid rgba(184,134,11,0.15)', borderBottom: '1px solid rgba(184,134,11,0.15)', padding: '64px 24px' }}>
      <div className="stats-row" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {[
          { end: 500, suffix: '+', label: 'Active Traders' },
          { end: 10, prefix: '₹', suffix: 'Cr+', label: 'Capital Deployed' },
          { end: 67, suffix: '%', label: 'Avg Win Rate' },
        ].map((s, i) => (
          <div key={s.label} className={`stat-item ${i < 2 ? 'stat-bordered' : ''}`} style={{ textAlign: 'center', flex: 1 }}>
            <AnimatedNumber end={s.end} suffix={s.suffix} prefix={s.prefix || ''} />
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#4A4845', fontSize: '13px', marginTop: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 5 — How It Works
   ═══════════════════════════════════════════════ */

const steps = [
  { num: '01', title: 'Apply & Onboard', text: 'Complete our onboarding process and get verified as a Cresco Prime trader.' },
  { num: '02', title: 'Access Your Terminal', text: 'Log in to your personal dashboard and connect to live trading terminals.' },
  { num: '03', title: 'Trade & Grow', text: 'Execute trades with organizational backing, track performance, and scale your profits.' },
];

function HowItWorks() {
  return (
    <section style={{ background: '#080808', padding: '100px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F0EDE8', fontWeight: 500, textAlign: 'center', marginBottom: '64px' }}>
          How Cresco Prime Works
        </h2>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{ textAlign: 'center', flex: 1 }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  border: '2px solid #B8860B',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#B8860B',
                }}
              >
                {s.num}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '18px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 10px' }}>{s.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: '#8A8880', fontSize: '14px', lineHeight: 1.7, maxWidth: '280px', margin: '0 auto' }}>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   SECTION 6 — CTA Banner
   ═══════════════════════════════════════════════ */

function CTABanner() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, #080808 0%, #0D0B06 50%, #080808 100%)',
        borderTop: '1px solid rgba(184,134,11,0.15)',
        padding: '100px 24px',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(28px, 4vw, 48px)', color: '#F0EDE8', fontWeight: 500, margin: '0 0 16px' }}>
          Ready to join Cresco Prime?
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", color: '#8A8880', fontSize: '16px', marginBottom: '40px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          Apply now and start your journey as a professional trader.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <GoldButton to="/signup">
            Apply Now
          </GoldButton>
          <GhostButton to="/contact">
            Contact Us
          </GhostButton>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   INLINE STYLES
   ═══════════════════════════════════════════════ */

function HomeStyles() {
  return (
    <style>{`
      .hero-grid {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 60px;
        align-items: center;
      }
      @media (max-width: 768px) {
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 40px;
        }
      }

      .ticker-track {
        display: flex;
        width: 100%;
        overflow: hidden;
      }
      .ticker-content {
        display: flex;
        animation: tickerScroll 40s linear infinite;
        will-change: transform;
      }
      @keyframes tickerScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
      }
      @media (max-width: 768px) {
        .features-grid {
          grid-template-columns: 1fr;
        }
      }
      .feature-card:hover {
        border-color: rgba(184,134,11,0.3) !important;
        transform: translateY(-4px) !important;
      }

      .stats-row {
        display: flex;
        align-items: center;
      }
      .stat-bordered {
        border-right: 1px solid rgba(184,134,11,0.15);
      }
      @media (max-width: 640px) {
        .stats-row {
          flex-direction: column;
          gap: 32px;
        }
        .stat-bordered {
          border-right: none;
          border-bottom: 1px solid rgba(184,134,11,0.15);
          padding-bottom: 32px;
        }
      }

      .steps-grid {
        display: flex;
        gap: 40px;
        position: relative;
      }
      .steps-grid::before {
        content: '';
        position: absolute;
        top: 28px;
        left: 15%;
        right: 15%;
        height: 2px;
        border-top: 2px dashed rgba(184,134,11,0.2);
        z-index: 0;
      }
      .steps-grid > * {
        position: relative;
        z-index: 1;
      }
      @media (max-width: 640px) {
        .steps-grid {
          flex-direction: column;
          gap: 48px;
        }
        .steps-grid::before {
          display: none;
        }
      }

      .btn-primary-hero:hover {
        background: #D4AF6A !important;
      }
      .btn-ghost-hero:hover {
        border-color: #D4AF6A !important;
      }
    `}</style>
  );
}

/* ═══════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════ */

export default function Home() {
  return (
    <Layout>
      <HomeStyles />
      <BullHero />
      <LiveTicker />
      <PlatformFeatures />
      <StatsBar />
      <HowItWorks />
      <CTABanner />
    </Layout>
  );
}
