'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function SubeTuFactura() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    tipoCliente: 'particular',
    comercializadora: '',
    rgpd: false
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const comercializadoras = [
    'Endesa',
    'Iberdrola',
    'Naturgy',
    'EDP',
    'Repsol',
    'TotalEnergies',
    'Holaluz',
    'Otra'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.rgpd) {
      alert('Debes aceptar el tratamiento de datos para continuar')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('nombre', formData.nombre)
      formDataToSend.append('apellidos', formData.apellidos)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('telefono', formData.telefono)
      formDataToSend.append('tipoCliente', formData.tipoCliente)
      formDataToSend.append('comercializadora', formData.comercializadora)
      formDataToSend.append('rgpd', formData.rgpd.toString())
      
      if (file) {
        formDataToSend.append('factura', file)
      }

      const response = await fetch('/api/submit-factura', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar la factura')
      }
      
      setSubmitStatus('success')
      setFormData({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        tipoCliente: 'particular',
        comercializadora: '',
        rgpd: false
      })
      setFile(null)
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
            <div className="form-container">
              <h1 className="page-title">Sube tu factura</h1>
              <p className="page-subtitle">
                Completa el formulario y sube una foto o PDF de tu última factura de la luz.
                La revisión es completamente gratuita y sin compromiso.
              </p>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <h3>¡Factura recibida!</h3>
                  <p>Hemos recibido tu factura correctamente. Te contactaremos en las próximas 24-48 horas con el análisis y las mejores ofertas disponibles.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <h3>Error al enviar</h3>
                  <p>Hubo un problema al enviar tu factura. Por favor, inténtalo de nuevo o contáctanos por WhatsApp.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="factura-form">
                <div className="form-row">
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
                    <label htmlFor="apellidos">Apellidos *</label>
                    <input
                      type="text"
                      id="apellidos"
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleChange}
                      required
                    />
                  </div>
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
                  <label htmlFor="telefono">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="Ej: 612345678"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="tipoCliente">Tipo de cliente *</label>
                    <select
                      id="tipoCliente"
                      name="tipoCliente"
                      value={formData.tipoCliente}
                      onChange={handleChange}
                      required
                    >
                      <option value="particular">Particular</option>
                      <option value="empresa">Empresa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comercializadora">Comercializadora actual *</label>
                    <select
                      id="comercializadora"
                      name="comercializadora"
                      value={formData.comercializadora}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      {comercializadoras.map(com => (
                        <option key={com} value={com}>{com}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="factura">Factura (Foto o PDF) *</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="factura"
                      name="factura"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      required
                    />
                    {file && (
                      <div className="file-info">
                        <span>✓ {file.name}</span>
                        <button
                          type="button"
                          onClick={() => setFile(null)}
                          className="remove-file"
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                  <small>Formatos aceptados: JPG, PNG, PDF (máx. 10MB)</small>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rgpd"
                      checked={formData.rgpd}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      Acepto que Enertum trate mis datos para analizar mi factura y contactarme con una oferta. *
                    </span>
                  </label>
                  <Link href="/politica-privacidad" className="privacy-link">
                    Ver política de privacidad
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar factura'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .form-container {
          max-width: 700px;
          margin: 0 auto;
        }
        .page-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-align: center;
          color: var(--text-dark);
        }
        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-light);
          text-align: center;
          margin-bottom: 3rem;
          line-height: 1.8;
        }
        .factura-form {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
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
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 2px solid var(--border-color);
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: var(--primary-color);
        }
        .file-upload {
          margin-top: 0.5rem;
        }
        .file-upload input[type="file"] {
          padding: 8px;
          border: 2px dashed var(--border-color);
          border-radius: 8px;
          width: 100%;
          cursor: pointer;
        }
        .file-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
          padding: 0.75rem;
          background: var(--bg-light);
          border-radius: 8px;
        }
        .remove-file {
          background: var(--secondary-color);
          color: var(--white);
          border: none;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
        }
        .form-group small {
          display: block;
          margin-top: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }
        .checkbox-group {
          background: var(--bg-light);
          padding: 1.5rem;
          border-radius: 8px;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          cursor: pointer;
        }
        .checkbox-label input[type="checkbox"] {
          width: auto;
          margin-top: 4px;
          cursor: pointer;
        }
        .privacy-link {
          display: block;
          margin-top: 0.5rem;
          color: var(--primary-color);
          text-decoration: none;
          font-size: 0.9rem;
        }
        .privacy-link:hover {
          text-decoration: underline;
        }
        .btn-submit {
          width: 100%;
          margin-top: 1rem;
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
          margin-bottom: 2rem;
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
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .page-title {
            font-size: 2rem;
          }
          .factura-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

