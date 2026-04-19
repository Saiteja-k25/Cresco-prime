import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div style={{ background: '#080808', color: '#F0EDE8', minHeight: '100vh', paddingBottom: '100px' }}>
        {/* Hero Section */}
        <section style={{ padding: '120px 24px 60px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ color: '#8A8880', fontSize: '13px', marginBottom: '24px' }}>
            <Link to="/" style={{ color: '#8A8880', textDecoration: 'none' }}>Home</Link> &gt; About
          </div>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '48px', fontWeight: 700, margin: '0 0 16px' }}>
            About Cresco Prime
          </h1>
          <div style={{ width: '48px', height: '2px', background: '#B8860B', marginBottom: '24px' }}></div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#D4AF6A', fontSize: '22px', maxWidth: '560px', lineHeight: 1.5, margin: '0 0 32px' }}>
            Where Quant Precision Meets Multi-Asset Alpha.
          </p>
          <div style={{ color: '#8A8880', fontSize: '16px', maxWidth: '680px', lineHeight: 1.8, margin: 0 }}>
            <p style={{ margin: '0 0 20px' }}>
              At Cresco Prime, we deploy capital across crypto, commodities, equities, futures, and options with a pure prop-trading mindset. Powered by quantitative models, real-time market intelligence, and institutional-grade risk controls, we target high-probability opportunities in all market conditions.
            </p>
            <p style={{ margin: '0 0 20px' }}>
              Momentum. Arbitrage. Breakouts. Hedged derivatives. Every trade is precision-driven. Every risk is measured.
            </p>
            <p style={{ margin: 0, color: '#D4AF6A', fontWeight: 500 }}>
              We don't chase markets — we position ahead of them.
            </p>
          </div>
        </section>

        {/* From the Founder */}
        <section style={{ padding: '0 24px 60px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            background: '#101010',
            borderLeft: '3px solid #B8860B',
            padding: '32px 40px',
            borderRadius: '0 8px 8px 0',
          }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '18px', color: '#8A8880', lineHeight: 1.7, margin: '0 0 20px', maxWidth: '720px' }}>
              "Cresco Prime represents a shift in mindset — from dependency to financial independence, from uncertainty to strategy, and from chasing opportunities to building sustainable wealth. Our vision is to help individuals break free from traditional limitations, take ownership of their financial journey, and move confidently toward a future defined by true financial freedom."
            </p>
            <span style={{ fontSize: '13px', color: '#B8860B', fontWeight: 600 }}>
              — Kalyan Boddula, Founder
            </span>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '32px', fontWeight: 600, margin: '0 0 24px' }}>Our Mission</h2>
              <p style={{ color: '#8A8880', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
                To democratize institutional trading by providing serious traders with the capital, tools, and knowledge to compete at the highest level.
              </p>
            </div>
            <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Integrity', desc: 'We operate with full transparency in performance and risk.' },
                { title: 'Excellence', desc: 'We hold our traders to institutional standards.' },
                { title: 'Growth', desc: 'Every trader here is on a structured path to consistency.' }
              ].map(val => (
                <div key={val.title} style={{ background: '#161614', borderLeft: '3px solid #B8860B', padding: '20px', borderRadius: '4px' }}>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '18px', margin: '0 0 8px', color: '#F0EDE8' }}>{val.title}</h3>
                  <p style={{ color: '#8A8880', margin: 0, fontSize: '14px' }}>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '32px', fontWeight: 600, margin: '0 0 12px', textAlign: 'center' }}>Our Team</h2>
          <p style={{ textAlign: 'center', color: '#8A8880', fontSize: '15px', margin: '0 0 40px' }}>The people behind the strategy.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '720px', margin: '0 auto' }}>
            {[
              {
                name: 'Kalyan Boddula',
                role: 'Director & Founder',
                detail: 'Matrix Missions & Cresco Prime',
                location: 'Hyderabad, Telangana',
                initials: 'KB',
                gradient: 'linear-gradient(135deg, #B8860B, #7A5C1E)',
              },
              {
                name: 'Varun Carter',
                role: 'Director of Operations',
                detail: 'Cresco Prime & Matrix Missions',
                location: 'Hyderabad, Telangana',
                initials: 'VC',
                gradient: 'linear-gradient(135deg, #2A2A28, #B8860B)',
              }
            ].map((member, i) => (
              <div key={i} style={{ background: '#161614', padding: '36px 28px', borderRadius: '8px', textAlign: 'center', border: '1px solid #1E1C18' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 20px',
                  background: member.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#F0EDE8', fontSize: '24px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif"
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '20px', margin: '0 0 6px', color: '#F0EDE8' }}>{member.name}</h3>
                <p style={{ color: '#B8860B', margin: '0 0 8px', fontSize: '14px', fontWeight: 600 }}>{member.role}</p>
                <p style={{ color: '#8A8880', margin: '0 0 4px', fontSize: '13px' }}>{member.detail}</p>
                <p style={{ color: '#4A4845', margin: 0, fontSize: '12px' }}>{member.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info + LinkedIn CTA */}
        <section style={{ padding: '60px 24px', textAlign: 'center' }}>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ color: '#8A8880', fontSize: '14px', margin: '0 0 6px' }}>
              <a href="mailto:kalyan@crescoprime.com" style={{ color: '#D4AF6A', textDecoration: 'none' }}>kalyan@crescoprime.com</a>
            </p>
          </div>
          <p style={{ color: '#4A4845', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>Founded 2026 · Hyderabad, India</p>
          <p style={{ color: '#4A4845', fontSize: '13px', fontFamily: "'Inter', sans-serif", margin: '0 0 32px' }}>Hyderabad</p>
          <a
            href="https://www.linkedin.com/company/cresco-prime/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#B8860B',
              color: '#080808',
              fontWeight: 600,
              padding: '16px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#D4AF6A'}
            onMouseOut={(e) => e.currentTarget.style.background = '#B8860B'}
          >
            Connect with us on LinkedIn
          </a>
        </section>
      </div>
    </Layout>
  );
}
