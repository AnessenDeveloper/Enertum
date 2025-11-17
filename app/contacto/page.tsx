'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar el mensaje')
      }
      
      setSubmitStatus('success')
      setFormData({ nombre: '', email: '', mensaje: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="contact-container">
              <div className="contact-header">
                <h1 className="page-title">Contacto</h1>
                <p className="page-subtitle">
                  ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Contáctanos por el método que prefieras.
                </p>
              </div>

              <div className="contact-content">
                <div className="contact-info">
                  <div className="info-card">
                    <div className="info-icon">💬</div>
                    <h3>WhatsApp</h3>
                    <p>Respuesta rápida en minutos</p>
                    <a 
                      href="https://wa.me/34600000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📧</div>
                    <h3>Email</h3>
                    <p>info@enertum.es</p>
                    <a 
                      href="mailto:info@enertum.es"
                      className="btn btn-secondary"
                    >
                      Enviar email
                    </a>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">🕐</div>
                    <h3>Horario</h3>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 10:00 - 14:00</p>
                  </div>
                </div>

                <div className="contact-form-wrapper">
                  <h2>Envíanos un mensaje</h2>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success">
                      <h3>¡Mensaje enviado!</h3>
                      <p>Te responderemos lo antes posible.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="alert alert-error">
                      <h3>Error al enviar</h3>
                      <p>Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje">Mensaje *</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }
        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          line-height: 1.8;
        }
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-card {
          background: var(--white);
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .info-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .info-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }
        .info-card p {
          color: var(--text-light);
          margin-bottom: 1rem;
        }
        .contact-form-wrapper {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .contact-form-wrapper h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-dark);
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .btn-submit {
          width: 100%;
          padding: 16px;
          font-size: 1.1rem;
        }
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .alert {
          padding: 1.5rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
        }
        .alert-success {
          background: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
        }
        .alert-error {
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
        }
        .alert h3 {
          margin-bottom: 0.5rem;
        }
        @media (max-width: 968px) {
          .contact-content {
            grid-template-columns: 1fr;
          }
          .page-title {
            font-size: 2rem;
          }
          .contact-form-wrapper {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

