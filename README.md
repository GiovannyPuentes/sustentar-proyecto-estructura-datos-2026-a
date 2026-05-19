<<<<<<< HEAD
# 🛒 Sistema de Turnos — Tienda Mi Tierrita 24/7

Sistema web para registrar personas, clasificar solicitudes por categoría y controlar el estado de cada turno de atención.

---

## 🧱 Tecnologías utilizadas

| Capa       | Tecnología              |
|------------|-------------------------|
| Frontend   | React + Vite + Axios    |
| Backend    | Spring Boot 3.5 (Java)  |
| Base de datos | MySQL 8.0            |
| Contenedores | Docker + Docker Compose |

---

## 📁 Estructura del proyecto

```text
turnos_app_codigo P1/
│
├── turnos-app/              ← Frontend (React + Vite)
│   └── src/
│       ├── services/
│       │   ├── personaService.js
│       │   ├── categoriaService.js
│       │   └── turnoService.js
│       └── App.jsx
│
├── backend-turnos/          ← Backend (Spring Boot)
│   └── src/main/java/com/mitierrita/backend_turnos/
│       ├── controller/
│       ├── entity/
│       ├── repository/
│       └── service/
│
├── db-mysql/
│   └── init.sql             ← Script para crear la base de datos y tablas
│
├── docker-compose.yml       ← Orquesta MySQL, Backend y Frontend
└── README.md
```

---

## 🗄️ Base de datos — `db-mysql/init.sql`

```sql
CREATE DATABASE IF NOT EXISTS turnos_mi_tierrita_24_7;
USE turnos_mi_tierrita_24_7;

CREATE TABLE persona (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo_persona VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    numero_documento VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE categoria (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    codigo_categoria VARCHAR(50) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL
);

CREATE TABLE turno (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    numero_turno VARCHAR(50) NOT NULL UNIQUE,
    persona_id BIGINT NOT NULL,
    categoria_turno_id BIGINT NOT NULL,
    estado VARCHAR(50) NOT NULL
);
```

---

## 🔄 Flujo de la aplicación

```text
Frontend React (puerto 5173)
        ↓  Axios HTTP
Backend Spring Boot (puerto 8080)
        ↓  JPA / Hibernate
MySQL (puerto 3306)
```

---

## 🐳 Docker — `docker-compose.yml`

```yaml
version: '3.8'

services:
  mysql:
    image: mysql:8.0
    container_name: turnos_mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: turnos_mi_tierrita_24_7
    ports:
      - "3306:3306"
    volumes:
      - ./db-mysql/init.sql:/docker-entrypoint-initdb.d/init.sql

  backend:
    build: ./backend-turnos
    container_name: turnos_backend
    ports:
      - "8080:8080"
    depends_on:
      - mysql

  frontend:
    build: ./turnos-app
    container_name: turnos_frontend
    ports:
      - "5173:5173"
    depends_on:
      - backend
```

---

## 🚀 Ejecución local (sin Docker)

### 1. Base de datos
Asegúrate de tener MySQL corriendo y ejecuta el script `db-mysql/init.sql` en MySQL Workbench.

### 2. Backend
```bash
cd backend-turnos
.\mvnw.cmd spring-boot:run
```
Espera el mensaje: `Started BackendTurnosApplication in X seconds`

### 3. Frontend
```bash
cd turnos-app
npm install
npm run dev
```

### URLs locales
| Servicio   | URL                                  |
|------------|--------------------------------------|
| Frontend   | http://localhost:5173                |
| Personas   | http://localhost:8080/api/personas   |
| Categorías | http://localhost:8080/api/categorias |
| Turnos     | http://localhost:8080/api/turnos     |

---

## 🐳 Ejecución con Docker

```bash
docker compose up --build
```

Con ese único comando se levantan MySQL, el backend y el frontend automáticamente.

---

## ✅ Funcionalidades

- Registrar personas con código automático (CLI-001, CLI-002...)
- Crear categorías de atención con código automático (CAT-001...)
- Generar turnos con número automático (T-001, T-002...)
- Cambiar el estado de cada turno: `reservado`, `en espera`, `atendido`, `cancelado`
- Todos los datos persisten en MySQL

---

Estructura de Datos — 2026
=======
# sustentar-proyecto-estructura-datos-2026-a
sustentar-proyecto-estructura-datos-2026-a
>>>>>>> 29d9f295936357f692e392677439b0744ab623d7
