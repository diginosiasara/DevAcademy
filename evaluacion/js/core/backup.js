/* NÚCLEO · exportación e importación validada del progreso (JSON). */
(function(P){'use strict';
const R=P.records;
const okRec=r=>r&&['ts','g','secs','n'].every(k=>Number.isFinite(r[k]))&&typeof r.key==='string';
const exportJSON=()=>JSON.stringify({version:1,exportado:new Date().toISOString(),registros:R.state.rec,falladas:R.state.fail},null,1);
function importJSON(text){let o;try{o=JSON.parse(text)}catch(e){return false}
 if(!o||!Array.isArray(o.registros)||!o.registros.every(okRec)||!o.falladas||typeof o.falladas!=='object')return false;
 const fail={};Object.entries(o.falladas).forEach(([k,e])=>{fail[k]={f:e.f|0,a:e.a|0,ok:e.ok|0,l:e.l|0,b:e.b|0}});
 R.replace(o.registros,fail);return true}
P.backup={exportJSON,importJSON};
})(window.POO=window.POO||{});
