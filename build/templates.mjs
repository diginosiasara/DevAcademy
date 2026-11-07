/* TEMPLATES: funciones puras datos -> HTML. Sin escribir archivos ni tocar el DOM. */
import { SITE } from "../data/site.js";
import { MODULES, LESSONS } from "../data/content.js";
const J = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
const strip = (s) => s.replace(/<[^>]+>/g, "");
export const mod = (id) => MODULES.find((m) => m.id === id);

export function layout({ title, desc, path, depth = 0, body, ld = [], active = "", bodyAttrs = "", type = "website", robots = "index,follow,max-image-preview:large" }) {
  const root = "../".repeat(depth), url = SITE.url + "/" + path;
  return `<!DOCTYPE html>
<html lang="${SITE.lang}" data-root="${root}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${robots}"><meta name="theme-color" content="${SITE.themeColor}">
<meta property="og:type" content="${type}"><meta property="og:site_name" content="${SITE.name}"><meta property="og:locale" content="${SITE.locale}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}">
<link rel="icon" href="${root}favicon.svg" type="image/svg+xml"><link rel="manifest" href="${root}manifest.webmanifest"><link rel="search" type="application/opensearchdescription+xml" title="${SITE.name}" href="${root}opensearch.xml">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Sora:wght@400;600;800&display=swap">
${["tokens", "base", "layout", "components", "wiki", "search", "animations"].map((f) => `<link rel="stylesheet" href="${root}css/${f}.css">`).join("\n")}
<script>document.documentElement.classList.add("js");try{var t=localStorage.getItem("devacademy:theme");if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
${ld.map(J).join("\n")}
<script defer src="${root}js/app.js"></script>
</head>
<body ${bodyAttrs}>
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="top"><div class="wrap">
<a class="logo" href="${root}index.html" aria-label="${SITE.name}, inicio">Dev<b>Academy</b></a>
<form class="search" role="search" action="${root}buscar.html" method="get"><label for="q" class="sr">Buscar en el curso</label>
<input id="q" name="q" type="search" role="combobox" aria-expanded="false" aria-controls="sugg" aria-autocomplete="list" aria-haspopup="listbox" aria-describedby="q-help" autocomplete="off" enterkeyhint="search" placeholder="Buscar en el curso…">
<span id="q-help" class="sr">Escribe para ver sugerencias. Flechas arriba y abajo para moverte, Intro para abrir, Escape para cerrar. Atajo: barra inclinada.</span>
<ul id="sugg" role="listbox" aria-label="Sugerencias de búsqueda" hidden></ul></form>
<nav class="nav" aria-label="Principal"><a href="${root}index.html"${active === "inicio" ? ' aria-current="page"' : ""}>Inicio</a><a href="${root}temario.html"${active === "temario" ? ' aria-current="page"' : ""}>Temario</a>
<button class="btn" id="theme" type="button" aria-pressed="false" aria-label="Cambiar a tema claro u oscuro">◐<span class="hide-sm"> Tema</span></button></nav>
</div></header>
<main id="contenido" tabindex="-1"><div class="wrap">${body}</div></main>
<footer class="foot"><div class="wrap"><p><strong>${SITE.name}</strong> · ${SITE.slogan}</p><p>Contenido adaptado del Compendio de manuales UF2404–UF2406. Tu progreso se guarda solo en este navegador.</p></div></footer>
<div class="sr" role="status" aria-live="polite" id="live"></div>
</body></html>`;
}

const card = (l, i) => `<li class="reveal" style="--i:${i}"><article class="card" data-mod="${l.m}" data-lesson-id="${l.id}"><span class="num">LECCIÓN ${String(LESSONS.indexOf(l) + 1).padStart(2, "0")}</span><h3><a href="lecciones/${l.id}.html">${l.t}</a></h3><p>${l.s}</p>${l.tags.map((t) => `<span class="tag">${t}</span>`).join("")}<p class="status">Pendiente</p><p><small>${l.min} min</small></p></article></li>`;
const fixLinks = (h) => h; // los enlaces de tarjeta se ajustan por nivel en cada página

export const FAQ = [
  ["¿Necesito saber programar antes?", "No. El curso parte de la abstracción y los paradigmas y avanza hasta herencia, polimorfismo y excepciones con ejemplos en Java."],
  ["¿Cuánto dura el curso de programación orientada a objetos?", `Son ${LESSONS.length} lecciones de unos ${LESSONS.reduce((a, l) => a + l.min, 0)} minutos de lectura en total, más ejercicios de autoevaluación.`],
  ["¿Se guarda mi progreso?", "Sí, en tu propio navegador. No necesitas crear cuenta ni compartir datos."],
  ["¿Qué lenguaje se usa en los ejemplos?", "Java, por ser un lenguaje orientado a objetos de uso extendido; los conceptos se aplican igual en C#, Python o PHP."],
];

