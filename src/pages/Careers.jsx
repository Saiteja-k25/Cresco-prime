import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import GoldButton from '../components/GoldButton';

/* ──── Position Data ──── */
const positions = [
  {
    title: 'Futures Trader',
    type: 'Full-time · Hyderabad',
    description:
      'We are looking for a disciplined Futures Trader to trade index futures, commodity futures, and currency futures using Cresco Prime\'s organizational capital. You will develop and execute systematic strategies across NIFTY, BANKNIFTY, crude oil, and gold futures. The ideal candidate has a strong understanding of market microstructure, risk management, and quantitative execution.',
    responsibilities: [
      'Execute futures trades across equity indices, commodities, and currencies',
      'Develop and backtest systematic trading strategies',
      'Monitor positions and manage risk within defined parameters',
      'Collaborate with the research team on market analysis',
      'Maintain detailed trade logs and performance reports',
    ],
    requirements: [
      '1–3 years of trading experience (futures preferred)',
      'Strong analytical and quantitative skills',
      'Familiarity with NSE/BSE market structure',
      'Proficiency in Excel, Python, or trading software',
    ],
  },
  {
    title: 'Stocks Trader',
    type: 'Full-time · Hyderabad',
    description:
      'We are seeking a focused Stocks Trader to trade equity positions across large-cap, mid-cap, and sector-specific stocks using Cresco Prime\'s capital. You will identify momentum, breakout, and value opportunities using a combination of technical and fundamental analysis.',
    responsibilities: [
      'Trade equity positions across NSE and BSE listed stocks',
      'Identify high-probability setups using technical and fundamental analysis',
      'Manage intraday and swing trade positions with strict risk controls',
      'Track sector trends and corporate events for trading opportunities',
      'Report daily P&L and maintain position accountability',
    ],
    requirements: [
      '1–3 years of equity trading experience',
      'Knowledge of technical analysis and charting',
      'Understanding of corporate fundamentals and market dynamics',
      'Experience with trading terminals (Zerodha, cTrader, or similar)',
    ],
  },
  {
    title: 'Options Trader',
    type: 'Full-time · Hyderabad',
    description:
      'We are hiring a skilled Options Trader to build and manage options strategies across indices and equities. You will work on premium selling, hedged structures, and volatility-based strategies using Cresco Prime\'s capital and infrastructure.',
    responsibilities: [
      'Design and execute options strategies including spreads, straddles, and iron condors',
      'Manage Greeks (Delta, Theta, Vega) and portfolio-level risk exposure',
      'Monitor implied volatility and adapt strategies to market conditions',
      'Collaborate with the risk team to ensure position sizing is within limits',
      'Document all strategies and trade outcomes for performance review',
    ],
    requirements: [
      '1–3 years of options trading experience',
      'Strong understanding of options pricing models and Greeks',
      'Experience with Index options (NIFTY/BANKNIFTY preferred)',
      'Analytical mindset with strong attention to risk',
    ],
  },
];

const experienceOptions = [
  'Less than 1 year',
  '1–3 years',
  '3–5 years',
  '5+ years',
];

