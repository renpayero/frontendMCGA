# FrontendMCGA
## Este proyecto fue creado con Vite. Es una aplicación de React que utiliza el contexto de React para manejar el estado global.

## Librerias
- "axios": "^1.6.2",
- "js-cookie": "^3.0.5",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-hook-form": "^7.48.2",
- "react-router-dom": "^6.20.1",
- "react-toastify": "^9.1.3",
- "styled-normalize": "^8.1.0"

## Estructura del proyecto
```
frontendMCGA/
    .eslintrc.cjs
    .gitignore
    index.html
    package.json
    public/
    README.md
    src/
        api/
        App.jsx
        assets/
        components/
        context/
        index.css
        main.jsx
        pages/
        ProtectedRoute.jsx
        stylesheets/
    vite.config.js 
```

## Instalación
- Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:
```
npm install
```

## Ejecución
- Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:
```
npm run dev
```

## Características
- Autenticación: El proyecto utiliza un sistema de autenticación basado en JWT. Los tokens de autenticación se almacenan en el almacenamiento local del navegador.
- Gestión de productos: Los usuarios autenticados pueden crear, leer, actualizar y eliminar productos.
- Rutas protegidas: Algunas rutas están protegidas y solo pueden ser accedidas por usuarios autenticados.

## Componentes principales
- App.jsx: Este es el componente principal de la aplicación. Aquí es donde se configuran las rutas y se envuelve la aplicación en los proveedores de contexto necesarios.
- ProtectedRoute.jsx: Este componente se utiliza para proteger las rutas que solo deben ser accesibles para los usuarios autenticados.
- authContext.jsx: Este archivo define el contexto de autenticación, que se utiliza para manejar el estado de autenticación global.
- ProductsContext.jsx: Este archivo define el contexto de los productos, que se utiliza para manejar el estado global de los productos.

## API
- La carpeta `api/` contiene los archivos que se utilizan para interactuar con la API del backend. Aquí es donde se configuran las instancias de axios y se definen las funciones para hacer solicitudes a la API.

## Estilos
- Los estilos de la aplicación se definen en la carpeta `stylesheets/.` Aquí es donde puedes encontrar todos los archivos CSS que se utilizan en la aplicación.
