/* MAIN: punto de entrada, solo orquesta los módulos. */
import { initTheme } from "./theme.js";
import { initProgress } from "./progress.js";
import { initFilter } from "./filter.js";
import { initSearchUI } from "./search-ui.js";
import { initReveal } from "./reveal.js";
import { initTracking } from "./analytics.js";
initTheme(); initProgress(); initFilter(); initSearchUI(); initReveal(); initTracking();
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register(document.documentElement.dataset.root + "sw.js").catch(() => {});
