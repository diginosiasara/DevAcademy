/* PÁGINA · index.html — controlador: lee ajustes, pinta la vista y lanza el simulacro. */
(function(P){'use strict';
const main=P.layout.mount('config',{title:'Configurar simulacro'}),R=P.records.state,cfg=P.settings.load(),persist=()=>P.settings.save(cfg);
const counts=Object.fromEntries(P.bank.units.map(u=>[u.id,P.bank.items.filter(q=>q.unit===u.id).length]));
const model=()=>({cfg,counts,ufs:P.bank.ufs,units:P.bank.units,nFailed:P.stats.failedItems(R.fail).length,history:R.rec.slice(-5).reverse(),resumable:!!P.runstore.load()});
function summary(){const av=P.selection.available(cfg,R.fail),n=cfg.n?Math.min(cfg.n,av):av;
 main.querySelector('#sum').textContent=P.views.config.summary({available:av,n,minutes:Math.round(n*P.session.SEC_PER_Q*cfg.factor/60),examen:cfg.mode==='examen'});
 main.querySelector('#go').disabled=!av;main.querySelector('#fx').hidden=cfg.mode!=='examen'}
function render(){main.innerHTML=P.views.config.html(model());summary()}
main.onclick=e=>{const p=e.target.closest('[data-p]');if(!p)return;const v=p.dataset.p;
 cfg.fallas=v==='fail';cfg.units=new Set(P.bank.units.filter(u=>v==='all'||v==='fail'||u.uf===v).map(u=>u.id));persist();render();
 P.a11y.announce('Selección actualizada');P.a11y.focusEl(main.querySelector('#sum'))};
main.onchange=e=>{const t=e.target;
 if(t.name==='unit'){cfg.fallas=false;t.checked?cfg.units.add(t.value):cfg.units.delete(t.value)}
 else if(t.name==='n')cfg.n=+t.value;else if(t.name==='nivel')cfg.nivel=t.value==='mix'?'mix':+t.value;
 else if(t.name==='mode')cfg.mode=t.value;else if(t.name==='factor')cfg.factor=+t.value;
 persist();summary()};
main.onsubmit=e=>{e.preventDefault();P.launcher.begin(P.selection.pool(cfg,R.fail),P.selection.options(cfg))};
render();
})(window.POO=window.POO||{});