export function home() {
  const mins = LESSONS.reduce((a, l) => a + l.min, 0);
  const body = `<section class="hero" aria-labelledby="h1"><div><p class="lema">&lt;/&gt; ${SITE.slogan}</p>
<h1 id="h1" tabindex="-1">Aprende <span class="grad">programación orientada a objetos</span> paso a paso</h1>
<p class="lead">Un temario tipo wiki con lecciones cortas como entradas de blog, ejemplos en Java y autoevaluación en cada tema.</p>
<ul class="stats"><li><b>${MODULES.length}</b> módulos</li><li><b>${LESSONS.length}</b> lecciones</li><li><b>${mins}</b> min</li></ul>
<p><a class="btn p" href="lecciones/${LESSONS[0].id}.html" data-cta="empezar-hero">Empezar ahora →</a> <a class="btn" href="temario.html" data-cta="ver-temario">Ver temario</a></p></div>
<div class="term" aria-hidden="true"><div class="bar"><i></i><i></i><i></i></div><pre><code><span class="c">// DevAcademy · Persona.java</span>
<span class="k">class</span> Persona {
  <span class="k">private</span> String talento;
  <span class="k">void</span> programar() {
    System.out.println(<span class="s">"Tu futuro"</span>);<span class="cursor"></span>
  }
}</code></pre></div></section>
<h2 class="reveal">Cómo aprenderás</h2><ul class="grid">${[["1 · Lee", "Lecciones breves con índice, términos clave y fuente del compendio.", "m1"], ["2 · Practica", "Ejemplos de código listos para copiar y probar.", "m2"], ["3 · Comprueba", "Una pregunta de autoevaluación y progreso guardado.", "m3"]].map((c, i) => `<li class="reveal" style="--i:${i}"><div class="card" data-mod="${c[2]}"><h3>${c[0]}</h3><p>${c[1]}</p></div></li>`).join("")}</ul>
<h2 class="reveal">Módulos del curso</h2><ul class="grid mods">${MODULES.map((m, i) => `<li class="reveal" style="--i:${i}"><div class="card" data-mod="${m.id}"><h3>${m.t}</h3><p>${m.d}</p><a href="temario.html#${m.id}">${LESSONS.filter((l) => l.m === m.id).length} lecciones →</a></div></li>`).join("")}</ul>
<h2 class="reveal">Preguntas frecuentes</h2>${FAQ.map((f) => `<details class="reveal"><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}
<section class="cta reveal"><h2 style="margin-top:0">Tu talento, tu código, tu futuro.</h2><p class="lead" style="margin-inline:auto">Empieza hoy la primera lección. Sin registro, sin coste.</p><a class="btn p" href="lecciones/${LESSONS[0].id}.html" data-cta="empezar-final">Empezar el curso →</a></section>`;
  return layout({ title: `${SITE.name} · Curso de ${SITE.course} gratis`, desc: "Aprende programación orientada a objetos paso a paso: abstracción, clases, herencia, polimorfismo y excepciones con ejemplos en Java. Tu talento, tu código, tu futuro.", path: "", body, active: "inicio",
    ld: [{ "@context": "https://schema.org", "@type": "Course", name: SITE.course, description: "Curso de POO con ejemplos en Java.", inLanguage: "es", provider: { "@type": "Organization", name: SITE.name, url: SITE.url, slogan: SITE.slogan }, hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `PT${mins}M` }, isAccessibleForFree: true },
      { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.url + "/", inLanguage: "es", potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: `${SITE.url}/buscar.html?q={search_term_string}` }, "query-input": "required name=search_term_string" } },
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f[0], acceptedAnswer: { "@type": "Answer", text: f[1] } })) }] });
}

export function temario() {
  const body = `<h1 id="h1" tabindex="-1">Temario del <span class="grad">curso</span></h1><p class="lead">Progreso: <strong id="pct">0%</strong></p>
<div class="meter" role="progressbar" aria-label="Progreso del curso" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i id="meter"></i></div>
<p style="margin-top:1.5rem"><label for="bus" class="sr">Buscar lección</label><input id="bus" type="search" placeholder="Buscar: herencia, excepciones, memoria…" autocomplete="off"></p>
${MODULES.map((m) => `<section id="${m.id}" data-module data-mod="${m.id}" aria-labelledby="t-${m.id}"><h2 id="t-${m.id}">${m.t}</h2><p>${m.d}</p><ul class="grid">${LESSONS.filter((l) => l.m === m.id).map(card).join("")}</ul></section>`).join("")}`;
  return layout({ title: `Temario · ${SITE.name}`, desc: "Temario completo del curso de programación orientada a objetos: 5 módulos y 10 lecciones, de la abstracción a la persistencia.", path: "temario.html", body, active: "temario", bodyAttrs: `data-total="${LESSONS.length}" data-ids="${LESSONS.map((l) => l.id)}"`,
    ld: [{ "@context": "https://schema.org", "@type": "ItemList", itemListElement: LESSONS.map((l, i) => ({ "@type": "ListItem", position: i + 1, name: l.t, url: `${SITE.url}/lecciones/${l.id}.html` })) }] });
}

export function lesson(l) {
  const i = LESSONS.indexOf(l), m = mod(l.m), p = LESSONS[i - 1], n = LESSONS[i + 1], num = String(i + 1).padStart(2, "0");
  const toc = [...l.h.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)];
  const html = l.h.replace(/<h2 id="([^"]+)">(.*?)<\/h2>/g, '<h2 id="$1">$2<a class="anchor" href="#$1" aria-label="Enlace directo a la sección $2">#</a></h2>').replace(/<pre>/g, '<pre data-lang="Java" tabindex="0" role="region" aria-label="Ejemplo de código">');
  const tocLinks = toc.map((t) => `<li><a href="#${t[1]}">${t[2]}</a></li>`).join("");
  const body = `<div class="readbar" aria-hidden="true"></div><nav class="crumbs" aria-label="Migas de pan"><ol><li><a href="../index.html">Inicio</a></li><li><a href="../temario.html">Temario</a></li><li><a href="../temario.html#${m.id}">${m.t}</a></li><li aria-current="page">${l.t}</li></ol></nav>
