# Portafolio Personal – Gil Fajardo

Portafolio web de una sola página con animaciones fluidas, donde presento mi perfil, formación, certificaciones y proyectos.

🔗 **Demo:** https://gilfajardo.github.io/portfolio

## Secciones

- **Presentación:** introducción con animaciones en el hero.
- **Sobre Mí:** formación académica (Ing. en Tecnologías de la Información, UPSLP), enfoque profesional y certificaciones (Certiport, Microsoft, Cisco).
- **Proyectos:** carrusel interactivo con imágenes y videos de cada proyecto, descripción y enlace a su repositorio.
- **Contacto:** información y redes sociales.

## Proyectos destacados

| Proyecto | Tecnología |
|----------|------------|
| Serpiente Game | Videojuego de consola para Windows |
| Algoritmo Round Robin | Java Swing |
| Inventario para Farmacia | C++ (consola) |
| Eventos Deportivos | Java Swing + MySQL/MariaDB |
| ZTS Control | Laravel / PHP |

## Tecnologías

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) y `@gsap/react` para animaciones
- `react-responsive` para diseño adaptable
- ESLint para análisis de código
- `gh-pages` para el despliegue

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/gilfajardo/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run deploy` | Compila y publica en GitHub Pages |

## Estructura del proyecto

```
portfolio/
├── constants/        # Datos del sitio (enlaces, proyectos, certificaciones)
├── public/           # Archivos estáticos: imágenes, videos y fuentes
├── src/
│   ├── components/   # Navbar, Hero, Cocktails, About, Art, Menu
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css     # Estilos globales y Tailwind
├── index.html
└── vite.config.js
```

## Personalización

Los textos y proyectos se editan en [constants/index.js](constants/index.js). Para agregar un proyecto, añade un objeto a `allCocktails` con `name`, `image`, `title`, `description` y `proyecto` (URL del repositorio); opcionalmente `image2` o `video`.

## Despliegue

```bash
npm run deploy
```

Compila el proyecto y publica `dist/` en la rama `gh-pages`.