/* ──── Styles ──── */
const s = {
  page: { background: '#080808', color: '#F0EDE8', minHeight: '100vh', paddingBottom: '100px' },
  container: { maxWidth: '900px', margin: '0 auto', padding: '80px 40px' },
  breadcrumb: { fontSize: '13px', color: '#4A4845', marginBottom: '24px' },
  breadcrumbLink: { color: '#4A4845', textDecoration: 'none' },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '56px',
    fontWeight: 700,
    color: '#F0EDE8',
    margin: '0 0 16px',
  },
  goldLine: { width: '56px', height: '2px', background: '#B8860B', marginBottom: '16px' },
  subtext: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '17px',
    color: '#8A8880',
    maxWidth: '560px',
    lineHeight: 1.7,
    margin: '0 0 60px',
  },
  card: {
    background: '#0E0E0C',
    border: '1px solid rgba(184,134,11,0.12)',
    borderRadius: '10px',
    padding: '36px 40px',
    marginBottom: '20px',
    transition: 'border-color 0.25s',
  },
  badge: {
    fontSize: '10px',
    letterSpacing: '0.15em',
    color: '#B8860B',
    background: 'rgba(184,134,11,0.08)',
    padding: '4px 10px',
    borderRadius: '3px',
    display: 'inline-block',
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  cardTitle: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '24px',
    color: '#F0EDE8',
    fontWeight: 600,
    marginTop: '12px',
    marginBottom: '4px',
  },
  cardType: { fontSize: '12px', color: '#8A8880', marginBottom: '20px' },
  cardDesc: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px',
    color: '#8A8880',
    lineHeight: 1.8,
    marginBottom: '24px',
  },
  sectionLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    color: '#D4AF6A',
    letterSpacing: '0.06em',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#8A8880',
    lineHeight: 2,
    fontFamily: "'Inter', sans-serif",
  },
  dot: {
    width: '5px',
    height: '5px',
    minWidth: '5px',
    borderRadius: '50%',
    background: '#B8860B',
    marginTop: '11px',
  },
  formHeading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '36px',
    fontWeight: 700,
    color: '#F0EDE8',
    textAlign: 'center',
    margin: '60px 0 8px',
  },
  formSubtext: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '15px',
    color: '#8A8880',
    textAlign: 'center',
    margin: '0 0 36px',
  },
  formContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    background: '#0E0E0C',
    border: '1px solid rgba(184,134,11,0.1)',
    borderRadius: '10px',
    padding: '40px',
  },
  label: {
    display: 'block',
    fontSize: '10px',
    letterSpacing: '0.12em',
    color: '#8A8880',
    marginBottom: '6px',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    background: '#141414',
    border: '1px solid #2A2A2A',
    color: '#F5F5F0',
    padding: '11px 14px',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '18px',
    transition: 'border-color 0.2s',
  },
  textarea: {
    width: '100%',
    background: '#141414',
    border: '1px solid #2A2A2A',
    color: '#F5F5F0',
    padding: '11px 14px',
    borderRadius: '6px',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '18px',
    resize: 'vertical',
    transition: 'border-color 0.2s',
  },
  successBox: {
    textAlign: 'center',
    padding: '48px 24px',
    maxWidth: '600px',
    margin: '0 auto',
    background: '#0E0E0C',
    border: '1px solid rgba(184,134,11,0.15)',
    borderRadius: '10px',
  },
};

/* ──── Small Bull Icon for Success ──── */
function BullIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" style={{ marginBottom: '16px' }}>
      <path
        d="M256 48c-28 0-52 14-68 36-8-24-28-36-52-36-36 0-64 28-64 64 0 20 8 36 20 48-12 16-20 36-20 60 0 80 80 180 184 244 104-64 184-164 184-244 0-24-8-44-20-60 12-12 20-28 20-48 0-36-28-64-64-64-24 0-44 12-52 36-16-22-40-36-68-36z"
        fill="#B8860B"
        opacity="0.8"
      />
    </svg>
  );
}

