/* DOMINIO · reglas de puntuación: acierto +1, fallo −1/3, blanco 0, pista −0,1. */
(function(P){'use strict';
const HINT=0.1,WRONG=-1/3;
const answered=q=>q.a!=null,correct=q=>q.a===q.c;
const score=q=>!answered(q)?0:correct(q)?Math.max(.7,1-HINT*q.hu):WRONG;
const status=q=>!answered(q)?'sk':correct(q)?'ok':'no';
const grade=qs=>Math.max(0,Math.round(qs.reduce((s,q)=>s+score(q),0)/qs.length*100)/10);
const verdict=g=>g<5?'Insuficiente':g<6?'Suficiente':g<7?'Bien':g<9?'Notable':'Sobresaliente';
P.scoring={HINT,WRONG,answered,correct,score,status,grade,verdict};
})(window.POO=window.POO||{});
