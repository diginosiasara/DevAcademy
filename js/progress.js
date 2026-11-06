/* PROGRESS: refleja el progreso en tarjetas, barra y botón de lección. */
import { getDone, isDone, toggleDone } from "./store.js";
import { track } from "./analytics.js";
const total = () => document.querySelectorAll("[data-lesson-id]").length || Number(document.body.dataset.total || 0);
export function paint() {
  const done = getDone();
  document.querySelectorAll("[data-lesson-id]").forEach((el) => {
    const ok = done.includes(el.dataset.lessonId);
    el.classList.toggle("is-done", ok);
    const s = el.querySelector(".status"); if (s) s.textContent = ok ? "Completada" : "Pendiente";
  });
  const t = Number(document.body.dataset.total || 0) || total();
  const n = done.filter((id) => document.querySelector(`[data-lesson-id="${id}"]`) || document.body.dataset.ids?.split(",").includes(id)).length;
  const p = t ? Math.round((n / t) * 100) : 0;
  const m = document.getElementById("meter");
  if (m) { m.style.setProperty("--w", p + "%"); m.parentElement.setAttribute("aria-valuenow", p); }
  const lbl = document.getElementById("pct"); if (lbl) lbl.textContent = p + "%";
}
export function initProgress() {
  paint();
  const btn = document.getElementById("done"); if (!btn) return;
  const id = btn.dataset.id, show = () => { const d = isDone(id); btn.setAttribute("aria-pressed", d); btn.textContent = d ? "✓ Completada (deshacer)" : "Marcar como completada"; };
  show();
  btn.addEventListener("click", () => { const d = toggleDone(id); if (d) track("lesson_complete", { lesson: id }); show(); paint(); });
}
