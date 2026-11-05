/* VISTA · plantilla de la página de resultados. */
(function(P){'use strict';
const {esc,num,fmtT}=P.u,sc=P.scoring,LET='ABCD';P.views=P.views||{};
P.views.results={html:({s,prev})=>{const n=s.qs.length,ok=s.qs.filter(sc.correct).length,bl=s.qs.filter(q=>!sc.answered(q)).length,ko=n-ok-bl,by={};
 s.qs.forEach(q=>{const v=by[q.unit]=by[q.unit]||[0,0];v[0]+=sc.correct(q)?1:0;v[1]++});
 return`<h2>Resultado del simulacro</h2><section class="card res"><div class="bigring ${s.g>=5?'p':'f'}">${P.ui.ring(s.g/10,num(s.g),`Nota ${num(s.g)} sobre 10`,150)}<p class="vd"><b>${sc.verdict(s.g)}</b><small>${s.g>=5?'Aprobado':'Suspenso'} · nota sobre 10</small></p></div>
 <div class="kp"><div><b class="up">${ok}</b>correctas</div><div><b class="dn">${ko}</b>falladas</div><div><b>${bl}</b>en blanco</div><div><b>${fmtT(s.secs)}</b>tiempo</div></div>
 <p class="note">${Math.round(s.secs/n)} s por pregunta${prev.length?' · mejor nota anterior con esta configuración: '+num(Math.max(...prev)):''} · fallo = −⅓ · blanco = 0</p>
 <div class="row"><button class="btn" data-a="again">Nuevo simulacro</button><button class="btn ghost" data-a="wrong" ${ok===n?'disabled':''}>Repetir solo las falladas</button><a class="btn ghost" href="${P.routes.href('config')}">Configurar</a></div></section>
 <h3>Resultado por unidad</h3>${Object.entries(by).map(([u,x])=>`<div class="rw"><span>${esc(P.bank.label(P.bank.uMap[u]))}</span>${P.ui.bar(x[0]/x[1],`${x[0]} de ${x[1]} correctas`)}<b>${x[0]}/${x[1]}</b></div>`).join('')}
 <h3>Corrección detallada</h3>${s.qs.map((q,i)=>`<article class="rev ${sc.status(q)}"><p class="m">Pregunta ${i+1} · ${P.ui.ufBadge(q.uf)} ${esc(q.unit.split('-')[1])} · ${esc(q.tema)}</p><p><b>${esc(q.q)}</b></p>
 <p>Tu respuesta: ${sc.answered(q)?`<b>${LET[q.a]}. ${esc(q.o[q.a])}</b> ${sc.correct(q)?'✓':'✗'}`:'<i>en blanco</i>'}<br>Correcta: <b>${LET[q.c]}. ${esc(q.o[q.c])}</b></p><p class="m">${esc(q.e)}</p></article>`).join('')}`}};
})(window.POO=window.POO||{});
