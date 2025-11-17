'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1>Aviso Legal</h1>
              <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <section>
                <h2>1. Datos identificativos</h2>
                <p>
                  En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002,
                  de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico,
                  a continuación se reflejan los siguientes datos:
                </p>
                <ul>
                  <li>Denominación social: Enertum</li>
                  <li>Actividad: Asesoramiento energético</li>
                </ul>
              </section>

              <section>
                <h2>2. Objeto</h2>
                <p>
                  El presente aviso legal regula el uso del sitio web www.enertum.es (en adelante, el sitio web),
                  del cual es titular Enertum.
                </p>
              </section>

              <section>
                <h2>3. Condiciones de uso</h2>
                <p>
                  El acceso y uso del sitio web implica la aceptación de las condiciones de uso establecidas.
                  Enertum se reserva el derecho de modificar en cualquier momento las condiciones de uso del sitio web.
                </p>
              </section>

              <section>
                <h2>4. Servicios</h2>
                <p>
                  Enertum ofrece servicios de asesoramiento energético, consistente en el análisis de facturas
                  de suministro eléctrico y la comparación de ofertas de diferentes comercializadoras.
                </p>
              </section>

              <section>
                <h2>5. Propiedad intelectual</h2>
                <p>
                  Todos los contenidos del sitio web, incluyendo textos, gráficos, logotipos, iconos, imágenes,
                  así como el software, son propiedad de Enertum y están protegidos por las leyes de propiedad intelectual.
                </p>
              </section>

              <section>
                <h2>6. Limitación de responsabilidad</h2>
                <p>
                  Enertum no se hace responsable de los daños y perjuicios de toda naturaleza que puedan deberse
                  a la falta de disponibilidad, continuidad, calidad o utilidad de los contenidos del sitio web.
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

