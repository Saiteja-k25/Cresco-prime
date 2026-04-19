import { Link } from 'react-router-dom'
import BullLogo from '../assets/BullLogo'

export default function Logo({ size = 36 }) {
  return (
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      <BullLogo size={size} />
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 600,
        fontSize: '18px',
        letterSpacing: '0.18em',
        color: '#D4AF6A',
        textTransform: 'uppercase'
      }}>
        Cresco Prime
      </span>
    </Link>
  )
}
