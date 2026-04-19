import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const aboutLinks = [
  { name: 'Our Story', path: '/about', isLink: true },
  { name: 'Team', path: '/about#team', isHash: true },
];

const servicesItems = [
  'Wealth Management',
  'Portfolio Advisory',
  'Financial Planning',
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Use', path: '/terms' },
];

export default function Footer() {
  return (
    <footer
      className="bg-bg-primary pt-16 pb-8"
      style={{ borderTop: '1px solid rgba(184, 134, 11, 0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Columns */}
        <div className="footer-columns grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-14">
          {/* About */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              About
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      className="text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                    >
                      {link.name}
                    </a>
                  ) : link.isHash ? (
                    <a
                      href={link.path}
                      className="text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {servicesItems.map((name) => (
                <li key={name}>
                  <span style={{ color: '#4A4845', fontSize: '14px', cursor: 'default', display: 'block', padding: '4px 0' }}>
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-text-primary text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hr@crescoprime.com"
                  className="flex items-center gap-2 text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                >
                  <Mail size={16} className="text-gold-dim flex-shrink-0" />
                  hr@crescoprime.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917993047034"
                  className="flex items-center gap-2 text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                >
                  <Phone size={16} className="text-gold-dim flex-shrink-0" />
                  +91 79930 47034
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cresco-prime/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary text-sm no-underline transition-colors duration-300 hover:text-gold"
                >
                  <LinkedinIcon size={16} className="text-gold-dim flex-shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-text-secondary text-sm">
                  <MapPin size={16} className="text-gold-dim flex-shrink-0" style={{ marginTop: '2px' }} />
                  <div style={{ lineHeight: 1.5 }}>
                    <span style={{ display: 'block' }}>Hyderabad</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="footer-mobile-only"
          style={{
            display: 'none',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '32px 24px 24px',
            borderTop: '1px solid rgba(184,134,11,0.1)'
          }}
        >
          {/* Mobile nav links row */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/about" style={{ color: '#8A8880', fontSize: '13px', textDecoration: 'none' }}>About</Link>
            <Link to="/privacy" style={{ color: '#8A8880', fontSize: '13px', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/terms" style={{ color: '#8A8880', fontSize: '13px', textDecoration: 'none' }}>Terms</Link>
          </div>
          
          {/* Mobile contact row */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <a 
              href="mailto:hr@crescoprime.com" 
              style={{ color: '#8A8880', fontSize: '12px', textDecoration: 'none' }}
            >
              hr@crescoprime.com
            </a>
            <a 
              href="https://www.linkedin.com/company/cresco-prime/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#B8860B', fontSize: '12px', textDecoration: 'none' }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 footer-copyright"
          style={{ borderTop: '1px solid rgba(184, 134, 11, 0.1)' }}
        >
          <p className="text-text-muted text-xs tracking-wide">
            &copy; 2026 Cresco Prime. All rights reserved.
          </p>
          <div className="flex items-center gap-6 footer-copyright-links">
            <Link
              to="/privacy"
              className="text-text-muted text-xs no-underline transition-colors duration-300 hover:text-gold"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-text-muted text-xs no-underline transition-colors duration-300 hover:text-gold"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
