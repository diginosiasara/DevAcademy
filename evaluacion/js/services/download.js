/* SERVICIO · descarga de un archivo de texto generado en el navegador. */
(function(P){'use strict';
P.download=(name,text,type='application/json')=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};
})(window.POO=window.POO||{});
