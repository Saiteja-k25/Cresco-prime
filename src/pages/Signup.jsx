import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import Logo from '../components/Logo';
import GoldButton from '../components/GoldButton';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.33 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.67 14.62 48 24 48z"/>
  </svg>
);

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password || !confirmPassword) { setError('Please fill in all fields.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    if (!agreed) { setError('You must agree to the Terms of Use and Privacy Policy.'); return; }
    setLoading(true);
    try {
      await signup(name, email, password);
      navigate('/dashboard');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') setError('Email already in use.');
      else if (err.code === 'auth/invalid-email') setError('Invalid email.');
      else if (err.code === 'auth/weak-password') setError('Password should be at least 6 characters.');
      else setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'Google sign-in failed.');
    }
  };

  return (
    <div className="auth-wrapper">
      {/* Left Panel */}
      <div className="auth-left">
        <div className="auth-left-inner">
          <Logo size={38} />
          <blockquote className="auth-quote">
            "Where Quant Precision Meets Multi-Asset Alpha."
          </blockquote>
          <span className="auth-attribution">— Cresco Prime</span>
        </div>
        <div className="auth-est">Est. 2026 · Hyderabad, India</div>
      </div>

      {/* Right Panel */}
      <div className="auth-right">
        <div className="auth-card" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 600, fontFamily: '"DM Sans", sans-serif', color: '#F0EDE8', margin: '0 0 4px' }}>Create your account</h1>
          <p style={{ fontSize: '13px', color: '#8A8880', margin: '0 0 20px' }}>Join Cresco Prime and start trading</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth-form" style={{ gap: '0' }}>
            <div className="auth-field">
              <label htmlFor="signup-name" style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#8A8880', marginBottom: '4px', display: 'block' }}>FULL NAME</label>
              <input
                id="signup-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                autoComplete="name"
                style={{ padding: '9px 12px', marginBottom: '10px' }}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="signup-email" style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#8A8880', marginBottom: '4px', display: 'block' }}>EMAIL ADDRESS</label>
              <input
                id="signup-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                style={{ padding: '9px 12px', marginBottom: '10px' }}
              />
            </div>

            <div className="auth-field">
              <label htmlFor="signup-password" style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#8A8880', marginBottom: '4px', display: 'block' }}>PASSWORD</label>
              <div className="auth-input-wrap" style={{ marginBottom: '10px' }}>
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  style={{ padding: '9px 12px' }}
                />
                <button type="button" className="auth-eye" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="signup-confirm" style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#8A8880', marginBottom: '4px', display: 'block' }}>CONFIRM PASSWORD</label>
              <div className="auth-input-wrap" style={{ marginBottom: '10px' }}>
                <input
                  id="signup-confirm"
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  style={{ padding: '9px 12px' }}
                />
                <button type="button" className="auth-eye" onClick={() => setShowConfirm(!showConfirm)} tabIndex={-1}>
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="auth-terms-label" style={{ fontSize: '12px', marginBottom: '0' }}>
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="auth-checkbox" />
              <span className="auth-checkbox-visual" />
              <span>
                I agree to the{' '}
                <Link to="/terms" className="auth-link">Terms of Use</Link>{' '}
                and{' '}
                <Link to="/privacy" className="auth-link">Privacy Policy</Link>
              </span>
            </label>

            <GoldButton type="submit" disabled={loading} style={{ width: '100%', marginTop: '8px' }} innerStyleOverride={{ padding: '11px 0' }}>
              {loading ? <span className="auth-spinner" /> : 'Create Account'}
            </GoldButton>
          </form>

          <div className="auth-divider" style={{ margin: '10px 0' }}>
            <span className="auth-divider-line" />
            <span className="auth-divider-text">or continue with</span>
            <span className="auth-divider-line" />
          </div>

          <button type="button" className="auth-google" onClick={handleGoogleLogin} style={{ padding: '9px 0' }}>
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>

          <p className="auth-footer-text" style={{ marginTop: '10px', fontSize: '13px' }}>
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Sign in</Link>
          </p>
        </div>
      </div>

      <SignupStyles />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SHARED AUTH STYLES (duplicated for code-split)
   ═══════════════════════════════════════════════ */

