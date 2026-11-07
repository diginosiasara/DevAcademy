/* WIKI: mejoras de lectura en lecciones: barra de progreso, índice activo, copiar código, volver arriba. */
const say = (m) => { const l = document.getElementById("live"); if (l) { l.textContent = ""; setTimeout(() => (l.textContent = m), 60); } };
export function initWiki() {
  const art = document.querySelector("article.prose"); if (!art) return;
  const bar = document.querySelector(".readbar"), top = document.createElement("button");
  top.className = "totop"; top.type = "button"; top.hidden = true; top.setAttribute("aria-label", "Volver al principio de la página"); top.textContent = "↑"; document.body.append(top);
  top.addEventListener("click", () => { scrollTo({ top: 0 }); document.getElementById("h1")?.focus({ preventScroll: true }); });
  let tick = false;
  const onScroll = () => { if (tick) return; tick = true; requestAnimationFrame(() => {
    const r = art.getBoundingClientRect(), p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
    if (bar) bar.style.transform = `scaleX(${p})`; top.hidden = scrollY < 700; tick = false; }); };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  /* índice lateral: marca la sección activa con aria-current="location" */
  const links = [...document.querySelectorAll(".toc-side a")], heads = links.map((a) => document.getElementById(a.hash.slice(1)));
  const spy = () => { let k = 0; heads.forEach((h, i) => { if (h && h.getBoundingClientRect().top <= 140) k = i; });
    links.forEach((a, i) => (i === k ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current"))); };
  if (links.length) { addEventListener("scroll", spy, { passive: true }); spy(); }
  /* menú de lecciones: plegado en móvil, abierto en escritorio */
  const nav = document.querySelector("details.course-nav"), mq = matchMedia("(max-width:919px)");
  if (nav) { const set = () => { nav.open = !mq.matches; }; set(); mq.addEventListener("change", set); }
  /* bloques de código: cabecera con lenguaje y botón copiar */
  art.querySelectorAll("pre[data-lang]").forEach((pre) => {
    const w = document.createElement("div"), h = document.createElement("div"), b = document.createElement("button"), lang = document.createElement("span");
    w.className = "codewrap"; h.className = "codehead"; lang.textContent = pre.dataset.lang; b.className = "copy"; b.type = "button"; b.textContent = "Copiar"; b.setAttribute("aria-label", "Copiar código al portapapeles");
    h.append(lang, b); pre.replaceWith(w); w.append(h, pre);
    b.addEventListener("click", async () => {
      const t = pre.innerText;
      try { await navigator.clipboard.writeText(t); } catch { const a = Object.assign(document.createElement("textarea"), { value: t }); document.body.append(a); a.select(); document.execCommand("copy"); a.remove(); }
      b.dataset.ok = "1"; b.textContent = "¡Copiado!"; say("Código copiado al portapapeles"); setTimeout(() => { delete b.dataset.ok; b.textContent = "Copiar"; }, 1800);
    });
  });
}
