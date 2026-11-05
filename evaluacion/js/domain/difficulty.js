/* DOMINIO · dificultad adaptativa según el historial de la pregunta. */
(function(P){'use strict';
const LV=['Básica','Media','Alta'];
const eff=(q,rec)=>{const e=rec||{},f=e.f|0,h=Math.max(0,(e.a|0)-f);return Math.max(1,Math.min(3,q.d+Math.max(-2,Math.min(2,f-.5*h))))};
const level=(q,rec)=>Math.round(eff(q,rec));
P.diff={LV,eff,level};
})(window.POO=window.POO||{});
