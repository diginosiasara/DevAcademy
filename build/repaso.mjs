/* REPASO: plantilla pura datos -> HTML de la página «Apuntes de repaso» (repaso.html). */
import { SITE } from "../data/site.js";
import { REPASO, CHEAT } from "../data/repaso.js";
import { FIGS } from "../data/figs.js";
import { layout } from "./templates.mjs";
import { highlight } from "./highlight.mjs";

export const DOC = { file: "descargas/Guia_visual_estudio_UF2404_UF2405_UF2406.docx", name: "Guía visual de estudio (Word)", size: "1,4 MB" };
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const inline = (s) => { let out = "", last = 0; for (const m of s.matchAll(/\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*/g)) { const t = m[0]; out += esc(s.slice(last, m.index)) + (t.startsWith("**") ? `<strong>${esc(t.slice(2, -2))}</strong>` : t.startsWith("`") ? `<code>${esc(t.slice(1, -1))}</code>` : `<em>${esc(t.slice(1, -1))}</em>`); last = m.index + t.length; } return out + esc(s.slice(last)); };
const plain = (s) => s.replace(/\*\*|`|\*/g, "");
const LETTERS = ["A", "B", "C", "D"];
const CALL = { clave: ["n-clave", "Idea clave"], ojo: ["n-ojo", "Ojo"], truco: ["n-truco", "Truco"], ej: ["n-ej", "Ejemplo"] };
export const uid = (p, u) => `${p.code.toLowerCase()}-${u.id.toLowerCase()}`;

const table = (b, cap) => `<div class="scroll"><table><caption class="sr">${esc(cap)}</caption><thead><tr>${b.head.map((h) => `<th scope="col">${inline(h)}</th>`).join("")}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join("")}</tr>`).join("")}</tbody></table></div>`;

function block(b, cap) {
  switch (b.t) {
    case "p": return `<p>${inline(b.x)}</p>`;
    case "h3": return `<h4>${inline(b.x)}</h4>`;
    case "b": return `<ul>${b.items.map((i) => `<li>${inline(i)}</li>`).join("")}</ul>`;
    case "fig": return `<figure class="fig"><img src="img/guia/${b.f}" width="${FIGS[b.f][0]}" height="${FIGS[b.f][1]}" alt="${esc(b.cap)}" loading="lazy" decoding="async"><figcaption>${esc(b.cap)}</figcaption></figure>`;
    case "tbl": return table(b, cap);
    case "call": { const [c, l] = CALL[b.k]; return `<div class="note ${c}"><strong>${l}:</strong> ${inline(b.x)}</div>`; }
    case "code": { const r = highlight(esc(b.x)); return `<pre data-lang="${r.lang}" tabindex="0" role="region" aria-label="Ejemplo de código ${r.lang}"><code>${r.html}</code></pre>`; }
    default: return "";
  }
}

const quiz = (u, id) => `<section class="rp-test" aria-labelledby="t-${id}"><h4 id="t-${id}">Autotest ${u.id}</h4>${u.quiz.map((q, qi) => `<fieldset class="rq" data-a="${q.a}"><legend>${qi + 1}. ${inline(q.q)}</legend>${q.o.map((o, oi) => `<label><input type="radio" name="${id}-${qi}" value="${oi}"><span class="l">${LETTERS[oi]}</span><span>${inline(o)}</span></label>`).join("")}<details class="sol"><summary>Ver solución</summary><p><strong>Respuesta ${LETTERS[q.a]}.</strong> ${inline(q.e)}</p></details><p class="fb" role="status"></p></fieldset>`).join("")}</section>`;

export function repasoText(p, u) {
  const t = u.blocks.map((b) => (b.t === "tbl" ? b.head.concat(b.rows.flat()).join(" ") : b.t === "b" ? b.items.join(" ") : b.x || b.cap || "")).join(" ");
  return plain(t + " " + u.quiz.map((q) => q.q + " " + q.o.join(" ") + " " + q.e).join(" ")).replace(/\s+/g, " ");
}