function JobCard({ id, title, type, description, responsibilities, requirements, openCard, toggleCard }) {
  const isOpen = openCard === id
  
  return (
    <div style={{
      background: '#0E0E0C',
      border: `1px solid ${isOpen ? 'rgba(184,134,11,0.4)' : 'rgba(184,134,11,0.12)'}`,
      borderRadius: '10px',
      marginBottom: '16px',
      overflow: 'hidden',
      transition: 'border-color 0.25s ease',
    }}>
      {/* CARD HEADER — always visible, clickable */}
      <div
        onClick={() => toggleCard(id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '28px 32px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: '#B8860B',
            background: 'rgba(184,134,11,0.08)',
            padding: '3px 10px',
            borderRadius: '3px',
            display: 'inline-block',
            width: 'fit-content',
            fontFamily: '"Inter", sans-serif',
          }}>
            OPEN POSITION
          </span>
          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            color: '#F0EDE8',
            marginTop: '4px',
          }}>
            {title}
          </span>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '13px',
            color: '#8A8880',
          }}>
            {type}
          </span>
        </div>

        {/* Chevron icon */}
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: '1px solid rgba(184,134,11,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'transform 0.3s ease, border-color 0.25s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          borderColor: isOpen ? 'rgba(184,134,11,0.6)' : 'rgba(184,134,11,0.25)',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 4L6 8L10 4" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* CARD BODY — only visible when open */}
      <div style={{
        maxHeight: isOpen ? '1000px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{
          padding: '0 32px 32px',
          borderTop: '1px solid rgba(184,134,11,0.08)',
          paddingTop: '24px',
        }}>
          {/* Description */}
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '14px',
            color: '#8A8880',
            lineHeight: '1.8',
            marginBottom: '24px',
          }}>
            {description}
          </p>

          {/* Responsibilities */}
          <div style={{ marginBottom: '24px' }}>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: '#B8860B',
              fontWeight: 500,
              marginBottom: '12px',
            }}>
              RESPONSIBILITIES
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {responsibilities.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  marginBottom: '8px',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '14px',
                  color: '#8A8880',
                  lineHeight: '1.6',
                }}>
                  <span style={{
                    width: '5px', height: '5px',
                    borderRadius: '50%',
                    background: '#B8860B',
                    flexShrink: 0,
                    marginTop: '8px',
                  }}/>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '11px',
              letterSpacing: '0.15em',
              color: '#B8860B',
              fontWeight: 500,
              marginBottom: '12px',
            }}>
              REQUIREMENTS
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {requirements.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  marginBottom: '8px',
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '14px',
                  color: '#8A8880',
                  lineHeight: '1.6',
                }}>
                  <span style={{
                    width: '5px', height: '5px',
                    borderRadius: '50%',
                    background: '#B8860B',
                    flexShrink: 0,
                    marginTop: '8px',
                  }}/>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ──── Application Form ──── */
