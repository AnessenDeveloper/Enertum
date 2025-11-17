import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1>Política de Privacidad</h1>
              <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <section>
                <h2>1. Responsable del tratamiento</h2>
                <p>
                  Enertum es el responsable del tratamiento de los datos personales que nos proporciones.
                </p>
              </section>

              <section>
                <h2>2. Datos que recopilamos</h2>
                <p>Recopilamos los siguientes datos personales:</p>
                <ul>
                  <li>Nombre y apellidos</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información sobre tu factura de la luz</li>
                  <li>Tipo de cliente (particular o empresa)</li>
                  <li>Comercializadora actual</li>
                </ul>
              </section>

              <section>
                <h2>3. Finalidad del tratamiento</h2>
                <p>Utilizamos tus datos personales para:</p>
                <ul>
                  <li>Analizar tu factura de la luz</li>
                  <li>Comparar ofertas de diferentes comercializadoras</li>
                  <li>Contactarte con ofertas personalizadas</li>
                  <li>Gestionar el proceso de cambio de comercializadora si decides proceder</li>
                  <li>Responder a tus consultas y solicitudes</li>
                </ul>
              </section>

              <section>
                <h2>4. Base legal</h2>
                <p>
                  El tratamiento de tus datos se basa en tu consentimiento explícito al aceptar esta política de privacidad.
                </p>
              </section>

              <section>
                <h2>5. Conservación de datos</h2>
                <p>
                  Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas,
                  y en cualquier caso, durante los plazos legalmente establecidos.
                </p>
              </section>

              <section>
                <h2>6. Derechos del interesado</h2>
                <p>Tienes derecho a:</p>
                <ul>
                  <li>Acceder a tus datos personales</li>
                  <li>Rectificar datos inexactos</li>
                  <li>Solicitar la supresión de tus datos</li>
                  <li>Oponerte al tratamiento</li>
                  <li>Solicitar la limitación del tratamiento</li>
                  <li>Portabilidad de los datos</li>
                </ul>
                <p>
                  Para ejercer estos derechos, puedes contactarnos en info@enertum.es
                </p>
              </section>

              <section>
                <h2>7. Seguridad</h2>
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales
                  contra el acceso no autorizado, la pérdida o la destrucción.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          background: var(--white);
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .legal-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .last-updated {
          color: var(--text-light);
          margin-bottom: 2rem;
          font-style: italic;
        }
        .legal-content section {
          margin-bottom: 2.5rem;
        }
        .legal-content h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }
        .legal-content p {
          line-height: 1.8;
          color: var(--text-dark);
          margin-bottom: 1rem;
        }
        .legal-content ul {
          margin-left: 2rem;
          margin-bottom: 1rem;
        }
        .legal-content li {
          line-height: 1.8;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
        }
        @media (max-width: 768px) {
          .legal-content {
            padding: 1.5rem;
          }
          .legal-content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}

