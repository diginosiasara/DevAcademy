/* SEARCH ENGINE: lógica pura (sin DOM). Puntuación tipo TF-IDF por campos con tolerancia a erratas.
   - Insensible a tildes/mayúsculas · prefijos · plurales · sinónimos · palabras vacías · "¿quisiste decir?"
   - Indexa apartados (h2) y código, y devuelve enlaces profundos a la sección más relevante. */
const FROM = "áàäâéèëêíìïîóòöôúùüûñ", TO = "aaaaeeeeiiiioooouuuun";
export const norm = (s) => s.toLowerCase().replace(/[áàäâéèëêíìïîóòöôúùüûñ]/g, (c) => TO[FROM.indexOf(c)]); // 1 a 1: conserva posiciones
const tok = (s) => norm(s).split(/[^a-z0-9+#]+/).filter(Boolean);
const STOP = new Set("a al algo ante como con cual cuando de del e el ella en entre es esta este esto la las lo los me mi muy ni no o para por que se si sin sobre su sus te tu un una uno y ya".split(" "));
const SYN = { error: ["excepcion"], errores: ["excepcion"], fallo: ["excepcion"], basura: ["garbage", "memoria"], bd: ["base de datos", "relacional"], sql: ["relacional"], datos: ["persistencia"],
  subclase: ["herencia", "extends"], padre: ["herencia"], hijo: ["herencia"], privado: ["encapsulacion", "private"], ocultar: ["encapsulacion", "abstraccion"], oculta: ["encapsulacion"],
  poo: ["objetos"], oop: ["objetos"], metodo: ["mensaje"], funcion: ["metodo"], atributo: ["estado"], variable: ["estado"], sobreescritura: ["override", "polimorfismo"], interfaz: ["encapsulacion"],
  java: ["class"], constructor: ["new"], web: ["capas"], tabla: ["relacional"] };
export const terms = (q) => { const t = tok(q).filter((x) => x.length > 1 || /\d/.test(x)), f = t.filter((x) => !STOP.has(x)); return f.length ? f : t; };
const stem = (t) => t.replace(/(ciones|cion|es|s)$/, "");
const variants = (t) => { const out = new Map([[t, 1]]); const s = stem(t); if (s.length > 2) out.set(s, .9); (SYN[t] || SYN[s] || []).forEach((v) => out.set(norm(v), .7)); return [...out]; };

function lev(a, b, max) { // Levenshtein con corte temprano
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) { const cur = [i]; let min = i;
    for (let j = 1; j <= b.length; j++) { cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); min = Math.min(min, cur[j]); }
    if (min > max) return max + 1; prev = cur; }
  return prev[b.length];
}
const W = { title: 8, tags: 5, heads: 4, summary: 2.5, code: 2, text: 1 };
const field = (s) => { const str = norm(s); return { str, toks: new Set(tok(str)) }; };
function prep(docs) {
  const vocab = new Map();
  const out = docs.map((d) => { const f = { title: field(d.title), tags: field(d.tags.join(" ")), heads: field(d.heads.join(" ")), summary: field(d.summary), code: field(d.code), text: field(d.text) };
    for (const k of ["title", "tags", "heads", "text"]) f[k].toks.forEach((t) => t.length > 3 && vocab.set(t, (vocab.get(t) || 0) + (k === "text" ? 1 : 5)));
    return { ...d, f }; });
  return { docs: out, vocab, byId: new Map(out.map((d) => [d.id, d])) };
}
let cache;
export function loadIndex(root = "") {
  cache ??= new Promise((res, rej) => {
    if (window.DA_INDEX) return res(prep(window.DA_INDEX)); // funciona también abriendo el archivo en local (sin servidor)
    const s = document.createElement("script"); s.src = root + "js/search-index.js";
    s.onload = () => res(prep(window.DA_INDEX));
    s.onerror = () => fetch(root + "search-index.json").then((r) => r.json()).then((d) => res(prep(d))).catch(rej);
    document.head.append(s);
  });
  return cache;
}
function match(t, fl) { // 0..1
  if (fl.toks.has(t)) return 1;
  let best = 0;
  for (const k of fl.toks) {
    if (k.startsWith(t)) best = Math.max(best, .85);
    else if (t.length > 3 && k.includes(t)) best = Math.max(best, .5);
    else if (t.length > 3 && k.length > 3 && best < .45 && lev(t, k, t.length > 7 ? 2 : 1) <= (t.length > 7 ? 2 : 1)) best = .45;
    if (best >= .85) break;
  }
  return best;
}
export function search(ix, query, limit = 20) {
  const ts = terms(query); if (!ts.length) return Object.assign([], { ts, dym: null });
  const N = ix.docs.length, raw = ix.docs.map(() => []), df = ts.map(() => 0);
  ix.docs.forEach((d, i) => ts.forEach((t, ti) => {
    let best = 0;
    for (const [v, vw] of variants(t)) { let top = 0, sum = 0;
      for (const k in W) { const m = match(v, d.f[k]) * vw * W[k]; top = Math.max(top, m); sum += m; }
      best = Math.max(best, top + .15 * (sum - top)); }
    raw[i][ti] = best; if (best) df[ti]++; }));
  const idf = df.map((n) => Math.log(1 + N / (1 + n)));
  const q0 = norm(query.trim()), scored = [];
  ix.docs.forEach((d, i) => { let s = 0, hits = 0;
    raw[i].forEach((m, ti) => { if (m) { hits++; s += m * idf[ti]; } });
    if (!hits) return;
    if (hits === ts.length) s *= 1.6; if (ts.length > 1 && d.f.title.str.includes(q0)) s *= 1.4; else if (ts.length > 1 && d.f.text.str.includes(q0)) s *= 1.2;
    scored.push({ d, s, hits }); });
  const groups = new Map();
  scored.forEach((r) => { const g = groups.get(r.d.lesson) || { lesson: null, sections: [] }; r.d.kind === "lesson" ? (g.lesson = r) : g.sections.push(r); groups.set(r.d.lesson, g); });
  const res = [...groups.values()].map((g) => {
    const secs = g.sections.sort((a, b) => b.s - a.s), top = secs[0], les = g.lesson || { d: ix.byId.get(top.d.lesson), s: 0, hits: 0 };
    const target = top && top.s > les.s * .85 ? top.d : les.d; // enlace profundo al apartado si es el que mejor responde
    return { lesson: les.d, target, score: Math.max(les.s, top ? top.s : 0), sections: secs.filter((x) => x.hits === Math.max(1, Math.min(ts.length, top.hits))).slice(0, 3).map((x) => x.d), ts };
  }).sort((a, b) => b.score - a.score || a.lesson.order - b.lesson.order).slice(0, limit);
  res.ts = ts; res.dym = res.length ? null : didYouMean(ix, ts);
  return res;
}
function didYouMean(ix, ts) {
  const fixed = ts.map((t) => { if (ix.vocab.has(t)) return t; let best = null, bd = 99, bf = 0;
    for (const [k, f] of ix.vocab) { const d = lev(t, k, 2); if (d < bd || (d === bd && f > bf)) { best = k; bd = d; bf = f; } }
    return bd <= 2 ? best : null; });
  return fixed.every(Boolean) && fixed.join(" ") !== ts.join(" ") ? fixed.join(" ") : null;
}
/* Fragmento con más coincidencias, como partes [texto, resaltado]; resalta la palabra completa. */
export function snippet(doc, ts, size = 170) {
  const t = doc.text, n = norm(t), spots = [];
  const vs = ts.flatMap((x) => variants(x).map((v) => v[0]));
  vs.forEach((v) => { for (let i = n.indexOf(v); i >= 0; i = n.indexOf(v, i + 1)) { let a = i, b = i + v.length; while (a > 0 && /[a-z0-9]/.test(n[a - 1])) a--; while (b < n.length && /[a-z0-9]/.test(n[b])) b++; spots.push([a, b]); i = Math.max(i, b - 1); } });
  spots.sort((x, y) => x[0] - y[0]);
  let start = 0, bestN = -1;
  for (const [a] of spots) { const c = spots.filter(([x]) => x >= a && x < a + size).length; if (c > bestN) { bestN = c; start = Math.max(0, a - 35); } }
  while (start > 0 && t[start - 1] !== " ") start--; // no cortar palabras
  let end = Math.min(t.length, start + size); while (end < t.length && t[end] !== " ") end++;
  const parts = []; let p = start;
  for (const [a, b] of spots) { if (a < p || a >= end) continue; parts.push([t.slice(p, a), false], [t.slice(a, Math.min(b, end)), true]); p = Math.min(b, end); }
  parts.push([t.slice(p, end), false]);
  const out = parts.filter((x) => x[0]); if (start > 0) out.unshift(["… ", false]); if (end < t.length) out.push([" …", false]); return out;
}
