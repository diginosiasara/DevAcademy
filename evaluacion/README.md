# Simulacro · Programación orientada a objetos (UF2405 · UF2406)

Abre `index.html` (sin servidor y sin conexión). Para los enlaces del Panel de conocimiento, descomprime `manuales.zip` para que existan `manuales/` y `manuales/extras/` junto a las páginas.

## Páginas (una por pantalla)
| Archivo | Pantalla | Controlador |
|---|---|---|
| `index.html` | Configurar simulacro | `js/pages/config.page.js` |
| `simulacro.html` | Simulacro en curso (sobrevive a recargas) | `js/pages/run.page.js` |
| `resultados.html` | Resultado y corrección | `js/pages/results.page.js` |
| `conocimiento.html` | Panel de conocimiento | `js/pages/knowledge.page.js` |
| `banco.html` | Banco con soluciones | `js/pages/bank.page.js` |
| `progreso.html` | Progreso y copia de seguridad | `js/pages/progress.page.js` |

Cada página carga solo los scripts y hojas de estilo que necesita (la lista está en su propio HTML, en orden de dependencia). El estado del simulacro viaja entre páginas por `sessionStorage` (`services/runstore.js`); el historial, en `localStorage`.

## Capas y responsabilidad única
| Capa | Archivos | Hace | No hace |
|---|---|---|---|
| `data/` | `questions`, `catalog`, `knowledge` | Contenido: 184 preguntas, unidades con temario y páginas del manual, puntos clave | Lógica |
| `js/core/` | `utils`, `storage`, `records`, `prefs`, `backup` | Utilidades puras; acceso a Storage; historial y fallos; preferencias; exportar/importar validado | DOM, reglas de negocio |
| `js/domain/` | `bank`, `difficulty`, `scoring`, `session`, `stats`, `settings`, `selection` | Reglas: consulta, dificultad adaptativa, puntuación, máquina de estados, estadísticas, ajustes, selección | DOM, almacenamiento |
| `js/services/` | `routes`, `runstore`, `launcher`, `clock`, `download` | Efectos del entorno: navegación, estado entre páginas, orquestación, temporizador, descargas | Pintar, reglas |
| `js/ui/` | `icons`, `components`, `charts`, `a11y`, `dialog`, `theme`, `layout` | Piezas visuales y accesibilidad transversales; estructura común (cabecera, navegación, región viva, diálogo) | Reglas, datos |
| `js/views/` | `*.view.js` | Plantillas HTML puras: reciben un modelo y devuelven HTML escapado | Eventos, almacenamiento |
| `js/pages/` | `*.page.js` | Controladores: arman el modelo, pintan la vista, enlazan eventos, navegan | HTML, reglas |

Sentido de las dependencias: `pages → views/ui/services/domain/core`; `domain → core`; `core` no depende de nada. Las vistas no llaman al almacenamiento ni al dominio de escritura.

## CSS
`css/tokens.css` (colores, temas) → `base.css` (reset, tipografía, foco) → `layout.css` (cabecera, navegación) → `components.css` (botones, tarjetas, anillos, tablas) → `css/pages/<página>.css` (solo esa pantalla).

## Accesibilidad y usabilidad
Enlace "Saltar al contenido"; navegación con enlaces reales (`aria-current`) y botón Atrás del navegador funcional; título de página distinto por pantalla; foco al encabezado al cargar resultados, conocimiento, banco y progreso; opciones como radios nativos en `fieldset/legend`; correcto/incorrecto con texto y símbolo; región `aria-live` (el cronómetro solo avisa a 5 y 1 min); tiempo ampliable (+50 %, +100 %); sin atajos de una sola tecla; objetivos ≥ 44 px; contraste AA en tema claro/oscuro; `prefers-reduced-motion`; modo de alto contraste; `<dialog>` nativo; gráficos con valores en `aria-label` y tabla alternativa; recargar no pierde el simulacro en curso.
