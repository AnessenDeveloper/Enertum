'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-pattern"></div>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">Enertum</span>
            </div>
            <p className="footer-tagline">
              Te bajamos la factura de la luz sin cambiar de rutina. Revisamos tu factura gratis y te decimos cuánto puedes ahorrar.
            </p>
            <div className="footer-cta">
              <Link href="/sube-tu-factura" className="btn-footer-cta">
                Sube tu factura gratis
              </Link>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-column-title">Navegación</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/sube-tu-factura">Sube tu factura</Link>
                </li>
                <li>
                  <Link href="/como-ahorrar-luz">Cómo ahorrar</Link>
                </li>
                <li>
                  <Link href="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/politica-privacidad">Política de privacidad</Link>
                </li>
                <li>
                  <Link href="/politica-cookies">Política de cookies</Link>
                </li>
                <li>
                  <Link href="/aviso-legal">Aviso legal</Link>
                </li>
                <li>
                  <Link href="/rgpd">RGPD</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Contacto</h4>
              <ul className="footer-links">
                <li>
                  <a href="mailto:info@enertum.es">info@enertum.es</a>
                </li>
                <li>
                  <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Enertum. Todos los derechos reservados.
            </p>
            <div className="footer-badge">
              <span className="badge-icon">✓</span>
              <span>100% Gratis</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%);
          color: var(--white);
          padding: 0;
          margin-top: 120px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--primary-color) 50%, transparent 100%);
        }

        .footer-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.03;
          background-image: 
            radial-gradient(circle at 20% 30%, var(--primary-color) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, var(--primary-color) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.2fr 1.8fr;
          gap: 5rem;
          padding: 80px 0 60px;
          position: relative;
          z-index: 1;
        }

        .footer-brand {
          max-width: 400px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          font-size: 2rem;
          filter: drop-shadow(0 0 10px rgba(0, 168, 89, 0.5));
          animation: pulse 2s ease-in-out infinite;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .footer-tagline {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .btn-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 168, 89, 0.3);
          position: relative;
          overflow: hidden;
        }

        .btn-footer-cta::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-footer-cta:hover::before {
          width: 300px;
          height: 300px;
        }

        .btn-footer-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 25px rgba(0, 168, 89, 0.4);
          background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-color) 100%);
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-column-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.75rem;
        }

        .footer-column-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color) 0%, transparent 100%);
          border-radius: 2px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-links li {
          margin: 0;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
          padding-left: 0;
        }

        .footer-links a::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
          color: var(--primary-color);
          font-weight: 600;
        }

        .footer-links a:hover {
          color: var(--primary-color);
          padding-left: 20px;
          transform: translateX(5px);
        }

        .footer-links a:hover::before {
          opacity: 1;
          left: 0;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 0;
          position: relative;
          z-index: 1;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          margin: 0;
        }

        .footer-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 168, 89, 0.1);
          border: 1px solid rgba(0, 168, 89, 0.3);
          border-radius: 20px;
          color: var(--primary-color);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .badge-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--primary-color);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        @media (max-width: 968px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding: 60px 0 40px;
          }

          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .footer-brand {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }

          .footer-logo {
            justify-content: center;
          }

          .footer-brand {
            text-align: center;
          }

          .footer-tagline {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}
