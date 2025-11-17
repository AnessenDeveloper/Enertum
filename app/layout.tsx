import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Enertum - Te bajamos la factura de la luz sin cambiar de rutina',
  description: 'Revisamos tu factura gratis y te decimos cuánto puedes ahorrar. Sin permanencia, sin compromiso.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

