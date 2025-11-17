import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { uploadFile } from '@/lib/cloudinary'
import { sendFacturaNotification, sendFacturaConfirmation } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extraer datos del formulario
    const nombre = formData.get('nombre') as string
    const apellidos = formData.get('apellidos') as string
    const email = formData.get('email') as string
    const telefono = formData.get('telefono') as string
    const tipoCliente = formData.get('tipoCliente') as string
    const comercializadora = formData.get('comercializadora') as string
    const rgpd = formData.get('rgpd') === 'true'
    const file = formData.get('factura') as File | null

    // Validaciones básicas
    if (!nombre || !apellidos || !email || !telefono || !tipoCliente || !comercializadora) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }

    if (!rgpd) {
      return NextResponse.json(
        { error: 'Debes aceptar el tratamiento de datos' },
        { status: 400 }
      )
    }

    if (!file) {
      return NextResponse.json(
        { error: 'Debes subir una factura' },
        { status: 400 }
      )
    }

    // Validar tamaño del archivo (máx 10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'El archivo es demasiado grande (máx 10MB)' },
        { status: 400 }
      )
    }

    // Subir archivo a Cloudinary
    let facturaUrl: string | undefined
    let facturaPublicId: string | undefined

    try {
      const uploadResult = await uploadFile(file)
      facturaUrl = uploadResult.url
      facturaPublicId = uploadResult.public_id
    } catch (error) {
      console.error('Error uploading file:', error)
      return NextResponse.json(
        { error: 'Error al subir la factura. Por favor, inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    // Guardar en Supabase
    const { data, error: dbError } = await supabaseAdmin
      .from('facturas')
      .insert({
        nombre,
        apellidos,
        email,
        telefono,
        tipo_cliente: tipoCliente,
        comercializadora,
        factura_url: facturaUrl,
        factura_public_id: facturaPublicId,
        rgpd_aceptado: rgpd,
      })
      .select()
      .single()

    if (dbError) {
      console.error('Error saving to database:', dbError)
      return NextResponse.json(
        { error: 'Error al guardar los datos. Por favor, inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    // Enviar emails (no bloqueamos si falla)
    try {
      await Promise.all([
        sendFacturaNotification({
          nombre,
          apellidos,
          email,
          telefono,
          tipoCliente,
          comercializadora,
          facturaUrl,
        }),
        sendFacturaConfirmation(email, nombre),
      ])
    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      // No fallamos si el email falla, el lead ya está guardado
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Factura recibida correctamente',
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

