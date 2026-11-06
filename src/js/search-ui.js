/* SEARCH UI: combobox accesible (ARIA 1.2, list autocomplete) + página de resultados.
   Lectores de pantalla: aria-activedescendant, aria-selected, aviso del nº de resultados en región viva. */
import { loadIndex, search, snippet, terms } from "./search-engine.js";
import { track } from "./analytics.js";
const $ = (s) => document.querySelector(s), root = document.documentElement.dataset.root || "";
const say = (msg) => { const l = $("#live"); if (l) { l.textContent = ""; setTimeout(() => (l.textContent = msg), 60); } };
const plural = (n, a, b) => `${n} ${n === 1 ? a : b}`;
const marked = (parts) => { const f = document.createDocumentFragment(); parts.forEach(([t, h]) => { if (h) { const m = document.createElement("mark"); m.textContent = t; f.append(m); } else f.append(t); }); return f; };
const el = (tag, attrs = {}, ...kids) => { const e = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => (k === "text" ? (e.textContent = v) : e.setAttribute(k, v))); e.append(...kids); return e; };
const label = (r) => r.target.heading ? `${r.lesson.title}, apartado ${r.target.heading}` : r.lesson.title;

export function initSearchUI() {
  const input = $("#q"), list = $("#sugg"); if (!input) return;
  let items = [], active = -1, timer, ixP, token = 0;
  const index = () => (ixP ??= loadIndex(root));
  const setActive = (i) => { active = i; [...list.children].forEach((li, k) => li.setAttribute("aria-selected", String(k === i)));
    if (i >= 0) { input.setAttribute("aria-activedescendant", list.children[i].id); list.children[i].scrollIntoView({ block: "nearest" }); } else input.removeAttribute("aria-activedescendant"); };
  const close = () => { list.hidden = true; input.setAttribute("aria-expanded", "false"); setActive(-1); };
  const open = () => { list.hidden = false; input.setAttribute("aria-expanded", "true"); };
  const results = (q) => `${root}buscar.html?q=${encodeURIComponent(q)}`;
  const go = (i) => { const it = items[i]; track("search_select", { q: input.value, lesson: it.url || "all" }); location.href = it.all ? results(input.value.trim()) : root + it.url; };
  async function suggest() {
    const q = input.value.trim(), me = ++token; if (!terms(q).length) return close();
    const res = search(await index(), q, 20); if (me !== token) return;
    items = res.slice(0, 5).map((r) => ({ url: r.target.url, text: r.lesson.title, sub: r.target.heading ? `${r.lesson.module} · apartado «${r.target.heading}»` : r.lesson.module, aria: label(r) + ", " + r.lesson.module }));
    if (res.length > 5) items.push({ all: true, text: `Ver los ${res.length} resultados`, sub: `Buscar «${q}» en todo el curso`, aria: `Ver los ${res.length} resultados de ${q}` });
    list.replaceChildren();
    items.forEach((it, i) => list.append(Object.assign(el("li", { id: "opt-" + i, role: "option", "aria-selected": "false", "aria-label": it.aria }, el("span", { text: it.text }), el("small", { text: it.sub })), {
      onmousedown: (e) => { e.preventDefault(); go(i); } })));
    if (!items.length) list.append(el("li", { role: "option", "aria-disabled": "true", text: res.dym ? `Sin resultados. ¿Quisiste decir «${res.dym}»?` : "Sin sugerencias" }));
    open(); setActive(-1);
    clearTimeout(timer); timer = setTimeout(() => say(items.length ? `${plural(res.length, "resultado", "resultados")}. Usa las flechas arriba y abajo para recorrer las sugerencias.` : res.dym ? `Sin resultados. ¿Quisiste decir ${res.dym}? Pulsa Intro para buscarlo.` : "Sin resultados. Pulsa Intro para buscar en todo el curso."), 500);
  }
  input.addEventListener("input", suggest);
  input.addEventListener("focus", () => index());
  input.addEventListener("keydown", (e) => {
    const n = list.hidden ? 0 : items.length;
    if (e.key === "ArrowDown") { e.preventDefault(); if (list.hidden) suggest(); else if (n) setActive((active + 1) % n); }
    else if (e.key === "ArrowUp" && n) { e.preventDefault(); setActive((active - 1 + n) % n); }
    else if (e.key === "Home" && n && active >= 0) { e.preventDefault(); setActive(0); }
    else if (e.key === "End" && n && active >= 0) { e.preventDefault(); setActive(n - 1); }
    else if (e.key === "Enter" && active >= 0) { e.preventDefault(); go(active); }
    else if (e.key === "Escape") { if (!list.hidden) { e.preventDefault(); close(); } else if (input.value) { input.value = ""; say("Búsqueda borrada"); } }
    else if (e.key === "Tab") close();
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); input.focus(); } });
  initResultsPage(input, index);
}

/* buscar.html?q=...: lista ordenada de resultados con encabezados navegables y apartados relacionados. */
async function initResultsPage(input, index) {
  const box = $("#results"); if (!box) return;
  const q = (new URLSearchParams(location.search).get("q") || "").trim(), h1 = $("#h1"), sum = $("#summary");
  input.value = q;
  if (!terms(q).length) { sum.textContent = "Escribe al menos una palabra para buscar."; return; }
  let res; try { res = search(await index(), q, 20); } catch { sum.textContent = "No se pudo cargar el índice de búsqueda. Consulta el temario."; return; }
  const msg = res.length ? `${plural(res.length, "resultado", "resultados")} para «${q}»` : `Sin resultados para «${q}»`;
  h1.textContent = msg; document.title = `${msg} · DevAcademy`; box.replaceChildren();
  sum.replaceChildren(res.length ? "Ordenados por relevancia." : "Revisa la ortografía o prueba con otra palabra, por ejemplo: herencia, clase, excepciones o memoria. ");
  if (res.dym) sum.append(el("br"), "¿Quisiste decir ", el("a", { href: `${root}buscar.html?q=${encodeURIComponent(res.dym)}`, text: res.dym }), "?");
  res.forEach((r) => {
    const art = el("article", { class: "card", "data-mod": r.lesson.mod }), h = el("h2");
    h.append(el("a", { href: root + r.target.url, text: r.lesson.title }));
    art.append(el("p", { class: "num", text: r.target.heading ? `${r.lesson.module} · apartado «${r.target.heading}»` : r.lesson.module }), h);
    art.append(el("p", {}, marked(snippet(r.target.kind === "section" ? r.target : r.lesson, r.ts))));
    const more = r.sections.filter((s) => s.id !== r.target.id);
    if (more.length) { const ul = el("ul", { "aria-label": "Apartados relacionados en esta lección", class: "also" }); more.forEach((s) => ul.append(el("li", {}, el("a", { href: root + s.url, text: s.heading })))); art.append(ul); }
    box.append(el("li", {}, art));
  });
  track("search", { q, results: res.length }); h1.focus(); say(msg + ".");
}
