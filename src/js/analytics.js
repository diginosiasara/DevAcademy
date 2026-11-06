/* ANALYTICS (SEM): publica eventos en window.dataLayer sin cargar terceros.
   Conecta Google Tag Manager / Ads / GA4 aquí cuando tengas consentimiento de cookies. */
window.dataLayer = window.dataLayer || [];
export const track = (event, data = {}) => window.dataLayer.push({ event, ...data });
export function initTracking() {
  document.addEventListener("click", (e) => {
    const cta = e.target.closest("[data-cta]");
    if (cta) track("cta_click", { cta: cta.dataset.cta, page: location.pathname });
  });
}
