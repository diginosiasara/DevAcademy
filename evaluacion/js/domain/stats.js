/* DOMINIO · agregaciones de progreso y dominio por unidad. */
(function(P){'use strict';
const {avg}=P.u;
const trend=v=>{if(v.length<2)return{c:'',t:'Sin comparación aún'};const l=v.length>=4?v.slice(-3):v.slice(-1),p=v.length>=4?v.slice(-6,-3):v.slice(0,-1),d=avg(l)-avg(p);
 return d>.3?{c:'up',t:`▲ Mejoras (+${P.u.num(d)})`}:d<-.3?{c:'dn',t:`▼ Empeoras (${P.u.num(d)})`}:{c:'',t:'= Estable'}};
const mastery=(unitId,fail)=>{let a=0,ok=0;P.bank.items.filter(q=>q.unit===unitId).forEach(q=>{const e=fail[q.k];if(e){a+=e.a;ok+=e.ok}});return{a,ok,pct:a?ok/a:null}};
const groupByKey=R=>R.reduce((m,r)=>((m[r.key]=m[r.key]||[]).push(r),m),{});
const topFails=(fail,n=10)=>Object.entries(fail).filter(([k,e])=>e.f>0&&P.bank.byKey[k]).sort((a,b)=>b[1].f-a[1].f).slice(0,n).map(([k,e])=>({q:P.bank.byKey[k],...e}));
const failedItems=fail=>P.bank.items.filter(q=>(fail[q.k]||{}).f>0);
const summary=R=>{const g=R.map(r=>r.g);return{n:R.length,avg:avg(g),best:Math.max(...g),trend:trend(g)}};
P.stats={trend,mastery,groupByKey,topFails,failedItems,summary};
})(window.POO=window.POO||{});
