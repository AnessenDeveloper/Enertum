import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendContactoNotification, sendContactoConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { nombre, email, mensaje } = body

    // Validaciones básicas
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      )
    }

    // Guardar en Supabase
    const { data, error: dbError } = await supabaseAdmin
      .from('contactos')
      .insert({
        nombre,
        email,
        mensaje,
      })
      .select()
      .single()

    if (dbError) {
      console.error('Error saving to database:', dbError)
      return NextResponse.json(
        { error: 'Error al guardar el mensaje. Por favor, inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    // Enviar emails (no bloqueamos si falla)
    try {
      await Promise.all([
        sendContactoNotification({ nombre, email, mensaje }),
        sendContactoConfirmation(email, nombre),
      ])
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      // No fallamos si el email falla, el mensaje ya está guardado
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente',
        id: data.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

