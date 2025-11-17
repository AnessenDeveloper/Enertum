# 🚀 Guía Paso a Paso: Desplegar en Vercel

## 📋 Paso 1: Crear cuenta en Vercel

1. Ve a **https://vercel.com**
2. Click en **"Sign Up"** (arriba a la derecha)
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios de GitHub
5. Completa el proceso de registro

---

## 📋 Paso 2: Importar tu proyecto

1. Una vez dentro de Vercel, verás el dashboard
2. Click en **"Add New..."** → **"Project"**
3. Verás una lista de tus repositorios de GitHub
4. Busca y selecciona **"Enertum"** (el repositorio que acabamos de subir)
5. Click en **"Import"**

---

## 📋 Paso 3: Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Verás una pantalla de configuración:

### Framework Preset
- Debería estar en **"Next.js"** (automático)
- Si no, selecciónalo manualmente

### Root Directory
- Déjalo en **"./"** (raíz del proyecto)

### Build Command
- Déjalo como está: **`npm run build`**

### Output Directory
- Déjalo como está: **`.next`**

### Install Command
- Déjalo como está: **`npm install`**

---

## 📋 Paso 4: Añadir Variables de Entorno (MUY IMPORTANTE)

**ANTES de hacer click en "Deploy"**, debes añadir las variables de entorno:

1. En la misma pantalla de configuración, busca la sección **"Environment Variables"**
2. Click en **"Add"** o **"Add Variable"** para cada una de estas:

### Variables a añadir:

```
NEXT_PUBLIC_SUPABASE_URL
```
**Valor:** `https://ukjmidighkwakjqbikyl.supabase.co`

```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```
**Valor:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVram1pZGlnaGt3YWtqcWJpa3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzOTU5NjUsImV4cCI6MjA3ODk3MTk2NX0.yHwklEwh9JjbBFVXvNcenfWA0-xr2rTxaS1Bm8Rn1vA`

```
SUPABASE_SERVICE_ROLE_KEY
```
**Valor:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVram1pZGlnaGt3YWtqcWJpa3lsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzM5NTk2NSwiZXhwIjoyMDc4OTcxOTY1fQ.et7PydRORh04sfi8j2uxXrfXSp0bu65_sPuFM0CnpEE`

```
CLOUDINARY_CLOUD_NAME
```
**Valor:** `dypshzw4q`

```
CLOUDINARY_API_KEY
```
**Valor:** `316743227277489`

```
CLOUDINARY_API_SECRET
```
**Valor:** `zfLKcE3OANBMiSboZQVbmOPnx90`

```
RESEND_API_KEY
```
**Valor:** `re_cocDoFK2_H1XtEA7EYVYmKM8mrQWV3NDa`

```
FROM_EMAIL
```
**Valor:** `onboarding@resend.dev`

```
TO_EMAIL
```
**Valor:** `anessendev@gmail.com`

### ⚠️ IMPORTANTE:
- Para cada variable, asegúrate de seleccionar los **3 entornos**: Production, Preview, Development
- O al menos selecciona **Production** y **Preview**

---

## 📋 Paso 5: Desplegar

1. Una vez añadidas todas las variables de entorno
2. Click en **"Deploy"** (botón grande abajo)
3. Espera 2-3 minutos mientras Vercel:
   - Instala las dependencias
   - Compila tu proyecto
   - Despliega la aplicación

---

## 📋 Paso 6: Ver tu web online

1. Una vez completado el despliegue, verás:
   - ✅ **"Ready"** en verde
   - Una URL tipo: `enertum-xxxxx.vercel.app`

2. Click en la URL o en **"Visit"** para ver tu web online

3. **¡Felicidades! Tu web está en producción** 🎉

---

## 📋 Paso 7: Verificar que todo funciona

### Prueba estas URLs:
- `https://tu-url.vercel.app` - Página principal
- `https://tu-url.vercel.app/sube-tu-factura` - Formulario de factura
- `https://tu-url.vercel.app/contacto` - Formulario de contacto
- `https://tu-url.vercel.app/como-ahorrar-luz` - Blog/Tips

### Prueba funcionalidades:
1. **Sube una factura de prueba** en `/sube-tu-factura`
2. **Envía un mensaje de prueba** en `/contacto`
3. Verifica que recibes los emails de notificación

---

## 🔄 Actualizaciones futuras

Cada vez que hagas `git push` a GitHub, Vercel **desplegará automáticamente** la nueva versión.

Para ver los despliegues:
1. Ve a tu proyecto en Vercel
2. Verás el historial de despliegues
3. Cada commit genera un nuevo despliegue

---

## ⚠️ IMPORTANTE: Antes de probar

**No olvides ejecutar el SQL en Supabase** para crear las tablas:

1. Ve a: https://supabase.com/dashboard/project/ukjmidighkwakjqbikyl
2. Click en **SQL Editor**
3. Click en **New query**
4. Abre el archivo `database/schema.sql` de tu proyecto
5. Copia y pega todo el contenido
6. Click en **Run**

Sin esto, los formularios no funcionarán porque no existirán las tablas.

---

## 🆘 Solución de problemas

### Error: "Build failed"
- Verifica que todas las variables de entorno estén correctas
- Revisa los logs en Vercel para ver el error específico

### Error: "Environment variable not found"
- Asegúrate de haber añadido todas las variables
- Verifica que estén seleccionados los entornos correctos

### Los formularios no funcionan
- Verifica que hayas ejecutado el SQL en Supabase
- Revisa los logs de la función en Vercel (Functions tab)

### Emails no se envían
- Verifica la API key de Resend
- Revisa los logs en Vercel

---

## 📝 Notas adicionales

- **Dominio personalizado**: Más adelante puedes añadir tu propio dominio en Settings → Domains
- **Variables de entorno**: Puedes editarlas en Settings → Environment Variables
- **Logs**: Puedes ver los logs en tiempo real en el dashboard de Vercel

---

¡Listo! Sigue estos pasos y tendrás tu web online en minutos 🚀

