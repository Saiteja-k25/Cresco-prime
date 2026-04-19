import React from 'react';
import { Link } from 'react-router-dom';

export default function GoldButton({ children, onClick, href, to, variant = 'primary', style = {}, innerStyleOverride = {}, type, disabled, ...props }) {
  const isPrimary = variant === 'primary'
  
  const outerStyle = {
    display: 'inline-flex',
    borderRadius: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    background: isPrimary
      ? 'linear-gradient(to bottom right, rgba(184,134,11,0.9) 0%, rgba(184,134,11,0) 30%)'
      : 'linear-gradient(to bottom right, rgba(184,134,11,0.4) 0%, rgba(184,134,11,0) 30%)',
    backgroundColor: isPrimary
      ? 'rgba(184,134,11,0.25)'
      : 'rgba(184,134,11,0.08)',
    padding: '2px',
    border: 'none',
    textDecoration: 'none',
    opacity: disabled ? 0.6 : 1,
    ...style
  }
  
  const innerStyle = {
    borderRadius: '10px',
    background: isPrimary ? '#1A1600' : '#0E0E0C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: isPrimary ? '#D4AF6A' : '#B8860B',
    fontWeight: 600,
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    letterSpacing: '0.04em',
    padding: '13px 28px',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    width: '100%',
    ...innerStyleOverride
  }

  const hoverHandlers = disabled ? {} : {
    onMouseEnter: (e) => {
      e.currentTarget.parentElement.style.backgroundColor = isPrimary
        ? 'rgba(184,134,11,0.6)'
        : 'rgba(184,134,11,0.2)'
      e.currentTarget.parentElement.style.boxShadow = `0 0 20px rgba(184,134,11,${isPrimary ? '0.35' : '0.2'})`
    },
    onMouseLeave: (e) => {
      e.currentTarget.parentElement.style.backgroundColor = isPrimary
        ? 'rgba(184,134,11,0.25)'
        : 'rgba(184,134,11,0.08)'
      e.currentTarget.parentElement.style.boxShadow = 'none'
    }
  }

  // Determine wrapper element
  let WrapperTag = type === 'submit' ? 'button' : 'div'
  let wrapperProps = { style: outerStyle, type, disabled }
  
  if (href) { WrapperTag = 'a'; wrapperProps.href = href; wrapperProps.target = '_blank'; wrapperProps.rel = 'noopener noreferrer' }
  if (onClick) { wrapperProps.onClick = onClick; if (WrapperTag === 'div') wrapperProps.role = 'button' }

  if (to) {
    return (
      <Link to={to} style={outerStyle} onClick={onClick} {...props}>
        <div style={innerStyle} {...hoverHandlers}>{children}</div>
      </Link>
    )
  }

  return (
    <WrapperTag {...wrapperProps} {...props}>
      <div style={innerStyle} {...hoverHandlers}>{children}</div>
    </WrapperTag>
  )
}

export function GhostButton({ children, onClick, to, href, style = {}, innerStyleOverride = {}, type, disabled, ...props }) {
  const outerStyle = {
    display: 'inline-flex',
    borderRadius: '12px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: '2px',
    background: 'linear-gradient(to bottom right, rgba(184,134,11,0.3) 0%, rgba(184,134,11,0) 40%)',
    backgroundColor: 'rgba(184,134,11,0.05)',
    transition: 'all 0.3s ease',
    border: 'none',
    textDecoration: 'none',
    opacity: disabled ? 0.6 : 1,
    ...style
  }

  const hoverHandlers = disabled ? {} : {
    onMouseEnter: e => {
      e.currentTarget.parentElement.style.backgroundColor = 'rgba(184,134,11,0.15)'
      e.currentTarget.parentElement.style.boxShadow = '0 0 16px rgba(184,134,11,0.2)'
    },
    onMouseLeave: e => {
      e.currentTarget.parentElement.style.backgroundColor = 'rgba(184,134,11,0.05)'
      e.currentTarget.parentElement.style.boxShadow = 'none'
    }
  }

  const innerStyle = {
    borderRadius: '10px',
    background: 'transparent',
    padding: '12px 28px',
    color: '#B8860B',
    fontWeight: 500,
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    letterSpacing: '0.04em',
    border: '1px solid rgba(184,134,11,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    width: '100%',
    ...innerStyleOverride
  }

  let WrapperTag = type === 'submit' ? 'button' : 'div'
  let wrapperProps = { style: outerStyle, type, disabled }
  
  if (href) { WrapperTag = 'a'; wrapperProps.href = href; wrapperProps.target = '_blank'; wrapperProps.rel = 'noopener noreferrer' }
  if (onClick) { wrapperProps.onClick = onClick; if (WrapperTag === 'div') wrapperProps.role = 'button' }

  if (to) {
    return (
      <Link to={to} style={outerStyle} onClick={onClick} {...props}>
        <div style={innerStyle} {...hoverHandlers}>{children}</div>
      </Link>
    )
  }

  return (
    <WrapperTag {...wrapperProps} {...props}>
      <div style={innerStyle} {...hoverHandlers}>{children}</div>
    </WrapperTag>
  )
}
