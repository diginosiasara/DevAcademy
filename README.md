# DevAcademy · Curso de Programación Orientada a Objetos
*Tu talento, tu código, tu futuro.*

## Arquitectura (una responsabilidad por archivo)
| Capa | Archivos | Responsabilidad |
|---|---|---|
| Datos | `data/content.js`, `data/site.js` | Contenido del curso (del Word) y configuración del sitio |
| Generación | `build/templates.mjs`, `build/build.mjs` | Plantillas puras → HTML estático, sitemap, robots, manifest |
| Estilos | `css/tokens` · `base` · `layout` · `components` · `animations` | Diseño por capas; el movimiento está aislado |
| Comportamiento (fuentes) | `src/js/`: `main` · `store` · `progress` · `filter` · `search-engine` · `search-ui` · `theme` · `reveal` · `analytics` | Mejora progresiva (la web funciona sin JS) |
| Indexación | `build/search-index.mjs` | Convierte lecciones y apartados (h2) en documentos de búsqueda |
| Salida generada | `js/app.js`, `js/search-index.js`, `search-index.json` | Script único y índice; funcionan también abriendo el HTML en local |
| Offline | `sw.js` | Caché de recursos |

## Uso
0. `npm install` (instala esbuild, que empaqueta el JS).
1. Edita `data/site.js` (pon tu dominio en `url`) y `data/content.js` (lecciones).
2. `npm run build` regenera páginas, índice de búsqueda, `js/app.js`, `sitemap.xml` y `robots.txt`.
3. Abre `index.html` directamente o sirve con `npx serve .`

## SEO / SEM / buenas prácticas
- HTML estático por lección, con `title`, `description`, canonical, Open Graph y Twitter Card únicos.
- Datos estructurados JSON-LD: Course, FAQPage, ItemList, LearningResource, BreadcrumbList.
- `sitemap.xml`, `robots.txt`, `404.html` (noindex), manifest PWA, service worker.
- SEM: eventos `cta_click` y `lesson_complete` en `window.dataLayer` (listo para GTM/Ads/GA4 tras el consentimiento).
- Accesibilidad: enlace de salto, un h1 por página, migas, `aria-current`, objetivos táctiles ≥44 px, foco visible, `prefers-reduced-motion`.
- Pendiente antes de producción: imagen `og:image` en PNG 1200×630 y el dominio real.

## Buscador
- Índice por lección **y por apartado**, con enlace directo a la sección que mejor responde.
- Tolera erratas, tildes, plurales, sinónimos y palabras vacías; ofrece «¿quisiste decir…?».
- Combobox ARIA 1.2, avisos en región viva, atajo `/`, teclas ↑ ↓ Inicio Fin Intro Esc.
- Sinónimos editables en `src/js/search-engine.js` (`SYN`).
