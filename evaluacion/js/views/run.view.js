/* VISTA · plantilla de la página del simulacro (una pregunta). */
(function(P){'use strict';
const {esc,fmtT}=P.u,sc=P.scoring,I=P.ui.icon,LET='ABCD';P.views=P.views||{};
const dotLabel=(q,i)=>`Pregunta ${i+1}${sc.answered(q)?', respondida':', sin responder'}${q.flag?', marcada para revisar':''}${q.lock?(sc.correct(q)?', correcta':', incorrecta'):''}`;
P.views.run={dotLabel,
 html:({s,fail})=>{const q=s.qs[s.i],n=s.qs.length,lk=q.lock,done=s.qs.filter(sc.answered).length;
 return`<h2>${s.mode==='examen'?'Examen':'Práctica'} · pregunta ${s.i+1} de ${n}</h2>
 <div class="top">${s.total?`<span class="timer">${I('clock')}<span id="tm">${fmtT(P.session.left(s))}</span></span>`:`<span class="timer pr">${I('bulb')} Práctica</span>`}<span id="cnt" class="pill">${done} respondidas</span><button class="btn ghost sm" data-a="end">Finalizar</button></div>
 ${P.ui.bar((s.i+1)/n,`Progreso: pregunta ${s.i+1} de ${n}`)}
 <ol class="nav" aria-label="Ir a la pregunta">${s.qs.map((x,i)=>`<li><button type="button" class="qd${sc.answered(x)?' ans':''}${x.flag?' fl':''}${x.lock?(sc.correct(x)?' ok':' no'):''}" data-a="j" data-v="${i}" ${i===s.i?'aria-current="step"':''} aria-label="${dotLabel(x,i)}">${i+1}</button></li>`).join('')}</ol>
 <article class="card"><form id="qf"><fieldset ${lk?'disabled':''}><legend class="qt" id="qtxt" tabindex="-1"><span class="qn" aria-hidden="true">${s.i+1}</span><span>${esc(q.q)}</span></legend>
 ${P.ui.tag(q,fail[q.k])}
 ${q.o.map((o,j)=>`<label class="opt${lk?' dis':''}${lk&&j===q.c?' ok':''}${lk&&j===q.a&&j!==q.c?' no':''}"><input type="radio" name="o" value="${j}" ${q.a===j?'checked':''}><span class="lt" aria-hidden="true">${LET[j]}</span><span class="ot"><span class="sr">Opción ${LET[j]}: </span>${esc(o)}${lk&&j===q.c?' <b>✓ Correcta</b>':''}${lk&&j===q.a&&j!==q.c?' <b>✗ Tu respuesta</b>':''}</span></label>`).join('')}</fieldset></form>
 <div id="hints">${q.h.slice(0,q.hu).map((h,k)=>`<p class="hint" tabindex="-1"><b>Pista ${k+1}:</b> ${esc(h)}</p>`).join('')}</div>
 ${lk?`<div class="fb ${sc.status(q)}" id="fb" tabindex="-1"><b>${sc.correct(q)?'Correcto.':'Incorrecto.'}</b> Respuesta: ${LET[q.c]}. ${esc(q.o[q.c])}<br>${esc(q.e)}</div>`:''}
 <div class="acts">${s.mode==='practica'&&!lk&&q.hu<q.h.length?`<button class="btn ghost" data-a="hint">${I('bulb',18)} Pedir pista (${q.hu}/${q.h.length}) · −0,1</button>`:''}
 ${s.mode==='practica'&&!lk?`<button class="btn ghost" data-a="check" ${sc.answered(q)?'':'disabled'}>${I('check',18)} Corregir</button>`:''}
 <button class="btn ghost" data-a="flag" aria-pressed="${q.flag}">${I('flag',18)} ${q.flag?'Quitar marca':'Marcar para revisar'}</button></div></article>
 <div class="acts"><button class="btn ghost" data-a="prev" ${s.i?'':'disabled'}>Anterior</button><button class="btn" data-a="next">${s.i===n-1?'Revisar y finalizar':'Siguiente'}</button></div>`}};
})(window.POO=window.POO||{});
