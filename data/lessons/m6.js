/* Módulo 6 · Técnicas de programación estructurada (UF2404 · UD6) */
export default [
{ t:"Elementos básicos y estructuras de control", min:8, src:"UF2404 · UD6 · 6.1 y 6.2", tags:["variables","constantes","operadores","if","for"],
 s:"Constantes, variables, operadores, expresiones y las tres estructuras de control.",
 sum:["Las variables guardan datos; las constantes (final) no cambian.","Tres estructuras: secuencial, condicional y de repetición.","Se usan dentro de los métodos de las clases."],
 h:`<h2 id="elementos">Elementos básicos</h2><p>Una <strong>variable</strong> es un espacio con nombre y tipo que guarda un valor; una <strong>constante</strong> no cambia (<code>final</code> en Java). Los <strong>operadores</strong> (aritméticos, relacionales, lógicos) se combinan en <strong>expresiones</strong>.</p>
<pre><code>final double IVA = 0.21;
int unidades = 3;
double total = unidades * 10.0 * (1 + IVA);
boolean grande = total &gt; 30 &amp;&amp; unidades &gt;= 2;</code></pre>
<h2 id="control">Estructuras de control</h2><ul><li><strong>Secuencial:</strong> instrucciones una tras otra.</li><li><strong>Condicional:</strong> <code>if / else</code> y <code>switch</code>.</li><li><strong>Repetición:</strong> <code>for</code>, <code>while</code>, <code>do-while</code>.</li></ul>
<pre><code>int suma = 0;
for (int i = 1; i &lt;= 10; i++) {
    if (i % 2 == 0) continue;     // salta los pares
    suma += i;
}
System.out.println(suma);          // 25</code></pre>`,
 q:["¿Qué estructura usarías para repetir mientras se cumple una condición?","while (o do-while si debe ejecutarse al menos una vez)."],
 ex:"Escribe un bucle que imprima la tabla de multiplicar del 7." },
{ t:"Funciones, procedimientos y paso de parámetros", min:8, src:"UF2404 · UD6 · 6.3 a 6.5", tags:["función","parámetros","por valor","ámbito","return"],
 s:"Valor de retorno, parámetros formales y actuales, ámbito y el paso por valor de Java.",
 sum:["Una función devuelve un valor; un procedimiento (void) no.","Java siempre pasa los argumentos por valor.","Con objetos se copia la referencia, no el objeto."],
 h:`<h2 id="funciones">Funciones y procedimientos</h2><p>Una <strong>función</strong> devuelve un valor (<code>return</code>); un <strong>procedimiento</strong> no devuelve nada (<code>void</code>). Los <strong>parámetros formales</strong> están en la declaración; los <strong>actuales</strong> son los valores con los que se llama.</p>
<h2 id="ambito">Ámbito de las variables</h2><p>Una variable local solo existe dentro del bloque donde se declara; los atributos existen mientras exista el objeto.</p>
<h2 id="valor">Por valor y por referencia</h2><p>En Java el paso es <strong>siempre por valor</strong>, pero con objetos lo que se copia es la <em>referencia</em>: ambas referencias apuntan al mismo objeto. Por eso modificar el objeto dentro del método se ve fuera, pero reasignar la referencia no.</p>
<pre><code>static void cambiar(int n) { n = 99; }                  // no afecta fuera
static void renombrar(Persona p) { p.nombre = "Ana"; }  // sí afecta al objeto
static void reasignar(Persona p) { p = new Persona(); }  // no afecta fuera

int x = 5; cambiar(x);            // x sigue valiendo 5</code></pre>
<p>Dentro de una clase, las llamadas pueden ser <em>cualificadas</em> (<code>otro.metodo()</code>) o no cualificadas (<code>metodo()</code>, sobre la instancia actual).</p>`,
 q:["Si un método reasigna su parámetro objeto, ¿cambia la variable del llamador?","No: se pasó una copia de la referencia, y reasignarla no afecta a la original."],
 ex:"Escribe un método intercambiar(int a, int b) y comprueba por qué no puede intercambiar las variables del llamador." }
];
