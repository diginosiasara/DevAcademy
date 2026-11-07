/* SEARCH INDEX: única responsabilidad, convertir el contenido en documentos de búsqueda.
   Cada lección genera 1 documento de lección + 1 documento por apartado (h2) con enlace profundo (#ancla). */
import { LESSONS, MODULES } from "../data/content.js";
const dec = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"');
const text = (h) => dec(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const codeOf = (h) => [...h.matchAll(/<pre[\s\S]*?<\/pre>/g)].map((m) => text(m[0])).join(" ");
export function buildIndex() {
  const docs = []; let order = 0;
  LESSONS.forEach((l) => {
    const m = MODULES.find((x) => x.id === l.m), base = `lecciones/${l.id}.html`;
    const parts = l.h.split(/(?=<h2 id=")/).filter((p) => p.startsWith("<h2"));
    const common = { lesson: l.id, lessonTitle: l.t, mod: l.m, module: m.t, tags: l.tags };
    docs.push({ ...common, id: l.id, kind: "lesson", order: order++, url: base, anchor: "", title: l.t, heading: "", summary: l.s,
      heads: parts.map((p) => text(p.match(/<h2[^>]*>(.*?)<\/h2>/)[1])), text: text(l.h) + " " + (l.sum || []).join(" ") + " " + (l.ex || "") + " " + text(l.q.join(" ")), code: codeOf(l.h) });
    parts.forEach((p) => { const id = p.match(/id="([^"]+)"/)[1], t = text(p.match(/<h2[^>]*>(.*?)<\/h2>/)[1]);
      docs.push({ ...common, id: `${l.id}#${id}`, kind: "section", order: order++, url: `${base}#${id}`, anchor: id, title: t, heading: t, summary: "", heads: [], text: text(p.replace(/<h2[\s\S]*?<\/h2>/, "")), code: codeOf(p) }); });
  });
  return docs;
}
