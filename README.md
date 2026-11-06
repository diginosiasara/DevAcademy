# DevAcademy · Curso de Programación Orientada a Objetos
*Tu talento, tu código, tu futuro.*

## Arquitectura (una responsabilidad por archivo)
| Capa | Archivos | Responsabilidad |
|---|---|---|
| Datos | `data/content.js`, `data/site.js` | Contenido del curso (del Word) y configuración del sitio |
| Generación | `build/templates.mjs`, `build/build.mjs` | Plantillas puras → HTML estático, sitemap, robots, manifest |
| Estilos | `css/tokens` · `base` · `layout` · `components` · `animations` | Diseño por capas; el movimiento está aislado |
| Comportamiento | `js/main` · `store` · `progress` · `search` · `theme` · `reveal` · `analytics` | Mejora progresiva (la web funciona sin JS) |
| Offline | `sw.js` | Caché de recursos |

## Uso
1. Edita `data/site.js` (pon tu dominio en `url`) y `data/content.js` (lecciones).
2. `node build/build.mjs` regenera todas las páginas, `sitemap.xml` y `robots.txt`.
3. Sirve por HTTP (los módulos JS no cargan desde `file://`): `npx serve .`

## SEO / SEM / buenas prácticas
- HTML estático por lección, con `title`, `description`, canonical, Open Graph y Twitter Card únicos.
- Datos estructurados JSON-LD: Course, FAQPage, ItemList, LearningResource, BreadcrumbList.
- `sitemap.xml`, `robots.txt`, `404.html` (noindex), manifest PWA, service worker.
- SEM: eventos `cta_click` y `lesson_complete` en `window.dataLayer` (listo para GTM/Ads/GA4 tras el consentimiento).
- Accesibilidad: enlace de salto, un h1 por página, migas, `aria-current`, objetivos táctiles ≥44 px, foco visible, `prefers-reduced-motion`.
- Pendiente antes de producción: imagen `og:image` en PNG 1200×630 y el dominio real.
