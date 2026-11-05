/* NÚCLEO · utilidades puras (sin DOM, sin estado, sin almacenamiento). */
(function(P){'use strict';
const esc=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const avg=a=>a.reduce((x,y)=>x+y,0)/(a.length||1);
const fmtT=t=>Math.floor(t/60)+':'+String(t%60).padStart(2,'0');
const fmtD=t=>new Date(t).toLocaleString('es-ES',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});
const num=(x,d=1)=>(Math.round(x*10**d)/10**d).toString().replace('.',',');
const hash=t=>{let h=5381;t=String(t);for(let i=0;i<t.length;i++)h=(h*33^t.charCodeAt(i))>>>0;return h.toString(36)};
P.u={esc,shuffle,avg,fmtT,fmtD,num,hash};
})(window.POO=window.POO||{});
