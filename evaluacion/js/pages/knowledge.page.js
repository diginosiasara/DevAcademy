/* PÁGINA · conocimiento.html — controlador: compone el modelo (temario + dominio + puntos clave) y lanza prácticas por unidad. */
(function(P){'use strict';
const main=P.layout.mount('know',{title:'Conocimiento'}),R=P.records.state,K=P.data.knowledge;
const groups=Object.keys(P.bank.ufs).map(uf=>({uf,titulo:P.bank.ufs[uf].titulo,units:P.bank.units.filter(u=>u.uf===uf).map(u=>({u,m:P.stats.mastery(u.id,R.fail),pts:K[u.id]||[]}))}));
main.innerHTML=P.views.knowledge.html({groups});P.a11y.focusHeading(main);
main.onclick=e=>{const b=e.target.closest('[data-u]');if(!b)return;
 const cfg={...P.settings.load(),units:new Set([b.dataset.u]),fallas:false,n:10,nivel:'mix',mode:'practica',factor:1};
 P.launcher.begin(P.selection.pool(cfg,R.fail),{mode:'practica',desc:'Unidad '+b.dataset.u,factor:1})};
})(window.POO=window.POO||{});