function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('Futures Trader');
  const [experience, setExperience] = useState('1–3 years');
  const [intro, setIntro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Application for ${position} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience}\n\nIntroduction:\n${intro}`
    );
    window.location.href = `mailto:hr@crescoprime.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const focusStyle = (e) => (e.target.style.borderColor = '#C9A84C');
  const blurStyle = (e) => (e.target.style.borderColor = '#2A2A2A');

  if (submitted) {
    return (
      <div style={s.successBox}>
        <BullIcon />
        <p style={{ color: '#D4AF6A', fontSize: '17px', fontFamily: "'Inter', sans-serif", lineHeight: 1.7, margin: 0 }}>
          Application sent! We'll review your profile and reach out within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={s.formContainer}>
      <label style={s.label}>Full Name *</label>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="John Doe"
        style={s.input}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={s.label}>Email Address *</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        style={s.input}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={s.label}>Phone Number</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+91 XXXXX XXXXX"
        style={s.input}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={s.label}>Position Applied For</label>
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        style={{ ...s.input, cursor: 'pointer', appearance: 'auto' }}
        onFocus={focusStyle}
        onBlur={blurStyle}
      >
        {positions.map((p) => (
          <option key={p.title} value={p.title}>{p.title}</option>
        ))}
      </select>

      <label style={s.label}>Years of Experience</label>
      <select
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        style={{ ...s.input, cursor: 'pointer', appearance: 'auto' }}
        onFocus={focusStyle}
        onBlur={blurStyle}
      >
        {experienceOptions.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <label style={s.label}>Brief Introduction</label>
      <textarea
        rows={4}
        value={intro}
        onChange={(e) => setIntro(e.target.value)}
        placeholder="Tell us about your trading background, strategies you use, and why you want to join Cresco Prime..."
        style={s.textarea}
        onFocus={focusStyle}
        onBlur={blurStyle}
      />

      <label style={s.label}>Upload Resume</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        style={{
          ...s.input,
          padding: '9px 14px',
          cursor: 'pointer',
          color: '#8A8880',
        }}
      />
      <p style={{ fontSize: '12px', color: '#4A4845', fontStyle: 'italic', margin: '-10px 0 24px' }}>
        Please attach your resume in the email that opens after you click Submit.
      </p>

      <GoldButton type="submit" style={{ width: '100%' }} innerStyleOverride={{ padding: '13px 0' }}>
        Submit Application
      </GoldButton>
    </form>
  );
}

/* ──── Main Page ──── */
export default function Careers() {
  const [openCard, setOpenCard] = useState(null)

  const toggleCard = (id) => {
    setOpenCard(prev => prev === id ? null : id)
  }

  const jobs = [
    {
      id: 'futures',
      title: 'Futures Trader',
      type: 'Full-time · Hyderabad',
      description: 'We are looking for a disciplined Futures Trader to trade index futures, commodity futures, and currency futures using Cresco Prime\'s organizational capital. You will develop and execute systematic strategies across NIFTY, BANKNIFTY, crude oil, and gold futures.',
      responsibilities: [
        'Execute futures trades across equity indices, commodities, and currencies',
        'Develop and backtest systematic trading strategies',
        'Monitor positions and manage risk within defined parameters',
        'Collaborate with the research team on market analysis',
        'Maintain detailed trade logs and performance reports',
      ],
      requirements: [
        '1–3 years of trading experience (futures preferred)',
        'Strong analytical and quantitative skills',
        'Familiarity with NSE/BSE market structure',
        'Proficiency in Excel, Python, or trading software',
      ],
    },
    {
      id: 'stocks',
      title: 'Stocks Trader',
      type: 'Full-time · Hyderabad',
      description: 'We are seeking a focused Stocks Trader to trade equity positions across large-cap, mid-cap, and sector-specific stocks using Cresco Prime\'s capital. You will identify momentum, breakout, and value opportunities using technical and fundamental analysis.',
      responsibilities: [
        'Trade equity positions across NSE and BSE listed stocks',
        'Identify high-probability setups using technical and fundamental analysis',
        'Manage intraday and swing trade positions with strict risk controls',
        'Track sector trends and corporate events for trading opportunities',
        'Report daily P&L and maintain position accountability',
      ],
      requirements: [
        '1–3 years of equity trading experience',
        'Knowledge of technical analysis and charting',
        'Understanding of corporate fundamentals and market dynamics',
        'Experience with trading terminals (Zerodha, cTrader, or similar)',
      ],
    },
    {
      id: 'options',
      title: 'Options Trader',
      type: 'Full-time · Hyderabad',
      description: 'We are hiring a skilled Options Trader to build and manage options strategies across indices and equities. You will work on premium selling, hedged structures, and volatility-based strategies using Cresco Prime\'s capital and infrastructure.',
      responsibilities: [
        'Design and execute options strategies including spreads, straddles, and iron condors',
        'Manage Greeks (Delta, Theta, Vega) and portfolio-level risk exposure',
        'Monitor implied volatility and adapt strategies to market conditions',
        'Collaborate with the risk team on position sizing',
        'Document all strategies and trade outcomes for performance review',
      ],
      requirements: [
        '1–3 years of options trading experience',
        'Strong understanding of options pricing models and Greeks',
        'Experience with Index options (NIFTY/BANKNIFTY preferred)',
        'Analytical mindset with strong attention to risk',
      ],
    },
  ]

  return (
    <Layout>
      <div style={s.page}>
        <div style={s.container}>
          {/* Breadcrumb */}
          <div style={s.breadcrumb}>
            <Link to="/" style={s.breadcrumbLink}>Home</Link> &gt; Careers
          </div>

          {/* Hero */}
          <h1 style={s.heading}>Join Cresco Prime</h1>
          <div style={s.goldLine} />
          <p style={s.subtext}>
            We're building a team of disciplined, high-performance traders. If markets are your domain, we want to hear from you.
          </p>

          <div style={{ marginBottom: '60px' }}>
            {jobs.map(job => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                type={job.type}
                description={job.description}
                responsibilities={job.responsibilities}
                requirements={job.requirements}
                openCard={openCard}
                toggleCard={toggleCard}
              />
            ))}
          </div>

          {/* Application Form */}
          <h2 style={s.formHeading}>Apply Now</h2>
          <p style={s.formSubtext}>
            Fill in the details below and attach your resume. We'll get back to you within 5 business days.
          </p>
          <ApplicationForm />
        </div>
      </div>
    </Layout>
  );
}
