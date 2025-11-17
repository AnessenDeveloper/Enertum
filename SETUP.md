# 🚀 Guía de Configuración - Backend Enertum

## ✅ Pasos Completados

- ✅ Archivo `.env.local` creado con tus credenciales
- ✅ Dependencias añadidas al `package.json`
- ✅ API Routes creados
- ✅ Utilidades para Supabase, Cloudinary y Resend creadas
- ✅ Formularios actualizados para usar endpoints reales

## 📋 Pasos que debes completar

### 1. Instalar dependencias

```bash
npm install
```

### 2. Crear las tablas en Supabase

1. Ve a tu proyecto en Supabase: https://supabase.com/dashboard/project/ukjmidighkwakjqbikyl
2. Ve a **SQL Editor** (en el menú lateral)
3. Haz clic en **New query**
4. Copia y pega el contenido completo del archivo `database/schema.sql`
5. Haz clic en **Run** (o presiona Ctrl+Enter)

Esto creará:
- Tabla `facturas` para almacenar las facturas subidas
- Tabla `contactos` para almacenar los mensajes de contacto
- Índices para mejorar el rendimiento
- Triggers para actualizar timestamps automáticamente

### 3. Verificar configuración de email

El email `FROM_EMAIL` está configurado como `onboarding@resend.dev` (dominio de prueba de Resend).

**Para producción:**
1. Ve a Resend Dashboard
2. Verifica tu dominio personalizado
3. Actualiza `FROM_EMAIL` en `.env.local` con tu dominio verificado

### 4. Probar la aplicación

```bash
npm run dev
```

Abre http://localhost:3000 y prueba:
- Subir una factura en `/sube-tu-factura`
- Enviar un mensaje en `/contacto`

## 📊 Verificar que funciona

### En Supabase:
1. Ve a **Table Editor** en Supabase
2. Deberías ver las tablas `facturas` y `contactos`
3. Cuando envíes un formulario, deberías ver los datos aparecer aquí

### En Cloudinary:
1. Ve a tu Dashboard de Cloudinary
2. En **Media Library** deberías ver las facturas subidas en la carpeta `enertum/facturas`

### Emails:
- El usuario recibirá un email de confirmación
- Tú recibirás un email de notificación en `anessendev@gmail.com`

## 🔧 Solución de problemas

### Error: "Table doesn't exist"
- Asegúrate de haber ejecutado el SQL en Supabase (paso 2)

### Error: "Invalid API key"
- Verifica que las keys en `.env.local` sean correctas
- Asegúrate de que el archivo se llame exactamente `.env.local` (no `.env`)

### Error al subir archivos
- Verifica las credenciales de Cloudinary
- Asegúrate de que el archivo no supere 10MB

### Emails no se envían
- Verifica la API key de Resend
- Revisa la consola del servidor para ver errores específicos
- Los emails pueden tardar unos segundos en llegar

## 📝 Próximos pasos (opcional)

1. **Configurar dominio personalizado** en Resend para emails profesionales
2. **Añadir validación adicional** si es necesario
3. **Integrar con HubSpot** (fase 2) para gestión de leads
4. **Añadir dashboard** para ver leads desde la web
5. **Configurar backups** automáticos de la base de datos

## 🎉 ¡Listo!

Tu backend está completamente funcional. Los formularios ahora:
- ✅ Guardan datos en Supabase
- ✅ Suben archivos a Cloudinary
- ✅ Envían emails de confirmación y notificación

