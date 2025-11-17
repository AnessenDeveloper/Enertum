import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to,
      subject,
      html,
    })

    if (error) {
      console.error('Error sending email:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function sendFacturaNotification(formData: {
  nombre: string
  apellidos: string
  email: string
  telefono: string
  tipoCliente: string
  comercializadora: string
  facturaUrl?: string
}) {
  const adminEmail = process.env.TO_EMAIL || 'anessendev@gmail.com'

  const html = `
    <h2>Nueva factura recibida</h2>
    <p><strong>Nombre:</strong> ${formData.nombre} ${formData.apellidos}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Teléfono:</strong> ${formData.telefono}</p>
    <p><strong>Tipo de cliente:</strong> ${formData.tipoCliente}</p>
    <p><strong>Comercializadora actual:</strong> ${formData.comercializadora}</p>
    ${formData.facturaUrl ? `<p><strong>Factura:</strong> <a href="${formData.facturaUrl}">Ver factura</a></p>` : ''}
  `

  return sendEmail({
    to: adminEmail,
    subject: `Nueva factura de ${formData.nombre} ${formData.apellidos}`,
    html,
  })
}

export async function sendFacturaConfirmation(email: string, nombre: string) {
  const html = `
    <h2>¡Hemos recibido tu factura!</h2>
    <p>Hola ${nombre},</p>
    <p>Gracias por confiar en Enertum. Hemos recibido tu factura correctamente.</p>
    <p>Nuestro equipo la revisará en las próximas 24-48 horas y te contactaremos con el análisis y las mejores ofertas disponibles.</p>
    <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    <p>Saludos,<br>El equipo de Enertum</p>
  `

  return sendEmail({
    to: email,
    subject: 'Hemos recibido tu factura - Enertum',
    html,
  })
}

export async function sendContactoNotification(formData: {
  nombre: string
  email: string
  mensaje: string
}) {
  const adminEmail = process.env.TO_EMAIL || 'anessendev@gmail.com'

  const html = `
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> ${formData.nombre}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${formData.mensaje.replace(/\n/g, '<br>')}</p>
  `

  return sendEmail({
    to: adminEmail,
    subject: `Nuevo mensaje de ${formData.nombre}`,
    html,
  })
}

export async function sendContactoConfirmation(email: string, nombre: string) {
  const html = `
    <h2>¡Hemos recibido tu mensaje!</h2>
    <p>Hola ${nombre},</p>
    <p>Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
    <p>Si es urgente, también puedes contactarnos por WhatsApp.</p>
    <p>Saludos,<br>El equipo de Enertum</p>
  `

  return sendEmail({
    to: email,
    subject: 'Hemos recibido tu mensaje - Enertum',
    html,
  })
}

