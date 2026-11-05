/* DOMINIO · consulta de solo lectura sobre la base de datos (preguntas + catálogo). */
(function(P){'use strict';
const {questions}=P.data,{ufs,units,pagOffset}=P.data.catalog;
const uMap=Object.fromEntries(units.map(u=>[u.id,u]));
const items=questions.map(q=>({...q,k:P.u.hash(q.q+q.o.join('|')),uf:uMap[q.unit].uf,tema:uMap[q.unit].titulo}));
const byKey=Object.fromEntries(items.map(q=>[q.k,q]));
const inUnits=set=>items.filter(q=>set.has(q.unit));
const search=t=>{t=t.trim().toLowerCase();return t?items.filter(q=>(q.q+q.o.join(' ')+q.e+q.tema+q.unit).toLowerCase().includes(t)):items};
const manualUrl=(uf,page)=>encodeURI('manuales/'+ufs[uf].manual)+(page?'#page='+(page+pagOffset):'');
const label=u=>`${u.id.replace('-',' · ')} · ${u.titulo}`;
P.bank={items,byKey,units,ufs,uMap,inUnits,search,manualUrl,label};
})(window.POO=window.POO||{});
