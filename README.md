
🎬 **CineRetro – Proyecto Cátedra DPS404**
📚 Universidad Don Bosco – 2025

👥 **Integrantes del equipo**
David Alejandro Álvarez Moreira – AM240104
Ashley Gabriela Valdez González – VG240979
Gabriela Abigail Chávez Recinos – CR241682
Verónica Elizabeth Rodríguez Majano – RM24011
Alexandra Raquel Rodríguez Majano – RM240112
Amanda Isabella Serpas Rivera – SR240105

📱 **Descripción general**
CineRetro es una aplicación móvil creada con React Native y Expo, diseñada para ofrecer una experiencia interactiva y nostálgica a los amantes del cine retro. Utiliza una API REST pública para mostrar datos curiosos y entretenidos de forma dinámica y atractiva.

Este proyecto fue desarrollado como parte de la asignatura Desarrollo de Aplicaciones para Dispositivos Móviles (DPS404).

📌 **Nota:** Este proyecto se encuentra en una rama alternativa llamada:
`CineRetro-Proyecto Catedra`

---

🚀 **Instalación y ejecución del proyecto**

1️⃣ Clonar el repositorio y cambiar a la rama del proyecto

```bash
git clone https://github.com/DavidAlvar3z/Investigacion-Aplicada2-DPS.git
cd Investigacion-Aplicada2-DPS
git checkout "CineRetro-Proyecto Catedra"
```

2️⃣ Instalar dependencias

```bash
npm install
# o
yarn install
```

3️⃣ Ejecutar la aplicación

```bash
npx expo start
```

También puedes abrir el proyecto con Android Studio para pruebas y emulación.

Abre la app Expo Go en tu dispositivo móvil, escanea el código QR y visualiza la app en tiempo real con recarga automática.

---

🧰 **Tecnologías utilizadas**

* React Native
* Expo
* Visual Studio Code
* Axios – Cliente HTTP para consumir APIs
* GitHub Web y GitHub Desktop
* Enlace Móvil – Herramienta de depuración
* Expo Go

🔗 **Pokefact API – API pública utilizada**

✨ **Funcionalidades principales**

* Visualización de datos dinámicos desde una API externa
* Interfaz adaptable y responsiva para dispositivos móviles
* Pruebas en tiempo real con integración de Expo Go
* Diseño optimizado para una experiencia de usuario fluida

---

📁 **Estructura del proyecto**

```
CineRetro/
├── assets/               # Imágenes, íconos y recursos multimedia
├── components/           # Componentes reutilizables de la UI
├── screens/              # Pantallas principales de la app
├── styles/               # Estilos separados del código JS
├── backend/              # Código backend (PHP, conexión a DB)
├── App.js                # Punto de entrada principal
└── package.json          # Dependencias del proyecto
```

---

⚠️ **Configuración y uso de la base de datos**

Para que la funcionalidad de login y registro con base de datos funcione correctamente, debes:

* Colocar la carpeta backend dentro de la carpeta www (WAMPP) o htdocs (XAMPP).
* Usar la siguiente URL en la app para conectar con el backend: 
  `http://TU_IP_LOCAL/PROYECTO-CATEDRA-DPS404/backend/login.php`
* Asegúrate de tener el servidor local activo y configurado para que la app pueda comunicarse con la base de datos.

🛠 **Cambios importantes recientes**

* Se mejoró el diseño de las pantallas de login y registro para mayor uniformidad y experiencia.
* Se añadió validación de correo electrónico y contraseña en frontend.
* Implementación de hasheo de contraseñas y base de datos para guardar usuarios en backend.
* Se creó un archivo SQL detallado en la carpeta backend que incluye la creación de la base de datos appusuarios y la tabla usuarios, con DROP DATABASE para eliminar versiones previas si existen.
* Separación de estilos en archivos independientes para mejor organización.
* Reorganización completa del proyecto con carpetas para backend, estilos y componentes.

---

🛠 **Despliegue de la base de datos**

Para desplegar la base de datos:

1. Abre tu cliente MySQL o phpMyAdmin.
2. Ejecuta el script SQL que está en `backend/db.sql`.
3. Esto creará la base de datos `appusuarios` y la tabla `usuarios`, borrando versiones anteriores si existen.

---

🛠 **Requisitos**

| Herramienta | Versión recomendada    |
| ----------- | ---------------------- |
| Node.js     | 18.x o superior        |
| npm o yarn  | Última versión estable |
| Expo CLI    | Última versión         |
| App Expo Go | Instalado en el móvil  |

---

📄 **Licencia**
Este proyecto ha sido desarrollado con fines académicos y no comerciales como parte del ciclo 01-2025.
© 2025 – Universidad Don Bosco

---

¿Tienes dudas o comentarios? ¡No dudes en contactarnos! 😊
