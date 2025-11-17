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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        .logo {
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-links a {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--primary-color);
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  )
}

