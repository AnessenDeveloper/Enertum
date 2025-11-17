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
          background-color: var(--text-dark);
          color: var(--white);
          padding: 60px 0 20px;
          margin-top: 80px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-section h3 {
          color: var(--primary-color);
          margin-bottom: 1rem;
        }
        .footer-section h4 {
          margin-bottom: 1rem;
        }
        .footer-section ul {
          list-style: none;
        }
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        .footer-section a {
          color: var(--white);
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.3s;
        }
        .footer-section a:hover {
          opacity: 1;
        }
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.7;
        }
      `}</style>
    </footer>
  )
}

