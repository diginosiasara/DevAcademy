/* SERVICIO · orquesta "crear sesión → guardarla → ir a la página del simulacro". */
(function(P){'use strict';
P.launcher={begin(pool,opts){if(!pool.length)return false;P.runstore.save(P.session.start(pool,opts));P.routes.go('run');return true}};
})(window.POO=window.POO||{});
