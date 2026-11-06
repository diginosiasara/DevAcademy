/* BUILD: única responsabilidad, escribir archivos. Uso: node build/build.mjs */
import { writeFileSync, mkdirSync } from "node:fs";
import { SITE } from "../data/site.js";
import { LESSONS } from "../data/content.js";
import { home, temario, lesson, layout } from "./templates.mjs";
const w = (p, c) => writeFileSync(new URL("../" + p, import.meta.url), c);
mkdirSync(new URL("../lecciones", import.meta.url), { recursive: true });
w("index.html", home()); w("temario.html", temario());
LESSONS.forEach((l) => w(`lecciones/${l.id}.html`, lesson(l)));
w("404.html", layout({ title: `Página no encontrada · ${SITE.name}`, desc: "La página que buscas no existe.", path: "404.html", body: `<h1 id="h1" tabindex="-1">Página no encontrada</h1><p><a class="btn p" href="/index.html">Volver al inicio</a></p>` }).replace("index,follow", "noindex"));
const urls = ["", "temario.html", ...LESSONS.map((l) => `lecciones/${l.id}.html`)];
const today = new Date().toISOString().slice(0, 10);
w("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE.url}/${u}</loc><lastmod>${today}</lastmod><priority>${u === "" ? "1.0" : u === "temario.html" ? "0.9" : "0.8"}</priority></url>`).join("\n")}\n</urlset>\n`);
w("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap.xml\n`);
w("manifest.webmanifest", JSON.stringify({ name: SITE.name, short_name: SITE.name, description: SITE.slogan, lang: SITE.lang, start_url: "./index.html", display: "standalone", background_color: SITE.themeColor, theme_color: SITE.themeColor, icons: [{ src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }] }, null, 2));
w("favicon.svg", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6B7CFF"/><stop offset="1" stop-color="#FF7AD5"/></linearGradient></defs><rect width="64" height="64" rx="14" fill="#07070D"/><text x="32" y="43" font-family="monospace" font-size="30" font-weight="700" text-anchor="middle" fill="url(#g)">&lt;/&gt;</text></svg>`);
console.log("Generadas", urls.length + 1, "páginas + sitemap, robots y manifest");
