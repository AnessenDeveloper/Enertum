'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Enertum</h3>
            <p>Te bajamos la factura de la luz sin cambiar de rutina.</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/politica-privacidad">Política de privacidad</Link></li>
              <li><Link href="/politica-cookies">Política de cookies</Link></li>
              <li><Link href="/aviso-legal">Aviso legal</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>RGPD</h4>
            <p>Tratamos tus datos según el Reglamento General de Protección de Datos.</p>
            <Link href="/rgpd">Más información</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Enertum. Todos los derechos reservados.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          color: var(--white);
          padding: 80px 0 30px;
          margin-top: 100px;
          position: relative;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-color) 0%, var(--primary-dark) 100%);
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-section h3 {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .footer-section h4 {
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .footer-section p {
          line-height: 1.8;
          opacity: 0.9;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section ul li {
          margin-bottom: 0.75rem;
        }
        .footer-section a {
          color: var(--white);
          text-decoration: none;
          opacity: 0.8;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }
        .footer-section a::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
          color: var(--primary-color);
        }
        .footer-section a:hover {
          opacity: 1;
          color: var(--primary-color);
          transform: translateX(5px);
        }
        .footer-section a:hover::before {
          opacity: 1;
          left: -15px;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.7;
          font-size: 0.95rem;
        }
      `}</style>
    </footer>
  )
}

