'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/como-ahorrar-luz', label: 'Cómo ahorrar' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-gradient"></div>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">Enertum</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/sube-tu-factura" className="btn-cta">
              <span>Sube tu factura</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">Enertum</span>
            </div>
            <button 
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sube-tu-factura"
              className="btn-cta-mobile"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sube tu factura
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(0, 168, 89, 0.1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .header-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            var(--primary-color) 20%, 
            var(--primary-light) 50%, 
            var(--primary-color) 80%, 
            transparent 100%
          );
          opacity: 0.6;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.99);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border-bottom-color: rgba(0, 168, 89, 0.15);
        }

        .header.scrolled .header-gradient {
          opacity: 1;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          transition: padding 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .header.scrolled .nav {
          padding: 1rem 0;
        }

        .logo {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .logo-icon {
          font-size: 1.8rem;
          filter: drop-shadow(0 0 8px rgba(0, 168, 89, 0.4));
          animation: pulse 2.5s ease-in-out infinite;
          display: inline-block;
        }

        .logo-text {
          font-size: 1.75rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }

        .logo:hover {
          transform: translateY(-2px);
        }

        .logo:hover .logo-icon {
          filter: drop-shadow(0 0 12px rgba(0, 168, 89, 0.6));
          transform: scale(1.1);
        }

        .logo:hover .logo-text {
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.65rem 1.25rem;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          background: transparent;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 2px;
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
          background: var(--primary-lighter);
          transform: translateY(-2px);
        }

        .nav-link.active {
          color: var(--primary-color);
          background: var(--primary-lighter);
          font-weight: 700;
        }

        .nav-link.active::before {
          opacity: 1;
        }

        .btn-cta {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white) !important;
          padding: 0.75rem 1.75rem !important;
          border-radius: 10px !important;
          box-shadow: 0 4px 15px rgba(0, 168, 89, 0.25);
          margin-left: 1rem;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          border: none;
        }

        .btn-cta::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-cta:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(0, 168, 89, 0.4);
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
        }

        .btn-cta span {
          position: relative;
          z-index: 1;
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        .mobile-menu-btn span {
          width: 26px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .mobile-menu-btn.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
          background: var(--text-dark);
        }

        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }

        .mobile-menu-btn.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
          background: var(--text-dark);
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: 999;
          overflow: hidden;
        }

        .mobile-menu-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .mobile-menu.open .mobile-menu-backdrop {
          opacity: 1;
        }

        .mobile-menu-content {
          position: absolute;
          right: 0;
          top: 0;
          width: 85%;
          max-width: 400px;
          height: 100%;
          background: var(--white);
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .mobile-menu.open .mobile-menu-content {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-menu-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-dark);
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-close:hover {
          background: var(--primary-lighter);
          color: var(--primary-color);
        }

        .mobile-menu-links {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 1.1rem;
          padding: 1rem 1.25rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          display: block;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          background: var(--primary-lighter);
          color: var(--primary-color);
          transform: translateX(5px);
        }

        .btn-cta-mobile {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white) !important;
          text-align: center;
          padding: 1.25rem !important;
          border-radius: 12px !important;
          margin-top: 1rem;
          box-shadow: var(--shadow-md);
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
        }

        .btn-cta-mobile:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-lg);
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
        }

        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .mobile-menu {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .logo-text {
            font-size: 1.5rem;
          }

          .logo-icon {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </header>
  )
}
