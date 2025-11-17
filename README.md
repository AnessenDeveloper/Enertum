# Enertum Web

Sitio web de Enertum - Asesoramiento energético para reducir tu factura de la luz.

## 🚀 Inicio rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
├── app/
│   ├── page.tsx              # Página principal (Home)
│   ├── sube-tu-factura/      # Formulario para subir factura
│   ├── como-ahorrar-luz/     # Blog/Tips sobre ahorro energético
│   ├── contacto/             # Página de contacto
│   ├── politica-privacidad/  # Política de privacidad
│   ├── politica-cookies/     # Política de cookies
│   ├── aviso-legal/          # Aviso legal
│   └── rgpd/                 # Información RGPD
├── components/
│   ├── Header.tsx            # Cabecera de navegación
│   └── Footer.tsx            # Pie de página
└── public/                   # Archivos estáticos
```

## 🎨 Características

- ✅ Diseño moderno y responsive
- ✅ Página principal con Hero, secciones informativas, resultados y FAQ
- ✅ Formulario completo para subir facturas
- ✅ Blog con artículos sobre ahorro energético
- ✅ Página de contacto con formulario y WhatsApp
- ✅ Páginas legales (RGPD, privacidad, cookies, aviso legal)

## 📝 Próximos pasos

### Backend y Base de Datos

1. **Crear API endpoints:**
   - `/api/submit-factura` - Para procesar el formulario de factura
   - `/api/contacto` - Para procesar el formulario de contacto

2. **Configurar base de datos:**
   - Guardar leads del formulario
   - Almacenar facturas subidas
   - Gestionar contactos

3. **Integración con HubSpot:**
   - Crear leads automáticamente en HubSpot
   - Sincronizar datos de clientes

### Personalización

1. **Actualizar información de contacto:**
   - Reemplazar número de WhatsApp en los archivos
   - Actualizar email de contacto
   - Añadir dirección física si aplica

2. **Configurar dominio:**
   - Configurar dominio personalizado
   - Configurar SSL/HTTPS

3. **SEO:**
   - Añadir meta tags personalizados
   - Configurar sitemap.xml
   - Añadir Google Analytics (si aplica)

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **CSS-in-JS** - Estilos con styled-jsx

## 📄 Licencia

Todos los derechos reservados © Enertum

