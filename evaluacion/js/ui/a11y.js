/* UI · accesibilidad transversal: anuncios a lectores de pantalla, gestión del foco y título de página. */
(function(P){'use strict';
const announce=m=>{const l=document.getElementById('live');if(!l)return;l.textContent='';setTimeout(()=>{l.textContent=m},50)};
const focusEl=el=>{if(!el)return;if(!el.hasAttribute('tabindex'))el.setAttribute('tabindex','-1');el.focus()};
const focusHeading=root=>focusEl(root.querySelector('h2')||root);
const setTitle=t=>{document.title=`${t} · Simulacro POO`};
P.a11y={announce,focusEl,focusHeading,setTitle};
})(window.POO=window.POO||{});
