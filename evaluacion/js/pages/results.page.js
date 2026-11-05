/* PÁGINA · resultados.html — controlador: muestra el último resultado y relanza simulacros. */
(function(P){'use strict';
const main=P.layout.mount('results',{title:'Resultados'}),s=P.runstore.loadResult();
if(!s){P.routes.go('config');return}
const R=P.records.state,prev=R.rec.filter(r=>r.key===s.rec.key&&r.ts!==s.rec.ts).map(r=>r.g);
main.innerHTML=P.views.results.html({s,prev});P.a11y.focusHeading(main);
main.onclick=e=>{const a=e.target.closest('[data-a]')?.dataset.a,cfg=P.settings.load();
 if(a==='again')P.launcher.begin(P.selection.pool(cfg,R.fail),P.selection.options(cfg));
 else if(a==='wrong')P.launcher.begin(P.u.shuffle(s.qs.filter(q=>!P.scoring.correct(q)).map(q=>P.bank.byKey[q.k])),{mode:s.mode,desc:'Repetir falladas',factor:cfg.factor})};
})(window.POO=window.POO||{});
