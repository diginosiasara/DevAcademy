/* SERVICIO · temporizador de ticks (único lugar con setInterval). */
(function(P){'use strict';
let id=null;
const stop=()=>{clearInterval(id);id=null};
const start=(fn,ms=1000)=>{stop();id=setInterval(fn,ms)};
P.clock={start,stop};
})(window.POO=window.POO||{});
