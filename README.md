## Sistema Web de Gestión de Turnos y Manual Interactivo de Estructuras de Datos

---

## Descripción general del proyecto

Este repositorio contiene el desarrollo completo del proyecto académico realizado para la asignatura de Estructura de Datos en el programa de Ingeniería de Sistemas de CORHUILA.

El proyecto fue desarrollado bajo la metodología de Aprendizaje Basado en Proyectos (ABP), integrando conceptos de estructuras de datos, desarrollo web, arquitectura frontend/backend y persistencia de datos.

El proyecto está dividido en dos subproyectos completamente independientes:

### Parte 1: Sistema Web Fullstack de Gestión de Turnos
Aplicación web desarrollada para administrar turnos de atención mediante una arquitectura cliente-servidor utilizando Spring Boot y frontend web.

### Parte 2: Manual Web Interactivo de Estructuras de Datos
Sitio web educativo e interactivo que documenta las principales estructuras de datos vistas durante el semestre mediante ejemplos, explicaciones y recursos visuales.

---

# Integrantes

- Melanie Lizeth Sánchez Polanía
- Giovanny Andrey Puentes Alape
- Jesús López Charry

---

# Estructura general del repositorio

```text
SUSTENTACION-PROYECTO-ESTRUCTURA-DATOS/
│
├── evidencias/
├── formatos/
│
├── parte-1-sistema-turnos/
│   ├── backend-springboot/
│   ├── db-mysql/
│   ├── frontend-html-axios/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── app.js
│   │   ├── index.html
│   │   └── README.md
│
├── parte-2-manual-estructuras-datos/
│   ├── css/
│   ├── js/
│   ├── assets/
│   ├── temas/
│   ├── index.html
│   └── README.md
│
├── integrantes.md
└── README.md
```

---

# Parte 1 — Sistema Web Fullstack de Gestión de Turnos

La Parte 1 corresponde al desarrollo de una aplicación web para la administración de turnos de atención.

El sistema permite:

- Registrar personas.
- Crear categorías de atención.
- Generar turnos.
- Actualizar estados de turnos.
- Gestionar información desde un panel administrativo.
- Consultar turnos registrados.
- Organizar atención por orden de llegada.

## Tecnologías utilizadas

### Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- Maven
- API REST

### Base de datos
- MySQL
- MySQL Workbench

### Frontend
- HTML5
- CSS3
- JavaScript
- Axios

La aplicación funciona mediante una arquitectura frontend/backend basada en APIs REST para la comunicación entre cliente y servidor.

---

# Parte 2 — Manual Web Interactivo de Estructuras de Datos

La Parte 2 corresponde al desarrollo de un sitio web educativo sobre estructuras de datos.

El manual fue construido como una página web interactiva que contiene teoría, ejemplos prácticos, retos, documentación y material visual relacionado con los temas desarrollados durante el semestre.

## Temas desarrollados

- Arrays
- Listas enlazadas simples
- Listas dobles y circulares
- Pilas (Stack)
- Colas (Queue)
- Tablas Hash
- Árboles binarios
- BST
- AVL
- Grafos
- Complejidad algorítmica

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

El objetivo principal del manual es servir como herramienta de apoyo académico y consulta permanente sobre estructuras de datos.

---

# Cómo ejecutar la Parte 1

## Paso 1
Abrir una terminal dentro de:

```bash
parte-1-sistema-turnos/backend-springboot
```

## Paso 2
Ejecutar:

```bash
./mvnw spring-boot:run
```

o en Windows:

```bash
mvn spring-boot:run
```

## Paso 3
Abrir:

```text
parte-1-sistema-turnos/frontend-html-axios/index.html
```

Preferiblemente utilizando Live Server en Visual Studio Code.

---

# Cómo ejecutar la Parte 2

Abrir:

```text
parte-2-manual-estructuras-datos/index.html
```

Preferiblemente utilizando Live Server.

---

# Objetivo académico del proyecto

El proyecto fue desarrollado con fines académicos para aplicar conocimientos relacionados con:

- Desarrollo web frontend y backend.
- Arquitectura en capas.
- APIs REST.
- Persistencia de datos.
- Programación orientada a objetos.
- Estructuras de datos.
- Complejidad algorítmica.
- Organización y procesamiento de información.
- Diseño de interfaces web.

---

# Metodología implementada

El proyecto fue desarrollado bajo la metodología ABP (Aprendizaje Basado en Proyectos), permitiendo integrar teoría y práctica mediante la construcción de soluciones funcionales aplicadas a problemas reales.

Las etapas desarrolladas fueron:

1. Formulación del problema.
2. Análisis y diseño de la solución.
3. Implementación y pruebas funcionales.
4. Presentación, sustentación y reflexión del aprendizaje.

---

# Resultados obtenidos

- Implementación funcional de una API REST.
- Integración frontend/backend mediante Axios.
- Persistencia de datos utilizando MySQL.
- Desarrollo de un manual web interactivo.
- Aplicación práctica de estructuras de datos.
- Fortalecimiento de habilidades en programación y trabajo colaborativo.
- Documentación técnica del proyecto.

---

# Bibliografía

- Spring Boot Reference Documentation. (2024).
- Cormen, T., Leiserson, C., Rivest, R., & Stein, C. *Introduction to Algorithms*.
- Mozilla Developer Network (MDN).
- Axios Documentation.
- Goodrich, M. *Data Structures and Algorithms in Java*.
