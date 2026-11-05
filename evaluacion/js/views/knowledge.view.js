/* VISTA · plantilla del panel de conocimiento. */
(function(P){'use strict';
const {esc,num}=P.u,I=P.ui.icon;P.views=P.views||{};
const NEWTAB='<span class="sr"> (se abre en una pestaña nueva)</span>';
P.views.knowledge={html:({groups})=>`<h2>Panel de conocimiento</h2><p class="note">Resumen de cada unidad con los puntos clave extraídos del banco y enlaces a la página del manual. Los PDF están en la carpeta <code>manuales</code> de este proyecto; se abren en una pestaña nueva, en la página indicada.</p>
 ${groups.map(g=>`<h3 class="uf ${P.ui.cls(g.uf)}">${g.uf} · ${esc(g.titulo)}</h3>${g.units.map(({u,m,pts})=>`<details class="card ud ${P.ui.cls(u.uf)}"><summary><span class="tk">${I(P.icons.forUnit(u.ud),24)}</span><span class="tb"><b>UD${u.ud} · ${esc(u.titulo)}</b><small>${u.secciones.length} apartados · ${pts.length} puntos clave</small></span>${P.ui.ring(m.pct,m.pct==null?'–':num(m.pct*100,0)+'%',m.pct==null?'Sin practicar':`Dominio ${num(m.pct*100,0)} por ciento`,52)}</summary>
 <h4>Temario del manual</h4><ul>${u.secciones.map(s=>`<li>${s.n} ${esc(s.t)} — <a href="${P.bank.manualUrl(u.uf,s.p)}" target="_blank" rel="noopener">abrir en el manual, p. ${s.p}${NEWTAB}</a></li>`).join('')}</ul>
 ${u.apoyo.length?`<h4>Documentos de apoyo</h4><ul>${u.apoyo.map(a=>`<li><a href="manuales/${encodeURI(a.f)}" target="_blank" rel="noopener">${esc(a.t)}${NEWTAB}</a></li>`).join('')}</ul>`:''}
 <h4>Puntos clave</h4><ul>${pts.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>
 <button class="btn sm" data-u="${u.id}">Practicar esta unidad</button></details>`).join('')}`).join('')}`};
})(window.POO=window.POO||{});
