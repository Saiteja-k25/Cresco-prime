import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const sections = [
  {
    title: 'Acceptance of Terms',
    text: 'By accessing or using the Cresco Prime platform, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.',
  },
  {
    title: 'Eligibility',
    text: 'You must be at least 18 years of age to use our platform. By using Cresco Prime, you represent that you are of legal age and have the legal capacity to enter into a binding agreement.',
  },
  {
    title: 'Trading Risk Disclaimer',
    text: 'Trading in financial markets involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Cresco Prime provides trading infrastructure and education — all trading decisions are made by the trader and at the trader\'s own risk.',
  },
  {
    title: 'Platform Usage',
    text: 'You agree to use the platform only for lawful purposes and in accordance with applicable financial regulations. Unauthorized access, misuse, or fraudulent activity will result in immediate account termination and may be reported to relevant authorities.',
  },
  {
    title: 'Intellectual Property',
    text: 'All content, branding, and technology on the Cresco Prime platform is the property of Cresco Prime and protected by applicable intellectual property laws. You may not reproduce or distribute any content without written permission.',
  },
  {
    title: 'Limitation of Liability',
    text: 'Cresco Prime shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our liability is limited to the maximum extent permitted by applicable law.',
  },
  {
    title: 'Contact',
    text: 'For questions about these Terms, contact us at hr@crescoprime.com.',
  },
];

export default function Terms() {
  return (
    <Layout>
      <div style={{ background: '#080808', color: '#F0EDE8', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '13px', color: '#4A4845', marginBottom: '24px' }}>
            <Link to="/" style={{ color: '#4A4845', textDecoration: 'none' }}>Home</Link> &gt; Terms of Use
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '48px',
            fontWeight: 700,
            color: '#F0EDE8',
            margin: '0 0 16px',
          }}>
            Terms of Use
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
