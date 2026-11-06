/* SEARCH: filtra tarjetas del temario; las páginas siguen siendo HTML completo sin JS. */
export function initSearch() {
  const input = document.getElementById("bus"); if (!input) return;
  const cards = [...document.querySelectorAll("[data-lesson-id]")], status = document.getElementById("live");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase(); let n = 0;
    cards.forEach((c) => { const hit = c.textContent.toLowerCase().includes(q); c.closest("li").hidden = !hit; n += hit; });
    document.querySelectorAll("[data-module]").forEach((s) => (s.hidden = ![...s.querySelectorAll("li")].some((li) => !li.hidden)));
    if (status) status.textContent = n + " lecciones encontradas";
  });
}
