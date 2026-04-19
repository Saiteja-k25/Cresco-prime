import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'Careers', path: '/careers' },
];



const menuVariants = {
  closed: {
    opacity: 0,
    y: '-100%',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 bg-bg-primary"
      style={{ borderBottom: '1px solid rgba(201, 168, 76, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div onClick={closeMenu}>
            <Logo size={32} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-text-secondary text-[13px] font-normal tracking-[0.06em] no-underline transition-colors duration-200 hover:text-gold-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              style={{
                background: 'transparent',
                color: '#B8860B',
                border: '1px solid rgba(184,134,11,0.4)',
                borderRadius: '4px',
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                transition: 'border-color 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8860B'; e.currentTarget.style.color = '#D4AF6A'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)'; e.currentTarget.style.color = '#B8860B'; }}
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              style={{
                background: '#B8860B',
                color: '#080808',
                border: 'none',
                borderRadius: '4px',
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: '"Inter", sans-serif',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#D4AF6A'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#B8860B'; }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gold bg-transparent border-none cursor-pointer z-[60]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg-primary flex flex-col items-center justify-center md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="text-text-secondary text-2xl font-normal tracking-[0.06em] no-underline transition-colors duration-200 hover:text-gold-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Buttons */}
              <motion.div
                className="flex flex-col items-center gap-4 mt-6"
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div onClick={closeMenu} style={{ width: '100%' }}>
                  <button
                    onClick={() => navigate('/login')}
                    style={{
                      background: 'transparent',
                      color: '#B8860B',
                      border: '1px solid rgba(184,134,11,0.4)',
                      borderRadius: '4px',
                      padding: '8px 20px',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      fontFamily: '"Inter", sans-serif',
                      transition: 'border-color 0.2s ease, color 0.2s ease',
                      width: '100%'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#B8860B'; e.currentTarget.style.color = '#D4AF6A'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)'; e.currentTarget.style.color = '#B8860B'; }}
                  >
                    Login
                  </button>
                </div>
                <div onClick={closeMenu} style={{ width: '100%' }}>
                  <button
                    onClick={() => navigate('/signup')}
                    style={{
                      background: '#B8860B',
                      color: '#080808',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '8px 20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: '"Inter", sans-serif',
                      transition: 'background 0.2s ease',
                      width: '100%'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#D4AF6A'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#B8860B'; }}
                  >
                    Sign Up
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
