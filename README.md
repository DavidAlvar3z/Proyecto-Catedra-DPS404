
# 🎬 CineRetro – Proyecto Cátedra DPS404
📚 **Universidad Don Bosco – 2025**

---

## 👥 Integrantes del equipo

- 👤 David Alejandro Álvarez Moreira – `AM240104`
- 👤 Ashley Gabriela Valdez González – `VG240979`
- 👤 Gabriela Abigail Chávez Recinos – `CR241682`
- 👤 Verónica Elizabeth Rodríguez Majano – `RM24011`
- 👤 Alexandra Raquel Rodríguez Majano – `RM240112`
- 👤 Amanda Isabella Serpas Rivera – `SR240105`

---

## 📱 Descripción General

**CineRetro** es una aplicación móvil desarrollada con **React Native** y **Expo**, diseñada para brindar una experiencia única y nostálgica a los amantes del cine retro. Consume datos desde una API pública y los presenta de forma dinámica.

🛠 Proyecto realizado para la asignatura: **Desarrollo de Aplicaciones para Dispositivos Móviles (DPS404)**.

📌 Rama del proyecto: `CineRetro-Proyecto Catedra`

---

## 🚀 Instalación y Ejecución del Proyecto

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/DavidAlvar3z/Investigacion-Aplicada2-DPS.git
cd Investigacion-Aplicada2-DPS
git checkout "CineRetro-Proyecto Catedra"
```

### 2️⃣ Instalar dependencias

```bash
npm install
# o
yarn install
```

### 3️⃣ Ejecutar la app con Expo o Android Studio

- Usando **Expo CLI**:
```bash
npx expo start
```
- O abre el proyecto directamente desde **Android Studio**.

📱 Escanea el QR en la terminal usando **Expo Go** en tu móvil para probar la app en tiempo real.

---

## 🧰 Tecnologías Utilizadas

- ⚛️ React Native
- 🚀 Expo
- 💻 Visual Studio Code
- 🔗 Axios – Cliente HTTP
- 🐙 GitHub Web y Desktop
- 🧪 Enlace Móvil / Expo Go

---

## 🔗 API Pública Utilizada

- [Pokefact API](https://pokefact-api.example.com)

---

## ✨ Funcionalidades Principales

- Visualización dinámica de datos desde una API externa
- Interfaz responsive y optimizada para móviles
- Diseño intuitivo y atractivo para el usuario
- Soporte para pruebas en tiempo real

---

## 📁 Estructura del Proyecto

```
CineRetro/
├── assets/               # Imágenes, íconos y multimedia
├── components/           # Componentes reutilizables
├── screens/              # Pantallas principales
├── styles/               # Archivos de estilos CSS
├── backend/              # Lógica backend y conexión DB
├── App.js                # Entrada principal de la app
└── package.json          # Dependencias del proyecto
```

---

## ⚠️ Configuración y Uso de la Base de Datos

Para que las funciones de login y registro funcionen:

✅ Coloca la carpeta `backend` en `www` (WAMPP) o `htdocs` (XAMPP).  
✅ Importa el archivo SQL detallado que está en `backend/crear_db.sql`. Este crea la base de datos `appusuarios` y la tabla `usuarios` (con `DROP DATABASE` por si existe una versión anterior).

📡 Usa esta URL en la app para la conexión al backend:

```txt
http://usuario/PROYECTO-CATEDRA-DPS404/backend/login.php
```

> Reemplaza `usuario` con tu IP local si estás usando una red WiFi. Asegúrate de que tu servidor local esté activo.

---

## 🛠 Cambios Importantes Recientes

✅ Se mejoró el diseño de login y registro para mayor uniformidad.  
✅ Validación de correo y contraseña en el frontend.  
✅ Hasheo de contraseñas y conexión a base de datos implementados.  
✅ Archivo SQL agregado con toda la estructura de DB (`backend/crear_db.sql`).  
✅ Separación de estilos para organización más clara.  
✅ Reestructuración completa con separación de carpetas.

---

## 🧪 Requisitos

| Herramienta       | Versión recomendada     |
| ----------------- | ----------------------- |
| Node.js           | 18.x o superior         |
| npm o yarn        | Última versión estable  |
| Expo CLI          | Última versión          |
| App Expo Go       | Instalada en tu móvil   |
| Android Studio    | Opcional para pruebas   |

---

## 📄 Licencia

Este proyecto es de carácter académico (no comercial) y se desarrolla en el ciclo 01-2025.  
© 2025 – Universidad Don Bosco

---

¿Dudas o sugerencias? ¡No dudes en escribirnos! 😊