<div class="layout wiki" data-mod="${l.m}"><aside aria-label="Lecciones del curso"><details class="course-nav" open><summary>Lecciones del curso <span class="mp" data-mod-ids="${LESSONS.map((y) => y.id)}"></span></summary><nav aria-label="Lecciones">${MODULES.map((x) => { const ls = LESSONS.filter((y) => y.m === x.id); return `<strong data-mod="${x.id}"><span>${x.t}</span><span class="mp" data-mod-ids="${ls.map((y) => y.id)}"></span></strong><ol>${ls.map((y) => `<li data-lesson-id="${y.id}" data-mod="${x.id}"><a href="${y.id}.html"${y === l ? ' aria-current="page"' : ""}>${y.t}</a></li>`).join("")}</ol>`; }).join("")}</nav></details></aside>
<article class="prose"><header class="lesson-head" data-n="${num}"><p>${l.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</p><h1 id="h1" tabindex="-1">${l.t}</h1><p class="lead">${l.s}</p>
<dl class="facts"><div><dt>Módulo</dt><dd><a href="../temario.html#${m.id}">${m.t}</a></dd></div><div><dt>Lección</dt><dd>${i + 1} de ${LESSONS.length}</dd></div><div><dt>Lectura</dt><dd>${l.min} min</dd></div><div><dt>Fuente</dt><dd>${l.src}</dd></div></dl></header>
<details class="toc-inline" open><summary>En esta lección</summary><ul>${tocLinks}</ul></details>${html}
<details class="q"><summary>Autoevaluación</summary><p><strong>${l.q[0]}</strong></p><p>${l.q[1]}</p></details>
<p><button class="btn p" id="done" type="button" data-id="${l.id}" aria-pressed="false">Marcar como completada</button></p>
<nav class="pager" aria-label="Navegación entre lecciones">${p ? `<a class="pg prev" rel="prev" href="${p.id}.html"><small>← Anterior</small><span>${p.t}</span></a>` : "<span></span>"}${n ? `<a class="pg next" rel="next" href="${n.id}.html" data-cta="siguiente"><small>Siguiente →</small><span>${n.t}</span></a>` : `<a class="pg next" href="../temario.html"><small>Fin del curso</small><span>Volver al temario</span></a>`}</nav></article>
<aside class="toc-side" aria-label="En esta lección"><nav aria-label="En esta lección"><strong>En esta lección</strong><ul>${tocLinks}</ul></nav></aside></div>`;
  const url = `${SITE.url}/lecciones/${l.id}.html`;
  return layout({ title: `${l.t} · ${m.t} | ${SITE.name}`, desc: l.s + " Curso de programación orientada a objetos.", path: `lecciones/${l.id}.html`, depth: 1, body, type: "article", active: "temario", bodyAttrs: `data-total="${LESSONS.length}" data-ids="${LESSONS.map((x) => x.id)}"`,
    ld: [{ "@context": "https://schema.org", "@type": "LearningResource", headline: l.t, description: l.s, inLanguage: "es", keywords: l.tags.join(", "), timeRequired: `PT${l.min}M`, isPartOf: { "@type": "Course", name: SITE.course }, publisher: { "@type": "Organization", name: SITE.name }, url },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [["Inicio", SITE.url + "/"], ["Temario", SITE.url + "/temario.html"], [l.t, url]].map((c, k) => ({ "@type": "ListItem", position: k + 1, name: c[0], item: c[1] })) }] });
}

export function searchPage() {
  const body = `<h1 id="h1" tabindex="-1">Buscar en el curso</h1><p id="summary" class="lead">Cargando resultados…</p>
<noscript><p>La búsqueda necesita JavaScript. Puedes recorrer todas las lecciones desde el <a href="temario.html">temario</a>.</p></noscript>
<ol id="results" class="results" aria-label="Resultados de búsqueda"></ol>
<p>¿No encuentras lo que buscas? Consulta el <a href="temario.html">temario completo</a>.</p>`;
  return layout({ title: `Buscar · ${SITE.name}`, desc: "Busca lecciones, conceptos y ejemplos del curso de programación orientada a objetos.", path: "buscar.html", body, robots: "noindex,follow" });
}
