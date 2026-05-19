CREATE DATABASE IF NOT EXISTS turnos_db;
USE turnos_db;

-- ==========================
-- TABLA PERSONA
-- ==========================
CREATE TABLE IF NOT EXISTS persona (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo_persona VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    numero_documento VARCHAR(20) NOT NULL UNIQUE
);

-- ==========================
-- TABLA CATEGORIA_TURNO
-- ==========================
CREATE TABLE IF NOT EXISTS categoria_turno (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo_categoria VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- ==========================
-- TABLA TURNO
-- ==========================
CREATE TABLE IF NOT EXISTS turno (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    numero_turno VARCHAR(20) NOT NULL UNIQUE,
    persona_id BIGINT NOT NULL,
    categoria_turno_id BIGINT NOT NULL,
    estado VARCHAR(20) NOT NULL,
    FOREIGN KEY (persona_id) REFERENCES persona(id),
    FOREIGN KEY (categoria_turno_id) REFERENCES categoria_turno(id)
);

-- ==========================
-- DATOS DE PRUEBA
-- ==========================
INSERT INTO persona (codigo_persona, nombre, correo, numero_documento) VALUES
('CLI-001', 'Camila Rodríguez', 'camila@gmail.com', '1032456789'),
('CLI-002', 'Julián Torres', 'julian@gmail.com', '1004765321');

INSERT INTO categoria_turno (codigo_categoria, nombre, descripcion) VALUES
('CAT-001', 'Caja rápida', 'Atención para compras simples y pagos rápidos'),
('CAT-002', 'Pedidos especiales', 'Solicitud de productos específicos o encargos'),
('CAT-003', 'Domicilios', 'Gestión de entregas a domicilio');

INSERT INTO turno (numero_turno, persona_id, categoria_turno_id, estado) VALUES
('T-001', 1, 1, 'en espera'),
('T-002', 2, 3, 'reservado');