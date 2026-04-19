import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Information We Collect',
    text: 'We collect information you provide directly when you create an account, including your name, email address, and usage data. We also collect technical information such as IP address, browser type, and pages visited to improve our services.',
  },
  {
    title: 'How We Use Your Information',
    text: 'Your information is used to provide and improve our trading platform, process transactions, send important account notifications, and ensure platform security. We do not sell your personal data to third parties.',
  },
  {
    title: 'Data Security',
    text: 'We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest. Access to personal data is restricted to authorized personnel only.',
  },
  {
    title: 'Cookies',
    text: 'We use essential cookies to maintain your session and preferences. Analytics cookies help us understand how the platform is used. You can manage cookie preferences through your browser settings.',
  },
  {
    title: 'Your Rights',
    text: 'You have the right to access, update, or delete your personal data at any time. To exercise these rights, contact us at hr@crescoprime.com. We will respond to all requests within 30 days.',
  },
  {
    title: 'Contact',
    text: 'For privacy-related questions, contact Cresco Prime at hr@crescoprime.com or write to us at NK Avenue, Safari Nagar, Kondapur, Hyderabad 500084.',
  },
];

export default function Privacy() {
  return (
    <Layout>
      <div style={{ background: '#080808', color: '#F0EDE8', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: '#4A4845', marginBottom: '24px' }}>
            <Link to="/" style={{ color: '#4A4845', textDecoration: 'none' }}>Home</Link> &gt; Privacy Policy
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '48px',
            fontWeight: 700,
            color: '#F0EDE8',
            margin: '0 0 16px',
          }}>
            Privacy Policy
          </h1>

          {/* Gold underline */}
          <div style={{ width: '48px', height: '2px', background: '#B8860B', marginBottom: '8px' }} />

          {/* Last updated */}
          <p style={{ fontSize: '13px', color: '#4A4845', margin: '0 0 48px' }}>
            Last updated: April 2026
          </p>

          {/* Sections */}
          {sections.map((section, i) => (
            <div key={section.title}>
              {i > 0 && (
                <hr style={{ border: 'none', borderTop: '1px solid #1E1C18', margin: '32px 0' }} />
              )}
              <div style={{ marginBottom: '40px' }}>
                <h2 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#F0EDE8',
                  margin: '0 0 12px',
                }}>
                  {section.title}
                </h2>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '15px',
                  color: '#8A8880',
                  lineHeight: 1.9,
                  margin: 0,
                }}>
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
