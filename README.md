
🎬 CineRetro – Proyecto Cátedra DPS404  
📚 Universidad Don Bosco – 2025

---

### 👥 Integrantes del equipo  
- David Alejandro Álvarez Moreira – AM240104  
- Ashley Gabriela Valdez González – VG240979  
- Gabriela Abigail Chávez Recinos – CR241682  
- Verónica Elizabeth Rodríguez Majano – RM24011  
- Alexandra Raquel Rodríguez Majano – RM240112  
- Amanda Isabella Serpas Rivera – SR240105

---

### 📱 Descripción general  
CineRetro es una app móvil creada con React Native y Expo, que ofrece una experiencia nostálgica para los amantes del cine retro. Consume una API REST pública para mostrar datos dinámicos y entretenidos. Fue desarrollado para la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles (DPS404).

📌 Proyecto en rama: CineRetro-Proyecto Catedra

---

### 🚀 Instalación y ejecución

```bash
git clone https://github.com/DavidAlvar3z/Investigacion-Aplicada2-DPS.git
cd Investigacion-Aplicada2-DPS
git checkout "CineRetro-Proyecto Catedra"

npm install
# o
yarn install

npx expo start
```

Abre Expo Go en tu dispositivo y escanea el QR para usar la app con recarga en tiempo real.

---

### 🧰 Tecnologías utilizadas

- React Native  
- Expo  
- Visual Studio Code  
- Axios (cliente HTTP)  
- GitHub  
- Expo Go  

---

### 📁 Estructura del proyecto

```
CineRetro/
├── assets/        # Recursos multimedia
├── components/    # Componentes UI reutilizables
├── screens/       # Pantallas principales
├── styles/        # Archivos de estilos
├── backend/       # Backend (PHP, SQL scripts)
├── App.js         # Entrada principal
└── package.json   # Dependencias
```

---

### ⚠️ Configuración y uso de la base de datos

Para que el login y registro funcionen con la base de datos debes:

1. Colocar la carpeta **backend** dentro de la carpeta `www` (WAMPP) o `htdocs` (XAMPP).

2. Usar esta URL en la app para conectar con el backend:  
`http://192.168.68.100/PROYECTO-CATEDRA-DPS404/backend/login.php`

3. Asegurarte que el servidor local esté activo para que la app pueda comunicarse con la base de datos.

4. Desplegar la base de datos ejecutando el script SQL detallado que se encuentra en `backend/db.sql`. Este script:

   - Elimina la base de datos previa si existe (`DROP DATABASE IF EXISTS appusuarios;`)
   - Crea la base de datos `appusuarios`
   - Crea la tabla `usuarios` con los campos `id`, `username`, `email` y `password`

---

### 🛠 Cambios importantes relacionados a la base de datos

- Se mejoró el diseño de las pantallas de login y registro para mayor uniformidad y experiencia.  
- Se añadió validación de correo electrónico y contraseña en frontend.  
- Implementación de hasheo de contraseñas y base de datos para almacenar usuarios de forma segura.  
- Creación de un archivo SQL detallado en `backend/` que incluye la creación de la base de datos y tabla, con eliminación previa de versiones anteriores.  
- Separación de estilos en archivos independientes para mejor organización.  
- Reorganización completa del proyecto con carpetas específicas para backend, estilos y componentes.

---

### 🛠 Requisitos

| Herramienta | Versión recomendada    |
| ----------- | ---------------------- |
| Node.js     | 18.x o superior        |
| npm o yarn  | Última estable         |
| Expo CLI    | Última versión         |
| Expo Go     | Instalado en el móvil  |

---

### 📄 Licencia  
Proyecto con fines académicos, ciclo 01-2025.  
© 2025 Universidad Don Bosco

---

¿Quieres ayuda con el archivo `backend/login.php` o el script SQL? ¡Estoy para ayudarte! 😊

---
