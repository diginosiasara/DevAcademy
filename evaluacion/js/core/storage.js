/* NÚCLEO · adaptador de bajo nivel sobre localStorage/sessionStorage (JSON, espacio de nombres, sin excepciones). */
(function(P){'use strict';
const NS='poo1:';
const make=st=>({
 get(k,d){try{const v=JSON.parse(st().getItem(NS+k));return v??d}catch(e){return d}},
 set(k,v){try{st().setItem(NS+k,JSON.stringify(v));return true}catch(e){return false}},
 del(k){try{st().removeItem(NS+k)}catch(e){}}});
P.storage={local:make(()=>localStorage),session:make(()=>sessionStorage)};
})(window.POO=window.POO||{});
