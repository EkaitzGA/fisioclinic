
# Gestión interna de clínica de fisioterapia - **KineClinic**

**KineClinic** es una API backend diseñada para la gestión interna de una clínica de fisioterapia. Principalmente permite gestionar a los clientes, trabajadores y todo lo relacionado con la gestión de las sesiones de la clínica.

---

## 🚀 Tecnologías Utilizadas

- **Backend**: Node.js, express, sequelize, mongoose
- **Base de Datos**: MySQL y Mongo
- **Documentación**: JSDoc
- **Containerización**: Docker
  - Contenedor para Node.js
  - Contenedor para MySQL
  - Docker Compose para orquestación

---

## 📚 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Estructura de la Base de Datos](#-estructura-de-la-base-de-datos)
- [Requisitos](#-requisitos)
- [Instalación y Configuración](#-instalación-y-configuración)
- [Endpoints de la API](#-endpoints-de-la-api)
- [Estado del Proyecto](#-estado-del-proyecto)
- [Contribuciones](#-contribuciones)
- [Licencia](#-licencia)
- [Equipo de Desarrollo](#-equipo-de-desarrollo)

---

## 🛒 Descripción del Proyecto

Este proyecto permite gestionar una clínica de fisioterapia, donde los trabajadores pueden:

1. Gestionar CRUD completo de los diversos aspectos de una clínica: Pacientes, tratamientos, sesiones, trabajadores.
2. Consultar el histórico de sesiones

---

## 🗂️ Estructura de la Base de Datos

- **Tablas principales**:
  1. `sessions`: Información sobre las sesiones.
  2. `workers`: Almacena los datos de los trabajadores.
  3. `patients`: Almacena los datos de los pacientes.
  4. `treatments`: Información de los tratamientos.
  5. `schedule`: Información de los horarios.
  6. `history`: Historial de sesiones.

---

## 🛠️ Requisitos

Para ejecutar este proyecto, necesitas:

- **[Node.js](https://nodejs.org/)** (v14 o superior)
- **[MySQL](https://www.mysql.com/)** (v5.7 o superior)

---

## ⚙️ Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone git@github.com:EkaitzGA/Machimba.git
   cd Machimba
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env` siguiendo el ejemplo de `.env.example`:

     ```env
     DB_HOST=kineclinic_db
     DB_PORT=3308
     APP_HOST=kineclinic_back
     APP_PORT=3001
     DB_USER=1234
     DB_PASSWORD=1234
     DB_DATABASE=kineclinic_db
     DB_ROOT_PASSWORD=1234
     SESSION_SECRET=1234
     MONGO_USER= user
     MONGO_PASSWORD= 1234
     MONGO_HOST= kine-db
     MONGO_PORT= 27017
     MONGO_DATABASE= kine-db
     ```

4. Inicia Docker:
   ```bash
   docker compose up --build
   ```


   La aplicación estará disponible en **[http://localhost:3001](http://localhost:3001)**.
---

## 📡 Principales endpoints de la API

- **Patients**: 
  - `GET /patients` - Mostrar todos los pacientes
  - `GET /patients/{id}` - Mostrar paciente por ID
  - `GET /patients/{email}` - Mostrar paciente por email
  - `POST /patients/create` - Crear nuevo paciente
  - `PUT /patients/update/{id}` - Actualizar paciente
  - `DELETE /patients/delete/{id}` - Borrar paciente
- **Schedule**: 
  - `GET /schedules` - Mostrar todos los horarios
- **History**: 
  - `GET /history` - Mostrar el histórico de sesiones
- **Sessions**: 
  - `GET /sessions` - Mostrar todas los sesiones
  - `GET /sessions/{id}` - Mostrar sesión por ID
  - `GET /sessions/date/{startDate}/{endDate}` - Mostrar sesiones por fechas
  - `GET /sessions/availables` - Mostrar sesiones disponibles
  - `GET /sessions/patient/{id}` - Mostrar sesiones por ID de paciente
  - `GET /sessions/treatment/{id}` - Mostrar sesiones por ID de tratamiento
  - `GET /sessions/worker/{id}` - Mostrar sesiones por ID de trabajador
  - `GET /sessions/status` - Mostrar sesiones por estado
  - `POST /sessions/create` - Crear nueva sesión
  - `PUT /sessions/update/{id}` - Actualizar sesión
  - `DELETE /sessions/delete/{id}` - Borrar sesión
- **Treatments**: 
  - `GET /treatments` - Mostrar todos los tratamientos
  - `POST /treatments/create` - Crear nuevo tratamiento
  - `PUT /treatments/update/{id}` - Actualizar tratamiento
  - `DELETE /treatments/delete/{id}` - Borrar tratamiento
- **Workers**: 
  - `GET /workers` - Mostrar todos los trabajadores
  - `GET /workers/{id}` - Mostrar trabajador por ID
  - `GET /workers/{email}` - Mostrar trabajador por email
  - `POST /workers/create` - Crear nuevo trabajador
  - `PUT /workers/update/{id}` - Actualizar trabajador
  - `DELETE /workers/delete/{id}` - Borrar trabajador

---


## 🛠️ Estado del Proyecto

🚧 **En desarrollo activo**: Actualizaciones frecuentes con nuevas funcionalidades y mejoras.

---

## 🤝 Contribuciones

¡Cualquier contribución es bienvenida! Sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b "nombre-de-tu-rama"
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Envía un **Pull Request**.

---

## 📜 Licencia

⚠️ Este proyecto **no cuenta con una licencia**.

---

## 👥 Equipo de Desarrollo

Este proyecto fue desarrollado por:

- **[Ekaitz](https://github.com/EkaitzGA)**
