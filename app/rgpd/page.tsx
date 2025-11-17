'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RGPD() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1>Información sobre el RGPD</h1>
              <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <section>
                <h2>Reglamento General de Protección de Datos (RGPD)</h2>
                <p>
                  En Enertum cumplimos estrictamente con el Reglamento (UE) 2016/679 del Parlamento Europeo
                  y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas
                  en lo que respecta al tratamiento de datos personales.
                </p>
              </section>

              <section>
                <h2>Principios del tratamiento</h2>
                <p>Tratamos tus datos personales conforme a los siguientes principios:</p>
                <ul>
                  <li><strong>Licitud:</strong> Solo tratamos datos cuando tenemos una base legal para hacerlo</li>
                  <li><strong>Transparencia:</strong> Te informamos claramente sobre cómo usamos tus datos</li>
                  <li><strong>Limitación de la finalidad:</strong> Solo usamos tus datos para los fines especificados</li>
                  <li><strong>Minimización:</strong> Solo recopilamos los datos estrictamente necesarios</li>
                  <li><strong>Exactitud:</strong> Mantenemos tus datos actualizados</li>
                  <li><strong>Limitación del plazo de conservación:</strong> No conservamos tus datos más tiempo del necesario</li>
                  <li><strong>Integridad y confidencialidad:</strong> Protegemos tus datos con medidas de seguridad adecuadas</li>
                </ul>
              </section>

              <section>
                <h2>Tus derechos</h2>
                <p>Bajo el RGPD, tienes los siguientes derechos:</p>
                <ul>
                  <li><strong>Derecho de acceso:</strong> Puedes solicitar información sobre tus datos personales</li>
                  <li><strong>Derecho de rectificación:</strong> Puedes corregir datos inexactos o incompletos</li>
                  <li><strong>Derecho de supresión:</strong> Puedes solicitar que eliminemos tus datos</li>
                  <li><strong>Derecho a la limitación:</strong> Puedes solicitar que limitemos el tratamiento</li>
                  <li><strong>Derecho a la portabilidad:</strong> Puedes solicitar que te entreguemos tus datos</li>
                  <li><strong>Derecho de oposición:</strong> Puedes oponerte al tratamiento de tus datos</li>
                </ul>
              </section>

              <section>
                <h2>Ejercicio de derechos</h2>
                <p>
                  Para ejercer cualquiera de estos derechos, puedes contactarnos en:
                </p>
                <ul>
                  <li>Email: info@enertum.es</li>
                  <li>Dirección postal: [Dirección completa]</li>
                </ul>
                <p>
                  Responderemos a tu solicitud en un plazo máximo de un mes.
                </p>
              </section>

              <section>
                <h2>Autoridad de control</h2>
                <p>
                  Si consideras que el tratamiento de tus datos personales vulnera el RGPD,
                  tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
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
        .legal-content strong {
          color: var(--primary-color);
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

