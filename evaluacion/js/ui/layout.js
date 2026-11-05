/* UI · estructura común de todas las páginas: enlace de salto, cabecera, navegación, región viva y diálogo. */
(function(P){'use strict';
const TABS=[['config','Simulacro','play'],['know','Conocimiento','book'],['bank','Banco con soluciones','list'],['dash','Progreso','chart']];
function mount(page,{compact=false,title}={}){
 const cur=page==='run'||page==='results'?'config':page,b=document.body;
 b.insertAdjacentHTML('afterbegin',`<a class="skip" href="#main">Saltar al contenido</a>
<header class="hero${compact?' compact':''}"><div class="hero-in"><div><p class="eyebrow">UF2405 · UF2406</p><h1>Simulacro de examen<br><span>Programación orientada a objetos</span></h1>
<ul class="chips" aria-label="Resumen del banco"><li>${P.bank.items.length} preguntas</li><li>${P.bank.units.length} unidades</li><li>${Object.keys(P.bank.ufs).length} manuales</li></ul></div>
<button type="button" id="theme" class="btn glass sm" aria-pressed="false">Tema oscuro</button></div></header>
<nav aria-label="Secciones" class="tabs">${TABS.map(([k,t,i])=>`<a href="${P.routes.href(k)}" ${k===cur?'aria-current="page"':''}>${P.ui.icon(i)}<span>${t}</span></a>`).join('')}</nav>`);
 b.insertAdjacentHTML('beforeend',`<div id="live" class="sr" role="status" aria-live="polite" aria-atomic="true"></div>
<dialog id="dlg" aria-labelledby="dlg-t"><form method="dialog"><h2 id="dlg-t"></h2><p id="dlg-m"></p><div class="row"><button class="btn ghost" value="no">Cancelar</button><button class="btn" value="yes" id="dlg-ok">Aceptar</button></div></form></dialog>`);
 P.theme.init(document.getElementById('theme'));
 P.a11y.setTitle(title||(TABS.find(t=>t[0]===cur)||[])[1]||'Simulacro');
 return document.getElementById('main')}
P.layout={mount};
})(window.POO=window.POO||{});
