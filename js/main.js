/* MAIN: punto de entrada, solo orquesta los módulos. */
import { initTheme } from "./theme.js";
import { initProgress } from "./progress.js";
import { initSearch } from "./search.js";
import { initReveal } from "./reveal.js";
import { initTracking } from "./analytics.js";
initTheme(); initProgress(); initSearch(); initReveal(); initTracking();
if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register(document.documentElement.dataset.root + "sw.js").catch(() => {});
