/* PÁGINA · progreso.html — controlador: agrega estadísticas, ordena el ranking y gestiona copia de seguridad. */
(function(P){'use strict';
const main=P.layout.mount('dash',{title:'Progreso'}),R=P.records.state,{avg}=P.u;let sort='nota';
function model(){const rs=[...R.rec].sort((a,b)=>a.ts-b.ts),gp=r=>r.secs/r.n,by=P.stats.groupByKey(rs);
 return{R:rs,sort,sum:P.stats.summary(rs),units:P.bank.units.map(u=>({u,m:P.stats.mastery(u.id,R.fail)})),fails:P.stats.topFails(R.fail),
 cfgRows:Object.entries(by).sort((a,b)=>b[1].at(-1).ts-a[1].at(-1).ts).map(([key,v])=>{const g=v.map(r=>r.g);return{key,n:v.length,last:g.at(-1),best:Math.max(...g),avg:avg(g),fast:Math.min(...v.map(r=>r.secs)),t:P.stats.trend(g)}}),
 ranking:(sort==='nota'?[...rs].sort((a,b)=>b.g-a.g||a.secs-b.secs):rs.filter(r=>r.g>=5).sort((a,b)=>gp(a)-gp(b))).slice(0,10)}}
function render(){main.innerHTML=R.rec.length?P.views.progress.html(model()):P.views.progress.empty();
 const f=main.querySelector('#file');f.onchange=e=>{const file=e.target.files[0];e.target.value='';if(!file)return;
  file.text().then(t=>{if(P.backup.importJSON(t)){render();P.a11y.announce('Datos importados')}else P.a11y.announce('El archivo no es un progreso válido')})}}
main.onclick=async e=>{const d=e.target.closest('[data-a]')?.dataset;if(!d)return;
 if(d.a==='sort'){sort=d.v;render();P.a11y.focusEl(main.querySelector('#rk'))}
 else if(d.a==='exp'){P.download('progreso_simulacro_poo.json',P.backup.exportJSON());P.a11y.announce('Copia exportada')}
 else if(d.a==='imp')main.querySelector('#file').click();
 else if(d.a==='rst'&&await P.dialog.confirm('Borrar datos','Se borrarán todos los registros y las preguntas falladas. Esta acción no se puede deshacer.','Borrar')){P.records.reset();render();P.a11y.announce('Datos borrados')}};
render();P.a11y.focusHeading(main);
})(window.POO=window.POO||{});
