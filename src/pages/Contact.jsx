import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const LinkedinIcon = ({ color, size, style }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset(); // clear form
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <Layout>
      <div style={{ background: '#0A0A0A', color: '#F5F5F0', minHeight: '100vh', padding: '120px 24px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* Left Column: Contact Info */}
          <div style={{ flex: '1 1 400px' }}>
            <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '48px', fontWeight: 700, margin: '0 0 40px' }}>
              Get in Touch
            </h1>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <Mail color="#C9A84C" size={24} style={{ marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '14px', color: '#9E9E8F', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</h3>
                  <a href="mailto:hr@crescoprime.com" style={{ color: '#F5F5F0', textDecoration: 'none', fontSize: '16px' }}>hr@crescoprime.com</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <LinkedinIcon color="#C9A84C" size={24} style={{ marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '14px', color: '#9E9E8F', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/cresco-prime/" target="_blank" rel="noopener noreferrer" style={{ color: '#F5F5F0', textDecoration: 'none', fontSize: '16px' }}>Connect on LinkedIn</a>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <MapPin color="#C9A84C" size={24} style={{ marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '14px', color: '#9E9E8F', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</h3>
                  <span style={{ color: '#F5F5F0', display: 'block', fontSize: '16px' }}>Hyderabad</span>
                </div>
              </div>
            </div>

            <p style={{ color: '#9E9E8F', fontSize: '15px', lineHeight: 1.6, padding: '20px', background: '#141414', borderLeft: '3px solid #C9A84C', borderRadius: '4px' }}>
              For trading inquiries, partnerships, or general questions — we typically respond within 24 hours.
            </p>
          </div>

          {/* Right Column: form */}
          <div style={{ flex: '1 1 400px', background: '#141414', padding: '40px', borderRadius: '8px', border: '1px solid rgba(201,168,76,0.13)' }}>
            {success ? (
              <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid #22C55E', color: '#22C55E', padding: '20px', borderRadius: '4px', textAlign: 'center' }}>
                Message sent! We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9E9E8F', textTransform: 'uppercase' }}>Name</label>
                  <input required id="name" type="text" style={{ width: '100%', background: '#0A0A0A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '12px 16px', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9E9E8F', textTransform: 'uppercase' }}>Email</label>
                  <input required id="email" type="email" style={{ width: '100%', background: '#0A0A0A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '12px 16px', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="subject" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9E9E8F', textTransform: 'uppercase' }}>Subject</label>
                  <input required id="subject" type="text" style={{ width: '100%', background: '#0A0A0A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '12px 16px', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#9E9E8F', textTransform: 'uppercase' }}>Message</label>
                  <textarea required id="message" rows="4" style={{ width: '100%', background: '#0A0A0A', border: '1px solid #2A2A2A', color: '#F5F5F0', padding: '12px 16px', borderRadius: '4px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}></textarea>
                </div>

                <button type="submit" style={{ background: '#C9A84C', color: '#0A0A0A', fontWeight: 600, padding: '14px', borderRadius: '4px', border: 'none', cursor: 'pointer', marginTop: '10px', transition: 'background 0.3s' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
      <style>{`
        input:focus, textarea:focus { border-color: #C9A84C !important; }
        button[type="submit"]:hover { background: #E8C97A !important; }
      `}</style>
    </Layout>
  );
}
