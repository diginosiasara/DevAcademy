# DevAcademy · Curso de Programación Orientada a Objetos
*Tu talento, tu código, tu futuro.*

## Arquitectura (una responsabilidad por archivo)
| Capa | Archivos | Responsabilidad |
|---|---|---|
| Datos | `data/content.js`, `data/lessons/m1…m10.js`, `data/glossary.js`, `data/site.js` | 82 lecciones en 13 módulos (un archivo por módulo, más `extra.js` y `extra2.js`), glosario de 118 términos, apuntes de repaso (`repaso.js`) y configuración |
| Resaltado | `build/highlight.mjs` | Colorea código Java y SQL en la compilación |
| Generación | `build/templates.mjs`, `build/repaso.mjs`, `build/build.mjs` | Plantillas puras → HTML estático, sitemap, robots, manifest |
| Estilos | `css/tokens` · `base` · `layout` · `components` · `animations` | Diseño por capas; el movimiento está aislado |
| Comportamiento (fuentes) | `src/js/`: `main` · `store` · `progress` · `filter` · `search-engine` · `search-ui` · `theme` · `reveal` · `analytics` · `repaso` | Mejora progresiva (la web funciona sin JS) |
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

## Contenido
Basado en MF0227_3: UF2404 (Principios de la POO, UD1–UD9), UF2405 (Modelo de programación web y bases de datos), UF2406 (El ciclo de vida del desarrollo de aplicaciones), Booch (Análisis y diseño orientado a objetos) y la guía de INTECO sobre metodologías y ciclos de vida. Cubre UF2404 completo (UD1–UD9) y UF2405 completo (UD1–UD7), más el tutorial de entorno (JDK, NetBeans, MySQL). Cada lección tiene ideas clave, ejemplos en Java/SQL, práctica y autoevaluación; el glosario enlaza cada término con su lección.


## Apuntes de repaso (repaso.html)
Página con la guía visual de estudio para el examen: 20 unidades (UF2404, UF2405 y UF2406) con esquemas (`img/guia/`), tablas de repaso, cuadros «idea clave / ojo / truco», 74 preguntas de autotest corregibles en pantalla (`src/js/repaso.js`), marca «dominada» por unidad (se guarda en `localStorage`, clave `devacademy:repaso`) y chuleta final. Los datos están en `data/repaso.js` y la plantilla en `build/repaso.mjs`. Cada unidad entra también en el buscador. El mismo contenido se puede descargar en Word desde `descargas/Guia_visual_estudio_UF2404_UF2405_UF2406.docx`.
