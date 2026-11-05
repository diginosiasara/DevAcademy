/* UI · gráfico de línea SVG con alternativa textual (aria-label con todos los valores). */
(function(P){'use strict';
P.ui.chart=function(R,f,max,fm,label){const W=700,H=210,p=40,n=R.length,x=i=>n<2?W/2:p+i*(W-2*p)/(n-1),y=a=>H-p-a/max*(H-2*p);let g='';
 for(let k=0;k<=4;k++){const a=max*k/4;g+=`<line class="gl" x1="${p}" x2="${W-p}" y1="${y(a)}" y2="${y(a)}"/><text x="${p-6}" y="${y(a)+4}" text-anchor="end">${fm(a)}</text>`}
 const d=t=>new Date(t).toLocaleDateString('es-ES');
 return`<svg viewBox="0 0 ${W} ${H}" class="ch" role="img" aria-label="${P.u.esc(label)}: ${R.map(r=>fm(f(r))).join(', ')}"><g>${g}</g><polyline class="pl" points="${R.map((r,i)=>x(i)+','+y(f(r))).join(' ')}"/>${R.map((r,i)=>`<circle class="pt" cx="${x(i)}" cy="${y(f(r))}" r="4"><title>${fm(f(r))} · ${P.u.fmtD(r.ts)}</title></circle>`).join('')}<text x="${p}" y="${H-10}">${d(R[0].ts)}</text><text x="${W-p}" y="${H-10}" text-anchor="end">${d(R[n-1].ts)}</text></svg>`};
})(window.POO=window.POO||{});
