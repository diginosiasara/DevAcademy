/* SERVICIO · estado del simulacro entre páginas (sessionStorage): sobrevive a recargas, no a cerrar la pestaña. */
(function(P){'use strict';
const S=P.storage.session;
P.runstore={load:()=>{const s=S.get('run',null);return s&&s.phase==='run'&&Array.isArray(s.qs)?s:null},save:s=>S.set('run',s),clear:()=>S.del('run'),
 loadResult:()=>{const s=S.get('result',null);return s&&s.phase==='res'&&s.rec?s:null},saveResult:s=>S.set('result',s)};
})(window.POO=window.POO||{});
