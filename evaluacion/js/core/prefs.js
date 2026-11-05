/* NÚCLEO · preferencias del usuario (tema, configuración del simulacro). */
(function(P){'use strict';
const L=P.storage.local;
P.prefs={get:(k,d)=>L.get('prefs.'+k,d),set:(k,v)=>L.set('prefs.'+k,v)};
})(window.POO=window.POO||{});
