/* UI · diálogo de confirmación accesible basado en <dialog>. */
(function(P){'use strict';
P.dialog={confirm(title,msg,ok='Aceptar'){const d=document.getElementById('dlg');
 if(!d||!d.showModal)return Promise.resolve(window.confirm(msg));
 d.querySelector('#dlg-t').textContent=title;d.querySelector('#dlg-m').textContent=msg;d.querySelector('#dlg-ok').textContent=ok;
 return new Promise(res=>{d.addEventListener('close',()=>res(d.returnValue==='yes'),{once:true});d.returnValue='no';d.showModal()})}};
})(window.POO=window.POO||{});
