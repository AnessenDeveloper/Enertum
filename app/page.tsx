import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="logo-large">Enertum</div>
              <h1 className="hero-title">
                Te bajamos la factura de la luz sin cambiar de rutina
              </h1>
              <p className="hero-subtitle">
                Revisamos tu factura gratis y te decimos cuánto puedes ahorrar.
              </p>
              <div className="hero-buttons">
                <Link href="/sube-tu-factura" className="btn btn-primary btn-large">
                  Sube tu factura
                </Link>
                <a 
                  href="https://wa.me/34600000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-large"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Qué hacemos</h2>
            <p className="section-subtitle">
              El proceso es muy simple. En 3 pasos te ayudamos a ahorrar.
            </p>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Nos envías tu factura</h3>
                <p>Sube una foto o PDF de tu última factura de la luz. Es gratis y sin compromiso.</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>La comparamos con varias comercializadoras</h3>
                <p>Analizamos tu consumo y comparamos con las mejores ofertas del mercado.</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Si ahorras, hacemos el cambio por ti</h3>
                <p>Si encontramos ahorro, gestionamos todo el cambio. Tú solo firmas si te compensa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué Enertum */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Por qué Enertum</h2>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">🔍</div>
                <h3>Transparencia total</h3>
                <p>No somos comercializadora, somos asesores independientes. Nuestro objetivo es que ahorres, no vendértete algo.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🤝</div>
                <h3>Trabajamos con varias compañías</h3>
                <p>No estamos atados a una sola comercializadora. Buscamos la mejor opción para ti entre todas las disponibles.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🔓</div>
                <h3>Sin permanencia</h3>
                <p>Si aplica, te ofrecemos tarifas sin permanencia. Libertad total para cambiar cuando quieras.</p>
              </div>
              <div className="feature">
                <div className="feature-icon">✍️</div>
                <h3>Tú solo firmas si te compensa</h3>
                <p>No hay compromiso. Solo procedemos si realmente vas a ahorrar dinero mes a mes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">Resultados reales</h2>
            <p className="section-subtitle">
              Estos son algunos de los ahorros que hemos conseguido para nuestros clientes.
            </p>
            <div className="results">
              <div className="result-card">
                <div className="result-icon">👨‍👩‍👧‍👦</div>
                <h3>Familia Pérez</h3>
                <p className="result-savings">Ahorran <strong>32€/mes</strong></p>
                <p className="result-detail">Particular - Vivienda en Madrid</p>
              </div>
              <div className="result-card">
                <div className="result-icon">🍺</div>
                <h3>Bar La Esquina</h3>
                <p className="result-savings">Ahorran <strong>148€/mes</strong></p>
                <p className="result-detail">Empresa - Local comercial en Barcelona</p>
              </div>
              <div className="result-card">
                <div className="result-icon">🏢</div>
                <h3>Oficinas García</h3>
                <p className="result-savings">Ahorran <strong>89€/mes</strong></p>
                <p className="result-detail">Empresa - Oficinas en Valencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-light">
          <div className="container">
            <h2 className="section-title">Preguntas frecuentes</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>¿Tiene coste?</h3>
                <p>No, nuestro servicio es completamente gratuito. Revisamos tu factura sin coste alguno y solo si encontramos ahorro y decides cambiar, gestionamos todo el proceso.</p>
              </div>
              <div className="faq-item">
                <h3>¿Tengo permanencia?</h3>
                <p>Depende de la oferta que encontremos. Siempre priorizamos tarifas sin permanencia cuando están disponibles. Te informamos claramente antes de cualquier cambio.</p>
              </div>
              <div className="faq-item">
                <h3>¿Qué pasa si no ahorro?</h3>
                <p>Si no encontramos ninguna oferta que te permita ahorrar, te lo comunicamos claramente. No hacemos ningún cambio y no hay ningún compromiso por tu parte.</p>
              </div>
              <div className="faq-item">
                <h3>¿Cuánto tardáis?</h3>
                <p>Normalmente revisamos tu factura en 24-48 horas. Si encontramos ahorro, el proceso de cambio puede tardar entre 15-20 días hábiles, dependiendo de la comercializadora.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section cta-section">
          <div className="container">
            <h2 className="section-title">¿Listo para ahorrar?</h2>
            <p className="section-subtitle">
              Sube tu factura ahora y descubre cuánto puedes ahorrar. Es gratis y sin compromiso.
            </p>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/sube-tu-factura" className="btn btn-primary btn-large">
                Sube tu factura gratis
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          padding: 120px 0;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .logo-large {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          color: var(--white);
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-large {
          padding: 18px 40px;
          font-size: 1.1rem;
        }
        .bg-light {
          background-color: var(--bg-light);
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .step {
          text-align: center;
          padding: 2rem;
        }
        .step-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--primary-color);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
        }
        .step h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .step p {
          color: var(--text-light);
          line-height: 1.8;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature {
          text-align: center;
          padding: 2rem;
          background: var(--white);
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .feature h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .feature p {
          color: var(--text-light);
          line-height: 1.8;
        }
        .results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .result-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          border-top: 4px solid var(--primary-color);
        }
        .result-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .result-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .result-savings {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
        }
        .result-savings strong {
          font-size: 1.8rem;
          font-weight: 700;
        }
        .result-detail {
          color: var(--text-light);
          font-size: 0.9rem;
        }
        .faq {
          max-width: 800px;
          margin: 0 auto;
          margin-top: 3rem;
        }
        .faq-item {
          background: var(--white);
          padding: 2rem;
          margin-bottom: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .faq-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        .faq-item p {
          color: var(--text-light);
          line-height: 1.8;
        }
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
        }
        .cta-section .section-title,
        .cta-section .section-subtitle {
          color: var(--white);
        }
        @media (max-width: 768px) {
          .hero {
            padding: 80px 0;
          }
          .logo-large {
            font-size: 2rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-large {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

