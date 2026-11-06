/* THEME: alterna claro/oscuro y recuerda la elección. */
const root = document.documentElement;
export function initTheme() {
  const btn = document.getElementById("theme"); if (!btn) return;
  const current = () => root.dataset.theme || (matchMedia("(prefers-color-scheme:light)").matches ? "light" : "dark");
  const sync = () => btn.setAttribute("aria-pressed", String(current() === "light"));
  btn.addEventListener("click", () => {
    const next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next; try { localStorage.setItem("devacademy:theme", next); } catch {} sync();
  });
  sync();
}
