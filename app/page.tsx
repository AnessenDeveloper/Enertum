'use client'

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
          padding: 140px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: pulse 8s ease-in-out infinite;
        }
        .hero-content {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out;
        }
        .logo-large {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: var(--white);
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          letter-spacing: -1px;
          animation: fadeIn 1s ease-out 0.2s both;
        }
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          font-weight: 400;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }
        .bg-light {
          background: linear-gradient(to bottom, var(--bg-light) 0%, var(--white) 100%);
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }
        .step {
          text-align: center;
          padding: 2.5rem;
          background: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .step::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 168, 89, 0.1), transparent);
          transition: left 0.5s;
        }
        .step:hover::before {
          left: 100%;
        }
        .step:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }
        .step-number {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0 auto 2rem;
          box-shadow: var(--shadow-md);
          transition: all 0.3s ease;
        }
        .step:hover .step-number {
          transform: scale(1.1) rotate(5deg);
          box-shadow: var(--shadow-lg);
        }
        .step h3 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-weight: 700;
        }
        .step p {
          color: var(--text-light);
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }
        .feature {
          text-align: center;
          padding: 3rem 2rem;
          background: var(--white);
          border-radius: 20px;
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
        }
        .feature:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-lighter);
          background: linear-gradient(to bottom, var(--white) 0%, var(--primary-lighter) 100%);
        }
        .feature-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .feature:hover .feature-icon {
          transform: scale(1.2) rotate(5deg);
        }
        .feature h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-weight: 700;
        }
        .feature p {
          color: var(--text-light);
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .results {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 4rem;
        }
        .result-card {
          background: var(--white);
          padding: 3rem 2.5rem;
          border-radius: 20px;
          box-shadow: var(--shadow-md);
          text-align: center;
          border-top: 5px solid var(--primary-color);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .result-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--primary-lighter) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .result-card:hover::before {
          opacity: 1;
        }
        .result-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: var(--shadow-lg);
        }
        .result-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .result-card:hover .result-icon {
          transform: scale(1.2);
        }
        .result-card h3 {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
          font-weight: 700;
        }
        .result-savings {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
          font-weight: 600;
        }
        .result-savings strong {
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .result-detail {
          color: var(--text-light);
          font-size: 1rem;
        }
        .faq {
          max-width: 900px;
          margin: 0 auto;
          margin-top: 4rem;
        }
        .faq-item {
          background: var(--white);
          padding: 2.5rem;
          margin-bottom: 1.5rem;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }
        .faq-item:hover {
          box-shadow: var(--shadow-md);
          border-left-color: var(--primary-color);
          transform: translateX(5px);
        }
        .faq-item h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
          font-weight: 700;
        }
        .faq-item p {
          color: var(--text-light);
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .cta-section {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: pulse 6s ease-in-out infinite;
        }
        .cta-section .container {
          position: relative;
          z-index: 1;
        }
        .cta-section .section-title,
        .cta-section .section-subtitle {
          color: var(--white);
        }
        .section-title {
          animation: fadeInUp 0.6s ease-out;
        }
        .section-subtitle {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }
        @media (max-width: 768px) {
          .hero {
            padding: 100px 0;
          }
          .logo-large {
            font-size: 2.5rem;
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-subtitle {
            font-size: 1.2rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }
          .steps, .features, .results {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}

