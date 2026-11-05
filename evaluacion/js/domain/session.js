/* DOMINIO · máquina de estados de un simulacro (serializable, reloj inyectado, sin DOM ni almacenamiento). */
(function(P){'use strict';
const SEC_PER_Q=72;
function prep(q){const ord=P.u.shuffle(q.o.map((_,i)=>i));return{...q,o:ord.map(i=>q.o[i]),c:ord.indexOf(q.c),a:null,hu:0,lock:false,flag:false,seen:false}}
function start(pool,{mode,desc,factor=1,now=Date.now()}){const qs=pool.map(prep),total=mode==='examen'?Math.round(qs.length*SEC_PER_Q*factor):0;
 return{phase:'run',mode,desc,qs,i:0,t0:now,total,deadline:total?now+total*1000:0,rec:null}}
const left=(s,now=Date.now())=>s.total?Math.max(0,Math.ceil((s.deadline-now)/1000)):null;
const select=(s,i,j)=>{const q=s.qs[i];if(!q.lock)q.a=j};
const check=(s,i)=>{const q=s.qs[i];if(q.a!=null&&s.mode==='practica')q.lock=true};
const hint=(s,i)=>{const q=s.qs[i];if(s.mode==='practica'&&!q.lock&&q.hu<q.h.length)q.hu++};
const flag=(s,i)=>{s.qs[i].flag=!s.qs[i].flag;return s.qs[i].flag};
const goto=(s,i)=>{s.i=Math.max(0,Math.min(s.qs.length-1,i))};
const unanswered=s=>s.qs.filter(q=>!P.scoring.answered(q)).length;
const finish=(s,fail,now=Date.now())=>{if(s.phase==='res')return s;s.phase='res';
 const n=s.qs.length,g=P.scoring.grade(s.qs),secs=Math.max(1,Math.round((now-s.t0)/1000));
 s.qs.forEach(q=>{if(!q.seen&&!P.scoring.answered(q))return;const e=fail[q.k]||(fail[q.k]={f:0,a:0,ok:0,l:0,b:0});e.a++;e.l=now;
  if(!P.scoring.answered(q))e.b++;P.scoring.correct(q)?e.ok++:e.f++});
 s.g=g;s.secs=secs;s.rec={ts:now,g,secs,n,ok:s.qs.filter(P.scoring.correct).length,mode:s.mode,desc:s.desc,key:`${s.mode==='examen'?'Examen':'Práctica'} · ${n} preguntas · ${s.desc}`};return s};
P.session={SEC_PER_Q,start,left,select,check,hint,flag,goto,unanswered,finish};
})(window.POO=window.POO||{});