function SignupStyles() {
  return (
    <style>{`
      .auth-wrapper {
        display: flex;
        height: 100vh;
        overflow: hidden;
      }
      .auth-left {
        flex: 0 0 42%;
        height: 100vh;
        overflow: hidden;
        background: #0D0D0D;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid rgba(201,168,76,0.13);
        position: relative;
      }
      .auth-left-inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px;
      }
      .auth-quote {
        margin: 60px 0 16px;
        font-family: 'Cormorant Garamond', serif;
        font-style: italic;
        font-size: 20px;
        color: #8A8880;
        max-width: 360px;
        line-height: 1.5;
        text-align: center;
        border: none;
        padding: 0;
      }
      .auth-attribution {
        font-size: 13px;
        color: #B8860B;
        font-weight: 600;
      }
      .auth-est {
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        font-size: 12px;
        color: #4A4845;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
      .auth-trust {
        position: absolute;
        bottom: 48px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .auth-trust-item {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #9E9E8F;
        font-size: 12px;
      }
      .auth-dot {
        width: 4px; height: 4px; border-radius: 50%; background: #C9A84C; display: inline-block;
      }
      @media (max-width: 768px) {
        .auth-left { display: none; }
      }
      .auth-right {
        flex: 1;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background: #0A0A0A;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px 40px;
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
      .auth-right::-webkit-scrollbar {
        display: none;
      }
      .auth-card {
        width: 100%;
        max-width: 420px;
        padding: 0;
      }
      .auth-heading {
        font-family: 'DM Sans', sans-serif;
        font-size: 22px;
        color: #F0EDE8;
        font-weight: 600;
        margin: 0 0 4px;
      }
      .auth-sub {
        font-size: 13px;
        color: #8A8880;
        margin: 0 0 24px;
      }
      .auth-error {
        background: rgba(239,68,68,0.08);
        border: 1px solid rgba(239,68,68,0.2);
        color: #EF4444;
        font-size: 13px;
        padding: 10px 14px;
        border-radius: 4px;
        margin-bottom: 20px;
      }
      .auth-form {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .auth-field label {
        display: block;
        font-size: 10px;
        letter-spacing: 0.12em;
        color: #8A8880;
        margin-bottom: 4px;
        font-weight: 500;
      }
      .auth-field input,
      .auth-input-wrap input {
        width: 100%;
        background: #141414;
        border: 1px solid #2A2A2A;
        color: #F5F5F0;
        padding: 10px 14px;
        border-radius: 6px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.2s;
        box-sizing: border-box;
      }
      .auth-field input:focus,
      .auth-input-wrap input:focus {
        border-color: #C9A84C;
      }
      .auth-field input::placeholder,
      .auth-input-wrap input::placeholder {
        color: #5A5A50;
      }
      .auth-input-wrap {
        position: relative;
      }
      .auth-input-wrap input {
        padding-right: 44px;
      }
      .auth-eye {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        color: #5A5A50;
        padding: 0;
        display: flex;
        transition: color 0.2s;
      }
      .auth-eye:hover { color: #C9A84C; }
      .auth-submit {
        width: 100%;
        background: #C9A84C;
        color: #0A0A0A;
        font-weight: 600;
        font-size: 14px;
        padding: 11px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        margin-top: 12px;
      }
      .auth-submit:hover:not(:disabled) { background: #E8C97A; }
      .auth-submit:disabled { opacity: 0.7; cursor: not-allowed; }
      .auth-spinner {
        width: 20px; height: 20px;
        border: 2px solid rgba(10,10,10,0.3);
        border-top-color: #0A0A0A;
        border-radius: 50%;
        animation: authSpin 0.6s linear infinite;
      }
      @keyframes authSpin { to { transform: rotate(360deg); } }
      .auth-divider {
        display: flex;
        align-items: center;
        gap: 12px;
        margin: 12px 0;
      }
      .auth-divider-line {
        flex: 1;
        height: 1px;
        background: #1E1E1E;
      }
      .auth-divider-text {
        font-size: 12px;
        color: #5A5A50;
        white-space: nowrap;
      }
      .auth-google {
        width: 100%;
        background: #141414;
        border: 1px solid #2A2A2A;
        color: #F5F5F0;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 14px;
        transition: border-color 0.2s;
      }
      .auth-google:hover { border-color: #3A3A3A; }
      .auth-footer-text {
        text-align: center;
        font-size: 13px;
        color: #9E9E8F;
        margin-top: 12px;
      }
      .auth-link {
        color: #C9A84C;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s;
      }
      .auth-link:hover { color: #E8C97A; }
      .auth-checkbox {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
      .auth-checkbox-visual {
        width: 16px;
        height: 16px;
        border-radius: 3px;
        border: 1px solid #2A2A2A;
        background: #141414;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: all 0.2s;
      }
      .auth-checkbox:checked + .auth-checkbox-visual {
        background: #C9A84C;
        border-color: #C9A84C;
      }
      .auth-checkbox:checked + .auth-checkbox-visual::after {
        content: '';
        display: block;
        width: 5px;
        height: 8px;
        border: solid #0A0A0A;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -2px;
      }
      .auth-terms-label {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        cursor: pointer;
        font-size: 12px;
        color: #9E9E8F;
        line-height: 1.5;
        position: relative;
        margin-bottom: 0;
      }
      .auth-terms-label .auth-checkbox-visual {
        margin-top: 2px;
      }
    `}</style>
  );
}
