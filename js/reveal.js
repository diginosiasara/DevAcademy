/* REVEAL: animación de entrada al hacer scroll (IntersectionObserver). */
export function initReveal() {
  const els = document.querySelectorAll(".reveal"); if (!els.length) return;
  if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("in"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  els.forEach((e) => io.observe(e));
}
