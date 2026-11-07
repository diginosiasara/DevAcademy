/* Módulo 5 · Polimorfismo (UF2404 · UD5) */
export default [
{ t:"Polimorfismo: concepto y tipos", min:7, src:"UF2404 · UD5 · 5.1 y 5.2", tags:["polimorfismo","sobrecarga","sobrescritura","genericidad"],
 s:"La capacidad de una entidad de referenciar elementos de distinto tipo.",
 sum:["Polimorfismo: un mismo nombre, varios comportamientos.","Tipos: sobrecarga, sobrescritura, variables polimórficas y genéricos.","Permite programar de forma general en vez de caso por caso."],
 h:`<h2 id="concepto">Concepto</h2><p>Es la capacidad de una entidad de referenciar elementos de distinto tipo en distintos instantes. Permite programar de forma general en lugar de específica, con código más limpio y reutilizable.</p>
<h2 id="tipos">Tipos de polimorfismo</h2><ul><li><strong>Sobrecarga (<em>overloading</em>, ad-hoc):</strong> un nombre de método con varias implementaciones que se distinguen por sus parámetros.</li><li><strong>Sobrescritura (<em>overriding</em>, de inclusión):</strong> la subclase redefine un método con la misma firma.</li><li><strong>Variables polimórficas (de asignación):</strong> una variable de un tipo referencia objetos de sus subtipos.</li><li><strong>Genericidad (paramétrico):</strong> clases y métodos parametrizados por tipo, como <code>List&lt;T&gt;</code>.</li></ul>
<pre><code>Persona p = new Profesor();     // variable polimórfica
Object o = p;                   // un Profesor también es un Object

static &lt;T&gt; T primero(java.util.List&lt;T&gt; l) { return l.get(0); }   // genérico</code></pre>`,
 q:["¿Qué es una variable polimórfica?","Una variable declarada con un tipo que puede referenciar objetos de cualquiera de sus subtipos."],
 ex:"Escribe un método imprimir(Object) y llámalo con un String, un Integer y un objeto tuyo." },
{ t:"Enlace estático y dinámico: sobrecarga y sobrescritura", min:8, src:"UF2404 · UD5 · 5.3 y 5.4", tags:["sobrecarga","sobrescritura","ligadura","override"],
 s:"Cuándo se decide qué método se ejecuta: en compilación o en ejecución.",
 sum:["La sobrecarga se resuelve en compilación (enlace estático).","La sobrescritura se resuelve en ejecución (ligadura dinámica).","La ligadura dinámica elige el método según la clase real del objeto."],
 h:`<h2 id="compilacion">Sobrecarga: tiempo de compilación</h2><p>Un mismo nombre con varias implementaciones; el compilador elige la correcta según el número y tipo de los argumentos (<em>enlace estático</em>).</p>
<pre><code>class Calculadora {
    int sumar(int a, int b) { return a + b; }
    double sumar(double a, double b) { return a + b; }
    int sumar(int a, int b, int c) { return a + b + c; }
}</code></pre>
<h2 id="ejecucion">Sobrescritura: tiempo de ejecución</h2><p>El método que se invoca depende de la <strong>clase real</strong> del objeto, no del tipo de la variable (<em>ligadura dinámica</em>).</p>
<pre><code>abstract class Figura { abstract double area(); }
class Circulo extends Figura {
    double r = 2;
    @Override double area() { return Math.PI * r * r; }
}
class Cuadrado extends Figura {
    double l = 3;
    @Override double area() { return l * l; }
}

Figura[] figuras = { new Circulo(), new Cuadrado() };
for (Figura f : figuras) System.out.println(f.area());   // cada una usa su versión</code></pre>
<div class="note"><strong>Ventaja:</strong> añadir una nueva figura no obliga a modificar el bucle.</div>`,
 q:["¿Cuándo se decide qué area() se ejecuta en el bucle?","En tiempo de ejecución, según la clase real de cada objeto."],
 ex:"Añade la clase Triangulo y comprueba que el bucle no necesita cambios." },
{ t:"Objetos polimórficos y comprobación de tipos", min:7, src:"UF2404 · UD5 · 5.5 y 5.6", tags:["instanceof","cast","tipado","polimorfismo"],
 s:"Comprobación estática y dinámica de tipos, instanceof y conversiones.",
 sum:["El compilador comprueba tipos estáticos; la JVM comprueba tipos reales.","instanceof pregunta por el tipo real; el cast convierte referencias.","Un cast incorrecto lanza ClassCastException."],
 h:`<h2 id="polimorficos">Objetos polimórficos</h2><p>Un objeto polimórfico puede verse bajo distintos tipos. Un <code>ProfesorGimnasia</code> es una forma de <code>Profesor</code>, de <code>Persona</code> y de <code>Object</code>.</p>
<h2 id="tipos">Comprobación estática y dinámica</h2><p>El <strong>tipo estático</strong> es el declarado en el código y lo comprueba el compilador; el <strong>tipo dinámico</strong> es la clase real del objeto en ejecución. Solo puedes llamar a los métodos que existan en el tipo estático.</p>
<pre><code>Persona p = new Profesor();
// p.corregirExamen();        // error: Persona no lo tiene
if (p instanceof Profesor) {
    Profesor pr = (Profesor) p;   // conversión descendente
    pr.corregirExamen();
}</code></pre>
<div class="note">Si usas muchos <code>instanceof</code> es señal de que el polimorfismo podría resolverlo mejor.</div>`,
 q:["¿Qué ocurre con un cast a un tipo incompatible?","Se lanza una ClassCastException en tiempo de ejecución."],
 ex:"Crea un array de Persona con alumnos y profesores y cuenta cuántos son profesores usando instanceof." }
];
