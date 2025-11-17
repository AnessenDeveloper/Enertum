import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PoliticaCookies() {
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1>Política de Cookies</h1>
              <p className="last-updated">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
              
              <section>
                <h2>1. ¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
                  Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.
                </p>
              </section>

              <section>
                <h2>2. Tipos de cookies que utilizamos</h2>
                <h3>Cookies técnicas (necesarias)</h3>
                <p>
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                  Permiten funciones básicas como la navegación y el acceso a áreas seguras.
                </p>
                <h3>Cookies de análisis</h3>
                <p>
                  Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web,
                  recopilando información de forma anónima.
                </p>
              </section>

              <section>
                <h2>3. Gestión de cookies</h2>
                <p>
                  Puedes gestionar o eliminar las cookies según tus preferencias. Puedes configurar tu navegador
                  para rechazar cookies o para que te avise cuando un sitio web intente colocar una cookie.
                </p>
                <p>
                  Ten en cuenta que si desactivas las cookies, algunas funcionalidades del sitio web pueden no estar disponibles.
                </p>
              </section>

              <section>
                <h2>4. Cookies de terceros</h2>
                <p>
                  Algunas cookies pueden ser establecidas por servicios de terceros que aparecen en nuestras páginas.
                  No tenemos control sobre estas cookies.
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
        .legal-content h3 {
          font-size: 1.2rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }
        .legal-content p {
          line-height: 1.8;
          color: var(--text-dark);
          margin-bottom: 1rem;
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

