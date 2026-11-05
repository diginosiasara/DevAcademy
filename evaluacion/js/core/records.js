/* NÚCLEO · repositorio de historial (simulacros hechos) y de aciertos/fallos por pregunta. */
(function(P){'use strict';
const MAX=500,L=P.storage.local;
const state={rec:L.get('rec',[]),fail:L.get('fail',{})};
const save=()=>{L.set('rec',state.rec.slice(-MAX));L.set('fail',state.fail)};
const add=r=>{state.rec.push(r);save()};
const replace=(rec,fail)=>{state.rec=rec;state.fail=fail;save()};
const reset=()=>replace([],{});
P.records={state,save,add,replace,reset};
})(window.POO=window.POO||{});
