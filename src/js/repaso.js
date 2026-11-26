/* REPASO: autotest interactivo y marca «dominada» en la página de apuntes (mejora progresiva: sin JS todo se lee). */
import { track } from "./analytics.js";
const KEY = "devacademy:repaso";
const get = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
const save = (l) => { try { localStorage.setItem(KEY, JSON.stringify(l)); } catch {} };
export function initRepaso() {
  const root = document.querySelector("[data-rp-ids]"); if (!root) return;
  const ids = root.dataset.rpIds.split(","), pct = document.getElementById("rp-pct");
  const paint = () => {
    const done = get(); document.querySelectorAll("[data-rp]").forEach((b) => { const ok = done.includes(b.dataset.rp); b.setAttribute("aria-pressed", ok); b.textContent = ok ? "✓ Dominada (deshacer)" : "Marcar como dominada"; b.closest(".rp-unit").classList.toggle("is-done", ok); });
    if (pct) pct.textContent = Math.round((ids.filter((i) => done.includes(i)).length / ids.length) * 100) + "%";
  };
  document.querySelectorAll("[data-rp]").forEach((b) => b.addEventListener("click", () => { const l = get(), i = l.indexOf(b.dataset.rp); i < 0 ? l.push(b.dataset.rp) : l.splice(i, 1); save(l); if (i < 0) track("lesson_complete", { lesson: "repaso:" + b.dataset.rp }); paint(); }));
  document.querySelectorAll(".rq").forEach((q) => q.addEventListener("change", (e) => {
    const ok = Number(e.target.value) === Number(q.dataset.a), fb = q.querySelector(".fb");
    q.querySelectorAll("label").forEach((l, i) => { l.classList.toggle("right", i === Number(q.dataset.a)); l.classList.toggle("wrong", !ok && l.contains(e.target)); });
    q.classList.toggle("is-ok", ok); q.classList.toggle("is-ko", !ok); q.querySelector(".sol").open = true;
    fb.textContent = ok ? "✓ Correcto." : "✗ Incorrecto: revisa la solución.";
  }));
  paint();
}
