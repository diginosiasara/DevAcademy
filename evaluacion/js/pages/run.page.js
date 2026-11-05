/* PÁGINA · simulacro.html — controlador: traduce eventos a la sesión, la persiste y gestiona el cronómetro. */
(function(P){'use strict';
const main=P.layout.mount('run',{compact:true,title:'Simulacro en curso'}),s=P.runstore.load();
if(!s){P.routes.go('config');return}
const R=P.records.state,sc=P.scoring,V=P.views.run,persist=()=>P.runstore.save(s);
function finish(){P.clock.stop();P.session.finish(s,R.fail);P.records.add(s.rec);P.runstore.saveResult(s);P.runstore.clear();P.routes.go('results')}
async function end(){const u=P.session.unanswered(s);
 if(!u||await P.dialog.confirm('Finalizar simulacro',`Te quedan ${u} sin responder. ¿Finalizar?`,'Finalizar'))finish()}
function tick(){const t=P.session.left(s),el=main.querySelector('#tm');if(t==null)return;
 if(el){el.textContent=P.u.fmtT(t);el.closest('.timer').classList.toggle('low',t<60)}
 if(t===300||t===60)P.a11y.announce(`Quedan ${t/60} ${t>60?'minutos':'minuto'}`);
 if(t<=0){P.a11y.announce('Tiempo agotado. Se muestran los resultados.');finish()}}
function render(focus=true){const q=s.qs[s.i];q.seen=true;persist();main.innerHTML=V.html({s,fail:R.fail});if(focus)P.a11y.focusEl(main.querySelector('#qtxt'))}
main.onchange=e=>{if(e.target.name!=='o')return;const q=s.qs[s.i];P.session.select(s,s.i,+e.target.value);persist();
 main.querySelector('#cnt').textContent=`${s.qs.filter(sc.answered).length} respondidas`;
 const d=main.querySelectorAll('.qd')[s.i];d.classList.add('ans');d.setAttribute('aria-label',V.dotLabel(q,s.i));
 const c=main.querySelector('[data-a=check]');if(c)c.disabled=false};
main.onclick=e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,q=s.qs[s.i];
 if(a==='j')P.session.goto(s,+b.dataset.v);else if(a==='prev')P.session.goto(s,s.i-1);
 else if(a==='flag'){const f=P.session.flag(s,s.i);P.a11y.announce(f?'Pregunta marcada':'Marca quitada');render(false);return P.a11y.focusEl(main.querySelector('[data-a=flag]'))}
 else if(a==='hint'){P.session.hint(s,s.i);render(false);return P.a11y.focusEl(main.querySelector('#hints p:last-child'))}
 else if(a==='check'){P.session.check(s,s.i);render(false);P.a11y.announce(sc.correct(q)?'Correcto':'Incorrecto. Revisa la explicación');return P.a11y.focusEl(main.querySelector('#fb'))}
 else if(a==='next'){if(s.i<s.qs.length-1)P.session.goto(s,s.i+1);else return end()}
 else if(a==='end')return end();
 render()};
if(s.total&&P.session.left(s)<=0)finish();else{render(false);if(s.total)P.clock.start(tick)}
})(window.POO=window.POO||{});
