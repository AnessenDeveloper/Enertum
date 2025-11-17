'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <span className="logo-text">Enertum</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Inicio</Link>
            <Link href="/sube-tu-factura">Sube tu factura</Link>
            <Link href="/como-ahorrar-luz">Cómo ahorrar</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </nav>
      </div>
      <style jsx>{`
        .header {
          background: var(--white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s ease;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 0;
        }
        .logo {
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: transform 0.3s ease;
          letter-spacing: -0.5px;
        }
        .logo:hover {
          transform: scale(1.05);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          transition: width 0.3s ease;
          border-radius: 2px;
        }
        .nav-links a:hover {
          color: var(--primary-color);
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            font-size: 0.9rem;
          }
          .logo {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </header>
  )
}

