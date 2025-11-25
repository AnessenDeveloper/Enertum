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
    { href: '/sube-tu-factura', label: 'Sube tu factura' },
    { href: '/como-ahorrar-luz', label: 'Cómo ahorrar' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="logo-text">⚡ Enertum</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/sube-tu-factura" className="btn-cta">
              Sube tu factura
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
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
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

      <style jsx>{`
        .header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 2px solid transparent;
        }
        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-md);
          border-bottom-color: var(--primary-lighter);
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          transition: padding 0.3s ease;
        }
        .header.scrolled .nav {
          padding: 1rem 0;
        }
        .logo {
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
        .logo-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-links a::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
        }
        .nav-links a:hover {
          color: var(--primary-color);
          transform: translateY(-2px);
        }
        .nav-links a:hover::before {
          width: 100%;
        }
        .nav-links a.active {
          color: var(--primary-color);
        }
        .nav-links a.active::before {
          width: 100%;
        }
        .btn-cta {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white) !important;
          padding: 0.75rem 1.5rem !important;
          border-radius: 10px !important;
          box-shadow: var(--shadow-sm);
          margin-left: 1rem;
        }
        .btn-cta::before {
          display: none;
        }
        .btn-cta:hover {
          transform: translateY(-3px) !important;
          box-shadow: var(--shadow-lg);
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
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
          width: 28px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        .mobile-menu-btn.open span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }
        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
          transform: translateX(-20px);
        }
        .mobile-menu-btn.open span:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }
        .mobile-menu {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow-y: auto;
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-menu-content {
          padding: 100px 20px 40px;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 500px;
          margin: 0 auto;
        }
        .mobile-menu-content a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 700;
          font-size: 1.5rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          padding-left: 3rem;
        }
        .mobile-menu-content a::before {
          content: '→';
          position: absolute;
          left: 1rem;
          color: var(--primary-color);
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
        .mobile-menu-content a:hover {
          background: var(--primary-lighter);
          color: var(--primary-color);
          transform: translateX(10px);
        }
        .mobile-menu-content a:hover::before {
          transform: translateX(5px);
        }
        .mobile-menu-content a.active {
          color: var(--primary-color);
          background: var(--primary-lighter);
        }
        .btn-cta-mobile {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white) !important;
          text-align: center;
          padding: 1.25rem !important;
          border-radius: 12px !important;
          margin-top: 1rem;
          box-shadow: var(--shadow-md);
        }
        .btn-cta-mobile::before {
          display: none;
        }
        .btn-cta-mobile:hover {
          transform: scale(1.02);
          box-shadow: var(--shadow-lg);
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
          .logo {
            font-size: 1.5rem;
          }
          .mobile-menu-content a {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </header>
  )
}
