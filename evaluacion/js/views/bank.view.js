/* VISTA · plantilla del banco de preguntas. */
(function(P){'use strict';
const {esc}=P.u,LET='ABCD';P.views=P.views||{};
P.views.bank={
 html:()=>`<h2>Banco con soluciones</h2><label for="bs" class="note">Buscar por texto, unidad o explicación</label><input id="bs" type="search" autocomplete="off"><p class="note" id="bc" role="status"></p><div id="bl"></div>`,
 list:(r,fail)=>r.map(q=>`<article class="card" style="margin:.7rem 0">${P.ui.tag(q,fail[q.k])}<p class="qt">${esc(q.q)}</p><p><b>${LET[q.c]}. ${esc(q.o[q.c])}</b> ✓</p><p class="m">${esc(q.e)}</p></article>`).join('')};
})(window.POO=window.POO||{});