export function repaso() {
  const nU = REPASO.reduce((a, p) => a + p.units.length, 0), nQ = REPASO.reduce((a, p) => a + p.units.reduce((x, u) => x + u.quiz.length, 0), 0);
  const ids = REPASO.flatMap((p) => p.units.map((u) => uid(p, u)));
  const toc = REPASO.map((p) => `<li><a href="#${p.code.toLowerCase()}">${p.code}</a><ul>${p.units.map((u) => `<li><a href="#${uid(p, u)}">${u.id} · ${esc(u.title)}</a></li>`).join("")}</ul></li>`).join("") + `<li><a href="#chuleta">Chuleta final</a></li>`;
  const parts = REPASO.map((p) => `<section id="${p.code.toLowerCase()}" class="rp-part" data-mod="repaso" aria-labelledby="h-${p.code}"><h2 id="h-${p.code}"><small>${p.code}</small>${esc(p.name)}</h2><p class="lead">${esc(p.intro)}</p>${p.units.map((u) => { const id = uid(p, u); return `<article id="${id}" class="rp-unit" aria-labelledby="h-${id}"><header><span class="tag">${u.id}</span><h3 id="h-${id}">${esc(u.title)}</h3><p class="hook">${esc(u.hook)}</p></header>${u.blocks.map((b) => block(b, `${u.id}: ${u.title}`)).join("")}${quiz(u, id)}<p class="rp-done"><button class="btn" type="button" data-rp="${id}" aria-pressed="false">Marcar como dominada</button></p></article>`; }).join("")}</section>`).join("");
  const cheat = `<section id="chuleta" class="rp-part" data-mod="repaso" aria-labelledby="h-chuleta"><h2 id="h-chuleta"><small>Última hora</small>Chuleta final</h2><p class="lead">Lo que conviene releer la víspera del examen. Los puertos distintos del 20/21 de FTP son valores estándar generales.</p>
<h3>Quién es quién</h3>${table({ head: ["Persona", "Se le asocia con…"], rows: CHEAT.quien }, "Quién es quién")}
<h3>Puertos y siglas imprescindibles</h3>${table({ head: ["Sigla", "Significado", "Sigla", "Significado"], rows: CHEAT.siglas }, "Puertos y siglas")}
<h3>Parejas que se confunden</h3>${table({ head: ["Par", "Diferencia en una línea"], rows: CHEAT.parejas }, "Parejas que se confunden")}
<p>¿Buscas una definición concreta? Consulta el <a href="glosario.html">glosario completo</a>.</p></section>`;
  const body = `<h1 id="h1" tabindex="-1">Apuntes de <span class="grad">repaso</span></h1>
<p class="lead">La guía visual de estudio para el examen: esquemas, tablas de repaso, cuadros «idea clave / ojo / truco» y un autotest por unidad de UF2404, UF2405 y UF2406.</p>
<ul class="stats"><li><b>${nU}</b> unidades</li><li><b>${nQ}</b> preguntas</li><li><b id="rp-pct">0%</b> dominado</li></ul>
<p class="rp-actions"><a class="btn p" href="${DOC.file}" download data-cta="descargar-guia-word">⬇ Descargar apuntes en Word (${DOC.size})</a> <a class="btn" href="#chuleta">Ir a la chuleta final</a></p>
<div class="layout wiki rp" data-rp-ids="${ids}"><aside aria-label="Índice del repaso"><nav aria-label="Índice del repaso"><strong>Índice</strong><ul class="rp-toc">${toc}</ul></nav></aside><div class="prose rp-main">${parts}${cheat}</div></div>`;
  return layout({ title: `Apuntes de repaso · ${SITE.name}`, desc: "Apuntes de repaso para el examen de UF2404, UF2405 y UF2406: esquemas visuales, tablas, trucos memotécnicos, autotest y chuleta final. Descargables en Word.", path: "repaso.html", body, active: "repaso", bodyAttrs: `data-total="0"`,
    ld: [{ "@context": "https://schema.org", "@type": "LearningResource", headline: "Apuntes de repaso: UF2404, UF2405 y UF2406", description: "Guía visual de estudio orientada al examen.", inLanguage: "es", learningResourceType: "study guide", isPartOf: { "@type": "Course", name: SITE.course }, publisher: { "@type": "Organization", name: SITE.name }, url: SITE.url + "/repaso.html" }] });
}
