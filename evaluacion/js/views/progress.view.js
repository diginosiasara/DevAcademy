/* VISTA · plantilla del panel de progreso. */
(function(P){'use strict';
const {esc,num,fmtT,fmtD}=P.u,I=P.ui.icon;P.views=P.views||{};
const dataBox=()=>`<h3>Datos guardados</h3><p class="note">Se guardan solo en este navegador. Exporta una copia JSON para no perderlos o llevarlos a otro equipo.</p><div class="row"><button class="btn ghost sm" data-a="exp">Exportar JSON</button><button class="btn ghost sm" data-a="imp">Importar JSON</button><button class="btn ghost sm" data-a="rst">Borrar todo</button></div><input type="file" id="file" accept=".json,application/json" hidden>`;
const unitRows=rows=>rows.map(({u,m})=>`<div class="rw"><span>${esc(P.bank.label(u))}</span>${m.pct==null?'<span class="note">Sin practicar</span>':P.ui.bar(m.pct,`Dominio ${num(m.pct*100,0)} por ciento`)}<b>${m.pct==null?'–':num(m.pct*100,0)+' %'}</b></div>`).join('');
P.views.progress={
 empty:rows=>`<h2>Panel de progreso</h2><div class="card"><p class="note">Aún no hay simulacros registrados. Haz uno y aquí verás tu evolución.</p></div>${dataBox()}`,
 html:({R,sum,units,cfgRows,ranking,sort,fails})=>`<h2>Panel de progreso</h2><div class="st"><div>${I('target',24)}<b>${sum.n}</b>simulacros hechos</div><div>${I('chart',24)}<b>${num(sum.avg)}</b>nota media</div><div>${I('trophy',24)}<b>${num(sum.best)}</b>mejor nota</div><div>${I('trend',24)}<b class="${sum.trend.c}" style="font-size:1.05rem">${sum.trend.t}</b>tendencia (3 últimos frente a 3 anteriores)</div></div>
 <h3>Dominio por unidad</h3>${unitRows(units)}
 <h3>Nota por fecha</h3>${P.ui.chart(R,r=>r.g,10,x=>x.toFixed(0),'Nota por fecha')}
 <h3>Segundos por pregunta por fecha</h3>${P.ui.chart(R,r=>r.secs/r.n,Math.max(10,Math.ceil(Math.max(...R.map(r=>r.secs/r.n))*1.1)),x=>Math.round(x)+' s','Segundos por pregunta')}
 <h3>Por configuración</h3>${P.ui.table('Resultados agrupados por configuración',['Configuración','Intentos','Última','Mejor','Media','Mejor tiempo','Evolución'],cfgRows.map(c=>`<tr><th scope="row">${esc(c.key)}</th><td>${c.n}</td><td>${num(c.last)}</td><td>${num(c.best)}</td><td>${num(c.avg)}</td><td>${fmtT(c.fast)}</td><td class="${c.t.c}">${c.t.t}</td></tr>`).join(''))}
 <h3 id="rk" tabindex="-1">Ranking</h3><div class="row"><button class="btn ghost sm" data-a="sort" data-v="nota" aria-pressed="${sort==='nota'}">Por nota</button><button class="btn ghost sm" data-a="sort" data-v="tiempo" aria-pressed="${sort==='tiempo'}">Por rapidez (aprobados)</button></div>
 ${P.ui.table('Mejores simulacros',['#','Nota','Tiempo','Por pregunta','Fecha','Configuración'],ranking.map((r,i)=>`<tr><td>${i+1}</td><td>${num(r.g)}</td><td>${fmtT(r.secs)}</td><td>${Math.round(r.secs/r.n)} s</td><td>${fmtD(r.ts)}</td><td>${esc(r.key)}</td></tr>`).join(''))}
 <h3>Preguntas más falladas</h3>${fails.length?P.ui.table('Diez preguntas con más fallos',['Pregunta','Unidad','Fallos'],fails.map(x=>`<tr><td>${esc(x.q.q)}</td><td>${esc(x.q.unit)}</td><td>${x.f} de ${x.a}</td></tr>`).join('')):'<p class="note">Aún no has fallado ninguna pregunta.</p>'}${dataBox()}`,
 unitsOnly:unitRows};
})(window.POO=window.POO||{});
