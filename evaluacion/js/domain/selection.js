/* DOMINIO · selección de preguntas a partir de los ajustes. */
(function(P){'use strict';
const base=(cfg,fail)=>cfg.fallas?P.stats.failedItems(fail):P.bank.inUnits(cfg.units);
const available=(cfg,fail)=>base(cfg,fail).length;
function pool(cfg,fail){let c=P.u.shuffle(base(cfg,fail));
 if(cfg.nivel!=='mix')c.sort((a,b)=>Math.abs(P.diff.eff(a,fail[a.k])-cfg.nivel)-Math.abs(P.diff.eff(b,fail[b.k])-cfg.nivel));
 return cfg.n?c.slice(0,cfg.n):c}
const describe=cfg=>cfg.fallas?'Más falladas':cfg.units.size===P.bank.units.length?'Todas las unidades':cfg.units.size+' unidades';
const options=cfg=>({mode:cfg.mode,desc:describe(cfg),factor:cfg.factor});
P.selection={available,pool,describe,options};
})(window.POO=window.POO||{});
