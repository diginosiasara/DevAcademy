/* VISTA · plantilla de la página de configuración. Recibe un modelo, devuelve HTML. */
(function(P){'use strict';
const {esc}=P.u,I=P.ui.icon;P.views=P.views||{};
const radios=(name,cur,items,leg)=>`<fieldset><legend>${leg}</legend><div class="seg">${items.map(([v,t])=>`<label class="chk"><input type="radio" name="${name}" value="${v}" ${String(cur)===String(v)?'checked':''}>${t}</label>`).join('')}</div></fieldset>`;
const MODES=[['examen','clock','Examen','Cronómetro, sin pistas; corrección al final.'],['practica','bulb','Práctica','Pistas y corrección inmediata en cada pregunta.']];
P.views.config={
 html:({cfg,nFailed,counts,ufs,units,history,resumable})=>`<h2>Configura tu simulacro</h2><p class="note">Elige unidades, número de preguntas y modo. Todo se recuerda para la próxima vez.</p>
 ${resumable?`<p class="card resume"><b>Tienes un simulacro en curso.</b> <a class="btn sm" href="${P.routes.href('run')}">Continuar</a></p>`:''}
 <form class="card" id="f" novalidate>
 <fieldset><legend>1. Contenido</legend><div class="row"><button type="button" class="btn ghost sm" data-p="all">Todas</button><button type="button" class="btn ghost sm" data-p="fail">Más falladas (${nFailed})</button>${Object.keys(ufs).map(u=>`<button type="button" class="btn ghost sm" data-p="${u}">Solo ${u}</button>`).join('')}</div>
 ${Object.keys(ufs).map(uf=>`<fieldset><legend class="uf ${P.ui.cls(uf)}">${uf} · ${esc(ufs[uf].titulo)}</legend><div class="tiles">${units.filter(u=>u.uf===uf).map(u=>`<label class="tile ${P.ui.cls(uf)}"><input type="checkbox" name="unit" value="${u.id}" ${cfg.units.has(u.id)&&!cfg.fallas?'checked':''}><span class="tk">${I(P.icons.forUnit(u.ud))}</span><span class="tb"><b>UD${u.ud}</b><span>${esc(u.titulo)}</span><small>${counts[u.id]} preguntas</small></span><span class="mark" aria-hidden="true">${I('check',16)}</span></label>`).join('')}</div></fieldset>`).join('')}</fieldset>
 ${radios('n',cfg.n,[10,15,20,40,0].map(x=>[x,x||'Todas']),'2. Número de preguntas')}
 ${radios('nivel',cfg.nivel,[['mix','Mixto'],...P.diff.LV.map((x,i)=>[i+1,x])],'3. Dificultad (se adapta a tu historial)')}
 <fieldset><legend>4. Modo</legend><div class="modes">${MODES.map(([v,i,t,d])=>`<label class="mode"><input type="radio" name="mode" value="${v}" ${cfg.mode===v?'checked':''}>${I(i,28)}<span><b>${t}</b><small>${d}</small></span></label>`).join('')}</div></fieldset>
 <div id="fx">${radios('factor',cfg.factor,[[1,'Normal'],[1.5,'+50 %'],[2,'+100 %']],'Tiempo disponible (adaptación)')}</div>
 <details><summary>Cómo se puntúa</summary><p class="note">Acierto +1, fallo −⅓, en blanco 0. Cada pista usada resta 0,1 si aciertas (solo en práctica). En examen no hay pistas ni corrección hasta el final.</p></details>
 <div class="row"><button class="btn big" id="go" type="submit">${I('play')} Comenzar simulacro</button><span class="note" id="sum"></span></div></form>
 ${history.length?`<h3>Últimos intentos</h3>${history.map(x=>`<div class="hist"><span>${P.u.fmtD(x.ts)}</span>${P.ui.bar(x.g/10,'Nota '+P.u.num(x.g)+' de 10')}<b>${P.u.num(x.g)}</b></div>`).join('')}`:''}`,
 summary:({available,n,minutes,examen})=>available?`${available} preguntas disponibles · se usarán ${n}${examen?` · tiempo ${minutes} min`:''}`:'No hay preguntas con esta selección.'};
})(window.POO=window.POO||{});
