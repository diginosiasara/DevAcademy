/* SERVICIO · mapa de páginas y navegación. */
(function(P){'use strict';
const PAGES={config:'index.html',run:'simulacro.html',results:'resultados.html',know:'conocimiento.html',bank:'banco.html',dash:'progreso.html'};
P.routes={PAGES,href:k=>PAGES[k],go:k=>{location.href=PAGES[k]}};
})(window.POO=window.POO||{});
