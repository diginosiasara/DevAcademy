/* UI · componentes de presentación reutilizables (devuelven HTML escapado). */
(function(P){'use strict';
const {esc}=P.u,cls=uf=>uf==='UF2405'?'a':'b';
const ufBadge=uf=>`<span class="badge ${cls(uf)}">${esc(uf)}</span>`;
const bar=(pct,label)=>`<div class="prog" role="img" aria-label="${esc(label)}"><i style="width:${Math.round(pct*100)}%"></i></div>`;
const ring=(pct,txt,label,s=64)=>{const r=26,c=2*Math.PI*r,p=pct==null?0:Math.max(0,Math.min(1,pct));return`<svg class="ring" width="${s}" height="${s}" viewBox="0 0 64 64" role="img" aria-label="${esc(label)}"><circle cx="32" cy="32" r="${r}" class="rt"/>${p?`<circle cx="32" cy="32" r="${r}" class="rv" stroke-dasharray="${(c*p).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 32 32)"/>`:''}<text x="32" y="37" text-anchor="middle">${esc(txt)}</text></svg>`};
const table=(cap,heads,rows)=>`<div class="tw"><table><caption>${esc(cap)}</caption><thead><tr>${heads.map(h=>`<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows||`<tr><td colspan="${heads.length}">Sin datos todavía.</td></tr>`}</tbody></table></div>`;
const level=(q,rec)=>`<span class="badge" style="color:var(--mute)">Dificultad: ${P.diff.LV[P.diff.level(q,rec)-1]}</span>`;
const tag=(q,rec)=>`<p class="m">${ufBadge(q.uf)} ${esc(q.unit.split('-')[1])} · ${esc(q.tema)} ${level(q,rec)}</p>`;
P.ui={icon:P.icons.icon,cls,ufBadge,bar,ring,table,tag};
})(window.POO=window.POO||{});
