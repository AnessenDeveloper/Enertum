-- Tabla para almacenar las facturas subidas
CREATE TABLE IF NOT EXISTS facturas (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellidos VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  tipo_cliente VARCHAR(50) NOT NULL CHECK (tipo_cliente IN ('particular', 'empresa')),
  comercializadora VARCHAR(255) NOT NULL,
  factura_url TEXT,
  factura_public_id VARCHAR(255),
  rgpd_aceptado BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Tabla para almacenar los mensajes de contacto
CREATE TABLE IF NOT EXISTS contactos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices para mejorar las búsquedas
CREATE INDEX IF NOT EXISTS idx_facturas_email ON facturas(email);
CREATE INDEX IF NOT EXISTS idx_facturas_created_at ON facturas(created_at);
CREATE INDEX IF NOT EXISTS idx_contactos_email ON contactos(email);
CREATE INDEX IF NOT EXISTS idx_contactos_created_at ON contactos(created_at);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar updated_at en facturas
CREATE TRIGGER update_facturas_updated_at BEFORE UPDATE ON facturas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

