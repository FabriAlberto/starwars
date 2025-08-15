# 🚀 Prueba Técnica - Desarrollador Frontend

Este proyecto es una **prueba técnica** para el puesto de Desarrollador Frontend, cuyo objetivo fue desarrollar una aplicación basada en la API pública de **Star Wars**: [SWAPI](https://swapi.info).



## 📸 Demo

- **Deploy en Vercel:** https://starwars-prueba-tecnica.vercel.app/  


## 🛠️ Tecnologías utilizadas

- **[Next.js 15](https://nextjs.org/)** – App Router
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Estilos y diseño responsive
- **[Axios](https://axios-http.com/)** – Consumo de API
- **[Lucide](https://lucide.dev/)** – Iconos



## 📂 Arquitectura del proyecto

El proyecto está estructurado **por tipo y por feature**, lo que permite mantener el código ordenado y fácilmente escalable.  

> 💡 Nota: En proyectos más grandes suelo utilizar **Screaming Architecture**, pero para esta prueba opté por esta estructura para optimizar tiempos y mantener claridad.


## 🎨 Estilos y configuración de Tailwind

- Todo el estilo se implementó **exclusivamente** con clases de **Tailwind CSS v4**.  
- Aunque la prueba indicaba **no usar archivos CSS**, utilicé **un único archivo CSS** únicamente para configurar la **nueva paleta de colores/tema** de Tailwind v4, siguiendo las buenas prácticas de la nueva versión.
- No se utilizaron SCSS, styled-components ni archivos de estilo externos adicionales.
- Interfaz fiel al diseño de Figma y 100% responsive.



## 📱 Responsividad

La aplicación está **100% responsive**, adaptándose correctamente a:

- **Dispositivos móviles**
- **Tablets**
- **Escritorio**

El diseño sigue las guías proporcionadas en el Figma de la prueba técnica.



## ⚡ Funcionalidades implementadas

### 📄 Pantalla 1 – Listado de Películas

### 🎬 Pantalla 2 – Detalle de Película
- **Skeletons:**  
  - Indicadores visuales mientras se cargan datos, mejorando la UX.



## 📌Notas finales
- Arquitectura adaptada para optimizar el tiempo de desarrollo.
- Código completamente tipado con TypeScript.
- Interfaz fiel al diseño de Figma y 100% responsive.
- Cumplimiento estricto de los requisitos técnicos solicitados en la prueba.


## 🚀 Instalación y ejecución

```bash
# Clonar repositorio
git clone https://github.com/tuusuario/tu-repo.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

