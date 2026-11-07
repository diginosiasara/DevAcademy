/* Módulo 4 · Relaciones entre clases (UF2404 · UD4) */
export default [
{ t:"Asociación, agregación y composición", min:8, src:"UF2404 · UD4 · 4.1 y 4.3", tags:["asociación","agregación","composición","UML"],
 s:"Los tres tipos de relación «tiene-un» y cómo representarlos.",
 sum:["Asociación: una clase usa o conoce a otra.","Agregación: «todo-parte» donde la parte puede existir sola.","Composición: la parte no existe sin el todo."],
 h:`<h2 id="clase">Las clases no viven solas</h2><p>La clase es el eje de la modularidad, pero un sistema real se forma de clases <em>relacionadas</em>. Según Booch, los tipos de relación entre clases son asociación, herencia, agregación, uso, instanciación y metaclase.</p>
<h2 id="asociacion">Asociación</h2><p>Una clase mantiene una referencia a otra para colaborar. Tiene <strong>multiplicidad</strong>: un cliente tiene 0..n pedidos; un pedido pertenece a 1 cliente.</p>
<h2 id="agregacion">Agregación y composición</h2><div class="scroll"><table><caption class="sr">Agregación y composición</caption><thead><tr><th scope="col"></th><th scope="col">Agregación</th><th scope="col">Composición</th></tr></thead><tbody><tr><th scope="row">Dependencia de vida</th><td>La parte existe sin el todo</td><td>La parte muere con el todo</td></tr><tr><th scope="row">Ejemplo</th><td>Equipo y jugadores</td><td>Casa y habitaciones</td></tr><tr><th scope="row">UML</th><td>Rombo vacío</td><td>Rombo relleno</td></tr></tbody></table></div>
<pre><code>class Motor { }
class Rueda { }
class Coche {
    private final Motor motor = new Motor();       // composición
    private java.util.List&lt;Rueda&gt; ruedas;          // agregación
    Coche(java.util.List&lt;Rueda&gt; ruedas) { this.ruedas = ruedas; }
}</code></pre>`,
 q:["¿Qué diferencia agregación de composición?","En la composición la parte no puede existir sin el todo; en la agregación sí."],
 ex:"Clasifica como asociación, agregación o composición: Universidad–Facultad, Factura–Líneas, Profesor–Asignatura." },
{ t:"Generalización o composición: elegir bien", min:6, src:"UF2404 · UD4 · 4.2", tags:["generalización","especialización","composición","diseño"],
 s:"Cuándo usar herencia («es-un») y cuándo composición («tiene-un»).",
 sum:["Generalización/especialización = herencia («es-un»).","Composición/agregación = «tiene-un».","Regla práctica: prefiere composición si dudas."],
 h:`<h2 id="diferencia">Dos preguntas, dos relaciones</h2><p>Pregúntate: ¿<em>A es un B</em>? Entonces hay <strong>generalización/especialización</strong> y puedes usar herencia. ¿<em>A tiene un B</em>? Entonces hay <strong>composición o agregación</strong> y A guarda una referencia a B.</p>
<h2 id="ejemplo">Mal y bien</h2><pre><code>// Mal: un Coche NO es un Motor
class Coche extends Motor { }

// Bien: un Coche TIENE un Motor
class Coche {
    private Motor motor;
}</code></pre>
<h2 id="consejo">Composición sobre herencia</h2><p>La herencia acopla fuertemente la subclase a la superclase. La composición permite cambiar piezas en tiempo de ejecución (un coche puede cambiar de motor) y es más flexible. Usa herencia para especializar tipos y composición para reutilizar comportamiento.</p>`,
 q:["¿Un Pedido «es un» Cliente o «tiene un» Cliente?","Tiene un Cliente: es una relación de composición/asociación, no de herencia."],
 ex:"Rediseña Pila extends ArrayList para usar composición. ¿Qué ventajas obtienes?" }
];
