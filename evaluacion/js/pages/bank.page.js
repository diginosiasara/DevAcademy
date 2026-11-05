/* PÁGINA · banco.html — controlador: búsqueda y listado. */
(function(P){'use strict';
const main=P.layout.mount('bank',{title:'Banco con soluciones'}),R=P.records.state;
main.innerHTML=P.views.bank.html();
const list=t=>{const r=P.bank.search(t);main.querySelector('#bc').textContent=`${r.length} preguntas`;main.querySelector('#bl').innerHTML=P.views.bank.list(r,R.fail)};
main.querySelector('#bs').oninput=e=>list(e.target.value);list('');P.a11y.focusHeading(main);
})(window.POO=window.POO||{});
