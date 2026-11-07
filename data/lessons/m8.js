/* Módulo 8 · Lenguajes orientados a objetos (UF2404 · UD8) */
export default [
{ t:"Lenguajes orientados a objetos: tipos y comparación", min:8, src:"UF2404 · UD8 · 8.1 y 8.2", tags:["Java","C++","C#","Python","PHP","lenguajes"],
 s:"Orientados, basados en objetos y que utilizan objetos; comparación de los lenguajes más habituales.",
 sum:["No todos los lenguajes con objetos son orientados a objetos.","Cambian el tipado, la herencia múltiple y la gestión de memoria.","Los conceptos del curso se aplican en todos ellos."],
 h:`<h2 id="tipos">Tres categorías</h2><ul><li><strong>Orientados a objetos:</strong> clases, herencia y polimorfismo (Java, C++, C#, Smalltalk, Eiffel).</li><li><strong>Basados en objetos:</strong> tienen objetos y encapsulación pero no herencia completa.</li><li><strong>Que utilizan objetos:</strong> ofrecen objetos como librería, sin que el lenguaje sea OO.</li></ul>
<h2 id="comparacion">Comparación</h2><div class="scroll"><table><caption class="sr">Comparación de lenguajes OO</caption><thead><tr><th scope="col">Lenguaje</th><th scope="col">Tipado</th><th scope="col">Herencia</th><th scope="col">Memoria</th></tr></thead><tbody>
<tr><th scope="row">Java</th><td>Estático</td><td>Simple + interfaces</td><td>Recolector de basura</td></tr>
<tr><th scope="row">C++</th><td>Estático</td><td>Múltiple</td><td>Manual (destructores)</td></tr>
<tr><th scope="row">C#</th><td>Estático</td><td>Simple + interfaces</td><td>Recolector de basura</td></tr>
<tr><th scope="row">Python</th><td>Dinámico</td><td>Múltiple</td><td>Recolector de basura</td></tr>
<tr><th scope="row">PHP</th><td>Dinámico (con tipos opcionales)</td><td>Simple + interfaces y traits</td><td>Recolector de basura</td></tr></tbody></table></div>
<h2 id="librerias">Librerías de clases</h2><p>Un lenguaje OO viene con una biblioteca de clases (en Java, las del paquete <code>java.lang</code>, <code>java.util</code>, <code>java.io</code>…). Conocerlas evita reinventar la rueda.</p>
<div class="note">Con el tiempo se unificaron las notaciones de Booch, Rumbaugh y Jacobson en <strong>UML</strong>, el lenguaje estándar de modelado.</div>`,
 q:["¿Cuál de los lenguajes de la tabla permite herencia múltiple de clases?","C++ y Python."],
 ex:"Traduce a Python la clase Coche de la lección de clases y anota qué cambia." }
];
