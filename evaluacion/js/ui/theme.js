/* UI · tema claro/oscuro (respeta la preferencia del sistema hasta que el usuario elige). */
(function(P){'use strict';
const root=document.documentElement;
const dark=()=>root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
const saved=P.prefs.get('theme',null);if(saved)root.dataset.theme=saved;
P.theme={init(btn){const sync=()=>btn.setAttribute('aria-pressed',dark());sync();
 btn.onclick=()=>{root.dataset.theme=dark()?'light':'dark';P.prefs.set('theme',root.dataset.theme);sync()}}};
})(window.POO=window.POO||{});
