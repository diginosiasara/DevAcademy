/* DOMINIO · ajustes del simulacro (valores por defecto y normalización). La persistencia la hace core/prefs. */
(function(P){'use strict';
const DEF={n:15,mode:'examen',nivel:'mix',factor:1,fallas:false};
const load=()=>{const c={...DEF,...P.prefs.get('cfg',{})};c.units=new Set(Array.isArray(c.units)?c.units.filter(id=>P.bank.uMap[id]):P.bank.units.map(u=>u.id));return c};
const save=c=>P.prefs.set('cfg',{...c,units:[...c.units]});
P.settings={load,save};
})(window.POO=window.POO||{});
