import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import GoldButton, { GhostButton } from '../components/GoldButton';

export default function Services() {
  return (
    <Layout>
      <section style={{ background: '#080808', padding: '100px 24px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#4A4845', marginBottom: '24px' }}>
            Home &gt; Services
          </div>

          {/* Heading */}
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '56px', color: '#F0EDE8', fontWeight: 500, margin: 0 }}>
            Our Services
          </h1>

          {/* Gold underline */}
          <div style={{ width: '60px', height: '2px', background: '#B8860B', marginTop: '16px' }} />

          {/* Subtext */}
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', color: '#8A8880', maxWidth: '600px', marginTop: '20px', lineHeight: 1.7 }}>
            Institutional-grade tools, capital access, and structured education — everything a professional trader needs.
          </p>

          {/* Service Cards Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '80px' }}>
            
            {/* Card 1 — Trading Terminals */}
            <div style={{ 
              background: '#0E0E0C', 
              border: '1px solid rgba(184,134,11,0.12)', 
              borderRadius: '12px', 
              padding: '64px',
              display: 'flex',
              gap: '64px',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#B8860B', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
                  01 — TERMINALS
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 20px 0' }}>
                  Professional Trading Terminals
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#8A8880', lineHeight: 1.7, marginBottom: '32px' }}>
                  Access institutional-grade trading terminals backed by Cresco Prime's organizational capital. Trade across crypto, commodities, equities, futures, and options with real-time data and advanced execution.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "Real-time market data across all asset classes",
                    "Direct market execution with low latency",
                    "Backed by organizational capital — no personal capital required",
                    "Risk management controls built in"
                  ].map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8860B', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8A8880', lineHeight: 1.6 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 30%', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG Visual */}
                <div style={{ width: '100%', maxWidth: '320px', borderRadius: '8px', border: '1px solid rgba(184,134,11,0.2)', padding: '24px', background: '#080808' }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '24px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A4845' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A4845' }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A4845' }} />
                  </div>
                  <svg viewBox="0 0 200 100" width="100%">
                    <polyline points="0,80 40,60 80,70 120,40 160,50 200,20" fill="none" stroke="#B8860B" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="200" cy="20" r="4" fill="#B8860B" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 — Portfolio Analytics (Reversed) */}
            <div style={{ 
              background: '#0E0E0C', 
              border: '1px solid rgba(184,134,11,0.12)', 
              borderRadius: '12px', 
              padding: '64px',
              display: 'flex',
              gap: '64px',
              flexDirection: 'row-reverse',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#B8860B', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
                  02 — ANALYTICS
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 20px 0' }}>
                  Portfolio & Performance Analytics
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#8A8880', lineHeight: 1.7, marginBottom: '32px' }}>
                  Track every position, measure risk-adjusted returns, and get a clear picture of your trading performance. Precision data that helps you grow systematically.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "P&L tracking across all positions",
                    "Win rate and drawdown analytics",
                    "Risk-reward ratio monitoring",
                    "Historical performance reports"
                  ].map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8860B', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8A8880', lineHeight: 1.6 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 30%', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG Visual */}
                <div style={{ width: '100%', maxWidth: '320px', borderRadius: '8px', border: '1px solid rgba(184,134,11,0.2)', padding: '24px', background: '#080808' }}>
                  <svg viewBox="0 0 200 120" width="100%">
                    <rect x="20" y="40" width="24" height="80" fill="rgba(184,134,11,0.3)" />
                    <rect x="60" y="60" width="24" height="60" fill="rgba(184,134,11,0.3)" />
                    <rect x="100" y="20" width="24" height="100" fill="#B8860B" />
                    <rect x="140" y="80" width="24" height="40" fill="rgba(184,134,11,0.3)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 — Education */}
            <div style={{ 
              background: '#0E0E0C', 
              border: '1px solid rgba(184,134,11,0.12)', 
              borderRadius: '12px', 
              padding: '64px',
              display: 'flex',
              gap: '64px',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
              <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', letterSpacing: '0.2em', color: '#B8860B', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>
                  03 — EDUCATION
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 20px 0' }}>
                  Structured Trading Education
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#8A8880', lineHeight: 1.7, marginBottom: '32px' }}>
                  Learn proven strategies, quantitative market analysis, and institutional risk management from experienced traders. Our curriculum is built for real performance, not theory.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "Market structure and technical analysis",
                    "Quantitative trading strategies",
                    "Risk management frameworks",
                    "Mentorship from active traders"
                  ].map((bullet, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#B8860B', marginTop: '8px', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#8A8880', lineHeight: 1.6 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ flex: '1 1 30%', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* SVG Visual */}
                 <div style={{ width: '100%', maxWidth: '320px', borderRadius: '8px', border: '1px solid rgba(184,134,11,0.2)', padding: '24px', background: '#080808' }}>
                  <svg viewBox="0 0 200 120" width="100%">
                    <path d="M100 20 L20 60 L100 100 L180 60 Z" fill="rgba(184,134,11,0.15)" stroke="#B8860B" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M60 80 L100 100 L140 80" fill="none" stroke="#B8860B" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div style={{ marginTop: '100px', textAlign: 'center', padding: '64px 0', borderTop: '1px solid rgba(184,134,11,0.12)' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '40px', color: '#F0EDE8', fontWeight: 500, margin: '0 0 40px 0' }}>
              Ready to access professional trading?
            </h2>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <GoldButton to="/signup">
                Apply Now
              </GoldButton>
              <GhostButton to="/contact">
                Contact Us
              </GhostButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
